// import React from 'react'
// import Sales from '../components/Sales'
// import FeaturedProject from '../components/FeaturedProject'
// import Image from "next/image";

import SEOHelmet from '../components/SEOHelmet';
import BrandingServices from "../components/BrandingServices"
import FeaturedProject from "../components/FeaturedProject"
import ServiceHero from "../components/ServiceHero"

// import Link from "next/link";
const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retail Consultancy Services",
    "provider": {
      "@type": "Organization",
      "name": "Retail Craft Asia"
    },
    "serviceType": "Business Consulting",
    "description": "Comprehensive retail consultancy services including sales & merchandising, brand activation, market expansion, digital marketing, and data technology solutions.",
    "areaServed": "Asia Pacific",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Retail Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sales & Merchandising",
            "description": "Strategic sales optimization and merchandising solutions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Activation",
            "description": "Comprehensive brand activation and marketing campaigns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Market Expansion",
            "description": "Strategic market entry and expansion consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Digital marketing strategies and implementation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data & Technology",
            "description": "Data analytics and technology solutions for retail"
          }
        }
      ]
    }
  };
  
  return (
    <>
      <SEOHelmet
        title="Our Services - Retail Craft Asia | Comprehensive Retail Solutions" 
        description="Transform your retail business with our tailored solutions. Expert services in sales & merchandising, brand activation, market expansion, digital marketing, and data technology across Asia."
        keywords="retail services, sales merchandising, brand activation, market expansion, digital marketing, data technology, retail consulting services, retail transformation"
        url="https://retailcraftasia.com/services"
        structuredData={structuredData}
      />
      
      <ServiceHero/>
    <section className=" min-h-screen py-10  bg-gray-50">
    {/* <section className=" min-h-screen py-10  bg-gradient-to-tl from-white via-[#d4af37] from-[38%] to-[64%]  to-white"> */}
    {/* <section className="bg-[#1a237e] min-h-screen py-20 "> */}
    <div className="  mx-auto text-center ">
        {/* <h2 className="text-white  uppercase tracking-wider mb-4 text-6xl font-semibold">
        Our Services
        </h2> */}
        <h2 className=" text-yellow-600  text-5xl md:text-6xl font-semibold mb-6">
        Our Services
        </h2>
        <p className="text-black text-xl max-w-3xl mx-auto">
        We transform businesses with tailored, data-driven solutions in sales, marketing, and technology to drive growth, optimize operations, and enhance customer engagement.        </p>
     <FeaturedProject/>

      </div>
    </section>
     <BrandingServices/>
    </>
  )
}

export default Services
