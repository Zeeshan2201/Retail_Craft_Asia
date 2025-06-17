import React from 'react';

const JsonLd = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Common structured data templates
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Retail Craft Asia",
  "url": "https://retailcraftasia.com",
  "logo": "https://retailcraftasia.com/logo2.png",
  "description": "Leading retail consultancy providing comprehensive solutions including sales & merchandising, brand activation, market expansion, digital marketing, and data technology across Asia.",
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SG",
    "addressRegion": "Singapore"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+65-1234-5678",
    "contactType": "customer service",
    "availableLanguage": ["English", "Chinese", "Malay"],
    "areaServed": "Asia Pacific"
  },
  "sameAs": [
    "https://www.linkedin.com/company/retailcraftasia",
    "https://www.facebook.com/retailcraftasia",
    "https://www.instagram.com/retailcraftasia"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Asia Pacific"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Retail Craft Asia",
  "url": "https://retailcraftasia.com",
  "description": "Leading retail consultancy and solutions provider in Asia",
  "publisher": {
    "@type": "Organization",
    "name": "Retail Craft Asia"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://retailcraftasia.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Retail Craft Asia",
  "image": "https://retailcraftasia.com/logo2.png",
  "description": "Professional retail consultancy services across Asia Pacific region",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SG",
    "addressRegion": "Singapore"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "1.3521",
    "longitude": "103.8198"
  },
  "url": "https://retailcraftasia.com",
  "telephone": "+65-1234-5678",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export default JsonLd;
