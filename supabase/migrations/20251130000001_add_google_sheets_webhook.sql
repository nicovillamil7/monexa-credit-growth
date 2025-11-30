-- Create a webhook trigger to send lead data to Google Sheets
-- This trigger calls the Edge Function whenever a new lead is inserted

-- Enable the http extension if not already enabled
CREATE EXTENSION IF NOT EXISTS http WITH SCHEMA extensions;

-- Create a function to call the Edge Function
CREATE OR REPLACE FUNCTION public.send_lead_to_google_sheets()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
  function_url text;
BEGIN
  -- Get the Edge Function URL from environment or use default
  -- In production, this should be your deployed Edge Function URL
  function_url := current_setting('app.settings.edge_function_url', true);
  
  -- If not set, use the default local development URL
  IF function_url IS NULL OR function_url = '' THEN
    function_url := 'http://localhost:54321/functions/v1/send-to-google-sheets';
  END IF;

  -- Call the Edge Function asynchronously using pg_net
  -- Note: This requires the pg_net extension to be installed
  -- Alternatively, use http extension for simpler setup
  PERFORM extensions.http_post(
    function_url,
    json_build_object('record', row_to_json(NEW))::text,
    'application/json'
  );

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log the error but don't fail the insert
  RAISE WARNING 'Failed to send lead to Google Sheets: %', SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS on_lead_insert_send_to_sheets ON public.funding_leads;

CREATE TRIGGER on_lead_insert_send_to_sheets
  AFTER INSERT ON public.funding_leads
  FOR EACH ROW
  EXECUTE FUNCTION public.send_lead_to_google_sheets();

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION public.send_lead_to_google_sheets() TO anon;
GRANT EXECUTE ON FUNCTION public.send_lead_to_google_sheets() TO authenticated;

