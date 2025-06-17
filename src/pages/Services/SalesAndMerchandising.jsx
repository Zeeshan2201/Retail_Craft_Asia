import React from 'react';
import SEOHelmet from '../../components/SEOHelmet';
import ServicesPage from './../../components/ServicesPages';

const SalesAndMerchandising = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sales and Merchandising Services",
    "provider": {
      "@type": "Organization", 
      "name": "Retail Craft Asia"
    },
    "serviceType": "Sales Consulting",
    "description": "Expert sales optimization and merchandising solutions to maximize retail performance and customer engagement.",
    "areaServed": "Asia Pacific",
    "url": "https://retailcraftasia.com/services/sales-merchandising"
  };

  return (
    <>
      <SEOHelmet
        title="Sales & Merchandising Services - Retail Craft Asia"
        description="Optimize your retail sales with our expert merchandising solutions. Strategic sales planning, product placement, inventory management, and performance analytics across Asia."
        keywords="sales merchandising, retail sales optimization, product merchandising, inventory management, retail performance, sales strategy"
        url="https://retailcraftasia.com/services/sales-merchandising"
        structuredData={structuredData}
      />
      
      <main>
        <ServicesPage/>
      </main>
    </>
  );
}

export default SalesAndMerchandising;
