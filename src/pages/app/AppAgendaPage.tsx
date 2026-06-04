import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const agenda = [
  { title: "Culto da Família", day: "Dom, 6 Abr", time: "10h", unit: "Central", type: "Culto" },
  { title: "Culto da Família", day: "Dom, 6 Abr", time: "18h", unit: "Central", type: "Culto" },
  { title: "Culto de Oração", day: "Qua, 9 Abr", time: "19h30", unit: "Central", type: "Culto" },
  { title: "Culto de Jovens", day: "Sex, 11 Abr", time: "20h", unit: "Central", type: "Culto" },
  { title: "Conferência da Família", day: "15-17 Abr", time: "19h", unit: "Central", type: "Evento" },
];

export default function AppAgendaPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Agenda</h1>
      {agenda.map((a, i) => (
        <Card key={i} className="border-border">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent">{a.type}</span>
                <h3 className="font-display font-bold text-foreground mt-1">{a.title}</h3>
                <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{a.day}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{a.time}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{a.unit}</span>
                </div>
              </div>
            </div>
            <Button size="sm" className="w-full mt-3 bg-primary text-primary-foreground text-xs">
              Confirmar presença
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
