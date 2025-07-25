
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { IMAGES } from '../assets/images';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Reduced loading time even more for faster experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); 

    // Get current URL and canonical URL
    const currentUrl = window.location.href;
    const canonicalUrl = `https://nekrolog-lodz.pl${location.pathname}`.replace(/\/+$/, '');

    // Set canonical URL
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // Set up structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Nekrolog Łódź - Usługi Pogrzebowe",
      "url": "https://nekrolog-lodz.pl",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nekrolog-lodz.pl/szukaj?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Remove existing script if it exists
    const existingScript = document.getElementById('website-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'website-structured-data';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      {/* Cross Background */}
      <div 
        className="fixed inset-0 bg-contain bg-center bg-no-repeat opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.cross})` }}
      ></div>
      
      <Navbar />
      <Breadcrumb />
      <main className={`flex-grow transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}> 
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

