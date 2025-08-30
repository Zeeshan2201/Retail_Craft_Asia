import React from "react";
import Carousel from "./Carousel";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const ServiceHero = () => {
  return (
    <div className="flex pt-32 md:flex-row justify-center items-center flex-col-reverse text-black pb-16 md:pl-6 md:mr-0 lg:px-24 bg-gray-50 overflow-hidden">
      
      {/* Left Section (Text) */}
      <div className="md:w-[50%] w-[100%] p-4 items-center">
        <div className="mr-6">
          {/* Heading */}
          <h1 className="font-bold text-4xl md:text-5xl leading-tight">
            <TypeAnimation
              sequence={[
                "Driving, Growth & Innovation for Your Business",
                2000,
              ]}
              speed={50}
              cursor={true}
              repeat={0}
              className="text-transparent bg-clip-text text-yellow-600"
            />
          </h1>

          {/* Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1.2, ease: "easeOut" }}
            className="text-lg text-black mt-4 leading-relaxed"
          >
            We provide comprehensive solutions tailored to boost your brand’s
            visibility, optimize operations, and maximize sales. From expert
            field sales and merchandising to cutting-edge digital marketing, we
            help businesses grow with data-driven strategies and seamless
            execution.
          </motion.div>

          {/* List */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1.2, ease: "easeOut" }}
            className="mt-6 space-y-2 text-lg list-disc pl-5"
          >
            <li><b>End-to-end business solutions tailored to your needs</b></li>
            <li><b>Experienced professionals with proven success in multiple industries</b></li>
            <li><b>Data-driven strategies for measurable growth</b></li>
            <li><b>Cutting-edge technology for seamless operations</b></li>
          </motion.ul>
        </div>
      </div>

      {/* Right Section - 3D Elevated Image with Bounce */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateX: 10, rotateY: 15 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1 }}
        className="md:ml-20 p-4 md:w-[50%] w-[100%]"
      >
        <motion.img
          src="/servicehero.jpeg"
          alt="servicehero"
          className="rounded-3xl shadow-2xl shadow-gray-400"
          style={{ transformStyle: "preserve-3d" }} // for 3D elevated feel
          animate={{ y: [0, -10, 0] }} // subtle bounce
          transition={{ delay: 2, repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default ServiceHero;