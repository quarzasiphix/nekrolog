
import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
  time: number;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      author_name: "Andrzej Czyżyk",
      rating: 5,
      text: "Wszystko zostało zorganizowane bardzo profesjonalnie i ze smakiem. Dziękujemy za każdą poradę i zaangażowanie. Bardzo ważna jest możliwość wykonania wszystkich formalności w jednym miejscu i w ciągu jednego dnia. Bardzo ważny jest też takt i spokój pani Jolanty - bezcenne.",
      profile_photo_url: "",
      time: new Date('2023-10-11').getTime()
    },
    {
      author_name: "Joanna Kustosz",
      rating: 5,
      text: "Firma Pani Jolanty Kostowskiej pomogła w przygotowaniu uroczystości pogrzebowej mojego taty. Wszystko przebiegło sprawnie i z należytym szacunkiem. Pani Jolanta jest osobą, która wie jak rozmawiać z pogrążonymi w żałobie ludźmi. Dziękujemy!",
      profile_photo_url: "",
      time: new Date('2023-10-04').getTime()
    },
    {
      author_name: "Oliwier Natorski",
      rating: 5,
      text: "Serdecznie dziękuję Pani Jolancie i jej Zespołowi za pomoc w organizacji uroczystości pogrzebowej naszego Taty. W tych ciężkich chwilach mogliśmy liczyć na pełne wsparcie, organizację całości ceremonii w sposób godny i respektujący nasze życzenia. Jesteśmy bardzo wdzięczni za pomoc i wsparcie.",
      profile_photo_url: "",
      time: new Date('2023-09-21').getTime()
    },
    {
      author_name: "Grzegorz Stefański",
      rating: 5,
      text: "Firmę prowadzi sympatyczna Pani Jolanta, która w tych trudnych chwilach służy pomocą. Ceny usług dla klienta są korzystne i nie wygórowane. Każdy klient traktowany jest indywidualnie, co w tej branży jest bardzo ważne. Polecam.",
      profile_photo_url: "",
      time: new Date('2023-06-13').getTime()
    },
    {
      author_name: "Agnieszka Gumowska",
      rating: 5,
      text: "Usługa na najwyższym poziomie, bez żadnych zastrzeżeń, pomoc w ciężkiej sytuacji bezcenna.",
      profile_photo_url: "",
      time: new Date('2023-05-03').getTime()
    },
    {
      author_name: "Janusz Szyjer",
      rating: 5,
      text: "Bardzo profesjonalna obsługa, wszystko zorganizowane w ekspresowym czasie. Polecam wszystkim ten zakład.",
      profile_photo_url: "",
      time: new Date('2022-10-29').getTime()
    }
  ]);

  // In a real implementation, you would fetch reviews from Google API
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       // This would need to be implemented server-side due to API key restrictions
  //       const response = await fetch('/api/google-reviews');
  //       const data = await response.json();
  //       setReviews(data.reviews);
  //     } catch (error) {
  //       console.error('Error fetching Google reviews:', error);
  //     }
  //   };
  //
  //   fetchReviews();
  // }, []);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'text-primary fill-primary' : 'text-gray-400'
          }`}
        />
      ));
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('pl-PL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <section className="py-16 bg-black/90" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium text-white mb-4">
            Opinie naszych klientów
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Poznaj opinie osób, które zaufały naszemu zakładowi pogrzebowemu. Dokładamy wszelkich starań, aby zapewnić najwyższą jakość usług w tych trudnych chwilach.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center">
              {renderStars(5)}
              <span className="ml-2 text-white font-bold">5.0/5</span>
            </div>
            <span className="mx-3 text-gray-400">|</span>
            <div className="flex items-center">
              <span className="text-gray-300">94 opinii w Google</span>
            </div>
          </div>
          
          <a 
            href="https://g.co/kgs/MhdWuLg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm"
          >
            Dodaj opinię
          </a>
        </div>

        <ScrollArea className="h-[450px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-black/70 border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3 overflow-hidden">
                      {review.profile_photo_url ? (
                        <img src={review.profile_photo_url} alt={review.author_name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-white font-bold">{review.author_name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{review.author_name}</h3>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-4">{review.text}</p>
                  <p className="text-gray-400 text-sm">{formatDate(review.time)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>

        <div className="text-center mt-10">
          <a 
            href="https://g.co/kgs/MhdWuLg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-black rounded-md hover:bg-primary/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
          >
            Zobacz wszystkie opinie w Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
