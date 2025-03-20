
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

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
    <div className="min-h-screen flex flex-col bg-funeral-50">
      <Navbar />
      <main className={`flex-grow transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
