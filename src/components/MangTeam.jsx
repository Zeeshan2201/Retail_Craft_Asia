"use client"

import { useEffect, useRef, useState } from "react"
import SEOHelmet from "./SEOHelmet"
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

	const getVisibleCards = () => {
		if (window.innerWidth < 640) return 1
		if (window.innerWidth < 768) return 2
		if (window.innerWidth < 1024) return 3
		return 4
	}

	// Step-wise scroll without infinite looping
	const scroll = (direction) => {
		if (!scrollRef.current) return

		const visible = getVisibleCards()
		const step = visible // page by visible count; mobile=1, md=3, lg=4
		const lastStart = Math.max(0, teamMembers.length - visible)

		let nextIndex = currentIndex
		if (direction === "right") {
			nextIndex = Math.min(currentIndex + step, lastStart)
		} else {
			nextIndex = Math.max(currentIndex - step, 0)
		}

		setCurrentIndex(nextIndex)

		const container = scrollRef.current
		const children = container.children
		const target = children[nextIndex]
		if (target) {
			const left = target.offsetLeft
			container.scrollTo({ left, behavior: "smooth" })
		}
	}

	// Keep alignment and bounds correct on resize and initial mount
	useEffect(() => {
		const syncOnResize = () => {
			if (!scrollRef.current) return
			const visible = getVisibleCards()
			const lastStart = Math.max(0, teamMembers.length - visible)
			const clamped = Math.min(currentIndex, lastStart)
			const container = scrollRef.current
			const children = container.children
			const target = children[clamped]
			if (clamped !== currentIndex) {
				setCurrentIndex(clamped)
			}
			if (target) {
				const left = target.offsetLeft
				container.scrollTo({ left, behavior: "auto" })
			}
		}
		// run once and on resize
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
						"name": "Retail Craft Asia",
						"url": "https://retailcraftasia.com/team",
						"employee": teamMembers.map(member => ({
							"@type": "Person",
							"name": member.name,
							"jobTitle": member.role,
							"description": member.shortBio,
							"worksFor": {
								"@type": "Organization",
								"name": "Retail Craft Asia"
							}
						}))
					}}
				/>
			)}

			<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4 pr-2">
				<div className="text-center mb-10">
					<h2 className="font-semibold md:text-5xl lg:text-6xl text-3xl mb-6 text-yellow-600">
						Meet Our Leadership Team
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Visionary leaders with decades of experience, driving innovation and excellence across global markets.
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
								className="bg-white rounded-xl shadow-md hover:shadow-yellow-600/60 p-6 transform hover:scale-105 transition-transform snap-start flex flex-col w-80 min-w-[95%] sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%]"
							>
								<div className="flex flex-col items-center text-center h-full justify-between">
									<div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
										<img
											src={member.image || "/placeholder.svg"}
											alt={member.name}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="mt-4 flex-grow flex flex-col">
										<h3 className="text-gray-800 font-semibold text-xl">{member.name}</h3>
										<p className="text-gray-600 text-lg mt-1">{member.role}</p>
									</div>
									<Link
										to={`/team/member/${member.id}`}
										className="mt-6 bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-3 rounded-3xl shadow-sm transition-all duration-300 from-yellow-400 to-yellow-600 hover:shadow-md"
									>
										Read Full Bio
									</Link>
								</div>
							</motion.div>
						))}					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default TeamMemberDetail
