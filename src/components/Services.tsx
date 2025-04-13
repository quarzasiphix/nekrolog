
import React, { useEffect, useRef } from 'react';
import { Heart, Truck, Flame, Flower, Music, Calendar, Phone, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IMAGES } from '../assets/images';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, delay * 0.2); // Reduce delay even more
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -2% 0px" } // Observe elements even sooner
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="glass-card p-8 rounded-xl flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-200" // Decreased duration further
    >
      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-medium mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const FeatureItem = ({
  icon,
  title,
  children,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, delay * 0.2);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -2% 0px" }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className="opacity-0 translate-y-10 transition-all duration-200 feature-card hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-playfair font-medium text-primary">{title}</h3>
      </div>
      <div className="pl-14">
        {children}
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -2% 0px" }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black/90 to-black/95">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-200 text-center mb-16"
        >
          <h2 className="section-title">Kompleksowe Usługi Pogrzebowe</h2>
          <p className="section-subtitle">
            Zapewniamy profesjonalne wsparcie dla rodzin w trudnych chwilach żałoby
          </p>
        </div>
        
        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ServiceCard 
            icon={<Heart className="w-8 h-8 text-primary" />}
            title="Kompleksowa Organizacja Ceremonii"
            description="Przejmiemy wszelkie obowiązki i formalności związane z pożegnaniem zmarłej osoby, aby umożliwić rodzinie godne przeżywanie żałoby."
            delay={10}
          />
          <ServiceCard 
            icon={<Truck className="w-8 h-8 text-primary" />}
            title="Przewóz Zwłok"
            description="Zapewniamy profesjonalny przewóz ciał zmarłych, trumien oraz urn na terenie całego kraju i Europy."
            delay={20}
          />
          <ServiceCard 
            icon={<Flame className="w-8 h-8 text-primary" />}
            title="Kremacja"
            description="Zajmujemy się organizacją kremacji oraz przygotowaniem ceremonii, zgodnie z życzeniami rodziny."
            delay={30}
          />
        </div>
        
        {/* Services Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <Card className="bg-black/80 border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-playfair">Pełen zakres usług pogrzebowych</CardTitle>
                <CardDescription className="text-gray-400">
                  Kompleksowa organizacja pogrzebu to skomplikowany proces, który wymaga doświadczenia i profesjonalizmu
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="text-primary font-playfair text-lg mb-2">Zajmujemy się formalnościami:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      <span>Zasiłek pogrzebowy ZUS/KRUS/MSWiA/MON</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      <span>Wypisanie aktu zgonu w USC</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      <span>Załatwienie formalności w administracji cmentarnej</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      <span>Ustalenie daty i godziny pogrzebu</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-primary font-playfair text-lg mb-2">Zapewniamy kompleksowo:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      <span>Przygotowanie ciała zmarłego</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      <span>Transport zwłok krajowy i międzynarodowy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      <span>Organizację mszy pogrzebowej</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      <span>Oprawę muzyczną ceremonii</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="bg-gradient-to-br from-black/90 to-black/80 border-primary/20 shadow-lg h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl text-white font-playfair">Potrzebujesz pomocy?</CardTitle>
                <CardDescription className="text-gray-400">Jesteśmy dostępni całą dobę</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Phone className="text-primary w-5 h-5" />
                  <span className="font-medium">+48 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="text-primary w-5 h-5" />
                  <span>Dostępni 24/7</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300 mt-2">
                  <MapPin className="text-primary w-5 h-5 mt-1" />
                  <address className="not-italic">
                    <span className="block font-medium text-white">Nekrolog Łódź</span>
                    Legionów 48, 90-702 Łódź, Poland
                  </address>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Orange Section - Based on Screenshot */}
        <div className="bg-primary/90 rounded-xl p-8 md:p-12 shadow-lg text-black mb-16">
          <h3 className="text-2xl font-playfair font-semibold mb-8 text-center">Kompleksowa Organizacja Pogrzebu w Jednym Miejscu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <p className="text-black/90 leading-relaxed">
              Wystarczy zaledwie jedna wizyta w naszym zakładzie pogrzebowym w Łodzi, aby ustalić szczegóły ceremonii, 
              wybrać trumnę lub urnę, wiązanki i wieńce pogrzebowe, oprawę muzyczną, a nawet odzież pogrzebową.
            </p>
            <p className="text-black/90 leading-relaxed">
              W imieniu klienta załatwiamy wszelkie formalności, podejmujemy się opieki nad ciałem zmarłego, 
              oferujemy także różnorodne akcesoria pogrzebowe. Dbamy o pełen profesjonalizm i szacunek.
            </p>
          </div>
          
          <div className="bg-black/10 p-6 rounded-lg">
            <h4 className="text-xl font-playfair font-medium mb-4 text-black">Oferujemy pełną obsługę pogrzebów:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-black/80 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">+</span>
                </div>
                <p className="ml-3 text-black/90">W imieniu klienta załatwiamy wszelkie formalności</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-black/80 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">+</span>
                </div>
                <p className="ml-3 text-black/90">Podejmujemy się opieki nad ciałem zmarłego</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-black/80 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">+</span>
                </div>
                <p className="ml-3 text-black/90">Oferujemy akcesoria pogrzebowe</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-black/80 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">+</span>
                </div>
                <p className="ml-3 text-black/90">Organizujemy pogrzeby różnych wyznań religijnych oraz pogrzeby świeckie</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-medium text-white mb-12 text-center">Szczegółowy zakres naszych usług</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <FeatureItem 
              icon={<Calendar className="w-5 h-5 text-primary" />} 
              title="Organizacja ceremonii"
              delay={10}
            >
              <p className="text-gray-300 mb-4">
                Zapewniamy organizację ceremoni pogrzebowej dopasowanej do indywidualnych potrzeb i oczekiwań rodziny. 
                Oferujemy zarówno tradycyjne ceremonie religijne jak i pogrzeby świeckie.
              </p>
              <ul className="space-y-2 text-gray-400 list-inside">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Przygotowanie ceremonii w obrządku katolickim</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Organizacja pogrzebów świeckich i innych wyznań</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Dobór odpowiednich elementów ceremonii</span>
                </li>
              </ul>
            </FeatureItem>
            
            <FeatureItem 
              icon={<Music className="w-5 h-5 text-primary" />} 
              title="Oprawa muzyczna"
              delay={20}
            >
              <p className="text-gray-300 mb-4">
                Oferujemy profesjonalną oprawę muzyczną uroczystości pogrzebowych. Współpracujemy z doświadczonymi muzykami, którzy 
                zapewnią odpowiedni nastrój podczas ceremonii.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Oprawa wokalno-instrumentalna</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Trębacz wykonujący utwory żałobne</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Organista na uroczystościach kościelnych</span>
                </li>
              </ul>
            </FeatureItem>
            
            <FeatureItem 
              icon={<Flower className="w-5 h-5 text-primary" />} 
              title="Dekoracje florystyczne"
              delay={30}
            >
              <p className="text-gray-300 mb-4">
                Współpracujemy z profesjonalnymi kwiaciarniami, które przygotują odpowiednie wiązanki, wieńce i dekoracje kwiatowe 
                dopasowane do charakteru ceremonii.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Tradycyjne i nowoczesne kompozycje kwiatowe</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Wieńce pogrzebowe w różnych rozmiarach</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Dekoracje kwiatowe urny lub trumny</span>
                </li>
              </ul>
            </FeatureItem>
            
            <FeatureItem 
              icon={<Truck className="w-5 h-5 text-primary" />} 
              title="Transport zmarłych"
              delay={40}
            >
              <p className="text-gray-300 mb-4">
                Dysponujemy specjalistycznymi pojazdami do przewozu zmarłych na terenie całego kraju oraz za granicą. 
                Oferujemy transport z zachowaniem wszelkich standardów i przepisów.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Transport krajowy z dowolnego miejsca</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Transport międzynarodowy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Załatwianie niezbędnych dokumentów przewozowych</span>
                </li>
              </ul>
            </FeatureItem>
            
            <FeatureItem 
              icon={<Flame className="w-5 h-5 text-primary" />} 
              title="Kremacja"
              delay={50}
            >
              <p className="text-gray-300 mb-4">
                Zajmujemy się organizacją kremacji oraz przygotowaniem ceremonii zgodnie z życzeniami rodziny. 
                Oferujemy szeroki wybór urn oraz pomoc w organizacji ceremonii po kremacji.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Organizacja kremacji w wybranym krematorium</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Bogaty wybór urn tradycyjnych i biodegradowalnych</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Pomoc w organizacji ceremonii pożegnalnej</span>
                </li>
              </ul>
            </FeatureItem>
            
            <FeatureItem 
              icon={<Heart className="w-5 h-5 text-primary" />} 
              title="Ekshumacja"
              delay={60}
            >
              <p className="text-gray-300 mb-4">
                Przeprowadzamy ekshumację zwłok zgodnie ze wszystkimi normami oraz procedurami, 
                zapewniając godne traktowanie zmarłych i pomoc w załatwieniu wszelkich formalności.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Uzyskanie niezbędnych zezwoleń</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Profesjonalne przeprowadzenie ekshumacji</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                  <span>Transport szczątków na wskazany cmentarz</span>
                </li>
              </ul>
            </FeatureItem>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card max-w-3xl mx-auto p-8 rounded-xl">
            <h3 className="text-2xl font-playfair font-medium text-white mb-4">Potrzebujesz pomocy w trudnej chwili?</h3>
            <p className="text-gray-300 mb-6">
              Nasz zespół jest dostępny całodobowo, aby zapewnić profesjonalne wsparcie i pomoc w organizacji pogrzebu
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <a href="tel:+48123456789" className="button-primary flex items-center justify-center gap-2 w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                <span>Zadzwoń teraz</span>
              </a>
              <a href="#contact" className="button-secondary w-full sm:w-auto">Skontaktuj się z nami</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
