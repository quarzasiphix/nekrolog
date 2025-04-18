import React from 'react';
import { IMAGES } from '../../../assets/images';
import ServiceDescription from './components/ServiceDescription';
import MusicServices from './components/MusicServices';
import MusicRepertoire from './components/MusicRepertoire';
import ServiceImage from './components/ServiceImage';
import Sidebar from './components/Sidebar';

const OprawaMuzycznaContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
      <div className="lg:col-span-2 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-6">
          Profesjonalna oprawa muzyczna ceremonii pogrzebowej
        </h2>
        
        <ServiceDescription />
        <MusicServices />
        <MusicRepertoire />
        <ServiceImage />
      </div>
      
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
  );
};

export default OprawaMuzycznaContent;
