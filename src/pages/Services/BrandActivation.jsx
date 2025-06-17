import React from 'react';
import SEOHelmet from '../../components/SEOHelmet';
import SubServiceBrandActivation from './../../components/SubServiceBrandActivation';

const BrandActivation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brand Activation Services",
    "provider": {
      "@type": "Organization",
      "name": "Retail Craft Asia"
    },
    "serviceType": "Marketing Consulting",
    "description": "Comprehensive brand activation and experiential marketing campaigns to enhance brand visibility and customer engagement.",
    "areaServed": "Asia Pacific",
    "url": "https://retailcraftasia.com/services/brand-activation"
  };

  return (
    <>
      <SEOHelmet
        title="Brand Activation Services - Retail Craft Asia"
        description="Elevate your brand with our comprehensive activation campaigns. Expert experiential marketing, brand launches, promotional events, and customer engagement strategies across Asia."
        keywords="brand activation, experiential marketing, brand campaigns, promotional events, brand launches, customer engagement"
        url="https://retailcraftasia.com/services/brand-activation"
        structuredData={structuredData}
      />
      
      <main>
        <SubServiceBrandActivation/>
      </main>
    </>
  );
}

export default BrandActivation;