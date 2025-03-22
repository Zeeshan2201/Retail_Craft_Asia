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
    shortBio: "An engineer and MBA with 23+ years of entrepreneurial experience in FMCG, Retail & Healthcare.",
    image: "/Team/Member_2.png",
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
    image: "/Team/Member_3.png",
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
        role: "HR Director",
        shortBio:
          "Wichit Thammaphimo, an experienced HR leader, has managed multinational businesses across ASEAN nations.",
        // shortBio: "Marketing expert with 15+ years of experience in brand strategy and consumer engagement.",
        image: "/Team/Member_4.png",
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
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 16; // Include gap
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

      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className=" font-semibold md:text-5xl lg:text-6xl text-3xl mb-6 text-yellow-600">Meet Our Leadership Team</h2>
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
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-md rounded-full z-10 hover:bg-gray-200"
          >
            <ChevronRight size={32} />
          </button>

          {/* Card Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden w-full gap-6 snap-x snap-mandatory scrollbar-hide"
          >
            {teamMembers.concat(teamMembers).map((member, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-white rounded-xl shadow-md hover:shadow-yellow-600/60 my-4 p-6 transform hover:scale-105 transition-transform snap-center"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 md:w-52 md:h-52 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
  );
};

export default TeamMemberDetail;
// "use client"

// import { useRef, useState, useEffect, useCallback } from "react"
// import { Linkedin, Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
// import { motion, useAnimation } from "framer-motion"

// // Note: In Next.js, you would use next/link instead of react-router-dom
// // This example uses a simple anchor tag for compatibility
// // import { Link } from "react-router-dom"

// const teamMembers = [
//   {
//     id: 1,
//     name: "Parag Wasnik",
//     role: "CEO",
//     shortBio: "An engineer and MBA with 23+ years of entrepreneurial experience in FMCG, Retail & Healthcare.",
//     image: "/Team/Member_2.png",
//     highlights: [
//       "23+ years experience in South East Asia and India",
//       "Expert in growth strategies and operational excellence",
//       "Explored over 40 countries as an avid traveler",
//     ],
//     linkedin: "#",
//   },
//   {
//     id: 2,
//     name: "Jean-Boris ROUX",
//     role: "Independent Director",
//     shortBio: "A seasoned leader with over 25 years of experience in distribution, hospitality, FMCG, and retail.",
//     image: "/Team/Member_1.png",
//     highlights: [
//       "25+ years of experience across Europe and Asia",
//       "Former President of French-Cambodian Chamber of Commerce",
//       "Certified professional coach & Six Sigma Green Belt",
//     ],
//     linkedin: "#",
//   },
//   {
//     id: 3,
//     name: "Naresh Semwal",
//     role: "Capability Director",
//     shortBio: "A global FMCG and Beverages leader with 19+ years of experience in India, Africa & Southeast Asia.",
//     image: "/Team/Member_3.png",
//     highlights: [
//       "RTM & GTM Expertise – Optimized distribution & retail expansion",
//       "Managed large-scale teams for brand visibility",
//       "Supports orphan houses and welfare initiatives",
//     ],
//     linkedin: "#",
//   },
//   {
//     id: 4,
//     name: "Wichit Thammaphimol",
//     role: "HR Director",
//     shortBio:
//       "Wichit Thammaphimo, an experienced HR leader, has managed multinational businesses across ASEAN nations.",
//     // shortBio: "Marketing expert with 15+ years of experience in brand strategy and consumer engagement.",
//     image: "/Team/Member_4.png",
//     highlights: [
//       "Developed award-winning marketing campaigns",
//       "Specialist in digital marketing and brand growth",
//       "Passionate about consumer behavior analytics",
//     ],
//     linkedin: "#",
//   },
// ]

// export default function AnimatedTeamSection() {
//   const scrollRef = useRef(null)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [isHovering, setIsHovering] = useState(null)
//   const [isVisible, setIsVisible] = useState(false)
//   const controls = useAnimation()

//   const scroll = useCallback(
//     (direction) => {
//       if (scrollRef.current) {
//         const scrollContainer = scrollRef.current
//         const cards = scrollContainer.querySelectorAll(".team-card")
//         const cardWidth = cards[0].offsetWidth + 24 // Include gap

//         let newIndex
//         if (direction === "left") {
//           newIndex = (activeIndex - 1 + cards.length) % cards.length
//         } else {
//           newIndex = (activeIndex + 1) % cards.length
//         }

//         setActiveIndex(newIndex)

//         // Always scroll with smooth behavior for manual navigation
//         scrollContainer.scrollTo({
//           left: newIndex * cardWidth,
//           behavior: "smooth",
//         })
//       }
//     },
//     [activeIndex],
//   )

//   // Auto-scroll functionality
//   useEffect(() => {
//     let timer
//     const startTimer = () => {
//       timer = setInterval(() => {
//         if (!isHovering) {
//           const scrollContainer = scrollRef.current
//           if (scrollContainer) {
//             const cards = scrollContainer.querySelectorAll(".team-card")
//             const cardWidth = cards[0].offsetWidth + 24 // Include gap

//             // Calculate next index
//             const nextIndex = (activeIndex + 1) % cards.length
//             setActiveIndex(nextIndex)

//             // If we're at the last card and about to loop back to the first
//             if (nextIndex === 0) {
//               // First scroll to the current position
//               scrollContainer.scrollTo({
//                 left: activeIndex * cardWidth,
//                 behavior: "auto",
//               })

//               // Then after a tiny delay, scroll to the first card with animation
//               setTimeout(() => {
//                 scrollContainer.scrollTo({
//                   left: 0,
//                   behavior: "smooth",
//                 })
//               }, 50)
//             } else {
//               // Normal scroll to next card
//               scrollContainer.scrollTo({
//                 left: nextIndex * cardWidth,
//                 behavior: "smooth",
//               })
//             }
//           }
//         }
//       }, 5000)
//     }

//     startTimer()

//     return () => clearInterval(timer)
//   }, [isHovering, activeIndex])

//   // Animate in on mount
//   useEffect(() => {
//     setIsVisible(true)
//     controls.start("visible")
//     // Don't call scroll here, it's causing the infinite loop
//   }, [controls])

//   // Separate effect for initial scroll
//   useEffect(() => {
//     // Only run once on mount
//     const initialScroll = () => {
//       if (scrollRef.current) {
//         const scrollContainer = scrollRef.current
//         const cards = scrollContainer.querySelectorAll(".team-card")
//         if (cards.length > 0) {
//           scrollContainer.scrollTo({
//             left: 0,
//             behavior: "auto",
//           })
//         }
//       }
//     }

//     initialScroll()
//   }, [])

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: { scale: 1.1, backgroundColor: "#f59e0b" },
//     tap: { scale: 0.95 },
//   }

//   return (
//     <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
//       {/* Animated background elements */}
//       <motion.div
//         className="absolute top-20 left-10 w-96 h-96 rounded-full bg-yellow-100 opacity-20 blur-3xl"
//         animate={{
//           x: [0, 50, 0],
//           y: [0, 30, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-yellow-200 opacity-20 blur-3xl"
//         animate={{
//           x: [0, -70, 0],
//           y: [0, 50, 0],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />

