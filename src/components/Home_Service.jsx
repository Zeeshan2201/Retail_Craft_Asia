"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaBullhorn,
  FaGlobe,
  FaDatabase,
  FaLaptop,
} from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    category: "Market Expansion Services",
    points: [
      "Product Sourcing",
      "Market Research & Insights",
      "Sales & Marketing",
      "Distribution & Logistics",
      "After Sales Services",
    ],
    icon: <FaGlobe className="text-5xl text-yellow-600" />,
    link: "Services/MarketExpansion",
  },
  {
    category: "Brand Activation & Experiential Marketing",
    points: [
      "Brand Ambassador Programmes",
      "Events & Road Shows",
      "Sampling",
      "Shopper Marketing",
      "Instore Activation",
    ],
    icon: <FaBullhorn className="text-5xl text-yellow-600" />,
    link: "Services/BrandActivation",
  },
  {
    category: "Sales & Merchandising",
    points: [
      "Field Sales",
      "Merchandising",
      "Retail Audit",
      "Point of Sale Execution",
      "Asset Optimisation",
      "Product Management",
    ],
    icon: <FaChartLine className="text-5xl text-yellow-600" />,
    link: "Services/SalesAndMerchandising",
  },
  {
    category: "Data & Technology",
    points: [
      "Data & Operation Intelligence",
      "Sales Force Automation Tools",
      "Learning & Development Modules",
      "CRM Solutions",
    ],
    icon: <FaDatabase className="text-5xl text-yellow-600" />,
    link: "Services/DataAndTechnology",
  },
  {
    category: "Digital Marketing",
    points: [
      "Content Marketing",
      "Social Media Marketing",
    ],
    icon: <FaLaptop className="text-5xl text-yellow-600" />,
    link: "Services/DigitalMarketing",
  },
];

const ServicesSection = () => {
  const [angle, setAngle] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev - 72);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const rotateLeft = () => setAngle((prev) => prev + 72);
  const rotateRight = () => setAngle((prev) => prev - 72);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  }

  // First row cards come from left
  const firstRowCardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: i * 0.1,
      },
    }),
    exit: (i) => ({
      x: -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: i * 0.05,
      },
    }),
  }

  // Second row cards come from right
  const secondRowCardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: i * 0.1 + 0.3,
      },
    }),
    exit: (i) => ({
      x: 100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: i * 0.05,
      },
    }),
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    exit: {
      scale: 0,
      rotate: 180,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.4,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 }, // Increased vertical starting position
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Increased delay to make the stagger more prominent
        duration: 0.5, // Slightly longer duration for a smoother feel
        ease: "easeOut",
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white text-gray-800 py-16 px-4">
      {/* Heading */}
    <h1 className="text-3xl md:text-5xl font-bold mb-12 text-[#D18B00] text-center drop-shadow-md">
  OUR SERVICES
</h1>


      {/* Carousel */}
      <div className="relative w-full h-[500px] sm:h-[520px] md:h-[550px] perspective">
        <div className="relative w-full h-full">
          {services.map((service, i) => {
            const rotation = i * (360 / services.length);
            const currentRotation = ((angle + rotation) % 360 + 360) % 360;
            const isFront = currentRotation > 330 || currentRotation < 30;

            return (
              <motion.div
                key={i}
                className="absolute w-[260px] sm:w-[280px] md:w-[320px] h-[420px] text-left rounded-2xl border border-gray-300 flex flex-col px-6 py-6 bg-white"
                style={{
                  boxShadow: "0 0 25px rgba(255, 215, 0, 0.6)",
                  left: "50%",
                  top: "50%",
                  transform: `
                    translate(-50%, -50%)
                    rotateY(${rotation + angle}deg)
                    translateZ(700px)
                  `,
                  transformStyle: "preserve-3d",
                  filter: isFront ? "none" : "blur(4px) brightness(0.8)",
                  opacity: isFront ? 1 : 0.4,
                  zIndex: isFront ? 10 : 1,
                  transition: "all 0.75s ease-in-out",
                }}
              >
                {/* Icon */}
                <div className="mb-4 self-center">{service.icon}</div>

                {/* Title */}
                <h2 className="text-lg md:text-xl font-semibold mb-3 text-yellow-600 text-center w-full">
                  {service.category}
                </h2>

                {/* Bullet List */}
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base flex-1">
                  {service.points.map((point, index) => (
                    <li key={index} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Button pinned at bottom */}
                <div className="mt-6 w-full flex justify-center">
                  <a
                    href={service.link}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium hover:scale-105 transition-transform"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={rotateLeft}
          className="p-3 rounded-full bg-yellow-100 hover:bg-yellow-200 shadow-lg transition"
        >
          <ChevronLeft className="w-6 h-6 text-yellow-600" />
        </button>
        <button
          onClick={rotateRight}
          className="p-3 rounded-full bg-yellow-100 hover:bg-yellow-200 shadow-lg transition"
        >
          <ChevronRight className="w-6 h-6 text-yellow-600" />
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
