// import React from 'react';

// import FMCGIcon from '../assets/Industry/fmcg.svg';
// import RetailIcon from '../assets/Industry/retail.svg';
// import HealthBeautyIcon from '../assets/Industry/health.svg';
// import ConsumerDurablesIcon from '../assets/Industry/Electronic.svg';
// import BankingIcon from '../assets/Industry/account_balance.svg';
// import PharmaceuticalsIcon from '../assets/Industry/health_pharmacy.svg';

// const industries = [
//   { icon: FMCGIcon, title: 'FMCG', description: 'Fast-Moving Consumer Goods include packaged food, beverages, toiletries, and over-the-counter drugs, ensuring constant demand.' },
//   { icon: RetailIcon, title: 'Retail', description: 'Retail involves selling goods and services directly to consumers through supermarkets, department stores, and online platforms.' },
//   { icon: HealthBeautyIcon, title: 'Health & Beauty', description: 'Personal care, skincare, cosmetics, and wellness products, focusing on enhancing well-being and promoting a healthier lifestyle.' },
//   { icon: ConsumerDurablesIcon, title: 'Consumer Durables &  Electronics & Electronics', description: 'Long-lasting goods like appliances, gadgets, and furniture designed for extended use and smart technology integration.' },
//   { icon: BankingIcon, title: 'Hospitality Sector', description: 'Hotels, restaurants, travel, and tourism services that focus on customer experience and leisure industry innovations.' },
//   { icon: PharmaceuticalsIcon, title: 'Pharmaceuticals', description: 'Prescription and OTC medicines, medical devices, and healthcare solutions that drive advancements in global health.' }
// ];

// const IndustryCard = ({ icon, title, description }) => {
//   return (
//     <div className='hover:bg-gradient-to-r  from-[#f1ecd0] via-white to-white bg-white shadow-xl rounded-2xl p-8 text-center border transform transition duration-300 hover:scale-105  flex flex-col items-center hover:shadow-lg hover:bg-yellow-20 hover:shadow-yellow-300'>
//       <div className='bg-gradient-to-r from-yellow-50 via-white to-white p-4 rounded-full w-28 h-28 flex items-center justify-center shadow-md'>
//         <img src={icon} alt={title} className='w-16 h-16' />
//       </div>
//       <h3 className='text-3xl font-semibold mt-4 text-yellow-600 tracking-wide'>{title}</h3>
//       <p className='text-black text-lg mt-3 leading-relaxed max-w-xs'>{description}</p>
//     </div>
//   );
// };

// const IndustriesGrid = () => {
//   return (
//     <div className='py-16 text-center px-6 bg-gray-50'>
//       <h2 className="text-6xl font-semibold mb-16 text-yellow-600 uppercase tracking-wide drop-shadow-lg">Industries and Sectors</h2>
//       <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto'>
//         {industries.map((industry, index) => (
//           <IndustryCard key={index} {...industry} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IndustriesGrid;

// by v0dev

// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"

// // We'll use the same icons but import them dynamically in a real project
// // This is just a placeholder for the demo
// const IconPlaceholder = ({ name }) => (
//   <div className="w-16 h-16 flex items-center justify-center text-yellow-600">
//     {name === "FMCG" && (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-10 h-10"
//       >
//         <path d="m7 10 5-6 5 6"></path>
//         <path d="m21 10-2 8c-.17.67-.76 1-1.5 1h-11c-.74 0-1.33-.33-1.5-1l-2-8"></path>
//         <path d="M12 17v-5"></path>
//         <path d="M8 13h8"></path>
//       </svg>
//     )}
//     {name === "Retail" && (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-10 h-10"
//       >
//         <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
//         <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
//         <path d="M12 3v6"></path>
//       </svg>
//     )}
//     {name === "Health & Beauty" && (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-10 h-10"
//       >
//         <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//       </svg>
//     )}
//     {name === "Consumer Durables &  Electronics" && (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-10 h-10"
//       >
//         <rect width="20" height="14" x="2" y="3" rx="2"></rect>
//         <line x1="8" x2="16" y1="21" y2="21"></line>
//         <line x1="12" x2="12" y1="17" y2="21"></line>
//       </svg>
//     )}
//     {name === "Hospitality Sector" && (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-10 h-10"
//       >
//         <path d="M2 20h20"></path>
//         <path d="M5 4h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"></path>
//         <path d="M12 8v3"></path>
//         <path d="M12 15v.01"></path>
//       </svg>
//     )}
//     {name === "Pharmaceuticals" && (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-10 h-10"
//       >
//         <path d="m9 11 6 6"></path>
//         <path d="m15 11-6 6"></path>
//         <rect width="16" height="16" x="4" y="4" rx="2"></rect>
//       </svg>
//     )}
//   </div>
// )

