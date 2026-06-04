import { Card, CardContent } from "@/components/ui/card";
import { Play, BookOpen, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const messages = [
  { title: "A Videira e os Ramos", speaker: "Pr. Marcelo Barcellos", date: "30 Mar 2026", type: "Mensagem", category: "Vida Cristã" },
  { title: "O Poder da Comunhão", speaker: "Pr. Marcelo Barcellos", date: "23 Mar 2026", type: "Mensagem", category: "Igreja" },
  { title: "Força na Jornada", speaker: "Pra. Ana Barcellos", date: "28 Mar 2026", type: "Devocional", category: "Encorajamento" },
  { title: "Fé que Move Montanhas", speaker: "Pr. Marcelo Barcellos", date: "16 Mar 2026", type: "Mensagem", category: "Fé" },
  { title: "O Jardim do Coração", speaker: "Pra. Ana Barcellos", date: "25 Mar 2026", type: "Devocional", category: "Vida Interior" },
  { title: "Família: Projeto de Deus", speaker: "Pr. Marcelo Barcellos", date: "9 Mar 2026", type: "Mensagem", category: "Família" },
];

export default function MensagensPage() {
  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Mensagens e Devocionais</h1>
          <p className="text-lg opacity-80">Alimente sua fé com conteúdos espirituais edificantes.</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {["Todos", "Mensagem", "Devocional"].map((f) => (
              <Button key={f} variant={f === "Todos" ? "default" : "outline"} size="sm">
                {f}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((m) => (
              <Card key={m.title} className="border-border hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-full h-40 bg-muted relative flex items-center justify-center">
                    {m.type === "Mensagem" ? (
                      <Play className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
                    ) : (
                      <BookOpen className="h-10 w-10 text-muted-foreground group-hover:text-accent transition-colors" />
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent">{m.type}</span>
                      <span className="text-xs text-muted-foreground">{m.category}</span>
                    </div>
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">{m.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{m.speaker} · {m.date}</p>
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
