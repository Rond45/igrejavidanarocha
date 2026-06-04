
-- Function for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- ==================== UNITS ====================
CREATE TABLE public.units (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  city TEXT,
  responsible TEXT,
  contact TEXT,
  image_url TEXT,
  map_url TEXT,
  schedule TEXT,
  status TEXT NOT NULL DEFAULT 'Ativa',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.units ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Units are publicly readable" ON public.units FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage units" ON public.units FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_units_updated_at BEFORE UPDATE ON public.units FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== MEMBERS ====================
CREATE TABLE public.members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  city TEXT,
  unit_id UUID REFERENCES public.units(id),
  unit_name TEXT,
  ministry TEXT,
  status TEXT NOT NULL DEFAULT 'Ativo',
  notes TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can manage members" ON public.members FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_members_updated_at BEFORE UPDATE ON public.members FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== VISITORS ====================
CREATE TABLE public.visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  origin TEXT,
  visit_date DATE DEFAULT CURRENT_DATE,
  unit_name TEXT,
  interest TEXT,
  notes TEXT,
  follow_up_status TEXT NOT NULL DEFAULT 'Aguardando',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.visitors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can register as visitor" ON public.visitors FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated users can manage visitors" ON public.visitors FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_visitors_updated_at BEFORE UPDATE ON public.visitors FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== PRAYER REQUESTS ====================
CREATE TABLE public.prayer_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  request TEXT NOT NULL,
  urgency TEXT NOT NULL DEFAULT 'Normal',
  is_private BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'Em oração',
  responsible TEXT,
  response TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.prayer_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit prayer requests" ON public.prayer_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Public prayer requests are readable" ON public.prayer_requests FOR SELECT USING (is_private = false);
CREATE POLICY "Authenticated users can manage prayer requests" ON public.prayer_requests FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_prayer_requests_updated_at BEFORE UPDATE ON public.prayer_requests FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== CELL GROUPS ====================
CREATE TABLE public.cell_groups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  leader TEXT,
  neighborhood TEXT,
  city TEXT,
  schedule TEXT,
  participants INTEGER DEFAULT 0,
  interested INTEGER DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'Ativa',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.cell_groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Cell groups are publicly readable" ON public.cell_groups FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage cell groups" ON public.cell_groups FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_cell_groups_updated_at BEFORE UPDATE ON public.cell_groups FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== MINISTRIES ====================
CREATE TABLE public.ministries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  leader TEXT,
  team_count INTEGER DEFAULT 0,
  volunteers_count INTEGER DEFAULT 0,
  image_url TEXT,
  status TEXT NOT NULL DEFAULT 'Ativo',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.ministries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Ministries are publicly readable" ON public.ministries FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage ministries" ON public.ministries FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_ministries_updated_at BEFORE UPDATE ON public.ministries FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== EVENTS ====================
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  banner_url TEXT,
  event_type TEXT NOT NULL DEFAULT 'Evento',
  start_date DATE,
  end_date DATE,
  time TEXT,
  location TEXT,
  unit_name TEXT,
  max_capacity INTEGER,
  registrations_count INTEGER DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'Aberto',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Events are publicly readable" ON public.events FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage events" ON public.events FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== EVENT REGISTRATIONS ====================
CREATE TABLE public.event_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  attended BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can register for events" ON public.event_registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated users can manage registrations" ON public.event_registrations FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ==================== CONTENT ====================
CREATE TABLE public.content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content_type TEXT NOT NULL DEFAULT 'Mensagem',
  author TEXT,
  body TEXT,
  media_url TEXT,
  thumbnail_url TEXT,
  category TEXT,
  status TEXT NOT NULL DEFAULT 'Rascunho',
  featured BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published content is publicly readable" ON public.content FOR SELECT USING (status = 'Publicado');
CREATE POLICY "Authenticated users can manage content" ON public.content FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_content_updated_at BEFORE UPDATE ON public.content FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== COMMUNICATIONS ====================
CREATE TABLE public.communications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  comm_type TEXT NOT NULL DEFAULT 'Aviso',
  target_audience TEXT DEFAULT 'Todos',
  unit_name TEXT DEFAULT 'Todas',
  message TEXT,
  status TEXT NOT NULL DEFAULT 'Rascunho',
  sent_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.communications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can manage communications" ON public.communications FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_communications_updated_at BEFORE UPDATE ON public.communications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== DONATIONS (CAMPAIGNS) ====================
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign TEXT NOT NULL,
  description TEXT,
  goal_amount DECIMAL(12,2),
  total_amount DECIMAL(12,2) DEFAULT 0,
  contributions_count INTEGER DEFAULT 0,
  period TEXT,
  status TEXT NOT NULL DEFAULT 'Ativo',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Donations campaigns are publicly readable" ON public.donations FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage donations" ON public.donations FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_donations_updated_at BEFORE UPDATE ON public.donations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== DONATION RECORDS ====================
CREATE TABLE public.donation_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donation_id UUID REFERENCES public.donations(id) ON DELETE CASCADE,
  donor_name TEXT,
  amount DECIMAL(12,2) NOT NULL,
  method TEXT,
  donated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.donation_records ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can manage donation records" ON public.donation_records FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ==================== SETTINGS ====================
CREATE TABLE public.settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  category TEXT DEFAULT 'geral',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Settings are publicly readable" ON public.settings FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage settings" ON public.settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON public.settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ==================== AGENDA (CULTOS E EVENTOS) ====================
CREATE TABLE public.agenda (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  event_type TEXT NOT NULL DEFAULT 'Culto',
  event_date DATE,
  time TEXT,
  unit_name TEXT,
  location TEXT,
  responsible TEXT,
  description TEXT,
  banner_url TEXT,
  status TEXT NOT NULL DEFAULT 'Ativo',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.agenda ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Agenda is publicly readable" ON public.agenda FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage agenda" ON public.agenda FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE TRIGGER update_agenda_updated_at BEFORE UPDATE ON public.agenda FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
