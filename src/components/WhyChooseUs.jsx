import { FaHandshake, FaNetworkWired, FaUserCheck, FaTools, FaChartLine, FaLaptopCode } from "react-icons/fa";

const whyUsData = [
  { icon: <FaHandshake className="text-yellow-500 text-4xl" />, title: "Long Term Strategic Partnership", description: "Building lasting partnerships for sustainable growth and innovation in retail across Asia." },
  { icon: <FaNetworkWired className="text-yellow-500 text-4xl" />, title: "Deep Industry Knowledge and Global Network", description: "Leveraging deep industry expertise and a vast global network for strategic growth." },
  { icon: <FaUserCheck className="text-yellow-500 text-4xl" />, title: "Client Centric Focus", description: "Prioritizing client needs with tailored solutions for lasting success." },
  { icon: <FaTools className="text-red-500 text-4xl" />, title: "Tailored Made Solutions", description: "Crafting tailor-made solutions to drive business excellence and growth." },
  { icon: <FaChartLine className="text-yellow-500 text-4xl" />, title: "Data Driven Approach", description: "Empowering decisions with a data-driven approach for measurable success." },
  { icon: <FaLaptopCode className="text-yellow-500 text-4xl" />, title: "Inbuilt Technology Platforms", description: "Enhancing business efficiency with inbuilt technology platforms." }
];

const WhyUs = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {whyUsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4 group">
            <div className="bg-gray-100 p-6 rounded-full transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold group-hover:text-yellow-500 transition-colors">{item.title}</h3>
            <p className="text-gray-600 max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
