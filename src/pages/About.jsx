import React, { useEffect, useRef, useState } from "react";
import SEOHelmet from '../components/SEOHelmet';
import "../components/Css/about.css";
import { motion } from "framer-motion";

import growthImage from "../assets/growth.svg";
import integrityImage from "../assets/integrity.svg";
import entrepreneurshipImage from "../assets/entrepreneurship.svg";
import collaborationImage from "../assets/collaboration.svg";
import empowermentImage from "../assets/empowerment.svg";
import sustainabilityImage from "../assets/sustainability.svg";

import img from "../assets/About/img.png";
import images_2 from "../assets/About/images_2.png";

import MangTeam from "../components/MangTeam";
import visionSvg from "../assets/vision.svg";
import missionSvg from "../assets/mission.svg";

const About = () => {
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);

  const [selectedImage, setSelectedImage] = useState("mems_1"); // ✅ FIXED (define selectedImage)

  const visionSectionRef = useRef(null);
  const missionSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisionVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (visionSectionRef.current) {
      observer.observe(visionSectionRef.current);
    }

    return () => {
      if (visionSectionRef.current) {
        observer.unobserve(visionSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsMissionVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (missionSectionRef.current) {
      observer.observe(missionSectionRef.current);
    }

    return () => {
      if (missionSectionRef.current) {
        observer.unobserve(missionSectionRef.current);
      }
    };
  }, []);

  const principles = [
    {
      title: "Growth",
      description:
        "Driving innovation and expansion to meet evolving consumer needs.",
      image: growthImage,
    },
    {
      title: "Integrity",
      description:
        "Ensuring transparency, quality, and trust in every product we deliver.",
      image: integrityImage,
    },
    {
      title: "Entrepreneurship",
      description:
        "Encouraging agility and forward-thinking to stay ahead in the market.",
      image: entrepreneurshipImage,
    },
    {
      title: "Collaboration",
      description:
        "Building strong partnerships with suppliers, retailers, and customers.",
      image: collaborationImage,
    },
    {
      title: "Empowerment",
      description:
        "Enabling employees and stakeholders to make impactful decisions.",
      image: empowermentImage,
    },
    {
      title: "Sustainability",
      description:
        "Committed to eco-friendly practices and responsible sourcing.",
      image: sustainabilityImage,
    },
  ];

  const cols = 3;
  

  return (
    <>
      <SEOHelmet
        title="About Us - Retail Craft Asia | Strategic Retail Partners"
        description="Learn about Retail Craft Asia's mission, vision, and foundation principles. We are your strategic partners for growth, transformation, and expansion in the retail industry across Asia."
        keywords="about retail craft asia, retail consultancy team, retail transformation partners, retail growth strategy, Asia retail consulting"
        url="https://retailcraftasia.com/about"
        openGraph={{
          title: "About Us - Retail Craft Asia",
          description: "Learn about Retail Craft Asia's mission, vision, and core principles driving innovation and sustainability in the retail industry.",
          image: "../assets/About/img.png",
          url: "https://www.retailcraftasia.com/about"
        }}
        twitter={{
          card: "summary_large_image",
          title: "About Us - Retail Craft Asia",
          description: "Learn about Retail Craft Asia's mission, vision, and core principles driving innovation and sustainability in the retail industry.",
          image: "../assets/About/img.png"
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Retail Craft Asia",
          "url": "https://www.retailcraftasia.com",
          "logo": "../assets/logo.png",
          "sameAs": [
            "https://www.facebook.com/RetailCraftAsia",
            "https://www.linkedin.com/company/retailcraftasia"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "TH",
            "addressRegion": "Bangkok"
          }
        }}
      />

      {/* WHO WE ARE */}
      <div className="foundation-principles-container bg-gradient-to-b from-gray-50 via-yellow-50/50 to-gray-50">
        <div className="text-center font-semibold sm:mt-20 mb-5 pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-5">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mt-3 sm:mt-4 md:mt-5 leading-tight"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: window.innerWidth < 768 ? 0.8 : 1.5, ease: "easeOut" }}
          >
            <span className="text-yellow-600">
              We Are Your Strategic Partner For <br />
            </span>
            <span className="text-yellow-700">
              Growth, Transformation And Expansion
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-4 sm:mt-5 md:mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-0 leading-relaxed"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: window.innerWidth < 768 ? 0.6 : 1.5, delay: window.innerWidth < 768 ? 0.2 : 0.5, ease: "easeOut" }}
          >

           At Retail Craft Asia, we are more than just service providers—we are your strategic partners in business growth and brand transformation. With deep expertise, competency and industry knowledge we help you expand your market reach, optimize supply chains, enhance brand visibility, and drive consumer engagement.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-4 sm:mt-5 md:mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-0 leading-relaxed"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: window.innerWidth < 768 ? 0.7 : 1.5, delay: window.innerWidth < 768 ? 0.4 : 1, ease: "easeOut" }}
          >
            Our team of industry experts works closely with brands to understand their unique challenges and craft tailored strategies for success. Whether you are looking to break into new markets, refine your branding, or streamline your operations, we provide the insights and execution needed to achieve sustainable profitable growth.
          </motion.p>
        </div>

        <div className="w-full py-12 sm:py-16 md:py-20 bg-transparent relative flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-5">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mt-8 sm:mt-10 md:mt-12 text-yellow-600 leading-tight"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: window.innerWidth < 768 ? 0.7 : 1.5, delay: window.innerWidth < 768 ? 0.3 : 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Our expertise helps businesses build meaningful connections that drive
            success.
          </motion.h2>

          {/* User Image with Glow */}
<div className="relative mt-12 sm:mt-16 md:mt-20">
  <motion.div
  className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl mx-auto relative z-10"
  initial={{ opacity: 0, scale: 0.8, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: window.innerWidth < 768 ? 0.8 : 1.5, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.5 }}
>
  <img
    src={`/AboutCircle/${selectedImage}.png`}
    alt="User"
    className="w-full h-full object-cover"
  />
</motion.div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-yellow-50rounded-full blur-3xl opacity-30 animate-pulse"></div>

          {/* Floating Icons with Animation */}
          <button
            onClick={() => {
              setSelectedImage("mems_1");
            }}
            className="absolute hover:shadow-lg hover:-translate-y-2 hover:scale-110 hover:shadow-yellow-600/80 -top-12 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-yellow-600 transition-transform duration-200 ease-in-out hover:scale-125"
            >
              <circle cx="8" cy="20" r="2"></circle>
              <circle cx="18" cy="20" r="2"></circle>
              <path d="M2 3h4l3.6 10.6a2 2 0 0 0 2 1.4h6.8a2 2 0 0 0 2-1.5L22 6H5"></path>
            </svg>
          </button>

          <button
            onClick={() => {
              setSelectedImage("mems_5");
            }}
            className="absolute hover:-translate-y-2 hover:scale-110  hover:shadow-lg hover:shadow-yellow-600/80 top-10 -left-10 sm:-left-14 w-10 h-10 sm:w-14 sm:h-14 bg-yellow rounded-full flex items-center justify-center shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-yellow-600 hover:scale-125 transition-transform duration-200 ease-in-out"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              setSelectedImage("mems_3");
            }}
            className="absolute hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-yellow-600/80 top-10 -right-10 sm:-right-14 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-yellow-600 hover:scale-125 transition-transform duration-200 ease-in-out"
            >
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
              <path d="M12 3v6"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              setSelectedImage("mems_8");
            }}
            className="absolute hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-yellow-600/80 bottom-10 -left-10 sm:-left-14 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md"
          >            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 -960 960 960" fill="#ca8a04">
      <path d="M280-320q0-33 23.5-56.5T360-400q33 0 56.5 23.5T440-320q0 33-23.5 56.5T360-240q-33 0-56.5-23.5T280-320Zm200-80h240q33 0 56.5 23.5T800-320v280h-80v-80H240v80h-80v-400h80v240h240v-200Zm150-40L512-654 406-548l10 68-30 30-47-88-88-48 30-30 68 9 106-106-215-117 38-38 264 68 108-108q12-12 29-12t29 12q12 12 12 29t-12 29L600-742l68 264-38 38Zm90 240v-120H560v120h160Z"/>
    </svg>
          </button>
          <button
            onClick={() => {
              setSelectedImage("mems_4");
            }}
            className="absolute hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-yellow-600/80 bottom-10 -right-10 sm:-right-14 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md"
          >            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-yellow-600 hover:scale-125 transition-transform duration-200 ease-in-out"
            >
              <rect x="3" y="6" width="18" height="12" rx="2"></rect>
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <path d="M12 10v4"></path>
              <path d="M10 12h4"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              setSelectedImage("mems_7");
            }}
            className="absolute hover:shadow-lg hover:-translate-y-2 hover:scale-110 hover:shadow-yellow-600/80 top-[100%] left-[25%] transform -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-yellow-600 hover:scale-125 transition-transform duration-200 ease-in-out"
            >
              <rect width="20" height="14" x="2" y="3" rx="2"></rect>
              <line x1="8" x2="16" y1="21" y2="21"></line>
              <line x1="12" x2="12" y1="17" y2="21"></line>
            </svg>
          </button>
          <button
            onClick={() => {
              setSelectedImage("mems_6");
            }}
            className="absolute hover:shadow-lg hover:-translate-y-2 hover:scale-110 hover:shadow-yellow-600/80 top-[100%] left-[75%] transform -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-yellow-600 transition-transform duration-200 ease-in-out group-hover:scale-125"
            >
              <path d="M9 21h6" />
              <path d="M10 21v-6m4 6v-6" />
              <path d="M7 15h10" />
              <path d="M12 15V8" />
              <path d="M8 8h8l-1-4h-6z" />
            </svg>
          </button>
        </div>


          {/* VISION & MISSION */}
          <div className="px-6 py-20 text-center bg-transparent">
