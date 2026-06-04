import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Target } from "lucide-react";

export default function AppDoacoesPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Doações</h1>
      <div className="grid grid-cols-1 gap-3">
        {[
          { icon: Heart, title: "Dízimos", desc: "Devolução fiel" },
          { icon: Gift, title: "Ofertas", desc: "Oferta voluntária" },
          { icon: Target, title: "Campanhas", desc: "Campanhas especiais" },
        ].map((d) => (
          <Card key={d.title} className="border-border">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-earth/10 text-earth flex items-center justify-center shrink-0">
                <d.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground text-sm">{d.title}</h3>
                <p className="text-xs text-muted-foreground">{d.desc}</p>
              </div>
              <Button size="sm" className="bg-earth text-earth-foreground text-xs">Doar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="border-border">
        <CardContent className="p-4 text-center">
          <p className="text-xs text-muted-foreground">PIX: contato@vidanarocha.com</p>
        </CardContent>
      </Card>
    </div>
  );
}
