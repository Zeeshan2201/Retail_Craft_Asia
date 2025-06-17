import { useEffect } from 'react';

const SEOHelmet = ({ 
  title = "Retail Craft Asia - Leading Retail Consultancy & Solutions",
  description = "Retail Craft Asia - Leading retail consultancy providing sales, merchandising, brand activation, market expansion, digital marketing, and data technology solutions across Asia.",
  keywords = "retail consultancy, sales merchandising, brand activation, market expansion, digital marketing, data technology, retail solutions Asia",
  image = "/logo2.png",
  url = "https://retailcraftasia.com",
  type = "website",
  structuredData = null
}) => {
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Helper function to update or create meta tags
    const updateMeta = (name, content, property = null) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    const updateLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    const fullUrl = `${url}${window.location.pathname}`;
    const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

    // Basic Meta Tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow');
    updateMeta('language', 'English');
    updateMeta('revisit-after', '7 days');
    
    // Canonical URL
    updateLink('canonical', fullUrl);

    // Open Graph Meta Tags
    updateMeta('', title, 'og:title');
    updateMeta('', description, 'og:description');
    updateMeta('', fullImageUrl, 'og:image');
    updateMeta('', fullUrl, 'og:url');
    updateMeta('', type, 'og:type');
    updateMeta('', 'Retail Craft Asia', 'og:site_name');
    updateMeta('', 'en_US', 'og:locale');

    // Twitter Card Meta Tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', fullImageUrl);
    updateMeta('twitter:site', '@retailcraftasia');

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Reset title when component unmounts
      document.title = "Retail Craft Asia";
    };
  }, [title, description, keywords, image, url, type, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHelmet;
