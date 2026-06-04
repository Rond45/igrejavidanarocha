import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, Share2 } from "lucide-react";

export default function AppDevocionalPage() {
  return (
    <div className="p-4 space-y-5">
      <h1 className="font-display text-2xl font-bold text-foreground">Devocional</h1>

      <Card className="border-border">
        <CardContent className="p-5">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">4 de Abril, 2026</p>
          
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Força na Jornada</h2>

          <div className="bg-accent/5 rounded-xl p-4 mb-5">
            <p className="font-display italic text-foreground leading-relaxed">
              "Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias; 
              correrão e não se cansarão; caminharão e não se fatigarão."
            </p>
            <p className="text-xs text-muted-foreground mt-2">Isaías 40:31</p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              A caminhada cristã nem sempre é fácil, mas Deus promete renovar as forças daqueles que confiam Nele. 
              Esperar no Senhor não é passividade — é confiança ativa no Seu cuidado e no Seu tempo.
            </p>
            <p>
              Hoje, não importa qual desafio você enfrenta, lembre-se: o Senhor é a sua força. 
              Ele sustenta os cansados e fortalece os fracos. Entregue a Ele seus fardos e permita 
              que Sua graça renove suas energias.
            </p>
          </div>

          <div className="mt-5 bg-primary/5 rounded-xl p-4">
            <p className="font-semibold text-foreground text-sm mb-2">Oração do Dia</p>
            <p className="text-sm text-muted-foreground italic">
              Senhor, renova as minhas forças. Ajuda-me a confiar em Ti nos momentos difíceis. 
              Que eu caminhe com coragem, sabendo que Tu estás ao meu lado. Amém.
            </p>
          </div>

          <div className="flex gap-2 mt-5">
            <Button variant="outline" size="sm" className="flex-1 gap-1.5">
              <Bookmark className="h-4 w-4" /> Salvar
            </Button>
            <Button variant="outline" size="sm" className="flex-1 gap-1.5">
              <Share2 className="h-4 w-4" /> Compartilhar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
