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
          <Section color="bg-red-500">Section 1</Section>
          <Section color="bg-blue-500">Section 2</Section>
          <Section color="bg-green-500">Section 3</Section>
          <Section color="bg-yellow-500">Section 4</Section>
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
