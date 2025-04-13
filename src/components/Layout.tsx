
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { IMAGES } from '../assets/images';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time even more for faster experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Reduced from 300ms to 100ms
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      {/* Cross Background */}
      <div 
        className="fixed inset-0 bg-contain bg-center bg-no-repeat opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.cross})` }}
      ></div>
      
      {/* Subtle candle overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.candles})` }}
      ></div>
      
      <Navbar />
      <main className={`flex-grow transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}> {/* Reduced from 500ms to 300ms */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
