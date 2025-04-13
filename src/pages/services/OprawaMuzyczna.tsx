
import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { IMAGES } from '../../assets/images';
import { Music, Mic, BarChart4, Headphones, CheckCircle, Phone } from 'lucide-react';

const OprawaMuzyczna = () => {
  return (
    <ServiceLayout
      title="Oprawa Muzyczna Pogrzebu Łódź"
      description="Profesjonalna oprawa muzyczna ceremonii pogrzebowej, która doda uroczystości wyjątkowego, podniosłego charakteru."
      backgroundImage={IMAGES.services.music}
      metaDescription="Profesjonalna oprawa muzyczna pogrzebu w Łodzi. Instrumenty, wokaliści, organy, trąbka. Muzyka dostosowana do charakteru uroczystości. ☎ +48 123 456 789"
      metaKeywords="oprawa muzyczna pogrzebu, muzyka na pogrzeb, organista pogrzeb, śpiew na pogrzeb, trąbka na pogrzeb, łódź"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-6">
            Profesjonalna oprawa muzyczna ceremonii pogrzebowej
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Muzyka odgrywa szczególną rolę podczas ceremonii pogrzebowej - pomaga wyrazić emocje, 
              które trudno ubrać w słowa, nadaje uroczystości wyjątkowy, podniosły charakter oraz 
              pomaga w przeżywaniu żałoby.
            </p>
            
            <p>
              Dom Pogrzebowy Nekrolog Łódź oferuje profesjonalną oprawę muzyczną ceremonii pogrzebowych, 
              dostosowaną do indywidualnych preferencji rodziny i charakteru uroczystości. Współpracujemy 
              z doświadczonymi muzykami, którzy z należytym szacunkiem i profesjonalizmem zadbają o 
              odpowiednią atmosferę podczas ostatniego pożegnania.
            </p>
            
            <p>
              <strong>W ramach oprawy muzycznej pogrzebu oferujemy:</strong>
            </p>
            
            <ul>
              <li>Oprawę organową w kościele</li>
              <li>Profesjonalny śpiew solowy lub chóralny</li>
              <li>Grę na trąbce (m.in. "Cisza" w momencie złożenia trumny do grobu)</li>
              <li>Oprawę instrumentalną (skrzypce, wiolonczela, gitara i inne)</li>
              <li>Dostosowanie repertuaru do charakteru uroczystości</li>
              <li>Możliwość wykonania ulubionych utworów zmarłego</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-medium text-white">Oprawa organowa</h3>
              </div>
              <p className="text-gray-300">
                Tradycyjne utwory organowe wykonywane podczas mszy pogrzebowej i ceremonii 
                na cmentarzu, nadające uroczystości podniosły charakter.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Mic className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-medium text-white">Oprawa wokalna</h3>
              </div>
              <p className="text-gray-300">
                Profesjonalni wokaliści wykonujący pieśni żałobne, religijne 
                lub świeckie, dostosowane do charakteru ceremonii.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <BarChart4 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-medium text-white">Trąbka pogrzebowa</h3>
              </div>
              <p className="text-gray-300">
                Wykonanie utworu "Cisza" lub innych utworów na trąbce, szczególnie 
                poruszające w momencie złożenia trumny do grobu.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-medium text-white">Oprawa instrumentalna</h3>
              </div>
              <p className="text-gray-300">
                Szeroki wybór instrumentów: skrzypce, wiolonczela, gitara i inne, 
                wykonujące utwory klasyczne, religijne lub współczesne.
              </p>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-playfair font-medium text-white mb-4">
              Wybór utworów muzycznych na ceremonię pogrzebową
            </h3>
            
            <p className="text-gray-300 mb-6">
              Dobór odpowiednich utworów muzycznych ma ogromne znaczenie dla atmosfery ceremonii pogrzebowej. 
              Pomagamy w wyborze repertuaru, który najlepiej wyrazi emocje towarzyszące pożegnaniu. 
              Oferujemy zarówno tradycyjne pieśni pogrzebowe, jak i możliwość wykonania ulubionych utworów 
              zmarłego, co nadaje ceremonii bardzo osobisty wymiar.
            </p>
            
            <div className="bg-black/40 p-6 rounded-xl border border-primary/20">
              <h4 className="text-lg font-medium text-primary mb-4">Przykładowy repertuar</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-white font-medium mb-2">Pieśni religijne:</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li>• "Barka"</li>
                    <li>• "Panie, mój Panie"</li>
                    <li>• "Liczę na Ciebie, Ojcze"</li>
                    <li>• "Być bliżej Ciebie chcę"</li>
                    <li>• "Jezu, ufam Tobie"</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-white font-medium mb-2">Utwory klasyczne i instrumentalne:</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li>• "Ave Maria" (F. Schubert)</li>
                    <li>• "Cisza" (na trąbkę)</li>
                    <li>• "Panis Angelicus"</li>
                    <li>• "Amazing Grace"</li>
                    <li>• "Time to Say Goodbye"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src={IMAGES.subpages.oprawa} 
              alt="Oprawa muzyczna pogrzebu Łódź" 
              className="w-full h-auto rounded-lg mb-8 shadow-lg"
            />
            
            <p className="text-gray-300 italic text-center">
              Profesjonalna oprawa muzyczna nadaje ceremonii pogrzebowej szczególnie podniosły charakter
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="glass-card p-6 rounded-xl mb-8">
            <h3 className="text-xl font-playfair font-medium text-white mb-4">
              Dlaczego oprawa muzyczna jest ważna?
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Nadaje ceremonii podniosły, uroczysty charakter
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Pomaga w wyrażeniu emocji towarzyszących pożegnaniu
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Tworzy odpowiednią atmosferę refleksji i zadumy
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Stanowi wyraz szacunku dla zmarłego i jego pamięci
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Umożliwia personalizację ceremonii poprzez wybór ulubionych utworów zmarłego
                </span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-xl mb-8">
            <h3 className="text-xl font-playfair font-medium text-white mb-4">
              Jak zamówić oprawę muzyczną?
            </h3>
            
            <p className="text-gray-300 mb-4">
              Zamówienie oprawy muzycznej jest bardzo proste. Podczas organizacji pogrzebu 
              w naszym domu pogrzebowym, możesz omówić wszystkie szczegóły dotyczące muzyki.
            </p>
            
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary font-medium">1</span>
                <span>Skontaktuj się z naszym domem pogrzebowym</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary font-medium">2</span>
                <span>Omów swoje preferencje dotyczące rodzaju oprawy muzycznej</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary font-medium">3</span>
                <span>Wybierz odpowiednie utwory lub skorzystaj z naszych rekomendacji</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary font-medium">4</span>
                <span>My zajmiemy się organizacją profesjonalnych muzyków</span>
              </li>
            </ol>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-playfair font-medium text-white mb-4">
              Potrzebujesz więcej informacji?
            </h3>
            
            <p className="text-gray-300 mb-6">
              Skontaktuj się z nami, aby omówić szczegóły oprawy muzycznej 
              lub poznać więcej możliwości personalizacji ceremonii pogrzebowej.
            </p>
            
            <a 
              href="tel:+48123456789" 
              className="w-full px-6 py-4 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium flex items-center justify-center gap-2 mb-4"
            >
              <Phone className="h-5 w-5" /> +48 123 456 789
            </a>
            
            <p className="text-center text-gray-400 text-sm">
              Jesteśmy dostępni całodobowo
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default OprawaMuzyczna;
