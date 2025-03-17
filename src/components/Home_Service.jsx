import React from "react";
import { FaChartLine, FaBullhorn, FaGlobe, FaDatabase, FaLaptop } from "react-icons/fa";

const services = [
  {
    category: "Market Expansion Services",
    icon: <FaGlobe className="text-5xl text-yellow-600" />,
    link: "services/MarketExpansion",
    items: [
      "Product Sourcing",
      "Market Research & Insights",
      "Sales & Marketing",
      "Distribution & Logistics",
      "After Sales Services",
    ],
  },

 
  {
    category: "Brand Activation & Experiential Marketing",
    icon: <FaBullhorn className="text-5xl text-yellow-600" />,
    link: "services/BrandActivation",
    items: [
      "Brand Ambassador Programmes",
      "Events & Road Shows",
      "Sampling",
      "Shopper Marketing",
      "Instore Activation",
    ],
  },
  {
    category: "Sales & Merchandising",
    icon: <FaChartLine className="text-5xl text-yellow-600" />,
    link: "services/SalesAndMerchandising",
    items: [
      "Field Sales",
      "Merchandising",
      "Retail Audit",
      "Point of Sale Execution",
      "Asset Optimisation",
      "Product Management",
    ],
  },
  {
    category: "Data & Technology",
    icon: <FaDatabase className="text-5xl text-yellow-600" />,
    link: "/services/DataAndTechnology",
    items: [
      "Data & Operation Intelligence",
      "Sales Force Automation Tools",
      "Learning & Development Modules",
      "CRM Solutions",
    ],
  },
  {
    category: "Digital Marketing",
    icon: <FaLaptop className="text-5xl text-yellow-600" />,
    link: "services/DigitalMarketing",
    items: ["Content Marketing", "Social Media Marketing"],
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-gray-50 py-24 px-8 md:px-20 lg:px-36">
      <div className="text-center mb-16">
      <h2 className="text-6xl font-semibold mb-6 text-yellow-600  uppercase tracking-wide drop-shadow-lg">
          Our Services
          
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-sm border border-yellow-700 p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-[#C8A961] hover:shadow-yellow-700"
          >
            <div className="relative mx-auto w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full border border-gray-300">
              {service.icon}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-yellow-600">
              {service.category}
            </h3>
            <ul className="mt-4 text-lg text-gray-800 list-disc list-inside text-left ml-6">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a
              href={service.link}
              className="mt-6 inline-block text-yellow-600 font-semibold text-lg hover:underline"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-12 mt-12">
        {services.slice(3).map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] h-auto sm:h-[70vh] relative bg-white rounded-3xl shadow-xl border border-gray-300 p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-[#C8A961] hover:shadow-yellow-700"
          >
            <div className="relative mx-auto w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full border border-gray-300">
              {service.icon}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-yellow-600">
              {service.category}
            </h3>
            <ul className="mt-4 text-lg text-gray-800 list-disc list-inside text-left ml-6">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a
              href={service.link}
              className="mt-6 inline-block text-yellow-700 font-semibold text-lg hover:underline"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
