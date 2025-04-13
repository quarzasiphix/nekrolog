
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import ServicesCta from '../components/ServicesCta';
import Reviews from '../components/Reviews';

const Index = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Nekrolog Łódź - Profesjonalne Usługi Pogrzebowe | Całodobowa Pomoc";
    
    // Update meta description
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', "Kompleksowe usługi pogrzebowe w Łodzi. Organizacja pogrzebów, kremacja, przewóz zwłok. Wsparcie i pomoc 24/7 w trudnych chwilach. ☎ +48 123 456 789");
    }

    // Add additional meta tags for better SEO
    const metaTags = [
      { name: 'keywords', content: 'usługi pogrzebowe, dom pogrzebowy łódź, kremacja, organizacja pogrzebu, nekrolog, pogrzeby, przewóz zwłok' },
      { property: 'og:title', content: 'Nekrolog Łódź - Profesjonalne Usługi Pogrzebowe | Całodobowa Pomoc' },
      { property: 'og:description', content: 'Kompleksowe usługi pogrzebowe w Łodzi. Organizacja pogrzebów, kremacja, przewóz zwłok. Wsparcie i pomoc 24/7 w trudnych chwilach.' },
      { property: 'og:type', content: 'website' }
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        if (tag.property) {
          newTag.setAttribute('property', tag.property);
        } else {
          newTag.setAttribute('name', tag.name);
        }
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <ServicesCta />
      <About />
      <Reviews />
      <Contact />
    </Layout>
  );
};

export default Index;
