import  { useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
}

export const SignupModal = ({ isOpen, onClose, planName }: SignupModalProps) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    agreeTerms: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
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
      
      // Redirect after 2 seconds
      setTimeout(() => {
        onClose();
        navigate('/dashboard');
      }, 2000);
    }, 1500);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-dark-light border border-dark-lighter rounded-xl shadow-2xl w-full max-w-4xl z-10 overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-dark-lighter">
              <h2 className="text-xl font-bold">
                {isSubmitted ? 'Conta Criada com Sucesso!' : (
                  planName ? `Assinar ${planName}` : 'Criar Sua Conta'
                )}
              </h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-dark"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row">
              {/* Image Section - Hidden on mobile */}
              <div className="hidden md:block md:w-2/5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1712493226572-613fa1506044?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwZm9ybSUyMHNpZ251cCUyMGRhcmslMjBibHVlfGVufDB8fHx8MTc0ODY0NzYzOHww&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800" 
                  alt="Fitness class" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-light/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold mb-2">MoveUp</h3>
                  <p className="text-gray-300 text-sm">
                    Transforme sua academia com inteligência artificial e reduza a evasão de alunos.
                  </p>
                </div>
              </div>
              
              {/* Form Section */}
              <div className="md:w-3/5 p-6">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Parabéns! Sua conta foi criada.</h3>
                    <p className="text-gray-300 mb-3">
                      Estamos redirecionando você para o dashboard...
                    </p>
                    <div className="w-12 h-1 bg-dark-lighter rounded-full mx-auto mt-6 relative overflow-hidden">
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-primary-neon"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2 }}
                      />
                    </div>
                  </div>
                ) : (
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
                            placeholder="Seu nome completo"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
                            placeholder="seu.email@exemplo.com"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                            Senha *
                          </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength={8}
                            className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
                            placeholder="Mínimo de 8 caracteres"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                            Confirmar Senha *
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
                            placeholder="Confirme sua senha"
                          />
                          {formData.password && formData.confirmPassword && 
                           formData.password !== formData.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">As senhas não coincidem</p>
                          )}
                        </div>
                        
                        <Button 
                          type="submit" 
                          variant="neon" 
                          className="w-full mt-6"
                          disabled={formData.password !== formData.confirmPassword}
                          icon={<ArrowRight size={16} />}
                        >
                          Próximo
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
                            placeholder="Nome da sua academia"
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
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                        
                        <div className="mt-6">
                          <label className="flex items-start">
                            <input
                              type="checkbox"
                              name="agreeTerms"
                              checked={formData.agreeTerms}
                              onChange={handleChange}
                              required
                              className="mt-1 rounded text-primary-neon focus:ring-primary-neon"
                            />
                            <span className="ml-2 text-sm text-gray-300">
                              Concordo com os <a href="#" className="text-primary-neon hover:underline">Termos de Serviço</a> e <a href="#" className="text-primary-neon hover:underline">Política de Privacidade</a> da MoveUp.
                            </span>
                          </label>
                        </div>
                        
                        {planName && (
                          <div className="mt-4 p-4 bg-primary-dark/30 border border-primary-dark rounded-lg">
                            <div className="flex justify-between items-center">
                              <span>Plano selecionado:</span>
                              <span className="font-semibold text-primary-neon">{planName}</span>
                            </div>
                          </div>
                        )}
                        
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
                            disabled={isSubmitting || !formData.agreeTerms}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processando...
                              </span>
                            ) : (
                              'Criar Conta'
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
 