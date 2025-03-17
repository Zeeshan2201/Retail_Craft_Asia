import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { WiCloud } from "react-icons/wi";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r bg-gray-50 text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>

      {/* Floating Clouds */}
      <motion.div 
        className="absolute top-5 left-5 text-gray-300 text-9xl"
        animate={{ x: [0, 30, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <WiCloud />
      </motion.div>
      <motion.div 
        className="absolute top-10 right-10 text-gray-300 text-10xl"
        animate={{ x: [-25, 0, -20], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <WiCloud />
      </motion.div>
      <motion.div 
        className="absolute bottom-5 left-1/4 text-gray-300 text-8xl"
        animate={{ y: [0, 15, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <WiCloud />
      </motion.div>
      <motion.div 
        className="absolute bottom-16 right-1/3 text-gray-300 text-9xl"
        animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <WiCloud />
      </motion.div>
      <motion.div 
        className="absolute top-1/2 left-10 text-gray-300 text-7xl"
        animate={{ x: [0, 20, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <WiCloud />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="max-w-4xl relative z-10"
      >
        <h1 className="text-5xl font-bold text-[#C8A961] md:text-6xl">
          Elevate Your Retail Strategy with 
          <span className="text-[#7A622E]"> Retail Craft Asia</span>
        </h1>
        <p className="mt-4 text-lg text-gray-800 md:text-xl">
          Expert consulting services to transform your retail business with innovative solutions and insights.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/services">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#C8A961] text-white font-semibold rounded-lg shadow-md flex items-center gap-2 hover:bg-[#A78A5D] transition"
          >
            Get Started <FaArrowRight />
          </motion.button>
          </Link>
          <Link to="/about">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg shadow-md flex items-center gap-2 hover:bg-gray-300 transition"
          >
            Learn More <FaPlay />
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
