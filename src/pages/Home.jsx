import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import JsonLd, { organizationSchema, websiteSchema, localBusinessSchema } from '../components/JsonLd';
// import ProductShowcase from '../components/ProductShowCase';
import WhyChooseUs from '../components/WhyChooseUs';
import WhyChooseUsNew from '../components/WhyChooseUsNew';
import HomeHero from "../components/HomeHero"
import Industries from '../components/Industries'
import Home_Service from "../components/Home_Service"
import Home_2 from "../components/Home_2"
// import ServicesSlider from '../components/Ser';
import MangTeam from "../components/MangTeam"
// import AnimatedGrid from '../components/AnimatedGrid';


const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Retail Craft Asia",
    "url": "https://retailcraftasia.com",
    "logo": "https://retailcraftasia.com/logo2.png",
    "description": "Leading retail consultancy providing comprehensive solutions including sales & merchandising, brand activation, market expansion, digital marketing, and data technology across Asia.",
    "sameAs": [
      "https://www.linkedin.com/company/retailcraftasia",
      "https://www.facebook.com/retailcraftasia",
      "https://www.instagram.com/retailcraftasia"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+65-1234-5678",
      "contactType": "customer service",
      "availableLanguage": ["English", "Chinese", "Malay"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SG",
      "addressRegion": "Singapore"
    },
    "founder": {
      "@type": "Person",
      "name": "Retail Craft Asia Founder"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "serviceArea": {
      "@type": "Place",
      "name": "Asia Pacific"
    }
  };
  return (
    <>
      <SEOHelmet
        title="Retail Craft Asia - Leading Retail Consultancy & Solutions Provider"
        description="Transform your retail business with Retail Craft Asia's comprehensive solutions. Expert services in sales & merchandising, brand activation, market expansion, digital marketing, and data technology across Asia."
        keywords="retail consultancy, sales merchandising, brand activation, market expansion, digital marketing, data technology, retail solutions Asia, retail transformation"
        url="https://retailcraftasia.com"
        structuredData={structuredData}
      />
      
      {/* Additional structured data for rich snippets */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={localBusinessSchema} />
      
      <div className='bg-gray-50'>
        <HomeHero />
        {/* <AnimatedGrid/> */}
        {/* <HomeHeroNew/> */}
        <Home_2/>
        <Home_Service/>
        
        <Industries />
        {/* <fmgh/> */}
       
       
       <WhyChooseUs/>
       {/* <WhyChooseUsNew/> */}
       <div className="">
          {/* services */}
       
       </div>
        {/* <ManagementTeam /> */}
        <MangTeam includeHelmet={false} />
        
        {/* <ProductShowcase></ProductShowcase> */}
        {/* <ServicesSlider></ServicesSlider> */}
      </div>
    </>
  );
}

export default Home;
