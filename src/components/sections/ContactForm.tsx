import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    gymSize: 'medium'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        gymSize: 'medium'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  
  return (
    <section className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-gray-300">
              Tem dúvidas sobre como o MoveUp pode ajudar sua academia? Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
            </p>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glassmorphism p-6 md:p-8"
          >
            {isSubmitted ? (
              <div className="bg-green-500/20 text-green-400 p-4 rounded-lg flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nome Completo
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
                    Email
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
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="gymSize" className="block text-sm font-medium text-gray-300">
                    Tamanho da Academia
                  </label>
                  <select
                    id="gymSize"
                    name="gymSize"
                    value={formData.gymSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
                  >
                    <option value="small">Pequena (até 100 alunos)</option>
                    <option value="medium">Média (100-300 alunos)</option>
                    <option value="large">Grande (300+ alunos)</option>
                  </select>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    variant="neon"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : <Send size={18} />}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </Button>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
 