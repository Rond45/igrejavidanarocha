import { Button } from "@/components/ui/button";
import { Smartphone, Bell, BookOpen, Heart, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: BookOpen, title: "Devocionais Diários", desc: "Versículo, reflexão e oração do dia no seu celular." },
  { icon: Bell, title: "Avisos e Notificações", desc: "Fique por dentro de tudo que acontece na igreja." },
  { icon: Heart, title: "Pedidos de Oração", desc: "Envie e acompanhe seus pedidos de oração." },
  { icon: Calendar, title: "Agenda Completa", desc: "Cultos, eventos e campanhas na palma da mão." },
  { icon: Users, title: "Células e Ministérios", desc: "Encontre sua célula e conecte-se ao seu ministério." },
  { icon: Smartphone, title: "Tudo Conectado", desc: "Site, app e igreja integrados em uma única plataforma." },
];

export default function BaixeAppPage() {
  return (
    <div>
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                A igreja na palma da sua mão
              </h1>
              <p className="text-lg opacity-80 mb-8">
                Baixe o app da Igreja Vida na Rocha e leve a igreja com você para onde for. 
                Devocionais, mensagens, agenda, oração e muito mais.
              </p>
              <div className="flex gap-3">
                <Link to="/app">
                  <Button size="lg" variant="secondary" className="font-semibold gap-2">
                    <Smartphone className="h-5 w-5" /> Acessar o App
                  </Button>
                </Link>
              </div>
              <p className="text-xs opacity-60 mt-4">
                Disponível também como app nativo para Android e iOS em breve.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-[500px] rounded-[3rem] border-4 border-accent-foreground/20 bg-foreground/10 flex items-center justify-center">
                <span className="font-display text-xl opacity-50">App Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Funcionalidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-border text-center">
                <div className="mx-auto w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
