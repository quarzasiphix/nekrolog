
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { Card, CardContent } from "@/components/ui/card";
import { Shirt, CheckCircle } from 'lucide-react';

const Odziez = () => {
  const clothing = [
    {
      name: "Garnitury pogrzebowe męskie",
      description: "Eleganckie garnitury w ciemnych kolorach, odpowiednie na uroczystości pogrzebowe, dostępne w różnych rozmiarach.",
      features: ["Klasyczny krój", "Wysokiej jakości materiały", "Dostępne różne rozmiary"]
    },
    {
      name: "Suknie i kostiumy żałobne damskie",
      description: "Eleganckie stroje żałobne dla kobiet, wykonane z wysokiej jakości materiałów, dostępne w różnych fasonach i rozmiarach.",
      features: ["Stonowane kolory", "Elegancki krój", "Wygodny materiał"]
    },
    {
      name: "Koszule pogrzebowe",
      description: "Klasyczne koszule w białym lub czarnym kolorze, idealne na ceremonię pogrzebową.",
      features: ["Prosty krój", "Łatwe w pielęgnacji", "Różne rozmiary"]
    },
    {
      name: "Krawaty i muszki żałobne",
      description: "Czarne krawaty i muszki, dopełniające elegancki strój pogrzebowy.",
      features: ["Klasyczny wygląd", "Głęboka czerń", "Łatwe wiązanie"]
    },
    {
      name: "Dodatki żałobne",
      description: "Dodatki takie jak chusty, szale, rękawiczki i inne akcesoria odpowiednie na uroczystości pogrzebowe.",
      features: ["Stonowana elegancja", "Wysokiej jakości wykonanie", "Uniwersalne dodatki"]
    },
    {
      name: "Odzież dla zmarłych",
      description: "Specjalna odzież przygotowana z myślą o godnym pożegnaniu zmarłych osób, dostępna w różnych rozmiarach.",
      features: ["Godna prezentacja", "Wysokiej jakości materiały", "Delikatne wykończenia"]
    }
  ];

  return (
    <ServiceLayout
      title="Odzież pogrzebowa"
      description="Szeroki wybór odzieży żałobnej oraz dodatków dla uczestników ceremonii"
      backgroundImage={IMAGES.cross}
      metaDescription="Odzież pogrzebowa, garnitury, suknie żałobne, dodatki. Stroje na pogrzeb dla uczestników ceremonii. Dom pogrzebowy w Łodzi. ☎ +48 123 456 789"
      metaKeywords="odzież pogrzebowa łódź, garnitury na pogrzeb, suknie żałobne, ubrania na pogrzeb łódź"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Odzież pogrzebowa
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Oferujemy szeroki wybór odzieży pogrzebowej i żałobnej, zapewniającej odpowiedni 
            wygląd podczas ceremonii pogrzebowych. Nasza odzież łączy elegancję z komfortem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {clothing.map((item, index) => (
            <Card key={index} className="bg-black/40 border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shirt className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-playfair text-white">{item.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
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
                src={IMAGES.subpages.odziez} 
                alt="Odzież pogrzebowa - zdjęcie 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.cemetery} 
                alt="Odzież pogrzebowa - zdjęcie 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.interior} 
                alt="Odzież pogrzebowa - zdjęcie 3" 
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

export default Odziez;
