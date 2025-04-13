import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User } from 'lucide-react';

const ContactCard = ({ 
  icon, 
  title, 
  children, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  children: React.ReactNode; 
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="glass-card p-8 rounded-xl flex flex-col opacity-0 translate-y-10 transition-all duration-500 h-full"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-playfair font-medium text-white">{title}</h3>
      </div>
      <div className="text-gray-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/90 to-black/80">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-500 text-center mb-16"
        >
          <h2 className="section-title">Kontakt z Zakładem Pogrzebowym</h2>
          <p className="section-subtitle">
            Jesteśmy dostępni całodobowo, aby zapewnić Państwu wsparcie w trudnych chwilach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactCard 
            icon={<MapPin className="w-6 h-6 text-primary" />}
            title="Adres"
            delay={50}
          >
            <p className="mb-2">Legionów 48</p>
            <p className="mb-2">90-702 Łódź, Polska</p>
            <a href="https://goo.gl/maps/123" className="text-primary hover:underline text-sm">Zobacz na mapie →</a>
          </ContactCard>
          
          <ContactCard 
            icon={<Phone className="w-6 h-6 text-primary" />}
            title="Telefon"
            delay={100}
          >
            <p className="mb-2">Całodobowo:</p>
            <a href="tel:+48123456789" className="text-primary hover:underline">+48 123 456 789</a>
            <p className="mt-4 text-sm">W nagłych przypadkach jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu</p>
          </ContactCard>
          
          <ContactCard 
            icon={<Clock className="w-6 h-6 text-primary" />}
            title="Godziny otwarcia"
            delay={150}
          >
            <p className="mb-2">Poniedziałek - Piątek: 8:00 - 16:00</p>
            <p>Sobota: 9:00 - 13:00</p>
            <p className="mt-3 text-sm font-medium bg-primary/10 p-2 rounded text-primary">* Dostępność telefoniczna: całodobowo</p>
          </ContactCard>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-playfair font-medium mb-6 text-white">Wyślij wiadomość</h3>
            
            {submitSuccess ? (
              <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-md text-white">
                <p className="font-medium">Dziękujemy za wiadomość!</p>
                <p className="text-gray-300 text-sm mt-1">Skontaktujemy się z Państwem w najkrótszym możliwym czasie.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-1">Imię i nazwisko</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <User className="w-5 h-5" />
                      </span>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-md py-2 pl-10 pr-3 text-white focus:outline-none focus:border-primary/60"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-md py-2 px-3 text-white focus:outline-none focus:border-primary/60"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-1">Telefon</label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-md py-2 px-3 text-white focus:outline-none focus:border-primary/60"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-1">Wiadomość</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-md py-2 px-3 text-white h-32 focus:outline-none focus:border-primary/60"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black py-3 rounded-md font-medium flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                        <span>Wysyłanie...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Wyślij wiadomość</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="glass-card p-0 rounded-xl overflow-hidden h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.6458763215776!2d19.4554974!3d51.7776945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3497f9d406e7%3A0xb1c0f5dea0a8dd17!2sLegion%C3%B3w%2048%2C%2090-702%20%C5%81%C3%B3d%C5%BA%2C%20Polska!5e0!3m2!1spl!2spl!4v1625672582341!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "400px" }} 
              allowFullScreen 
              loading="lazy"
              title="Google Maps - Nekrolog Łódź"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
