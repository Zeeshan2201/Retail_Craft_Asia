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
    <div className="relative min-h-screen w-full py-24 px-8 md:px-20 lg:px-36">
      {/* Floating Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-200 opacity-20"
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
          className="flex flex-col md:flex-row items-start justify-center md:mb-16 gap-10 w-full"
        >
          {/* Left Heading */}
          <div className="w-full md:w-1/4 flex md:h-[50vh] justify-center items-center mb-8 md:mt-0 mt-12 md:mb-0">
            <h3 className="text-4xl font-semibold text-center text-yellow-600">
              {service.category}
            </h3>
          </div>

          {/* Right Cards - 🔥 Motion Infinite Auto Scroll */}
          <div className="w-full md:w-3/4 relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            >
              {[...service.items, ...service.items].map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex-shrink-0 mx-5 md:w-64 w-72 md:h-[50vh] h-[40vh]"
                >
                  {/* ✨ Gradient border wrapper */}
                  <div className="relative w-full h-full rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-[2px]">
                    {/* ✨ Actual card */}
                    <div className="w-full h-full bg-white rounded-xl shadow-xl border border-gray-100 p-6 text-center">
                      <div
                        className="relative mx-auto w-20 h-20 bg-white shadow-lg 
                                   text-yellow-600 flex items-center justify-center 
                                   rounded-full border border-gray-300 text-2xl"
                      >
                        {item.icon}
                      </div>
                      <h4 className="mt-4 text-lg font-semibold h-16 text-gray-700">
                        {item.name}
                      </h4>
                      <p>{item.description}</p>
                      <a
                        href={item.link}
                        className="mt-12 md:mt-4 hover:text-yellow-400 inline-block 
                                   h-10 text-gray-700 font-semibold text-sm hover:underline"
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