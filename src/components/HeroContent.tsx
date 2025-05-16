import React from 'react';
import { Phone } from 'lucide-react';

interface HeroContentProps {
  isVisible: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isVisible }) => {
  return (
    <section
      aria-label="Sekcja powitalna – usługi pogrzebowe Jolanta Kostowska"
      className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center text-white"
    >
      <div className={`transition-all duration-300 delay-50 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 leading-tight">
          <strong>Jolanta Usługi Pogrzebowe</strong>
        </h1>

        <div className={`w-24 h-1 bg-primary mx-auto mb-8 transition-all duration-300 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 font-light text-gray-300 leading-relaxed">
          Profesjonalne wsparcie dla rodziny w trudnych chwilach,<br />
          dostępne <strong>24 godziny na dobę</strong>.
        </p>

        {/* Small support line */}
        <p className="text-lg max-w-3xl mx-auto mb-10 font-medium text-gray-200">
          Dom pogrzebowy prowadzony przez <strong>Jolantę Kostowską</strong>
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="tel:+48602274661" 
            className="px-8 py-4 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center gap-2"
            aria-label="Zadzwoń całodobowo"
          >
            <Phone className="h-5 w-5" /> Całodobowa pomoc
          </a>

          <button 
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-md hover:bg-white/10 transition-all duration-300 font-medium text-lg"
          >
            Nasze usługi
          </button>
        </div>

        {/* Location card */}
        <div className="mt-16 glass-card p-6 rounded-lg max-w-md mx-auto" aria-label="Informacje o lokalizacji">
          <h2 className="text-primary font-medium text-lg mb-2">Dom pogrzebowy w centrum Łodzi</h2>
          <address className="not-italic text-gray-300">
            Legionów 48, 90-702 Łódź, Polska
          </address>
          <div className="mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.6458763215776!2d19.4554974!3d51.7776945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3497f9d406e7%3A0xb1c0f5dea0a8dd17!2sLegion%C3%B3w%2048%2C%2090-702%20%C5%81%C3%B3d%C5%BA%2C%20Polska!5e0!3m2!1spl!2spl!4v1625672582341!5m2!1spl!2spl" 
              width="100%" 
              height="150" 
              style={{ border: 0 }}
              title="Lokalizacja Nekrolog Łódź na mapie"
              loading="lazy"
              className="rounded-md"
              allowFullScreen
              aria-hidden="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
