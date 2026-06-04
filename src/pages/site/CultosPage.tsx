import { Clock, MapPin, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  { title: "Culto da Família", day: "Domingo", time: "10h e 18h", unit: "Todas as unidades", type: "Culto" },
  { title: "Culto de Oração e Palavra", day: "Quarta-feira", time: "19h30", unit: "Unidade Central", type: "Culto" },
  { title: "Culto de Jovens", day: "Sexta-feira", time: "20h", unit: "Unidade Central", type: "Culto" },
  { title: "Conferência da Família 2026", day: "15-17 Abril", time: "19h", unit: "Unidade Central", type: "Evento" },
  { title: "Vigília de Oração", day: "Último sábado do mês", time: "22h", unit: "Todas as unidades", type: "Especial" },
];

export default function CultosPage() {
  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Cultos e Agenda</h1>
          <p className="text-lg opacity-80">Confira os horários dos cultos, campanhas e eventos especiais.</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="space-y-4">
            {events.map((e) => (
              <Card key={e.title} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold self-start">
                    {e.type}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground">{e.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{e.day}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{e.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{e.unit}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-primary text-primary-foreground">Confirmar presença</Button>
                    <Button size="sm" variant="outline"><Share2 className="h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
