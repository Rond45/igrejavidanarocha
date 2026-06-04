import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import pastorEvento from "@/assets/pastor-evento.jpg";

const events = [
  {
    title: "A Noite do Extraordinário",
    date: "28 Junho 2026",
    location: "Macapá, AP",
    slots: null,
    desc: "Uma noite de poder, milagres e transformação com Bispo Leandro Zangarini. Venha viver o extraordinário de Deus!",
    image: pastorEvento,
    link: "/eventos/noite-do-extraordinario",
    featured: true,
  },
  { title: "Conferência da Família 2026", date: "15-17 Abril 2026", location: "Unidade Central", slots: 500, desc: "Três dias de ministrações poderosas sobre família, propósito e fé.", image: null, link: null, featured: false },
  { title: "Encontro de Jovens", date: "25 Abril 2026", location: "Unidade Central", slots: 200, desc: "Uma noite de adoração, palavra e comunhão para a juventude.", image: null, link: null, featured: false },
  { title: "Retiro de Líderes", date: "10-12 Maio 2026", location: "Sítio Videira", slots: 80, desc: "Capacitação e renovação espiritual para líderes e pastores.", image: null, link: null, featured: false },
  { title: "Bazar Solidário", date: "20 Maio 2026", location: "Unidade Norte", slots: null, desc: "Ação social com vendas, arrecadação e acolhimento da comunidade.", image: null, link: null, featured: false },
];

export default function EventosPage() {
  return (
    <div>
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Eventos</h1>
          <p className="text-lg opacity-80">Confira os próximos eventos e faça sua inscrição.</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="space-y-6">
            {events.map((e) => (
              <Card key={e.title} className={`border-border overflow-hidden ${e.featured ? 'ring-2 ring-accent' : ''}`}>
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-64 h-48 lg:h-auto bg-muted shrink-0 overflow-hidden">
                      {e.image ? (
                        <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-muted" />
                      )}
                    </div>
                    <div className="p-6 flex-1">
                      {e.featured && (
                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent mb-2">✨ Evento em Destaque</span>
                      )}
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">{e.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{e.desc}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-accent" />{e.date}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-accent" />{e.location}</span>
                        {e.slots && <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-accent" />{e.slots} vagas</span>}
                      </div>
                      {e.link ? (
                        <Link to={e.link}>
                          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Ver Evento</Button>
                        </Link>
                      ) : (
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Inscrever-se</Button>
                      )}
                    </div>
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