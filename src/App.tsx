import  { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Plans } from './pages/Plans';
import { Testimonials } from './pages/Testimonials';
import { FreeTrial } from './pages/FreeTrial';
import { Contact } from './pages/Contact';
import { Sidebar } from './components/layout/Sidebar';

function App() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-dark">
      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />
      
      <main className={`flex-1 transition-all duration-300 ${showSidebar ? 'lg:ml-64' : ''}`}>
        <div className="lg:hidden fixed top-4 left-4 z-30">
          <button 
            onClick={() => setShowSidebar(true)}
            className="p-2 rounded-lg bg-dark-light text-white"
          >
            <Menu size={24} />
          </button>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/planos" element={<Plans />} />
          <Route path="/depoimentos" element={<Testimonials />} />
          <Route path="/teste-gratuito" element={<FreeTrial />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
 