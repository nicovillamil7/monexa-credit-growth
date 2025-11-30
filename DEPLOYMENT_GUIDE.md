# Deployment Guide

This guide walks through deploying the universal form system with Google Sheets integration.

## Prerequisites

- Supabase CLI installed (`npm install -g supabase`)
- Supabase account and project
- Google Cloud account (for Sheets integration)
- Node.js and npm installed

## Step 1: Database Migrations

Apply the database migrations to update the schema:

```bash
cd monexa-credit-growth

# Login to Supabase
supabase login

# Link to your project (if not already linked)
supabase link --project-ref YOUR_PROJECT_REF

# Apply migrations
supabase db push
```

This will:
- Make funding fields nullable in `funding_leads` table
- Add service type constraints
- Set up validation constraints

Verify migrations:
```bash
supabase db remote
```

## Step 2: Google Cloud Setup

Follow the detailed instructions in `GOOGLE_SHEETS_SETUP.md`:

1. Create Google Cloud Project
2. Enable Google Sheets API
3. Create Service Account
4. Generate credentials JSON
5. Create Google Sheet with proper columns
6. Share sheet with service account

## Step 3: Deploy Edge Function

Deploy the Google Sheets Edge Function:

```bash
# Deploy the function
supabase functions deploy send-to-google-sheets
```

## Step 4: Set Secrets

Set the required secrets for the Edge Function:

```bash
# Set Google Service Account credentials
# Replace with your actual service account JSON
supabase secrets set GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"your-project",...}'

# Set Spreadsheet ID
# Get this from your Google Sheet URL
supabase secrets set GOOGLE_SPREADSHEET_ID='your-spreadsheet-id-here'
```

Verify secrets:
```bash
supabase secrets list
```

## Step 5: Set Up Webhook

### Option A: Via Supabase Dashboard (Recommended)

1. Go to your Supabase Dashboard
2. Navigate to Database > Webhooks
3. Click "Create a new webhook"
4. Configure:
   - **Name**: `send-lead-to-google-sheets`
   - **Table**: `funding_leads`
   - **Events**: Check "Insert"
   - **Type**: HTTP Request
   - **Method**: POST
   - **URL**: `https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-to-google-sheets`
   - **HTTP Headers**:
     ```
     Authorization: Bearer YOUR_ANON_KEY
     Content-Type: application/json
     ```
5. Click "Create webhook"

### Option B: Via Database Trigger (Alternative)

The migration file `20251130000001_add_google_sheets_webhook.sql` includes a trigger setup. 

Note: This requires the `http` extension which may not be available in all Supabase plans.

## Step 6: Deploy Frontend

### For Development

```bash
npm run dev
```

### For Production (Lovable/Lovable.dev)

If using Lovable.dev:
1. Push your changes to the repository
2. Lovable will automatically deploy

If self-hosting:
```bash
# Build the application
npm run build

# Preview the build
npm run preview

# Or deploy to your hosting provider
# (Vercel, Netlify, etc.)
```

## Step 7: Testing

### Test Database Connection

```bash
# Test inserting a record manually
supabase db remote commit

# In Supabase SQL Editor, run:
INSERT INTO funding_leads (
  service_type,
  first_name,
  last_name,
  email,
  phone,
  credit_score,
  credit_profile,
  terms_accepted
) VALUES (
  'credit-repair',
  'Test',
  'User',
  'test@example.com',
  '1234567890',
  '650-710',
  ARRAY['clean'],
  true
);
```

### Test Edge Function

```bash
# Test the Edge Function directly
curl -L -X POST 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-to-google-sheets' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "record": {
      "id": "test-123",
      "service_type": "credit-repair",
      "first_name": "Test",
      "last_name": "User",
      "email": "test@example.com",
      "phone": "1234567890",
      "credit_score": "650-710",
      "credit_profile": ["clean"],
      "terms_accepted": true,
      "created_at": "2025-11-30T00:00:00Z"
    }
  }'
```

### Test Full Integration

1. Open your deployed application
2. Navigate to `/apply`
3. Fill out and submit the form
4. Verify:
   - ✅ Success message appears
   - ✅ Data appears in Supabase `funding_leads` table
   - ✅ Data appears in Google Sheet
   - ✅ No errors in browser console
   - ✅ No errors in Edge Function logs

