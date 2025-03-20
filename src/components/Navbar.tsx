
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#000000e6] backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-playfair font-bold text-white">
            <span className="text-primary">Nekrolog</span> Łódź
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-primary transition-colors"
          >
            Strona Główna
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-white hover:text-primary transition-colors"
          >
            Usługi
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-primary transition-colors"
          >
            O nas
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-primary transition-colors"
          >
            Kontakt
          </button>
        </nav>
        
        {/* Phone number */}
        <a href="tel:+48123456789" className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors">
          <Phone className="w-5 h-5 mr-2" />
          <span className="font-medium">Całodobowo: +48 123 456 789</span>
        </a>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 top-16 bg-[#000000e6] z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-6">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-primary transition-colors text-xl py-2 border-b border-white/10"
          >
            Strona Główna
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-white hover:text-primary transition-colors text-xl py-2 border-b border-white/10"
          >
            Usługi
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-primary transition-colors text-xl py-2 border-b border-white/10"
          >
            O nas
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-primary transition-colors text-xl py-2 border-b border-white/10"
          >
            Kontakt
          </button>
          
          <a href="tel:+48123456789" className="flex items-center justify-center text-primary mt-8 py-3 border border-primary rounded-md">
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">Całodobowo: +48 123 456 789</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
