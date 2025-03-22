import React from "react";
import HeroSection from "./HomeHero";

const AnimatedGrid = () => {
  const sections = [
    { id: 1, title: "FMCG", image: "https://tse2.mm.bing.net/th?id=OIP.cIAUB-TOMCuyf7B5emX-_AHaE8&pid=Api&P=0&h=220" },
    { id: 2, title: "Retail", image: "https://tse1.mm.bing.net/th?id=OIP.K0Nm8yswpOaJflx56dfrWAHaE8&pid=Api&P=0&h=220" },
    { id: 3, title: "Health & Beauty", image: "https://tse1.mm.bing.net/th?id=OIP.WZlFPb_9kD2a6wivqB05OQHaEK&pid=Api&P=0&h=220" },
    { id: 4, title: "Consumer Durables & Electronics", image: "https://tse4.mm.bing.net/th?id=OIP.6AwfvMS9Z_ujYPRtHs1fYgHaFb&pid=Api&P=0&h=220" },
    { id: 5, title: "Hospitality Sector", image: "https://tse2.mm.bing.net/th?id=OIP.NymFEPWH95Laal6_16GTjQHaE7&pid=Api&P=0&h=220" },
    { id: 6, title: "Pharmaceuticals", image: "https://tse1.mm.bing.net/th?id=OIP.C_QkMckJouOvRla0_Gj_oAHaFW&pid=Api&P=0&h=220" },
  ];

  return (
    <div className="min-h-screen mt-20 relative bg-gray-100 ">
    {/* <div className="min-h-screen mt-20 relative bg-gray-100 p-8"> */}
      {/* Grid Container */}
      <HeroSection/>
      <div className="grid relative grid-cols-1 bg-black opacity-50 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative group  overflow-hidden rounded-lg  transition-shadow duration-300"
          >
            <div className="relative w-full h-full">
              {/* Image */}
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 rotate-0 transition-all duration-1000 ease-in-out"
              />

              {/* Black Overlay (Ensures Text Visibility) */}
              <div className="absolute inset-0 bg-black/85 group-hover:opacity-70 transition-opacity duration-700"></div>

              {/* Title (Always Visible) */}
              {/* <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-all duration-300">
                {section.title}
              </h2> */}
            </div>
            {/* Image */}
            
            {/* <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 rotate-0 transition-all duration-1000 ease-in-out"
            /> */}
            {/* <img
              src={section.image}
              alt={section.title}
              // className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 rotate-0 group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out group-hover:rotate-[330deg]"
              className="w-full  h-full object-cover opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 rotate-0 transition-all duration-1000 ease-in-out "
            /> */}
           
            {/* Title */}
            {/* <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 group-hover:bg-opacity-20 transition-all duration-300">
              {section.title}
            </h2> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedGrid;