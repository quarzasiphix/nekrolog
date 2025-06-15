import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceLayout from '../../../components/ServiceLayout';
import { IMAGES } from '../../../assets/images';
import OprawaMuzycznaContent from './OprawaMuzycznaContent';

const OprawaMuzyczna = () => {
  return (
    <>
      <Helmet>
        <title>Oprawa muzyczna pogrzebu Łódź – Profesjonalna ceremonia | Nekrolog Łódź</title>
        <meta name="description" content="Profesjonalna oprawa muzyczna ceremonii pogrzebowej w Łodzi: organy, śpiew solowy, trąbka, skrzypce, wiolonczela i inne. Dostosowujemy repertuar do indywidualnych potrzeb. Całodobowa pomoc 24/7." />
        <meta name="keywords" content="oprawa muzyczna pogrzebu Łódź, muzyka pogrzebowa, organy pogrzebowe, śpiew solowy, trąbka pogrzebowa, instrumenty pogrzebowe, Nekrolog Łódź" />
        <link rel="canonical" href="https://nekrolog-lodz.pl/uslugi/oprawa-muzyczna/" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="https://nekrolog-lodz.pl/google48d2403143c63cd2.html" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="nekrolog Łódź" />
        <meta property="og:url" content="https://nekrolog-lodz.pl/uslugi/oprawa-muzyczna/" />
        <meta property="og:title" content="Oprawa muzyczna pogrzebu Łódź – Profesjonalna ceremonia" />
        <meta property="og:description" content="Zapewniamy oprawę muzyczną pogrzebów w Łodzi: organy, śpiew, trąbka, instrumenty. Tworzymy podniosłą atmosferę dostosowaną do rodziny. Nekrolog Łódź – usługi 24/7." />
        <meta property="og:image" content="https://nekrolog-lodz.pl/assets/og-oprawa-muzyczna.jpg" />
        <meta property="og:image:alt" content="Oprawa muzyczna ceremonii – Nekrolog Łódź" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nekrologlodz" />
        <meta name="twitter:title" content="Oprawa muzyczna pogrzebu Łódź – Nekrolog Łódź" />
        <meta name="twitter:description" content="Profesjonalna oprawa muzyczna pogrzebu w Łodzi: organy, śpiew, trąbka i instrumenty. Personalizowany repertuar i całodobowe wsparcie." />
        <meta name="twitter:image" content="https://nekrolog-lodz.pl/assets/og-oprawa-muzyczna.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FuneralService",
          "provider": { "@type": "FuneralHome", "name": "Nekrolog Łódź", "url": "https://nekrolog-lodz.pl" },
          "serviceType": "Oprawa muzyczna ceremonii pogrzebowej",
          "areaServed": { "@type": "City", "name": "Łódź" },
          "description": "Profesjonalna oprawa muzyczna ceremonii pogrzebowej w Łodzi: organy, śpiew solowy, trąbka, instrumenty klasyczne i współczesne.",
          "url": "https://nekrolog-lodz.pl/uslugi/oprawa-muzyczna/",
          "telephone": "+48 602 274 661",
          "sameAs": [
            "https://www.facebook.com/people/Zak%C5%82ad-pogrzebowyNekrolog-Jolanta-Kostowska/100092232063111/"
          ]
        })}</script>
      </Helmet>
      <ServiceLayout
        title="Oprawa Muzyczna Pogrzebu Łódź"
        description="Profesjonalna oprawa muzyczna ceremonii pogrzebowej, która doda uroczystości wyjątkowego, podniosłego charakteru."
        backgroundImage={IMAGES.services.music}
        metaDescription="Profesjonalna oprawa muzyczna pogrzebu w Łodzi. Instrumenty, wokaliści, organy, trąbka. Muzyka dostosowana do charakteru uroczystości. ☎ +48 602 274 661"
        metaKeywords="oprawa muzyczna pogrzebu, muzyka na pogrzeb, organista pogrzeb, śpiew na pogrzeb, trąbka na pogrzeb, łódź"
      >
        <OprawaMuzycznaContent />
      </ServiceLayout>
    </>
  );
};

export default OprawaMuzyczna;
