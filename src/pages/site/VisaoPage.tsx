import { Flame, Compass, Mountain, Leaf, Sun } from "lucide-react";

export default function VisaoPage() {
  const pillars = [
    { icon: Flame, title: "Adoração", desc: "Uma igreja que vive em adoração verdadeira e apaixonada pelo Senhor." },
    { icon: Compass, title: "Discipulado", desc: "Formando discípulos maduros que fazem discípulos." },
    { icon: Mountain, title: "Comunhão", desc: "Relacionamentos genuínos que fortalecem e sustentam." },
    { icon: Leaf, title: "Serviço", desc: "Uma igreja que serve a comunidade com amor e excelência." },
    { icon: Sun, title: "Evangelismo", desc: "Levando a mensagem de esperança a todas as pessoas." },
  ];

  return (
    <div>
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Nossa Visão e Propósito</h1>
          <p className="text-lg opacity-80">
            O direcionamento espiritual e ministerial que guia cada passo da Família Videira.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            "Eu sou a videira; vós sois os ramos"
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg italic mb-2">João 15:5</p>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Nossa visão é ser uma videira frutífera — uma igreja onde cada membro está conectado a Cristo 
            e produz frutos de amor, justiça e transformação. Acreditamos que a igreja é uma família, 
            e que cada ramo tem um propósito único no plano de Deus.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Nossos Pilares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
