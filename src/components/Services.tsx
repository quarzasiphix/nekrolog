
import React, { useEffect, useRef } from 'react';
import { Heart, Truck, Flame } from 'lucide-react';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="glass-card p-8 rounded-xl flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-medium mb-4 text-funeral-800">{title}</h3>
      <p className="text-funeral-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-funeral-50 to-white">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-700 text-center mb-16"
        >
          <h2 className="section-title">Usługi Pogrzebowe</h2>
          <p className="section-subtitle">
            Oferujemy kompleksowe wsparcie dla rodzin w trudnych chwilach
          </p>
        </div>
        
        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ServiceCard 
            icon={<Heart className="w-8 h-8 text-primary" />}
            title="Kompleksowa Organizacja Ceremonii"
            description="Przejmiemy wszelkie obowiązki i formalności związane z pożegnaniem zmarłej osoby, aby umożliwić rodzinie godne przeżywanie żałoby."
            delay={100}
          />
          <ServiceCard 
            icon={<Truck className="w-8 h-8 text-primary" />}
            title="Przewóz Zwłok"
            description="Zapewniamy profesjonalny przewóz ciał zmarłych, trumien oraz urn na terenie całego kraju i Europy."
            delay={300}
          />
          <ServiceCard 
            icon={<Flame className="w-8 h-8 text-primary" />}
            title="Kremacja"
            description="Zajmujemy się organizacją kremacji oraz przygotowaniem ceremonii, zgodnie z życzeniami rodziny."
            delay={500}
          />
        </div>
        
        {/* Features List */}
        <div className="bg-funeral-100 rounded-xl p-8 md:p-12 shadow-inner">
          <h3 className="text-2xl font-playfair text-funeral-800 mb-6 text-center">Prowadzimy pełną obsługę pogrzebów:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">+</span>
              </div>
              <p className="ml-4 text-funeral-700">W imieniu klienta załatwiamy wszelkie formalności</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">+</span>
              </div>
              <p className="ml-4 text-funeral-700">Podejmujemy się opieki nad ciałem zmarłego</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">+</span>
              </div>
              <p className="ml-4 text-funeral-700">Oferujemy akcesoria pogrzebowe</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">+</span>
              </div>
              <p className="ml-4 text-funeral-700">Organizujemy pogrzeby różnych wyznań religijnych oraz pogrzeby świeckie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
