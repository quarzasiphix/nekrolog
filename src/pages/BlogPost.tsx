import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { normalizeForUrl } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  author: string;
  created_at: string;
  read_time: string | null;
  category_name: string | null;
  slug?: string;  // Made optional with ?
  featured_image_url: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('blogs')
          .select(`
            *,
            blog_categories(name)
          `)
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (error || !data) {
          setError('Artykuł nie został znaleziony');
          console.error('Error fetching blog post:', error);
          return;
        }

        const formattedPost: BlogPost = {
          id: data.id,
          title: data.title,
          content: data.content,
          excerpt: data.excerpt,
          author: data.author,
          created_at: data.created_at,
          read_time: data.read_time || '5 min',
          category_name: data.blog_categories?.name || null,
          featured_image_url: data.featured_image_url,
          meta_description: data.meta_description,
          meta_keywords: data.meta_keywords,
        };

        setPost(formattedPost);
      } catch (err) {
        setError('Wystąpił błąd podczas ładowania artykułu');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do bloga
          </Button>
          
          <div className="space-y-6">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <div className="flex space-x-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-64 w-full" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do bloga
          </Button>
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {error || 'Artykuł nie został znaleziony'}
          </h1>
          <p className="text-muted-foreground mb-6">
            Przepraszamy, nie udało się załadować żądanego artykułu.
          </p>
          <Button onClick={() => navigate('/o-nas/blog')}>
            Przejdź do listy artykułów
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | Blog - Dom Pogrzebowy Łódź`}</title>
        <meta 
          name="description" 
          content={post.meta_description || post.excerpt || 'Artykuł na blogu Domu Pogrzebowego w Łodzi'} 
        />
        <meta 
          name="keywords" 
          content={post.meta_keywords || 'blog pogrzebowy, poradniki pogrzebowe, tradycje pogrzebowe, formalności pogrzebowe, Łódź'} 
        />
        <link rel="canonical" href={`https://dompogrzebowy-lodz.pl/o-nas/blog/${normalizeForUrl(post.slug)}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 pt-24">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8 text-center sm:text-left">
            <Button 
              variant="default" 
              onClick={() => navigate('/blog')}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wróć do listy artykułów
            </Button>
          </div>

          <article className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
            {post.featured_image_url && (
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={post.featured_image_url} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.created_at).toLocaleDateString('pl-PL')}
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.read_time}
                  </div>
                </div>
                {post.category_name && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {post.category_name}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-lg text-muted-foreground mb-8">
                  {post.excerpt}
                </p>
              )}

              <div 
                className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-foreground 
                  [&_a]:text-primary [&_a:hover]:text-primary/80 [&_a]:font-medium [&_a]:transition-colors
                  [&_ul]:list-disc [&_ol]:list-decimal [&_ul], [&_ol]:pl-6 
                  [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-6 
                  [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-foreground [&_h1]:mt-10 [&_h1]:mb-6
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 
                  [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3
                  [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-foreground [&_h4]:mt-5 [&_h4]:mb-2
                  [&_p]:text-foreground/90 [&_p]:mb-4 [&_p:last-child]:mb-0
                  [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:py-1 [&_blockquote]:my-4 [&_blockquote]:text-foreground/80
                  [&_table]:w-full [&_table]:border [&_table]:border-border [&_th]:bg-secondary/50 [&_th]:p-3 [&_th]:text-left [&_th]:text-foreground [&_td]:p-3 [&_td]:border [&_td]:border-border [&_td]:text-foreground/90
                  [&_code]:bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-foreground/90
                  [&_pre]:bg-secondary [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-4"
                dangerouslySetInnerHTML={{ 
                  __html: post.content 
                    .replace(/<a(?!\s+target=)/g, '<a target="_blank" rel="noopener noreferrer"')
                    .replace(/<img/g, '<img class="w-full h-auto" loading="lazy"')
                }} 
              />
            </div>
          </article>


        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
