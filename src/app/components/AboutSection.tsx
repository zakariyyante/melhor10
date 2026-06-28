import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-vibrant/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-bright/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded bg-gold-bright/10 border border-gold-bright/20 mb-6">
                <span className="text-[10px] font-black text-gold-bright uppercase tracking-[0.3em]">Expertise de Elite</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 italic leading-[0.9] uppercase">
                A TUA VITÓRIA<br />
                <span className="emerald-text glow-green">COMEÇA AQUI</span>
              </h2>
              <p className="text-xl text-white/60 mb-12 font-medium leading-relaxed italic">
                No Melhor10, a nossa missão é simples: garantir que cada aposta que fazes em Portugal seja segura, legal e com o máximo valor possível.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { t: "Licença SRIJ", c: "text-emerald-vibrant" },
                  { t: "Odds Verificadas", c: "text-gold-bright" },
                  { t: "Bónus Reais", c: "text-emerald-vibrant" },
                  { t: "Suporte 24/7", c: "text-gold-bright" }
                ].map((item) => (
                  <div key={item.t} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className={`w-2 h-2 rounded-full ${item.c.replace('text-', 'bg-')} animate-pulse`} />
                    <span className="text-xs font-black text-white uppercase tracking-widest">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Decorative Card Stack */}
              <div className="absolute -top-10 -right-10 w-full h-full bg-emerald-vibrant/10 rounded-[2rem] -rotate-3 -z-10" />
              
              <div className="betting-card p-10 md:p-16 rounded-[2rem] border-gold-bright/30 relative overflow-hidden group">
                <div className="chip-badge absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
                
                <h3 className="text-3xl font-black mb-8 italic flex items-center gap-4 uppercase">
                  <span className="text-emerald-vibrant">🛡️</span> Jogo Seguro
                </h3>
                <p className="text-lg text-white/50 mb-10 leading-relaxed font-medium italic">
                  Apostar é uma maratona, não um sprint. Mantém o controlo e utiliza as ferramentas de jogo responsável que as nossas casas recomendadas oferecem.
                </p>
                
                <div className="space-y-6">
                  <Link href="tel:1414" className="block p-6 rounded-2xl bg-black/40 border border-emerald-vibrant/20 hover:border-gold-bright transition-all group">
                    <span className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Linha Vida (Portugal)</span>
                    <span className="text-3xl font-black text-emerald-vibrant group-hover:text-gold-bright transition-colors">1414</span>
                  </Link>
                  
                  <div className="flex gap-4">
                    <Link href="https://www.sicad.pt/" target="_blank" className="flex-1 py-4 text-center rounded-xl bg-white/5 text-[10px] font-black text-white/40 hover:text-white uppercase tracking-widest border border-white/5 transition-all">
                      SICAD.PT
                    </Link>
                    <Link href="https://www.srij.turismodeportugal.pt/" target="_blank" className="flex-1 py-4 text-center rounded-xl bg-white/5 text-[10px] font-black text-white/40 hover:text-white uppercase tracking-widest border border-white/5 transition-all">
                      PORTAL SRIJ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
