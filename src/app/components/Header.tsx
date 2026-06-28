"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Casas de Apostas", href: "#brands" },
    { name: "Guia", href: "#guide" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#020617]/95 backdrop-blur-md border-b-2 border-emerald-vibrant/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative h-12 w-48 md:w-64 hover:scale-105 transition-transform">
          <Image
            src="/logo.png"
            alt="Melhor10"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.25em] text-white/60 hover:text-gold-bright transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Link 
            href="#brands" 
            className="cta-button px-8 py-3 rounded-lg text-xs italic inline-block"
          >
            Apostar Agora
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-gold-bright"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0f172a] border-b-4 border-emerald-vibrant px-4 py-10 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-black uppercase tracking-[0.4em] text-white/70 hover:text-gold-bright"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#brands" 
              className="cta-button w-full text-center py-5 rounded-xl text-lg italic"
              onClick={() => setIsMenuOpen(false)}
            >
              Ver Top 10
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
