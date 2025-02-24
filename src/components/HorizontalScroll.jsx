"use client";

import React, { useState, useEffect, useRef } from "react";

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
      <div ref={containerTopRef} className="h-[10vh]"></div>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          <Section color="bg-red-500 flex flex-col w-[42vw] px-12">
            <div className="text-4xl font-bold ">Sales and Merchandising</div>
            <p className="mt-10 text-2xl">At Retail Craft Asia,we specialize in sales and merchandising solutions designed to enhance brand</p>
            <p className="text-2xl">Our expertise ensures that your products reach the right customers at the right time, maximizing your market potential.<br></br></p>
            <div className="mt-2">
            <p className="text-2xl mt-2">✔ Field Sales-Our expert sales team drives market penetration, strengthens customer relationships</p>
            <p className="text-2xl mt-2">✔ Merchandising- We optimize product placement, stock availability, and visual appeal to maximize sales</p>
            <p className="text-2xl mt-2">✔ Retail Audit-Our in-depth audits provide actionable insights on stock levels, compliance, and competitor analysis</p>
            <p className="text-2xl mt-2">✔ Point of Sales Execution-We ensure seamless in-store execution of promotions and branding to drive customer engage</p>
            <p className="text-2xl mt-2">✔ Asset Optimization-We maximize the efficiency of retail assets, ensuring better utilization, higher ROI</p>
            <p className="text-2xl mt-2">✔ Product Management- We manage the complete product lifecycle,ensuring successful launches, competitive positioning</p>
            </div>
          </Section>

          <Section color="bg-blue-500 flex flex-col w-[42vw] px-12">
            <div className="text-4xl font-bold">Brand Activation and Experimental Marketing</div>
            <p className="text-2xl mt-20">At Retail Craft Asia, we create impactful brand experiences that engage, inspire, and drive consumer action.</p>
            <div className="mt-2">
            <p className="text-2xl mt-2">✔ Brand Ambassadors & Programs-Our trained ambassadors create meaningful interactions that enhance brand loyalty </p>
            <p className="text-2xl mt-2">✔ Events & Roadshows-We execute high-impact activations that increase brand visibility and connect with target audiences.</p>
            <p className="text-2xl mt-2">✔ Sampling-We drive product trials with strategic sampling campaigns that build trust and accelerate purchase decisions.</p>
            <p className="text-2xl mt-2">✔ Shopper Marketing– Our targeted marketing strategies influence buying behavior and optimize the path to purchase.</p>
            <p className="text-2xl mt-2">✔ In-Store Activation– We create engaging in-store experiences that enhance brand presence and boost retail sales.</p>
            </div>
          </Section>

          <Section color="bg-green-500 flex flex-col w-[42vw] px-12">
            <div className="text-4xl font-bold">Market Expansion Services</div>
            <p className="text-2xl mt-20">At Retail Craft Asia, we help businesses expand into new markets with end-to-end solutions</p>
            <div className="mt-2">
              <p className="text-2xl mt-2">✔ Product Sourcing – We connect you with reliable suppliers to ensure quality products that meet market demand.</p>
              <p className="text-2xl mt-2">✔ Market Research & Insights–Our data driven insights help businesses make informed decisions and stay ahead of competitors.</p>
              <p className="text-2xl mt-2">✔ Sales & Marketing-We implement strategic sales and marketing plans to drive brand awareness, customer acquisition, </p>
              <p className="text-2xl mt-2">✔ Distribution & Logistics-We ensure seamless supply chain management, warehousing, and delivery for maximum market reach.</p>
              <p className="text-2xl mt-2">✔ After-Sales Services – Our dedicated after-sales support enhances customer satisfaction and strengthens brand loyalty.</p>
            </div>
          </Section>
          <Section color="bg-yellow-500 flex flex-col w-[42vw] px-12">
            <div className="text-4xl font-bold">Data and Technology</div>
            <p className="text-2xl mt-20">At Retail Craft Asia,we harness the power of data and technology to drive smarter business decisions</p>
            <div className="mt-2">
              <p className="text-2xl mt-2">✔ Data & Operations Intelligence- We provide real-time data insights to optimize operations, improve efficiency,</p>
              <p className="text-2xl mt-2">✔ Sales Force Automation Tools– Our advanced automation tools enhance sales tracking, performance monitoring,</p>
              <p className="text-2xl mt-2">✔ Learning & Development Modules– We empower teams with customized training programs for skill enhancement</p>
              <p className="text-2xl mt-2">✔ CRM Solutions-Our CRM systems streamline customer interactions, improve retention, and drive long-term brand engagement.</p>
            </div>
          </Section>
          <Section color="bg-gray-500 flex flex-col w-[42vw] px-12">
            <div className="text-4xl font-bold">Digital Marketing</div>
            <p className="text-2xl mt-20">we create impactful digital marketing strategies that drive brand awareness, engagement, and conversions</p>
            <div className="mt-2">
              <p className="text-2xl mt-2">✔ Content Marketing -We craft compelling content that strengthens brand identity, educates audiences, and drives engagement.</p>
              <p className="text-2xl mt-2">✔ Social Media Marketing-Our strategic campaigns leverage social platforms to maximize brand reach, engagement, and conversions.</p>
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