## Step 8: Monitoring

### View Edge Function Logs

Via CLI:
```bash
supabase functions logs send-to-google-sheets
```

Via Dashboard:
1. Go to Edge Functions
2. Click on `send-to-google-sheets`
3. View logs tab

### Monitor Database

1. Go to Supabase Dashboard
2. Navigate to Table Editor
3. Select `funding_leads` table
4. Monitor new submissions

### Monitor Google Sheets

1. Open your Google Sheet
2. Watch for new rows being added
3. Verify data formatting

## Environment Variables

Make sure these are set in your environment:

### Supabase Secrets (for Edge Functions)
- `GOOGLE_SERVICE_ACCOUNT_KEY` - Google service account JSON
- `GOOGLE_SPREADSHEET_ID` - Google Sheet ID

### Frontend Environment Variables (if needed)
Create `.env.local`:
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Rollback Procedure

If you need to rollback the changes:

### Rollback Database

```bash
# Create a rollback migration
supabase migration new rollback_form_changes

# Edit the new migration file to reverse changes
# Then apply:
supabase db push
```

### Rollback Edge Function

```bash
# Delete the Edge Function
supabase functions delete send-to-google-sheets
```

### Rollback Frontend

```bash
# Revert to previous commit
git revert HEAD
git push
```

## Troubleshooting

### Issue: Migrations fail

**Solution:**
- Check if migrations have already been applied
- Verify database connection
- Check for conflicting migrations
- Review error messages in terminal

### Issue: Edge Function deployment fails

**Solution:**
- Verify Supabase CLI is up to date: `npm install -g supabase@latest`
- Check project is linked: `supabase link --project-ref YOUR_REF`
- Verify function code has no syntax errors
- Check Supabase project status

### Issue: Secrets not working

**Solution:**
- Verify secrets are set: `supabase secrets list`
- Ensure JSON is properly escaped
- Check secret names match exactly
- Redeploy function after setting secrets

### Issue: Webhook not triggering

**Solution:**
- Verify webhook is enabled in dashboard
- Check webhook URL is correct
- Verify Authorization header includes anon key
- Check Edge Function is deployed
- Review webhook logs in dashboard

### Issue: Google Sheets not updating

**Solution:**
- Verify service account has Editor access to sheet
- Check spreadsheet ID is correct
- Review Edge Function logs for errors
- Test Edge Function directly with curl
- Verify Google Sheets API is enabled

### Issue: Form validation errors

**Solution:**
- Check browser console for errors
- Verify all required fields are filled
- Check network tab for failed requests
- Review form schema in LeadSubmissionForm.tsx

## Security Checklist

Before going to production:

- [ ] Row Level Security (RLS) enabled on `funding_leads` table
- [ ] Insert policy allows anonymous users to submit leads
- [ ] Select policy restricted to authenticated users only
- [ ] Supabase anon key is safe to expose (read-only with RLS)
- [ ] Google service account credentials stored in Supabase secrets (not in code)
- [ ] Service account has minimum required permissions
- [ ] Spreadsheet is shared only with service account (not public)
- [ ] HTTPS enabled for all endpoints
- [ ] Rate limiting configured for form submissions
- [ ] Input validation on both frontend and backend
- [ ] Sensitive data handled according to privacy policy

## Performance Optimization

- Form uses debouncing for service type changes
- Lazy loading of form steps
- Optimized validation (per-step instead of full form)
- Async Google Sheets writes (non-blocking)
- Database indexes on commonly queried fields

## Support

For deployment issues:
1. Check this guide
2. Review error logs (browser console, Edge Function logs, database logs)
3. Consult Supabase documentation
4. Review Google Cloud console for API issues

## Post-Deployment

After successful deployment:
1. ✅ Test all form flows (Credit Repair and Get Funded)
2. ✅ Verify data in database
3. ✅ Verify data in Google Sheets
4. ✅ Monitor for errors in first 24 hours
5. ✅ Set up alerts for Edge Function failures
6. ✅ Document any environment-specific configurations
7. ✅ Update team on new form system
8. ✅ Create backup of Google Sheet
9. ✅ Schedule regular review of leads
10. ✅ Set up analytics tracking (optional)

