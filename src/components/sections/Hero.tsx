import  { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { SignupModal } from '../modals/SignupModal';

export const Hero = () => {
  const navigate = useNavigate();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isDashboardLoading, setIsDashboardLoading] = useState(false);
  
  const handleStartTrial = () => {
    setIsTrialModalOpen(true);
  };
  
  const handleViewDashboard = () => {
    setIsDashboardLoading(true);
    
    // Simulate API call delay then navigate
    setTimeout(() => {
      setIsDashboardLoading(false);
      navigate('/dashboard');
    }, 500);
  };
  
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 to-transparent opacity-50" />
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary-neon/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-6 bg-dark-lighter px-4 py-2 rounded-full"
            >
              <Activity className="w-5 h-5 text-primary-neon mr-2" />
              <span className="text-sm">Inteligência artificial para sua academia</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient neon-glow">MoveUp</span> - Sua Academia Inteligente
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl"
            >
              Reduza a evasão de alunos utilizando inteligência artificial para prever quais alunos estão propensos a cancelar a matrícula e tome ações preventivas.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="neon"
                icon={<ArrowRight size={18} />}
                onClick={handleStartTrial}
              >
                Experimente Grátis
              </Button>
              <Button 
                variant="outline"
                onClick={handleViewDashboard}
                disabled={isDashboardLoading}
              >
                {isDashboardLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Carregando...
                  </span>
                ) : (
                  'Ver Dashboard'
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SignupModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </>
  );
};
 