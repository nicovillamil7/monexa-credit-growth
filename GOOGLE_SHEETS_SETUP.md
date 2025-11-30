# Google Sheets Integration Setup Guide

This guide walks you through setting up Google Sheets integration for lead tracking in Monexa.

## Prerequisites

- Google Account
- Access to Google Cloud Console
- Supabase project with CLI installed

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter project name: "Monexa Leads Integration"
5. Click "Create"

## Step 2: Enable Google Sheets API

1. In your Google Cloud project, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Enter the following details:
   - Service account name: `monexa-sheets-service`
   - Service account ID: `monexa-sheets-service` (auto-generated)
   - Description: "Service account for writing leads to Google Sheets"
4. Click "Create and Continue"
5. Skip the optional steps (no roles needed for Sheets)
6. Click "Done"

## Step 4: Generate Service Account Key

1. In the "Credentials" page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Select "JSON" format
6. Click "Create"
7. Save the downloaded JSON file securely (DO NOT commit to git)

## Step 5: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: "Monexa Leads"
4. Set up the following columns in the first row:
   - A1: Timestamp
   - B1: Service Type
   - C1: First Name
   - D1: Last Name
   - E1: Email
   - F1: Phone
   - G1: Credit Score
   - H1: Credit Profile
   - I1: Funding Goal
   - J1: Applicant Type
   - K1: Yearly Revenue
   - L1: Terms Accepted
5. Copy the spreadsheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
   - Example: If URL is `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   - Your ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Step 6: Share Sheet with Service Account

1. In your Google Sheet, click "Share" button
2. Paste the service account email (found in the JSON key file, looks like `monexa-sheets-service@project-id.iam.gserviceaccount.com`)
3. Give it "Editor" access
4. Uncheck "Notify people"
5. Click "Share"

## Step 7: Configure Supabase Secrets

You need to store the Google credentials as Supabase secrets:

```bash
# Navigate to your Supabase project directory
cd monexa-credit-growth

# Set the service account credentials (copy the entire JSON content)
supabase secrets set GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"your-project-id",...}'

# Set the spreadsheet ID
supabase secrets set GOOGLE_SPREADSHEET_ID='your-spreadsheet-id-here'
```

Alternative method using file:

```bash
# If you have the JSON file
cat path/to/service-account-key.json | supabase secrets set GOOGLE_SERVICE_ACCOUNT_KEY -
```

## Step 8: Verify Setup

After deploying the Edge Function, you can test it by:

1. Submitting a test lead through the form
2. Checking the Google Sheet for the new row
3. Reviewing Supabase Edge Function logs for any errors

## Troubleshooting

### Error: "The caller does not have permission"

- Ensure the service account email is shared with the Google Sheet
- Verify the sheet has "Editor" permissions for the service account

### Error: "Invalid credentials"

- Check that the service account JSON is properly formatted
- Ensure all line breaks are preserved in the secret
- Try re-creating the service account key

### Error: "Spreadsheet not found"

- Verify the spreadsheet ID is correct
- Ensure the spreadsheet hasn't been deleted
- Check that the service account has access to the sheet

## Security Notes

- Never commit the service account JSON file to version control
- Add the JSON file to `.gitignore`
- Rotate service account keys periodically
- Use Supabase secrets for storing credentials
- Limit service account permissions to only what's needed

## Testing Locally

To test the Edge Function locally:

```bash
# Start Supabase locally
supabase start

# Set local secrets
supabase secrets set --env-file .env.local GOOGLE_SERVICE_ACCOUNT_KEY='...'
supabase secrets set --env-file .env.local GOOGLE_SPREADSHEET_ID='...'

# Deploy the function locally
supabase functions serve send-to-google-sheets
```

