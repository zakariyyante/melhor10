"use client";

import { useState, useEffect } from "react";
import BrandCard from "./BrandCard";
import { Brand } from "../data/brands";

interface MobilePopupModalProps {
  brands: Brand[];
  gclid?: string;
}

export default function MobilePopupModal({ brands, gclid }: MobilePopupModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#020617] overflow-y-auto md:hidden">
      <div className="flex flex-col min-h-screen">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#0f172a] border-b border-white/10 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-vibrant rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="font-bold text-sm tracking-tight uppercase">MELHOR10 <span className="text-gold-bright">MOBILE</span></span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-white/40 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 px-4 py-8">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-vibrant/10 border border-emerald-vibrant/20 mb-4">
              <span className="text-[10px] font-bold text-emerald-vibrant uppercase tracking-widest">Ofertas Exclusivas Mobile</span>
            </div>
            <h2 className="text-3xl font-black mb-2 italic gold-text uppercase">Melhores Apostas Mobile</h2>
            <p className="text-sm text-white/60">As melhores apps para jogadores portugueses</p>
          </div>

          <div className="flex flex-col gap-4">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} gclid={gclid} />
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-black/40 border-t border-white/5 p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-6 flex items-center justify-center bg-red-600 text-white font-bold rounded-full text-[10px]">18+</span>
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Jogue com Responsabilidade</span>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">© 2026 MELHOR10.COM</p>
        </div>
      </div>
    </div>
  );
}
