
// import { FaHandshake, FaNetworkWired, FaUserCheck, FaTools, FaChartLine, FaLaptopCode } from "react-icons/fa";

// const whyUsData = [
//   {
//     icon: <FaHandshake className="text-yellow-600 text-5xl" />, 
//     title: "Long Term Strategic Partnership", 
//     description: "Building lasting partnerships for sustainable growth and innovation in retail across Asia."
//   },
//   {
//     icon: <FaNetworkWired className="text-yellow-600 text-5xl" />, 
//     title: "Deep Industry Knowledge and Global Network", 
//     description: "Leveraging deep industry expertise and a vast global network for strategic growth."
//   },
//   {
//     icon: <FaUserCheck className="text-yellow-600 text-5xl" />, 
//     title: "Client Centric Focus", 
//     description: "Prioritizing client needs with tailored solutions for lasting success."
//   },
//   {
//     icon: <FaTools className="text-yellow-600 text-5xl" />, 
//     title: "Tailored Made Solutions", 
//     description: "Crafting tailor-made solutions to drive business excellence and growth."
//   },
//   {
//     icon: <FaChartLine className="text-yellow-600 text-5xl" />, 
//     title: "Data Driven Approach", 
//     description: "Empowering decisions with a data-driven approach for measurable success."
//   },
//   {
//     icon: <FaLaptopCode className="text-yellow-600 text-5xl" />, 
//     title: "Inbuilt Technology Platforms", 
//     description: "Enhancing business efficiency with inbuilt technology platforms."
//   }
// ];

// const WhyUs = () => {
//   return (
//     <section className="py-16 px-8 max-w-7xl mx-auto text-center">
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-16 text-yellow-600 uppercase tracking-wide drop-shadow-lg">
//         Why Choose Us
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {whyUsData.map((item, index) => (
//           <div key={index} className="flex w-[90%] sm:w-[80%] md:w-[26vw] mx-auto h-auto px-4 py-6 flex-col items-center gap-6 group">
//             <div className="bg-gray-100 p-6 rounded-full transition-transform duration-300 group-hover:scale-110 shadow-lg">
//               {item.icon}
//             </div>
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors text-center">
//               {item.title}
//             </h3>
//             <p className="text-md sm:text-lg text-gray-700 max-w-md leading-relaxed text-center">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyUs;


"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

// We'll use the same icons but import them from Lucide React
import { Handshake, Network, UserCheck, Wrench, BarChart3, Laptop } from "lucide-react"

const whyUsData = [
  {
    icon: <Handshake className="w-12 h-12" />,
    title: "Long Term Strategic Partnership",
    description: "Building lasting partnerships for sustainable growth and innovation in retail across Asia.",
  },
  {
    icon: <Network className="w-12 h-12" />,
    title: "Deep Industry Knowledge and Global Network",
    description: "Leveraging deep industry expertise and a vast global network for strategic growth.",
  },
  {
    icon: <UserCheck className="w-12 h-12" />,
    title: "Client Centric Focus",
    description: "Prioritizing client needs with tailored solutions for lasting success.",
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: "Tailored Made Solutions",
    description: "Crafting tailor-made solutions to drive business excellence and growth.",
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "Data Driven Approach",
    description: "Empowering decisions with a data-driven approach for measurable success.",
  },
  {
    icon: <Laptop className="w-12 h-12" />,
    title: "Inbuilt Technology Platforms",
    description: "Enhancing business efficiency with inbuilt technology platforms.",
  },
]

const FeatureCard = ({ icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.25, 0.75, 1],
        },
      },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-xl"
    >
      <motion.div
        className="bg-white h-full shadow-lg rounded-xl p-8 flex flex-col items-center relative z-10"
        animate={{
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(245, 158, 11, 0.2), 0 10px 10px -5px rgba(245, 158, 11, 0.1)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <motion.div
          className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-full mb-6 relative"
          variants={iconVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          <motion.div
            className="text-yellow-600 absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: isHovered ? [0, 1, 0] : 0,
              scale: isHovered ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              repeatDelay: 0.5,
            }}
          >
            {icon}
          </motion.div>
          <motion.div className="text-yellow-600 relative z-10">{icon}</motion.div>
        </motion.div>

        <motion.h3
          className="text-2xl text-center font-semibold mb-3 text-gray-900"
          animate={{
            color: isHovered ? "#d97706" : "#111827",
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="h-1 w-12 bg-yellow-400 rounded-full mb-4 mx-auto"
          animate={{
            width: isHovered ? 100 : 48,
            backgroundColor: isHovered ? "#f59e0b" : "#facc15",
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.p
          className="text-gray-700 text-lg text-center leading-relaxed"
          animate={{
            opacity: isHovered ? 1 : 0.9,
          }}
        >
          {description}
        </motion.p>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
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
  )
}

export default function AnimatedWhyUs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const titleControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      titleControls.start("visible")
    }
  }, [isInView, titleControls])

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-40 left-20 w-72 h-72 rounded-full bg-yellow-100 opacity-30 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-yellow-200 opacity-20 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={titleVariants} initial="hidden" animate={titleControls} className="text-center mb-20">
          <motion.h2
            className="text-5xl md:text-6xl font-semibold text-yellow-600 uppercase tracking-wide"
            animate={{
              textShadow: [
                "0 4px 6px rgba(0, 0, 0, 0.1)",
                "0 6px 8px rgba(0, 0, 0, 0.15)",
                "0 4px 6px rgba(0, 0, 0, 0.1)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            className="h-1.5 w-40 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-6 mx-auto"
            animate={{
              width: ["10rem", "16rem", "10rem"],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-700 text-xl mt-6 max-w-2xl mx-auto"
          >
            Partner with us for innovative solutions that drive sustainable growth and excellence
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {whyUsData.map((item, index) => (
            <FeatureCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-yellow-300 opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 2,
          }}
        />
      ))}
    </section>
  )
}

