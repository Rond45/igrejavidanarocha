import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import pastorImg from "@/assets/pastor-evento.jpg";
import salao1 from "@/assets/igreja-salao-1.jpg";
import salao2 from "@/assets/igreja-salao-2.jpg";

export default function EventoNoiteExtraordinarioPage() {
  const highlights = [
    { num: "01", title: "O Extraordinário", desc: "Aquilo que foge do natural, que rompe padrões e gera resultados que você não alcançaria sozinho." },
    { num: "02", title: "Uma Palavra de Direção", desc: "Bispo Leandro Zangarini traz uma direção clara para essa noite em Macapá. Uma mensagem que pode mudar sua trajetória." },
    { num: "03", title: "Decisão e Avanço", desc: "Para quem entende que não pode continuar no mesmo nível e sabe que precisa avançar." },
    { num: "04", title: "Não perca este momento", desc: "Se você sente que precisa estar presente, não deixe para depois. Um encontro com Deus pode transformar tudo." },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* HERO — split layout: text left, image right */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[85vh] md:min-h-[90vh]">
            {/* Left: text content centered vertically */}
            <div className="flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 py-16 md:py-20 order-2 md:order-1 relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
                <span className="text-[#c9a84c] uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold">
                  Culto Especial · Sábado · 19h30
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] mb-5">
                A Noite do{" "}
                <span className="block text-[#c9a84c] italic font-serif mt-1">Extraordinário</span>
              </h1>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-3">
                O que Deus faz em um momento… pode mudar uma vida inteira.
              </p>

              <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6">
                Bispo Leandro Zangarini e a Igreja Igreja Vida na Rocha preparam uma noite especial em Macapá.
                Uma palavra de direção para quem sabe que precisa avançar.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { icon: Calendar, label: "Sábado, 28 de Junho" },
                  { icon: Clock, label: "19h30" },
                  { icon: MapPin, label: "Macapá, AP" },
                ].map((item) => (
                  <span key={item.label} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-white/70 border border-white/15 rounded-full px-3 py-1.5">
                    <item.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#c9a84c]" />
                    {item.label}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Button className="bg-[#c9a84c] hover:bg-[#b8963f] text-black font-bold px-6 sm:px-8 py-5 text-xs sm:text-sm rounded-full uppercase tracking-wider">
                  Confirmar Presença
                </Button>
                <span className="text-white/40 text-xs">Entrada gratuita</span>
              </div>
            </div>

            {/* Right: pastor image — properly sized, not cropped */}
            <div className="relative order-1 md:order-2 h-[50vh] md:h-auto">
              <img
                src={pastorImg}
                alt="Bispo Leandro Zangarini"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle gradient only at edges for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-[#0a0a0a]/30" />
              {/* Bottom fade on mobile */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent md:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-12 md:py-16 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/50 text-sm sm:text-lg md:text-xl leading-relaxed">
            O que Deus faz em um momento…
          </p>
          <p className="text-[#c9a84c] italic font-display text-lg sm:text-2xl md:text-3xl mt-1">
            pode mudar uma vida inteira.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ VAI ENCONTRAR */}
      <section className="py-12 md:py-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-[#c9a84c] uppercase tracking-[0.25em] text-xs font-semibold mb-2">Nesta Noite</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              O que você vai encontrar
            </h2>
          </div>

          {/* Mobile: stacked list */}
          <div className="md:hidden flex flex-col gap-3">
            {highlights.map((item) => (
              <div key={item.num} className="flex gap-4 p-5 border border-white/10 rounded-xl bg-white/[0.03]">
                <span className="text-[#c9a84c]/30 font-display text-3xl font-bold leading-none shrink-0">{item.num}</span>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div key={item.num} className="flex gap-4 p-5 border border-white/10 rounded-xl bg-white/[0.02]">
                <span className="text-[#c9a84c]/30 font-display text-4xl font-bold leading-none shrink-0">{item.num}</span>
                <div>
                  <h3 className="text-white font-bold text-base mb-1.5">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 md:p-5 border border-white/10 rounded-xl bg-white/[0.02] text-center">
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Culto aberto a toda a família — homens, mulheres, jovens e crianças são bem-vindos.{" "}
              <strong className="text-white">Sábado, 28 de Junho · 19h30 · Macapá, AP.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* VERSÍCULO */}
      <section className="py-12 md:py-16 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] mb-3">Jeremias 29:11</p>
          <blockquote className="text-white/70 text-sm sm:text-base md:text-xl italic leading-relaxed font-display">
            "Porque eu sei os planos que tenho para vocês, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro."
          </blockquote>
          <p className="text-white/40 text-xs mt-4 max-w-md mx-auto">
            O extraordinário começa quando você entende que Deus tem um plano maior do que você pode imaginar para a sua vida.
          </p>
        </div>
      </section>

      {/* FOTOS DO LOCAL */}
      <section className="py-12 md:py-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Mobile: carousel */}
          <div className="md:hidden">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent className="-ml-3">
                {[salao1, salao2].map((img, i) => (
                  <CarouselItem key={i} className="pl-3">
                    <div className="relative rounded-xl overflow-hidden aspect-video">
                      <img src={img} alt={`Salão da Igreja ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white/70 text-[10px]">Igreja Igreja Vida na Rocha — Macapá, AP</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-4">
            {[salao1, salao2].map((img, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden aspect-video">
                <img src={img} alt={`Salão da Igreja ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white/70 text-xs">Igreja Igreja Vida na Rocha — Macapá, AP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO + LOCAL — side by side */}
      <section className="py-12 md:py-16 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left */}
            <div>
              <p className="text-[#c9a84c] uppercase tracking-[0.2em] text-xs font-semibold mb-2">28 de Junho · Macapá, AP</p>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                Não é apenas um culto.
              </h2>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-3">
                É um tempo de <strong className="text-white">direção, decisão</strong> e um passo para viver o que é fora do comum.
              </p>
              <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed mb-5">
                O extraordinário não é algo comum. É aquilo que foge do natural, que rompe padrões e gera resultados que você não alcançaria sozinho.
              </p>
              <div className="flex items-center gap-3 p-3 border border-[#c9a84c]/20 rounded-lg bg-[#c9a84c]/5">
                <span className="text-xl">⏳</span>
                <div>
                  <p className="text-white font-semibold text-xs">Faltam poucos dias</p>
                  <p className="text-white/50 text-[11px]">Se você sente que precisa estar presente, não deixe para depois.</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="text-[#c9a84c] uppercase tracking-[0.2em] text-xs font-semibold mb-2">Como chegar</p>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-5">Local do Culto</h3>

              <div className="grid gap-3">
                <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02]">
                  <p className="text-[#c9a84c] text-[10px] uppercase tracking-wider mb-1">Endereço</p>
                  <p className="text-white/70 text-xs">Macapá, AP <span className="text-white/40">(A confirmar)</span></p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02]">
                    <p className="text-[#c9a84c] text-[10px] uppercase tracking-wider mb-1">Data</p>
                    <p className="text-white/70 text-xs">Sáb, 28 de Junho</p>
                  </div>
                  <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02]">
                    <p className="text-[#c9a84c] text-[10px] uppercase tracking-wider mb-1">Horário</p>
                    <p className="text-white/70 text-xs">19h30</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Macapá,+AP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#b8963f] text-xs transition-colors mt-3"
              >
                <MapPin className="h-3.5 w-3.5" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 md:py-16 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] uppercase tracking-[0.25em] text-xs font-semibold mb-2">Entrada Gratuita</p>
          <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-bold mb-3">
            Viva o que é{" "}
            <span className="text-[#c9a84c] italic font-serif">fora do comum</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            Confirme sua presença e venha para A Noite do Extraordinário. Uma direção de Deus pode mudar tudo em um único momento.
          </p>

          <Button className="bg-[#c9a84c] hover:bg-[#b8963f] text-black font-bold px-8 py-5 text-xs sm:text-sm rounded-full uppercase tracking-wider mb-2">
            Confirmar Presença
          </Button>
          <p className="text-white/30 text-[10px]">
            Entrada gratuita · Macapá, AP · 28 de Junho · 19h30
          </p>
        </div>
      </section>

      {/* REDES SOCIAIS — centered */}
      <section className="py-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="text-center px-6">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-3">Siga-nos</p>
          <div className="flex items-center justify-center gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Youtube, label: "YouTube" },
              { icon: MessageCircle, label: "WhatsApp" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                aria-label={item.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c9a84c] hover:border-[#c9a84c]/30 transition-colors"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-white/20 text-[9px] mt-3">Igreja Igreja Vida na Rocha</p>
        </div>
      </section>
    </div>
  );
}
