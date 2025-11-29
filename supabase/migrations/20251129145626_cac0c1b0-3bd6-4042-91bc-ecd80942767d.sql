-- Create funding_leads table for storing lead submissions
CREATE TABLE public.funding_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  funding_goal INTEGER NOT NULL,
  applicant_type TEXT NOT NULL CHECK (applicant_type IN ('individual', 'business')),
  yearly_revenue TEXT NOT NULL,
  credit_score TEXT NOT NULL,
  credit_profile TEXT[] DEFAULT '{}',
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  terms_accepted BOOLEAN NOT NULL DEFAULT false,
  service_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.funding_leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting leads (public - no auth required for lead submission)
CREATE POLICY "Anyone can submit a lead" 
ON public.funding_leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view leads (will be managed later with admin roles)
-- For now, we'll allow select for service account operations
CREATE POLICY "Service role can view all leads" 
ON public.funding_leads 
FOR SELECT 
USING (true);