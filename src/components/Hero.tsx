
import React, { useEffect, useState } from 'react';
import { IMAGES } from '../assets/images';
import { Cross } from 'lucide-react';
import HeroContent from './HeroContent';

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
          filter: 'brightness(0.2)', 
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
          src="/lovable-uploads/cross.png" 
          alt="Nekrolog Łódź" 
          className="h-32 mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
          }}
        />
      </div>
      
      {/* Content */}
      <HeroContent isVisible={isVisible} />
      
      {/* Cross Decorative Element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="flex items-center justify-center mx-3">
          <Cross className="h-14 w-14 text-primary cross-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
