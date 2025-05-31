import  { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { CTASection } from '../components/sections/CTASection';
import { ContactForm } from '../components/sections/ContactForm';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517438984742-1262db08379e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwbW9kZXJuJTIwcHJlbWl1bSUyMGRhcmt8ZW58MHx8fHwxNzQ4NjQzNzA5fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
              alt="Woman jumping above gray sand" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <CTASection />
      <ContactForm />
    </div>
  );
};
 