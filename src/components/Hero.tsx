
import React, { useEffect, useState } from 'react';
import { IMAGES } from '../assets/images';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${IMAGES.hero})`,
          filter: 'brightness(0.5)',
          transform: isVisible ? 'scale(1)' : 'scale(1.05)',
          transition: 'transform 1.5s ease-out, filter 1.5s ease-out'
        }}
      />
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      
      {/* Candles Image Subtle Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay" 
        style={{ backgroundImage: `url(${IMAGES.candles})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
        <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-medium mb-6 leading-tight">
            Nekrolog <span className="block text-primary">Łódź</span>
          </h1>
          <div className={`w-24 h-1 bg-primary mx-auto mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light transition-all duration-1000 delay-700 transform leading-relaxed">
            Kompleksowe usługi pogrzebowe z pełnym wsparciem w trudnych chwilach
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-800 transform">
            <a 
              href="tel:+48123456789" 
              className="px-8 py-4 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              Zadzwoń całodobowo
            </a>
            <button 
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition-all duration-300 font-medium text-lg"
            >
              Nasze usługi
            </button>
          </div>
        </div>
      </div>
      
      {/* Candle and Cross Decorative Element */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center opacity-80">
        <div className="w-12 h-20 bg-contain bg-no-repeat bg-center mx-3 candle-glow" 
             style={{ backgroundImage: `url(${IMAGES.candles})` }}>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
