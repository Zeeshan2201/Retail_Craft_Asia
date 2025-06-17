import React from 'react';
import SEOHelmet from '../../components/SEOHelmet';
import SubServiceDataAndTechnology from './../../components/SubServiceDataAndTechnology';

const DataAndTechnology = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data & Technology Services",
    "provider": {
      "@type": "Organization",
      "name": "Retail Craft Asia"
    },
    "serviceType": "Technology Consulting",
    "description": "Advanced data analytics and technology solutions for retail optimization, business intelligence, and digital transformation.",
    "areaServed": "Asia Pacific",
    "url": "https://retailcraftasia.com/services/data-technology"
  };

  return (
    <>
      <SEOHelmet
        title="Data & Technology Services - Retail Craft Asia"
        description="Transform your retail business with advanced data analytics and technology solutions. Business intelligence, digital transformation, and data-driven insights for retail success."
        keywords="data analytics, retail technology, business intelligence, digital transformation, data science, retail tech solutions"
        url="https://retailcraftasia.com/services/data-technology"
        structuredData={structuredData}
      />
      
      <main>
        <SubServiceDataAndTechnology/>
      </main>
    </>
  );
}

export default DataAndTechnology;
