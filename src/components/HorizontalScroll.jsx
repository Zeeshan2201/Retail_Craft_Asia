"use client";

import React, { useState, useEffect, useRef } from "react";

import Tech from '../../src/animation/service/tech.json'
import Marketing from '../../src/animation/service/marketing.json'

import Sales from "../animation/MarketExpansion/sales.json"
import Lottie from "react-lottie";
// import Image from "next/image"

const HorizontalScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const containerTopRef = useRef(null);
  const containerBottomRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && containerTopRef.current && containerBottomRef.current) {
        const containerTop = containerTopRef.current.getBoundingClientRect().top;
        const containerBottom = containerBottomRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Ensure scroll is within bounds
        if (containerTop < windowHeight && containerBottom > 0) {
          const scrollStart = containerTopRef.current.offsetTop;
          const scrollEnd = containerBottomRef.current.offsetTop - window.innerHeight;
          const scrollY = Math.min(Math.max(window.scrollY, scrollStart), scrollEnd);
          const scrollPercentage = (scrollY - scrollStart) / (scrollEnd - scrollStart);
          const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
          
          setScrollPosition(scrollPercentage * maxScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={containerTopRef} className="  h-[10vh]"></div>
      <h2 className="text-6xl font-bold text-center">Our Services</h2>
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          <Section  color=" bg-white flex flex-col w-[75dvw]     ">
            <div className='ml-20 flex flex-row  border-l-4 border-[#ffd700] rounded-xl h-[75%] bg-purple-900 py-4 px-8  items-center  justify-center' >
                <div className="w-[64%]  ">
                  <div className="text-4xl font-bold ">Sales and Merchandising</div>
                  <p className="my-4 text-2xl">Our expertise ensures that your products reach the right customers at the right time, maximizing your market potential.<br></br></p>
                  <div className="">
                  <p className="mt-2 text-base text-gray-300"><span className="text-white text-xl">1. Field Sales</span></p>
                  <p className="mt-2 text-base text-gray-300"><span className=" text-white text-xl">2. Merchandising</span></p>
                  <p className="mt-2 text-base text-gray-300"><span className=" text-white text-xl">3. Retail Audit</span> </p>
                  <p className="mt-2 text-base text-gray-300"><span className=" text-white text-xl">4. Point of Sales Execution</span> </p>
                  <p className="mt-2 text-base text-gray-300"><span className=" text-white text-xl">5. Asset Optimization</span></p>
                  <p className="mt-2 text-base text-gray-300"><span className=" text-white text-xl">6. Product Management</span></p>
                 
                  <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="/services/SalesAndMerchandising" 
                  className="inline-flex text-base items-center px-3  py-2 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-3 text-base py-2 border-2 border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
              </div>
              </div>
            </div>
            <div className="w-[80%] ">
              {/* <img src="/example.jpg" 
        alt="Example Image" 
        width={500} 
        height={300} /> */}
        <Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: Sales,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  height={400}
  width={400}
/>
            </div>
            </div>
          </Section>

          <Section color="bg-white flex flex-col w-[75dvw] ">
          <div className=' flex flex-row border-l-4 border-[#ffd700]  h-[75%] px-8 py-4 rounded-xl bg-purple-900 items-center  justify-center' >
          <div className="w-[70%]">
            <div className="text-4xl font-bold">Brand Activation and Experimental Marketing</div>
            <p className="text-2xl my-4">At Retail Craft Asia, we create impactful brand experiences that engage, inspire, and drive consumer action.</p>
            <div className="">
            <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-white">1. Brand Ambassadors & Programs</span></p>
            <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-white">2. Events & Roadshows</span></p>
            <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-white">3. Sampling</span></p>
            <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-white">4. Shopper Marketing</span></p>
            <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-white">5. In-Store Activation</span></p>
            <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="/services/BrandActivation" 
                  className="inline-flex text-base items-center px-3  py-2 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-3 text-base py-2 border-2 border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            </div>
            <div className="w-[80%] ">
              <img src="/example.jpg" 
        alt="Example Image" 
        width={500} 
        height={300} />
            </div>
            </div>
          </Section>

          <Section color="bg-white flex flex-col w-[75dvw] ">
          <div className=' flex flex-row border-l-4 border-[#ffd700] h-[75%] rounded-xl py-4 px-8 bg-purple-900 items-center  justify-center' >
          <div className="w-[64%]">
            <div className="text-4xl font-bold">Market Expansion Services</div>
            <p className="text-2xl my-4">At Retail Craft Asia, we help businesses expand into new markets with end-to-end solutions</p>
            <div className="">
              <p className="text-base text-gray-300 mt-2"><span className="text-white text-xl">1. Product Sourcing</span></p>
              <p className="text-base text-gray-300 mt-2"><span className="text-white text-xl">2. Market Research & Insights</span></p>
              <p className="text-base text-gray-300 mt-2"><span className="text-white text-xl">3. Sales & Marketing</span></p>
              <p className="text-base text-gray-300 mt-2"><span className="text-white text-xl">4. Distribution & Logistics</span></p>
              <p className="text-base text-gray-300 mt-2"><span className="text-white text-xl">5. After-Sales Services</span></p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="/services/MarketExpansion" 
                  className="inline-flex text-base items-center px-3 py-2 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex  text-base  items-center px-3 py-2 border-2 border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
              </div>
              </div>
            </div>
            <div className="w-[80%] ">
              <img src="/example.jpg" 
        alt="Example Image" 
        width={500} 
        height={300} />
            </div>
            </div>
          </Section>
          <Section color="bg-white flex flex-col w-[75dvw] ">
          <div className=' flex flex-row border-l-4 border-[#ffd700] rounded-xl h-[75%] py-4 px-8 bg-purple-900 items-center  justify-center' >
          <div className="w-[64%]">
            <div className="text-4xl font-bold">Data and Technology</div>
            <p className="text-2xl my-4">At Retail Craft Asia,we harness the power of data and technology to drive smarter business decisions</p>
            <div className="">
              <p className="text-base text-gray-300 mt-2"><span className=" text-white text-xl"> 1. Data & Operations Intelligence</span></p>
              <p className="text-base text-gray-300 mt-2"><span className=" text-white text-xl"> 2. Sales Force Automation Tools</span></p>
              <p className="text-base text-gray-300 mt-2"><span className=" text-white text-xl"> 3. Learning & Development Modules</span></p>
              <p className="text-base text-gray-300 mt-2"><span className=" text-white text-xl"> 4. CRM Solutions-</span></p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="/services/DataAndTechnology" 
                  className="inline-flex items-center text-base px-3 py-2 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center text-base px-3 py-2 border-2 border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
              </div>
              </div>
            </div>
            <div className="w-[80%] ">
              <img src="/example.jpg" 
        alt="Example Image" 
        width={500} 
        height={300} />
            </div>
            </div>
          </Section>
          <Section color="bg-white  flex flex-col w-[75dvw] ">
          <div className=' flex mr-20 flex-row border-l-4 border-[#ffd700] h-[75%]  rounded-xl py-4 px-8 bg-purple-900 items-center  justify-center' >
          <div className="w-[64%]">
            <div className="text-4xl font-bold">Digital Marketing</div>
            <p className="text-2xl my-4">we create impactful digital marketing strategies that drive brand awareness, engagement, and conversions</p>
            <div className="my-2">
              <p className="text-base text-gray-300 mt-2"><span className="text-white text-xl">1. Content Marketing </span></p>
              <p className="text-base text-gray-300 mt-2"><span className="text-white text-xl">2. Social Media Marketing</span></p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="/services/DigitalMarketing" 
                  className="inline-flex items-center px-3  text-base bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-3 py-2 border-2 text-base border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
              </div></div>

            </div>
            <div className="w-[80%] ">
              <img src="/example.jpg" 
        alt="Example Image" 
        width={500} 
        height={300} />
            </div>
            </div>
          </Section>
        
        </div>
      </div>
      <div ref={containerBottomRef} className="h-[10vh]"></div>
    </>
  );
};

const Section = ({ children, color }) => (
  <div className={`flex-shrink-0 w-screen h-screen ${color} flex items-center justify-center text-white text-4xl font-bold`}>
    {children}
  </div>
);

export default HorizontalScroll;


// "use client"

// import React, { useState, useEffect, useRef } from "react";

// const HorizontalScroll = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
//         const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
//         setScrollPosition(scrollPercentage * maxScroll);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//     <div className="min-h-[100vh] ">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <div
//           ref={containerRef}
//           className="flex transition-transform duration-300 ease-out"
//           style={{ transform: `translateX(-${scrollPosition}px)` }}
//         >
//           <Section color="bg-red-500">Section 1</Section>
//           <Section color="bg-blue-500">Section 2</Section>
//           <Section color="bg-green-500">Section 3</Section>
//           <Section color="bg-yellow-500">Section 4</Section>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// const Section = ({ children, color }) => (
//   <div className={`flex-shrink-0 w-screen h-screen ${color} flex items-center justify-center text-white text-4xl font-bold`}>
//     {children}
//   </div>
// );

// export default HorizontalScroll;
