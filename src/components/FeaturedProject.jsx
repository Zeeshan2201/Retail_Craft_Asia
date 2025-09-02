import { motion, useInView, useAnimation } from "framer-motion"
//import React from "react";
import React, { useEffect, useRef } from "react";
import {
  FaChartLine,
  FaBullhorn,
  FaGlobe,
  FaDatabase,
  FaLaptop,
  FaUsers,
  FaShoppingCart,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaBoxOpen,
  FaRocket,
  FaHandshake,
  FaSearch,
  FaTruck,
  FaHeadset,
  FaBrain,
  FaRobot,
  FaGraduationCap,
  FaCogs,
  FaPenFancy,
  FaThumbsUp,
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";


const services = [
  {
    category: "Market Expansion Services",
    items: [
      { name: "Product Sourcing", icon: <FaRobot />, description: "Identifying and acquiring quality products efficiently.", link:"/services/MarketExpansion" },
      { name: "Market Research & Insights", icon: <FaGraduationCap />, description: "Analyzing market trends for business growth.", link:"/services/MarketExpansion" },
      { name: "Sales & Marketing", icon: <FaCogs />, description: "Developing strategies to drive revenue and brand awareness.", link:"/services/MarketExpansion" },
      { name: "Distribution & Logistics", icon: <FaTruck />, description: "Ensuring smooth supply chain operations.", link:"/services/MarketExpansion" },
      { name: "After Sales Services", icon: <FaHeadset />, description: "Providing support and solutions post-purchase.", link:"/services/MarketExpansion" }
    ]
  },
  {
    category: "Sales & Merchandising",
    items: [
      { name: "Field Sales", icon: <FaUsers />, description: "Direct in-person sales and client relationship building.", link:"/services/SalesAndMerchandising" },
      { name: "Merchandising", icon: <FaShoppingCart />, description: "Strategic product placement to maximize sales." , link:"/services/SalesAndMerchandising"},
      { name: "Retail Audit", icon: <FaClipboardCheck />, description: "Evaluating retail execution and compliance.", link:"/services/SalesAndMerchandising"},
      { name: "Point of Sale Execution", icon: <FaMoneyBillWave />, description: "Enhancing customer purchase experience." , link:"/services/SalesAndMerchandising"},
      { name: "Asset Optimisation", icon: <FaBoxOpen />, description: "Maximizing asset utilization for efficiency.", link:"/services/SalesAndMerchandising" },
      { name: "Product Management", icon: <FaRocket />, description: "Strategic planning and development of products.", link:"/services/SalesAndMerchandising" }
    ]
  },
  {
    category: "Brand Activation & Experiential Marketing",
    items: [
      { name: "Brand Ambassador Programmes", icon: <FaHandshake />, description: "Engaging brand ambassadors to represent products." , link:"/services/BrandActivation"},
      { name: "Events & Road Shows", icon: <FaSearch />, description: "Creating immersive brand experiences for consumers.", link:"/services/BrandActivation" },
      { name: "Sampling", icon: <FaTruck />, description: "Providing product samples to boost awareness.", link:"/services/BrandActivation" },
      { name: "Shopper Marketing", icon: <FaHeadset />, description: "Influencing customers at the point of purchase.", link:"/services/BrandActivation" },
      { name: "Instore Activation", icon: <FaBrain />, description: "Driving sales through in-store promotional activities.", link:"/services/BrandActivation" }
    ]
  },
  {
    category: "Data & Technology",
    items: [
      { name: "Data & Operation Intelligence", icon: <FaBrain />, description: "Utilizing analytics to optimize operations.", link:"/services/DataAndTechnology" },
      { name: "Sales Force Automation Tools", icon: <FaRobot />, description: "Enhancing sales processes with automation.", link:"/services/DataAndTechnology" },
      { name: "Learning & Development Modules", icon: <FaGraduationCap />, description: "Training solutions for workforce skill enhancement." , link:"/services/DataAndTechnology"},
      { name: "CRM Solutions", icon: <FaCogs />, description: "Managing customer relationships effectively.", link:"/services/DataAndTechnology" }
    ]
  },
  {
    category: "Digital Marketing",
    items: [
      { name: "Content Marketing", icon: <FaPenFancy />, description: "Creating engaging content to attract audiences.", link:"/services/DigitalMarketing" },
      { name: "Social Media Marketing", icon: <FaThumbsUp />, description: "Boosting brand visibility through social platforms.", link:"/services/DigitalMarketing" }
    ]
  }
];

const ServicesSection = () => {
  return (
    <div className="relative min-h-screen w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-36">
      {/* Floating Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-200 opacity-10 sm:opacity-15 md:opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-start justify-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full"
        >
          {/* Left Heading */}
          <div className="w-full lg:w-1/4 flex lg:h-[50vh] justify-center items-center mb-6 sm:mb-8 lg:mb-0 mt-8 sm:mt-10 md:mt-12 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-semibold text-center text-yellow-600 leading-tight">
              {service.category}
            </h3>
          </div>

          {/* Right Cards - 🔥 Motion Infinite Auto Scroll */}
          <div className="w-full lg:w-3/4 relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            >
              {[...service.items, ...service.items].map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5 w-64 sm:w-72 md:w-80 lg:w-64 xl:w-72 h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh]"
                >
                  {/* ✨ Gradient border wrapper */}
                  <div className="relative w-full h-full rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-[1.5px] sm:p-[2px]">
                    {/* ✨ Actual card */}
                    <div className="w-full h-full bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-gray-100 p-4 sm:p-5 md:p-6 text-center flex flex-col justify-between">
                      <div>
                        <div
                          className="relative mx-auto w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white shadow-md sm:shadow-lg 
                                     text-yellow-600 flex items-center justify-center 
                                     rounded-full border border-gray-300 text-xl sm:text-2xl"
                        >
                          {item.icon}
                        </div>
                        <h4 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold text-gray-700 leading-tight min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center">
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-1 sm:px-2">{item.description}</p>
                      </div>
                      <a
                        href={item.link}
                        className="mt-4 sm:mt-6 md:mt-8 lg:mt-4 hover:text-yellow-400 inline-block 
                                   text-gray-700 font-semibold text-xs sm:text-sm md:text-base hover:underline transition-colors duration-200"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;