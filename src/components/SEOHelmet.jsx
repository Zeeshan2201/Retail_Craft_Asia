import { Helmet } from 'react-helmet';

const SEOHelmet = ({ 
  title = "Retail Craft Asia - Leading Retail Consultancy & Solutions",
  description = "Retail Craft Asia - Leading retail consultancy providing sales, merchandising, brand activation, market expansion, digital marketing, and data technology solutions across Asia.",
  keywords = "retail consultancy, sales merchandising, brand activation, market expansion, digital marketing, data technology, retail solutions Asia",
  image = "/logo2.png",
  url = "https://retailcraftasia.com",
  type = "website",
  structuredData = null
}) => {
  const fullUrl = `${url}${window.location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Retail Craft Asia" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="AS" />
      <meta name="geo.country" content="IN" />
      <meta name="classification" content="business" />
      <meta name="category" content="retail consultancy" />
      <meta name="coverage" content="worldwide" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="target" content="all" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Retail Craft Asia" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@retailcraftasia" />
      <meta name="twitter:creator" content="@retailcraftasia" />
      <meta name="twitter:domain" content="retailcraftasia.com" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;
