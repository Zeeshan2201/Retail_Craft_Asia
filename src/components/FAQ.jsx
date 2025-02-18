import React from "react";


const FAQSection = () => {
  return (
    <div className="bg-[#deb030] py-16 px-8 flex justify-center items-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#fdf6e3]  bg-gradient-to-r from-transparent to-[#fdf6e3] opacity-50 shadow-xl shadow-xl" />
      <div className="max-w-5xl flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold text-gray-800">Frequently Asked Questions</h2>
        </div>
        <div className=" bg-[#deb030] md:w-1/2 flex justify-center mt-8 md:mt-0 ">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQHnEVbtKZHmQw/article-cover_image-shrink_720_1280/0/1701861450850?e=2147483647&v=beta&t=tRdfZ6hHB4gzDzn4cdOJ_YLJpQ0S2uLqcXVWUoStR64" 
            alt="Rib Rack Sugar-Free Marinades and Seasonings"
            className="max-w-md"
          />
        </div>
      </div>
   
    </div>
 
  );
};


export default FAQSection;