// const industries = [
//   {
//     title: "FMCG",
//     description:
//       "Fast-Moving Consumer Goods include packaged food, beverages, toiletries, and over-the-counter drugs, ensuring constant demand.",
//   },
//   {
//     title: "Retail",
//     description:
//       "Retail involves selling goods and services directly to consumers through supermarkets, department stores, and online platforms.",
//   },
//   {
//     title: "Health & Beauty",
//     description:
//       "Personal care, skincare, cosmetics, and wellness products, focusing on enhancing well-being and promoting a healthier lifestyle.",
//   },
//   {
//     title: "Consumer Durables &  Electronics",
//     description:
//       "Long-lasting goods like appliances, gadgets, and furniture designed for extended use and smart technology integration.",
//   },
//   {
//     title: "Hospitality Sector",
//     description:
//       "Hotels, restaurants, travel, and tourism services that focus on customer experience and leisure industry innovations.",
//   },
//   {
//     title: "Pharmaceuticals",
//     description:
//       "Prescription and OTC medicines, medical devices, and healthcare solutions that drive advancements in global health.",
//   },
// ]

// const IndustryCard = ({ title, description, index }) => {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.1,
//         ease: "easeOut",
//       }}
//       whileHover={{
//         scale: 1.05,
//         transition: { duration: 0.2 },
//       }}
//       className="relative  hover:bg-gradient-to-r from-[#f1ecd0] via-white to-white hover:scale-105 hover:shadow-lg hover:bg-yellow-20 hover:shadow-yellow-300 overflow-hidden rounded-2xl"
//       // className="relative overflow-hidden rounded-2xl"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <motion.div
//         className="bg-white shadow-xl  rounded-2xl p-8 text-center border flex flex-col items-center h-full z-10 relative"
//         animate={{
//           boxShadow: isHovered
//             ? "0 20px 25px -5px rgba(245, 158, 11, 0.1), 0 10px 10px -5px rgba(245, 158, 11, 0.04)"
//             : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
//         }}
//       >
//         <motion.div
//           className="bg-gradient-to-r  from-yellow-50 to-white p-4 rounded-full w-28 h-28 flex items-center justify-center shadow-md mb-4"
//           animate={{
//             rotate: isHovered ? [0, 5, -5, 0] : 0,
//             scale: isHovered ? [1, 1.1, 1] : 1,
//           }}
//           transition={{
//             duration: 0.5,
//             ease: "easeInOut",
//             times: [0, 0.2, 0.5, 1],
//           }}
//         >
//           <IconPlaceholder name={title} />
//         </motion.div>

//         <motion.h3
//           className="text-3xl font-semibold mt-2 text-yellow-600 tracking-wide"
//           animate={{
//             y: isHovered ? [0, -5, 0] : 0,
//             color: isHovered ? "#d97706" : "#ca8a04",
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {title}
//         </motion.h3>

//         <motion.div
//           className="h-1 w-12 bg-yellow-400 rounded-full my-3 mx-auto"
//           animate={{
//             width: isHovered ? 80 : 48,
//             backgroundColor: isHovered ? "#f59e0b" : "#facc15",
//           }}
//           transition={{ duration: 0.3 }}
//         />

//         <motion.p
//           className="text-black text-lg mt-2 leading-relaxed"
//           animate={{
//             opacity: isHovered ? 1 : 0.9,
//           }}
//         >
//           {description}
//         </motion.p>

