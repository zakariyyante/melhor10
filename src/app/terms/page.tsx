import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-black mb-8 italic gold-text">Termos de Serviço</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-white/60">
            <p>
              Bem-vindo ao Melhor10.com!
            </p>
            <p>
              Estes termos e condições descrevem as regras e regulamentos para a utilização do Website do Melhor10.com, localizado em melhor10.com.
            </p>
            <p>
              Ao aceder a este website, assumimos que aceita estes termos e condições. Não continue a utilizar o Melhor10.com se não concordar em aceitar todos os termos e condições declarados nesta página.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Cookies</h2>
            <p>
              Empregamos a utilização de cookies. Ao aceder ao Melhor10.com, concordou em utilizar cookies de acordo com a Política de Privacidade do Melhor10.com.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Licença</h2>
            <p>
              Salvo indicação em contrário, o Melhor10.com e/ou os seus licenciadores detêm os direitos de propriedade intelectual de todo o material no Melhor10.com. Todos os direitos de propriedade intelectual são reservados. Pode aceder a isto a partir do Melhor10.com para seu uso pessoal sujeito às restrições definidas nestes termos e condições.
            </p>
            <p>Não deve:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republicar material do Melhor10.com</li>
              <li>Vender, alugar ou sublicenciar material do Melhor10.com</li>
              <li>Reproduzir, duplicar ou copiar material do Melhor10.com</li>
              <li>Redistribuir conteúdo do Melhor10.com</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Responsabilidade pelo Conteúdo</h2>
            <p>
              Não seremos responsáveis por qualquer conteúdo que apareça no seu Website. Concorda em proteger-nos e defender-nos contra todas as reclamações que surjam no seu Website. Nenhum link deve aparecer em qualquer Website que possa ser interpretado como difamatório, obsceno ou criminoso, ou que infrinja, viole de outra forma, ou defenda a infração ou outra violação de quaisquer direitos de terceiros.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Reserva de Direitos</h2>
            <p>
              Reservamos o direito de solicitar que remova todos os links ou qualquer link específico para o nosso Website. Aprova a remoção imediata de todos os links para o nosso Website mediante solicitação. Também reservamos o direito de alterar estes termos e condições e a sua política de links a qualquer momento. Ao ligar continuamente ao nosso Website, concorda em estar vinculado e seguir estes termos e condições de ligação.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 uppercase tracking-widest">Aviso Legal</h2>
            <p>
              Na extensão máxima permitida pela lei aplicável, excluímos todas as representações, garantias e condições relacionadas com o nosso website e a utilização deste website. Nada neste aviso legal irá:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>limitar ou excluir a nossa ou a sua responsabilidade por morte ou danos pessoais;</li>
              <li>limitar ou excluir a nossa ou a sua responsabilidade por fraude ou deturpação fraudulenta;</li>
              <li>limitar qualquer uma das nossas ou das suas responsabilidades de qualquer forma que não seja permitida pela lei aplicável; ou</li>
              <li>excluir qualquer uma das nossas ou das suas responsabilidades que não possam ser excluídas sob a lei aplicável.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
