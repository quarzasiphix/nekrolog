
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { Card, CardContent } from "@/components/ui/card";
import { Package, CheckCircle } from 'lucide-react';

const Trumny = () => {
  const coffins = [
    {
      name: "Trumna Dębowa Premium",
      description: "Wykonana z litego drewna dębowego, wykończona wysokiej jakości lakierem, z eleganckim wnętrzem.",
      features: ["Lite drewno dębowe", "Ręcznie rzeźbione zdobienia", "Eleganckie uchwyty", "Luksusowe wykończenie wnętrza"]
    },
    {
      name: "Trumna Sosnowa Standard",
      description: "Trumna wykonana z drewna sosnowego, klasyczny design, funkcjonalne rozwiązanie w przystępnej cenie.",
      features: ["Naturalne drewno sosnowe", "Tradycyjny wygląd", "Wygodne uchwyty", "Estetyczne wykończenie"]
    },
    {
      name: "Trumna Olchowa Elegance",
      description: "Połączenie elegancji i przystępnej ceny. Wykonana z drewna olchowego z delikatnym wykończeniem.",
      features: ["Wytrzymałe drewno olchowe", "Subtelne zdobienia", "Komfortowe wnętrze", "Elegancki wygląd"]
    },
    {
      name: "Trumna Ekonomiczna",
      description: "Prosta, funkcjonalna trumna wykonana z płyty drewnopochodnej, pokryta okleiną drewnopodobną.",
      features: ["Lekka konstrukcja", "Prosta forma", "Estetyczne wykonanie", "Praktyczne rozwiązanie"]
    }
  ];

  return (
    <ServiceLayout
      title="Trumny"
      description="Szeroki wybór trumien najwyższej jakości"
      backgroundImage={IMAGES.cemetery}
      metaDescription="Trumny do pogrzebu tradycyjnego - dębowe, sosnowe, olchowe. Szeroki wybór trumien różnego rodzaju. Dom pogrzebowy w Łodzi. ☎ +48 123 456 789"
      metaKeywords="trumny łódź, trumny dębowe, trumny sosnowe, trumny pogrzebowe, trumny tradycyjne"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Kompleksowe Usługi Pogrzebowe
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            W naszej ofercie znajduje się szeroki wybór trumien, który pozwala na dostosowanie 
            się do indywidualnych preferencji oraz możliwości finansowych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {coffins.map((coffin, index) => (
            <Card key={index} className="bg-black/40 border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Package className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-playfair text-white">{coffin.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{coffin.description}</p>
                <div className="space-y-2">
                  {coffin.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-card p-8 rounded-xl mb-16">
          <h3 className="text-2xl font-playfair text-white mb-6">Dlaczego warto wybrać nasze trumny?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Wysoka jakość wykonania i dbałość o detale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Trwałe materiały pochodzące od sprawdzonych dostawców</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Różnorodność stylów i wykończeń</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Szeroki zakres cenowy dostosowany do różnych potrzeb</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Możliwość personalizacji i dostosowania do indywidualnych wymagań</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Profesjonalne doradztwo w wyborze odpowiedniej trumny</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77933.82296621176!2d19.380602868211563!3d51.75757197260676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb24754d8277%3A0xfbca598c07c62dbe!2zxYHDs2TFug!5e0!3m2!1spl!2spl!4v1617297661043!5m2!1spl!2spl" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Google Maps - Lokalizacja zakładu pogrzebowego"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Trumny;
