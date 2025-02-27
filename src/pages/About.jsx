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
import backgroundImage from "../assets/background.jpg"; // Add a background image for the "Who We Are" section

// Import SVG images for Vision and Mission
import visionSvg from "../assets/vision.svg"; // Replace with your SVG file path
import missionSvg from "../assets/mission.svg"; // Replace with your SVG file path
import TeamMemberDetail from "../components/TeamMemberDetail";

const FoundationPrinciples = () => {
  const principles = [
    { title: "Growth", description: "Driving innovation and expansion to meet evolving consumer needs.", image: growthImage },
    { title: "Integrity", description: "Ensuring transparency, quality, and trust in every product we deliver.", image: integrityImage },
    { title: "Entrepreneurship", description: "Encouraging agility and forward-thinking to stay ahead in the market.", image: entrepreneurshipImage },
    { title: "Collaboration", description: "Building strong partnerships with suppliers, retailers, and customers.", image: collaborationImage },
    { title: "Empowerment", description: "Enabling employees and stakeholders to make impactful decisions.", image: empowermentImage },
    { title: "Sustainability", description: "Committed to eco-friendly practices and responsible sourcing.", image: sustainabilityImage },
  ];

  const [expandedCard, setExpandedCard] = useState(null);
  const [isWhoWeAreFlipped, setIsWhoWeAreFlipped] = useState(false);

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
    if (principlesSectionRef.current) observer.observe(principlesSectionRef.current);
    if (missionSectionRef.current) observer.observe(missionSectionRef.current);

    // Cleanup function to disconnect the observer
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="foundation-principles-container bg-purple-900">
      {/* Who We Are Section */}
      <div
        className={`who-we-are-section ${isWhoWeAreFlipped ? "flipped" : ""}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onClick={handleWhoWeAreClick}
      >
        <div className="who-we-are-content">
          <h1 className="who-we-are-heading">Who We Are?</h1>
          <p className="who-we-are-text">We are your strategic partners who will help you grow and transform your business and brands at Market Place.</p>
        </div>
        <div className="who-we-are-back-content">
          <h1 className="who-we-are-heading">Who We Are?</h1>
          <p className="who-we-are-text">
            At Retail Craft Asia, we are more than just service providers—we are your strategic partners in business growth and brand transformation. With deep expertise in the FMCG industry, we help you expand your market reach, optimize supply chains, enhance brand visibility, and drive consumer engagement.
          </p>
          <p className="who-we-are-text">
            Whether you're launching a new product, scaling operations, or enhancing your brand presence, we provide end-to-end solutions that fuel your success in today's competitive marketplace. From market research and distribution strategies to digital transformation and customer experience optimization, we ensure that your brand stands out and thrives.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="vision-section" ref={visionSectionRef}>
        <div className="vision-content">
          <img src={visionSvg} alt="Vision" className="vision-svg overflow-hidden" />
          <div className="vision-text-content">
            <h2 className="vision-heading">Our Vision</h2>
            <p className="vision-text">
              To be the trusted business partners for Market expansion and Execution services for Businesses in Asia.
            </p>
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="w-full px-5 py-16 ">
      <h2 className="text-4xl font-bold text-center mb-10 transition-transform duration-300 hover:scale-110 hover:text-white">
        Our Foundational Principles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {principles.map((principle, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center text-center bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-gray-300 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
              expandedCard === index ? "scale-105 shadow-xl" : "hover:scale-105 hover:shadow-lg"
            }`}
            onMouseEnter={() => setExpandedCard(index)}
            onMouseLeave={() => setExpandedCard(null)}
          >
            <img
              src={principle.image}
              alt={principle.title}
              className="w-full max-h-40 object-contain rounded-xl"
            />
            <h3 className="text-xl font-semibold mt-4 transition-colors hover:text-blue-600">
              {principle.title}
            </h3>
            <p
              className={`text-gray-700 text-sm mt-2 transition-opacity duration-300 ${
                expandedCard === index ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
              }`}
            >
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </div>
      

      {/* Mission Section */}
      <div className="mission-section" ref={missionSectionRef}>
        <div className="mission-content">
          <div className="mission-text-content">
            <h2 className="mission-heading">Our Mission</h2>
            <p className="mission-text">
              To be the leading partners for Brands and Businesses in Asia, recognized for transformation and Growth with innovative, technology-driven solutions leading with expertise and dedication.
            </p>
          </div>
          <img src={missionSvg} alt="Mission" className="mission-svg" />
        </div>
      </div>

      <TeamMemberDetail />
    </div>
  );
};

export default FoundationPrinciples;