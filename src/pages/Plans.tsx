import  { motion } from 'framer-motion';
import { plans } from '../data/plans';
import { PlanCard } from '../components/ui/PlanCard';

export const Plans = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Escolha o plano <span className="text-gradient">ideal</span> para sua academia
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300"
        >
          Oferecemos diferentes opções para atender academias de todos os tamanhos. Todos os planos incluem nosso algoritmo de IA para previsão de evasão.
        </motion.p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Tem dúvidas sobre qual plano escolher?</p>
          <a 
            href="/contato" 
            className="text-primary-neon hover:underline inline-flex items-center"
          >
            Entre em contato para uma consultoria personalizada
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
        >
          Perguntas Frequentes
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Como funciona o período de teste gratuito?</h3>
            <p className="text-gray-300">
              O teste gratuito de 15 dias dá acesso completo a todas as funcionalidades do plano Intermediário. Não exigimos cartão de crédito para começar, e você receberá um lembrete 3 dias antes do término do período de teste.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Preciso instalar algum software?</h3>
            <p className="text-gray-300">
              Não, o MoveUp é 100% baseado na nuvem. Você só precisa de um navegador e conexão com a internet para acessar a plataforma de qualquer dispositivo.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Como faço para importar meus dados?</h3>
            <p className="text-gray-300">
              O sistema aceita importação de dados via Excel ou Google Sheets. Temos modelos prontos que você pode baixar e preencher, ou nossa equipe pode ajudar na configuração inicial sem custo adicional.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Posso mudar de plano depois?</h3>
            <p className="text-gray-300">
              Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e o valor é ajustado proporcionalmente ao tempo restante do ciclo de cobrança.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Oferecem treinamento para minha equipe?</h3>
            <p className="text-gray-300">
              Sim, todos os planos incluem uma sessão inicial de treinamento. Os planos Intermediário e Premium incluem treinamentos adicionais e materiais de suporte exclusivos para sua equipe.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
 