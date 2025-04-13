
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { Card, CardContent } from "@/components/ui/card";
import { Flower, Leaf, CheckCircle } from 'lucide-react';

const Wience = () => {
  const wience = [
    {
      name: "Wieńce tradycyjne",
      description: "Klasyczne wieńce pogrzebowe wykonane z wysokiej jakości kwiatów, dostępne w różnych rozmiarach i kolorach.",
      features: ["Eleganckie wykonanie", "Możliwość personalizacji", "Różnorodne formy"]
    },
    {
      name: "Wieńce okolicznościowe",
      description: "Wieńce z wstążkami okolicznościowymi, zawierające napisy i dedykacje od rodziny, bliskich czy współpracowników.",
      features: ["Dedykowane napisy", "Firmowe wstążki", "Profesjonalne wykonanie"]
    },
    {
      name: "Wiązanki pogrzebowe",
      description: "Mniejsze kompozycje kwiatowe, idealnie nadające się jako uzupełnienie ceremonii lub symboliczny gest od osób bliskich.",
      features: ["Kompaktowe rozmiary", "Eleganckie ułożenie", "Szeroki wybór kwiatów"]
    },
    {
      name: "Wieńce z szarfami",
      description: "Specjalne wieńce z dedykowanymi szarfami, zawierającymi osobiste pożegnania i wyrazy współczucia dla rodziny zmarłego.",
      features: ["Osobiste napisy", "Eleganckie szarfy", "Trwałe materiały"]
    },
    {
      name: "Kompozycje z kwiatów żywych",
      description: "Wieńce i kompozycje wykonane z żywych kwiatów, które dodają uroczystości naturalnego piękna i symbolizują przemijanie.",
      features: ["Świeże kwiaty", "Naturalne piękno", "Zróżnicowane gatunki"]
    },
    {
      name: "Wieńce ekskluzywne",
      description: "Luksusowe kompozycje kwiatowe wykonane z rzadkich i ekskluzywnych gatunków kwiatów, idealnie oddające szacunek dla zmarłego.",
      features: ["Wyjątkowe gatunki kwiatów", "Kunsztowne wykonanie", "Indywidualny projekt"]
    }
  ];

  return (
    <ServiceLayout
      title="Wieńce Pogrzebowe"
      description="Profesjonalne wieńce i kompozycje kwiatowe na pogrzeb - tradycyjne i nowoczesne aranżacje"
      backgroundImage={IMAGES.cross}
      metaDescription="Wieńce pogrzebowe, wiązanki i kompozycje kwiatowe. Szeroki wybór wieńców różnych typów. Dom pogrzebowy w Łodzi. ☎ +48 602 274 661"
      metaKeywords="wieńce pogrzebowe łódź, wiązanki pogrzebowe, kwiaty na pogrzeb, dekoracje kwiatowe pogrzeb"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Wieńce i Kompozycje Kwiatowe
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Oferujemy szeroki wybór wieńców i kompozycji kwiatowych, które są symbolicznym 
            wyrazem szacunku i pożegnania. Nasze wieńce są wykonane z najwyższej jakości kwiatów.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {wience.map((wieniec, index) => (
            <Card key={index} className="bg-black/40 border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {index % 2 === 0 ? (
                    <Flower className="h-6 w-6 text-primary mr-3" />
                  ) : (
                    <Leaf className="h-6 w-6 text-primary mr-3" />
                  )}
                  <h3 className="text-xl font-playfair text-white">{wieniec.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{wieniec.description}</p>
                <div className="space-y-2">
                  {wieniec.features.map((feature, idx) => (
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.subpages.wience} 
                alt="Wieńce pogrzebowe - zdjęcie 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.subpages.wiazanki} 
                alt="Wieńce pogrzebowe - zdjęcie 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.cross} 
                alt="Wieńce pogrzebowe - zdjęcie 3" 
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

export default Wience;