//       {/* Decorative elements */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 0.1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="absolute top-40 right-20 w-40 h-40 border-8 border-yellow-400 rounded-full"
//       />

//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 0.1, scale: 1 }}
//         transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
//         className="absolute bottom-40 left-20 w-24 h-24 border-8 border-yellow-400 rounded-full"
//       />

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           {/* <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: "5rem" }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="h-1 bg-yellow-500  mx-auto mb-6"
//           /> */}

//           <motion.h2
//             className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-yellow-600"
//             animate={{
//               textShadow: [
//                 "0 2px 4px rgba(0, 0, 0, 0.1)",
//                 "0 4px 8px rgba(0, 0, 0, 0.15)",
//                 "0 2px 4px rgba(0, 0, 0, 0.1)",
//               ],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//             }}
//           >
//             Meet Our Leadership Team
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
//           >
//             Visionary leaders with decades of experience, driving innovation and excellence across global markets.
//           </motion.p>
//         </motion.div>

//         <div className="relative">
//           {/* Scroll Buttons */}
//           <motion.button
//             variants={buttonVariants}
//             initial="initial"
//             whileHover="hover"
//             whileTap="tap"
//             onClick={() => scroll("left")}
//             className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 p-3 bg-white text-yellow-600 shadow-lg rounded-full z-10 hover:text-white hover:shadow-xl transition-all duration-300"
//           >
//             <ChevronLeft size={28} />
//           </motion.button>

