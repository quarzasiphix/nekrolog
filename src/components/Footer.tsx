
import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-funeral-800 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-playfair font-medium mb-6">Nekrolog Łódź</h3>
            <p className="text-funeral-300 mb-6 leading-relaxed">
              Kompleksowe usługi pogrzebowe z pełnym wsparciem dla rodziny w trudnych chwilach.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-funeral-700 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-medium mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span>Legionów 48, 90-702 Łódź, Polska</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span>+48 123 456 789 (całodobowo)</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span>kontakt@nekrolog-lodz.pl</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span>Pon-Pt: 8:00-16:00, Sob: 9:00-13:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-medium mb-6">Nawigacja</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="inline-block hover:text-primary transition-colors">
                  Strona Główna
                </a>
              </li>
              <li>
                <a href="#services" className="inline-block hover:text-primary transition-colors">
                  Usługi
                </a>
              </li>
              <li>
                <a href="#about" className="inline-block hover:text-primary transition-colors">
                  O nas
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-block hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-funeral-700 mt-12 pt-8 text-center">
          <p className="text-funeral-400 text-sm">
            &copy; {currentYear} Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
