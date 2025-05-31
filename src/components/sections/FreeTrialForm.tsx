import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const FreeTrialForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    studentsCount: '',
    how: 'social'
  });
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };
  
  const prevStep = () => {
    setStep(1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      login(); // Set authenticated state
    }, 1500);
  };
  
  const handleAccessDashboard = () => {
    navigate('/dashboard');
  };
  
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glassmorphism p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Parabéns! Seu teste gratuito foi ativado.</h3>
        <p className="text-gray-300 mb-6">
          Enviamos um email para <span className="text-primary-neon">{formData.email}</span> com as instruções para acessar sua conta de teste. O período de 15 dias começa agora!
        </p>
        <Button variant="outline" onClick={handleAccessDashboard}>
          Acessar Dashboard
        </Button>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glassmorphism p-6 md:p-8"
    >
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-full bg-primary-dark text-primary-neon">
          <Gift size={24} />
        </div>
        <h3 className="text-xl font-bold ml-3">Experimente Grátis por 15 Dias</h3>
      </div>
      
      <form onSubmit={step === 1 ? nextStep : handleSubmit}>
        {step === 1 ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Profissional *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
              />
            </div>
            
            <Button type="submit" variant="neon" className="w-full mt-6">
              Continuar
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                Nome da Academia *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="studentsCount" className="block text-sm font-medium text-gray-300">
                Quantidade Aproximada de Alunos *
              </label>
              <input
                type="number"
                id="studentsCount"
                name="studentsCount"
                value={formData.studentsCount}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="how" className="block text-sm font-medium text-gray-300">
                Como nos conheceu?
              </label>
              <select
                id="how"
                name="how"
                value={formData.how}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
              >
                <option value="social">Redes Sociais</option>
                <option value="search">Busca na Internet</option>
                <option value="friend">Indicação</option>
                <option value="event">Evento</option>
                <option value="other">Outro</option>
              </select>
            </div>
            
            <div className="text-xs text-gray-400 mt-4">
              Ao se inscrever, você concorda com nossos Termos de Serviço e Política de Privacidade.
            </div>
            
            <div className="flex space-x-4 mt-6">
              <Button 
                type="button" 
                variant="outline" 
                className="w-1/2"
                onClick={prevStep}
              >
                Voltar
              </Button>
              <Button 
                type="submit" 
                variant="neon" 
                className="w-1/2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Ativando...
                  </span>
                ) : (
                  'Começar Teste Grátis'
                )}
              </Button>
            </div>
          </div>
        )}
      </form>
    </motion.div>
  );
};
 