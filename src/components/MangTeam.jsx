"use client"

import { useEffect, useRef, useState } from "react"
import SEOHelmet from "./SEOHelmet"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

// Wrap Link with motion
const MotionLink = motion(Link)

const teamMembers = [
  {
    id: 1,
    name: "Parag Wasnik",
    role: "Cheif Executive Officer",
    shortBio:
      "An engineer and MBA with 23+ years of entrepreneurial experience in FMCG, Retail & Healthcare.",
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
    shortBio:
      "A seasoned leader with over 25 years of experience in distribution, hospitality, FMCG, and retail.",
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
    shortBio:
      "A global FMCG and Beverages leader with 19+ years of experience in India, Africa & Southeast Asia.",
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
  {
    id: 5,
    name: "Sankalp Bansal",
    role: "Independent Director",
    shortBio:
      "Serial entrepreneur and strategic leader; Co-founder & Chief Strategy Officer at MAssist CRM, driving vision, product strategy, and growth.",
    image: "/Team/sankalp-sir-final-pic.png",
    highlights: [
      "Built and scaled multiple ventures with execution excellence",
      "Leading MAssist CRM’s vision, innovation, and market growth",
      "Deep operating background from healthcare to enterprise tech",
    ],
    linkedin: "#",
  },
]

const TeamMemberDetail = ({ includeHelmet = true }) => {
  const scrollRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredMember, setHoveredMember] = useState(null)

  const getVisibleCards = () => {
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 768) return 2
    if (window.innerWidth < 1024) return 3
    return 4
  }

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const visible = getVisibleCards()
    const step = visible
    const lastStart = Math.max(0, teamMembers.length - visible)

    let nextIndex = currentIndex
    if (direction === "right") {
      nextIndex = Math.min(currentIndex + step, lastStart)
    } else {
      nextIndex = Math.max(currentIndex - step, 0)
    }

    setCurrentIndex(nextIndex)

    const children = scrollRef.current.children
    const target = children[nextIndex]
    if (target && target.scrollIntoView) {
      target.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      })
    }
  }

  useEffect(() => {
    const syncOnResize = () => {
      if (!scrollRef.current) return
      const visible = getVisibleCards()
      const lastStart = Math.max(0, teamMembers.length - visible)
      const clamped = Math.min(currentIndex, lastStart)
      const children = scrollRef.current.children
      const target = children[clamped]
      if (clamped !== currentIndex) {
        setCurrentIndex(clamped)
      }
      if (target && target.scrollIntoView) {
        target.scrollIntoView({
          behavior: "instant",
          inline: "start",
          block: "nearest",
        })
      }
    }
    syncOnResize()
    window.addEventListener("resize", syncOnResize)
    return () => window.removeEventListener("resize", syncOnResize)
  }, [currentIndex])

  return (
    <>
      {includeHelmet && (
        <SEOHelmet
          title="Leadership Team - Retail Craft Asia | Meet Our Expert Leaders"
          description="Meet our visionary leadership team with decades of experience driving innovation and excellence across global retail markets. Expert leaders in FMCG, Retail & Healthcare."
          keywords="leadership team, retail experts, management team, CEO, retail consultancy leaders, business experts, FMCG leaders"
          url="https://retailcraftasia.com/team"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Retail Craft Asia",
            url: "https://retailcraftasia.com/team",
            employee: teamMembers.map((member) => ({
              "@type": "Person",
              name: member.name,
              jobTitle: member.role,
              description: member.shortBio,
              worksFor: {
                "@type": "Organization",
                name: "Retail Craft Asia",
              },
            })),
          }}
        />
      )}

      <section className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Section-wide background image on hover */}
        {hoveredMember && (
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none transition-opacity duration-500">
            <img
              src={hoveredMember.image}
              alt={`${hoveredMember.name} background`}
              className="w-full h-full object-cover grayscale blur-sm scale-105"
            />
          </div>
        )}

        <div className="relative z-10 container mx-auto px-4 pr-2">
          <div className="text-center mb-10">
            <h2
  className=" tracking-wide text-3xl md:text-5xl lg:text-6xl 
    bg-[linear-gradient(180deg,#FFD700_0%,#FFB700_30%,#E6A700_50%,#FFCC00_70%,#FFD700_100%)] 
    bg-clip-text text-transparent 
    [text-shadow:0_1px_0_#B8860B,0_2px_2px_rgba(0,0,0,0.6)] 
    text-center mb-6"
>
  Meet Our Leadership Team
</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visionary leaders with decades of experience, driving innovation
              and excellence across global markets.
            </p>
          </div>

          <div className="relative">
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

            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide gap-4 p-4 snap-x snap-mandatory"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredMember(member)}
                  onMouseLeave={() => setHoveredMember(null)}
                  className="relative group bg-white rounded-xl shadow-md p-6 transform transition-transform snap-start flex flex-col w-80 min-w-[95%] sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,204,0,0.4)] overflow-hidden"
                >
                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-yellow-400 transition-all duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 flex-grow flex flex-col">
                      <h3 className="text-gray-800 font-semibold text-xl">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-lg mt-1">
                        {member.role}
                      </p>
                    </div>
                    <MotionLink
                      to={`/team/member/${member.id}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.3, duration: 0.5 },
                      }}
                      className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 
                                 text-black font-semibold rounded-3xl shadow-md flex items-center gap-2 
                                 transition-all duration-500 bg-[length:200%_auto] 
                                 hover:bg-[position:right_center] hover:shadow-lg"
                    >
                      <span>Read Full Bio</span>
                      <motion.span
                        animate={{
                          x: [0, 5, 0],
                          transition: {
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <FaArrowRight />
                      </motion.span>
                    </MotionLink>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamMemberDetail
