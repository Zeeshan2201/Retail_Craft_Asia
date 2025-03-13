import React, { useEffect, useRef, useState } from "react";
import "../components/Css/about.css";

// Import images for each principle
import growthImage from "../assets/growth.svg";
import integrityImage from "../assets/integrity.svg";
import entrepreneurshipImage from "../assets/entrepreneurship.svg";
import collaborationImage from "../assets/collaboration.svg";
import empowermentImage from "../assets/empowerment.svg";
import sustainabilityImage from "../assets/sustainability.svg";
import img from "../assets/About/img.png"

// import visionSvg from "../assets/vision.svg";
// import missionSvg from "../assets/mission.svg";
 // Add a background image for the "Who We Are" section
// Import SVG images for Vision and Mission
import visionSvg from "../assets/vision.svg"; // Replace with your SVG file path
import missionSvg from "../assets/mission.svg"; // Replace with your SVG file path

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
    <div className="foundation-principles-container  bg-blue-50 shadow-md">
      <div className="text-center font-extrabold mt-35 mb-5 py-20 px-5 ">
        <h1 className="text-6xl font-bold text-gray-900 leading-tight mt-5">
          Who we are, <span className="text-blue-600">Your Strategic Partner.</span>
        </h1>
        <p className="text-lg text-gray-700 mt-6 max-w-4xl mx-auto leading-relaxed">
          At Retail Craft Asia, we are more than just service providers—we are your strategic partners in business growth and brand transformation.
          With deep expertise in the FMCG industry, we help you expand your market reach, optimize supply chains, enhance brand visibility, and drive consumer engagement.
          <br /><br />
          Our team of industry experts works closely with brands to understand their unique challenges and craft tailored strategies for success.
          Whether you are looking to break into new markets, refine your branding, or streamline your operations, we provide the insights and execution needed to achieve sustainable growth.
        </p>
      </div>

      {/* <div className="w-full px-5 py-16 border-2 border-gray-400 transition-all duration-1000 shadow-lg rounded-xl" ref={visionSectionRef}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <img src={visionSvg} alt="Vision" className="w-64 transition-transform hover:scale-110" />
          <div className="w-full md:w-1/2 text-center sm:text-left">
            <h2 className="text-5xl font-bold mb-4 text-black">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be the trusted business partners for Market expansion and Execution services for Businesses in Asia.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full px-5 py-16 border-2 border-gray-400 transition-all duration-1000 shadow-lg rounded-xl" ref={missionSectionRef}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-full md:w-1/2 text-center sm:text-right">
            <h2 className="text-5xl font-bold mb-4 text-black">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be the leading partners for Brands and Businesses in Asia, recognized for transformation and Growth with innovative, technology-driven solutions leading with expertise and dedication.
            </p>
          </div>
          <img src={missionSvg} alt="Mission" className="w-64 transition-transform hover:scale-110" />
        </div>
      </div> */}
      <div className="w-full py-20 bg-gradient-to-b from-blue-50 to-white relative flex flex-col items-center text-center px-5">
      {/* Animated Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 tracking-wide max-w-3xl transition-opacity duration-1000 ease-in-out delay-200 opacity-100">
  Our expertise helps businesses build meaningful connections that drive success.
</h2>

      {/* User Image with Glow */}
      <div className="relative mt-12">
        <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto relative z-10">
          <img src={img} alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* Floating Icons with Animation */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
  🏆
</div>
<div className="absolute top-10 -left-14 sm:-left-16 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
  💙
</div>
<div className="absolute top-10 -right-14 sm:-right-16 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
  📊
</div>
<div className="absolute bottom-10 -left-14 sm:-left-16 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
  🛒
</div>
<div className="absolute bottom-10 -right-14 sm:-right-16 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
  💬
</div>
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
  🚀
</div>

      </div>
    </div>

    <div className="px-6 py-20 text-center bg-gradient-to-b from-blue-50 to-white">
  {/* Our Vision Section */}
  <h2 className="text-4xl font-extrabold text-blue-900">Our Vision for the Future</h2>
  <p className="mt-4 text-lg text-gray-700 font-medium max-w-3xl mx-auto">
    Our vision shapes everything we aim to achieve. We set new standards, create meaningful impact, and drive transformation in our industry.
  </p>

  <div className="flex flex-wrap justify-center gap-8 mt-12">
    {[
      { icon: "🚀", title: "Innovation", desc: "We embrace change to create a better future, pushing the boundaries of technology and creativity." },
      { icon: "🤝", title: "Collaboration", desc: "Success comes from teamwork. We foster strong partnerships with industry leaders, clients, and stakeholders." },
      { icon: "🌱", title: "Sustainability", desc: "Responsible practices ensure long-term impact. We integrate eco-friendly approaches and ethical business strategies." }
    ].map((item, index) => (
      <div 
        key={index} 
        className="w-full sm:w-80 p-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="text-5xl">{item.icon}</div>
        <h3 className="text-2xl font-bold text-blue-800 mt-4">{item.title}</h3>
        <p className="text-gray-600 mt-2">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* Our Mission Section */}
  <h2 className="mt-24 text-4xl font-extrabold text-blue-900">Fueling Success Through Our Mission</h2>
  <p className="mt-4 text-lg text-gray-700 font-medium max-w-3xl mx-auto">
    Our mission is to bring out the best in one another, deliver success to our customers, and inspire the industry through excellence and innovation.
  </p>

  <div className="flex flex-wrap justify-center gap-8 mt-12">
    {[
      { icon: "🌟", title: "Empowerment", desc: "Helping individuals and businesses thrive in a supportive, growth-oriented environment." },
      { icon: "🏆", title: "Excellence", desc: "Committed to exceeding expectations through continuous improvement and dedication." },
      { icon: "💡", title: "Inspiration", desc: "Leading by example, driving innovation, and pioneering ideas that shape the future." }
    ].map((item, index) => (
      <div 
        key={index} 
        className="w-full sm:w-80 p-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="text-5xl">{item.icon}</div>
        <h3 className="text-2xl font-bold text-blue-800 mt-4">{item.title}</h3>
        <p className="text-gray-600 mt-2">{item.desc}</p>
      </div>
    ))}
  </div>
</div>

 <div className="w-full px-5 py-16 bg-gray-50">
  <h2 className="text-6xl font-extrabold text-center mb-16 text-gray-900">
    Our <span className="text-blue-600">Foundational Principles</span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
    {principles.map((principle, index) => (
      <div 
        key={index} 
        className="relative flex flex-col items-center text-center bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-xl w-64 h-72 p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
      >
        <div className="w-24 h-24 bg-white flex items-center justify-center rounded-xl shadow-md border border-gray-300 mb-4">
          <img src={principle.image} alt={principle.title} className="w-16 h-16 object-contain" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{principle.title}</h3>
        <p className="text-gray-700 text-sm mt-3 px-4 leading-relaxed">
          {principle.description}
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-b-xl"></div>
      </div>
    ))}
  </div>
  </div>

<<<<<<< HEAD



      <MangTeam />
    </div>
=======
 </div>
>>>>>>> 6a061beb081bde549e871e7d345e220ee09aa3ff
  );
};

export default FoundationPrinciples;
