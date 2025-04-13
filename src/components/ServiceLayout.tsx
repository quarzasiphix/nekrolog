
import React, { useEffect } from 'react';
import Layout from './Layout';
import { Phone, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { Link } from 'react-router-dom';

type ServiceLayoutProps = {
  title: string;
  description: string;
  backgroundImage: string;
  metaDescription?: string;
  metaKeywords?: string;
  children: React.ReactNode;
};

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  backgroundImage,
  metaDescription,
  metaKeywords,
  children
}) => {
  useEffect(() => {
    // Set document title for SEO
    document.title = `${title} | Nekrolog Łódź - Usługi Pogrzebowe`;
    
    // Set meta description if provided
    if (metaDescription) {
      const metaDescTag = document.querySelector('meta[name="description"]');
      if (metaDescTag) {
        metaDescTag.setAttribute('content', metaDescription);
      }
    }
    
    // Set meta keywords if provided
    if (metaKeywords) {
      const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
      if (metaKeywordsTag) {
        metaKeywordsTag.setAttribute('content', metaKeywords);
      }
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, metaDescription, metaKeywords]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pb-20 min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: 'brightness(0.2)',
          }}
        />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium mb-6 text-white">
              {title}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+48123456789" 
                className="px-6 py-3 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Phone className="h-5 w-5" /> Całodobowa pomoc
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Breadcrumb */}
      <div className="bg-black/80 border-y border-white/10 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-400">
            <Link to="/" className="hover:text-primary transition-colors">Strona Główna</Link>
            <ArrowRight className="mx-2 h-3 w-3" />
            <Link to="/uslugi" className="hover:text-primary transition-colors">Usługi</Link>
            <ArrowRight className="mx-2 h-3 w-3" />
            <span className="text-gray-300">{title}</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-b from-black to-black/90 py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 rounded-xl max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-6">
              Potrzebujesz pomocy w organizacji pogrzebu?
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Nasz zespół profesjonalistów jest dostępny 24 godziny na dobę, aby zapewnić Ci wsparcie
              w tych trudnych chwilach. Przejmujemy na siebie wszystkie obowiązki i formalności.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+48123456789" 
                className="px-8 py-4 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="h-5 w-5" /> Zadzwoń teraz: +48 123 456 789
              </a>
              <Link 
                to="/kontakt" 
                className="px-8 py-4 bg-white/10 text-white rounded-md hover:bg-white/15 transition-all duration-300 border border-white/20 w-full sm:w-auto"
              >
                Formularz kontaktowy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceLayout;
