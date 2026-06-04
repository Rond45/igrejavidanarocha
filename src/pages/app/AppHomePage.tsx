import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, BookOpen, Calendar, Heart, Clock, MapPin, ArrowRight } from "lucide-react";

export default function AppHomePage() {
  return (
    <div className="p-4 space-y-5">
      {/* Banner */}
      <div className="rounded-2xl bg-primary text-primary-foreground p-5">
        <p className="text-xs uppercase tracking-wider opacity-70 mb-1">Bem-vindo à</p>
        <h1 className="font-display text-2xl font-bold mb-2">Igreja Vida na Rocha</h1>
        <p className="text-sm opacity-80">Conectados pela fé, unidos pelo amor.</p>
      </div>

      {/* Versículo do Dia */}
      <Card className="border-border bg-accent/5">
        <CardContent className="p-4">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Versículo do Dia</p>
          <p className="font-display text-foreground italic leading-relaxed">
            "Eu sou a videira, vós sois os ramos; quem está em mim, e eu nele, esse dá muito fruto."
          </p>
          <p className="text-xs text-muted-foreground mt-1">João 15:5</p>
        </CardContent>
      </Card>

      {/* Próximos Cultos */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-bold text-foreground">Próximos Cultos</h2>
          <Link to="/app/agenda" className="text-xs text-primary font-semibold">Ver todos</Link>
        </div>
        <div className="space-y-2">
          {[
            { title: "Culto da Família", day: "Domingo", time: "10h", unit: "Unidade Central" },
            { title: "Culto de Oração", day: "Quarta", time: "19h30", unit: "Unidade Central" },
          ].map((c) => (
            <Card key={c.title} className="border-border">
              <CardContent className="p-3 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.day} · {c.time}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Aviso Importante */}
      <Card className="border-accent/20 bg-accent/5">
        <CardContent className="p-4">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Aviso</p>
          <p className="text-sm text-foreground font-medium">Conferência da Família 2026 — Inscrições abertas!</p>
          <p className="text-xs text-muted-foreground mt-1">15 a 17 de Abril. Garanta sua vaga.</p>
        </CardContent>
      </Card>

      {/* Atalhos Rápidos */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { icon: BookOpen, label: "Devocional", path: "/app/devocional" },
          { icon: Play, label: "Mensagens", path: "/app/mensagens" },
          { icon: Heart, label: "Oração", path: "/app/oracao" },
          { icon: Calendar, label: "Agenda", path: "/app/agenda" },
        ].map((s) => (
          <Link key={s.path} to={s.path} className="flex flex-col items-center gap-1 p-3 rounded-xl bg-card border border-border hover:bg-muted transition-colors">
            <s.icon className="h-5 w-5 text-primary" />
            <span className="text-[10px] text-muted-foreground font-medium">{s.label}</span>
          </Link>
        ))}
      </div>

      {/* Mensagem em Destaque */}
      <div>
        <h2 className="font-display font-bold text-foreground mb-3">Em Destaque</h2>
        <Card className="border-border">
          <CardContent className="p-0">
            <div className="w-full h-40 bg-muted rounded-t-lg flex items-center justify-center">
              <Play className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="p-4">
              <p className="font-display font-bold text-foreground">A Videira e os Ramos</p>
              <p className="text-xs text-muted-foreground">Bispo Leandro Zangarini · 30 Mar 2026</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
