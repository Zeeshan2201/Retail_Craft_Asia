import React from "react";


const FAQSection = () => {
  return (
    <div className=" bg-gradient-to-br from-purple-900 via-purple-900 via-[40%]  to-[#d4af37] py-16 px-8 flex justify-center items-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent opacity-50 shadow-xl" />
      <div className="max-w-5xl flex flex-col md:flex-row items-center relative z-10 mt-20">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="md:text-6xl text-4xl font-bold  text-white">Frequently Asked Questions</h2>
        </div>
        <div className=" md:w-1/2 flex justify-center mt-8 md:mt-0 ">
          <img
            src="/FAQ/IMG1.png" 
            alt="Rib Rack Sugar-Free Marinades and Seasonings"
            className="sm:max-w-md opacity-50"
          />
        </div>
      </div>
   
    </div>
 
  );
};


export default FAQSection;



