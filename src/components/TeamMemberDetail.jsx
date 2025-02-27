import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Jean-Boris ROUX",
    role: "Founder",
    fullDescription: `Jean-Boris ROUX, aka “JB”, is a seasoned leader with over 25 years of diverse experience spanning distribution, hospitality, FMCG, and retail industries across Europe and Asia. His career has allowed him to work with some of the world's most prestigious companies, where he gained invaluable expertise in strategic growth, operational excellence, and market expansion.

Over the years, JB has built a strong track record in shaping growth strategies, managing franchise development, and building distribution networks, resulting in market dominance in the regions he oversaw. This expertise covers supermarkets, convenience stores, and dealerships, with hands-on experience at companies like Shell, Lidl, and Ford, where he led successful retail transformations and market expansions.

Throughout his career, JB has served on multiple Boards of Directors across Cambodia, Thailand, Singapore, Myanmar, and Laos, including that of a regional airport food retail group acquired by global multi-sector catering leader Newrest and offering a diverse range of in-house brands as well as international chains such as Burger King, Starbucks, Subway, The Pizza Company, Dairy Queen, and Krispy Kreme. JB's leadership is characterized by his ability to blend visionary thinking with operational execution. His true passion lies in building sustainable businesses and developing strong high-performing teams. Whether transforming a company’s operations or leading brands to new heights, JB’s focus remains on creating lasting success, inspiring growth, and delivering exceptional value to all stakeholders.

In addition to his corporate leadership roles, JB has held the position of President of the French-Cambodian Chamber of Commerce for five years and is currently serving as Vice President of the Franco-Thai Chamber of Commerce, actively contributing to business development and trade initiatives in the region.

JB holds a Master’s degree in Business Administration from EDC Business School in France and speaks French, English, Cambodian, Thai, and German. A certified professional coach, he has also successfully completed the Director Certification Program at the Institute of Directors in Thailand and holds a Six Sigma Green Belt certification. Outside of work, he is married and a proud father of two children.`,
    image: "/Team/Member_1.png",
  },
  {
    id: 2,
    name: "Parag Wasnik",
    role: "CEO",
    fullDescription: `An engineer and an MBA from premier institute, Parag brings in more than two decades of entrepreneurial, South East Asia and Pan India corporate experience across FMCG, Retail, Consumer Durables, and Healthcare sectors with top multinational organizations. His expertise lies in developing and executing growth strategies, driving operational excellence, developing world-class teams, leading strategic transformations, and empowering numerous businesses to achieve remarkable success.

Consistently recognized as a top performer and recipient of multiple prestigious corporate excellence awards, demonstrating an unwavering commitment to outstanding achievement and leadership in the industry, Parag’s career is marked by a proven track record of accelerating quality growth, fostering collaborations, and providing thought leadership. He has successfully grown brands, managed client portfolios, and maintained strong relationships with senior leadership to jointly drive business growth.

In his role as CEO, Parag has built and scaled businesses from the ground up, managing multicultural and multi-country sensitivities. As a result-oriented leader with a passion for people development, he has successfully demonstrated an increase in revenue and market share by enhancing customer experience, complemented by his proficiency in driving innovation and digital transformation to boost productivity and revenue.

Parag is not just a leader but an inspiration, embodying excellence in every endeavor. An empathetic leader committed to DEI and ESG and driven by a passion for creating a better world for all. His visionary leadership continues to pave the way for sustainable growth and success in the industry.

Outside work, he is an avid traveler and has explored over 40 countries.`,
    image: "/Team/Member_2.png",
  },
];

const TeamMemberDetail = () => {
  return (
    <section className="my-10 bg-purple-900">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center hover:text-white">Meet Our Team</h2>
        <div className="space-y-10 mx-2 sm:mx-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col md:flex-row items-center rounded-xl bg-white p-6 shadow-lg w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full md:w-48 md:h-48 object-cover"
                />
                <h3 className="text-xl font-semibold text-center mt-4">{member.name}</h3>
                <p className="text-gray-600 font-medium text-center">{member.role}</p>
              </div>
              <div className="w-full md:w-2/3 text-left sm:p-4">
                <p className="text-gray-700 mt-2">{member.fullDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;
