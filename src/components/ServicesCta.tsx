import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../assets/images';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, delay * 0.1);
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
      className="opacity-0 translate-y-10 transition-all duration-200 group"
    >
      <div className="glass-card h-full flex flex-col overflow-hidden rounded-xl">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-playfair text-white">{title}</h3>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-300 mb-6 flex-1">{description}</p>
          <Link 
            to={link}
            className="flex items-center text-primary hover:text-primary/80 transition-colors justify-end mt-auto"
          >
            <span className="mr-2">Więcej informacji</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesCta = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  
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
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-black/90 to-black/80">
      <div className="section-container">
        <div 
          ref={headingRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-200"
        >
          <h2 className="section-title">Specjalistyczne Usługi Pogrzebowe</h2>
          <p className="section-subtitle">
            Pełen zakres profesjonalnych usług dla godnego pożegnania bliskiej osoby
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Organizacja Pogrzebów"
            description="Kompleksowa organizacja ceremonii pogrzebowej, przejęcie wszystkich formalności oraz profesjonalna obsługa w trudnych chwilach."
            image={IMAGES.services.funeral}
            link="/uslugi/organizacja-pogrzebow"
            delay={100}
          />
          
          <ServiceCard 
            title="Oprawa Muzyczna"
            description="Profesjonalna oprawa muzyczna ceremonii pogrzebowej, w tym śpiew, organy, trąbka oraz inne instrumenty, dostosowane do charakteru uroczystości."
            image={IMAGES.services.music}
            link="/uslugi/oprawa-muzyczna"
            delay={200}
          />
          
          <ServiceCard 
            title="Transport Zmarłych"
            description="Specjalistyczny transport zmarłych na terenie kraju i za granicą, zapewniający godne przewiezienie ciała z zachowaniem wszelkich procedur."
            image={IMAGES.services.transport}
            link="/uslugi/transport"
            delay={300}
          />
          
          <ServiceCard 
            title="Kremacja"
            description="Organizacja kremacji w profesjonalnych krematoriach, wraz z kompleksową pomocą w przygotowaniu urny i ceremonii pogrzebowej po kremacji."
            image={IMAGES.services.cremation}
            link="/uslugi/krematorium"
            delay={400}
          />
          
          <ServiceCard 
            title="Ekshumacja"
            description="Profesjonalne przeprowadzenie ekshumacji zgodnie z przepisami, wraz z załatwieniem wszelkich formalności i dokumentów urzędowych."
            image={IMAGES.services.exhumation}
            link="/uslugi/ekshumacja"
            delay={500}
          />
          
          <ServiceCard 
            title="Pełen Asortyment"
            description="Bogaty wybór trumien, urn, wieńców, wiązanek oraz odzieży pogrzebowej, dostosowany do indywidualnych preferencji i potrzeb klienta."
            image={IMAGES.interior}
            link="/asortyment"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesCta;
