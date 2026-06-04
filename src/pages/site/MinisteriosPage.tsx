import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Flame, Heart, Shield, Star, Music, BookOpen, HandHeart, Users } from "lucide-react";

const ministries = [
  { icon: Baby, name: "Ministério Infantil", desc: "Cuidamos das crianças com amor, ensino bíblico e atividades lúdicas, formando uma geração que conhece a Deus desde cedo.", leader: "Líder Maria Santos" },
  { icon: Flame, name: "Ministério de Jovens", desc: "Uma geração de fogo e propósito, com encontros dinâmicos, discipulado e eventos que transformam.", leader: "Líder Diego Martins" },
  { icon: Heart, name: "Ministério de Casais", desc: "Fortalecendo matrimônios através da Palavra, aconselhamento e comunhão entre casais.", leader: "Bispo Leandro e Pra. Ana" },
  { icon: Shield, name: "Ministério de Homens", desc: "Formando homens de valor, integridade e liderança no lar, na igreja e na sociedade.", leader: "Dc. Roberto Silva" },
  { icon: Star, name: "Ministério de Mulheres", desc: "Mulheres virtuosas, fortes e corajosas, crescendo juntas na fé e no amor.", leader: "Pra. Daniela Zangarini" },
  { icon: Music, name: "Ministério de Louvor", desc: "Adoração que transforma. Músicos e cantores consagrados levando a presença de Deus.", leader: "Líder Paula Santos" },
  { icon: BookOpen, name: "Discipulado", desc: "Formação de discípulos maduros através do ensino sistemático da Palavra de Deus.", leader: "Bispo Leandro Zangarini" },
  { icon: HandHeart, name: "Ação Social", desc: "Amor em ação na comunidade. Projetos sociais, campanhas e atendimento ao próximo.", leader: "Líder Fernanda Lima" },
  { icon: Users, name: "Intercessão", desc: "Guerreiros de oração que sustentam a igreja e as famílias diante do trono de Deus.", leader: "Líder Aparecida Souza" },
];

export default function MinisteriosPage() {
  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Ministérios</h1>
          <p className="text-lg opacity-80">Cada ministério é um lugar de servir, crescer e fazer a diferença.</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((m) => (
              <Card key={m.name} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                    <m.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{m.desc}</p>
                  <p className="text-xs text-primary font-semibold mb-4">{m.leader}</p>
                  <Button size="sm" className="w-full bg-primary text-primary-foreground">Quero participar</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
