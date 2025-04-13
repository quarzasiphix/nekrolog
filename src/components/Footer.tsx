
import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Cross } from 'lucide-react';
import { IMAGES } from '../assets/images';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={IMAGES.logo} alt="Nekrolog Łódź" className="h-16 mb-4" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Kompleksowe usługi pogrzebowe z pełnym wsparciem dla rodziny w trudnych chwilach. Zapewniamy profesjonalną i godną oprawę ceremonii.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-medium mb-6 text-white">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">Legionów 48, 90-702 Łódź, Polska</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">+48 602 274 661 (całodobowo)</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">kontakt@nekrolog-lodz.pl</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">Pon-Pt: 8:00-16:00, Sob: 9:00-13:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-medium mb-6 text-white">Nawigacja</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Strona Główna
                </a>
              </li>
              <li>
                <a href="#services" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Usługi
                </a>
              </li>
              <li>
                <a href="#about" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  O nas
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-block text-gray-300 hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm text-gray-400">
                <span className="font-medium text-primary">Całodobowy kontakt:</span><br />
                +48 602 274 661
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            &copy; {currentYear} Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska. Wszelkie prawa zastrzeżone.
            <Cross className="w-3 h-3 mx-1 text-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
