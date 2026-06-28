import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-black mb-8 italic gold-text">Política de Privacidade</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-white/60">
            <p>
              No Melhor10.com, acessível em melhor10.com, uma das nossas principais prioridades é a privacidade dos nossos visitantes. Este documento de Política de Privacidade contém tipos de informações que são recolhidas e registadas pelo Melhor10.com e como as utilizamos.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Ficheiros de Log</h2>
            <p>
              O Melhor10.com segue um procedimento padrão de utilização de ficheiros de log. Estes ficheiros registam os visitantes quando estes visitam websites. Todas as empresas de alojamento fazem isto e faz parte das análises dos serviços de alojamento. As informações recolhidas pelos ficheiros de log incluem endereços de protocolo de internet (IP), tipo de navegador, Fornecedor de Serviços de Internet (ISP), carimbo de data e hora, páginas de referência/saída e possivelmente o número de cliques. Estes não estão ligados a qualquer informação que seja pessoalmente identificável. O objetivo das informações é analisar tendências, administrar o site, rastrear o movimento dos utilizadores no website e recolher informações demográficas.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Cookies e Web Beacons</h2>
            <p>
              Como qualquer outro website, o Melhor10.com utiliza &quot;cookies&quot;. Estes cookies são utilizados para armazenar informações, incluindo as preferências dos visitantes e as páginas no website que o visitante acedeu ou visitou. As informações são utilizadas para otimizar a experiência dos utilizadores, personalizando o conteúdo da nossa página web com base no tipo de navegador dos visitantes e/ou outras informações.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Cookie DART DoubleClick da Google</h2>
            <p>
              A Google é um dos fornecedores terceiros no nosso site. Também utiliza cookies, conhecidos como cookies DART, para servir anúncios aos visitantes do nosso site com base na sua visita a www.website.com e outros sites na internet. No entanto, os visitantes podem optar por recusar a utilização de cookies DART visitando a Política de Privacidade da rede de anúncios e conteúdos da Google no seguinte URL – <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a>
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Os Nossos Parceiros Publicitários</h2>
            <p>
              Alguns dos anunciantes no nosso site podem utilizar cookies e web beacons. Os nossos parceiros publicitários estão listados abaixo. Cada um dos nossos parceiros publicitários tem a sua própria Política de Privacidade para as suas políticas sobre dados de utilizadores. Para facilitar o acesso, criámos uma hiperligação para as suas Políticas de Privacidade abaixo.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Google: <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Políticas de Privacidade de Terceiros</h2>
            <p>
              A Política de Privacidade do Melhor10.com não se aplica a outros anunciantes ou websites. Assim, aconselhamos que consulte as respetivas Políticas de Privacidade destes servidores de anúncios de terceiros para obter informações mais detalhadas. Pode incluir as suas práticas e instruções sobre como autoexcluir-se de certas opções.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Consentimento</h2>
            <p>
              Ao utilizar o nosso website, consente com a nossa Política de Privacidade e concorda com os seus Termos e Condições.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
