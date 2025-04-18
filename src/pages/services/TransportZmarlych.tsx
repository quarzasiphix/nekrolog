import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { CheckCircle, MapPin, Clock, Globe, AlertTriangle } from 'lucide-react';

const TransportZmarlych = () => {
  return (
    <ServiceLayout
      title="Transport Zmarłych w Łodzi"
      description="Profesjonalny transport zmarłych krajowy i międzynarodowy z zachowaniem wszelkich procedur i godności"
      backgroundImage={IMAGES.services.transport}
      metaDescription="Profesjonalny transport zmarłych w Łodzi - krajowy i międzynarodowy. Kompleksowa obsługa, karawan, chłodnia. Pomoc w formalnościach. ☎ +48 602 274 661"
      metaKeywords="transport zmarłych łódź, przewóz zwłok, karawan, transport międzynarodowy zmarłych, chłodnia, dom pogrzebowy łódź"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white mb-6">
            Transport zmarłych - usługa kompleksowa
          </h2>
          
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Nasza firma pogrzebowa oferuje profesjonalny transport zmarłych na terenie kraju 
              i za granicą. Dysponujemy specjalistycznym taborem dostosowanym do przewozu osób zmarłych, 
              który zapewnia godne przewiezienie ciała z zachowaniem wszelkich procedur.
            </p>
            
            <p>
              Transport zmarłych realizujemy 24 godziny na dobę, 7 dni w tygodniu. Oferujemy 
              przewóz z miejsca zgonu do domu pogrzebowego, kostnicy, chłodni czy też na miejsce 
              ceremonii pogrzebowej.
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-playfair text-white">Nasze usługi transportowe obejmują:</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Transport zmarłych z miejsca zgonu do kostnicy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Przewóz osób zmarłych na terenie Łodzi i całego kraju</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Międzynarodowy transport zmarłych</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Transport zmarłego na ceremonię pogrzebową</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Transport do krematorium i z krematorium</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-xl">
    
          <h3 className="text-xl font-playfair text-white mb-4">
            Profesjonalne usługi transportowe:
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Transport lokalny</h4>
                <p className="text-gray-300">
                  Szybki i godny transport zmarłego na terenie Łodzi i okolic. Dysponujemy odpowiednio 
                  przystosowanymi pojazdami spełniającymi wszelkie wymogi sanitarne.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Dostępność 24/7</h4>
                <p className="text-gray-300">
                  Zapewniamy transport zmarłych przez całą dobę, 7 dni w tygodniu. Nasze doświadczone 
                  zespoły są gotowe do natychmiastowej interwencji w każdej sytuacji.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Transport międzynarodowy</h4>
                <p className="text-gray-300">
                  Oferujemy kompleksowy transport zmarłych za granicę i z zagranicy. Załatwiamy 
                  wszystkie niezbędne formalności oraz dokumenty wymagane przy transporcie międzynarodowym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-playfair text-white mb-6 text-center">
            Transport międzynarodowy - informacje
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-8">
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Wymagane dokumenty:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Akt zgonu w języku międzynarodowym</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Zaświadczenie wykluczające choroby zakaźne</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Zezwolenie konsularne (w zależności od kraju)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Dokument potwierdzający balsamację (jeśli wymagany)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Co zapewniamy:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Specjalistyczną trumnę transportową zgodną z wymogami</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Pomoc w załatwieniu wszystkich formalności</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Transport dostosowany do przepisów danego kraju</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Opiekę koordynatora na każdym etapie transportu</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Uwaga: Niektóre kraje mają szczególne wymagania dotyczące transportu zwłok</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default TransportZmarlych;
