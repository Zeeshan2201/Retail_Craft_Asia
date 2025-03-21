// // import React from 'react';
// // import Lottie from "react-lottie";
// // // import GIF_1 from "../animation/Digital_Marketing/GIF_1.json"
// // import GIF_1 from "../animation/Digital_Marketing/GIF_2/animations/852ea4b1-d163-4f9a-bbf3-3775e247f5ee.json"
// // import GIF_2 from "../animation/Digital_Marketing/GIF_2.json"

// // import { Link } from 'react-router-dom';
// // import BackgroundAnimation from '../components/BackgroundAnimation'; // Adjust the import path

// // const Button = ({ children, variant = "primary", className = "" }) => {
// //   const baseStyle = "px-6 py-2 font-semibold rounded-md transition-colors duration-300";
// //   const variants = {
// //     primary: "bg-white text-blue-600 hover:bg-blue-50",
// //     secondary: "bg-transparent border border-white text-white hover:bg-white/10",
// //   };

// //   return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
// // };


// // export default function ServicesPage() {
// //   return (
// //     <main className="min-h-screen bg-purple-900">
// //       <BackgroundAnimation />
// //       {/* Hero Section */}
// //       <section className="container mx-auto px-4 py-20 text-center text-white bg-purple-900">
       
// //        <h1 className="mt-4 mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
// //           Digital Marketing
// //         </h1> <br></br>
// //         <p className="mb-4 mt-4 md:m-8 text-justify text-2xl font-semibold tracking-wider">We boost online brand presence through digital marketing strategies, including SEO, PPC, and performance marketing. Our targeted campaigns engage audiences, generate leads, and drive conversions, ensuring measurable growth.</p>
// //           <Link to="/contact" className="mt-8 bg-white text-purple-900 text-lg  px-4 py-3 hover:text-xl hover:px-4 hover:py-3">Get in Touch →</Link>
// //       </section>


// //       <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900">
// //         <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
// //         <Lottie
// //     options={{
// //       loop: true,
// //       autoplay: true,
// //       animationData: GIF_2,
// //       rendererSettings: {
// //         preserveAspectRatio: "xMidYMid slice"
// //       }
// //     }}
// //     height={window.innerWidth < 768 ? 300 : 400}
// //     width={window.innerWidth < 768 ? 300 : 400}
// //   />


// //         </div>
// //         {/* Card Effect for Text Side */}
// //         <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
// //           {/* Tilted Background Card */}
// //           <div
// //             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
// //             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37` }}
// //           ></div>
// //           {/* Blurred Tilted Background Card */}
// //           <div
// //             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
// //             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37` }}
// //           ></div>

// //           {/* Bouncing Square Animation */}
// //           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
// //             <div
// //               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
// //               style={{ animationDelay: '0s' }}
// //             ></div>
// //             <div
// //               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
// //               style={{ animationDelay: '1s' }}
// //             ></div>
// //           </div>

// //           {/* Main Content */}
// //           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
// //             <h2 className="text-3xl font-semibold text-white"> Content Marketing</h2>
// //             <p className="mt-2 text-lg text-blue-50"></p>
// //             <ul className="mt-4 md:text-lg space-y-2">
// //               {[
// //           "Creates valuable and relevant content for target audiences",
// //             "Improves brand authority and customer trust",
// //             "Boosts website traffic and social media engagement.",].map((item, index) => (
// //                 <li key={index} className="text-white">• {item}</li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </section>
// //       {/* Service Sections with Glassmorphism & Hover Animation */}
// //       {/* <ServiceSection

// //         title="Content Marketing"
// //         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
// //         listItems={[
// //           "Creates valuable and relevant content for target audiences",
// //             "Improves brand authority and customer trust",
// //             "Boosts website traffic and social media engagement.",]}
// //         gradientColors={["#ffbc00", "#ff0058"]}
// //       /> */}

// // <section className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900">
// //         {/* Card Effect for Text Side */}
// //         <div className="group row-start-2 md:row-start-auto md:col-start-1 relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
// //           {/* Tilted Background Card */}
// //           <div
// //             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
// //             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37 )` }}
// //           ></div>
// //           {/* Blurred Tilted Background Card */}
// //           <div
// //             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
// //             style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
// //           ></div>

// //           {/* Bouncing Square Animation */}
// //           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
// //             <div
// //               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
// //               style={{ animationDelay: '0s' }}
// //             ></div>
// //             <div
// //               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
// //               style={{ animationDelay: '1s' }}
// //             ></div>
// //           </div>

// //           {/* Main Content */}
// //           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
// //             <h2 className="text-3xl font-semibold text-white">Social Media Marketing</h2>
// //             <p className="mt-2 text-lg text-blue-50"></p>
// //             <ul className="mt-4 md:text-lg space-y-2">
// //               {[
// //           "Builds brand awareness through social media platforms",
// //             "Engages with customers via organic and paid campaigns",
// //             "Drives sales and brand loyalty through targeted marketing",
// //         ].map((item, index) => (
// //                 <li key={index} className="text-white">• {item}</li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //         <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
// //           {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
// //           <Lottie
// //     options={{
// //       loop: true,
// //       autoplay: true,
// //       animationData: GIF_1,
// //       rendererSettings: {
// //         preserveAspectRatio: "xMidYMid slice"
// //       }
// //     }}
// //     height={window.innerWidth < 768 ? 300 : 400}
// //     width={window.innerWidth < 768 ? 300 : 400}
// //   />

