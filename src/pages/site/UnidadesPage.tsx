import { MapPin, Clock, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const units = [
  { name: "Unidade Central", address: "Rua da Igreja, 100 — Centro", leader: "Bispo Leandro Zangarini", phone: "(00) 00000-0000", times: "Dom 10h e 18h | Qua 19h30 | Sex 20h" },
  { name: "Unidade Norte", address: "Av. Brasil, 500 — Zona Norte", leader: "Líder João Oliveira", phone: "(00) 00000-0001", times: "Dom 10h e 18h | Qua 19h30" },
  { name: "Unidade Leste", address: "Rua das Flores, 250 — Zona Leste", leader: "Líder Marcos Costa", phone: "(00) 00000-0002", times: "Dom 10h e 18h | Qui 19h30" },
];

export default function UnidadesPage() {
  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Nossas Unidades</h1>
          <p className="text-lg opacity-80">Encontre a unidade mais perto de você e venha nos visitar.</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((u) => (
              <Card key={u.name} className="border-border">
                <CardContent className="p-6">
                  <div className="w-full h-40 rounded-xl bg-muted mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{u.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />{u.address}</p>
                    <p className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-primary" />{u.times}</p>
                    <p className="flex items-center gap-2"><User className="h-4 w-4 shrink-0 text-primary" />{u.leader}</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" />{u.phone}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground">Quero visitar</Button>
                    <Button size="sm" variant="outline" className="flex-1">Contato</Button>
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
