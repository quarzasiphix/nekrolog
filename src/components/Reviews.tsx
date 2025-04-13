
import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
      author_name: "Anna Kowalska",
      rating: 5,
      text: "Profesjonalna obsługa w trudnych chwilach. Pełne wsparcie i zrozumienie. Polecam z całego serca.",
      profile_photo_url: "",
      time: new Date().getTime() - 7 * 24 * 60 * 60 * 1000 // A week ago
    },
    {
      author_name: "Jan Nowak",
      rating: 5,
      text: "Bardzo kompetentna i empatyczna obsługa. W tak trudnym momencie można liczyć na pełne wsparcie i pomoc w organizacji ceremonii. Dziękuję.",
      profile_photo_url: "",
      time: new Date().getTime() - 14 * 24 * 60 * 60 * 1000 // Two weeks ago
    },
    {
      author_name: "Maria Wiśniewska",
      rating: 5,
      text: "Pełen profesjonalizm i godne podejście do całej ceremonii. Wszystko przebiegło zgodnie z oczekiwaniami. Bardzo dziękuję za pomoc.",
      profile_photo_url: "",
      time: new Date().getTime() - 30 * 24 * 60 * 60 * 1000 // A month ago
    },
    {
      author_name: "Tomasz Dąbrowski",
      rating: 4,
      text: "Zakład pogrzebowy godny polecenia. Wszystko zostało zorganizowane szybko i sprawnie. Profesjonalne podejście.",
      profile_photo_url: "",
      time: new Date().getTime() - 45 * 24 * 60 * 60 * 1000 // 45 days ago
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
              <span className="ml-2 text-white font-bold">4.8/5</span>
            </div>
            <span className="mx-3 text-gray-400">|</span>
            <div className="flex items-center">
              <span className="text-gray-300">37 opinii w Google</span>
            </div>
          </div>
          
          <a 
            href="https://g.page/r/YOUR_GOOGLE_PAGE_ID/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm"
          >
            Dodaj opinię
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="text-center mt-10">
          <a 
            href="https://g.page/YOUR_GOOGLE_PAGE_ID" 
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
