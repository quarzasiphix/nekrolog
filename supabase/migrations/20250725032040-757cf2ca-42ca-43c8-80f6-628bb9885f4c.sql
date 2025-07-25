-- Create categories table for blog organization
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blogs table
CREATE TABLE public.blogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Dom Pogrzebowy Łódź',
  category_id UUID REFERENCES public.blog_categories(id),
  read_time TEXT DEFAULT '5 min',
  published BOOLEAN NOT NULL DEFAULT false,
  meta_description TEXT,
  meta_keywords TEXT,
  featured_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is for SEO)
CREATE POLICY "Categories are publicly readable" 
ON public.blog_categories 
FOR SELECT 
USING (true);

CREATE POLICY "Published blogs are publicly readable" 
ON public.blogs 
FOR SELECT 
USING (published = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_blog_categories_updated_at
  BEFORE UPDATE ON public.blog_categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some default categories
INSERT INTO public.blog_categories (name, slug, description) VALUES
  ('Poradniki', 'poradniki', 'Praktyczne porady dotyczące organizacji pogrzebów'),
  ('Tradycje', 'tradycje', 'Polskie tradycje i zwyczaje pogrzebowe'),
  ('Formalności', 'formalnosci', 'Dokumenty i procedury prawne'),
  ('Wsparcie', 'wsparcie', 'Wsparcie psychologiczne w trudnych chwilach');