import  { useState } from 'react';
import { Plan } from '../../types';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { SignupModal } from '../modals/SignupModal';

interface PlanCardProps {
  plan: Plan;
}

export const PlanCard = ({ plan }: PlanCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleStartPlan = () => {
    setIsModalOpen(true);
  };
  
  return (
    <>
      <div className={`card relative ${plan.recommended ? 'border-primary-neon' : ''} flex flex-col h-full`}>
        {plan.recommended && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-neon text-black px-3 py-1 rounded-full text-xs font-semibold">
            Recomendado
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <div className="flex items-end mb-6">
          <span className="text-3xl font-extrabold">R${plan.price}</span>
          <span className="text-gray-400 ml-1">/{plan.billing}</span>
        </div>
        
        <p className="text-gray-400 mb-6">{plan.description}</p>
        
        <div className="space-y-3 flex-grow mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check size={18} className="text-primary-neon mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant={plan.recommended ? 'neon' : 'outline'} 
          className="w-full mt-auto"
          onClick={handleStartPlan}
        >
          Começar agora
        </Button>
      </div>
      
      <SignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planName={plan.name}
      />
    </>
  );
};
 