//         <motion.button
//           className="mt-4 text-yellow-600 font-medium flex items-center gap-1 opacity-0"
//           animate={{
//             opacity: isHovered ? 1 : 0,
//             y: isHovered ? 0 : 10,
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           Learn more
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="w-4 h-4"
//           >
//             <path d="M5 12h14"></path>
//             <path d="m12 5 7 7-7 7"></path>
//           </svg>
//         </motion.button>
//       </motion.div>

//       {/* Background gradient animation */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-50 to-white opacity-0 z-0"
//         animate={{
//           opacity: isHovered ? 0.8 : 0,
//         }}
//         transition={{ duration: 0.3 }}
//       />
//     </motion.div>
//   )
// }

// export default function AnimatedIndustriesGrid() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     // Simulate intersection observer for demo purposes
//     setIsVisible(true)
//   }, [])

//   return (
//     <div className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
//       {/* Animated background elements */}
//       <motion.div
//         className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow-100 opacity-30 blur-3xl"
//         animate={{
//           x: [0, 50, 0],
//           y: [0, 30, 0],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-200 opacity-20 blur-3xl"
//         animate={{
//           x: [0, -70, 0],
//           y: [0, 50, 0],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             className="text-6xl font-bold text-yellow-600 uppercase tracking-wide"
//             animate={{
//               textShadow: [
//                 "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 "0 6px 8px rgba(0, 0, 0, 0.15)",
//                 "0 4px 6px rgba(0, 0, 0, 0.1)",
//               ],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//             }}
//           >
//             Industries and Sectors
//           </motion.h2>

//           <motion.div
//             className="h-1.5 w-40 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-6 mx-auto"
//             animate={{
//               width: ["10rem", "15rem", "10rem"],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//             }}
//           />
//         </motion.div>

//         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
//           {industries.map((industry, index) => (
//             <IndustryCard key={index} {...industry} index={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

import { useRef, useEffect, useState } from "react";
import Alchohol from "../assets/Industry/liquor.svg"
import { motion, useInView, useAnimation } from "framer-motion";

// We'll use the same icons but import them dynamically in a real project
// This is just a placeholder for the demo
const IconPlaceholder = ({ name }) => (
  <div className="w-16 h-16 flex items-center justify-center text-yellow-600">
    {name === "FMCG" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-yellow-600"
      >
        <circle cx="8" cy="20" r="2"></circle>
        <circle cx="18" cy="20" r="2"></circle>
        <path d="M2 3h4l3.6 10.6a2 2 0 0 0 2 1.4h6.8a2 2 0 0 0 2-1.5L22 6H5"></path>
      </svg>
    )}
    {name === "Retail" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
        <path d="M12 3v6"></path>
      </svg>
    )}
    {name === "Health & Beauty" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    )}
    {name === "Consumer Durables &  Electronics" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10"
      >
        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
        <line x1="8" x2="16" y1="21" y2="21"></line>
        <line x1="12" x2="12" y1="17" y2="21"></line>
      </svg>
    )}
    {name === "Hospitality Sector" && (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 -960 960 960" fill="#ca8a04">
      <path d="M280-320q0-33 23.5-56.5T360-400q33 0 56.5 23.5T440-320q0 33-23.5 56.5T360-240q-33 0-56.5-23.5T280-320Zm200-80h240q33 0 56.5 23.5T800-320v280h-80v-80H240v80h-80v-400h80v240h240v-200Zm150-40L512-654 406-548l10 68-30 30-47-88-88-48 30-30 68 9 106-106-215-117 38-38 264 68 108-108q12-12 29-12t29 12q12 12 12 29t-12 29L600-742l68 264-38 38Zm90 240v-120H560v120h160Z"/>
    </svg>
    
    
    )}
    {name === "Pharmaceuticals" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-yellow-600"
      >
        <rect x="3" y="6" width="18" height="12" rx="2"></rect>
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <path d="M12 10v4"></path>
        <path d="M10 12h4"></path>
      </svg>
    )}
    <div className="flex items-center justify-center h-full">
  {name === "Alchohol & Beverages" && (
    <svg
    
      xmlns=""
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 text-yellow-600"
    >
      <rect x="3" y="6" width="18" height="12" rx="2"></rect>
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <path d="M12 10v4"></path>
      <path d="M10 12h4"></path>
    </svg>
  )}
