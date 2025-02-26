import { useState } from "react";

const teamMembers = [
  {
    name: "Jean-Boris ROUX",
    role: "Founder",
    shortDescription: "Jean-Boris ROUX, aka 'JB', is a seasoned leader with over 25 years of experience...",
    fullDescription: `Jean-Boris ROUX, aka “JB”, is a seasoned leader with over 25 years of diverse experience spanning distribution, hospitality, FMCG, and retail industries across Europe and Asia. His career has allowed him to work with some of the world's most prestigious companies, where he gained invaluable expertise in strategic growth, operational excellence, and market expansion.\n\nOver the years, JB has built a strong track record in shaping growth strategies, managing franchise development, and building distribution networks, resulting in market dominance in the regions he oversaw. This expertise covers supermarkets, convenience stores, and dealerships, with hands-on experience at companies like Shell, Lidl, and Ford, where he led successful retail transformations and market expansions.\n\nThroughout his career, JB has served on multiple Boards of Directors across Cambodia, Thailand, Singapore, Myanmar, and Laos, including that of a regional airport food retail group acquired by global multi-sector catering leader Newrest and offering a diverse range of in-house brands as well as international chains such as Burger King, Starbucks, Subway, The Pizza Company, Dairy Queen, and Krispy Kreme. JB's leadership is characterized by his ability to blend visionary thinking with operational execution. His true passion lies in building sustainable businesses and developing strong high-performing teams. Whether transforming a company’s operations or leading brands to new heights, JB’s focus remains on creating lasting success, inspiring growth, and delivering exceptional value to all stakeholders.\n\nIn addition to his corporate leadership roles, JB has held the position of President of the French-Cambodian Chamber of Commerce for five years and is currently serving as Vice President of the Franco-Thai Chamber of Commerce, actively contributing to business development and trade initiatives in the region.\n\nJB holds a Master’s degree in Business Administration from EDC Business School in France and speaks French, English, Cambodian, Thai, and German. A certified professional coach, he has also successfully completed the Director Certification Program at the Institute of Directors in Thailand and holds a Six Sigma Green Belt certification. Outside of work, he is married and a proud father of two children.`,
    image: "/Team/Member_1.png",
  },
  {
    name: "Parag Wasnik",
    role: "CEO",
    shortDescription: "An engineer and an MBA, Parag has over two decades of experience in FMCG, Retail...",
    fullDescription: `An engineer and an MBA from premier institute, Parag brings in more than two decades of entrepreneurial, South East Asia and Pan India corporate experience across FMCG, Retail, Consumer Durables, and Healthcare sectors with top multinational organizations. His expertise lies in developing and executing growth strategies, driving operational excellence, developing world-class teams, leading strategic transformations, and empowering numerous businesses to achieve remarkable success.\n\nConsistently recognized as a top performer and recipient of multiple prestigious corporate excellence awards, demonstrating an unwavering commitment to outstanding achievement and leadership in the industry, Parag’s career is marked by a proven track record of accelerating quality growth, fostering collaborations, and providing thought leadership. He has successfully grown brands, managed client portfolios, and maintained strong relationships with senior leadership to jointly drive business growth.\n\nIn his role as CEO, Parag has built and scaled businesses from the ground up, managing multicultural and multi-country sensitivities. As a result-oriented leader with a passion for people development, he has successfully demonstrated an increase in revenue and market share by enhancing customer experience, complemented by his proficiency in driving innovation and digital transformation to boost productivity and revenue.\n\nParag is not just a leader but an inspiration, embodying excellence in every endeavor. An empathetic leader committed to DEI and ESG and driven by a passion for creating a better world for all. His visionary leadership continues to pave the way for sustainable growth and success in the industry.\n\nOutside work, he is an avid traveler and has explored over 40 countries.`,
    image: "/Team/Member_2.png",
  },
];

function ManagementTeam() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Management Team</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-8 border rounded-lg shadow-lg bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-25 rounded-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              {expanded === index ? member.fullDescription : member.shortDescription}
            </p>
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="mt-4 text-blue-500 hover:underline focus:outline-none"
            >
              {expanded === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementTeam;