// //         </div>
// //       </section>

// //       {/* <ServiceSection
// //         title="Social Media Marketing"
// //         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
// //         listItems={[
// //           "Builds brand awareness through social media platforms",
// //             "Engages with customers via organic and paid campaigns",
// //             "Drives sales and brand loyalty through targeted marketing",
// //         ]}
// //         imageLeft={false}
// //         gradientColors={["#03a9f4", "#ff0058"]}
// //       /> */}

// //     </main>
// //   );
// // }

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaNewspaper, FaSearchDollar } from "react-icons/fa";
// import BackgroundAnimation from "../components/BackgroundAnimation";

// const services = [
//   {
//     title: "Content Marketing",
//     description: [
//       "Creates valuable and relevant content for target audiences",
//       "Improves brand authority and customer trust",
//       "Boosts website traffic and social media engagement",
//     ],
//     icon: <FaNewspaper className="text-yellow-500 text-6xl" />,
//   },
//   {
//     title: "SEO & PPC",
//     description: [
//       "Optimizes websites for search engines to increase organic traffic",
//       "Runs targeted pay-per-click (PPC) ad campaigns",
//       "Ensures measurable ROI through performance analytics",
//     ],
//     icon: <FaSearchDollar className="text-yellow-500 text-6xl" />,
//   }
// ];

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-sky-50 text-gray-900">
//       <BackgroundAnimation />

//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-20 text-center">
//         <h1 className="text-5xl font-semibold text-blue-600 mt-7 drop-shadow-[2px_2px_4px_rgba(255,215,0,0.5)]">Digital Marketing</h1>
//         <p className="mt-6 max-w-3xl mx-auto text-lg text-black">
//           We boost online brand presence through digital marketing strategies, including SEO, PPC, and performance marketing. Our targeted campaigns engage audiences, generate leads, and drive conversions, ensuring measurable growth.
//         </p>
//         <Link
//           to="/contact"
//           className="mt-8 inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded shadow-sm transition-all duration-300 hover:from-yellow-500 hover:to-yellow-700 hover:shadow-md"
//         >
//           Get in Touch →
//         </Link>
//       </section>

//       {/* Services Section */}
//       <section className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center md:text-left md:flex-row bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-yellow-100"
//           >
//             <div className="w-48 h-48 mb-6 md:mb-0 flex items-center justify-center">
//               {service.icon}
//             </div>
//             <div className="md:ml-6">
//               <h2 className="text-2xl font-semibold text-blue-700">{service.title}</h2>
//               <ul className="mt-2 text-black">
//                 {service.description.map((point, idx) => (
//                   <li key={idx} className="mt-1">• {point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import GIF_1 from "../animation/Digital_Marketing/GIF_1.json";
import GIF_2 from "../animation/Digital_Marketing/GIF_2.json";

import BackgroundAnimation from "../components/BackgroundAnimation";

const services = [
  {
    title: "Content Marketing",
    description: [
      "Creates valuable and relevant content for target audiences",
      "Improves brand authority and customer trust",
      "Boosts website traffic and social media engagement",
    ],
    icon: <Lottie options={{ loop: true, autoplay: true, animationData: GIF_2 }} height={120} width={120} />,
  },
  {
    title: "SEO & PPC",
    description: [
      "Optimizes websites for search engines to increase organic traffic",
      "Runs targeted pay-per-click (PPC) ad campaigns",
      "Ensures measurable ROI through performance analytics",
    ],
    icon: <Lottie options={{ loop: true, autoplay: true, animationData: GIF_1 }} height={120} width={120} />,
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <BackgroundAnimation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center ">
      <h1 className=" text-4xl sm:text-5xl font-semibold  text-yellow-600 bg-clip-text text-transparent mt-7 ">
  Digital Marketing
</h1>

        <p className="mt-7 max-w-3xl mx-auto text-lg text-gray-700">
          We boost online brand presence through digital marketing strategies, including SEO, PPC, and performance marketing. Our targeted campaigns engage audiences, generate leads, and drive conversions, ensuring measurable growth.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-3xl shadow-sm transition-all duration-300 hover:from-yellow-500 hover:to-yellow-700 hover:shadow-md"
        >
          Get in Touch →
        </Link>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center md:text-left md:flex-row bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_4px_30px_rgba(255,215,0,0.5)]"
          >
            <div className="w-48 h-48 mb-6 md:mb-0 flex items-center justify-center">
              {service.icon}
            </div>
            <div className="md:ml-6">
              <h2 className="text-2xl font-semibold text-black">{service.title}</h2>
              <ul className="mt-2 text-gray-600">
                {service.description.map((point, idx) => (
                  <li key={idx} className="mt-1">• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
