-- Make funding-specific fields nullable for credit repair leads
-- This allows the same table to handle both credit-repair and get-funded service types

ALTER TABLE public.funding_leads 
  ALTER COLUMN funding_goal DROP NOT NULL,
  ALTER COLUMN applicant_type DROP NOT NULL,
  ALTER COLUMN yearly_revenue DROP NOT NULL;

-- Update service_type to have a check constraint
ALTER TABLE public.funding_leads 
  ADD CONSTRAINT funding_leads_service_type_check 
  CHECK (service_type IN ('credit-repair', 'get-funded'));

-- Add a check constraint to ensure funding fields are present when service_type is 'get-funded'
ALTER TABLE public.funding_leads 
  ADD CONSTRAINT funding_fields_required_for_get_funded 
  CHECK (
    (service_type = 'credit-repair') OR 
    (service_type = 'get-funded' AND 
     funding_goal IS NOT NULL AND 
     applicant_type IS NOT NULL AND 
     yearly_revenue IS NOT NULL)
  );

