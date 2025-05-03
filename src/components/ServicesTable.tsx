import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ServicesTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => {
      if (tableRef.current) {
        observer.unobserve(tableRef.current);
      }
    };
  }, []);

  const tableData = [
    { service: 'Organizacja Pogrzebu', description: 'Kompleksowa organizacja ceremonii pogrzebowej z dopełnieniem formalności', link: '/uslugi/organizacja-pogrzebow' },
    { service: 'Kremacja', description: 'Przeprowadzenie kremacji w nowoczesnym krematorium', link: '/uslugi/krematorium' },
    { service: 'Ekshumacja', description: 'Procedura ekshumacji zgodna z obowiązującymi normami', link: '/uslugi/ekshumacja' },
    { service: 'Transport Zmarłych', description: 'Bezpieczny przewóz ciał, trumien i urn na terenie Polski i Europy', link: '/uslugi/transport' },
    { service: 'Oprawa Muzyczna', description: 'Zapewnienie oprawy muzycznej idealnie dopasowanej do ceremonii', link: '/uslugi/oprawa-muzyczna' },
    { service: 'Trumny, Urny, Wiązanki', description: 'Wysokiej jakości produkty pogrzebowe, w tym trumny i urny', link: '/asortyment' },
    { service: 'Wieńce Pogrzebowe', description: 'Tradycyjne wieńce, symboliczne wyrazy szacunku dla zmarłego', link: '/asortyment/wience' },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="section-container">
        <div 
          ref={tableRef}
          className="opacity-0 translate-y-10 transition-all duration-300"
        >
          <h2 className="section-title text-center mb-8">Podsumowanie Usług i Produktów</h2>
          <div className="overflow-x-auto glass-card rounded-xl p-4">
            <table className="min-w-full divide-y divide-primary/20">
              <thead className="bg-white/5">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Produkt / Usługa
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Opis
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">
                    Więcej Informacji
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {tableData.map((item) => (
                  <tr key={item.service} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">{item.service}</td>
                    <td className="px-4 py-4 text-sm text-gray-300">{item.description}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <Link to={item.link} className="text-primary hover:text-primary/80 transition-colors">
                        Zobacz więcej
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTable; 