import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ResponsibleGambling() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black mb-8 italic gold-text">Jogo Responsável</h1>
          
          <div className="prose prose-invert max-w-none space-y-8 text-white/60">
            <p className="text-xl font-medium italic text-white/80">
              No Melhor10, acreditamos que as apostas devem ser sempre uma forma de entretenimento e nunca uma fonte de stress ou problemas financeiros.
            </p>

            <h2 className="text-2xl font-black text-white mt-12 uppercase tracking-widest">O Nosso Compromisso</h2>
            <p>
              Estamos empenhados em promover práticas de jogo seguro e em fornecer aos nossos utilizadores as ferramentas e informações necessárias para manter o controlo sobre a sua atividade de jogo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="betting-card p-8 rounded-2xl border-emerald-vibrant/20">
                <h3 className="text-xl font-black text-white mb-4 italic">Sinais de Alerta</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Gastar mais dinheiro do que pode perder</li>
                  <li>• Tentar recuperar perdas com novas apostas</li>
                  <li>• Negligenciar responsabilidades pessoais ou profissionais</li>
                  <li>• Sentir ansiedade ou irritabilidade quando não está a jogar</li>
                </ul>
              </div>
              <div className="betting-card p-8 rounded-2xl border-gold-bright/20">
                <h3 className="text-xl font-black text-white mb-4 italic">Dicas de Segurança</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Defina limites de depósito e tempo</li>
                  <li>• Nunca jogue sob a influência de álcool</li>
                  <li>• Faça pausas regulares</li>
                  <li>• Lembre-se: a casa tem sempre vantagem</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-black text-white mt-12 uppercase tracking-widest">Recursos de Ajuda em Portugal</h2>
            <p>
              Se sente que o jogo está a tornar-se um problema, existem várias organizações em Portugal que oferecem apoio gratuito e confidencial:
            </p>

            <div className="space-y-4">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-black text-white mb-2">Linha Vida (SICAD)</h4>
                <p className="text-sm mb-4">Serviço de aconselhamento telefónico anónimo e gratuito.</p>
                <Link href="tel:1414" className="text-2xl font-black text-emerald-vibrant hover:text-gold-bright transition-colors">1414</Link>
              </div>
              
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-black text-white mb-2">SRIJ - Autoexclusão</h4>
                <p className="text-sm mb-4">Pode solicitar a sua autoexclusão de todos os sites de jogo licenciados em Portugal através do portal do regulador.</p>
                <Link href="https://www.srij.turismodeportugal.pt/" target="_blank" className="text-emerald-vibrant font-bold hover:underline">Visitar Portal SRIJ</Link>
              </div>
            </div>

            <h2 className="text-2xl font-black text-white mt-12 uppercase tracking-widest">Proteção de Menores</h2>
            <p>
              O jogo é estritamente proibido para menores de 18 anos. Utilizamos verificações rigorosas e incentivamos os pais a utilizarem software de filtragem para evitar o acesso de menores a sites de apostas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
