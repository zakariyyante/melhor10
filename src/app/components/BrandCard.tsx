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
    badge?: "best_casino" | "new_casino" | "fast_withdrawal";
  };
  rank?: number;
  gclid?: string;
}

export default function BrandCard({ brand, rank, gclid }: BrandCardProps) {
  const getBadgeConfig = (badge?: string) => {
    const goldStyle = "bg-gradient-to-r from-gold-bright to-gold-dark text-black shadow-lg shadow-gold-bright/20";
    switch (badge) {
      case "best_casino":
        return { text: "MELHOR CASINO", className: goldStyle };
      case "new_casino":
        return { text: "NOVO CASINO", className: goldStyle };
      case "fast_withdrawal":
        return { text: "LEVANTAMENTO RÁPIDO", className: goldStyle };
      default:
        return null;
    }
  };

  const badgeConfig = getBadgeConfig(brand.badge);
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    return `${url}${gclidValue}`;
  };

  const handleCardClick = () => {
    track("Brand Click", { 
      brand_id: brand.id,
      brand_name: brand.name,
      bonus: brand.bonus,
      gclid: gclid || "none"
    });
    if (typeof window !== "undefined" && (window as unknown as { gtag_report_conversion?: () => void }).gtag_report_conversion) {
      (window as unknown as { gtag_report_conversion: () => void }).gtag_report_conversion();
    }
    window.open(buildUrl(brand.url, gclid), "_blank");
  };

  return (
    <div 
      onClick={handleCardClick}
      className="betting-card group relative rounded-xl overflow-hidden mb-4 border border-white/5 hover:border-emerald-vibrant/30 transition-all"
    >
      {badgeConfig && (
        <div className={`absolute top-0 left-0 px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-br-lg z-10 ${badgeConfig.className}`}>
          {badgeConfig.text}
        </div>
      )}

      <div className="p-4 flex flex-row items-center gap-4 pt-8">
        {/* Left: Logo & Rating */}
        <div className="flex flex-col items-center gap-2 min-w-[100px] md:min-w-[140px]">
          <div className="relative w-24 h-14 md:w-32 md:h-18 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-[10px] md:text-xs ${i < Math.floor(brand.rating / 2) ? "text-gold-bright" : "text-white/10"}`}>
                  ★
                </span>
              ))}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-black italic text-white">{brand.rating.toFixed(1)}</span>
              <span className="text-[8px] md:text-[10px] font-bold text-white/30 uppercase">/ 10</span>
            </div>
          </div>
        </div>

        {/* Right: Bonus & CTA */}
        <div className="flex-1 flex flex-col items-start min-w-0">
          <span className="text-[8px] md:text-[10px] font-black text-emerald-vibrant uppercase tracking-[0.2em] mb-1">Bónus Exclusivo</span>
          <h3 className="text-sm md:text-xl font-black text-white leading-tight mb-4 italic line-clamp-2 w-full">
            {brand.bonus}
          </h3>
          
          <button className="cta-button w-full md:w-auto px-6 py-3 rounded-lg text-[10px] md:text-xs italic transition-all">
            Jogar no {brand.name}
          </button>
        </div>
      </div>

      {/* Footer info */}
      <div className="bg-black/20 px-4 py-1.5 flex justify-start gap-4 border-t border-white/5">
        <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">T&Cs Aplicam-se</span>
        <span className="text-[8px] font-bold text-red-500/40 uppercase tracking-widest">18+ Jogue com Responsabilidade</span>
      </div>
    </div>
  );
}
