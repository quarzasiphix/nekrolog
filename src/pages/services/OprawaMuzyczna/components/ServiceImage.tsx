
import React from 'react';
import { IMAGES } from '../../../../assets/images';

const ServiceImage = () => {
  return (
    <div>
      <img 
        src={IMAGES.subpages.oprawa} 
        alt="Oprawa muzyczna pogrzebu Łódź" 
        className="w-full h-auto rounded-lg mb-4 shadow-lg"
      />
      
      <p className="text-gray-300 italic text-center">
        Profesjonalna oprawa muzyczna nadaje ceremonii pogrzebowej szczególnie podniosły charakter
      </p>
    </div>
  );
};

export default ServiceImage;
