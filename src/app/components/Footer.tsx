import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040814] pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-24">
          {/* Logo */}
          <Link href="/" className="relative h-16 w-64 md:w-80 mb-16">
            <Image
              src="/logo.png"
              alt="Melhor10"
              fill
              className="object-contain"
            />
          </Link>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 w-full max-w-5xl">
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] italic">Navegação</h4>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Início</Link>
                <Link href="#brands" className="text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Top 10 Casas</Link>
                <Link href="#guide" className="text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Guia de Apostas</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] italic">Empresa</h4>
              <nav className="flex flex-col gap-4">
                <Link href="#about" className="text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Sobre Nós</Link>
                <Link href="#contact" className="text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Contacto</Link>
                <Link href="/privacy" className="text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Política de Privacidade</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] italic">Legal</h4>
              <nav className="flex flex-col gap-4">
                <Link href="/terms" className="text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Termos de Serviço</Link>
                <Link href="/privacy" className="text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Política de Cookies</Link>
                <Link href="/responsible-gambling" className="text-white/30 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Jogo Responsável</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] italic">Recursos</h4>
              <nav className="flex flex-col gap-4">
                <Link href="https://www.sicad.pt/" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Linha Vida</Link>
                <Link href="https://www.srij.turismodeportugal.pt/" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Portal SRIJ</Link>
                <Link href="https://www.begambleaware.org/" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">BeGambleAware</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-[10px] text-white/20 leading-relaxed font-bold uppercase tracking-widest">
            Melhor10.com é um centro de análise independente. Operamos como afiliados e podemos receber comissões dos operadores listados. As nossas análises são estritamente objetivas e baseadas em análises profissionais. Jogar envolve riscos. Jogue com responsabilidade. Regulado pelo SRIJ (Serviço de Regulação e Inspeção de Jogos).
          </p>
        </div>

        {/* Responsible Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 mb-20">
          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center font-black text-sm italic">18+</div>
          <Link href="https://www.srij.turismodeportugal.pt/" target="_blank">
            <Image src="/srij.svg" alt="SRIJ" width={100} height={50} className="h-10 w-auto" />
          </Link>
          <Link href="https://www.begambleaware.org/" target="_blank">
            <Image src="/begambleaware.svg" alt="BeGambleAware" width={140} height={50} className="h-10 w-auto" />
          </Link>
          <Link href="https://www.gamcare.org.uk/" target="_blank">
            <Image src="/GamCare.svg" alt="GamCare" width={100} height={50} className="h-10 w-auto" />
          </Link>
          <Link href="https://www.ibas-uk.com/" target="_blank">
            <Image src="/IBAS.svg" alt="IBAS" width={100} height={50} className="h-10 w-auto" />
          </Link>
          <Link href="https://gordonmoody.org.uk/" target="_blank">
            <Image src="/gordonmoody.png" alt="Gordon Moody" width={100} height={50} className="h-10 w-auto" />
          </Link>
          <Link href="https://www.begambleaware.org/" target="_blank">
            <Image src="/GambleAware.webp" alt="GambleAware" width={100} height={50} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[9px] uppercase tracking-[0.6em] text-white/10 font-black">
            © {currentYear} MELHOR10.COM — O PADRÃO DE OURO DAS APOSTAS
          </p>
        </div>
      </div>
    </footer>
  );
}
