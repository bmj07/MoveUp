import  { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { SignupModal } from '../modals/SignupModal';

export const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleStartTrial = () => {
    setIsModalOpen(true);
  };
  
  return (
    <>
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 to-dark opacity-70" />
        
        <motion.div 
          className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary-neon/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="glassmorphism max-w-4xl mx-auto p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para <span className="text-gradient">revolucionar</span> sua academia?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Experimente o MoveUp gratuitamente por 15 dias e descubra como a inteligência artificial pode transformar a gestão da sua academia.
              </p>
              <Button 
                variant="neon"
                icon={<ArrowRight size={18} />}
                onClick={handleStartTrial}
                className="mx-auto"
              >
                Iniciar Teste Gratuito
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
 