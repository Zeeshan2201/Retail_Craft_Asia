

"use client";

import React, { useState, useEffect, useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Tech from '../../src/animation/service/Tech/animations/a473d880-55e7-45db-930c-320a743b2afe.json';
// import Tech from '../../src/animation/service/tech.json';
import Marketing from '../../src/animation/service/marketing.json';
import { Link } from 'react-router-dom';
import Sales from "../animation/MarketExpansion/sales.json";
import Lottie from "react-lottie";

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
          const sectionCount = containerRef.current.children.length;
          const sectionWidth = maxScroll / (sectionCount - 1);

          // Snap to the nearest section
          const nearestSection = Math.round(scrollPercentage * (sectionCount - 1));
          const newScrollPosition = nearestSection * sectionWidth;

          setScrollPosition(newScrollPosition);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={containerTopRef} className=" md:h-[10vh] h-[5vh] "></div>
      {/* <h2 className="md:text-6xl text-4xl font-semibold text-center ">Our Services</h2> */}
      <div 
    //   style={{
    //   background: "linear-gradient(to bottom, white 0%, #581c87 10%, #581c87 90%, white 100%)"
    // }} 
    className="  relative h-[100vh]  overflow-hidden  bg-gray-200 ">
      <h2 className="md:text-6xl absolute md:left-[38%] left-[25%] text-black z-10 top-[7%] text-4xl font-semibold text-center ">Our Services</h2>
      
      {/* <div className="sticky top-0 h-[100vh] overflow-hidden bg-black"> */}
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-out "
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
           <Section color=" flex flex-col md:w-[95dvw] w-[100dvw]">
          <div className='md:ml-20 ml-2 flex md:flex-row flex-col border-[#ffd700] rounded-xl md:h-[75%] h-[90%]  py-4 px-8 items-center justify-center'>
          <div className="md:w-[64%] w-[100%]">
                <div className="text-4xl font-semibold">Market Expansion Services</div>
                <p className="my-4 text-2xl">At Retail Craft Asia, we help businesses expand into new markets with end-to-end solutions.<br></br></p>
                <div>
                  <p className="text-base text-gray-300 mt-2"><span className="text-black text-xl">1. Product Sourcing</span></p>
                  <p className="text-base text-gray-300 mt-2"><span className="text-black text-xl">2. Market Research & Insights</span></p>
                  <p className="text-base text-gray-300 mt-2"><span className="text-black text-xl">3. Sales & Marketing</span></p>
                  <p className="text-base text-gray-300 mt-2"><span className="text-black text-xl">4. Distribution & Logistics</span></p>
                  <p className="text-base text-gray-300 mt-2"><span className="text-black text-xl">5. After-Sales Services</span></p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/services/MarketExpansion" className="inline-flex text-base items-center px-3 py-2 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                      Get Started
                      <span className="ml-2">→</span>
                    </Link>
                    <Link to="/contact" className="inline-flex items-center px-3 text-base py-2 border-2 border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-black transition-colors">
                      Request a Free Consultation
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[100%] md:block hidden">
                {/* <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: Marketing,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                  height={400}
                  width={400}
                /> */}
                 <DotLottieReact
      src="https://lottie.host/96c18b5c-99e1-4a44-9617-66423ec4a335/QSRNUUsVff.lottie"
      loop
      autoplay
    />
              </div>
            </div>
          </Section>
          <Section color="  flex flex-col  md:w-[95dvw] w-[100dvw]">
            <div className='md:ml-20 ml-2 flex md:flex-row flex-col border-[#ffd700] rounded-xl md:h-[75%] h-[90%] bg-gray-200 py-4 px-8 items-center justify-center'>
              <div className="md:w-[64%] w-[100%]">
                <div className="text-4xl font-semibold">Sales and Merchandising</div>
                <p className="my-4 text-2xl">Our expertise ensures that your products reach the right customers at the right time, maximizing your market potential.<br></br></p>
                <div>
                  <p className="mt-2 text-base text-gray-300"><span className="text-black text-xl">1. Field Sales</span></p>
                  <p className="mt-2 text-base text-gray-300"><span className="text-black text-xl">2. Merchandising</span></p>
                  <p className="mt-2 text-base text-gray-300"><span className="text-black text-xl">3. Retail Audit</span></p>
                  <p className="mt-2 text-base text-gray-300"><span className="text-black text-xl">4. Point of Sales Execution</span></p>
                  <p className="mt-2 text-base text-gray-300"><span className="text-black text-xl">5. Asset Optimization</span></p>
                  <p className="mt-2 text-base text-gray-300"><span className="text-black text-xl">6. Product Management</span></p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/services/SalesAndMerchandising" className="inline-flex text-base items-center px-3 py-2 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                      Get Started
                      <span className="ml-2">→</span>
                    </Link>
                    <Link to="/contact" className="inline-flex items-center px-3 text-base py-2 border-2 border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-black transition-colors">
                      Request a Free Consultation
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[80%] md:block hidden">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: Sales,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </Section>
          <Section color=" flex flex-col md:w-[95dvw] w-[100dvw]">
            <div className='md:ml-20 ml-2 flex md:flex-row flex-col border-[#ffd700] rounded-xl md:h-[75%] h-[90%] bg-gray-200 py-4 px-8 items-center justify-center'>
              <div className="md:w-[64%] w-[100%]">
                <div className="text-4xl font-semibold">Brand Activation and Experimental Marketing</div>
                <p className="my-4 text-2xl">At Retail Craft Asia, we create impactful brand experiences that engage, inspire, and drive consumer action.<br></br></p>
                <div>
                  <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-black">1. Brand Ambassadors & Programs</span></p>
                  <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-black">2. Events & Roadshows</span></p>
                  <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-black">3. Sampling</span></p>
                  <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-black">4. Shopper Marketing</span></p>
                  <p className="text-base text-gray-300 mt-2"> <span className="text-xl text-black">5. In-Store Activation</span></p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/services/BrandActivation" className="inline-flex text-base items-center px-3 py-2 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                      Get Started
                      <span className="ml-2">→</span>
                    </Link>
                    <Link to="/contact" className="inline-flex items-center px-3 text-base py-2 border-2 border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-black transition-colors">
                      Request a Free Consultation
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[80%] md:block hidden">
                {/* <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: Marketing,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                  height={400}
                  width={400}
                /> */}
                <DotLottieReact
      src="https://lottie.host/af206ab1-250f-43d9-8308-2cee354481ca/76CXF5NodU.lottie"
      loop
      autoplay
    />
              </div>
            </div>
          </Section>
         
          <Section color="flex flex-col md:w-[95dvw] w-[100dvw]">
          <div className='md:ml-20 ml-2 flex md:flex-row flex-col border-[#ffd700] rounded-xl md:h-[75%] h-[90%] bg-gray-200 py-4 px-8 items-center justify-center'>
          <div className="md:w-[64%] w-[100%]">
                <div className="text-4xl font-semibold">Data and Technology</div>
                <p className="my-4 text-2xl">At Retail Craft Asia,we harness the power of data and technology to drive smarter business decisions.<br></br></p>
                <div>
                  <p className="text-base text-gray-300 mt-2"><span className=" text-black text-xl"> 1. Data & Operations Intelligence</span></p>
                  <p className="text-base text-gray-300 mt-2"><span className=" text-black text-xl"> 2. Sales Force Automation Tools</span></p>
                  <p className="text-base text-gray-300 mt-2"><span className=" text-black text-xl"> 3. Learning & Development Modules</span></p>
                  <p className="text-base text-gray-300 mt-2"><span className=" text-black text-xl"> 4. CRM Solutions-</span></p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/services/DataAndTechnology" className="inline-flex text-base items-center px-3 py-2 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                      Get Started
                      <span className="ml-2">→</span>
                    </Link>
                    <Link to="/contact" className="inline-flex items-center px-3 text-base py-2 border-2 border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-black transition-colors">
                      Request a Free Consultation
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[80%] md:block hidden">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: Tech,
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
          <Section color=" flex flex-col md:w-[95dvw] w-[100dvw]">
          <div className='md:ml-20 ml-2 flex md:flex-row flex-col border-[#ffd700] rounded-xl md:h-[75%] h-[90%] bg-gray-200 py-4 px-8 items-center justify-center'>
          <div className="md:w-[64%] w-[100%]">
                <div className="text-4xl font-semibold">Digital Marketing</div>
                <p className="my-4 text-2xl">we create impactful digital marketing strategies that drive brand awareness, engagement, and conversions.<br></br></p>
                <div>
                  <p className="text-base text-gray-300 mt-2"><span className="text-black text-xl">1. Content Marketing </span></p>
                  <p className="text-base text-gray-300 mt-2"><span className="text-black text-xl">2. Social Media Marketing</span></p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/services/DigitalMarketing" className="inline-flex text-base items-center px-3 py-2 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                      Get Started
                      <span className="ml-2">→</span>
                    </Link>
                    <Link to="/contact" className="inline-flex items-center px-3 text-base py-2 border-2 border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-black transition-colors">
                      Request a Free Consultation
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[80%] md:block hidden">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: Marketing,
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
          {/* Repeat the Section component for other sections */}
        </div>
      </div>
      <div ref={containerBottomRef} className="h-[10vh] "></div>
    </>
  );
};

const Section = ({ children, color }) => (
  <div className={`flex-shrink-0 w-screen h-screen ${color} flex items-center justify-center text-black text-4xl font-semibold`}>
    {children}
  </div>
);

export default HorizontalScroll;

