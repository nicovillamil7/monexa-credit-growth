-- Drop the overly permissive SELECT policy that allows public access
DROP POLICY IF EXISTS "Service role can view all leads" ON public.funding_leads;

-- Create a new policy that restricts SELECT access to service_role only
CREATE POLICY "Only service role can view leads" ON public.funding_leads
  FOR SELECT
  TO service_role
  USING (true);