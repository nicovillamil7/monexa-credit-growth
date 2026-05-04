import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return ''
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    if (!supabaseUrl || !serviceRoleKey) throw new Error('Supabase config missing')

    const notificationEmail = Deno.env.get('NOTIFICATION_EMAIL')
    if (!notificationEmail) throw new Error('NOTIFICATION_EMAIL is not configured')

    const body = await req.json().catch(() => ({}))
    const leadId: string | undefined = body?.leadId || body?.lead?.id
    if (!leadId || typeof leadId !== 'string') {
      return new Response(JSON.stringify({ success: false, error: 'leadId required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Lookup the lead from DB using service role — prevents fabricated data
    const supabase = createClient(supabaseUrl, serviceRoleKey)
    const { data: lead, error: fetchError } = await supabase
      .from('funding_leads')
      .select('*')
      .eq('id', leadId)
      .maybeSingle()

    if (fetchError || !lead) {
      return new Response(JSON.stringify({ success: false, error: 'Lead not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const serviceLabels: Record<string, string> = {
      'credit-optimization': 'Credit Optimization',
      'personal-loans': 'Personal Loans',
      'credit-cards': 'Credit Cards',
      'trade-line': 'Trade Line',
      'get-funded': 'Business Funding',
    }

    const serviceName = serviceLabels[lead.service_type as string] || lead.service_type || 'Not specified'

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
          .header { background: #1a1a2e; padding: 24px; text-align: center; }
          .header h1 { color: #d4af37; margin: 0; font-size: 22px; }
          .body { padding: 24px; }
          .field { margin-bottom: 12px; }
          .label { font-weight: bold; color: #555; font-size: 13px; text-transform: uppercase; }
          .value { color: #1a1a2e; font-size: 15px; margin-top: 2px; }
          .divider { border-top: 1px solid #eee; margin: 16px 0; }
          .footer { background: #f9f9f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 New Lead Submitted</h1>
          </div>
          <div class="body">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${escapeHtml(lead.first_name)} ${escapeHtml(lead.last_name)}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value">${escapeHtml(lead.email)}</div>
            </div>
            <div class="field">
              <div class="label">Phone</div>
              <div class="value">${escapeHtml(lead.phone)}</div>
            </div>
            <div class="divider"></div>
            <div class="field">
              <div class="label">Service Requested</div>
              <div class="value">${escapeHtml(serviceName)}</div>
            </div>
            ${lead.credit_score ? `
            <div class="field">
              <div class="label">Credit Score</div>
              <div class="value">${escapeHtml(lead.credit_score)}</div>
            </div>` : ''}
            ${lead.funding_goal ? `
            <div class="field">
              <div class="label">Funding Goal</div>
              <div class="value">$${Number(lead.funding_goal).toLocaleString()}</div>
            </div>` : ''}
            ${lead.applicant_type ? `
            <div class="field">
              <div class="label">Applicant Type</div>
              <div class="value">${escapeHtml(lead.applicant_type)}</div>
            </div>` : ''}
            ${lead.yearly_revenue ? `
            <div class="field">
              <div class="label">Yearly Revenue</div>
              <div class="value">${escapeHtml(lead.yearly_revenue)}</div>
            </div>` : ''}
            ${Array.isArray(lead.credit_profile) && lead.credit_profile.length > 0 ? `
            <div class="field">
              <div class="label">Credit Profile</div>
              <div class="value">${escapeHtml(lead.credit_profile.join(', '))}</div>
            </div>` : ''}
          </div>
          <div class="footer">
            Monexa Lead Notification &bull; ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </body>
      </html>
    `

    const messageId = `lead-notification-${lead.id}`

    const { error: enqueueError } = await supabase.rpc('enqueue_email', {
      queue_name: 'transactional_emails',
      payload: {
        message_id: messageId,
        to: notificationEmail,
        subject: `New Lead: ${lead.first_name} ${lead.last_name} - ${serviceName}`,
        html: html,
        from_name: 'Monexa Notifications',
        reply_to: lead.email,
      },
    })

    if (enqueueError) {
      console.error('Failed to enqueue email:', enqueueError)
      throw new Error('Failed to enqueue notification')
    }

    return new Response(JSON.stringify({ success: true, message_id: messageId }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in send-lead-notification:', error)
    return new Response(JSON.stringify({ success: false, error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
