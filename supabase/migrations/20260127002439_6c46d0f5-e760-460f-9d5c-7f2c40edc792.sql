-- Add UPDATE policy for the progressive form updates
-- This allows updating lead records (for steps 2, 3, 4 of the form)
CREATE POLICY "Anyone can update their lead"
ON public.funding_leads
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);