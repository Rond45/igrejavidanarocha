import { Card, CardContent } from "@/components/ui/card";
import { Users, UserPlus, Heart, Calendar, FileText, Building2, Gift, TrendingUp, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export default function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin-dashboard-stats"],
    queryFn: async () => {
      const [members, visitors, prayers, agenda, content, units, donations] = await Promise.all([
        (supabase as any).from("members").select("id", { count: "exact", head: true }),
        (supabase as any).from("visitors").select("id", { count: "exact", head: true }),
        (supabase as any).from("prayer_requests").select("id", { count: "exact", head: true }),
        (supabase as any).from("agenda").select("id", { count: "exact", head: true }),
        (supabase as any).from("content").select("id", { count: "exact", head: true }),
        (supabase as any).from("units").select("id", { count: "exact", head: true }),
        (supabase as any).from("donations").select("total_amount").eq("status", "Ativo"),
      ]);
      const totalDonations = (donations.data || []).reduce((sum: number, d: any) => sum + Number(d.total_amount || 0), 0);
      return [
        { icon: Users, label: "Membros", value: String(members.count || 0), change: "Total" },
        { icon: UserPlus, label: "Visitantes", value: String(visitors.count || 0), change: "Total" },
        { icon: Heart, label: "Pedidos de Oração", value: String(prayers.count || 0), change: "Total" },
        { icon: Calendar, label: "Agenda", value: String(agenda.count || 0), change: "Eventos" },
        { icon: FileText, label: "Conteúdos", value: String(content.count || 0), change: "Publicados" },
        { icon: Building2, label: "Unidades", value: String(units.count || 0), change: "Ativas" },
        { icon: Gift, label: "Doações Ativas", value: `R$ ${totalDonations.toLocaleString("pt-BR")}`, change: "Campanhas ativas" },
      ];
    },
  });

  const { data: recentPrayers = [] } = useQuery({
    queryKey: ["admin-recent-prayers"],
    queryFn: async () => {
      const { data } = await (supabase as any).from("prayer_requests").select("*").order("created_at", { ascending: false }).limit(3);
      return data || [];
    },
  });

  const { data: upcomingEvents = [] } = useQuery({
    queryKey: ["admin-upcoming-events"],
    queryFn: async () => {
      const { data } = await (supabase as any).from("agenda").select("*").order("event_date", { ascending: true }).limit(3);
      return data || [];
    },
  });

  if (isLoading) {
    return <div className="flex items-center justify-center p-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(stats || []).map((s) => (
          <Card key={s.label} className="border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <s.icon className="h-5 w-5 text-primary" />
                <span className="text-[10px] text-muted-foreground">{s.change}</span>
              </div>
              <p className="text-2xl font-bold text-foreground mt-2">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardContent className="p-5">
            <h3 className="font-display font-bold text-foreground mb-4">Pedidos de Oração Recentes</h3>
            <div className="space-y-3">
              {recentPrayers.map((p: any) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.request}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{p.status}</p>
                    {p.urgency === "Alta" && <span className="text-[10px] font-semibold text-destructive">Urgente</span>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-5">
            <h3 className="font-display font-bold text-foreground mb-4">Próximos Eventos</h3>
            <div className="space-y-3">
              {upcomingEvents.map((e: any) => (
                <div key={e.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium text-foreground">{e.title}</p>
                  <p className="text-xs text-muted-foreground">{e.event_date} — {e.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
