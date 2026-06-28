export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative pt-24 pb-40 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[#020617] -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15)_0%,transparent_70%)] -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-vibrant via-gold-bright to-emerald-vibrant" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-vibrant/10 border border-emerald-vibrant/30 mb-10">
            <div className="chip-badge w-3 h-3 rounded-full" />
            <span className="text-[11px] font-black text-emerald-vibrant uppercase tracking-[0.3em]">
              O Padrão de Ouro das Apostas {currentYear}
            </span>
          </div>

          {/* H1 with Logo Colors */}
          <h1 className="text-7xl md:text-[10rem] font-black mb-8 tracking-tighter italic leading-[0.85] uppercase">
            <span className="text-white">O TEU</span><br />
            <span className="gold-text glow-gold">MELHOR 10</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-white/70 mb-16 font-black italic uppercase tracking-tight max-w-3xl mx-auto">
            As Melhores <span className="text-emerald-vibrant">Odds</span> e <span className="text-gold-bright">Bónus</span> de Portugal
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Casas Licenciadas", icon: "🛡️", color: "border-emerald-vibrant/30" },
              { label: "Bónus Verificados", icon: "💎", color: "border-gold-bright/30" },
              { label: "Levantamentos Rápidos", icon: "⚡", color: "border-emerald-vibrant/30" },
            ].map((item) => (
              <div key={item.label} className={`flex items-center justify-center gap-4 p-5 rounded-2xl bg-white/5 border ${item.color} backdrop-blur-sm`}>
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[11px] font-black text-white uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Slope */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
