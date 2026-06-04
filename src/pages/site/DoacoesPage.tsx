import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Target } from "lucide-react";

export default function DoacoesPage() {
  return (
    <div>
      <section className="section-padding bg-earth text-earth-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Doações e Contribuições</h1>
          <p className="text-lg opacity-80">
            "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." — 2 Coríntios 9:7
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Heart, title: "Dízimos", desc: "Honre a Deus com a devolução fiel do seu dízimo." },
              { icon: Gift, title: "Ofertas", desc: "Contribua com uma oferta voluntária de gratidão." },
              { icon: Target, title: "Campanhas", desc: "Participe de campanhas especiais da igreja." },
            ].map((d) => (
              <Card key={d.title} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-14 h-14 rounded-xl bg-earth/10 text-earth flex items-center justify-center mb-4">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{d.desc}</p>
                  <Button className="w-full bg-earth text-earth-foreground hover:bg-earth/90">Contribuir</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Dados para Transferência</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Banco:</strong> Banco Exemplo</p>
                <p><strong>Agência:</strong> 0001</p>
                <p><strong>Conta:</strong> 00000-0</p>
                <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
                <p><strong>PIX:</strong> contato@vidanarocha.com</p>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                Integração com pagamentos online em breve disponível.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
