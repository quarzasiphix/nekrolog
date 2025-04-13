
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { IMAGES } from "../assets/images";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update page title
    document.title = "Strona nie znaleziona | Nekrolog Łódź";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 relative">
      {/* Cross Background */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.cross})` }}
      ></div>
      
      <div className="text-center max-w-lg relative z-10">
        <img src={IMAGES.logo} alt="Nekrolog Łódź" className="h-16 mx-auto mb-6" />
        <h1 className="text-6xl font-playfair font-bold mb-6 text-white">404</h1>
        <p className="text-2xl text-gray-300 mb-8 font-light">
          Przepraszamy, strona której szukasz nie istnieje
        </p>
        <a 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Powrót do strony głównej
        </a>
      </div>
    </div>
  );
};

export default NotFound;
