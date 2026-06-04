import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, User, MessageCircle, Search } from "lucide-react";
import { useState } from "react";

const cells = [
  { name: "Célula Vida Nova", leader: "João e Maria", city: "Centro", neighborhood: "Centro", day: "Terça", time: "19h30" },
  { name: "Célula Restauração", leader: "Pedro e Ana", city: "Zona Norte", neighborhood: "Jardim América", day: "Quarta", time: "20h" },
  { name: "Célula Família Forte", leader: "Carlos e Priscila", city: "Zona Leste", neighborhood: "Vila Nova", day: "Quinta", time: "19h30" },
  { name: "Célula Jovens de Fogo", leader: "Diego e Camila", city: "Centro", neighborhood: "Liberdade", day: "Sexta", time: "20h" },
  { name: "Célula Mulheres Virtuosas", leader: "Fernanda", city: "Zona Sul", neighborhood: "Jardim Europa", day: "Sábado", time: "15h" },
  { name: "Célula Homens de Valor", leader: "Roberto", city: "Centro", neighborhood: "Centro", day: "Sábado", time: "8h" },
];

export default function CelulasPage() {
  const [search, setSearch] = useState("");
  const filtered = cells.filter((c) =>
    `${c.city} ${c.neighborhood} ${c.name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Células</h1>
          <p className="text-lg opacity-80">Encontre uma célula perto de você e viva a comunhão da igreja nos lares.</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="max-w-md mx-auto mb-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por cidade ou bairro..."
              className="pl-10 bg-background"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((c) => (
              <Card key={c.name} className="border-border">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-foreground mb-2">{c.name}</h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground mb-4">
                    <p className="flex items-center gap-2"><User className="h-3.5 w-3.5 text-primary" />{c.leader}</p>
                    <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" />{c.neighborhood}, {c.city}</p>
                    <p className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-primary" />{c.day} às {c.time}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground">Participar</Button>
                    <Button size="sm" variant="outline" className="gap-1"><MessageCircle className="h-3.5 w-3.5" />Líder</Button>
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
