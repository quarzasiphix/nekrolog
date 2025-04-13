
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
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
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
      className="glass-card p-8 rounded-xl flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-500"
    >
      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-medium mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
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
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
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
    <section id="services" className="py-20 bg-gradient-to-b from-black/90 to-black/95">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-500 text-center mb-16"
        >
          <h2 className="section-title">Kompleksowe Usługi Pogrzebowe</h2>
          <p className="section-subtitle">
            Zapewniamy profesjonalne wsparcie dla rodzin w trudnych chwilach żałoby
          </p>
        </div>
        
        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ServiceCard 
            icon={<Heart className="w-8 h-8 text-primary" />}
            title="Kompleksowa Organizacja Ceremonii"
            description="Przejmiemy wszelkie obowiązki i formalności związane z pożegnaniem zmarłej osoby, aby umożliwić rodzinie godne przeżywanie żałoby."
            delay={50}
          />
          <ServiceCard 
            icon={<Truck className="w-8 h-8 text-primary" />}
            title="Przewóz Zwłok"
            description="Zapewniamy profesjonalny przewóz ciał zmarłych, trumien oraz urn na terenie całego kraju i Europy."
            delay={100}
          />
          <ServiceCard 
            icon={<Flame className="w-8 h-8 text-primary" />}
            title="Kremacja"
            description="Zajmujemy się organizacją kremacji oraz przygotowaniem ceremonii, zgodnie z życzeniami rodziny."
            delay={150}
          />
        </div>
        
        {/* Orange Section - Based on Screenshot */}
        <div className="bg-primary/90 rounded-xl p-8 md:p-12 shadow-lg text-black">
          <h3 className="text-2xl font-playfair font-semibold mb-8 text-center">Kompleksowa Organizacja Pogrzebu w Jednym Miejscu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <p className="text-black/90 leading-relaxed">
              Wystarczy zaledwie jedna wizyta w naszym zakładzie pogrzebowym w Łodzi, aby ustalić szczegóły ceremonii, 
              wybrać trumnę lub urnę, wiązanki i wieńce pogrzebowe, oprawę muzyczną, a nawet odzież pogrzebową.
            </p>
            <p className="text-black/90 leading-relaxed">
              W imieniu klienta załatwiamy wszelkie formalności, podejmujemy się opieki nad ciałem zmarłego, 
              oferujemy także różnorodne akcesoria pogrzebowe. Dbamy o pełen profesjonalizm i szacunek.
            </p>
          </div>
          
          <div className="bg-black/10 p-6 rounded-lg">
            <h4 className="text-xl font-playfair font-medium mb-4 text-black">Oferujemy pełną obsługę pogrzebów:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-black/80 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">+</span>
                </div>
                <p className="ml-3 text-black/90">W imieniu klienta załatwiamy wszelkie formalności</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-black/80 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">+</span>
                </div>
                <p className="ml-3 text-black/90">Podejmujemy się opieki nad ciałem zmarłego</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-black/80 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">+</span>
                </div>
                <p className="ml-3 text-black/90">Oferujemy akcesoria pogrzebowe</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-black/80 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">+</span>
                </div>
                <p className="ml-3 text-black/90">Organizujemy pogrzeby różnych wyznań religijnych oraz pogrzeby świeckie</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Grid - Based on Screenshot */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <h4 className="text-lg font-playfair font-medium mb-3 text-primary">Ekshumacja zwłok</h4>
            <p className="text-gray-300 leading-relaxed">
              Przeprowadzamy ekshumację zwłok zgodnie ze wszystkimi normami oraz procedurami, zapewniając godne traktowanie zmarłych.
            </p>
          </div>
          
          <div className="feature-card">
            <h4 className="text-lg font-playfair font-medium mb-3 text-primary">Kremacja</h4>
            <p className="text-gray-300 leading-relaxed">
              Zajmujemy się organizacją kremacji oraz przygotowaniem ceremonii, zgodnie z życzeniami rodziny i z zachowaniem godności.
            </p>
          </div>
          
          <div className="feature-card">
            <h4 className="text-lg font-playfair font-medium mb-3 text-primary">Przewóz zwłok</h4>
            <p className="text-gray-300 leading-relaxed">
              Zapewniamy przewóz ciał zmarłych, trumien oraz urn na terenie całego kraju i Europy, z pełnym poszanowaniem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
