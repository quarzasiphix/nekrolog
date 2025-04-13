
import React from 'react';
import Layout from '../../components/Layout';
import { IMAGES } from '../../assets/images';
import { ArrowRight, Phone, Heart, Music, Truck, Flame, Flower, Cross } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ 
  title, 
  icon, 
  description, 
  link, 
  image 
}: { 
  title: string; 
  icon: React.ReactNode; 
  description: string; 
  link: string;
  image: string;
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-playfair text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-4">{description}</p>
        <Link 
          to={link}
          className="flex items-center text-primary hover:text-primary/80 transition-colors justify-end"
        >
          <span className="mr-2">Szczegóły usługi</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const UslugiPogrzebowe = () => {
  React.useEffect(() => {
    // Set document title for SEO
    document.title = "Usługi Pogrzebowe Łódź | Nekrolog - Kompleksowe Usługi Pogrzebowe";
    
    // Set meta description
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', "Kompleksowe usługi pogrzebowe w Łodzi. Organizacja pogrzebów, kremacja, transport zmarłych, ekshumacja, oprawa muzyczna. Wsparcie 24/7. ☎ +48 602 274 661");
    }
    
    // Set meta keywords
    const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (metaKeywordsTag) {
      metaKeywordsTag.setAttribute('content', "usługi pogrzebowe łódź, dom pogrzebowy, organizacja pogrzebu, kremacja, transport zmarłych, ekshumacja, oprawa muzyczna pogrzebu");
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pb-20 min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
          style={{ 
            backgroundImage: `url(${IMAGES.interior})`,
            filter: 'brightness(0.2)',
          }}
        />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium mb-6 text-white">
              Kompleksowe Usługi Pogrzebowe w Łodzi
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Pełen zakres profesjonalnych usług pogrzebowych, które zapewnią godne pożegnanie bliskiej osoby. 
              Oferujemy wsparcie i pomoc w załatwieniu wszelkich formalności.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+48602274661" 
                className="px-6 py-3 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Phone className="h-5 w-5" /> Całodobowa pomoc
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-400">
            <Link to="/" className="hover:text-primary transition-colors">Strona Główna</Link>
            <ArrowRight className="mx-2 h-3 w-3" />
            <span className="text-gray-300">Usługi</span>
          </div>
        </div>
      </div>
      
      {/* Services List */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-medium text-white mb-4">
              Nasze usługi pogrzebowe
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Oferujemy kompleksową organizację ceremonii pogrzebowej, przejmując na siebie 
              wszelkie obowiązki i formalności związane z pożegnaniem zmarłej osoby.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ServiceItem 
              title="Organizacja Pogrzebów" 
              icon={<Heart className="w-5 h-5 text-primary" />}
              description="Kompleksowa organizacja ceremonii pogrzebowej wraz z załatwieniem wszelkich formalności, aby odciążyć rodzinę w trudnych chwilach."
              link="/uslugi/organizacja-pogrzebow"
              image={IMAGES.services.funeral}
            />
            
            <ServiceItem 
              title="Oprawa Muzyczna" 
              icon={<Music className="w-5 h-5 text-primary" />}
              description="Profesjonalna oprawa muzyczna ceremonii pogrzebowej, która doda uroczystości wyjątkowego, podniosłego charakteru."
              link="/uslugi/oprawa-muzyczna"
              image={IMAGES.services.music}
            />
            
            <ServiceItem 
              title="Transport Zmarłych" 
              icon={<Truck className="w-5 h-5 text-primary" />}
              description="Specjalistyczny transport zmarłych na terenie kraju i za granicą, zapewniający godne przewiezienie ciała z zachowaniem wszelkich procedur."
              link="/uslugi/transport"
              image={IMAGES.services.transport}
            />
            
            <ServiceItem 
              title="Kremacja" 
              icon={<Flame className="w-5 h-5 text-primary" />}
              description="Organizacja kremacji w profesjonalnych krematoriach, wraz z kompleksową pomocą w przygotowaniu urny i ceremonii pogrzebowej po kremacji."
              link="/uslugi/krematorium"
              image={IMAGES.services.cremation}
            />
            
            <ServiceItem 
              title="Ekshumacja" 
              icon={<Flower className="w-5 h-5 text-primary" />}
              description="Profesjonalne przeprowadzenie ekshumacji zgodnie z przepisami, wraz z załatwieniem wszelkich formalności i dokumentów urzędowych."
              link="/uslugi/ekshumacja"
              image={IMAGES.services.exhumation}
            />
            
            <div className="glass-card rounded-xl p-8 flex flex-col justify-center items-center">
              <h3 className="text-xl font-playfair text-white mb-6">Potrzebujesz indywidualnej pomocy?</h3>
              <p className="text-gray-300 mb-6 text-center">
                Skontaktuj się z nami, aby omówić szczegóły usługi lub uzyskać więcej informacji.
              </p>
              <a 
                href="tel:+48602274661" 
                className="px-6 py-3 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Phone className="h-5 w-5" /> +48 602 274 661
              </a>
            </div>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-playfair font-medium text-white mb-6">
                  Dlaczego warto wybrać nasze usługi pogrzebowe?
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-primary">Profesjonalizm i doświadczenie</strong> - Posiadamy wieloletnie 
                    doświadczenie w branży pogrzebowej, co pozwala nam zapewnić najwyższy standard usług, 
                    z pełnym szacunkiem i godnością.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Kompleksowość</strong> - Oferujemy pełen zakres usług pogrzebowych 
                    w jednym miejscu, co oszczędza czas i eliminuje potrzebę kontaktu z wieloma firmami.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Całodobowa dostępność</strong> - Jesteśmy dostępni 24 godziny na dobę, 
                    7 dni w tygodniu, aby zapewnić pomoc w każdej chwili, gdy jest potrzebna.
                  </p>
                  
                  <p>
                    <strong className="text-primary">Indywidualne podejście</strong> - Każda ceremonia pogrzebowa jest 
                    planowana indywidualnie, z uwzględnieniem wszystkich życzeń i oczekiwań rodziny.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-tr-3xl rounded-bl-3xl -z-10"></div>
                <img 
                  src={IMAGES.cross} 
                  alt="Dom pogrzebowy Nekrolog Łódź" 
                  className="w-full h-auto rounded-md shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-b from-black to-black/90 py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 rounded-xl max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-6">
              Potrzebujesz pomocy w trudnej chwili?
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Nasz zespół profesjonalistów jest dostępny 24 godziny na dobę, aby zapewnić Ci wsparcie
              i pomoc w organizacji pogrzebu. Przejmujemy na siebie wszystkie obowiązki i formalności.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+48602274661" 
                className="px-8 py-4 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="h-5 w-5" /> Zadzwoń teraz: +48 602 274 661
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

export default UslugiPogrzebowe;
