import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, User, MessageCircle } from "lucide-react";

const cells = [
  { name: "Célula Vida Nova", leader: "João e Maria", area: "Centro", day: "Terça 19h30" },
  { name: "Célula Restauração", leader: "Pedro e Ana", area: "Zona Norte", day: "Quarta 20h" },
  { name: "Célula Família Forte", leader: "Carlos e Priscila", area: "Zona Leste", day: "Quinta 19h30" },
];

export default function AppCelulasPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Células</h1>
      <p className="text-sm text-muted-foreground">Encontre uma célula perto de você.</p>
      {cells.map((c) => (
        <Card key={c.name} className="border-border">
          <CardContent className="p-4">
            <h3 className="font-display font-bold text-foreground">{c.name}</h3>
            <div className="space-y-1 mt-1 text-xs text-muted-foreground">
              <p className="flex items-center gap-1.5"><User className="h-3 w-3 text-primary" />{c.leader}</p>
              <p className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-primary" />{c.area}</p>
              <p className="flex items-center gap-1.5"><Clock className="h-3 w-3 text-primary" />{c.day}</p>
            </div>
            <div className="flex gap-2 mt-3">
              <Button size="sm" className="flex-1 bg-primary text-primary-foreground text-xs">Participar</Button>
              <Button size="sm" variant="outline" className="text-xs gap-1"><MessageCircle className="h-3 w-3" />Líder</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
