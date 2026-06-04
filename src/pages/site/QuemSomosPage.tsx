import { Heart, Target, Eye, BookOpen } from "lucide-react";

export default function QuemSomosPage() {
  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
          <p className="text-lg opacity-80">
            Conheça a história, a identidade e o coração da Família Videira.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Nossa História</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>A Família Videira nasceu do desejo de construir uma igreja que fosse verdadeiramente uma família — um lugar onde pessoas de todas as origens pudessem encontrar acolhimento, propósito e transformação.</p>
            <p>Sob a liderança do Pr. Marcelo Barcellos, a igreja cresceu fundamentada na Palavra de Deus, no cuidado pastoral genuíno e na visão de discipulado que gera discipuladores.</p>
            <p>Hoje, a Família Videira é uma comunidade vibrante de fé, comprometida com a expansão do Reino de Deus e com o cuidado integral de cada pessoa.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Missão", text: "Conectar pessoas a Deus e umas às outras, formando uma família de fé viva e transformadora." },
              { icon: Eye, title: "Visão", text: "Ser uma igreja relevante, acolhedora e multiplicadora, impactando cidades e nações." },
              { icon: Target, title: "Propósito", text: "Discipular pessoas para viverem o pleno propósito de Deus em todas as áreas da vida." },
              { icon: BookOpen, title: "Valores", text: "Fé, família, discipulado, excelência, acolhimento, integridade e amor ao próximo." },
            ].map((v) => (
              <div key={v.title} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
