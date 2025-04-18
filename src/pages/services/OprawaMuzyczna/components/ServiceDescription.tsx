import React from 'react';
import { Check } from 'lucide-react';

const ServiceDescription = () => {
  return (
    <div className="prose prose-lg prose-invert max-w-none mb-8">
      <p className="mb-6">
        Muzyka odgrywa szczególną rolę podczas ceremonii pogrzebowej - pomaga wyrazić emocje, 
        które trudno ubrać w słowa, nadaje uroczystości wyjątkowy, podniosły charakter oraz 
        pomaga w przeżywaniu żałoby.
      </p>
      
      <p className="mb-6">
        Dom Pogrzebowy Nekrolog Łódź oferuje profesjonalną oprawę muzyczną ceremonii pogrzebowych, 
        dostosowaną do indywidualnych preferencji rodziny i charakteru uroczystości. Współpracujemy 
        z doświadczonymi muzykami, którzy z należytym szacunkiem i profesjonalizmem zadbają o 
        odpowiednią atmosferę podczas ostatniego pożegnania.
      </p>
      
      <p className="mb-4">
        <strong>W ramach oprawy muzycznej pogrzebu oferujemy:</strong>
      </p>
      
      <ul className="space-y-3">
        <li className="flex items-start">
          <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
          <span>Oprawę organową w kościele</span>
        </li>
        <li className="flex items-start">
          <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
          <span>Profesjonalny śpiew solowy lub chóralny</span>
        </li>
        <li className="flex items-start">
          <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
          <span>Grę na trąbce (m.in. "Cisza" w momencie złożenia trumny do grobu)</span>
        </li>
        <li className="flex items-start">
          <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
          <span>Oprawę instrumentalną (skrzypce, wiolonczela, gitara i inne)</span>
        </li>
        <li className="flex items-start">
          <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
          <span>Dostosowanie repertuaru do charakteru uroczystości</span>
        </li>
        <li className="flex items-start">
          <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
          <span>Możliwość wykonania ulubionych utworów zmarłego</span>
        </li>
      </ul>
    </div>
  );
};

export default ServiceDescription;
