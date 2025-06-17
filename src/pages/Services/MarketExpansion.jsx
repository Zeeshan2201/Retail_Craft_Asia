import React from 'react';
import SEOHelmet from '../../components/SEOHelmet';
import SubServiceMarketExpansion from './../../components/SubServiceMarketExpansion';

const MarketExpansion = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Market Expansion Services",
    "provider": {
      "@type": "Organization",
      "name": "Retail Craft Asia"
    },
    "serviceType": "Business Consulting",
    "description": "Strategic market expansion and entry consulting services to help businesses grow across Asia Pacific markets.",
    "areaServed": "Asia Pacific",
    "url": "https://retailcraftasia.com/services/market-expansion"
  };

  return (
    <>
      <SEOHelmet
        title="Market Expansion Services - Retail Craft Asia"
        description="Expand your business across Asia Pacific with our expert market expansion services. Strategic market entry, competitive analysis, and growth planning for retail success."
        keywords="market expansion, market entry, business expansion, Asia Pacific markets, retail expansion, international growth"
        url="https://retailcraftasia.com/services/market-expansion"
        structuredData={structuredData}
      />
      
      <main>
        <SubServiceMarketExpansion/>
      </main>
    </>
  );
}

export default MarketExpansion;
