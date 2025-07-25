import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  // Placeholder blog posts - you can replace this with real data later
  const blogPosts = [
    {
      id: 1,
      title: "Jak przygotować się do ceremonii pogrzebowej",
      excerpt: "Praktyczny przewodnik po organizacji ceremonii pogrzebowej w trudnych chwilach.",
      content: "Szczegółowy opis procesu organizacji ceremonii...",
      author: "Dom Pogrzebowy Łódź",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Poradniki",
      slug: "jak-przygotowac-sie-do-ceremonii-pogrzebowej"
    },
    {
      id: 2,
      title: "Tradycje pogrzebowe w Polsce",
      excerpt: "Poznaj historię i znaczenie polskich tradycji pogrzebowych.",
      content: "Historia polskich tradycji pogrzebowych...",
      author: "Dom Pogrzebowy Łódź",
      date: "2024-01-10",
      readTime: "7 min",
      category: "Tradycje",
      slug: "tradycje-pogrzebowe-w-polsce"
    },
    {
      id: 3,
      title: "Dokumenty potrzebne przy zgonie",
      excerpt: "Lista dokumentów i formalności do załatwienia po śmierci bliskiej osoby.",
      content: "Szczegółowa lista dokumentów...",
      author: "Dom Pogrzebowy Łódź",
      date: "2024-01-05",
      readTime: "4 min",
      category: "Formalności",
      slug: "dokumenty-potrzebne-przy-zgonie"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Blog - Dom Pogrzebowy Łódź | Artykuły i Poradniki</title>
        <meta 
          name="description" 
          content="Blog Domu Pogrzebowego w Łodzi. Artykuły, poradniki i informacje o usługach pogrzebowych, tradycjach i formalności związanych z organizacją pogrzebu." 
        />
        <meta name="keywords" content="blog pogrzebowy, poradniki pogrzebowe, tradycje pogrzebowe, formalności pogrzebowe, Łódź" />
        <link rel="canonical" href="https://dompogrzebowy-lodz.pl/o-nas/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Artykuły, poradniki i informacje pomocne w trudnych chwilach. 
              Dzielimy się wiedzą i doświadczeniem, aby wspierać Państwa w organizacji ceremonii pogrzebowych.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('pl-PL')}
                    </div>
                  </div>
                  <button className="w-full text-left text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                    Czytaj więcej →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Potrzebujesz pomocy?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Jeśli masz pytania lub potrzebujesz wsparcia w organizacji ceremonii pogrzebowej, 
              skontaktuj się z nami. Jesteśmy do Państwa dyspozycji 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+48123456789" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Zadzwoń teraz
              </a>
              <a 
                href="/kontakt" 
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
              >
                Formularz kontaktowy
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;