<h2 className="mt-20 text-4xl sm:text-5xl font-semibold text-[#D18B00]">
  Our Vision
</h2>

            <p className="mt-6 text-lg sm:text-xl text-black font-medium max-w-4xl mx-auto">
              To be the trusted business partners for Market expansion and
              Execution services for Businesses in Asia.
            </p>

            {/* Vision Values */}
            <div className="flex flex-wrap sm:grid sm:grid-cols-3 justify-center gap-10 mt-16">
              {[
               {
  icon: (
    <img 
      src="/rocket.gif" 
      alt="Innovation" 
      className="w-16 h-16   inline-block" 
    />
  ),
  title: "Innovation",
  desc: "We embrace change to create a better future, pushing the boundaries of technology and creativity.",
},
             {
  icon: (
    <img 
      src="/handshake.gif" 
      alt="Collaboration" 
      className="w-16 h-16 inline-block" 
    />
  ),
  title: "Collaboration",
  desc: "Success comes from teamwork. We foster strong partnerships with industry leaders, clients, and stakeholders.",
},            {
  icon: (
    <img 
      src="/plant.gif" 
      alt="Sustainability" 
      className="w-16 h-16 inline-block" 
    />
  ),
  title: "Sustainability",
  desc: "Responsible practices ensure long-term impact. We integrate eco-friendly approaches and ethical business strategies.",
},
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-96 p-8 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl 
                             transform transition-all duration-300 hover:-translate-y-2 
                             hover:shadow-[0_4px_30px_rgba(255,215,0,0.5)] text-center"
                >
                  <div className="text-6xl text-[#D4AF37]">{item.icon}</div>
                  <h3 className="text-3xl font-semibold text-[#D4AF37] mt-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-black mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission */}
            <h2 className="mt-28 text-4xl sm:text-5xl font-semibold text-[#D18B00]">
              Our Mission
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-black font-medium max-w-4xl mx-auto">
              To be the leading partners for Brands and Businesses in Asia,
              recognised for transformation and Growth with innovative, technology
              driven solutions leading with expertise and dedication
            </p>

            <div className="flex flex-wrap sm:grid sm:grid-cols-3 justify-center gap-10 mt-16">
              {[
                
                   {
  icon: (
    <img 
      src="/fist.gif" 
      alt="Empowerment" 
      className="w-16 h-16 inline-block" 
    />
  ),
  title: "Empowerment",
  desc: "Helping individuals and businesses thrive in a supportive, growth-oriented environment.",
},
                     {
  icon: (
    <img 
      src="/cup.gif" 
      alt="Excellence" 
      className="w-16 h-16 inline-block" 
    />
  ),
  title: "Excellence",
  desc: "Committed to exceeding expectations through continuous improvement and dedication.",
},
                     {
  icon: (
    <img 
      src="/light-bulb.gif" 
      alt="Inspiration" 
      className="w-16 h-16  inline-block" 
    />
  ),
  title: "Inspiration",
  desc: "Leading by example, driving innovation, and pioneering ideas that shape the future.",
},
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-96 p-8 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl 
                             transform transition-all duration-300 hover:-translate-y-2 
                             hover:shadow-[0_4px_30px_rgba(255,215,0,0.5)] text-center"
                >
                  <div className="text-6xl text-[#D4AF37]">{item.icon}</div>
                  <h3 className="text-3xl font-semibold text-[#D4AF37] mt-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-black mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ REPLACED WITH NEW FOUNDATION PRINCIPLES */}
          <div className="foundation-principles-container relative bg-gradient-to-b from-gray-50 via-yellow-100/40 to-gray-50 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12),transparent_75%)]" />
            <div className="relative w-full px-5 py-16">
              <h2 className="text-5xl sm:text-6xl font-semibold text-center mb-16 text-[#D18B00]">
                Our <span className="text-[#D18B00]">Foundational Principles</span>
              </h2>

              <div className="relative max-w-7xl mx-auto">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.2 },
                    },
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center"
                >
                  {principles.map((principle, index) => {
                    const row = Math.floor(index / cols);
                    const isEvenRow = row % 2 === 0;

                    const variants = {
                      hidden: {
                        opacity: 0,
                        x: isEvenRow ? -100 : 100,
                        scale: 0.8,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        y: [0, -6, 0],
                        transition: {
                          x: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: index * 0.15,
                          },
                          y: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 3,
                            ease: "easeInOut",
                            delay: index * 0.15 + 0.6,
                          },
                          scale: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: index * 0.15,
                          },
                          opacity: { delay: index * 0.15 },
                        },
                      },
                    };

                    return (
                      <motion.div
                        key={index}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center text-center 
                                  bg-gradient-to-br from-white via-gray-50 to-gray-200 
                                  border border-gray-300 rounded-2xl w-full max-w-sm p-8 
                                  shadow-[0_8px_20px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6)] 
                                  transform perspective-[1200px] transition-all duration-500 
                                  hover:rotate-x-2 hover:rotate-y-2 
                                  hover:shadow-[0_12px_30px_rgba(255,215,0,0.5)]"
                      >
                        <div
                          className="w-24 h-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 
                                     flex items-center justify-center rounded-2xl 
                                     shadow-[0_6px_12px_rgba(0,0,0,0.2),inset_0_2px_6px_rgba(255,255,255,0.8)] 
                                     border border-yellow-200 mb-4"
                        >
                          <img
                            src={principle.image}
                            alt={principle.title}
                            className="w-16 h-16 object-contain drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]"
                          />
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-600 drop-shadow-sm">
                          {principle.title}
                        </h3>
                        <p className="text-black text-base mt-4 leading-relaxed">
                          {principle.description}
                        </p>
                        <div className="mt-4 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-sm" />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Management Team */}
          <MangTeam includeHelmet={false} />
        </div>
      </div>
    </>
  );
};

export default About;