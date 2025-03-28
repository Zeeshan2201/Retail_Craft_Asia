"use client";

import { useEffect } from "react";
import { Linkedin, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Parag Wasnik",
    role: "Chief Executive Officer",
    shortBio:
      "An engineer and MBA with more than two decades of entrepreneurial experience across FMCG, Retail, Consumer Durables, and Healthcare sectors.",
    fullDescription: `An engineer and an MBA from premier institute, Parag brings in more than two decades of entrepreneurial, South East Asia and Pan India corporate experience across FMCG, Retail, Consumer Durables, and Healthcare sectors with top multinational organizations. His expertise lies in developing and executing growth strategies, driving operational excellence, developing world-class teams, leading strategic transformations, and empowering numerous businesses to achieve remarkable success.

Consistently recognized as a top performer and recipient of multiple prestigious corporate excellence awards, demonstrating an unwavering commitment to outstanding achievement and leadership in the industry, Parag's career is marked by a proven track record of accelerating quality growth, fostering collaborations, and providing thought leadership. He has successfully grown brands, managed client portfolios, and maintained strong relationships with senior leadership to jointly drive business growth.

In his role as CEO, Parag has built and scaled businesses from the ground up, managing multicultural and multi-country sensitivities. As a result-oriented leader with a passion for people development, he has successfully demonstrated an increase in revenue and market share by enhancing customer experience, complemented by his proficiency in driving innovation and digital transformation to boost productivity and revenue.

Parag is not just a leader but an inspiration, embodying excellence in every endeavor. An empathetic leader committed to DEI and ESG and driven by a passion for creating a better world for all. His visionary leadership continues to pave the way for sustainable growth and success in the industry.

Outside work, he is an avid traveler and has explored over 40 countries.`,
    image: "/Team/Member_2.png",
    highlights: [
      "23+ years of experience in South East Asia and India",
      "Expert in growth strategies and operational excellence",
      "Driven innovation and digital transformation",
      "Explored over 40 countries as an avid traveler",
    ],
    linkedin:
      "https://www.linkedin.com/in/paragwasnik?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    name: "Jean-Boris ROUX",
    role: "Independent Director",
    shortBio:
      "A seasoned leader with over 25 years of diverse experience spanning distribution, hospitality, FMCG, and retail industries across Europe and Asia.",
    fullDescription: `Jean-Boris ROUX, aka "JB", is a seasoned leader with over 25 years of diverse experience spanning distribution, hospitality, FMCG, and retail industries across Europe and Asia. His career has allowed him to work with some of the world's most prestigious companies, where he gained invaluable expertise in strategic growth, operational excellence, and market expansion.

Over the years, JB has built a strong track record in shaping growth strategies, managing franchise development, and building distribution networks, resulting in market dominance in the regions he oversaw. This expertise covers supermarkets, convenience stores, and dealerships, with hands-on experience at companies like Shell, Lidl, and Ford, where he led successful retail transformations and market expansions.

Throughout his career, JB has served on multiple Boards of Directors across Cambodia, Thailand, Singapore, Myanmar, and Laos, including that of a regional airport food retail group acquired by global multi-sector catering leader Newrest and offering a diverse range of in-house brands as well as international chains such as Burger King, Starbucks, Subway, The Pizza Company, Dairy Queen, and Krispy Kreme. JB's leadership is characterized by his ability to blend visionary thinking with operational execution. His true passion lies in building sustainable businesses and developing strong high-performing teams. Whether transforming a company's operations or leading brands to new heights, JB's focus remains on creating lasting success, inspiring growth, and delivering exceptional value to all stakeholders.

In addition to his corporate leadership roles, JB has held the position of President of the French-Cambodian Chamber of Commerce for five years and is currently serving as Vice President of the Franco-Thai Chamber of Commerce, actively contributing to business development and trade initiatives in the region.

JB holds a Master's degree in Business Administration from EDC Business School in France and speaks French, English, Cambodian, Thai, and German. A certified professional coach, he has also successfully completed the Director Certification Program at the Institute of Directors in Thailand and holds a Six Sigma Green Belt certification. Outside of work, he is married and a proud father of two children.`,
    image: "/Team/Member_1.png",
    highlights: [
      "25+ years of experience across Europe and Asia",
      "Former President of French-Cambodian Chamber of Commerce",
      "Expertise in strategic growth and market expansion",
      "Certified professional coach and Six Sigma Green Belt",
    ],
    linkedin:
      "https://www.linkedin.com/in/jean-boris-roux-b252774?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  {
    id: 3,
    name: "Naresh Semwal",
    role: "Capability Director",
    shortBio:
      "Naresh Semwal is a global FMCG and Beverages leader with 19+ years of experience across India, Africa, and Southeast Asia. He has driven market expansion, brand building, and commercial excellence for top organizations like Jagota Brothers, Food Empire, DKSH-Smollan, Wilmar, and Reckitt Benckiser..",
    fullDescription: `A seasoned global leader with over 19 years of experience in the FMCG and Beverages industries across India, Africa, and Southeast Asia, Naresh Semwal has successfully driven market expansion, brand building, and commercial excellence for some of the leading organizations, including Jagota Brothers, Food Empire, DKSH-Smollan, Wilmar, ConAgra Foods, Reckitt Benckiser, and Parle Agro.

Naresh has a proven track record in developing and executing high-impact RTM and GTM strategies, optimizing distribution networks, retail expansion, and channel development to accelerate business growth. His expertise lies in building scalable sales and marketing models, launching successful brands, and implementing customer-centric strategies that drive market dominance.

With proficiency in P&L management, category management, and operational execution, he has consistently led growth, enhanced customer experience, and fostered long-term partnerships with key stakeholders. He has successfully executed large-scale field operations, managing Business Unit Heads, brand advisors, merchandisers, and sales teams to ensure seamless execution and brand visibility across multiple markets.

Naresh's leadership philosophy is rooted in execution excellence, team empowerment, and strategic innovation. His ability to align vision with operational execution, combined with his expertise in digital transformation and data-driven decision-making, makes him a forward-thinking leader capable of navigating complex business landscapes.

Beyond his corporate achievements, Naresh is deeply committed to social impact and community development. He actively supports orphan houses and social welfare initiatives, working to uplift underprivileged communities and create sustainable opportunities for those in need.

Naresh holds a Bachelor's degree from Hemwati Nandan Bahuguna University in India and a Diploma in Computer Education. Naresh Speaks English, Hindi, a bit Thai also, A strong advocate for continuous learning, he integrates technology and business intelligence to drive efficiency and growth. Outside of work, he is married and a proud father, love traveling.
`,
    image: "/Team/Member_3.png",
    highlights: [
      "RTM & GTM Expertise – Optimized distribution, retail expansion, and channel development",
      "Leadership & Execution – Managed large-scale teams, ensuring seamless operations and brand visibility",
      "Digital & Data-Driven Growth – Leveraged technology for strategic innovation.",
      "Social Impact & Community Development – Supports orphan houses and welfare initiatives.",
    ],
    linkedin:
      "https://www.linkedin.com/in/naresh-semwal-88875018?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "Wichit Thammaphimo",
    role: "Human Resource Director",
    shortBio:
      "Wichit Thammaphimo, a seasoned HR professional, has successfully led and managed numerous multinational businesses across the ASEAN region, including Thailand, Malaysia, Singapore, Indonesia, and Vietnam.",
    fullDescription: `Wichit has played a pivotal role in initiating and implementing continuous organizational development programs, overseeing HR strategies, policies, and processes while ensuring compliance with both organizational and local regulations. His extensive experience spans various industries, where he has provided expert consultation in human resources and general administration to leading companies such as Kerry Logistics, Kerry Freight, Kintetsu World Express, Linfox Logistics, Linfox Transport, LF Logistics, and Formica.

With deep expertise in HR leadership across multiple countries, Wichit has successfully navigated the complexities of diverse cultural environments, strategic business expectations, and organizational dynamics. His capabilities include workforce planning, talent acquisition, compensation and benefits, rewards management, compliance, talent development, cost and budget planning, performance development, HRIS, policies and procedures, succession planning, employee and industrial relations, and customer satisfaction management. He is also highly skilled in learning and development, coaching, and mentoring, ensuring employees and organizations achieve sustained growth.

An expert in change management and organizational transition, Wichit is deeply passionate about people development and talent empowerment. He holds a Bachelor's degree from Assumption University and has earned certifications in Professional HR, Public Industrial Relations, and Professional Occupational Health & Safety. Beyond his professional achievements, he enjoys traveling and listening to jazz music, embracing a lifestyle that balances work excellence with personal fulfillment.`,
    image: "/Team/Member_4.png",
    highlights: [
      "Expert in change management and transition",
      "Deep experience in ASEAN HR leadership",
      "Extensive background in compliance and workforce planning",
      "Certified in Professional HR and Occupational Health & Safety",
    ],
    linkedin:
      "https://www.linkedin.com/in/wichit-thammaphimol-6110b85a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const TeamMemberDetail = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // Remove #
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="py-20 bg-gray-50">
      {/* <section className="py-20 bg-gradient-to-br from-[#d9e0fc] to-white"> */}
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-16">
          <h2 className="text-center text-yellow-600 font-semibold md:text-6xl text-4xl mt-15 py-10 inline-block relative">
            {/* <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 font-semibold md:text-6xl text-4xl mt-15 py-10 inline-block relative"> */}
            Meet Our Leadership Team
          </h2>
          <p className="text-black text-2xl max-w-2xl mx-auto mt-6">
            Visionary leaders with decades of experience, driving innovation and
            excellence across global markets.
          </p>
        </div>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={member.id}
              id={member.id}
              className="bg-[#fff] rounded-2xl shadow-yellow-600/60 shadow-lg overflow-hidden"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/3 p-8 flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-yellow-600/80 overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* <div className="absolute -bottom-2 -right-2 group  hover:-right-3 bg-yellow-600/80 rounded-full p-2 shadow-lg">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        className="text-white hover:text-blue-200 transition-colors"
                      >
                        <Linkedin className="w-6 h-6 group-hover:w-8 group-hover:h-8" />
                      </a>
                    </div> */}
                  </div>
                  <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 font-semibold text-2xl  mt-15 pt-10 inline-block relative">
                    {member.name}
                  </h3>
                  <div className="flex items-center mt-2 mb-4">
                    <Briefcase className="w-4 h-4 text-gray-600 mr-2" />
                    <p className="text-gray-600 md:text-lg font-medium">
                      {member.role}
                    </p>
                  </div>
                  <div className="mt-4 space-y-2 w-full">
                    {member.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <Award className="w-5 h-5 text-yellow-600/80 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-600 text-left md:text-base text-sm">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/3 p-8 lg:p-12">
                  <p className="text-lg text-left text-gray-600 font-medium mb-6">
                    {member.shortBio}
                  </p>
                  <div className="prose prose-blue max-w-none">
                    {member.fullDescription
                      .split("\n\n")
                      .map((paragraph, i) => (
                        <p key={i} className="text-gray-600 text-left mb-4">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;
