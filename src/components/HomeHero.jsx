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
    <section className="relative flex items-center justify-center h-screen text-center px-4 sm:px-6 lg:px-8 overflow-hidden" role="banner">
    {/* <section className="relative  flex items-center  justify-center h-screen bg-gradient-to-tl from-[#f1ecd0] via-white to-white text-center px-6 overflow-hidden"> */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute top-16 md:top-20 left-0 w-full h-full object-cover z-10 opacity-90"
      aria-label="Background video showing retail business environment"
    >
      <source src="/Hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Black Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 via-black/10 to-transparent z-20"></div>
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
        className="absolute top-5 left-2 sm:left-5 text-gray-300 text-4xl sm:text-6xl md:text-8xl lg:text-9xl"
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
        className="absolute top-8 sm:top-10 right-2 sm:right-10 text-gray-300 text-5xl sm:text-7xl md:text-8xl lg:text-[120px]"
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
        className="absolute bottom-5 left-1/4 text-gray-300 text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
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
        className="absolute bottom-12 sm:bottom-16 right-1/4 sm:right-1/3 text-gray-300 text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
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
        className="absolute top-1/2 left-2 sm:left-10 text-gray-300 text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
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
        className="absolute top-1/3 right-4 sm:right-20 text-gray-300 text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
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
        className="absolute bottom-1/4 left-4 sm:left-20 text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
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
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl relative z-30 px-4 sm:px-6">
        {/* Main heading with text coming from left */}

<motion.h1
  variants={item}
  initial={{ opacity: 0, scale: 0.9, y: 30 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
className="uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold 
  bg-[linear-gradient(180deg,#FFD700_0%,#FFB700_30%,#E6A700_50%,#FFCC00_70%,#FFD700_100%)] 
  bg-clip-text text-transparent 
  drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] 
  [text-shadow:0_1px_0_#B8860B,0_2px_2px_rgba(0,0,0,0.6)] 
  text-center leading-tight sm:leading-normal"
>
  Transforming Retail Businesses Across





  {/* Highlighted "Asia" with realistic effect */}
  <motion.span
    className="text-part right font-extrabold text-white ml-1 sm:ml-2 drop-shadow-[0_0_5px_rgba(255,223,0,0.8)] block sm:inline"
    initial={{ x: "120%", opacity: 0, scale: 0.6, rotate: -10 }}
    whileInView={{
      x: 0,
      opacity: 1,
      scale: [0.8, 1.1, 1], // bounce effect
      rotate: [0, 3, 0],    // small realistic tilt
    }}
    transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    ASIA
  </motion.span>
</motion.h1>

<motion.p
  className="font-semibold text-yellow-600 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 flex justify-center items-center px-2 sm:px-0"
  initial={{ opacity: 1 }}
>
  <motion.span
    className="overflow-hidden whitespace-nowrap border-r-2 border-yellow-600 pr-1   [text-shadow:0_1px_0_#B8860B,0_2px_2px_rgba(0,0,0,0.6)] "
    initial={{ width: 0 }}
    animate={{ width: "30ch" }} // Full length for "Delivering Growth, Consistently."
    transition={{
      duration: 4,
      ease: "linear",
    }}
  >
    {"Delivering Growth, Consistently.".split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.12 }} // Adjust speed per character
      >
        {char}
      </motion.span>
    ))}
  </motion.span>

  {/* Blinking Cursor */}
  {/* <motion.span
    className="ml-1 text-yellow-600"
    initial={{ opacity: 0 }}
    animate={{ opacity: [1, 0, 1] }}
    transition={{ delay: 4, repeat: Infinity, duration: 0.7 }}
  >
    |
  </motion.span> */}
</motion.p>

        {/* Paragraph with text coming from left */}
        <motion.p variants={item} className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#D18B00] [text-shadow:0_1px_0_#B8860B,0_2px_2px_rgba(0,0,0,0.6)] px-2 sm:px-0">
          Expert consulting services to transform your retail business with innovative solutions and insights.
        </motion.p>

        {/* Buttons with enhanced animations */}
        <motion.div variants={item} className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6">
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
  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-3xl shadow-md flex items-center gap-2 transition-all duration-500 bg-[length:200%_auto] hover:bg-[position:right_center] hover:shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
>
  <span>Get Started</span>
  <motion.span
    animate={{
      x: [0, 5, 0],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    }}
  >
    <FaArrowRight />
  </motion.span>
</motion.button>
          </Link>
          <Link to="/about">
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{
    opacity: 0.8, // reduced opacity at rest
    y: 0,
    transition: { delay: 1.8, duration: 0.5 },
  }}
  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200/80 text-gray-900 font-semibold rounded-3xl shadow-md flex items-center gap-2 border border-gray-600 hover:bg-gray-100 hover:opacity-100 hover:shadow-lg transition text-sm sm:text-base w-full sm:w-auto justify-center"
>
  <span>Learn More</span>
  <motion.span
    animate={{
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    }}
  >
    <FaPlay />
  </motion.span>
</motion.button>
          </Link>
        </motion.div>

        {/* Floating highlight element for extra visual interest */}
        <motion.div
          className="absolute -z-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-yellow-300/20 blur-3xl"
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

