import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function OracaoPage() {
  return (
    <div>
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Pedidos de Oração</h1>
          <p className="text-lg opacity-80">
            "Confessai as vossas culpas uns aos outros, e orai uns pelos outros, para que sareis." — Tiago 5:16
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site max-w-2xl mx-auto">
          <p className="text-muted-foreground text-center mb-8 leading-relaxed">
            Você não está sozinho. Compartilhe seu pedido e nossa equipe de intercessão vai orar por você com amor e sigilo.
          </p>
          <Card className="border-border">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Seu nome" className="bg-background" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Telefone" className="bg-background" />
                  <Input placeholder="Cidade" className="bg-background" />
                </div>
                <Textarea placeholder="Escreva seu pedido de oração..." rows={5} className="bg-background" />
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" className="rounded border-border" /> Pedido privado
                  </label>
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" className="rounded border-border" /> Desejo receber contato
                  </label>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Enviar pedido de oração
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
