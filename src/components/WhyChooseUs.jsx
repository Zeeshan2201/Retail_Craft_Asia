// import { FaHandshake, FaNetworkWired, FaUserCheck, FaTools, FaChartLine, FaLaptopCode } from "react-icons/fa";

// const whyUsData = [
//   {
//     icon: <FaHandshake className="text-yellow-600 text-5xl" />, 
//     title: "Long Term Strategic Partnership", 
//     description: "Building lasting partnerships for sustainable growth and innovation in retail across Asia."
//   },
//   {
//     icon: <FaNetworkWired className="text-yellow-600 text-5xl" />, 
//     title: "Deep Industry Knowledge and Global Network", 
//     description: "Leveraging deep industry expertise and a vast global network for strategic growth."
//   },
//   {
//     icon: <FaUserCheck className="text-yellow-600 text-5xl" />, 
//     title: "Client Centric Focus", 
//     description: "Prioritizing client needs with tailored solutions for lasting success."
//   },
//   {
//     icon: <FaTools className="text-yellow-600 text-5xl" />, 
//     title: "Tailored Made Solutions", 
//     description: "Crafting tailor-made solutions to drive business excellence and growth."
//   },
//   {
//     icon: <FaChartLine className="text-yellow-600 text-5xl" />, 
//     title: "Data Driven Approach", 
//     description: "Empowering decisions with a data-driven approach for measurable success."
//   },
//   {
//     icon: <FaLaptopCode className="text-yellow-600 text-5xl" />, 
//     title: "Inbuilt Technology Platforms", 
//     description: "Enhancing business efficiency with inbuilt technology platforms."
//   }
// ];

// const WhyUs = () => {
//   return (
//     <section className="py-16 px-8 max-w-7xl mx-auto text-center">
//       <h2 className="text-4xl sm:text-6xl  font-semibold mb-16 text-yellow-600  uppercase tracking-wide drop-shadow-lg">Why Choose Us</h2>
//       <div className="grid  md:grid-cols-3 gap-12">
//         {whyUsData.map((item, index) => (
//           <div key={index} className="flex w-[26vw]   h-[50vh] px-4 py-4  flex-col items-center gap-6 group">
//             <div className="bg-gray-100 p-8 rounded-full transition-transform duration-300 group-hover:scale-110 shadow-lg">
//               {item.icon}
//             </div>
//             <h3 className="text-2xl  w-[24vw] text-center font-semibold group-hover:text-yellow-600 transition-colors text-gray-900 ">
//               {item.title}
//             </h3>
//             <p className="text-lg text-gray-700 max-w-md leading-relaxed text-center">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyUs;
import { FaHandshake, FaNetworkWired, FaUserCheck, FaTools, FaChartLine, FaLaptopCode } from "react-icons/fa";

const whyUsData = [
  {
    icon: <FaHandshake className="text-yellow-600 text-5xl" />, 
    title: "Long Term Strategic Partnership", 
    description: "Building lasting partnerships for sustainable growth and innovation in retail across Asia."
  },
  {
    icon: <FaNetworkWired className="text-yellow-600 text-5xl" />, 
    title: "Deep Industry Knowledge and Global Network", 
    description: "Leveraging deep industry expertise and a vast global network for strategic growth."
  },
  {
    icon: <FaUserCheck className="text-yellow-600 text-5xl" />, 
    title: "Client Centric Focus", 
    description: "Prioritizing client needs with tailored solutions for lasting success."
  },
  {
    icon: <FaTools className="text-yellow-600 text-5xl" />, 
    title: "Tailored Made Solutions", 
    description: "Crafting tailor-made solutions to drive business excellence and growth."
  },
  {
    icon: <FaChartLine className="text-yellow-600 text-5xl" />, 
    title: "Data Driven Approach", 
    description: "Empowering decisions with a data-driven approach for measurable success."
  },
  {
    icon: <FaLaptopCode className="text-yellow-600 text-5xl" />, 
    title: "Inbuilt Technology Platforms", 
    description: "Enhancing business efficiency with inbuilt technology platforms."
  }
];

const WhyUs = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-16 text-yellow-600 uppercase tracking-wide drop-shadow-lg">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyUsData.map((item, index) => (
          <div key={index} className="flex w-[90%] sm:w-[80%] md:w-[26vw] mx-auto h-auto px-4 py-6 flex-col items-center gap-6 group">
            <div className="bg-gray-100 p-6 rounded-full transition-transform duration-300 group-hover:scale-110 shadow-lg">
              {item.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors text-center">
              {item.title}
            </h3>
            <p className="text-md sm:text-lg text-gray-700 max-w-md leading-relaxed text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
