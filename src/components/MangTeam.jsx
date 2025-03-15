"use client"

import { useState, useEffect } from "react"
import { Linkedin, Award, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { useLocation, Link } from 'react-router-dom'


const teamMembers = [
  {
    id: 1,
    name: "Jean-Boris ROUX",
    role: "Founder",
    shortBio: "A seasoned leader with over 25 years of diverse experience spanning distribution, hospitality, FMCG, and retail industries across Europe and Asia.",
    fullDescription: `...`,
    image: "/Team/Member_1.png",
    highlights: [
      "25+ years of experience across Europe and Asia",
      "Former President of French-Cambodian Chamber of Commerce",
      "Expertise in strategic growth and market expansion",
      "Certified professional coach and Six Sigma Green Belt",
    ],
    linkedin: "#",
  },
  {
    id: 2,
    name: "Parag Wasnik",
    role: "CEO",
    shortBio: "An engineer and MBA with more than two decades of entrepreneurial experience across FMCG, Retail, Consumer Durables, and Healthcare sectors.",
    fullDescription: `...`,
    image: "/Team/Member_2.png",
    highlights: [
      "20+ years of experience in South East Asia and India",
      "Expert in growth strategies and operational excellence",
      "Driven innovation and digital transformation",
      "Explored over 40 countries as an avid traveler",
    ],
    linkedin: "#",
  },
  {
    id: 3,
    name: "Naresh Semwal",
    role: "Capability Director",
    shortBio: "Naresh Semwal is a global FMCG and Beverages leader with 19+ years of experience across India, Africa, and Southeast Asia.",
    fullDescription: `...`,
    image: "/Team/Member_3.jpg", // Updated image URL
    highlights: [
      "RTM & GTM Expertise – Optimized distribution, retail expansion, and channel development",
      "Leadership & Execution – Managed large-scale teams, ensuring seamless operations and brand visibility",
      "Digital & Data-Driven Growth – Leveraged technology for strategic innovation.",
      "Social Impact & Community Development – Supports orphan houses and welfare initiatives.",
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
    <section className="py-20 bg-gradient-to-br from-[#d9e0fc] to-white">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-16">
          <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 font-bold md:text-6xl text-4xl mt-15 py-10 inline-block relative">
            Meet Our Leadership Team
          </h2>
          <p className="text-black text-2xl max-w-2xl mx-auto mt-6">
            Visionary leaders with decades of experience, driving innovation and excellence across global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={member.id}
              id={member.id}
              className="bg-[#EEF1FF] rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col items-center p-8">
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2 shadow-lg">
                    <a href={member.linkedin} className="text-white hover:text-blue-200 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 font-bold text-2xl mt-15 pt-10 inline-block relative">{member.name}</h3>
                <div className="flex items-center mt-2 mb-4">
                  <Briefcase className="w-4 h-4 text-gray-600 mr-2" />
                  <p className="text-gray-600 md:text-lg font-medium">{member.role}</p>
                </div>
                <Link
                   to={`/MemberOne#${member.name === "Jean-Boris ROUX" ? '1' : '2'}`} 
                  className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
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