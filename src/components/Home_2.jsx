"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Mem_1 from "../assets/Home_Hero/Mem_1.png"
import { Link } from "react-router-dom"

const IndustrySection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 mb-6 sm:mb-8 md:mb-10 bg-gradient-to-b from-yellow-50 to-gray-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-yellow-200 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full bg-yellow-400 opacity-10 blur-3xl"
        style={{ y: backgroundY }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Left Content */}
      <div className="w-full lg:max-w-2xl mb-8 sm:mb-12 lg:mb-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
         <motion.h2
  className="uppercase tracking-wide drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#D18B00] text-center lg:text-left"
  initial={{ opacity: 0, x: -50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Tailored Business and Marketing Solutions
</motion.h2>


         <motion.h3
  className="uppercase tracking-wide drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mt-2 text-center lg:text-left"
  initial={{ opacity: 0, x: -50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  for{" "}
  <motion.span
    className="mt-4 text-[#D18B00] drop-shadow-md"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
    transition={{
      duration: 0.8,
      delay: 0.6,
      type: "spring",
      stiffness: 100,
    }}
  >
    DRIVING GROWTH
  </motion.span>
</motion.h3>


          <motion.p
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 text-center lg:text-left leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            We provide expert{" "}
            <Link to="/services/market-expansion" className="text-yellow-600 text-bold hover:underline">
              CONSULTING
            </Link>
            ,{" "}
            <Link to="/services/digital-marketing" className="text-yellow-600 text-bold hover:underline">
              MARKETING
            </Link>
            ,{" "}
            <Link to="/services/sales-and-merchandising" className="text-yellow-600 text-bold hover:underline">
              RETAIL
            </Link>{" "}
            and{" "}
            <Link to="/services/brand-activation" className="text-yellow-600 text-bold hover:underline">
              EXECUTION
            </Link>{" "}
            services to help businesses optimize operations, enhance customer experience
            and drive growth in the competitive retail industry.
          </motion.p>
        </motion.div>
      </div>

{/* Right Content - Single Image with premium animation */}
<div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end h-[250px] sm:h-[300px] md:h-[400px] lg:h-[60vh] z-10">
  <motion.div
    className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[40vw] h-full flex justify-center items-center"
  >
    {/* Premium Glassmorphic Background */}
    <motion.div
      className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      initial={{ scale: 0.95, opacity: 0.7 }}
      animate={{ scale: [0.95, 1.02, 0.98], opacity: [0.7, 0.85, 0.75] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, opacity: 0.9, transition: { duration: 0.4 } }}
    />

    {/* Image with faster entrance + smooth floating */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
      whileHover={{
        scale: 1.04,
        rotate: 1,
        boxShadow: "0px 30px 60px rgba(255,215,0,0.6)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      <motion.img
        src={Mem_1 || "/placeholder.svg"}
        alt="Industry Expert"
        className="w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl border border-white/30 shadow-2xl object-cover transition-all duration-500"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </motion.div>
  </motion.div>
</div>
    </motion.section>
  )
}

export default IndustrySection

