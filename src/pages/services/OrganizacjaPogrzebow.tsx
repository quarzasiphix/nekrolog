
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { Check, Calendar, FileText, Flower, Users } from 'lucide-react';

const OrganizacjaPogrzebow = () => {
  return (
    <ServiceLayout
      title="Organizacja Pogrzebów Łódź"
      description="Kompleksowa organizacja ceremonii pogrzebowej wraz z załatwieniem wszelkich formalności, aby odciążyć rodzinę w trudnych chwilach."
      backgroundImage={IMAGES.services.funeral}
      metaDescription="Kompleksowa organizacja pogrzebów w Łodzi. Zajmujemy się wszystkimi formalnościami, przygotowaniem ceremonii i zapewniamy wsparcie w trudnych chwilach. ☎ +48 123 456 789"
      metaKeywords="organizacja pogrzebu łódź, ceremonia pogrzebowa, pogrzeb katolicki łódź, pogrzeb świecki, formalności pogrzebowe"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-6">
            Kompleksowa organizacja pogrzebów w Łodzi
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Dom Pogrzebowy Nekrolog Łódź oferuje kompleksową organizację pogrzebów, zapewniając 
              profesjonalną obsługę ceremonii i załatwiając wszelkie formalności w imieniu rodziny, 
              która może w spokoju przeżywać żałobę.
            </p>
            
            <p>
              Organizujemy pogrzeby różnego rodzaju: pogrzeby katolickie, pogrzeby innych wyznań 
              oraz pogrzeby świeckie. Zapewniamy pełną oprawę ceremonii, zarówno tradycyjne jak i 
              niestandardowe formy pożegnania, zawsze dostosowane do życzeń rodziny i osobowości 
              zmarłego.
            </p>
            
            <p>
              <strong>W ramach usługi organizacji pogrzebu oferujemy:</strong>
            </p>
            
            <ul>
              <li>Transport zwłok z miejsca zgonu do domu pogrzebowego</li>
              <li>Przygotowanie i przechowanie ciała zmarłego</li>
              <li>Wybór trumny lub urny oraz akcesoriów pogrzebowych</li>
              <li>Uzyskanie aktu zgonu w Urzędzie Stanu Cywilnego</li>
              <li>Rezerwację terminu w kościele, krematorium lub na cmentarzu</li>
              <li>Przygotowanie i druk nekrologów oraz klepsydr pogrzebowych</li>
              <li>Oprawę muzyczną ceremonii pogrzebowej</li>
              <li>Dekoracje kwiatowe: wieńce, wiązanki, kwiaty do trumny</li>
              <li>Kompleksową obsługę ceremonii pogrzebowej</li>
              <li>Pomoc w uzyskaniu zasiłku pogrzebowego z ZUS/KRUS</li>
            </ul>
          </div>
          
          <div className="space-y-6 mb-10">
            <h3 className="text-xl font-playfair font-medium text-white">
              Jak wygląda proces organizacji pogrzebu w Nekrolog Łódź?
            </h3>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary mb-1">Umówienie spotkania</h4>
                  <p className="text-gray-300">
                    Pierwszym krokiem jest kontakt z naszym zakładem pogrzebowym - telefoniczny lub osobisty. 
                    Jesteśmy dostępni całodobowo, aby jak najszybciej rozpocząć proces organizacji pogrzebu.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary mb-1">Omówienie szczegółów</h4>
                  <p className="text-gray-300">
                    Podczas spotkania omówimy wszystkie szczegóły ceremonii, wybierzemy odpowiednią 
                    trumnę lub urnę, ustalimy charakter uroczystości i wszystkie elementy potrzebne 
                    do godnego pożegnania.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary mb-1">Przejęcie formalności</h4>
                  <p className="text-gray-300">
                    Zajmujemy się wszystkimi formalnościami związanymi z pogrzebem - od uzyskania 
                    aktu zgonu, przez rezerwację terminu w kościele i na cmentarzu, aż po pomoc 
                    w uzyskaniu zasiłku pogrzebowego.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Flower className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary mb-1">Realizacja ceremonii</h4>
                  <p className="text-gray-300">
                    W dniu pogrzebu zajmujemy się całą oprawą ceremonii, zapewniając profesjonalną 
                    obsługę i koordynację wszystkich elementów, aby rodzina mogła w spokoju przeżywać 
                    ostatnie pożegnanie.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-playfair font-medium text-white mb-4">
              Rodzaje ceremonii pogrzebowych
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl bg-opacity-60">
                <h4 className="text-lg font-medium text-primary mb-3">Pogrzeb katolicki</h4>
                <p className="text-gray-300 mb-4">
                  Tradycyjna ceremonia zgodna z obrządkiem katolickim, obejmująca mszę żałobną i ceremonię 
                  na cmentarzu. Zapewniamy pełną oprawę liturgiczną i muzyczną.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl bg-opacity-60">
                <h4 className="text-lg font-medium text-primary mb-3">Pogrzeb świecki</h4>
                <p className="text-gray-300 mb-4">
                  Ceremonia bez elementów religijnych, oparta na wspomnieniach o zmarłym i osobistym 
                  pożegnaniu przez bliskich. Oferujemy różne formy personalizacji.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl bg-opacity-60">
                <h4 className="text-lg font-medium text-primary mb-3">Pogrzeby innych wyznań</h4>
                <p className="text-gray-300 mb-4">
                  Organizujemy również ceremonie dla innych wyznań, zapewniając oprawę zgodną 
                  z tradycjami i rytuałami danej religii.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl bg-opacity-60">
                <h4 className="text-lg font-medium text-primary mb-3">Pogrzeb z kremacją</h4>
                <p className="text-gray-300 mb-4">
                  Kompleksowa organizacja kremacji wraz z ceremonią pożegnalną przed lub po kremacji. 
                  Oferujemy szeroki wybór urn i możliwości pochówku.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src={IMAGES.subpages.organizacja} 
              alt="Organizacja pogrzebów Łódź" 
              className="w-full h-auto rounded-lg mb-8 shadow-lg"
            />
            
            <p className="text-gray-300 italic text-center">
              Dom pogrzebowy Nekrolog Łódź - kompleksowa organizacja ceremonii pogrzebowych
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="glass-card p-6 rounded-xl mb-8">
            <h3 className="text-xl font-playfair font-medium text-white mb-4">
              Dlaczego warto wybrać nasze usługi?
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Profesjonalna obsługa i wsparcie w trudnych chwilach
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Ponad 20 lat doświadczenia w branży pogrzebowej
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Całodobowa dostępność i szybka reakcja
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Indywidualne podejście do każdego klienta
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Kompleksowa obsługa - wszystko w jednym miejscu
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Przejrzyste ceny i pomoc w uzyskaniu zasiłku
                </span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-xl mb-8">
            <h3 className="text-xl font-playfair font-medium text-white mb-4">
              Pomoc w uzyskaniu zasiłku pogrzebowego
            </h3>
            
            <p className="text-gray-300 mb-4">
              Oferujemy pełne wsparcie w procedurze uzyskania zasiłku pogrzebowego z ZUS, KRUS, 
              MSWiA czy MON. Pomożemy zgromadzić wszystkie niezbędne dokumenty i dopełnić formalności.
            </p>
            
            <p className="text-gray-300 mb-4">
              Zasiłek pogrzebowy wynosi 4000 zł i przysługuje osobie, która pokryła koszty pogrzebu, 
              niezależnie od stopnia pokrewieństwa ze zmarłym.
            </p>
            
            <p className="text-primary font-medium">
              Wystarczy dostarczyć nam niezbędne dokumenty, a my zajmiemy się całą resztą.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-playfair font-medium text-white mb-4">
              Skontaktuj się z nami
            </h3>
            
            <p className="text-gray-300 mb-6">
              Jesteśmy dostępni całodobowo, aby zapewnić profesjonalną pomoc w tych trudnych chwilach.
            </p>
            
            <a 
              href="tel:+48123456789" 
              className="w-full px-6 py-4 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium flex items-center justify-center gap-2 mb-4"
            >
              <Phone className="h-5 w-5" /> +48 123 456 789
            </a>
            
            <p className="text-center text-gray-400 text-sm">
              Całodobowe wsparcie i doradztwo
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default OrganizacjaPogrzebow;