</div>

  </div>
);

const industries = [
  {
    title: "FMCG",
   
  },
  {
    title: "Retail",
   
  },
  {
    title: "Health & Beauty",
   
  },
  {
    title: "Consumer Durables &  Electronics",
    
  },
  {
    title: "Hospitality Sector",
   
  },
  {
    title: "Pharmaceuticals",
    
  },

  
  {
    title: "Alchohol & Beverages"
  }
];

const IndustryCard = ({ title, description, index, isInView, direction }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      cardControls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 24,
          mass: 0.8,
          delay: index * 0.1,
          duration: 0.5,
        },
      });
    } else {
      cardControls.start({
        x: direction === "entering" ? -100 : 100,
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 24,
          mass: 0.8,
          delay: (industries.length - index - 1) * 0.05,
          duration: 0.5,
        },
      });
    }
  }, [isInView, index, cardControls, direction]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={cardControls}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="relative md:w-[25vw] mb-12 w-full hover:bg-gradient-to-r from-[#f1ecd0] via-white to-white hover:shadow-lg hover:bg-yellow-20 hover:shadow-yellow-300 overflow-hidden rounded-2xl"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 text-center border flex flex-col items-center h-full z-10 relative"
        animate={{
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(245, 158, 11, 0.1), 0 10px 10px -5px rgba(245, 158, 11, 0.04)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <motion.div
          className="bg-gradient-to-r from-yellow-50 to-white p-4 rounded-full w-28 h-28 flex items-center justify-center shadow-md mb-4"
          animate={{
            rotate: isHovered ? [0, 5, -5, 0] : 0,
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 1],
          }}
        >
          <IconPlaceholder name={title} />
        </motion.div>

        <motion.h3
          className="text-3xl font-semibold mt-2 text-yellow-600 tracking-wide"
          animate={{
            y: isHovered ? [0, -5, 0] : 0,
            color: isHovered ? "#d97706" : "#ca8a04",
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="h-1 w-12 bg-yellow-400 rounded-full my-3 mx-auto"
          animate={{
            width: isHovered ? 80 : 48,
            backgroundColor: isHovered ? "#f59e0b" : "#facc15",
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.p
          className="text-black text-lg mt-2 leading-relaxed"
          animate={{
            opacity: isHovered ? 1 : 0.9,
          }}
        >
          {description}
        </motion.p>

        {/* <motion.button
          className="mt-4 text-yellow-600 font-medium flex items-center gap-1 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </motion.button> */}
      </motion.div>

      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-50 to-white opacity-0 z-0"
        animate={{
          opacity: isHovered ? 0.8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function AnimatedIndustriesGrid() {
  const [scrollDirection, setScrollDirection] = useState("entering");
  const [lastScrollY, setLastScrollY] = useState(0);
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, {
    amount: 0.2,
    once: false,
  });
  const titleControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("entering");
      } else {
        setScrollDirection("exiting");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isInView) {
      titleControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: "easeOut",
        },
      });
    } else {
      titleControls.start({
        opacity: 0,
        y: -20,
        transition: {
          duration: 0.5,
          ease: "easeIn",
        },
      });
    }
  }, [isInView, titleControls]);

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow-100 opacity-30 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-200 opacity-20 blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={titleControls}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl font-semibold text-yellow-600 uppercase tracking-wide"
            animate={{
              textShadow: [
                "0 4px 6px rgba(0, 0, 0, 0.1)",
                "0 6px 8px rgba(0, 0, 0, 0.15)",
                "0 4px 6px rgba(0, 0, 0, 0.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            Industries and Sectors
          </motion.h2>

          <motion.div
            className="h-1.5 w-40 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-6 mx-auto"
            animate={{
              width: ["10rem", "15rem", "10rem"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>

        <div
          ref={gridRef}
          // className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-10"
          className="flex justify-evenly flex-wrap md:flex-row flex-col"
        >
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              {...industry}
              index={index}
              isInView={isInView}
              direction={scrollDirection}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
