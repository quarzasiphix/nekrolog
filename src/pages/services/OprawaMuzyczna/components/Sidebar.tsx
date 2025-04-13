
import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';

const Sidebar = () => {
  return (
    <>
      <div className="glass-card p-6 rounded-xl mb-8 sticky top-24">
        <h3 className="text-xl font-playfair font-medium text-white mb-4">
          Dlaczego oprawa muzyczna jest ważna?
        </h3>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">
              Nadaje ceremonii podniosły, uroczysty charakter
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">
              Pomaga w wyrażeniu emocji towarzyszących pożegnaniu
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">
              Tworzy odpowiednią atmosferę refleksji i zadumy
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">
              Stanowi wyraz szacunku dla zmarłego i jego pamięci
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">
              Umożliwia personalizację ceremonii poprzez wybór ulubionych utworów zmarłego
            </span>
          </li>
        </ul>
      </div>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h3 className="text-xl font-playfair font-medium text-white mb-4">
          Jak zamówić oprawę muzyczną?
        </h3>
        
        <p className="text-gray-300 mb-4">
          Zamówienie oprawy muzycznej jest bardzo proste. Podczas organizacji pogrzebu 
          w naszym domu pogrzebowym, możesz omówić wszystkie szczegóły dotyczące muzyki.
        </p>
        
        <ol className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary font-medium">1</span>
            <span>Skontaktuj się z naszym domem pogrzebowym</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary font-medium">2</span>
            <span>Omów swoje preferencje dotyczące rodzaju oprawy muzycznej</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary font-medium">3</span>
            <span>Wybierz odpowiednie utwory lub skorzystaj z naszych rekomendacji</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary font-medium">4</span>
            <span>My zajmiemy się organizacją profesjonalnych muzyków</span>
          </li>
        </ol>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <h3 className="text-xl font-playfair font-medium text-white mb-4">
          Potrzebujesz więcej informacji?
        </h3>
        
        <p className="text-gray-300 mb-6">
          Skontaktuj się z nami, aby omówić szczegóły oprawy muzycznej 
          lub poznać więcej możliwości personalizacji ceremonii pogrzebowej.
        </p>
        
        <a 
          href="tel:+48602274661" 
          className="w-full px-6 py-4 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium flex items-center justify-center gap-2 mb-4"
        >
          <Phone className="h-5 w-5" /> +48 602 274 661
        </a>
        
        <p className="text-center text-gray-400 text-sm">
          Jesteśmy dostępni całodobowo
        </p>
      </div>
    </>
  );
};

export default Sidebar;
