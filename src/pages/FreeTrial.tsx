import  { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FreeTrialForm } from '../components/sections/FreeTrialForm';

export const FreeTrial = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560233075-4c1e2007908e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxmaXRuZXNzJTIwZ3ltJTIwbW9kZXJuJTIwcHJlbWl1bSUyMGRhcmt8ZW58MHx8fHwxNzQ4NjQzNzA5fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                alt="Woman doing yoga near rock during daytime" 
                className="rounded-2xl shadow-2xl max-h-[600px] object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Teste o <span className="text-gradient neon-glow">MoveUp</span> gratuitamente
                </h2>
                <p className="text-gray-300 max-w-md">
                  Experimente todas as funcionalidades sem compromisso por 15 dias e descubra como podemos ajudar sua academia.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FreeTrialForm />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            O que você vai receber no <span className="text-gradient">teste gratuito</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary-neon">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Acesso Completo</h3>
              <p className="text-gray-300">
                Acesso a todas as funcionalidades do plano Intermediário, sem limitações durante 15 dias.
              </p>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary-neon">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sessão de Treinamento</h3>
              <p className="text-gray-300">
                Uma sessão de treinamento online com nossa equipe para ajudar você a configurar o sistema.
              </p>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary-neon">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Importação de Dados</h3>
              <p className="text-gray-300">
                Suporte para importar seus dados existentes e começar a usar o sistema imediatamente.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ainda com dúvidas?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Se precisar de mais informações ou tiver perguntas específicas, nossa equipe está pronta para ajudar.
          </p>
          <Button 
            variant="outline"
            icon={<ArrowRight size={18} />}
            onClick={() => window.location.href = '/contato'}
          >
            Falar com um Especialista
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
 