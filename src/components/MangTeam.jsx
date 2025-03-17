"use client"

import { useEffect } from "react"
import { Linkedin, Award, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { useLocation, Link } from 'react-router-dom'

const teamMembers = [
  {
    id: 2,
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
    id: 1,
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
]

const TeamMemberDetail = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "") // Remove #
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-16">
          <h2 className="text-center text-transparent bg-clip-text bg-yellow-700 font-bold md:text-6xl text-4xl mt-15 py-10 inline-block relative">
            Meet Our Leadership Team
          </h2>
          <p className="text-black text-2xl max-w-2xl mx-auto mt-6">
            Visionary leaders with decades of experience, driving innovation and excellence across global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              id={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative hover:bg-gradient-to-r from-yellow-50 via-white to-white
 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-yellow-700"
            >
              <div className="flex flex-col items-center p-8">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2 shadow-lg">
                    <a href={member.linkedin} className="text-black hover:text-blue-200 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-black font-bold text-2xl mt-10">{member.name}</h3>
                <div className="flex items-center mt-2 mb-4 text-black">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <p className="md:text-lg font-medium">{member.role}</p>
                </div>

                {/* Highlights */}
                <ul className="text-black text-sm text-center mt-4 space-y-2">
                  {member.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-yellow-300" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Read More Button */}
                <Link
                  to={`/MemberOne#${member.id}`}
                  className="mt-6 bg-white text-yellow-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Read Full Bio
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMemberDetail
