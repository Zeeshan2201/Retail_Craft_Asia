// // import Image from "next/image";
// // import Link from "next/link";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// // import Tech from '../../src/animation/Sales/Tech/animations/a473d880-55e7-45db-930c-320a743b2afe.json'
// import Tech from '../../src/animation/service/tech1.json'
// // import Tech from '../../src/animation/service/tech.json'
// import Marketing from '../../src/animation/service/marketing.json'
// import Lottie from "react-lottie";
// import { Link } from 'react-router-dom';

// export default function FeaturedProject() {
//   return (
//     <>
//     <section className="mt-10 ">
//     <div>
//           <div className="max-w-7xl  md:mx-auto grid md:grid-cols-2 gap-8 items-center">
//             <div className="relative">
//             {/* <DotLottieReact
//       src="https://lottie.host/90ff9944-9dce-4f64-907b-9a3ad1b4d1ff/7ogF0XlY1l.lottie"
//       loop
//       autoplay
//     /> */}
//   <svg className='md:w-[400px] md:h-[200px]  w-[380px] h-[180px]' xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill="none" />

//   <line x1="50" y1="150" x2="350" y2="150" stroke="#000" strokeWidth="2" />

//   <line x1="50" y1="150" x2="50" y2="50" stroke="#000" strokeWidth="2" />

//   <text x="30" y="155" fontSize="12" fill="#000">0</text>
//   <text x="30" y="100" fontSize="12" fill="#000">50</text>
//   <text x="30" y="50" fontSize="12" fill="#000">100</text>

//   <text x="50" y="170" fontSize="12" fill="#000">0%</text>
//   <text x="150" y="170" fontSize="12" fill="#000">25%</text>
//   <text x="250" y="170" fontSize="12" fill="#000">50%</text>
//   <text x="350" y="170" fontSize="12" fill="#000">100%</text>

//   <path d="M50,150" stroke="#000" strokeWidth="3" fill="none">
//     <animate attributeName="d" dur="4s" repeatCount="indefinite"
//              values="M50,150;
//                      M50,150 C100,150 100,100 150,100 S200,50 250,50 S300,50 350,50;
//                      M50,150" />
//   </path>

//   <circle cx="50" cy="150" r="5" fill="#000">
//   </circle>
//   <circle cx="150" cy="100" r="0" fill="#000">
//   </circle>
//   <circle cx="250" cy="50" r="0" fill="#000">
//   </circle>
//   <circle cx="350" cy="50" r="0" fill="#000">
//   </circle>
// </svg>        
//             </div>

//             <div className="text-black space-y-6 px-4">
//               <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-semibold leading-tight">
//               Sales and Merchandising
//               </h3>
              
//               <p className="text-amber-950 text-lg  text-justify">
//               Maximize your brand’s presence with expert sales, merchandising, and retail audits. We ensure optimal product placement, asset optimization, and point-of-sale execution.
//               </p>
//               <p className="text-amber-950 text-lg text-justify">
//               Enhance customer engagement and drive conversions with data-driven insights.
//  </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <Link 
//                   to="/services/SalesAndMerchandising" 
//                   className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
//                 >
//                   Get Started
//                   <span className="ml-2">→</span>
//                 </Link>
//                 <Link
//                   to="/contact" 
//                   className="md:inline-flex items-center px-6 py-3 border-2 hidden border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
//                 >
//                   Request a Free Consultation
//                   <span className="ml-2">→</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="max-w-7xl mx-auto grid grid-flow-dense md:grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 items-center mt-10">
//             <div className="text-white row-start-2 md:row-start-auto md:col-start-1 space-y-6 px-4">
//               <h3 className="text-transparent bg-clip-text bg-gradient-to-tl from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-semibold leading-tight">
//               Brand Activation & Experiential Marketing
//               </h3>
              
//               <p className="text-amber-950 text-lg text-justify">
//               We create immersive brand experiences through ambassador programs, roadshows, and in-store activations to captivate audiences and strengthen brand loyalty. </p>
              
//               <p className="text-amber-950 text-lg text-justify">
//               From product sampling to shopper marketing, we craft experiential campaigns that boost engagement and drive sales. Whether online or offline, every interaction enhances brand perception and builds strong consumer relationships. </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <Link 
//                   to="/services/BrandActivation" 
//                   className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
//                 >
//                   Get Started
//                   <span className="ml-2">→</span>
//                 </Link>
//                 <Link 
//                   to="/contact" 
//                   className="md:inline-flex items-center px-6 py-3 border-2 hidden border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
//                 >
//                   Request a Free Consultation
//                   <span className="ml-2">→</span>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative">
//             <DotLottieReact
//       src="https://lottie.host/af206ab1-250f-43d9-8308-2cee354481ca/76CXF5NodU.lottie"
//       loop
//       autoplay
//     />

//             </div>
//           </div>
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-10">
//             <div className="relative">
//             <DotLottieReact
//       src="https://lottie.host/96c18b5c-99e1-4a44-9617-66423ec4a335/QSRNUUsVff.lottie"
//       loop
//       autoplay
//     />
//             </div>
//             <div className="text-white space-y-6 px-4">
//               <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-semibold leading-tigh">
//               Market Expansion Services
//               </h3>
              
