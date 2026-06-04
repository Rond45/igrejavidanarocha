import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AppOracaoPage() {
  return (
    <div className="p-4 space-y-5">
      <h1 className="font-display text-2xl font-bold text-foreground">Oração</h1>

      <Card className="border-border">
        <CardContent className="p-5">
          <p className="text-sm text-muted-foreground mb-4">
            Compartilhe seu pedido. Nossa equipe vai orar por você.
          </p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Seu nome" className="bg-background text-sm" />
            <Textarea placeholder="Seu pedido de oração..." rows={4} className="bg-background text-sm" />
            <div className="flex gap-4">
              <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <input type="checkbox" className="rounded" /> Privado
              </label>
              <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <input type="checkbox" className="rounded" /> Contato
              </label>
            </div>
            <Button className="w-full bg-accent text-accent-foreground text-sm">Enviar pedido</Button>
          </form>
        </CardContent>
      </Card>

      <div>
        <h2 className="font-display font-bold text-foreground mb-3">Meus Pedidos</h2>
        <div className="space-y-2">
          {[
            { text: "Restauração familiar", status: "Em oração", date: "28 Mar" },
            { text: "Saúde da minha mãe", status: "Respondido", date: "15 Mar" },
          ].map((p) => (
            <Card key={p.text} className="border-border">
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{p.text}</p>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    p.status === "Respondido" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}>{p.status}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{p.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
