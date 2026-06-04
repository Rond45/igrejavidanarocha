import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin, Clock, Heart, Play, ArrowRight, Smartphone, Users, Baby, Music, 
  BookOpen, HandHeart, Shield, Flame, Star, Instagram, Facebook, Youtube
} from "lucide-react";
import heroImg from "@/assets/hero-worship.jpg";
import pastorImg from "@/assets/bispo-leandro.jpg";

const ministries = [
  { icon: Baby, name: "Crianças", desc: "Ministério infantil com amor e cuidado" },
  { icon: Flame, name: "Jovens", desc: "Geração de fogo e propósito" },
  { icon: Heart, name: "Casais", desc: "Fortalecendo famílias no amor" },
  { icon: Shield, name: "Homens", desc: "Homens de valor e integridade" },
  { icon: Star, name: "Mulheres", desc: "Mulheres virtuosas e fortes" },
  { icon: Music, name: "Louvor", desc: "Adoração que transforma" },
  { icon: BookOpen, name: "Discipulado", desc: "Crescimento na Palavra" },
  { icon: HandHeart, name: "Ação Social", desc: "Amor em ação na comunidade" },
  { icon: Users, name: "Intercessão", desc: "Guerreiros de oração" },
];

const testimonials = [
  { name: "Maria S.", text: "Minha família foi restaurada. Deus usou essa igreja para curar nosso casamento e trazer paz ao nosso lar.", tag: "Restauração Familiar" },
  { name: "Carlos M.", text: "Cheguei perdido e encontrei propósito. Hoje sirvo no ministério e vejo Deus agir através de mim todos os dias.", tag: "Transformação" },
  { name: "Ana P.", text: "Recebi cura física e espiritual. Depois de anos de dor, Deus me tocou durante um culto de oração.", tag: "Cura" },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Culto de adoração" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/30" />
        </div>
        <div className="relative container-site py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full border border-card/30 text-card/80 text-xs uppercase tracking-[0.25em] mb-5">
              Mateus 7:24
            </span>
            <h1 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card leading-[1.05] mb-5 md:mb-7">
              Firmados na <span className="font-quote normal-case italic font-medium text-secondary">Rocha</span><br />
              que é Cristo
            </h1>
            <p className="text-base md:text-xl text-card/85 mb-6 md:mb-8 leading-relaxed font-body max-w-xl">
              "Todo aquele que ouve as minhas palavras e as pratica será comparado a um homem prudente
              que edificou a sua casa sobre a rocha." Venha viver uma fé que não se abala.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Link to="/cultos">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm sm:text-base">
                  Quero visitar
                </Button>
              </Link>
              <Link to="/oracao">
                <Button size="lg" className="bg-card/20 text-card border border-card/40 hover:bg-card/30 font-semibold text-sm sm:text-base">
                  Pedir oração
                </Button>
              </Link>
              <Link to="/mensagens">
                <Button size="lg" className="bg-card/20 text-card border border-card/40 hover:bg-card/30 gap-2 font-semibold text-sm sm:text-base">
                  <Play className="h-4 w-4" /> Assistir mensagens
                </Button>
              </Link>
              <Link to="/app">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 font-semibold text-sm sm:text-base">
                  <Smartphone className="h-4 w-4" /> Baixar app
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VERSÍCULO INSPIRADOR */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-site text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-5">A Palavra que nos sustenta</p>
          <p className="font-quote text-2xl md:text-4xl text-foreground leading-snug mb-4">
            "O Senhor é a minha rocha, a minha fortaleza e o meu libertador;
            o meu Deus, o meu rochedo, em quem me refugio."
          </p>
          <p className="text-sm font-display uppercase tracking-widest text-muted-foreground">Salmos 18:2</p>
        </div>
      </section>

      {/* IDENTIDADE */}
      <section className="section-padding bg-paper">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 md:mb-7">
            Uma igreja edificada <span className="font-quote normal-case italic font-medium text-primary">na Rocha</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            A Igreja Vida na Rocha é mais que uma congregação — é um povo firmado em Cristo, acolhido pela graça
            e enviado para transformar o mundo ao seu redor. Aqui, cada pessoa é parte viva do corpo de Cristo,
            chamada a crescer, servir e brilhar.
          </p>
        </div>
      </section>

      {/* PRÓXIMOS CULTOS */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 md:mb-12">
            Próximos <span className="italic text-primary">Cultos</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { day: "Domingo", time: "10h e 18h", type: "Culto da Família" },
              { day: "Quarta-feira", time: "19h30", type: "Culto de Oração" },
              { day: "Sexta-feira", time: "20h", type: "Culto de Jovens" },
            ].map((c) => (
              <Card key={c.day} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold text-sm uppercase tracking-wide">{c.day}</span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">{c.type}</h3>
                  <p className="text-muted-foreground mb-4">{c.time}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>Unidade Central — Centro</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Confirmar presença
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PASTOR */}
      <section className="section-padding bg-foreground text-card">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img
                src={pastorImg}
                alt="Bispo Leandro Zangarini"
                className="rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md mx-auto object-cover aspect-square"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-3">Liderança Pastoral</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Bispo Leandro Zangarini
              </h2>
              <p className="opacity-80 leading-relaxed mb-4">
                Com um chamado para pastorear famílias e levantar líderes, Bispo Leandro Zangarini tem dedicado 
                sua vida à expansão do Reino de Deus. Sua visão é construir uma igreja que acolhe, discipula 
                e transforma vidas através do amor genuíno e da Palavra de Deus.
              </p>
              <p className="opacity-80 leading-relaxed mb-6">
                Sob sua autoridade pastoral, a Igreja Vida na Rocha cresce como uma comunidade de fé viva, 
                relevante e comprometida com o propósito divino.
              </p>
              <div className="flex gap-3">
                <a href="#" className="p-2.5 rounded-full bg-card/10 hover:bg-card/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-card/10 hover:bg-card/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-card/10 hover:bg-card/20 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINISTÉRIOS */}
      <section className="section-padding bg-card">
        <div className="container-site">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Nossos <span className="italic text-primary">Ministérios</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8 md:mb-12">
            Cada ministério é um lugar de servir, crescer e fazer a diferença na vida das pessoas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ministries.map((m) => (
              <Card key={m.name} className="border-border bg-background hover:bg-muted/50 transition-colors group cursor-pointer">
                <CardContent className="p-4 md:p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-foreground">{m.name}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PEDIDO DE ORAÇÃO */}
      <section className="section-padding bg-accent/5">
        <div className="container-site max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pedido de <span className="italic text-accent">Oração</span>
          </h2>
          <p className="text-muted-foreground mb-6 md:mb-8">
            Compartilhe seu coração conosco. Nossa equipe de intercessão vai orar por você.
          </p>
          <Card className="border-border">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Seu nome" className="bg-background" />
                  <Input placeholder="Telefone" className="bg-background" />
                </div>
                <Input placeholder="Cidade" className="bg-background" />
                <Textarea placeholder="Escreva seu pedido de oração..." rows={4} className="bg-background" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="contact" className="rounded border-border" />
                  <label htmlFor="contact" className="text-sm text-muted-foreground">Desejo receber contato</label>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Enviar pedido de oração
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section className="section-padding bg-card">
        <div className="container-site">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 md:mb-12">
            Vidas <span className="italic text-primary">Transformadas</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border">
                <CardContent className="p-5 md:p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    {t.tag}
                  </span>
                  <p className="text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
                  <p className="text-sm font-semibold text-muted-foreground">— {t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEÚDO EM DESTAQUE */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 md:mb-12">
            Conteúdo em <span className="italic text-primary">Destaque</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "A Videira e os Ramos", type: "Mensagem", date: "30 Mar 2026" },
              { title: "Devocional: Força na Jornada", type: "Devocional", date: "28 Mar 2026" },
              { title: "Conferência da Família 2026", type: "Evento", date: "15 Abr 2026" },
            ].map((c) => (
              <Card key={c.title} className="border-border hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-5 md:p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{c.type}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{c.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Venha fazer parte desta família
          </h2>
          <p className="opacity-80 text-base md:text-lg mb-6 md:mb-8">
            Sua vida pode ser transformada. Venha nos visitar, peça oração ou conecte-se pelo nosso app.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <Link to="/cultos">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold">
                Visitar a igreja
              </Button>
            </Link>
            <Link to="/app">
              <Button size="lg" className="bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/40 hover:bg-primary-foreground/30 gap-2 font-semibold">
                <Smartphone className="h-4 w-4" /> Baixar o App
              </Button>
            </Link>
            <Link to="/oracao">
              <Button size="lg" className="bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/40 hover:bg-primary-foreground/30 font-semibold">
                Pedir oração
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" className="bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/40 hover:bg-primary-foreground/30 font-semibold">
                Falar conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
