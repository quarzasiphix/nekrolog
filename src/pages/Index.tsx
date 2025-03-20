
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Nekrolog Łódź - Usługi Pogrzebowe";
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Contact />
    </Layout>
  );
};

export default Index;
