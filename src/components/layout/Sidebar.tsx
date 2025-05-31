import  { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Activity, Home, BarChart, MessageSquare, Gift, Users, HelpCircle, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpSupportModal } from '../modals/HelpSupportModal';
import { LogoutConfirmModal } from '../modals/LogoutConfirmModal';

interface SidebarProps {
  show: boolean;
  onClose: () => void;
}

export const Sidebar = ({ show, onClose }: SidebarProps) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const navItems = [
    { name: 'Início', path: '/', icon: <Home size={20} /> },
    { name: 'Dashboard', path: '/dashboard', icon: <BarChart size={20} /> },
    { name: 'Planos', path: '/planos', icon: <Activity size={20} /> },
    { name: 'Depoimentos', path: '/depoimentos', icon: <MessageSquare size={20} /> },
    { name: 'Teste Gratuito', path: '/teste-gratuito', icon: <Gift size={20} /> },
    { name: 'Contato', path: '/contato', icon: <Users size={20} /> },
  ];

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {show && window.innerWidth < 1024 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {show && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 z-50 h-full w-64 bg-dark-light border-r border-dark-lighter shadow-xl"
          >
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-dark-lighter flex items-center justify-between">
                <div className="flex items-center">
                  <Activity className="h-6 w-6 text-primary-neon mr-2" />
                  <h2 className="text-xl font-bold text-gradient">MoveUp</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-md hover:bg-dark-lighter lg:hidden"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto scrollbar-hide">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`sidebar-item ${activeItem === item.path ? 'active' : ''}`}
                    onClick={() => {
                      setActiveItem(item.path);
                      if (window.innerWidth < 1024) onClose();
                    }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.path === '/teste-gratuito' && (
                      <span className="ml-auto text-xs px-2 py-1 rounded-full bg-primary-neon text-black font-medium">
                        Novo
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>

              <div className="p-4 border-t border-dark-lighter">
                <div 
                  className="sidebar-item cursor-pointer"
                  onClick={() => setShowHelpModal(true)}
                >
                  <HelpCircle size={20} />
                  <span>Ajuda & Suporte</span>
                </div>
                <div 
                  className="sidebar-item mt-2 cursor-pointer"
                  onClick={() => setShowLogoutModal(true)}
                >
                  <LogOut size={20} />
                  <span>Sair</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Modals */}
      <HelpSupportModal 
        isOpen={showHelpModal} 
        onClose={() => setShowHelpModal(false)} 
      />
      
      <LogoutConfirmModal 
        isOpen={showLogoutModal} 
        onClose={() => setShowLogoutModal(false)} 
      />
    </>
  );
};
 