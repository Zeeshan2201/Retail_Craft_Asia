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
      <ServiceHero/>
    <section className=" min-h-screen py-10  bg-gradient-to-tl from-white via-[#ffffff] from-[38%] to-[64%]  to-white">
    {/* <section className=" min-h-screen py-10  bg-gradient-to-tl from-white via-[#d4af37] from-[38%] to-[64%]  to-white"> */}
    {/* <section className="bg-[#1a237e] min-h-screen py-20 "> */}
    <div className="  mx-auto text-center ">
        {/* <h2 className="text-white  uppercase tracking-wider mb-4 text-6xl font-bold">
        Our Services
        </h2> */}
        <h2 className=" text-yellow-600  text-5xl md:text-6xl font-bold mb-6">
        Our Services
        </h2>
        <p className="text-black text-xl max-w-3xl mx-auto">
        We transform businesses with tailored, data-driven solutions in sales, marketing, and technology to drive growth, optimize operations, and enhance customer engagement.
        </p>
     <FeaturedProject/>

      </div>
    </section>
     <BrandingServices/>
    </>
  )
}

export default Services
