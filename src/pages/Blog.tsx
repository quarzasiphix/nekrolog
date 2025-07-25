import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  author: string;
  created_at: string;
  read_time: string | null;
  category_name: string | null;
  slug: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select(`
            id,
            title,
            excerpt,
            author,
            created_at,
            read_time,
            slug,
            blog_categories(name)
          `)
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (error) {
          setError('Błąd podczas ładowania artykułów');
          console.error('Error fetching blog posts:', error);
          return;
        }

        const formattedPosts: BlogPost[] = (data || []).map((post: any) => ({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          created_at: post.created_at,
          read_time: post.read_time || '5 min',
          category_name: post.blog_categories?.name || null,
          slug: post.slug,
        }));

        setBlogPosts(formattedPosts);
      } catch (err) {
        setError('Błąd podczas ładowania artykułów');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

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

      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 pt-24">
        <div className="container mx-auto px-4 py-8">
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

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">Ładowanie artykułów...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <p className="text-destructive mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Spróbuj ponownie
              </button>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!loading && !error && (
            <>
              {blogPosts.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                      <CardHeader className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {post.category_name || 'Artykuł'}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.read_time}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {post.excerpt || 'Brak opisu artykułu'}
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
                            {new Date(post.created_at).toLocaleDateString('pl-PL')}
                          </div>
                        </div>
                        <Button 
                          asChild 
                          variant="link" 
                          className="w-full text-left text-primary hover:text-primary/80 text-sm font-medium p-0 h-auto justify-start"
                        >
                          <Link to={`/o-nas/blog/${post.slug}`}>
                            Czytaj więcej →
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    Brak opublikowanych artykułów
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Wkrótce pojawią się tu nowe artykuły i poradniki
                  </p>
                </div>
              )}
            </>
          )}

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