
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { Card, CardContent } from "@/components/ui/card";
import { Flower, CheckCircle } from 'lucide-react';

const Wiazanki = () => {
  const arrangements = [
    {
      name: "Wieniec klasyczny",
      description: "Tradycyjny wieniec pogrzebowy z białych i czerwonych kwiatów, uzupełniony zielenią.",
      features: ["Klasyczny wygląd", "Trwałe kwiaty", "Szarfa z napisem"]
    },
    {
      name: "Wiązanka pogrzebowa",
      description: "Elegancka wiązanka z róż, lilii, goździków i innych kwiatów sezonowych, idealna jako główna dekoracja.",
      features: ["Bogate kompozycje", "Świeże kwiaty", "Profesjonalne wykonanie"]
    },
    {
      name: "Kosz kwiatowy",
      description: "Kompozycja kwiatowa w koszu, będąca pięknym akcentem dekoracyjnym podczas uroczystości pogrzebowej.",
      features: ["Elegancki kosz", "Różnorodność kwiatów", "Trwała kompozycja"]
    },
    {
      name: "Kompozycja na trumnę",
      description: "Specjalna kompozycja kwiatowa przeznaczona do położenia na trumnie podczas ceremonii.",
      features: ["Dopasowana do trumny", "Najwyższa jakość kwiatów", "Symboliczne znaczenie"]
    },
    {
      name: "Szarfy pogrzebowe",
      description: "Szarfy z personalizowanymi napisami, wykonane z wysokiej jakości materiałów, dostępne w różnych kolorach.",
      features: ["Personalizowane napisy", "Różne kolory", "Trwały materiał"]
    },
    {
      name: "Bukiet kondolencyjny",
      description: "Stonowany bukiet wyrażający współczucie, idealny jako dar od uczestników ceremonii pogrzebowej.",
      features: ["Elegancka kompozycja", "Delikatne kolory", "Staranne wykonanie"]
    }
  ];

  return (
    <ServiceLayout
      title="Wiązanki i wieńce"
      description="Kompozycje kwiatowe w formie wieńców, wiązanek, koszy i szarf"
      backgroundImage={IMAGES.interior}
      metaDescription="Wiązanki pogrzebowe, wieńce, kosze kwiatowe, szarfy na pogrzeb. Szeroki wybór kompozycji kwiatowych. Dom pogrzebowy w Łodzi. ☎ +48 602 274 661"
      metaKeywords="wiązanki pogrzebowe łódź, wieńce pogrzebowe, kompozycje kwiatowe pogrzeb, kwiaty na pogrzeb łódź"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Wiązanki i wieńce pogrzebowe
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Oferujemy szeroki wybór kompozycji kwiatowych przygotowanych specjalnie na uroczystości 
            pogrzebowe. Wszystkie nasze kompozycje wykonane są ze świeżych kwiatów najwyższej jakości.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {arrangements.map((arrangement, index) => (
            <Card key={index} className="bg-black/40 border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Flower className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-playfair text-white">{arrangement.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{arrangement.description}</p>
                <div className="space-y-2">
                  {arrangement.features.map((feature, idx) => (
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
                src={IMAGES.subpages.wiazanki} 
                alt="Wiązanki - zdjęcie 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.hero} 
                alt="Wiązanki - zdjęcie 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={IMAGES.church} 
                alt="Wiązanki - zdjęcie 3" 
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

export default Wiazanki;
