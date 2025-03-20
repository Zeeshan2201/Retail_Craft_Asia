import React, { useEffect, useRef, useState } from "react";
import "../components/Css/about.css";
import growthImage from "../assets/growth.svg";
import integrityImage from "../assets/integrity.svg";
import entrepreneurshipImage from "../assets/entrepreneurship.svg";
import collaborationImage from "../assets/collaboration.svg";
import empowermentImage from "../assets/empowerment.svg";
import sustainabilityImage from "../assets/sustainability.svg";

import img from "../assets/About/img.png";
import About_2 from "../assets/About/About_2.png"

import MangTeam from "../components/MangTeam";
// import visionSvg from "../assets/vision.svg";
// import missionSvg from "../assets/mission.svg";
// Add a background image for the "Who We Are" section
// Import SVG images for Vision and Mission
import visionSvg from "../assets/vision.svg"; // Replace with your SVG file pathath
import missionSvg from "../assets/mission.svg"; // Replace with your SVG file pathath

const FoundationPrinciples = () => {
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

  const [expandedCard, setExpandedCard] = useState(null);
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);

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

  return (
    <div className="foundation-principles-container bg-gradient-to-b from-gray-50 to-yellow-50 shadow-md">
      <div className="text-center font-semibold sm:mt-20 mb-5 pt-20 px-5">
        <h1 className="text-4xl sm:text-6xl font-semibold mt-5">
          <span className="text-yellow-600">Who we are,</span>
          <span className="text-yellow-700"> Your Strategic Partner.</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mt-6 max-w-4xl mx-auto">
          At Retail Craft Asia, we are more than just service providers—we are
          your strategic partners in business growth and brand transformation.
          With deep expertise in the FMCG industry, we help you expand your
          market reach, optimize supply chains, enhance brand visibility, and
          drive consumer engagement.
          <br />
          <br />
          Our team of industry experts works closely with brands to understand
          their unique challenges and craft tailored strategies for success.
          Whether you are looking to break into new markets, refine your
          branding, or streamline your operations, we provide the insights and
          execution needed to achieve sustainable growth.
        </p>
      </div>

      <div className="w-full py-20 bg-gradient-to-b from-gray-50 to-yellow-50 relative flex flex-col items-center text-center px-5">
        {/* Animated Heading */}
        <h2 className="text-4xl sm:text-5xl  font-semibold max-w-3xl transition-opacity duration-1000 ease-in-out delay-200 opacity-100 text-yellow-600">
          {/* <span className="text-yellow-600">Our expertise</span>  
          <span className="text-yellow-600"> helps businesses</span>  
          <span className="text-yellow-600"> build meaningful connections that drive success.</span> */}
          Our expertise helps businesses build meaningful connections that drive
          success.
        </h2>

      


        {/* User Image with Glow */}
        <div className="relative mt-16">
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto relative z-10">
            <img src={About_2} alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-yellow-50rounded-full blur-3xl opacity-30 animate-pulse"></div>

          {/* Floating Icons with Animation */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md">
            🏆
          </div>
          <div className="absolute top-10 -left-10 sm:-left-14 w-10 h-10 sm:w-14 sm:h-14 bg-yellow rounded-full flex items-center justify-center shadow-md">
            💙
          </div>
          <div className="absolute top-10 -right-10 sm:-right-14 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md">
            📊
          </div>
          <div className="absolute bottom-10 -left-10 sm:-left-14 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md">
            🛒
          </div>
          <div className="absolute bottom-10 -right-10 sm:-right-14 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md">
            💬
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md">
            🚀
          </div>
        </div>

        <div className="px-6 py-20 text-center bg-gradient-to-b from-gray-50 to-yellow-50">
          {/* Our Vision Section */}
          <h2 className="text-4xl sm:text-5xl font-semibold text-yellow-600">
            Our Vision for the Future
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-black font-medium max-w-4xl mx-auto">
          To be the trusted business partners for Market expansion and Execution services for Businesses in Asia. 
          </p>
          

          <div className="flex flex-wrap sm:grid sm:grid-cols-3 justify-center gap-10 mt-16">
            {[
              {
                icon: "🚀",
                title: "Innovation",
                desc: "We embrace change to create a better future, pushing the boundaries of technology and creativity.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                desc: "Success comes from teamwork. We foster strong partnerships with industry leaders, clients, and stakeholders.",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "Responsible practices ensure long-term impact. We integrate eco-friendly approaches and ethical business strategies.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-96 p-8 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_30px_rgba(255,215,0,0.5)] text-center"
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

          {/* Our Mission Section */}
          <h2 className="mt-28 text-4xl sm:text-5xl font-semibold text-yellow-600">
            Fueling Success Through Our Mission
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-black font-medium max-w-4xl mx-auto">
          To be the leading  partners for Brands and Businesses in Asia, recognised for transformation and Growth  with innovative, tehcnology driven solutions leading with expertise and dedication 
          </p>

          <div className="flex flex-wrap sm:grid sm:grid-cols-3 justify-center gap-10 mt-16">
            {[
              {
                icon: "🌟",
                title: "Empowerment",
                desc: "Helping individuals and businesses thrive in a supportive, growth-oriented environment.",
              },
              {
                icon: "🏆",
                title: "Excellence",
                desc: "Committed to exceeding expectations through continuous improvement and dedication.",
              },
              {
                icon: "💡",
                title: "Inspiration",
                desc: "Leading by example, driving innovation, and pioneering ideas that shape the future.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-96 p-8 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_30px_rgba(255,215,0,0.5)] text-center"
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

        <div className="w-full px-5 py-16 bg-gray-50">
          <h2 className="text-5xl sm:text-6xl font-semibold text-center mb-16 text-yellow-600">
            Our{" "}
            <span className="text-yellow-600 ">Foundational Principles</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-xl w-80 h-88 p-8 shadow-xl hover:shadow-[0_4px_30px_rgba(255,215,0,0.5)] transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-28 h-28 bg-white flex items-center justify-center rounded-xl shadow-md border border-gray-300 mb-4">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-20 h-20 object-contain text-[#D4AF37]"
                  />
                </div>
                <h3 className="text-3xl font-semibold text-yellow-600">
                  {principle.title}
                </h3>
                <p className="text-black text-lg mt-4 px-6 leading-relaxed">
                  {principle.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] rounded-b-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationPrinciples;
