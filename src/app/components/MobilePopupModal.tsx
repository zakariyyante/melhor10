"use client";

import { useState, useEffect } from "react";
import BrandCard from "./BrandCard";
import { Brand } from "../data/brands";
import Image from "next/image";

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
        <div className="sticky top-0 z-10 bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="relative h-10 w-40">
            <Image
              src="/logo.png"
              alt="Melhor10"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-white/40 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 px-4 py-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black italic text-white uppercase leading-tight">
              Os Melhores <span className="text-emerald-vibrant">Casinos Móveis</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {brands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} rank={index + 1} gclid={gclid} />
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-black/40 border-t border-white/5 p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-6 flex items-center justify-center bg-red-600/20 border border-red-600/40 text-red-500 font-bold rounded-full text-[10px]">18+</span>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Jogue com Responsabilidade</span>
          </div>
          <p className="text-[8px] text-white/20 uppercase tracking-[0.2em] font-bold">
            Apenas para maiores de 18 anos. Regulado pelo SRIJ Portugal.
          </p>
        </div>
      </div>
    </div>
  );
}
