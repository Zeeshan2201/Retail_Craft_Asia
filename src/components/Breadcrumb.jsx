import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    '': 'Home',
    'about': 'About Us',
    'services': 'Services',
    'contact': 'Contact',
    'team': 'Team',
    'career': 'Career',
    'sales-merchandising': 'Sales & Merchandising',
    'brand-activation': 'Brand Activation',
    'market-expansion': 'Market Expansion',
    'data-technology': 'Data & Technology',
    'digital-marketing': 'Digital Marketing'
  };

  const generateBreadcrumbStructuredData = () => {
    const breadcrumbList = pathnames.map((pathname, index) => {
      const url = `/${pathnames.slice(0, index + 1).join('/')}`;
      return {
        "@type": "ListItem",
        "position": index + 2, // +2 because home is position 1
        "name": breadcrumbNameMap[pathname] || pathname.replace('-', ' '),
        "item": `https://retailcraftasia.com${url}`
      };
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://retailcraftasia.com"
        },
        ...breadcrumbList
      ]
    };
  };

  if (pathnames.length === 0) return null;

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(generateBreadcrumbStructuredData())}
      </script>
      
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-4 border-b">
        <div className="container mx-auto max-w-7xl">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                to="/" 
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Navigate to homepage"
              >
                <Home size={16} className="mr-1" />
                Home
              </Link>
            </li>
            
            {pathnames.map((pathname, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const displayName = breadcrumbNameMap[pathname] || pathname.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
              
              return (
                <li key={pathname} className="flex items-center">
                  <ChevronRight size={16} className="text-gray-400 mx-2" />
                  {isLast ? (
                    <span className="text-gray-900 font-medium" aria-current="page">
                      {displayName}
                    </span>
                  ) : (
                    <Link 
                      to={routeTo}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {displayName}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;
