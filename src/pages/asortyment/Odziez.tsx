
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package } from 'lucide-react';

const Odziez = () => {
  const odziezTypes = [
    {
      name: "Garnitury pogrzebowe męskie",
      description: "Eleganckie garnitury pogrzebowe w stonowanych kolorach, idealnie nadające się do ostatniego pożegnania bliskiej osoby.",
      features: ["Klasyczny krój", "Wysoka jakość tkanin", "Dostępne różne rozmiary"]
    },
    {
      name: "Suknie i garsonki żałobne",
      description: "Suknie i garsonki w kolorze czarnym, granatowym i szarym, wykonane z wysokiej jakości materiałów, idealne na ceremonię pogrzebową.",
      features: ["Elegancki wygląd", "Komfortowy krój", "Różne rozmiary"]
    },
    {
      name: "Koszule męskie",
      description: "Białe i czarne koszule męskie o klasycznym kroju, wykonane z wysokiej jakości tkanin, idealne do garnituru pogrzebowego.",
      features: ["100% bawełna", "Łatwe w prasowaniu", "Dostępne różne rozmiary"]
    },
    {
      name: "Bluzki damskie",
      description: "Eleganckie bluzki damskie w stonowanych kolorach, idealne na uroczystości pogrzebowe, wykonane z delikatnych materiałów.",
      features: ["Stonowane kolory", "Elegancki krój", "Różne rozmiary"]
    },
    {
      name: "Dodatki żałobne",
      description: "Różnego rodzaju dodatki żałobne, takie jak krawaty, poszetki, szale i rękawiczki, które uzupełnią strój pogrzebowy.",
      features: ["Czarne dodatki", "Stonowane wzory", "Uniwersalne"]
    },
    {
      name: "Obuwie żałobne",
      description: "Klasyczne, czarne obuwie męskie i damskie, które dopełni stylizację pogrzebową i zapewni komfort podczas ceremonii.",
      features: ["Wygodne obuwie", "Elegancki wygląd", "Różne rozmiary"]
    }
  ];

  return (
    <ServiceLayout
      title="Odzież Pogrzebowa"
      description="Szeroki wybór odzieży żałobnej - garnitury, suknie, dodatki i obuwie pogrzebowe"
      backgroundImage={IMAGES.interior}
      metaDescription="Odzież pogrzebowa - garnitury, suknie żałobne, dodatki. Elegancka odzież na ceremonię pogrzebową. Dom pogrzebowy w Łodzi. ☎ +48 602 274 661"
      metaKeywords="odzież pogrzebowa łódź, garnitur pogrzebowy, suknia żałobna, dodatki żałobne"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Odzież Pogrzebowa
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Oferujemy szeroki wybór eleganckiej odzieży pogrzebowej dla kobiet i mężczyzn. 
            Wszystkie nasze produkty charakteryzują się wysoką jakością wykonania i 
            stonowaną elegancją, odpowiednią na uroczystości pogrzebowe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {odziezTypes.map((odziezType, index) => (
            <Card key={index} className="bg-black/40 border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Package className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-playfair text-white">{odziezType.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{odziezType.description}</p>
                <div className="space-y-2">
                  {odziezType.features.map((feature, idx) => (
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