//               <p className="text-amber-950 text-lg text-justify">
//               Our market expansion services offer end-to-end solutions for business growth, including product sourcing, sales, and marketing for a seamless market entry.  </p>
              
//               <p className="text-amber-950 text-lg text-justify">
//               Our solutions optimize supply chain operations, helping businesses reach the right customers and achieve long-term success.</p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <Link 
//                   to="/services/MarketExpansion" 
//                   className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
//                 >
//                   Get Started
//                   <span className="ml-2">→</span>
//                 </Link>
//                 <Link 
//                   to="/contact" 
//                   className="md:inline-flex items-center px-6 py-3 border-2 hidden border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
//                 >
//                   Request a Free Consultation
//                   <span className="ml-2">→</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div  className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center">
//           <div className=" row-start-2 md:row-start-auto md:col-start-1 text-white space-y-6 px-4">
//               <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-semibold leading-tigh">
//               Data & Technology
//               </h3>
              
//               <p className="text-amber-950 text-lg text-justify">
//               We empower businesses with data-driven intelligence and automation tools to streamline operations and improve decision-making. </p>
              
//               <p className="text-amber-950 text-lg text-justify">
//               By integrating innovation with efficiency, we enable brands to leverage data for smarter, more effective strategies.

//  </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <Link 
//                   to="/services/DataAndTechnology" 
//                   className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
//                 >
//                   Get Started
//                   <span className="ml-2">→</span>
//                 </Link>
//                 <Link 
//                   to="/contact" 
//                   className="md:inline-flex items-center px-6 py-3 border-2 hidden border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
//                 >
//                   Request a Free Consultation
//                   <span className="ml-2">→</span>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative md:w-[400px] w-[380px] h-[400px]">
            
// <Lottie
// className=""
//   options={{
//     loop: true,
//     autoplay: true,
//     animationData: Tech,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   }}
//   // height={400}
//   // width={400}
// />
//             </div>
//           </div>
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//           <div className="relative">
                  
// <Lottie
//   options={{
//     loop: true,
//     autoplay: true,
//     animationData: Marketing,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   }}
//   height={300}
//   width={300}
// />
//             </div>
//             <div className="text-white space-y-6 px-4 mt-10">
//               <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-semibold leading-tigh">
//               Digital Marketing
//               </h3>
              
//               <p className="text-amber-950 text-lg text-justify">
//               Our digital marketing services enhance brand presence through content marketing and social media strategies, helping businesses engage audiences and drive customer interactions. 
//               </p>
              
//               <p className="text-amber-950 text-lg text-justify">
//               With a results-driven approach, we ensure businesses stay visible and competitive online. Our tailored strategies generate leads, boost conversions, and maximize digital outreach for long-term success.

//  </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <Link 
//                   to="/services/DigitalMarketing" 
//                   className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
//                 >
//                   Get Started
//                   <span className="ml-2">→</span>
//                 </Link>
//                 <Link 
//                   to="/contact" 
//                   className="md:inline-flex hidden items-center px-6 py-3 border-2 border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
//                 >
//                   Request a Free Consultation
//                   <span className="ml-2">→</span>
//                 </Link>
//               </div>
//             </div>
            
//           </div>
//       </div>
//     </section>
//     </>
//   );
// }
// {/* <DotLottieReact
//       src="https://lottie.host/dc6dcc14-2e94-4c69-bc18-84a0b1df7211/lXDcz5OyJe.lottie"
//       loop
//       autoplay
//     /> */}
//     {/* <DotLottieReact
//       src="https://lottie.host/dc6dcc14-2e94-4c69-bc18-84a0b1df7211/lXDcz5OyJe.lottie"
//       loop
//       autoplay
//     /> */}




