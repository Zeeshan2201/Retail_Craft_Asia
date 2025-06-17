import React from 'react';
import SEOHelmet from '../../components/SEOHelmet';
import SubServiceDigitalMarketing from './../../components/SubServiceDigitalMarketing';

const DigitalMarketing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Retail Craft Asia"
    },
    "serviceType": "Marketing Consulting",
    "description": "Comprehensive digital marketing solutions including SEO, social media marketing, content strategy, and online advertising for retail businesses.",
    "areaServed": "Asia Pacific",
    "url": "https://retailcraftasia.com/services/digital-marketing"
  };

  return (
    <>
      <SEOHelmet
        title="Digital Marketing Services - Retail Craft Asia"
        description="Boost your online presence with our comprehensive digital marketing services. SEO, social media marketing, content strategy, and digital advertising for retail success."
        keywords="digital marketing, SEO, social media marketing, content marketing, online advertising, digital strategy, retail marketing"
        url="https://retailcraftasia.com/services/digital-marketing"
        structuredData={structuredData}
      />
      
      <main>
        <SubServiceDigitalMarketing/>
      </main>
    </>
  );
}

export default DigitalMarketing;