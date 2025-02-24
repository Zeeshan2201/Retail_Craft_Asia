// import React from 'react'
// import Sales from '../components/Sales'
// import FeaturedProject from '../components/FeaturedProject'
// import Image from "next/image";

import BrandingServices from "../components/BrandingServices"
import FeaturedProject from "../components/FeaturedProject"
import ServiceHero from "../components/ServiceHero"

// import Link from "next/link";
const Services = () => {
  return (<>
    <section className="bg-[#1a237e] min-h-screen py-20 ">
      <ServiceHero/>
    <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-white/80 uppercase tracking-wider mb-4 text-lg font-medium">
        Our Work / Our Services
        </h2>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
        Driving Business Growth with Innovative Solutions
        </h1>
        <p className="text-white/90 text-xl max-w-3xl mx-auto">
        We transform businesses with tailored, data-driven solutions in sales, marketing, and technology to drive growth, optimize operations, and enhance customer engagement.
        </p>
      </div>
     <FeaturedProject/>
     <BrandingServices/>
    
    </section>
    </>
  )
}

export default Services
