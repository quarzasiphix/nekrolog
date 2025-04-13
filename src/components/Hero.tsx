
import React, { useEffect, useState } from 'react';
import { IMAGES } from '../assets/images';
import { Phone } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${IMAGES.church})`,
          filter: 'brightness(0.2)', // Darkened the image significantly
          transform: isVisible ? 'scale(1)' : 'scale(1.05)',
          transition: 'transform 0.5s ease-out, filter 0.5s ease-out'
        }}
      />
      
      {/* Cross Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay" 
        style={{ backgroundImage: `url(${IMAGES.cross})` }}
      ></div>

      {/* Logo */}
      <div className="relative z-10 mb-8">
        <img 
          src={IMAGES.logo} 
          alt="Nekrolog Łódź" 
          className="h-24 mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
        <div className={`transition-all duration-300 delay-50 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 leading-tight">
            Kompleksowe <span className="text-primary">Usługi Pogrzebowe</span> <br />Nekrolog Łódź
          </h1>
          <div className={`w-24 h-1 bg-primary mx-auto mb-8 transition-all duration-300 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light transition-all duration-300 delay-150 transform leading-relaxed text-gray-300">
            Profesjonalne wsparcie dla rodziny w trudnych chwilach <br />dostępne 24 godziny na dobę
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-300 delay-200 transform">
            <a 
              href="tel:+48123456789" 
              className="px-8 py-4 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center gap-2"
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
          
          <div className="mt-16 glass-card p-6 rounded-lg max-w-md mx-auto">
            <h3 className="text-primary font-medium text-lg mb-2">Dom pogrzebowy w centrum Łodzi</h3>
            <address className="not-italic text-gray-300">
              Legionów 48, 90-702 Łódź, Poland
            </address>
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.6458763215776!2d19.4554974!3d51.7776945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3497f9d406e7%3A0xb1c0f5dea0a8dd17!2sLegion%C3%B3w%2048%2C%2090-702%20%C5%81%C3%B3d%C5%BA%2C%20Polska!5e0!3m2!1spl!2spl!4v1625672582341!5m2!1spl!2spl" 
                width="100%" 
                height="150" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Mapa lokalizacji Nekrolog Łódź"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Candle Decorative Element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="w-14 h-24 bg-contain bg-no-repeat bg-center mx-3 candle-glow" 
             style={{ backgroundImage: `url(${IMAGES.candles})` }}>
        </div>
      </div>
    </section>
  );
};

export default Hero;
