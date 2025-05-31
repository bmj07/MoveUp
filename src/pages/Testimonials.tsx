import  { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { TestimonialCard } from '../components/ui/TestimonialCard';

export const Testimonials = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="p-3 rounded-full bg-primary-dark/50 text-primary-neon">
            <MessageSquare size={24} />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          O que nossos clientes <span className="text-gradient">dizem</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300"
        >
          Descubra como o MoveUp está transformando a gestão de academias e ajudando proprietários a reduzir a evasão de alunos.
        </motion.p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="glassmorphism p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Resultados <span className="text-gradient">comprovados</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-16 h-16 bg-primary-dark/50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-neon">32%</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Redução na taxa de evasão</h3>
                      <p className="text-gray-400">Média dos clientes após 6 meses de uso</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-16 h-16 bg-primary-dark/50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-neon">25%</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Aumento na renovação de planos</h3>
                      <p className="text-gray-400">Através de ofertas direcionadas</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-16 h-16 bg-primary-dark/50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-neon">4.2x</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Retorno sobre investimento</h3>
                      <p className="text-gray-400">Média entre todos os clientes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxmaXRuZXNzJTIwZ3ltJTIwbW9kZXJuJTIwcHJlbWl1bSUyMGRhcmt8ZW58MHx8fHwxNzQ4NjQzNzA5fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                  alt="Woman doing yoga meditation" 
                  className="rounded-xl w-full h-auto object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-24 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Empresas que confiam no <span className="text-gradient">MoveUp</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center justify-center p-6 bg-dark-light rounded-lg h-24">
            <div className="text-xl font-bold text-gray-400">FitCenter</div>
          </div>
          <div className="flex items-center justify-center p-6 bg-dark-light rounded-lg h-24">
            <div className="text-xl font-bold text-gray-400">Evolution</div>
          </div>
          <div className="flex items-center justify-center p-6 bg-dark-light rounded-lg h-24">
            <div className="text-xl font-bold text-gray-400">PowerGym</div>
          </div>
          <div className="flex items-center justify-center p-6 bg-dark-light rounded-lg h-24">
            <div className="text-xl font-bold text-gray-400">Studio Fit</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
 