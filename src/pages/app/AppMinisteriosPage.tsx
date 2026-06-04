import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Flame, Heart, Music, BookOpen, HandHeart, Shield, Star, Users } from "lucide-react";

const ministries = [
  { icon: Baby, name: "Infantil" },
  { icon: Flame, name: "Jovens" },
  { icon: Heart, name: "Casais" },
  { icon: Shield, name: "Homens" },
  { icon: Star, name: "Mulheres" },
  { icon: Music, name: "Louvor" },
  { icon: BookOpen, name: "Discipulado" },
  { icon: HandHeart, name: "Ação Social" },
  { icon: Users, name: "Intercessão" },
];

export default function AppMinisteriosPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Ministérios</h1>
      <div className="grid grid-cols-1 gap-3">
        {ministries.map((m) => (
          <Card key={m.name} className="border-border">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <m.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground text-sm">{m.name}</h3>
              </div>
              <Button size="sm" variant="outline" className="text-xs">Participar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
