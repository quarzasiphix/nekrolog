import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';

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

const BlogPreview = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

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
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) {
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
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="py-12 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-10 w-1/3 bg-card/50 rounded mx-auto"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                  <div className="h-4 w-1/4 bg-secondary rounded mb-4"></div>
                  <div className="h-6 w-3/4 bg-secondary rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-secondary/80 rounded"></div>
                    <div className="h-3 bg-secondary/80 rounded w-5/6"></div>
                    <div className="h-3 bg-secondary/80 rounded w-2/3"></div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <div className="h-3 w-16 bg-secondary/60 rounded"></div>
                    <div className="h-3 w-20 bg-secondary/60 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return null; // Don't show the section if there are no blog posts
  }

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Aktualności i porady</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sprawdź nasze najnowsze artykuły i poradniki dotyczące organizacji pogrzebów i nie tylko.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  {post.category_name && (
                    <Badge variant="secondary" className="text-xs">
                      {post.category_name}
                    </Badge>
                  )}
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.read_time}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {post.excerpt || 'Zapraszamy do przeczytania artykułu...'}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{new Date(post.created_at).toLocaleDateString('pl-PL')}</span>
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary hover:text-primary/90 transition-colors border border-primary/30 rounded-md hover:bg-primary/5"
                >
                  Czytaj więcej
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200"
          >
            Zobacz wszystkie artykuły
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
