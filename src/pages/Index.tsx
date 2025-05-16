import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import ServicesCta from '../components/ServicesCta';
import Reviews from '../components/Reviews';
import ServicesTable from '../components/ServicesTable';

const Index = () => {
  useEffect(() => {
    // --- SEO META ---
    const title = "Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo";
    const description = "Profesjonalny zakład pogrzebowy Nekrolog Łódź Jolanta Kostowska. Kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Dostępni całodobowo. Tel: +48 602 274 661.";
    const keywords = "usługi pogrzebowe łódź, zakład pogrzebowy łódź, dom pogrzebowy łódź, nekrolog łódź, jolanta kostowska, pogrzeby łódź, kremacja łódź, transport zwłok łódź, całodobowy zakład pogrzebowy";
    const url = window.location.href;

    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(isProperty ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', url, true);
    // setMeta('og:image', 'https://nekrolog-lodz.pl/assets/og-home.jpg', true); // Add if needed

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // --- STRUCTURED DATA ---
    const schema = {
      "@context": "https://schema.org",
      "@type": "FuneralHome",
      "name": "Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska",
      "description": description,
      "telephone": "+48602274661",
      "email": "kontakt@nekrolog-lodz.pl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Legionów 48",
        "addressLocality": "Łódź",
        "postalCode": "90-702",
        "addressCountry": "PL"
      },
      "url": url,
      "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
      "priceRange": "$$",
      "sameAs": [
        "https://www.facebook.com/people/Zak%C5%82ad-pogrzebowyNekrolog-Jolanta-Kostowska/100092232063111/"
      ]
    };

    const existingScript = document.getElementById('structured-data');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const cleanupScript = document.getElementById('structured-data');
      if (cleanupScript) cleanupScript.remove();
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <Reviews />
      <ServicesCta />
      <ServicesTable />
      <About />
      <Contact />
      <div className="bg-black py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">Potrzebujesz pomocy?</h2>
          <p className="text-lg mb-6 text-gray-300">Jesteśmy dostępni 24/7, aby Ci pomóc w trudnych chwilach.</p>
          <a
            href="tel:+48602274661"
            className="text-2xl font-bold text-primary hover:underline"
          >
            Zadzwoń: +48 602 274 661
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
