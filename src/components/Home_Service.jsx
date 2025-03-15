import React from "react";
import { FaChartLine, FaBullhorn, FaGlobe, FaDatabase, FaLaptop } from "react-icons/fa";

const services = [
  {
    category: "Sales & Merchandising",
    icon: <FaChartLine className="text-5xl text-[#C8A961]" />,
    items: [
      "Field Sales",
      "Merchandising",
      "Retail Audit",
      "Point of Sale Execution",
      "Asset Optimisation",
      "Product Management"
    ]
  },
  {
    category: "Brand Activation & Experiential Marketing",
    icon: <FaBullhorn className="text-5xl text-[#C8A961]" />,
    items: [
      "Brand Ambassador Programmes",
      "Events & Road Shows",
      "Sampling",
      "Shopper Marketing",
      "Instore Activation"
    ]
  },
  {
    category: "Market Expansion Services",
    icon: <FaGlobe className="text-5xl text-[#C8A961]" />,
    items: [
      "Product Sourcing",
      "Market Research & Insights",
      "Sales & Marketing",
      "Distribution & Logistics",
      "After Sales Services"
    ]
  },
  {
    category: "Data & Technology",
    icon: <FaDatabase className="text-5xl text-[#C8A961]" />,
    items: [
      "Data & Operation Intelligence",
      "Sales Force Automation Tools",
      "Learning & Development Modules",
      "CRM Solutions"
    ]
  },
  {
    category: "Digital Marketing",
    icon: <FaLaptop className="text-5xl text-[#C8A961]" />,
    items: [
      "Content Marketing",
      "Social Media Marketing"
    ]
  }
];

const ServicesSection = () => {
  return (
    <div className="bg-gray-50 py-24 px-8 md:px-20 lg:px-36">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-extrabold text-[#C8A961] relative inline-block">
          Our Services
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C8A961] rounded"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.slice(0, 3).map((service, index) => (
          <div key={index} className="relative bg-white rounded-3xl shadow-xl border border-gray-300 p-8 text-center transition-all duration-300 hover:shadow-2xl hover:border-[#C8A961]">
            <div className="relative mx-auto w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full border border-gray-300">
              {service.icon}
            </div>
            <h3 className="mt-6 text-2xl font-bold text-[#C8A961]">{service.category}</h3>
            <ul className="mt-4 text-lg text-gray-800 space-y-2">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a href="#" className="mt-6 inline-block text-[#C8A961] font-semibold text-lg hover:underline">
              Learn more
            </a>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-16 mt-12">
        {services.slice(3).map((service, index) => (
          <div key={index} className=" w-[30%]  h-[70vh] relative bg-white rounded-3xl shadow-xl border border-gray-300 p-8 text-center transition-all duration-300 hover:shadow-2xl hover:border-[#C8A961]">
            <div className="relative mx-auto w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full border border-gray-300">
              {service.icon}
            </div>
            <h3 className=" mt-6 text-2xl font-bold text-[#C8A961]">{service.category}</h3>
            <ul className="mt-4 text-lg text-gray-800 space-y-2">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a href="#" className="mt-6 inline-block text-[#C8A961] font-semibold text-lg hover:underline">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
