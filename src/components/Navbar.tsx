import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, ChevronDown, ChevronRight, Cross } from 'lucide-react';
import { IMAGES } from '../assets/images';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const servicesItems = [
  { name: "Usługi Pogrzebowe Łódź", id: "services", path: "/uslugi" },
  { name: "Organizacja pogrzebów Łódź", id: "services", path: "/uslugi/organizacja-pogrzebow" },
  { name: "Oprawa muzyczna pogrzebu Łódź", id: "services", path: "/uslugi/oprawa-muzyczna" },
  { name: "Ekshumacja zwłok Łódź", id: "services", path: "/uslugi/ekshumacja" },
  { name: "Transport zmarłych Łódź", id: "services", path: "/uslugi/transport" },
  { name: "Krematorium Łódź", id: "services", path: "/uslugi/krematorium" }
];

const productsItems = [
  { name: "Asortyment", id: "products", path: "/asortyment" },
  { name: "Trumny Łódź", id: "products", path: "/asortyment/trumny" },
  { name: "Urny Łódź", id: "products", path: "/asortyment/urny" },
  { name: "Wiązanki pogrzebowe Łódź", id: "products", path: "/asortyment/wiazanki" },
  { name: "Wieńce pogrzebowe Łódź", id: "products", path: "/asortyment/wience" },
  { name: "Odzież pogrzebowa Łódź", id: "products", path: "/asortyment/odziez" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
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
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + id;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
      setActiveSubmenu(null);
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-black/95'}`}>
      <div className="container mx-auto px-4 py-4 md:py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-playfair font-bold text-white">
              <span className="text-primary">Nekrolog</span> Łódź
            </h1>
            <p className="text-white/70 text-xs md:text-sm ml-2 italic">
            </p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-primary transition-colors py-2"
          >
            Strona Główna
          </button>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:text-primary hover:text-primary/90 hover:bg-transparent focus:bg-transparent px-3 py-2">
                  Usługi
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black border border-primary/20">
                  <ul className="grid w-[300px] gap-1 p-2">
                    {servicesItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.path}
                            className="w-full text-left block select-none space-y-1 rounded-md p-3 text-white hover:bg-primary/10 hover:text-primary"
                          >
                            <div>{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:text-primary hover:text-primary/90 hover:bg-transparent focus:bg-transparent px-3 py-2">
                  Asortyment
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black border border-primary/20">
                  <ul className="grid w-[300px] gap-1 p-2">
                    {productsItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.path}
                            className="w-full text-left block select-none space-y-1 rounded-md p-3 text-white hover:bg-primary/10 hover:text-primary"
                          >
                            <div>{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-primary transition-colors py-2"
          >
            O nas
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-primary transition-colors py-2"
          >
            Kontakt
          </button>
        </nav>
        
        <div className="hidden md:flex flex-col items-end">
          <a href="tel:+48602274661" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">+48 602 274 661</span>
          </a>
          <div className="flex items-center text-gray-400 text-sm mt-1">
            <Clock className="w-4 h-4 mr-1" />
            <span>Dostępni 24/7</span>
          </div>
        </div>
        
        <button className="md:hidden text-white p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      <div className={`md:hidden fixed inset-0 top-16 bg-black z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-2">
          <div className="border-b border-primary/30 pb-4 text-center">
            <h2 className="text-xl font-playfair text-white mb-1">Nekrolog Łódź</h2>
            <p className="text-gray-300 text-sm">Profesjonalne wsparcie dla rodziny w trudnych chwilach</p>
            <p className="text-gray-400 text-xs mt-1">dostępne 24 godziny na dobę</p>
          </div>

          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-primary transition-colors text-xl py-3 border-b border-white/10 w-full text-left"
          >
            Strona Główna
          </button>
          
          <div className="border-b border-white/10">
            <button 
              onClick={() => toggleSubmenu('services')}
              className="flex items-center justify-between text-white hover:text-primary transition-colors text-xl py-3 w-full"
            >
              <span>Usługi</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${activeSubmenu === 'services' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeSubmenu === 'services' && (
              <div className="pl-4 pb-2 space-y-2">
                {servicesItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path}
                    className="text-gray-300 hover:text-primary transition-colors text-lg py-2 w-full text-left flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-white/10">
            <button 
              onClick={() => toggleSubmenu('products')}
              className="flex items-center justify-between text-white hover:text-primary transition-colors text-xl py-3 w-full"
            >
              <span>Asortyment</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${activeSubmenu === 'products' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeSubmenu === 'products' && (
              <div className="pl-4 pb-2 space-y-2">
                {productsItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path}
                    className="text-gray-300 hover:text-primary transition-colors text-lg py-2 w-full text-left flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-primary transition-colors text-xl py-3 border-b border-white/10 w-full text-left"
          >
            O nas
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-primary transition-colors text-xl py-3 border-b border-white/10 w-full text-left"
          >
            Kontakt
          </button>
          
          <a href="tel:+48602274661" className="flex items-center justify-center text-primary mt-6 py-4 border border-primary rounded-md">
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">Całodobowo: +48 602 274 661</span>
          </a>

          <div className="mt-8 glass-card p-4 rounded-lg text-center">
            <h3 className="text-primary font-medium mb-1">Dom pogrzebowy w centrum Łodzi</h3>
            <address className="not-italic text-gray-300 text-sm">
              Legionów 48, 90-702 Łódź, Poland
            </address>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
