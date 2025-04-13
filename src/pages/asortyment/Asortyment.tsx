
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid, Box, Flower, BookOpen, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Asortyment = () => {
  return (
    <ServiceLayout
      title="Asortyment"
      description="Szeroki wybór trumien, urn i innych artykułów pogrzebowych"
      backgroundImage={IMAGES.cemetery}
      metaDescription="Trumny, urny, krzyże, wieńce, wiązanki, artykuły pogrzebowe. Szeroki wybór asortymentu. Dom pogrzebowy w Łodzi. ☎ +48 123 456 789"
      metaKeywords="trumny łódź, urny łódź, wiązanki pogrzebowe, wieńce pogrzebowe, artykuły pogrzebowe łódź"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Kompleksowe Usługi Pogrzebowe
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Oferujemy pełen asortyment artykułów pogrzebowych najwyższej jakości. Nasze produkty 
            cechuje solidne wykonanie, elegancja i różnorodność, dostosowana do indywidualnych 
            potrzeb i oczekiwań.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-black/40 border border-gray-800 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white font-playfair flex items-center">
                <Package className="h-6 w-6 mr-2 text-primary" />
                Trumny
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={IMAGES.subpages.trumny || IMAGES.cemetery} 
                alt="Trumny" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300">
                Oferujemy szeroki wybór trumien wykonanych z różnych materiałów - od prostych, 
                ekonomicznych modeli po eleganckie, luksusowe trumny z najlepszych gatunków drewna.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/asortyment/trumny">Zobacz więcej</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-black/40 border border-gray-800 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white font-playfair flex items-center">
                <Box className="h-6 w-6 mr-2 text-primary" />
                Urny
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={IMAGES.subpages.urny || IMAGES.candles} 
                alt="Urny" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300">
                Duży wybór urn różnego rodzaju - metalowych, ceramicznych, drewnianych, 
                biodegradowalnych. Dostępne są zarówno klasyczne wzory, jak i nowoczesne projekty.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/asortyment/urny">Zobacz więcej</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-black/40 border border-gray-800 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white font-playfair flex items-center">
                <Flower className="h-6 w-6 mr-2 text-primary" />
                Wiązanki i wieńce
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src={IMAGES.subpages.wiazanki || IMAGES.interior} 
                alt="Wiązanki i wieńce" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300">
                Kompozycje kwiatowe w formie wieńców, wiązanek, koszy i szarf przygotowane 
                według indywidualnych życzeń. Używamy tylko świeżych, wysokiej jakości kwiatów.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/asortyment/wiazanki">Zobacz więcej</Link>
              </Button>
            </CardFooter>
          </Card>
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

export default Asortyment;
