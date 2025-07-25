import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  // Skip breadcrumb on homepage
  if (pathnames.length === 0) {
    return null;
  }

  // Don't show breadcrumb on blog post pages
  if (pathnames[0] === 'blog' && pathnames.length > 1) {
    return null;
  }

  const breadcrumbNameMap: Record<string, string> = {
    'uslugi-pogrzebowe-lodz': 'Usługi Pogrzebowe',
    'uslugi': 'Usługi',
    'asortyment': 'Asortyment',
    'odziez-lodz': 'Odzież',
    'trumny-lodz': 'Trumny',
    'urny-lodz': 'Urny',
    'wiazanki-lodz': 'Wiązanki',
    'wience-lodz': 'Wieńce',
    'blog': 'Blog',
    'o-nas': 'O nas',
    'kontakt': 'Kontakt'
  };

  // Function to format path for display
  const formatBreadcrumb = (path: string) => {
    // Remove any trailing -lodz
    const cleanPath = path.replace(/-lodz$/, '');
    // Check if we have a custom name for this path
    return breadcrumbNameMap[path] || 
           cleanPath.split('-').map(word => 
             word.charAt(0).toUpperCase() + word.slice(1)
           ).join(' ');
  };

  return (
    <nav className="container mx-auto px-4 py-4 text-sm" aria-label="Nawigacja okruszkowa">
      <ol className="flex flex-wrap items-center text-muted-foreground">
        <li className="flex items-center">
          <Link to="/" className="text-primary hover:underline">Strona główna</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          
          // Skip numeric IDs in the path (like blog post IDs)
          if (!isNaN(Number(value))) {
            return null;
          }

          return (
            <li key={to} className="flex items-center">
              {last ? (
                <span className="text-foreground">
                  {formatBreadcrumb(value)}
                </span>
              ) : (
                <>
                  <Link to={to} className="text-primary hover:underline">
                    {formatBreadcrumb(value)}
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
