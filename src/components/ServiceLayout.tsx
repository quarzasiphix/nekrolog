
import React, { useEffect } from 'react';
import Layout from './Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

type ServiceLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
  metaDescription: string;
  metaKeywords: string;
};

const ServiceLayout = ({ 
  children, 
  title, 
  description, 
  backgroundImage,
  metaDescription,
  metaKeywords
}: ServiceLayoutProps) => {
  
  // Get the current URL path parts for breadcrumb
  const pathParts = window.location.pathname.split('/').filter(part => part);
  
  // Get the parent path if this is a nested route
  let parentPath = '/';
  let parentLabel = 'Strona Główna';
  
  if (pathParts.length > 1) {
    parentPath = `/${pathParts[0]}`;
    parentLabel = pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1);
  }
  
  useEffect(() => {
    // Set document title for SEO
    document.title = `${title} | Nekrolog Łódź - Usługi Pogrzebowe`;
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeywords} />
          <meta property="og:title" content={`${title} | Nekrolog Łódź - Usługi Pogrzebowe`} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:type" content="website" />
        </Helmet>
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pb-20 min-h-[40vh] flex items-center">
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
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </section>
        
        {/* Breadcrumb - Made sticky when scrolling */}
        <div className="breadcrumb-bar sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-400">
              <Link to="/" className="hover:text-primary transition-colors">Strona Główna</Link>
              <ArrowRight className="mx-2 h-3 w-3" />
              {pathParts.length > 1 && (
                <>
                  <Link to={parentPath} className="hover:text-primary transition-colors">{parentLabel}</Link>
                  <ArrowRight className="mx-2 h-3 w-3" />
                </>
              )}
              <span className="text-gray-300">{title}</span>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <section className="py-12 bg-black">
          {children}
        </section>
      </Layout>
    </HelmetProvider>
  );
};

export default ServiceLayout;
