import React from "react";


const FAQSection = () => {
  return (
    <div className="bg-[#FDF6E3] py-16 px-8 flex justify-center items-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#fdf6e3]  bg-gradient-to-r from-transparent to-[#fdf6e3] opacity-50 shadow-xl shadow-xl" />
      <div className="max-w-5xl flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold text-gray-800">Frequently Asked Questions</h2>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
          <img
            src="https://img.freepik.com/free-vector/autumn-background-with-yellow-autumn-maple-leaves_87521-3085.jpg" 
            alt="Rib Rack Sugar-Free Marinades and Seasonings"
            className="max-w-md"
          />
        </div>
      </div>
   
    </div>
 
  );
};


export default FAQSection;



