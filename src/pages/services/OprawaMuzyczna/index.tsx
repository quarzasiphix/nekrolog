
import React from 'react';
import ServiceLayout from '../../../components/ServiceLayout';
import { IMAGES } from '../../../assets/images';
import OprawaMuzycznaContent from './OprawaMuzycznaContent';

const OprawaMuzyczna = () => {
  return (
    <ServiceLayout
      title="Oprawa Muzyczna Pogrzebu Łódź"
      description="Profesjonalna oprawa muzyczna ceremonii pogrzebowej, która doda uroczystości wyjątkowego, podniosłego charakteru."
      backgroundImage={IMAGES.services.music}
      metaDescription="Profesjonalna oprawa muzyczna pogrzebu w Łodzi. Instrumenty, wokaliści, organy, trąbka. Muzyka dostosowana do charakteru uroczystości. ☎ +48 602 274 661"
      metaKeywords="oprawa muzyczna pogrzebu, muzyka na pogrzeb, organista pogrzeb, śpiew na pogrzeb, trąbka na pogrzeb, łódź"
    >
      <OprawaMuzycznaContent />
    </ServiceLayout>
  );
};

export default OprawaMuzyczna;
