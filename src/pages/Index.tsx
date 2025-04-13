
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import ServicesCta from '../components/ServicesCta';

const Index = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Nekrolog Łódź - Profesjonalne Usługi Pogrzebowe | Całodobowa Pomoc";
    
    // Update meta description
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', "Kompleksowe usługi pogrzebowe w Łodzi. Organizacja pogrzebów, kremacja, przewóz zwłok. Wsparcie i pomoc 24/7 w trudnych chwilach. ☎ +48 123 456 789");
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <ServicesCta />
      <About />
      <Contact />
    </Layout>
  );
};

export default Index;
