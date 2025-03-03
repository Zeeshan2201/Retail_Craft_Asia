import { useState } from "react";

const faqData = [
  {
    items: [
      {
        question: "What services does Retail Craft Asia provide?",
        answer: "Retail Craft Asia offers expert consulting services for the retail industry, including business strategy, store optimization, digital transformation, and customer experience enhancement."
      },
      {
        question: "Who can benefit from Retail Craft Asia’s services?",
        answer: "Retailers of all sizes, from small businesses to large enterprises, can benefit from our insights and tailored strategies to improve efficiency, sales, and customer engagement"
      },
      {
        question: "How does Retail Craft Asia help retailers improve their business?",
        answer: "We analyze market trends, assess operational challenges, and provide data-driven recommendations to enhance store performance, supply chain management, and omnichannel strategies."
      },
      {
        question: "Can Retail Craft Asia assist with branding and marketing strategies?",
        answer: "Absolutely. We provide branding guidance, customer engagement strategies, and digital marketing solutions to boost visibility and sales."
      },
      {
        question: "How do I get started with your services?",
        answer: "You can contact us through our website or email us to schedule a consultation. Our team will assess your needs and provide a customized solution."
      },
      {
        question: " Do you work with international clients?",
        answer: "Yes, we provide consulting services to retailers across different regions, helping them adapt to global market trends and customer expectations."
      },
      {
        question:"What makes Retail Craft Asia different from other consulting firms?",
        answer:"Our industry-specific expertise, data-driven approach, and deep understanding of retail trends allow us to deliver actionable strategies that drive real business growth."
      },
      {
        question:"How does Retail Craft Asia stay updated with retail industry trends?",
        answer:"Our team continuously researches market developments, analyzes consumer behavior, and collaborates with industry leaders to provide the most relevant and effective solutions for our clients."
      },
      {
        question:"Can Retail Craft Asia help with inventory management and supply chain optimization?",
        answer:"Yes, we provide strategies to improve inventory control, reduce costs, and enhance supply chain efficiency to ensure smooth operations and better profitability."
      },
      {
        question:"Can Retail Craft Asia assist with store layout and visual merchandising?",
        answer:"Yes, we provide expert guidance on store design, product placement, and visual merchandising strategies to enhance customer experience and maximize sales"
      },
      
    ]
  },
  
];

function GenFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-32 py-12 bg-gradient-to-r from-[#fdf6e3] to-[#f0e6d6] min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h1>
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-yellow-500 pb-2">
            {section.category}
          </h2>
          {section.items.map((item, index) => (
            <div
              key={index}
              className="mb-4 transition-all duration-300 ease-in-out"
            >
              <div
                className={`flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all ${
                  openIndex === `${sectionIndex}-${index}` ? "border-l-4 border-yellow-500" : ""
                }`}
                onClick={() => toggleAccordion(`${sectionIndex}-${index}`)}
              >
                <span className={`text-lg font-semibold ${
                  openIndex === `${sectionIndex}-${index}` ? "text-yellow-600" : "text-gray-800"
                }`}>
                  {item.question}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${
                  openIndex === `${sectionIndex}-${index}` ? "rotate-180" : ""
                }`}>
                  {openIndex === `${sectionIndex}-${index}` ? "−" : "+"}
                </span>
              </div>
              {/* <div className="h-[1rem] w-full bg-gray-700"></div> */}
              {openIndex === `${sectionIndex}-${index}` && (
               
               <div className="p-6 border-t-black border-t-2 border-l-4 border-yellow-500 bg-white rounded-lg shadow-md text-gray-600">
                 
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GenFAQ;