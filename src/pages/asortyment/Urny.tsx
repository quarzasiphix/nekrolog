
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { Card, CardContent } from "@/components/ui/card";
import { Box, CheckCircle } from 'lucide-react';

const Urny = () => {
  const urns = [
    {
      name: "Urna metalowa klasyczna",
      description: "Elegancka urna wykonana z metalu wysokiej jakości, dostępna w różnych kolorach i wykończeniach.",
      features: ["Trwały materiał", "Klasyczny wygląd", "Różne kolory do wyboru"]
    },
    {
      name: "Urna drewniana zdobiona",
      description: "Tradycyjna urna wykonana z naturalnego drewna, starannie wykończona i ozdobiona delikatnymi wzorami.",
      features: ["Naturalne drewno", "Ręcznie zdobiona", "Eleganckie wykończenie"]
    },
    {
      name: "Urna biodegradowalna",
      description: "Ekologiczna urna wykonana z materiałów przyjaznych środowisku, idealna do pochówku w ziemi lub rozsypania prochów.",
      features: ["Ekologiczna", "Biodegradowalna", "Przyjazna środowisku"]
    },
    {
      name: "Urna ceramiczna artystyczna",
      description: "Wyjątkowa urna ceramiczna, ręcznie wykonana przez artystów, z możliwością personalizacji wzorów i kolorów.",
      features: ["Ręcznie wykonana", "Unikatowy wzór", "Możliwość personalizacji"]
    },
    {
      name: "Miniaturowa urna pamiątkowa",
      description: "Mniejsza wersja urny służąca jako pamiątka, pozwalająca zachować niewielką ilość prochów bliskiej osoby.",
      features: ["Kompaktowy rozmiar", "Eleganckie wykonanie", "Trwały materiał"]
    },
    {
      name: "Urna kryształowa",
      description: "Luksusowa urna wykonana z wysokiej jakości kryształu, dostępna z możliwością grawerowania personalizowanych napisów.",
      features: ["Ekskluzywny wygląd", "Możliwość grawerowania", "Najwyższa jakość"]
    }
  ];

  return (
    <ServiceLayout
      title="Urny"
      description="Szeroki wybór urn różnego rodzaju - metalowych, ceramicznych, drewnianych, biodegradowalnych"
      backgroundImage={IMAGES.candles}
      metaDescription="Urny kremacyjne, biodegradowalne, metalowe, ceramiczne, drewniane. Szeroki wybór urn różnych typów. Dom pogrzebowy w Łodzi. ☎ +48 123 456 789"
      metaKeywords="urny łódź, urny kremacyjne, urny metalowe, urny ceramiczne, urny łódź"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Urny Kremacyjne
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Oferujemy szeroki wybór urn dostosowanych do różnych potrzeb i preferencji. Wykonane 
            są z różnorodnych materiałów - od tradycyjnych po nowoczesne i ekologiczne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {urns.map((urn, index) => (
            <Card key={index} className="bg-black/40 border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Box className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-playfair text-white">{urn.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{urn.description}</p>
                <div className="space-y-2">
                  {urn.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary/80 mr-2 mt-0.5" />
                      <p className="text-gray-400">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.subpages.urny} 
                alt="Urny - zdjęcie 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.candles} 
                alt="Urny - zdjęcie 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.cross} 
                alt="Urny - zdjęcie 3" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
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

export default Urny;
