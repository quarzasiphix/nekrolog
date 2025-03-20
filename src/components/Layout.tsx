
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
    // Simulate loading for smoother animation effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FEF7CD]/10 relative">
      {/* Subtle Cross Background */}
      <div 
        className="fixed inset-0 bg-contain bg-center bg-no-repeat opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.cross})` }}
      ></div>
      
      <Navbar />
      <main className={`flex-grow transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
