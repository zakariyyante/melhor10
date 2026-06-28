"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: {
    id: string;
    name: string;
    logo: string;
    rating: number;
    bonus: string;
    url: string;
    votes: number;
  };
  rank?: number;
  gclid?: string;
}

export default function BrandCard({ brand, rank, gclid }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    return `${url}${gclidValue}`;
  };

  const handleCardClick = () => {
    track("Brand Click", { brand: brand.name });
    if (typeof window !== "undefined" && (window as unknown as { gtag_report_conversion?: () => void }).gtag_report_conversion) {
      (window as unknown as { gtag_report_conversion: () => void }).gtag_report_conversion();
    }
    window.open(buildUrl(brand.url, gclid), "_blank");
  };

  return (
    <div 
      onClick={handleCardClick}
      className="betting-card group relative rounded-2xl overflow-hidden mb-6"
    >
      {/* Top Accent Bar (Green) */}
      <div className="h-1.5 w-full bg-emerald-vibrant group-hover:bg-gold-bright transition-colors" />

      <div className="p-5 md:p-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Rank & Logo Section */}
        <div className="flex flex-col items-center gap-4 min-w-[160px]">
          <div className="relative">
            {rank && (
              <div className="chip-badge absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center z-20 text-white font-black italic text-lg">
                {rank}
              </div>
            )}
            <div className="relative w-36 h-20 bg-white/5 rounded-xl p-4 flex items-center justify-center shadow-inner border-2 border-emerald-vibrant/20 group-hover:border-gold-bright transition-colors">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={110}
                height={70}
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center bg-black/20 px-4 py-1 rounded-full border border-white/5">
            <span className="text-2xl font-black italic gold-text">{brand.rating.toFixed(1)}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-[10px] ${i < Math.floor(brand.rating / 2) ? "text-gold-bright" : "text-white/10"}`}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bonus & Features (The "Meat") */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-3 py-1 rounded bg-emerald-vibrant/10 border border-emerald-vibrant/20 mb-3">
            <span className="text-[10px] font-black text-emerald-vibrant uppercase tracking-widest">Bónus de Boas-Vindas</span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4 italic">
            {brand.bonus}
          </h3>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {["Levantamentos 24h", "Licença SRIJ", "Odds de Elite"].map((feat) => (
              <span key={feat} className="flex items-center gap-1.5 text-[10px] font-bold text-white/50 uppercase tracking-widest">
                <span className="text-emerald-vibrant">✔</span> {feat}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full lg:w-auto flex flex-col items-center gap-3">
          <button className="cta-button w-full lg:w-56 py-5 rounded-xl text-lg italic transition-all">
            Visitar Agora
          </button>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">
              {brand.votes.toLocaleString()} Apostadores
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-vibrant animate-pulse" />
          </div>
        </div>
      </div>

      {/* Trust Footer Bar */}
      <div className="bg-black/30 px-6 py-3 flex flex-wrap justify-between items-center border-t border-white/5 gap-4">
        <div className="flex gap-6">
          <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">T&Cs Aplicam-se</span>
          <span className="text-[9px] font-black text-red-500/50 uppercase tracking-widest">18+ Jogue com Responsabilidade</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded bg-emerald-vibrant/20 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-emerald-vibrant" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
            </div>
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Seguro & Verificado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
