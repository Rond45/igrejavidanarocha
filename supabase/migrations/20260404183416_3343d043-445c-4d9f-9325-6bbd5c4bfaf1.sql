
-- Temporary: allow anon full access to admin-managed tables until auth is set up
CREATE POLICY "Anon can read members" ON public.members FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can insert members" ON public.members FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update members" ON public.members FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete members" ON public.members FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can read visitors" ON public.visitors FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can update visitors" ON public.visitors FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete visitors" ON public.visitors FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can read prayer_requests" ON public.prayer_requests FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can update prayer_requests" ON public.prayer_requests FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete prayer_requests" ON public.prayer_requests FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can read communications" ON public.communications FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can insert communications" ON public.communications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update communications" ON public.communications FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete communications" ON public.communications FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can read donation_records" ON public.donation_records FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can insert donation_records" ON public.donation_records FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update donation_records" ON public.donation_records FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete donation_records" ON public.donation_records FOR DELETE TO anon USING (true);

-- Tables that already have public SELECT but need anon write for admin CRUD
CREATE POLICY "Anon can insert units" ON public.units FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update units" ON public.units FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete units" ON public.units FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can insert cell_groups" ON public.cell_groups FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update cell_groups" ON public.cell_groups FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete cell_groups" ON public.cell_groups FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can insert ministries" ON public.ministries FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update ministries" ON public.ministries FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete ministries" ON public.ministries FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can insert events" ON public.events FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update events" ON public.events FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete events" ON public.events FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can insert content" ON public.content FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update content" ON public.content FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete content" ON public.content FOR DELETE TO anon USING (true);
CREATE POLICY "Anon can read all content" ON public.content FOR SELECT TO anon USING (true);

CREATE POLICY "Anon can insert donations" ON public.donations FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update donations" ON public.donations FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete donations" ON public.donations FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can insert agenda" ON public.agenda FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update agenda" ON public.agenda FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete agenda" ON public.agenda FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can insert settings" ON public.settings FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update settings" ON public.settings FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete settings" ON public.settings FOR DELETE TO anon USING (true);

CREATE POLICY "Anon can insert event_registrations" ON public.event_registrations FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can update event_registrations" ON public.event_registrations FOR UPDATE TO anon USING (true);
CREATE POLICY "Anon can delete event_registrations" ON public.event_registrations FOR DELETE TO anon USING (true);
CREATE POLICY "Anon can read event_registrations" ON public.event_registrations FOR SELECT TO anon USING (true);
