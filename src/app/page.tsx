import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandCard from "./components/BrandCard";
import DisclaimerBar from "./components/DisclaimerBar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import { brands } from "./data/brands";
import MobilePopupModal from "./components/MobilePopupModal";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const gclid = typeof params.gclid === "string" ? params.gclid : undefined;

  // Filter brands: mobile-only brands are hidden from the main grid
  // and only shown in the mobile modal when gclid is present
  const desktopBrands = brands.filter((b) => !b.isMobile);
  const mobileBrands = brands.filter((b) => b.isMobile);
  const showMobileModal = !!gclid && mobileBrands.length > 0;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <Hero />

      {/* Brand Cards Section */}
      <section id="brands" className="py-12 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8 px-4">
              <h2 className="text-xl font-black italic text-white uppercase tracking-widest">
                <span className="text-primary">Top 10</span> Casas de Apostas
              </h2>
              <div className="hidden md:flex gap-4">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Atualizado: Hoje</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              {desktopBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  rank={index + 1}
                  gclid={gclid}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <DisclaimerBar />

      {/* Guide Section */}
      <section id="guide" className="py-24 bg-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic gold-text uppercase mb-4">Guia de Apostas Portugal</h2>
            <p className="text-white/40 font-medium">Tudo o que precisas de saber para apostar com segurança.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Como Escolher", d: "Analisamos o licenciamento, odds e mercados de cada casa." },
              { t: "Bónus & Odds", d: "Entende como funcionam os bónus de boas-vindas e as odds." },
              { t: "Métodos de Depósito", d: "Multibanco, MB Way e outros métodos populares em Portugal." }
            ].map((item) => (
              <div key={item.t} className="betting-card p-8 rounded-2xl border-white/5">
                <h3 className="text-lg font-black text-white mb-4 italic uppercase">{item.t}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-dark-gradient">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl font-black italic gold-text uppercase mb-8">Contacto</h2>
          <p className="text-white/60 mb-12">Tens alguma dúvida ou sugestão? A nossa equipa de especialistas está pronta para ajudar.</p>
          <Link href="mailto:info@melhor10.com" className="cta-button px-12 py-5 rounded-xl text-lg italic inline-block">
            Enviar Email
          </Link>
        </div>
      </section>

      <Footer />

      {showMobileModal && (
        <MobilePopupModal 
          brands={mobileBrands} 
          gclid={gclid} 
        />
      )}
    </main>
  );
}
