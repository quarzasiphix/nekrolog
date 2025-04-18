import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { CheckCircle, Clock, FileText, AlertTriangle } from 'lucide-react';

const Ekshumacja = () => {
  return (
    <ServiceLayout
      title="Ekshumacja Zwłok w Łodzi"
      description="Profesjonalne przeprowadzenie ekshumacji z zachowaniem wszelkich formalności i godności zmarłego"
      backgroundImage={IMAGES.services.exhumation}
      metaDescription="Profesjonalna usługa ekshumacji zwłok w Łodzi. Oferujemy kompleksową pomoc w uzyskaniu pozwoleń, przeprowadzeniu procesu ekshumacji, transporcie i ponownym pochówku. ☎ +48 602 274 661"
      metaKeywords="ekshumacja łódź, ekshumacja zwłok, przeniesienie grobu, formalności ekshumacja, dom pogrzebowy łódź"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white mb-6">
            Ekshumacja zwłok - kompleksowa pomoc
          </h2>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="mb-6">
              Ekshumacja to proces polegający na wydobyciu szczątków zmarłej osoby z miejsca pochówku 
              w celu ich przeniesienia w inne miejsce. Jest to procedura wymagająca odpowiednich 
              pozwoleń i dokumentów, a także specjalistycznego sprzętu oraz doświadczenia.
            </p>
            
            <p>
              Nasza firma pogrzebowa oferuje kompleksową pomoc w przeprowadzeniu ekshumacji. 
              Załatwiamy wszystkie formalności, pozyskujemy niezbędne pozwolenia oraz przeprowadzamy 
              cały proces z zachowaniem wszelkich procedur sanitarnych i pełnym szacunkiem dla 
              zmarłego oraz jego bliskich.
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-playfair text-white mb-4">Dlaczego może być potrzebna ekshumacja?</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Przeniesienie szczątków do innego grobu lub na inny cmentarz</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Potrzeba przeprowadzenia badań w celach medycznych lub sądowych</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Identyfikacja osoby zmarłej lub ustalenie przyczyny śmierci</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Sprowadzenie zwłok z zagranicy i pochowanie w rodzinnym grobie</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Przeprowadzenie ekshumacji na polecenie organów ścigania</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-xl font-playfair text-white mb-4">
            Kompleksowa usługa ekshumacji obejmuje:
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Formalności i pozwolenia</h4>
                <p className="text-gray-300">
                  Pomagamy w uzyskaniu wszystkich niezbędnych dokumentów, w tym pozwolenia 
                  sanepidu, zgody zarządu cmentarza oraz innych wymaganych formalności.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Przeprowadzenie ekshumacji</h4>
                <p className="text-gray-300">
                  Profesjonalne przeprowadzenie procesu ekshumacji przez doświadczony zespół, 
                  z zachowaniem wszystkich procedur i wymogów sanitarnych.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Procedury sanitarne</h4>
                <p className="text-gray-300">
                  Stosujemy wszystkie wymagane środki bezpieczeństwa oraz procedury sanitarne 
                  podczas przeprowadzania ekshumacji, zgodnie z obowiązującymi przepisami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-playfair text-white mb-6 text-center">
            Wymagane dokumenty do przeprowadzenia ekshumacji
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-8">
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Dokumenty podstawowe:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Wniosek o zezwolenie na ekshumację</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Akt zgonu osoby zmarłej</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Dokument potwierdzający prawo do grobu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Zgoda Państwowego Powiatowego Inspektora Sanitarnego</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Dodatkowe dokumenty:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Zgoda zarządcy cmentarza, na którym znajduje się grób</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Zgoda zarządcy cmentarza, na którym ma nastąpić pochówek</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Zgoda wszystkich członków rodziny bliskiej zmarłemu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">W przypadku ekshumacji za granicę - dodatkowe zezwolenia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Ekshumacja;
