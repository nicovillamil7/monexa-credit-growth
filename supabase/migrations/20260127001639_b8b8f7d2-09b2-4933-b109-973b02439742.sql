-- Drop the existing restrictive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.funding_leads;

-- Recreate as a PERMISSIVE policy (default) to allow public lead submissions
CREATE POLICY "Anyone can submit a lead"
ON public.funding_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);