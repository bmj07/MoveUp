import  { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoutConfirmModal = ({ isOpen, onClose }: LogoutConfirmModalProps) => {
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    onClose();
    // Redirect to home page
    window.location.href = '/';
  };

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
            className="bg-dark-light border border-dark-lighter rounded-xl shadow-2xl w-full max-w-md z-10"
          >
            <div className="flex items-center justify-between p-6 border-b border-dark-lighter">
              <h2 className="text-xl font-bold">Confirmar Logout</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-dark"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 mb-6">
                Tem certeza que deseja sair da sua conta? Você precisará fazer login novamente para acessar o painel de controle.
              </p>
              
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="w-1/2"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  variant="neon"
                  className="w-1/2"
                  onClick={handleLogout}
                >
                  Confirmar Saída
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
 