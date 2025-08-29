"use client"

import { useEffect, useRef } from "react"
import { FaChartLine, FaBullhorn, FaGlobe, FaDatabase, FaLaptop } from "react-icons/fa"
import { motion, useInView, useAnimation } from "framer-motion"

const services = [
  {
    category: "Market Expansion Services",
    icon: <FaGlobe className="text-5xl text-yellow-600" />,
    link: "services/MarketExpansion",
    items: [
      "Product Sourcing",
      "Market Research & Insights",
      "Sales & Marketing",
      "Distribution & Logistics",
      "After Sales Services",
    ],
  },
  {
    category: "Brand Activation & Experiential Marketing",
    icon: <FaBullhorn className="text-5xl text-yellow-600" />,
    link: "services/BrandActivation",
    items: [
      "Brand Ambassador Programmes",
      "Events & Road Shows",
      "Sampling",
      "Shopper Marketing",
      "Instore Activation",
    ],
  },
  {
    category: "Sales & Merchandising",
    icon: <FaChartLine className="text-5xl text-yellow-600" />,
    link: "services/SalesAndMerchandising",
    items: [
      "Field Sales",
      "Merchandising",
      "Retail Audit",
      "Point of Sale Execution",
      "Asset Optimisation",
      "Product Management",
    ],
  },
  {
    category: "Data & Technology",
    icon: <FaDatabase className="text-5xl text-yellow-600" />,
    link: "/services/DataAndTechnology",
    items: [
      "Data & Operation Intelligence",
      "Sales Force Automation Tools",
      "Learning & Development Modules",
      "CRM Solutions",
    ],
  },
  {
    category: "Digital Marketing",
    icon: <FaLaptop className="text-5xl text-yellow-600" />,
    link: "services/DigitalMarketing",
    items: ["Content Marketing", "Social Media Marketing"],
  },
]

const ServicesSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("exit")
    }
  }, [isInView, controls])

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
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      scale: 0,
      rotate: -180,
      transition: {
        duration: 0.3,
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
{/* Above made changes for revaling the description text....*/}

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
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-gray-50 py-24 px-8 md:px-20 lg:px-36 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-200 opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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

      <div className="relative z-10">
        <motion.div className="text-center mb-16" initial="hidden" animate={controls} variants={titleVariants}>
          <motion.h1
            className="text-6xl font-semibold mb-6 text-yellow-600 uppercase tracking-wide drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-yellow-600 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              className="relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-yellow-300 shadow-gray-300 overflow-hidden"
              variants={firstRowCardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.3), 0 10px 10px -5px rgba(234, 179, 8, 0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-yellow-600"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              />

              <motion.div
                className="relative mx-auto w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full border border-gray-300"
                variants={iconVariants}
                whileHover="hover"
              >
                {service.icon}
              </motion.div>

              <motion.h2
                className="mt-6 text-2xl h-16 font-semibold text-yellow-600"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {service.category}
              </motion.h2>

              <ul className="mt-4 h-44 text-lg text-gray-800 list-disc list-inside text-left ml-6">
                {service.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    custom={idx}
                    variants={listItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "exit"}
                    whileHover={{ x: 5, color: "#ca8a04" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={service.link}
                className="mt-6 inline-block text-yellow-600 font-semibold text-lg hover:underline relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-yellow-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.slice(3).map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              className="w-full sm:w-[80%] md:w-[50%] lg:w-[30%] sm:h-[65vh] relative bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-yellow-300 shadow-gray-300 overflow-hidden"
              variants={secondRowCardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.3), 0 10px 10px -5px rgba(234, 179, 8, 0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute top-0 right-0 w-full h-1 bg-yellow-600"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.5 + (index + 3) * 0.2, duration: 0.8 }}
              />

              <motion.div
                className="relative mx-auto w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full border border-gray-300"
                variants={iconVariants}
                whileHover="hover"
              >
                {service.icon}
              </motion.div>

              <motion.h2
                className="mt-6 text-2xl h-8 font-semibold text-yellow-600"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 + (index + 3) * 0.1 }}
              >
                {service.category}
              </motion.h2>

              <ul className="mt-4 text-lg h-44 text-gray-800 list-disc list-inside text-left ml-6">
                {service.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    custom={idx}
                    variants={listItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "exit"}
                    whileHover={{ x: 5, color: "#ca8a04" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={service.link}
                className="mt-6 inline-block text-yellow-600 font-semibold text-lg hover:underline relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-yellow-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesSection


// "use client"

// import { useEffect, useState } from "react"
// import { FaChartLine, FaBullhorn, FaGlobe, FaDatabase, FaLaptop } from "react-icons/fa"
// import { motion } from "framer-motion"

// const services = [
//   {
//     category: "Market Expansion Services",
//     icon: <FaGlobe className="text-5xl text-yellow-600" />,
//     link: "services/MarketExpansion",
//     items: [
//       "Product Sourcing",
//       "Market Research & Insights",
//       "Sales & Marketing",
//       "Distribution & Logistics",
//       "After Sales Services",
//     ],
//   },
//   {
//     category: "Brand Activation & Experiential Marketing",
//     icon: <FaBullhorn className="text-5xl text-yellow-600" />,
//     link: "services/BrandActivation",
//     items: [
//       "Brand Ambassador Programmes",
//       "Events & Road Shows",
//       "Sampling",
//       "Shopper Marketing",
//       "Instore Activation",
//     ],
//   },
//   {
//     category: "Sales & Merchandising",
//     icon: <FaChartLine className="text-5xl text-yellow-600" />,
//     link: "services/SalesAndMerchandising",
//     items: [
//       "Field Sales",
//       "Merchandising",
//       "Retail Audit",
//       "Point of Sale Execution",
//       "Asset Optimisation",
//       "Product Management",
//     ],
//   },
//   {
//     category: "Data & Technology",
//     icon: <FaDatabase className="text-5xl text-yellow-600" />,
//     link: "/services/DataAndTechnology",
//     items: [
//       "Data & Operation Intelligence",
//       "Sales Force Automation Tools",
//       "Learning & Development Modules",
//       "CRM Solutions",
//     ],
//   },
//   {
//     category: "Digital Marketing",
//     icon: <FaLaptop className="text-5xl text-yellow-600" />,
//     link: "services/DigitalMarketing",
//     items: ["Content Marketing", "Social Media Marketing"],
//   },
// ]

// const ServicesSection = () => {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   }

//   const iconVariants = {
//     hidden: { scale: 0, rotate: -180 },
//     visible: {
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//       },
//     },
//     hover: {
//       scale: 1.1,
//       rotate: 5,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   }

//   const listItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.4,
//       },
//     }),
//   }

//   const titleVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         delay: 0.1,
//       },
//     },
//   }

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-8 md:px-20 lg:px-36 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-yellow-200 opacity-20"
//             style={{
//               width: Math.random() * 100 + 50,
//               height: Math.random() * 100 + 50,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, Math.random() * 100 - 50],
//               x: [0, Math.random() * 100 - 50],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 15,
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={titleVariants}
//         >
//           <motion.h2
//             className="text-6xl font-semibold mb-6 text-yellow-600 uppercase tracking-wide drop-shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             Our Services
//           </motion.h2>
//           <motion.div
//             className="w-24 h-1 bg-yellow-600 mx-auto"
//             initial={{ width: 0 }}
//             animate={{ width: 96 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           />
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-12"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//         >
//           {services.slice(0, 3).map((service, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-yellow-300 shadow-gray-300 overflow-hidden"
//               variants={cardVariants}
//               whileHover={{
//                 y: -10,
//                 boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.3), 0 10px 10px -5px rgba(234, 179, 8, 0.2)",
//                 transition: { duration: 0.3 },
//               }}
//             >
//               <motion.div
//                 className="absolute top-0 left-0 w-full h-1 bg-yellow-600"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
//               />

//               <motion.div
//                 className="relative mx-auto w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full border border-gray-300"
//                 variants={iconVariants}
//                 whileHover="hover"
//               >
//                 {service.icon}
//               </motion.div>

//               <motion.h3
//                 className="mt-6 text-2xl h-16 font-semibold text-yellow-600"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7 + index * 0.1 }}
//               >
//                 {service.category}
//               </motion.h3>

//               <ul className="mt-4 h-44 text-lg text-gray-800 list-disc list-inside text-left ml-6">
//                 {service.items.map((item, idx) => (
//                   <motion.li
//                     key={idx}
//                     custom={idx}
//                     variants={listItemVariants}
//                     initial="hidden"
//                     animate="visible"
//                     whileHover={{ x: 5, color: "#ca8a04" }}
//                   >
//                     {item}
//                   </motion.li>
//                 ))}
//               </ul>

//               <motion.a
//                 href={service.link}
//                 className="mt-6 inline-block text-yellow-600 font-semibold text-lg hover:underline relative"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Learn more
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-yellow-600"
//                   initial={{ width: 0 }}
//                   whileHover={{ width: "100%" }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.a>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           className="flex flex-wrap justify-center gap-12 mt-12"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//         >
//           {services.slice(3).map((service, index) => (
//             <motion.div
//               key={index}
//               className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] sm:h-[64vh] relative bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-yellow-300 shadow-gray-300 overflow-hidden"
//               variants={cardVariants}
//               whileHover={{
//                 y: -10,
//                 boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.3), 0 10px 10px -5px rgba(234, 179, 8, 0.2)",
//                 transition: { duration: 0.3 },
//               }}
//             >
//               <motion.div
//                 className="absolute top-0 right-0 w-full h-1 bg-yellow-600"
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ delay: 0.5 + (index + 3) * 0.2, duration: 0.8 }}
//               />

//               <motion.div
//                 className="relative mx-auto w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full border border-gray-300"
//                 variants={iconVariants}
//                 whileHover="hover"
//               >
//                 {service.icon}
//               </motion.div>

//               <motion.h3
//                 className="mt-6 text-2xl h-8 font-semibold text-yellow-600"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.7 + (index + 3) * 0.1 }}
//               >
//                 {service.category}
//               </motion.h3>

//               <ul className="mt-4 text-lg h-44 text-gray-800 list-disc list-inside text-left ml-6">
//                 {service.items.map((item, idx) => (
//                   <motion.li
//                     key={idx}
//                     custom={idx}
//                     variants={listItemVariants}
//                     initial="hidden"
//                     animate="visible"
//                     whileHover={{ x: 5, color: "#ca8a04" }}
//                   >
//                     {item}
//                   </motion.li>
//                 ))}
//               </ul>

//               <motion.a
//                 href={service.link}
//                 className="mt-6 inline-block text-yellow-600 font-semibold text-lg hover:underline relative"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Learn more
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-0.5 bg-yellow-600"
//                   initial={{ width: 0 }}
//                   whileHover={{ width: "100%" }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.a>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default ServicesSection

