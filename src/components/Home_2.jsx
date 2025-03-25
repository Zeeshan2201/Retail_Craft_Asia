"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Mem_1 from "../assets/Home_Hero/Mem_1.png"

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
      className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-8 md:py-16 mb-10 bg-gradient-to-b from-yellow-50 to-gray-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-200 opacity-20 blur-3xl"
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
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-yellow-400 opacity-10 blur-3xl"
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
      <div className="w-full md:max-w-2xl mb-12 md:mb-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="uppercase tracking-wide drop-shadow-lg text-3xl md:text-5xl font-semibold text-yellow-600 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tailored Business and 
          </motion.h3>

          <motion.h2
            className="uppercase tracking-wide drop-shadow-lg text-3xl md:text-5xl font-semibold text-gray-900 mt-2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
             Marketing Solutions for {" "}
            <motion.span
              className="mt-4 text-yellow-700"
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
          </motion.h2>

          <motion.p
            className="mt-8 text-base md:text-lg text-gray-700 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            We provide expert Consulting, Marketing, Retail and Execution services to help businesses optimize operations, enhance customer experience,
            and drive growth in the competitive retail industry.
          </motion.p>
        </motion.div>
      </div>

      {/* Right Content - Single Image with animations */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end h-[300px] md:h-[60vh] z-10">
        <motion.div
          className="relative w-[300px] md:w-[40vw] h-full flex justify-center items-center"
          style={{ y: imageY }}
        >
          <motion.div
            className="absolute w-80 h-80 md:w-96 md:h-96 opacity-30 blur-3xl rounded-full"
            // className="absolute w-80 h-80 md:w-96 md:h-96 bg-yellow-300 opacity-30 blur-3xl rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: -5 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={Mem_1 || "/placeholder.svg"}
              alt="Industry Expert"
              className="w-72 h-72 md:w-96 md:h-96 shadow-lg border-8 border-white rounded-3xl  transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default IndustrySection;

