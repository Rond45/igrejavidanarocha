import { Card, CardContent } from "@/components/ui/card";
import { Bell, AlertCircle, Calendar, Info } from "lucide-react";

const notices = [
  { icon: AlertCircle, title: "Conferência da Família 2026", desc: "Inscrições abertas! 15 a 17 de Abril.", time: "Hoje", type: "Evento" },
  { icon: Calendar, title: "Mudança de horário", desc: "O culto de quarta será às 20h nesta semana.", time: "Ontem", type: "Aviso" },
  { icon: Info, title: "Campanha do Agasalho", desc: "Traga roupas em bom estado até dia 20/04.", time: "2 dias", type: "Social" },
  { icon: Bell, title: "Nova série de mensagens", desc: "\"Raízes Profundas\" começa neste domingo.", time: "3 dias", type: "Conteúdo" },
];

export default function AppAvisosPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Avisos</h1>
      {notices.map((n) => (
        <Card key={n.title} className="border-border">
          <CardContent className="p-4 flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <n.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-accent uppercase">{n.type}</span>
                <span className="text-[10px] text-muted-foreground">{n.time}</span>
              </div>
              <h3 className="font-semibold text-sm text-foreground mt-0.5">{n.title}</h3>
              <p className="text-xs text-muted-foreground">{n.desc}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
