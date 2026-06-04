export default function GaleriaPage() {
  const categories = ["Cultos", "Eventos", "Batismos", "Comunhão", "Ação Social"];

  return (
    <div>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Galeria</h1>
          <p className="text-lg opacity-80">Momentos especiais da nossa caminhada juntos.</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((c) => (
              <button key={c} className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-muted hover:opacity-80 transition-opacity cursor-pointer" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