//           <motion.button
//             variants={buttonVariants}
//             initial="initial"
//             whileHover="hover"
//             whileTap="tap"
//             onClick={() => scroll("right")}
//             className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 p-3 bg-white text-yellow-600 shadow-lg rounded-full z-10 hover:text-white hover:shadow-xl transition-all duration-300"
//           >
//             <ChevronRight size={28} />
//           </motion.button>

//           {/* Card Container */}
//           <motion.div
//             ref={scrollRef}
//             variants={containerVariants}
//             initial="hidden"
//             animate={controls}
//             className="flex overflow-x-hidden w-full gap-6 snap-x snap-mandatory scrollbar-hide"
//             style={{
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//             }}
//           >
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="team-card flex-shrink-0 w-full sm:w-1/2 md:w-[32%] lg:w-[32%] snap-center"
//                 onMouseEnter={() => setIsHovering(index)}
//                 onMouseLeave={() => setIsHovering(null)}
//               >
//                 <motion.div
//                   className="bg-white rounded-2xl overflow-hidden shadow-lg h-full"
//                   whileHover={{
//                     y: -10,
//                     boxShadow: "0 25px 50px -12px rgba(202, 138, 4, 0.7)",
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

//                     <motion.div
//                       className="w-full aspect-square overflow-hidden"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <img
//                         src={member.image || "/placeholder.svg"}
//                         alt={member.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </motion.div>

//                     <motion.div
//                       className="absolute bottom-0 left-0 right-0 p-4 z-20"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
//                     >
//                       <h3 className="text-white font-bold text-xl md:text-2xl">{member.name}</h3>
//                       <div className="flex items-center mt-1">
//                         <motion.div
//                           className="h-0.5 w-8 bg-yellow-500 mr-2"
//                           animate={{ width: isHovering === index ? 40 : 32 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                         <p className="text-yellow-300 font-medium">{member.role}</p>
//                       </div>
//                     </motion.div>
//                   </div>

//                   <div className="p-5">
//                     <p className="text-gray-700 mb-4">{member.shortBio}</p>

//                     <div className="mb-5">
//                       <h4 className="font-semibold text-base text-gray-900 mb-2 flex items-center">
//                         <Award className="w-5 h-5 mr-2 text-yellow-600" />
//                         Key Highlights
//                       </h4>
//                       <ul className="space-y-2">
//                         {member.highlights.map((highlight, i) => (
//                           <motion.li
//                             key={i}
//                             className="flex items-start text-base text-gray-600"
//                             initial={{ opacity: 0, x: -10 }}
//                             animate={{
//                               opacity: isHovering === index ? 1 : 0.8,
//                               x: 0,
//                             }}
//                             transition={{ duration: 0.3, delay: i * 0.1 }}
//                           >
//                             <motion.div
//                               className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2 flex-shrink-0"
//                               animate={{
//                                 scale: isHovering === index ? [1, 1.5, 1] : 1,
//                               }}
//                               transition={{
//                                 duration: 0.5,
//                                 repeat: isHovering === index ? Number.POSITIVE_INFINITY : 0,
//                                 repeatDelay: 1,
//                               }}
//                             />
//                             {highlight}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="flex justify-between items-center">
//                       <motion.a
//                         href={`/MemberOne#${member.id}`}
//                         className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-800 transition-colors"
//                         whileHover={{ x: 5 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         Read Full Bio
//                         <ExternalLink className="w-4 h-4 ml-1" />
//                       </motion.a>

//                       <motion.a
//                         href={member.linkedin}
//                         className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-yellow-100 hover:text-yellow-700 transition-colors"
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <Linkedin className="w-5 h-5" />
//                       </motion.a>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Pagination dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {teamMembers.map((_, index) => (
//             <motion.button
//               key={index}
//               className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-yellow-500" : "bg-gray-300"}`}
//               onClick={() => {
//                 setActiveIndex(index)
//                 if (scrollRef.current) {
//                   const cardWidth = scrollRef.current.querySelector(".team-card").offsetWidth + 24
//                   scrollRef.current.scrollTo({
//                     left: index * cardWidth,
//                     behavior: "smooth",
//                   })
//                 }
//               }}
//               whileHover={{ scale: 1.2 }}
//               animate={{
//                 scale: activeIndex === index ? [1, 1.2, 1] : 1,
//                 backgroundColor: activeIndex === index ? "#f59e0b" : "#d1d5db",
//               }}
//               transition={{
//                 duration: activeIndex === index ? 1.5 : 0.2,
//                 repeat: activeIndex === index ? Number.POSITIVE_INFINITY : 0,
//                 repeatDelay: 1,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

