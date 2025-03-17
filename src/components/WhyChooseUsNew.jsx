"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function WhyChooseUs() {
  const [expanded, setExpanded] = useState(null)

  const toggleItem = (index) => {
    setExpanded(expanded === index ? null : index)
  }

  const reasons = [
    {
      title: "Long Term Strategic Partnership", 
      content: "Building lasting partnerships for sustainable growth and innovation in retail across Asia."
    },
    {
      title: "Deep Industry Knowledge and Global Network", 
      content: "Leveraging deep industry expertise and a vast global network for strategic growth."
    },
    {
      title: "Client Centric Focus", 
      content: "Prioritizing client needs with tailored solutions for lasting success."
    },
    {
      title: "Tailored Made Solutions", 
      content: "Crafting tailor-made solutions to drive business excellence and growth."
    },
    {
      title: "Data Driven Approach", 
      content: "Empowering decisions with a data-driven approach for measurable success."
    },
    {
      title: "Inbuilt Technology Platforms", 
      content: "Enhancing business efficiency with inbuilt technology platforms."
    }
  ];

//   const reasons = [
//     {
//       title: "Industry-Leading Expertise",
//       content:
//         "With over 15 years of experience, our team brings unmatched knowledge and skills to every project. Our specialists are certified in the latest technologies and methodologies.",
//     },
//     {
//       title: "Personalized Customer Service",
//       content:
//         "We believe in building relationships, not just completing transactions. Our dedicated account managers ensure your unique needs are understood and addressed throughout our partnership.",
//     },
//     {
//       title: "Innovative Solutions",
//       content:
//         "We stay ahead of industry trends to provide cutting-edge solutions that give your business a competitive advantage. Our R&D team constantly explores new technologies to enhance our offerings.",
//     },
//     {
//       title: "Proven Track Record",
//       content:
//         "Our portfolio includes successful projects for businesses of all sizes, from startups to Fortune 500 companies. Our 98% client satisfaction rate speaks to our commitment to excellence.",
//     },
//     {
//       title: "Competitive Pricing",
//       content:
//         "We offer transparent, value-based pricing with no hidden fees. Our flexible payment options and customized packages ensure you get maximum return on your investment.",
//     },
//   ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-36 relative ">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8 ">
            <div className="space-y-2">
              <h3 className="text-gray-500 font-medium tracking-wide uppercase">A LITTLE MORE ABOUT US</h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 ">
                Why Choose Us
              </h2>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleItem(index)}>
                    <h3 className="text-xl text-black font-[500.2]">{reason.title}</h3>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-900 transition-transform ${expanded === index ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expanded === index && (
                    <div className="mt-3 text-gray-800 animate-fadeIn">{reason.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl lg:flex justify-center items-center hidden ml-10 ">
            <img src="https://tse1.mm.bing.net/th?id=OIP.pihP2nhgs9HeH7_GExtMkQAAAA&pid=Api&P=0&h=220" className="w-[34vw] rounded-xl" alt="new" />
            {/* <img src="https://preview.uideck.com/items/smash/assets/images/about.jpg" className="rounded-xl" alt="new" /> */}
            </div>
        </div>
      </div>
    </section>
  )
}

