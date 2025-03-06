import React, { useEffect, useRef, useState } from "react";
import "../components/Css/about.css";
// Ensure this CSS file exists for styling

// Import images for each principle

import growthImage from "../assets/growth.svg";
import integrityImage from "../assets/integrity.svg";
import entrepreneurshipImage from "../assets/entrepreneurship.svg";
import collaborationImage from "../assets/collaboration.svg";
import empowermentImage from "../assets/empowerment.svg";
import sustainabilityImage from "../assets/sustainability.svg";
 // Add a background image for the "Who We Are" section
import MangTeam from "../components/MangTeam"
// Import SVG images for Vision and Mission
import visionSvg from "../assets/vision.svg"; // Replace with your SVG file path
import missionSvg from "../assets/mission.svg"; // Replace with your SVG file path
import TeamMemberDetail from "../components/TeamMemberDetail";

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
  const [isWhoWeAreFlipped, setIsWhoWeAreFlipped] = useState(false);
  // const missionSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleWhoWeAreClick = () => {
    setIsWhoWeAreFlipped(!isWhoWeAreFlipped);
  };

  // Refs for scroll-triggered animations
  const principlesSectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const missionSectionRef = useRef(null);
  // const visionSectionRef = useRef(null);

  // IntersectionObserver to trigger animations only once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop observing the element after it becomes visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (visionSectionRef.current) observer.observe(visionSectionRef.current);
    if (principlesSectionRef.current)
      observer.observe(principlesSectionRef.current);
    if (missionSectionRef.current) observer.observe(missionSectionRef.current);

    // Cleanup function to disconnect the observer
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
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

  return (
    <div className="foundation-principles-container bg-purple-900">
      {/* Who We Are Section */}
      <div
        className={`who-we-are-section ${isWhoWeAreFlipped ? "flipped" : ""}`}
        style={{ backgroundImage: `url("https://media.istockphoto.com/id/1346669669/vector/world-map-divided.jpg?s=612x612&w=0&k=20&c=71xT8qPpLt-y1aVb9F6HFpLforj94uR-0bEGrMdQZ8Y=")` }}
        onClick={handleWhoWeAreClick}
      >
        <div className="who-we-are-content">
          <h1 className="who-we-are-heading">Who We Are?</h1>
          <p className="who-we-are-text">
            We are your strategic partners who will help you grow and transform
            your business and brands at Market Place.
          </p>
        </div>
        <div className="who-we-are-back-content">
          <h1 className="who-we-are-heading">Who We Are?</h1>
          <p className="who-we-are-text">
            At Retail Craft Asia, we are more than just service providers—we are
            your strategic partners in business growth and brand transformation.
            With deep expertise in the FMCG industry, we help you expand your
            market reach, optimize supply chains, enhance brand visibility, and
            drive consumer engagement.
          </p>
          <p className="who-we-are-text">
            Whether you're launching a new product, scaling operations, or
            enhancing your brand presence, we provide end-to-end solutions that
            fuel your success in today's competitive marketplace. From market
            research and distribution strategies to digital transformation and
            customer experience optimization, we ensure that your brand stands
            out and thrives.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div
        ref={visionSectionRef}
        className={`w-full px-5 py-16 bg-gradient-to-br from-yellow-400/0 to-yellow-300/20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <img
            src={visionSvg}
            alt="Vision"
            className="w-60 ml-5 sm:ml-40 bg-transparent max-w-md transition-transform hover:scale-110 hover:shadow-xl hover:bg-gray-200/10 hover:border-2 hover:border-yellow-300/40 rounded-full"
          />
          <div className="w-full md:w-1/2 text-center sm:text-left">
            <h2 className="text-5xl font-bold mb-4 transition-color text-white hover:text-[#0e110c]">
              Our Vision
            </h2>
            <p className="text-xl text-gray-200">
              To be the trusted business partners for Market expansion and
              Execution services for Businesses in Asia.
            </p>
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="w-full px-5 py-16 ">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 transition-transform duration-300 hover:scale-110 hover:text-black text-white">
          Our Foundational Principles
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-gray-300 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                expandedCard === index
                  ? "scale-105 shadow-xl"
                  : "hover:scale-105 hover:shadow-lg"
              }`}
              onMouseEnter={() => setExpandedCard(index)}
              onMouseLeave={() => setExpandedCard(null)}
            >
              <img
                src={principle.image}
                alt={principle.title}
                className="w-full max-h-40 object-contain rounded-xl"
              />
              <h3 className="text-lg sm:text-xl font-semibold mt-4 transition-colors hover:text-blue-600">
                {principle.title}
              </h3>
              <p
                className={`text-gray-700 text-sm mt-2 transition-opacity duration-300 ${
                  expandedCard === index
                    ? "opacity-100 max-h-40"
                    : "opacity-0 max-h-0"
                }`}
              >
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div
        ref={missionSectionRef}
        className={`w-full px-5 py-16 bg-gradient-to-br from-yellow-400/0 to-yellow-300/20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-full md:w-1/2 text-center sm:text-right">
            <h2 className="text-5xl font-bold mb-4 transition-colors hover:text-black text-white">
              Our Mission
            </h2>
            <p className="text-xl text-gray-200">
              To be the leading partners for Brands and Businesses in Asia,
              recognized for transformation and Growth with innovative,
              technology-driven solutions leading with expertise and dedication.
            </p>
          </div>
          <img
            src={missionSvg}
            alt="Mission"
            className="w-60 sm:mr-60 bg-transparent max-w-md transition-transform hover:scale-110 hover:shadow-xl hover:bg-gray-200/10 hover:border-2 hover:border-yellow-300/40 rounded-full"
          />
        </div>
      </div>

      {/* <TeamMemberDetail /> */}
      <MangTeam/>
    </div>
  );
};

export default FoundationPrinciples;
