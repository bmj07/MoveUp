import  { useState } from 'react';
import { X, Mail, MessageSquare, FileText, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

interface HelpSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpSupportModal = ({ isOpen, onClose }: HelpSupportModalProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setSelectedOption(null);
      setMessage('');
      onClose();
    }, 3000);
  };

  const helpOptions = [
    { id: 'email', icon: <Mail size={20} />, title: 'Email de Suporte', description: 'Envie um email e receba resposta em até 24h' },
    { id: 'chat', icon: <MessageSquare size={20} />, title: 'Chat ao Vivo', description: 'Converse com nossa equipe em tempo real' },
    { id: 'docs', icon: <FileText size={20} />, title: 'Documentação', description: 'Acesse nossos tutoriais e guias' },
    { id: 'faq', icon: <HelpCircle size={20} />, title: 'Perguntas Frequentes', description: 'Respostas para dúvidas comuns' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-dark-light border border-dark-lighter rounded-xl shadow-2xl w-full max-w-2xl z-10 overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-dark-lighter">
              <h2 className="text-xl font-bold">Ajuda & Suporte</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-dark"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Solicitação Enviada!</h3>
                  <p className="text-gray-400">Agradecemos seu contato. Nossa equipe responderá em breve.</p>
                </div>
              ) : selectedOption ? (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-lg font-medium mb-4">
                    {helpOptions.find(option => option.id === selectedOption)?.title}
                  </h3>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Como podemos ajudar?
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none focus:ring-1 focus:ring-primary-neon text-white"
                      placeholder="Descreva sua dúvida ou problema..."
                      required
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-1/2"
                      onClick={() => setSelectedOption(null)}
                    >
                      Voltar
                    </Button>
                    <Button
                      type="submit"
                      variant="neon"
                      className="w-1/2"
                    >
                      Enviar
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {helpOptions.map((option) => (
                    <div
                      key={option.id}
                      className="p-4 rounded-lg border border-dark-lighter hover:border-primary-neon bg-dark cursor-pointer transition-all duration-300"
                      onClick={() => setSelectedOption(option.id)}
                    >
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-primary-dark/50 text-primary-neon rounded-lg mr-3">
                          {option.icon}
                        </div>
                        <h3 className="font-medium">{option.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400">{option.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
 