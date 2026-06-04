import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const messages = [
  { title: "A Videira e os Ramos", speaker: "Pr. Marcelo", date: "30 Mar", cat: "Vida Cristã" },
  { title: "O Poder da Comunhão", speaker: "Pr. Marcelo", date: "23 Mar", cat: "Igreja" },
  { title: "Fé que Move", speaker: "Pr. Marcelo", date: "16 Mar", cat: "Fé" },
  { title: "Família: Projeto de Deus", speaker: "Pr. Marcelo", date: "9 Mar", cat: "Família" },
];

export default function AppMensagensPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Mensagens</h1>
      {messages.map((m) => (
        <Card key={m.title} className="border-border">
          <CardContent className="p-0">
            <div className="w-full h-36 bg-muted rounded-t-lg flex items-center justify-center">
              <Play className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-semibold text-accent uppercase">{m.cat}</span>
              <h3 className="font-display font-bold text-foreground text-sm">{m.title}</h3>
              <p className="text-xs text-muted-foreground">{m.speaker} · {m.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
