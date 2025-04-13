
import React from 'react';

const MusicRepertoire = () => {
  return (
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
  );
};

export default MusicRepertoire;
