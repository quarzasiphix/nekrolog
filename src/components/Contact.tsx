
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactCard = ({ 
  icon, 
  title, 
  children, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  children: React.ReactNode; 
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
      className="glass-card p-8 rounded-xl flex flex-col opacity-0 translate-y-10 transition-all duration-700 h-full"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-playfair font-medium text-funeral-800">{title}</h3>
      </div>
      <div className="text-funeral-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

const Contact = () => {
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
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-funeral-50">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-700 text-center mb-16"
        >
          <h2 className="section-title">Kontakt</h2>
          <p className="section-subtitle">
            Jesteśmy dostępni całodobowo, aby zapewnić Państwu wsparcie w trudnych chwilach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ContactCard 
            icon={<MapPin className="w-6 h-6 text-primary" />}
            title="Adres"
            delay={100}
          >
            <p className="mb-2">Legionów 48</p>
            <p>90-702 Łódź, Polska</p>
          </ContactCard>
          
          <ContactCard 
            icon={<Phone className="w-6 h-6 text-primary" />}
            title="Telefon"
            delay={300}
          >
            <p className="mb-2">Całodobowo:</p>
            <a href="tel:+48123456789" className="text-primary hover:underline">+48 123 456 789</a>
          </ContactCard>
          
          <ContactCard 
            icon={<Clock className="w-6 h-6 text-primary" />}
            title="Godziny otwarcia"
            delay={500}
          >
            <p className="mb-2">Poniedziałek - Piątek: 8:00 - 16:00</p>
            <p>Sobota: 9:00 - 13:00</p>
            <p className="mt-2 text-sm font-medium">* Dostępność telefoniczna: 24/7</p>
          </ContactCard>
        </div>
        
        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.6458763215776!2d19.4554974!3d51.7776945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3497f9d406e7%3A0xb1c0f5dea0a8dd17!2sLegion%C3%B3w%2048%2C%2090-702%20%C5%81%C3%B3d%C5%BA%2C%20Polska!5e0!3m2!1spl!2spl!4v1625672582341!5m2!1spl!2spl" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Google Maps - Nekrolog Łódź"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
