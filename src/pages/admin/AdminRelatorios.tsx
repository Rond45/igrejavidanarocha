import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Users, UserPlus, Heart, Calendar, FileText, Building2 } from "lucide-react";

export default function AdminRelatorios() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-reports"],
    queryFn: async () => {
      const [members, visitors, prayers, events, content, units, cellGroups, ministries] = await Promise.all([
        (supabase as any).from("members").select("unit_name, status"),
        (supabase as any).from("visitors").select("unit_name, follow_up_status, visit_date"),
        (supabase as any).from("prayer_requests").select("urgency, status, created_at"),
        (supabase as any).from("events").select("title, registrations_count, status"),
        (supabase as any).from("content").select("content_type, status"),
        (supabase as any).from("units").select("name, status"),
        (supabase as any).from("cell_groups").select("city, participants"),
        (supabase as any).from("ministries").select("name, volunteers_count, team_count"),
      ]);
      return { members: members.data || [], visitors: visitors.data || [], prayers: prayers.data || [], events: events.data || [], content: content.data || [], units: units.data || [], cellGroups: cellGroups.data || [], ministries: ministries.data || [] };
    },
  });

  if (isLoading) return <div className="flex items-center justify-center p-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;

  const d = data!;
  const membersByUnit: Record<string, number> = {};
  d.members.forEach((m: any) => { membersByUnit[m.unit_name || "Sem unidade"] = (membersByUnit[m.unit_name || "Sem unidade"] || 0) + 1; });
  const visitorsByStatus: Record<string, number> = {};
  d.visitors.forEach((v: any) => { visitorsByStatus[v.follow_up_status] = (visitorsByStatus[v.follow_up_status] || 0) + 1; });
  const prayersByStatus: Record<string, number> = {};
  d.prayers.forEach((p: any) => { prayersByStatus[p.status] = (prayersByStatus[p.status] || 0) + 1; });
  const contentByType: Record<string, number> = {};
  d.content.forEach((c: any) => { contentByType[c.content_type] = (contentByType[c.content_type] || 0) + 1; });
  const totalParticipants = d.cellGroups.reduce((s: number, c: any) => s + (c.participants || 0), 0);
  const totalVolunteers = d.ministries.reduce((s: number, m: any) => s + (m.volunteers_count || 0) + (m.team_count || 0), 0);

  const reports = [
    { icon: Users, title: "Membros por Unidade", items: Object.entries(membersByUnit).map(([k, v]) => `${k}: ${v}`) },
    { icon: UserPlus, title: "Visitantes por Status", items: Object.entries(visitorsByStatus).map(([k, v]) => `${k}: ${v}`) },
    { icon: Heart, title: "Pedidos de Oração por Status", items: Object.entries(prayersByStatus).map(([k, v]) => `${k}: ${v}`) },
    { icon: Calendar, title: "Eventos (por inscrições)", items: d.events.map((e: any) => `${e.title}: ${e.registrations_count || 0} inscritos`) },
    { icon: FileText, title: "Conteúdos por Tipo", items: Object.entries(contentByType).map(([k, v]) => `${k}: ${v}`) },
    { icon: Building2, title: "Resumo Geral", items: [`Unidades: ${d.units.length}`, `Células: ${d.cellGroups.length} (${totalParticipants} participantes)`, `Ministérios: ${d.ministries.length} (${totalVolunteers} equipe/voluntários)`] },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-xl font-bold text-foreground">Relatórios</h2>
        <p className="text-sm text-muted-foreground">Visão geral dos dados da plataforma.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reports.map(r => (
          <Card key={r.title} className="border-border">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary"><r.icon className="h-5 w-5" /></div>
                <h3 className="font-display font-bold text-foreground text-sm">{r.title}</h3>
              </div>
              <ul className="space-y-1">
                {r.items.map((item, i) => <li key={i} className="text-sm text-muted-foreground">{item}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
