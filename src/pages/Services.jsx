// import React from 'react'
// import Sales from '../components/Sales'
// import FeaturedProject from '../components/FeaturedProject'
// import Image from "next/image";

import BrandingServices from "../components/BrandingServices"
import FeaturedProject from "../components/FeaturedProject"
import HorizontalScroll from "../components/HorizontalScroll"
import ServiceHero from "../components/ServiceHero"

// import Link from "next/link";
const Services = () => {
  return (<>
    <section className="bg-[#1a237e] min-h-screen py-20 px-4">
      <ServiceHero/>
    <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-white/80 uppercase tracking-wider mb-4 text-lg font-medium">
          OUR WORK
        </h2>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
          Featured Projects
        </h1>
        <p className="text-white/90 text-xl max-w-3xl mx-auto">
          See our branding and design teams in action with recent projects in our portfolio below.
        </p>
      </div>
     <FeaturedProject/>
     <BrandingServices/>
     <div className="h-[80vh">
     <HorizontalScroll/>
     </div>
    </section>
    </>
  )
}

export default Services
