"use client"
import { motion } from "framer-motion"
import { FaArrowRight, FaPlay } from "react-icons/fa"
import { WiCloud } from "react-icons/wi"
import { Link } from "react-router-dom"
import HoverAnimation from "./HoverAnimation"
import HoveAnimationRight from "./HoveAnimationRight"
import { div } from "framer-motion/client"
// import VantaBirds from "./VantaBirds"

const HeroSection = () => {
  // Animation variants for staggered text animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  // Button hover animation
  const buttonHover = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  }

  return (
    <div className=" w-[100%]">
    <section className="relative  flex items-center  justify-center h-screen  text-center px-6 overflow-hidden">
    {/* <section className="relative  flex items-center  justify-center h-screen bg-gradient-to-tl from-[#f1ecd0] via-white to-white text-center px-6 overflow-hidden"> */}
     
      {/* Animated background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10"
        initial={{ scale: 1.1 }}
        animate={{
          scale: 1,
          transition: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
        }}
      ></motion.div>

      {/* Floating Clouds with more dynamic animations */}
      <motion.div
        className="absolute top-5 left-5 text-gray-300 text-9xl"
        initial={{ opacity: 0 }}
        animate={{
          x: [0, 30, 0],
          y: [0, 10, 0],
          opacity: [0.6, 0.9, 0.6],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <WiCloud />
      </motion.div>

      <motion.div
        className="absolute top-10 right-10 text-gray-300 text-[120px]"
        initial={{ opacity: 0 }}
        animate={{
          x: [-25, 0, -20],
          y: [0, -15, 0],
          opacity: [0.7, 1, 0.7],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <WiCloud />
      </motion.div>

      <motion.div
        className="absolute bottom-5 left-1/4 text-gray-300 text-8xl"
        initial={{ opacity: 0 }}
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <WiCloud />
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-1/3 text-gray-300 text-9xl"
        initial={{ opacity: 0 }}
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.6, 0.9, 0.6],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <WiCloud />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10 text-gray-300 text-7xl"
        initial={{ opacity: 0 }}
        animate={{
          x: [0, 20, 0],
          y: [0, -5, 0],
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <WiCloud />
      </motion.div>

      {/* Additional floating clouds for more dynamic feel */}
      <motion.div
        className="absolute top-1/3 right-20 text-gray-300 text-8xl"
        initial={{ opacity: 0 }}
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
          opacity: [0.5, 0.8, 0.5],
          rotate: [0, -2, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.7,
        }}
      >
        <WiCloud />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-20 text-gray-300 text-6xl"
        initial={{ opacity: 0 }}
        animate={{
          x: [0, 10, 0],
          y: [0, -8, 0],
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        <WiCloud />
      </motion.div>

      {/* Hero Content with staggered animations */}
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl relative z-10">
        {/* Main heading with text coming from left */}
        <motion.h1 variants={item} className="text-5xl font-semibold md:text-6xl pb-6">
          {/* Elevate Your Retail Strategy with */}
          Transforming Retail Businesses Across 

          <motion.span
            className="font-bold text-yellow-600 mb-6 inline-block ml-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 1.2, duration: 0.5, ease: "easeOut" },
            }}
          >
            {/* Retail Craft Asia */}
            Asia
          </motion.span>
        </motion.h1>

        {/* Subheading with text coming from left */}
        <motion.h2 variants={item} className="font-semibold text-yellow-600 text-3xl mt-2">
          Delivering Growth,
          <motion.span
            className="font-semibold text-yellow-600 text-3xl ml-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.4, duration: 0.5 },
            }}
          >
             Consistently.
          </motion.span>
        </motion.h2>

        {/* Paragraph with text coming from left */}
        <motion.p variants={item} className="mt-4 text-lg text-gray-800 md:text-xl">
          Expert consulting services to transform your retail business with innovative solutions and insights.
        </motion.p>

        {/* Buttons with enhanced animations */}
        <motion.div variants={item} className="mt-6 flex justify-center gap-4">
          <Link to="/services">
            <motion.button
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.6, duration: 0.5 },
              }}
              className="px-6 mr-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-3xl shadow-md flex items-center gap-2 hover:bg-[#A78A5D] transition "
            >
              <span>Get Started</span>
              <motion.span
                animate={{
                  x: [0, 5, 0],
                  transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.button>
          </Link>
          <Link to="/about">
            <motion.button
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.8, duration: 0.5 },
              }}
              className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-3xl shadow-md flex items-center gap-2 hover:bg-gray-300 transition"
            >
              <span>Learn More</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <FaPlay />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating highlight element for extra visual interest */}
        <motion.div
          className="absolute -z-10 w-64 h-64 rounded-full bg-yellow-300/20 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            x: [-50, 50, -50],
            y: [-20, 20, -20],
            scale: [0.8, 1, 0.8],
            transition: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
      </motion.div>
    </section>
    </div>
  )
}

export default HeroSection

