-- Make fields nullable to support progressive saving
-- Step 1 only requires: first_name, last_name, email, phone

ALTER TABLE public.funding_leads 
  ALTER COLUMN funding_goal DROP NOT NULL,
  ALTER COLUMN applicant_type DROP NOT NULL,
  ALTER COLUMN yearly_revenue DROP NOT NULL,
  ALTER COLUMN credit_score DROP NOT NULL;

-- Set default for terms_accepted so we don't need to send it
ALTER TABLE public.funding_leads 
  ALTER COLUMN terms_accepted SET DEFAULT true;