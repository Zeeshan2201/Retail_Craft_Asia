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
    // shortBio: "Marketing expert with 15+ years of experience in brand strategy and consumer engagement.",
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
      const scrollAmount = cardWidth * 4 // Scroll by 4 cards at once
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
    <section className="py-20 bg-gray-50">
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

      <div className="container mx-auto px-4 pr-2">
        <div className="text-center mb-10">
          <h2 className=" font-semibold md:text-5xl lg:text-6xl text-3xl mb-6 text-yellow-600">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visionary leaders with decades of experience, driving innovation and excellence across global markets.
          </p>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full z-20 hover:bg-gray-200 transition-all"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-md rounded-full z-10 hover:bg-gray-200"
          >
            <ChevronRight size={32} />
          </button>

          {/* Card Container */}
          <div ref={scrollRef} className="flex overflow-x-hidden w-full gap-4 snap-x snap-mandatory scrollbar-hide">
            {teamMembers.concat(teamMembers).map((member, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-[24%] bg-white rounded-xl shadow-md hover:shadow-yellow-600/60 my-4 p-6 transform hover:scale-105 transition-transform snap-center"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 md:w-52 md:h-52 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-gray-800 font-semibold text-xl mt-4">{member.name}</h3>
                  <p className="text-gray-600 text-lg mt-1">{member.role}</p>
                  {/* <p className="text-gray-600 text-lg mt-2 h-[10vh]">{member.shortBio}</p> */}
                  <Link
                    to={`/MemberOne#${member.id}`}
                    className="mt-6 bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-3 rounded-3xl shadow-sm transition-all duration-300 from-yellow-400  to-yellow-600 hover:shadow-md"
                    // className="mt-6 bg-yellow-600 text-white font-semibold px-4 py-2 rounded-3xl hover:bg-yellow-700"
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

