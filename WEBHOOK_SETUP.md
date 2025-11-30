# Setting Up Supabase Webhook for Google Sheets Integration

This guide explains how to set up a webhook in Supabase to automatically send lead data to Google Sheets when a new lead is submitted.

## Prerequisites

- Supabase project set up
- Google Sheets integration configured (see GOOGLE_SHEETS_SETUP.md)
- Edge Function deployed

## Option 1: Using Supabase Database Webhooks (Recommended)

### Step 1: Deploy the Edge Function

First, deploy the Google Sheets Edge Function:

```bash
cd monexa-credit-growth

# Login to Supabase (if not already logged in)
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Deploy the function
supabase functions deploy send-to-google-sheets
```

### Step 2: Set Up Secrets

Set the required secrets for the Edge Function:

```bash
# Set Google Service Account Key
supabase secrets set GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'

# Set Google Spreadsheet ID
supabase secrets set GOOGLE_SPREADSHEET_ID='your-spreadsheet-id'
```

### Step 3: Create Database Webhook via Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to "Database" > "Webhooks"
3. Click "Create a new webhook"
4. Configure the webhook:
   - **Name**: `send-lead-to-google-sheets`
   - **Table**: `funding_leads`
   - **Events**: Check "Insert"
   - **Type**: `HTTP Request`
   - **Method**: `POST`
   - **URL**: `https://your-project-ref.supabase.co/functions/v1/send-to-google-sheets`
   - **HTTP Headers**:
     ```
     Authorization: Bearer YOUR_ANON_KEY
     Content-Type: application/json
     ```
5. Click "Create webhook"

### Step 4: Get Your Function URL

Your Edge Function URL format:
```
https://[PROJECT_REF].supabase.co/functions/v1/send-to-google-sheets
```

Replace `[PROJECT_REF]` with your actual project reference.

### Step 5: Test the Webhook

1. Submit a test lead through your form
2. Check the Google Sheet to verify the data was added
3. Check Edge Function logs in Supabase dashboard under "Edge Functions" > "Logs"

## Option 2: Using Database Triggers (Alternative)

If you prefer using database triggers instead of webhooks, apply the migration:

```bash
# This migration is already created in your migrations folder
supabase db push
```

Note: This method requires the `http` extension and proper configuration.

## Monitoring and Debugging

### View Edge Function Logs

```bash
# View real-time logs
supabase functions logs send-to-google-sheets

# Or view in the dashboard
# Go to Edge Functions > send-to-google-sheets > Logs
```

### Test the Edge Function Directly

You can test the function directly using curl:

```bash
curl -L -X POST 'https://[PROJECT_REF].supabase.co/functions/v1/send-to-google-sheets' \
  -H 'Authorization: Bearer [YOUR_ANON_KEY]' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "record": {
      "id": "test-id",
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

## Troubleshooting

### Webhook not triggering

1. Check that the webhook is enabled in Supabase dashboard
2. Verify the table name is correct (`funding_leads`)
3. Ensure the event type is set to "Insert"

### Edge Function errors

1. Check function logs for detailed error messages
2. Verify secrets are set correctly:
   ```bash
   supabase secrets list
   ```
3. Ensure Google Service Account has access to the sheet
4. Verify the spreadsheet ID is correct

### Authentication errors

1. Check that the Authorization header includes your anon key
2. Verify the function URL is correct
3. Ensure the function is deployed

## Security Considerations

- Use Supabase secrets for sensitive data (Google credentials)
- Never expose service account keys in client-side code
- Use Row Level Security (RLS) policies on your tables
- Rotate service account keys regularly
- Monitor function logs for suspicious activity

## Local Development

For local testing:

```bash
# Start Supabase locally
supabase start

# Deploy function locally
supabase functions serve send-to-google-sheets

# In another terminal, trigger the function
curl -L -X POST 'http://localhost:54321/functions/v1/send-to-google-sheets' \
  -H 'Authorization: Bearer [LOCAL_ANON_KEY]' \
  --data-raw '{"record": {...}}'
```

