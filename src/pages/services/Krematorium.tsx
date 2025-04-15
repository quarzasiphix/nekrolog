import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { CheckCircle, Flame, Clock, Coffee, FileText } from 'lucide-react';

const Krematorium = () => {
  return (
    <ServiceLayout
      title="Krematorium w Łodzi"
      description="Profesjonalna usługa kremacji z zachowaniem godności i szacunku dla zmarłego"
      backgroundImage={IMAGES.services.cremation}
      metaDescription="Profesjonalne usługi kremacji w Łodzi. Organizacja kremacji, urny, transport, dokumenty. Pełna pomoc w organizacji pogrzebu po kremacji. ☎ +48 602 274 661"
      metaKeywords="krematorium łódź, kremacja zwłok, urny, pogrzeb z kremacją, spopielenie, dom pogrzebowy łódź"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white mb-6">
            Kremacja - nowoczesna forma pochówku
          </h2>
          
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Kremacja (spopielenie) to coraz bardziej popularna forma pochówku, polegająca na 
              spopieleniu ciała zmarłego w specjalnym piecu kremacyjnym. Jest to alternatywa dla 
              tradycyjnego pochówku, wybierana ze względów osobistych, religijnych czy ekonomicznych.
            </p>
            
            <p>
              Nasza firma pogrzebowa oferuje kompleksową organizację kremacji wraz z wszystkimi 
              towarzyszącymi usługami. Zapewniamy transport do krematorium, szeroki wybór urn 
              oraz pomoc w organizacji ceremonii pożegnalnej przed lub po kremacji.
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-playfair text-white">Dlaczego coraz więcej osób wybiera kremację?</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Niższe koszty pochówku w porównaniu do tradycyjnego</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Możliwość przechowywania urny w kolumbarium lub w domu</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Względy ekologiczne i mniejsze zapotrzebowanie na przestrzeń</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Indywidualne życzenie osoby zmarłej</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Możliwość organizacji ceremonii w dowolnym terminie</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-xl">
          <img 
            src={IMAGES.subpages.krematorium} 
            alt="Krematorium - usługi kremacji w Łodzi" 
            className="w-full h-auto rounded-md mb-8 shadow-lg"
          />
          
          <h3 className="text-xl font-playfair text-white mb-4">
            Kompleksowa usługa kremacji obejmuje:
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Proces kremacji</h4>
                <p className="text-gray-300">
                  Profesjonalne przeprowadzenie procesu kremacji w nowoczesnym krematorium, 
                  z zachowaniem wszelkich procedur i pełnego szacunku dla osoby zmarłej.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Organizacja ceremonii</h4>
                <p className="text-gray-300">
                  Pomoc w organizacji ceremonii pożegnalnej przed kremacją lub uroczystości 
                  z urną. Pełna oprawa ceremonialna dostosowana do indywidualnych potrzeb.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Wybór urny</h4>
                <p className="text-gray-300">
                  Szeroki wybór urn różnego rodzaju - metalowych, drewnianych, biodegradowalnych, 
                  ceramicznych, dostosowanych do preferencji rodziny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-playfair text-white mb-6 text-center">
            Proces kremacji - informacje
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Przebieg procesu kremacji:</h4>
              <ol className="space-y-3 list-decimal pl-6">
                <li className="text-gray-300">
                  <span className="font-medium text-white">Przygotowanie</span> - ciało osoby zmarłej 
                  jest przygotowywane do kremacji, usuwane są przedmioty metalowe (rozruszniki serca, 
                  protezy metalowe) oraz biżuteria.
                </li>
                <li className="text-gray-300">
                  <span className="font-medium text-white">Trumna kremacyjna</span> - ciało umieszczane 
                  jest w specjalnej trumnie kremacyjnej, która wykonana jest z materiałów łatwopalnych.
                </li>
                <li className="text-gray-300">
                  <span className="font-medium text-white">Kremacja</span> - trumna z ciałem umieszczana 
                  jest w piecu kremacyjnym, gdzie w temperaturze 850-1100°C następuje proces spopielenia.
                </li>
                <li className="text-gray-300">
                  <span className="font-medium text-white">Przygotowanie prochów</span> - po zakończeniu 
                  procesu spalania, szczątki są chłodzone, usuwane są fragmenty metali, a prochy są 
                  mielone do konsystencji piasku.
                </li>
                <li className="text-gray-300">
                  <span className="font-medium text-white">Złożenie do urny</span> - prochy umieszczane 
                  są w wybranej przez rodzinę urnie i przekazywane rodzinie lub przygotowywane do pochówku.
                </li>
              </ol>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Wymagane dokumenty:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Akt zgonu osoby zmarłej</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Karta zgonu przeznaczona do celów kremacji</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Zaświadczenie lekarskie o przyczynie zgonu</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Pisemna zgoda członka rodziny na kremację (najczęściej osoby organizującej pogrzeb)</span>
                </li>
              </ul>
              
              <h4 className="text-xl font-medium text-white mt-8 mb-4">Co po kremacji?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Złożenie urny w grobie ziemnym</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Umieszczenie urny w kolumbarium</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Złożenie urny w grobie rodzinnym</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Rozsypanie prochów w ogrodzie pamięci (jeśli dostępny)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Krematorium;
