import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import ServicesCta from '../components/ServicesCta';
import Reviews from '../components/Reviews';
import ServicesTable from '../components/ServicesTable';
import BlogPreview from '../components/BlogPreview';

const Index = () => {
  useEffect(() => {
    // --- SEO Meta Tag Updates ---
    const pageTitle = "Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo";
    const pageDescription = "Profesjonalny zakład pogrzebowy Nekrolog Łódź Jolanta Kostowska. Kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Dostępni całodobowo. Tel: +48 602 274 661.";
    const keywords = "usługi pogrzebowe łódź, zakład pogrzebowy łódź, dom pogrzebowy łódź, nekrolog łódź, jolanta kostowska, pogrzeby łódź, kremacja łódź, transport zwłok łódź, całodobowy zakład pogrzebowy";
    const canonicalUrl = window.location.href; // Or your preferred canonical URL

    document.title = pageTitle;

    const setMetaTag = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', pageDescription);
    setMetaTag('keywords', keywords);
    setMetaTag('og:title', pageTitle, true);
    setMetaTag('og:description', pageDescription, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', canonicalUrl, true);
    // Add og:image if you have a specific image for social sharing
    // setMetaTag('og:image', 'URL_TO_YOUR_IMAGE.jpg', true);

    // Add Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);


    // --- Structured Data (JSON-LD) ---
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FuneralHome",
      "name": "Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska",
      "description": pageDescription,
      "telephone": "+48602274661",
      "email": "kontakt@nekrolog-lodz.pl", // Make sure this email is correct
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Legionów 48",
        "addressLocality": "Łódź",
        "postalCode": "90-702",
        "addressCountry": "PL"
      },
      "url": canonicalUrl,
      "openingHours": "Mo-Fr 08:00-16:00, Sa 09:00-13:00", // Adjust if needed, mention 24/7 availability separately if applicable
      "priceRange": "$$", // Optional: Indicate price range if desired (e.g., $, $$, $$$)
      "sameAs": [
        "https://www.facebook.com/people/Zak%C5%82ad-pogrzebowyNekrolog-Jolanta-Kostowska/100092232063111/",
        // Add other relevant profiles if any (e.g., Google Maps URL from the business profile)
      ]
      // Add image URL if available: "image": "URL_TO_LOGO_OR_REPRESENTATIVE_IMAGE.jpg"
    };

    // Remove existing script tag if it exists
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      // Optionally remove other meta tags if they are specific only to this page
    };

  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Layout>
      <Hero />
      <Services />
      <Reviews />
      <ServicesCta />
      <ServicesTable />
      <BlogPreview />
      <About />
      <Contact />
      {/* Sekcja "Potrzebujesz pomocy?" */}
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
