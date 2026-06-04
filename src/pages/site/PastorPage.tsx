import { Instagram, Facebook, Youtube } from "lucide-react";
import pastorImg from "@/assets/bispo-leandro.jpg";

const leaders = [
  { name: "Pra. Daniela Zangarini", role: "Co-pastora", desc: "Líder do ministério de mulheres e casais." },
  { name: "Dc. Roberto Silva", role: "Diácono", desc: "Coordenação administrativa e logística." },
  { name: "Líder Paula Santos", role: "Louvor", desc: "Direção de adoração e ministério de música." },
  { name: "Líder Diego Martins", role: "Jovens", desc: "Pastoreio e formação da juventude." },
];

export default function PastorPage() {
  return (
    <div>
      <section className="section-padding bg-foreground text-card">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">Liderança Pastoral</p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Bispo Leandro Zangarini</h1>
              <div className="space-y-4 opacity-80 leading-relaxed text-sm md:text-base">
                <p>Bispo Leandro Zangarini é o fundador e pastor presidente da Igreja Vida na Rocha. Sua trajetória é marcada por um chamado profundo de edificar vidas sobre o fundamento eterno: Jesus Cristo, a Rocha que não se move.</p>
                <p>Pregador apaixonado pela Palavra, formador de líderes e pastor de famílias, o Bispo Leandro carrega no coração a visão de uma igreja firme, madura e relevante — uma geração que conhece a Rocha em quem confia.</p>
                <p>Sua mensagem é clara: <span className="font-quote italic text-secondary">"Quando tudo se abala, quem está firmado na Rocha permanece de pé."</span></p>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="#" className="p-2.5 rounded-full bg-card/10 hover:bg-card/20 transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="p-2.5 rounded-full bg-card/10 hover:bg-card/20 transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="p-2.5 rounded-full bg-card/10 hover:bg-card/20 transition-colors"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src={pastorImg} alt="Bispo Leandro Zangarini" className="rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md mx-auto object-cover aspect-square" loading="lazy" width={800} height={800} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">Equipe de Liderança</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {leaders.map((l) => (
              <div key={l.name} className="text-center p-4 md:p-6 rounded-2xl border border-border">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted mx-auto mb-3 md:mb-4" />
                <h3 className="font-display font-bold text-foreground text-sm md:text-base">{l.name}</h3>
                <p className="text-xs md:text-sm text-primary font-semibold">{l.role}</p>
                <p className="text-xs text-muted-foreground mt-1 md:mt-2">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
