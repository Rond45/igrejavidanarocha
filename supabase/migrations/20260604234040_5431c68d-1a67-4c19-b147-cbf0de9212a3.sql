
-- ============ Remove ALL anon write policies across all tables ============
DROP POLICY IF EXISTS "Anon can delete agenda" ON public.agenda;
DROP POLICY IF EXISTS "Anon can insert agenda" ON public.agenda;
DROP POLICY IF EXISTS "Anon can update agenda" ON public.agenda;

DROP POLICY IF EXISTS "Anon can delete cell_groups" ON public.cell_groups;
DROP POLICY IF EXISTS "Anon can insert cell_groups" ON public.cell_groups;
DROP POLICY IF EXISTS "Anon can update cell_groups" ON public.cell_groups;

DROP POLICY IF EXISTS "Anon can delete communications" ON public.communications;
DROP POLICY IF EXISTS "Anon can insert communications" ON public.communications;
DROP POLICY IF EXISTS "Anon can update communications" ON public.communications;
DROP POLICY IF EXISTS "Anon can read communications" ON public.communications;

DROP POLICY IF EXISTS "Anon can delete content" ON public.content;
DROP POLICY IF EXISTS "Anon can insert content" ON public.content;
DROP POLICY IF EXISTS "Anon can update content" ON public.content;
DROP POLICY IF EXISTS "Anon can read all content" ON public.content;

DROP POLICY IF EXISTS "Anon can delete donation_records" ON public.donation_records;
DROP POLICY IF EXISTS "Anon can insert donation_records" ON public.donation_records;
DROP POLICY IF EXISTS "Anon can update donation_records" ON public.donation_records;
DROP POLICY IF EXISTS "Anon can read donation_records" ON public.donation_records;

DROP POLICY IF EXISTS "Anon can delete donations" ON public.donations;
DROP POLICY IF EXISTS "Anon can insert donations" ON public.donations;
DROP POLICY IF EXISTS "Anon can update donations" ON public.donations;

DROP POLICY IF EXISTS "Anon can delete event_registrations" ON public.event_registrations;
DROP POLICY IF EXISTS "Anon can insert event_registrations" ON public.event_registrations;
DROP POLICY IF EXISTS "Anon can update event_registrations" ON public.event_registrations;
DROP POLICY IF EXISTS "Anon can read event_registrations" ON public.event_registrations;

DROP POLICY IF EXISTS "Anon can delete events" ON public.events;
DROP POLICY IF EXISTS "Anon can insert events" ON public.events;
DROP POLICY IF EXISTS "Anon can update events" ON public.events;

DROP POLICY IF EXISTS "Anon can delete members" ON public.members;
DROP POLICY IF EXISTS "Anon can insert members" ON public.members;
DROP POLICY IF EXISTS "Anon can update members" ON public.members;
DROP POLICY IF EXISTS "Anon can read members" ON public.members;

DROP POLICY IF EXISTS "Anon can delete ministries" ON public.ministries;
DROP POLICY IF EXISTS "Anon can insert ministries" ON public.ministries;
DROP POLICY IF EXISTS "Anon can update ministries" ON public.ministries;

DROP POLICY IF EXISTS "Anon can delete prayer_requests" ON public.prayer_requests;
DROP POLICY IF EXISTS "Anon can update prayer_requests" ON public.prayer_requests;
DROP POLICY IF EXISTS "Anon can read prayer_requests" ON public.prayer_requests;
DROP POLICY IF EXISTS "Public prayer requests are readable" ON public.prayer_requests;

DROP POLICY IF EXISTS "Anon can delete settings" ON public.settings;
DROP POLICY IF EXISTS "Anon can insert settings" ON public.settings;
DROP POLICY IF EXISTS "Anon can update settings" ON public.settings;
DROP POLICY IF EXISTS "Settings are publicly readable" ON public.settings;

DROP POLICY IF EXISTS "Anon can delete units" ON public.units;
DROP POLICY IF EXISTS "Anon can insert units" ON public.units;
DROP POLICY IF EXISTS "Anon can update units" ON public.units;

DROP POLICY IF EXISTS "Anon can delete visitors" ON public.visitors;
DROP POLICY IF EXISTS "Anon can update visitors" ON public.visitors;
DROP POLICY IF EXISTS "Anon can read visitors" ON public.visitors;

-- ============ Revoke anon write grants (keep authenticated + service_role) ============
REVOKE INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public FROM anon;

-- Revoke anon SELECT on sensitive tables
REVOKE SELECT ON public.members FROM anon;
REVOKE SELECT ON public.visitors FROM anon;
REVOKE SELECT ON public.event_registrations FROM anon;
REVOKE SELECT ON public.donation_records FROM anon;
REVOKE SELECT ON public.communications FROM anon;
REVOKE SELECT ON public.settings FROM anon;

-- ============ Public-safe prayer requests view (no phone) ============
CREATE OR REPLACE VIEW public.prayer_requests_public
WITH (security_invoker = on) AS
SELECT id, name, city, request, urgency, status, created_at
FROM public.prayer_requests
WHERE is_private = false;

GRANT SELECT ON public.prayer_requests_public TO anon, authenticated;

-- Block anon direct SELECT on prayer_requests (still allows INSERT via existing public policy)
REVOKE SELECT ON public.prayer_requests FROM anon;