import React from "react";
import {
  FaChartLine,
  FaBullhorn,
  FaGlobe,
  FaDatabase,
  FaLaptop,
  FaUsers,
  FaShoppingCart,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaBoxOpen,
  FaRocket,
  FaHandshake,
  FaSearch,
  FaTruck,
  FaHeadset,
  FaBrain,
  FaRobot,
  FaGraduationCap,
  FaCogs,
  FaPenFancy,
  FaThumbsUp,
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";


const services = [
  {
    category: "Sales & Merchandising",
    // icon: <FaChartLine className="text-6xl text-[#C8A961]" />,
    items: [
      { name: "Field Sales", icon: <FaUsers />, description: "Direct in-person sales and client relationship building." },
      { name: "Merchandising", icon: <FaShoppingCart />, description: "Strategic product placement to maximize sales." },
      { name: "Retail Audit", icon: <FaClipboardCheck />, description: "Evaluating retail execution and compliance." },
      { name: "Point of Sale Execution", icon: <FaMoneyBillWave />, description: "Enhancing customer purchase experience." },
      { name: "Asset Optimisation", icon: <FaBoxOpen />, description: "Maximizing asset utilization for efficiency." },
      { name: "Product Management", icon: <FaRocket />, description: "Strategic planning and development of products." }
    ]
  },
  {
    category: "Brand Activation & Experiential Marketing",
    // icon: <FaBullhorn className="text-6xl text-[#C8A961]" />,
    items: [
      { name: "Brand Ambassador Programmes", icon: <FaHandshake />, description: "Engaging brand ambassadors to represent products." },
      { name: "Events & Road Shows", icon: <FaSearch />, description: "Creating immersive brand experiences for consumers." },
      { name: "Sampling", icon: <FaTruck />, description: "Providing product samples to boost awareness." },
      { name: "Shopper Marketing", icon: <FaHeadset />, description: "Influencing customers at the point of purchase." },
      { name: "Instore Activation", icon: <FaBrain />, description: "Driving sales through in-store promotional activities." }
    ]
  },
  {
    category: "Market Expansion Services",
    // icon: <FaGlobe className="text-6xl text-[#C8A961]" />,
    items: [
      { name: "Product Sourcing", icon: <FaRobot />, description: "Identifying and acquiring quality products efficiently." },
      { name: "Market Research & Insights", icon: <FaGraduationCap />, description: "Analyzing market trends for business growth." },
      { name: "Sales & Marketing", icon: <FaCogs />, description: "Developing strategies to drive revenue and brand awareness." },
      { name: "Distribution & Logistics", icon: <FaTruck />, description: "Ensuring smooth supply chain operations." },
      { name: "After Sales Services", icon: <FaHeadset />, description: "Providing support and solutions post-purchase." }
    ]
  },
  {
    category: "Data & Technology",
    // icon: <FaDatabase className="text-6xl text-[#C8A961] pb-4" />,
    items: [
      { name: "Data & Operation Intelligence", icon: <FaBrain />, description: "Utilizing analytics to optimize operations." },
      { name: "Sales Force Automation Tools", icon: <FaRobot />, description: "Enhancing sales processes with automation." },
      { name: "Learning & Development Modules", icon: <FaGraduationCap />, description: "Training solutions for workforce skill enhancement." },
      { name: "CRM Solutions", icon: <FaCogs />, description: "Managing customer relationships effectively." }
    ]
  },
  {
    category: "Digital Marketing",
    // icon: <FaLaptop className="text-6xl text-[#C8A961]" />,
    items: [
      { name: "Content Marketing", icon: <FaPenFancy />, description: "Creating engaging content to attract audiences." },
      { name: "Social Media Marketing", icon: <FaThumbsUp />, description: "Boosting brand visibility through social platforms." }
    ]
  }
];

const ServicesSection = () => {
  const scrollContainerRefs = React.useRef([]);

  const scrollLeft = (index) => {
    if (scrollContainerRefs.current[index]) {
      scrollContainerRefs.current[index].scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = (index) => {
    if (scrollContainerRefs.current[index]) {
      scrollContainerRefs.current[index].scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className=" min-h-screen w-full py-24 px-8 md:px-20 lg:px-36">
      {/* <div className="text-center mb-16">
        <h2 className="text-6xl font-extrabold text-[#C8A961] relative inline-block">
          Our Services
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C8A961] rounded"></span>
        </h2>
      </div> */}

      {services.map((service, index) => (
        <div key={index} className="flex flex-col md:flex-row p items-start justify-center mb-16 gap-10 w-full">
          {/* Left Heading */}
          <div className="w-full md:w-1/4 flex h-[50vh] justify-center items-center mb-8 md:mb-0">
            <h3 className="text-4xl font-semibold text-yellow-600">{service.category}</h3>
          </div>

          {/* Right Cards with Scroll Buttons */}
          <div className="w-full md:w-3/4 relative">
            <div
              className="flex overflow-x-hidden scroll-smooth "
              ref={(el) => (scrollContainerRefs.current[index] = el)}
            >
              {service.items.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 mx-5 w-64 h-[50vh] bg-white rounded-xl shadow-xl border border-gray-300 p-6 text-center transition-all duration-300 hover:shadow-2xl hover:border-[#C8A961]">
                  <div className="relative mx-auto w-20 h-20 bg-white shadow-lg text-yellow-600 flex items-center justify-center rounded-full border border-gray-300 text-2xl ">
                    {item.icon}
                  </div>
                  <h4 className="mt-4 text-lg font-semibold h-16 text-gray-700">{item.name}</h4>
                  <p>{item.description}</p>
                  <a href="#" className="mt-4 inline-block h-10 text-gray-700 font-semibold text-sm hover:underline">
                    Learn more
                  </a>
                </div>
              ))}
            </div>

            {/* Scroll Buttons */}
            {service.items.length > 3 && (
              <>
                <button
                  onClick={() => scrollLeft(index)}
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
                >
                  <FaChevronLeft className="text-2xl text-yellow-600" />
                </button>
                <button
                  onClick={() => scrollRight(index)}
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
                >
                  <FaChevronRight className="text-2xl text-yellow-600" />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
