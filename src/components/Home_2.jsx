import React from "react";
import Home_1 from "../assets/Home_Hero/Home_1.png"
import Home_2 from "../assets/Home_Hero/Home_2.png";
import Home_3 from "../assets/Home_Hero/Home_3.png";
import Home_4 from "../assets/Home_Hero/Home_4.png"
import { FaIndustry } from "react-icons/fa";

const IndustrySection = () => {
  return (
    <section className="relative flex items-center justify-between px-10 py-20 bg-gray-50 overflow-hidden">
      {/* Left Content */}
      <div className="max-w-2xl">
        {/* <h3 className="text-4xl font-semibold text-yellow-600">INDUSTRY SOLUTIONS</h3> */}
        <h2 className="text-5xl font-bold text-gray-900 mt-2">
          Tailored Solutions for <span className="text-yellow-700">Retail & FMCG</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          We provide expert consulting services to help businesses optimize operations, enhance customer experience, and drive growth in the competitive retail industry.
        </p>
      </div>
      
      {/* Right Content - Circular Images */}
      <div className="relative w-1/2 flex justify-end">
        <div className="absolute top-5 left-10 bg-white p-4 rounded-full shadow-xl">
          <FaIndustry className="text-4xl text-yellow-700" />
        </div>
        <div className="relative flex gap-6">
          <img src={Home_1} alt="Industry Expert" className="w-36 h-36 rounded-full shadow-lg border-4 border-white mb-12" />
          <img src={Home_2} alt="Retail Professional" className="w-36 h-36 rounded-full shadow-lg border-4 border-white mb-14" />
        </div>
        <div className="absolute -bottom-5 right-10 flex gap-6">
          <img src={Home_3} alt="FMCG Specialist" className="w-32 h-32 rounded-full shadow-lg border-4 border-white mt-12" />
          <img src={Home_4} alt="Market Analyst" className="w-32 h-32 rounded-full shadow-lg border-4 border-white mt-16" />
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
