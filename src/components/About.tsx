
import React, { useEffect, useRef } from 'react';
import { IMAGES } from '../assets/images';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-700 text-center mb-16"
        >
          <h2 className="section-title">O Nas</h2>
          <p className="section-subtitle">
            Nekrolog Łódź to firma pogrzebowa z bogatym doświadczeniem, oferująca profesjonalne i godne usługi pogrzebowe
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-tr-3xl rounded-bl-3xl -z-10"></div>
              <img 
                src={IMAGES.interior} 
                alt="Wnętrze domu pogrzebowego" 
                className="w-full h-auto rounded-md shadow-lg object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="opacity-0 translate-y-10 transition-all duration-700 delay-500 flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-playfair font-medium text-funeral-800">
              Wsparcie dla Rodziny w Trudnych Chwilach
            </h3>
            <p className="text-funeral-600 leading-relaxed">
              Usługi Pogrzebowe Nekrologi Łódź zajmuje się kompleksową organizacją pogrzebów. 
              Kiedy odchodzi ktoś bliski, naszym zadaniem jest pomoc w przygotowaniu ceremonii pogrzebowej. 
              Jesteśmy do dyspozycji o każdej porze dnia i nocy.
            </p>
            <p className="text-funeral-600 leading-relaxed">
              Z pełnym zaangażowaniem przejmujemy wszelkie obowiązki i formalności związane z pożegnaniem zmarłej osoby. 
              Dbamy o odpowiednią oprawę każdego pogrzebu i dokładamy wszelkich starań, aby odciążyć rodzinę podczas 
              załatwiania formalności.
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-playfair text-primary font-medium">20+</span>
                <span className="text-funeral-600">Lat doświadczenia</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-playfair text-primary font-medium">24/7</span>
                <span className="text-funeral-600">Dostępność</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
