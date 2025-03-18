"use client"

import { useRef } from "react";
import { Linkedin, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Parag Wasnik",
    role: "CEO",
    shortBio: "An engineer and MBA with 20+ years of entrepreneurial experience in FMCG, Retail & Healthcare.",
    image: "/Team/Member_2.png",
    highlights: [
      "20+ years experience in South East Asia and India",
      "Expert in growth strategies and operational excellence",
      "Explored over 40 countries as an avid traveler",
    ],
    linkedin: "#",
  },
  {
    id: 2,
    name: "Jean-Boris ROUX",
    role: "Independent Director",
    shortBio: "A seasoned leader with over 25 years of experience in distribution, hospitality, FMCG, and retail.",
    image: "/Team/Member_1.png",
    highlights: [
      "25+ years of experience across Europe and Asia",
      "Former President of French-Cambodian Chamber of Commerce",
      "Certified professional coach & Six Sigma Green Belt",
    ],
    linkedin: "#",
  },
  {
    id: 3,
    name: "Naresh Semwal",
    role: "Capability Director",
    shortBio: "A global FMCG and Beverages leader with 19+ years of experience in India, Africa & Southeast Asia.",
    image: "/Team/Member_3.jpg",
    highlights: [
      "RTM & GTM Expertise – Optimized distribution & retail expansion",
      "Managed large-scale teams for brand visibility",
      "Supports orphan houses and welfare initiatives",
    ],
    linkedin: "#",
  },
  {
    id: 4,
    name: "John Doe",
    role: "Marketing Director",
    shortBio: "Marketing expert with 15+ years of experience in brand strategy and consumer engagement.",
    image: "/Team/Member_4.jpg",
    highlights: [
      "Developed award-winning marketing campaigns",
      "Specialist in digital marketing and brand growth",
      "Passionate about consumer behavior analytics",
    ],
    linkedin: "#",
  },
];

const TeamMemberDetail = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 16;
      scrollRef.current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
      
      setTimeout(() => {
        if (direction === "right" && scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else if (direction === "left" && scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        }
      }, 500);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-gray-800 font-bold md:text-5xl text-3xl mb-6">Meet Our Leadership Team</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visionary leaders with decades of experience, driving innovation and excellence across global markets.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <button onClick={() => scroll("left")} className="absolute left-0 p-3 bg-white shadow-md rounded-full z-10 hover:bg-gray-200">
            <ChevronLeft size={32} />
          </button>
          <div ref={scrollRef} className="flex overflow-hidden w-[80vw] gap-6">
            {teamMembers.concat(teamMembers).map((member, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-[25vw] bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-gray-800 font-bold text-xl mt-4">{member.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{member.shortBio}</p>
                  <Link to={`/MemberOne#${member.id}`} className="mt-4 bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-700">
                    Read Full Bio
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <button onClick={() => scroll("right")} className="absolute right-0 p-3 bg-white shadow-md rounded-full z-10 hover:bg-gray-200">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;