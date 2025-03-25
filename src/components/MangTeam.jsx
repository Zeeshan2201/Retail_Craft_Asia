"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const teamMembers = [
  {
    id: 1,
    name: "Parag Wasnik",
    role: "Cheif Executive Officer",
    shortBio: "An engineer and MBA with 23+ years of entrepreneurial experience in FMCG, Retail & Healthcare.",
    image: "/Team/mem_4.png",
    highlights: [
      "23+ years experience in South East Asia and India",
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
    image: "/Team/mem_3.png",
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
    image: "/Team/meb_1.png",
    highlights: [
      "RTM & GTM Expertise – Optimized distribution & retail expansion",
      "Managed large-scale teams for brand visibility",
      "Supports orphan houses and welfare initiatives",
    ],
    linkedin: "#",
  },
  {
    id: 4,
    name: "Wichit Thammaphimol",
    role: "Human Resource Director",
    shortBio:
      "Wichit Thammaphimo, an experienced HR leader, has managed multinational businesses across ASEAN nations.",
    image: "/Team/meb_2.png",
    highlights: [
      "Developed award-winning marketing campaigns",
      "Specialist in digital marketing and brand growth",
      "Passionate about consumer behavior analytics",
    ],
    linkedin: "#",
  },
]

const TeamMemberDetail = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 16 // Width of a single card + gap
      const scrollAmount = cardWidth * (window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : 3) // Adjust scroll amount based on viewport
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })

      setTimeout(() => {
        if (
          direction === "right" &&
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0
        } else if (direction === "left" && scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        }
      }, 500)
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      {/* Custom CSS to hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-yellow-600">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Visionary leaders with decades of experience, driving innovation and excellence across global markets.
          </p>
        </div>

        <div className="relative px-2 sm:px-4">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-white shadow-lg rounded-full z-20 hover:bg-gray-200 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-white shadow-md rounded-full z-10 hover:bg-gray-200 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="sm:w-8 sm:h-8" />
          </button>

          {/* Card Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden w-full gap-3 sm:gap-4 snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {teamMembers.concat(teamMembers).map((member, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[85%] xs:w-[70%] sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow-md hover:shadow-yellow-600/60 my-2 sm:my-4 p-4 sm:p-6 transform hover:scale-105 transition-transform snap-center"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-gray-800 font-semibold text-lg sm:text-xl mt-3 sm:mt-4">{member.name}</h3>
                  <p className="text-gray-600 text-base sm:text-lg mt-1">{member.role}</p>
                  <Link
                    to={`/MemberOne#${member.id}`}
                    className="mt-4 sm:mt-6 bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-3xl text-sm sm:text-base shadow-sm transition-all duration-300 from-yellow-400 to-yellow-600 hover:shadow-md"
                  >
                    Read Full Bio
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMemberDetail

