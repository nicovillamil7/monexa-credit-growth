-- 1. Explicit deny SELECT for non-service roles on funding_leads
CREATE POLICY "Deny SELECT to non-service roles"
  ON public.funding_leads
  FOR SELECT
  TO anon, authenticated
  USING (false);

-- 2. Add server-side validation constraints on funding_leads
ALTER TABLE public.funding_leads
  ADD CONSTRAINT funding_leads_email_format_chk
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND length(email) <= 255),
  ADD CONSTRAINT funding_leads_first_name_len_chk
    CHECK (length(first_name) BETWEEN 1 AND 100),
  ADD CONSTRAINT funding_leads_last_name_len_chk
    CHECK (length(last_name) BETWEEN 1 AND 100),
  ADD CONSTRAINT funding_leads_phone_len_chk
    CHECK (length(phone) BETWEEN 7 AND 32),
  ADD CONSTRAINT funding_leads_funding_goal_nonneg_chk
    CHECK (funding_goal IS NULL OR (funding_goal >= 0 AND funding_goal <= 100000000)),
  ADD CONSTRAINT funding_leads_credit_profile_size_chk
    CHECK (credit_profile IS NULL OR array_length(credit_profile, 1) IS NULL OR array_length(credit_profile, 1) <= 20);

-- 3. Harden trigger function: pin search_path, revoke unneeded grants
CREATE OR REPLACE FUNCTION public.send_lead_to_google_sheets()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  function_url text;
BEGIN
  function_url := current_setting('app.settings.edge_function_url', true);
  IF function_url IS NULL OR function_url = '' THEN
    function_url := 'http://localhost:54321/functions/v1/send-to-google-sheets';
  END IF;

  PERFORM extensions.http_post(
    function_url,
    json_build_object('record', row_to_json(NEW))::text,
    'application/json'
  );

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'Failed to send lead to Google Sheets: %', SQLERRM;
  RETURN NEW;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.send_lead_to_google_sheets() FROM anon, authenticated, PUBLIC;

-- 4. Pin search_path on existing helper functions to fix mutable search_path warning
CREATE OR REPLACE FUNCTION public.read_email_batch(queue_name text, batch_size integer, vt integer)
 RETURNS TABLE(msg_id bigint, read_ct integer, message jsonb)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public, pgmq
AS $function$
BEGIN
  RETURN QUERY SELECT r.msg_id, r.read_ct, r.message FROM pgmq.read(queue_name, vt, batch_size) r;
EXCEPTION WHEN undefined_table THEN
  PERFORM pgmq.create(queue_name);
  RETURN;
END;
$function$;

CREATE OR REPLACE FUNCTION public.move_to_dlq(source_queue text, dlq_name text, message_id bigint, payload jsonb)
 RETURNS bigint
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public, pgmq
AS $function$
DECLARE new_id BIGINT;
BEGIN
  SELECT pgmq.send(dlq_name, payload) INTO new_id;
  PERFORM pgmq.delete(source_queue, message_id);
  RETURN new_id;
EXCEPTION WHEN undefined_table THEN
  BEGIN
    PERFORM pgmq.create(dlq_name);
  EXCEPTION WHEN OTHERS THEN
    NULL;
  END;
  SELECT pgmq.send(dlq_name, payload) INTO new_id;
  BEGIN
    PERFORM pgmq.delete(source_queue, message_id);
  EXCEPTION WHEN undefined_table THEN
    NULL;
  END;
  RETURN new_id;
END;
$function$;

CREATE OR REPLACE FUNCTION public.enqueue_email(queue_name text, payload jsonb)
 RETURNS bigint
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public, pgmq
AS $function$
BEGIN
  RETURN pgmq.send(queue_name, payload);
EXCEPTION WHEN undefined_table THEN
  PERFORM pgmq.create(queue_name);
  RETURN pgmq.send(queue_name, payload);
END;
$function$;

CREATE OR REPLACE FUNCTION public.delete_email(queue_name text, message_id bigint)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public, pgmq
AS $function$
BEGIN
  RETURN pgmq.delete(queue_name, message_id);
EXCEPTION WHEN undefined_table THEN
  RETURN FALSE;
END;
$function$;