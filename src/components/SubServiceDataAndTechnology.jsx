// import React from 'react';
// import Lottie from "react-lottie";
// import GIF_1 from "../animation/Data_Technology/GIF_1/animations/de1f599d-57f5-4f97-868b-e6b14e39db48.json"
// // import GIF_1 from "../animation/Data_Technology/GIF_1.json"
// import GIF_6 from "../animation/Data_Technology/GIF_6.json"
// import GIF_3 from "../animation/Data_Technology/GIF_3/animations/7739e827-9992-4c54-a610-49bacaa2605a.json"
// // import GIF_3 from "../animation/Data_Technology/GIF_3.json"
// import GIF_7 from "../animation/Data_Technology/GIF_7.json"

// import { Link } from 'react-router-dom';
// import BackgroundAnimation from '../components/BackgroundAnimation'; // Adjust the import path

// const Button = ({ children, variant = "primary", className = "" }) => {
//   const baseStyle = "px-6 py-2 font-semibold rounded-md transition-colors duration-300";
//   const variants = {
//     primary: "bg-white text-blue-600 hover:bg-blue-50",
//     secondary: "bg-transparent border border-white text-white hover:bg-white/10",
//   };

//   return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
// };

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen  bg-purple-900">
//       <BackgroundAnimation />
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-20 text-center text-white  bg-purple-900">

//        <h1 className="mt-4 mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
//           Data And Technology
//         </h1> <br></br>
//         <p className="mb-4 mt-4 md:m-8 text-justify text-2xl font-semibold tracking-wider">We leverage cutting-edge technology to optimize business operations and decision-making. Our solutions include AI-driven analytics, automation tools, and digital transformation strategies to enhance efficiency, improve customer experiences, and drive business growth.</p>
//           <Link to="/contact" className="mt-8 bg-white text-purple-900 text-lg  px-4 py-3 hover:text-xl hover:px-4 hover:py-3">Get in Touch →</Link>
//       </section>

//       <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900">
//   <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg">
//     <Lottie
//       options={{
//         loop: true,
//         autoplay: true,
//         animationData: GIF_1,
//         rendererSettings: {
//           preserveAspectRatio: "xMidYMid slice"
//         }
//       }}
//       height={window.innerWidth < 768 ? 300 : 400}
//       width={window.innerWidth < 768 ? 300 : 400}
//     />
//   </div>
//   {/* Card Effect for Text Side */}
//   <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
//     {/* Tilted Background Card */}
//     <div
//       className="absolute top-[-25px] left-10 w-[50%] h-[calc(100%+50px)] bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//       style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//     ></div>
//     {/* Blurred Tilted Background Card */}
//     <div
//       className="absolute top-[-25px] left-10 w-[50%] h-[calc(100%+50px)] bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//       style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
//     ></div>

//     {/* Bouncing Square Animation */}
//     <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//       <div
//         className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//         style={{ animationDelay: '0s' }}
//       ></div>
//       <div
//         className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//         style={{ animationDelay: '1s' }}
//       ></div>
//     </div>

//     {/* Main Content */}
//     <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//       <h2 className="text-3xl font-bold text-white">Data & Operational Intelligence</h2>
//       <p className="mt-2 text-lg text-blue-50"></p>
//       <ul className="mt-4 md:text-lg space-y-2">
//         {[
//           "Analyzes business operations to improve efficiency",
//           "Uses real-time insights to optimize processes",
//           "Enhances productivity and reduces operat",
//         ].map((item, index) => (
//           <li key={index} className="text-white">• {item}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </section>

//       {/* Service Sections with Glassmorphism & Hover Animation
//       <ServiceSection
//         title="Data & Operational Intelligence"
//         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
//         listItems={[
//           "Analyzes business operations to improve efficiency",
//          "Uses real-time insights to optimize processes",
//          "Enhances productivity and reduces operat",]}
//          gradientColors={["#03a9f4", "#ff0058"]}
//       /> */}

// <section className="container mx-auto grid md:grid-rows-1 md:grid-rows-auto grid-flow-dense md:grid-flow-row grid-rows-2 gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900">
//         {/* Card Effect for Text Side */}
//         <div className="group relative row-start-2 md:row-start-auto flex justify-center items-center w-[320px] h-[400px] mx-auto">
//           {/* Tilted Background Card */}
//           <div
//             className="absolute top-[-25px] left-10 w-[50%] h-[calc(100%+50px)] bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div>
//           {/* Blurred Tilted Background Card */}
//           <div
//             className="absolute top-[-25px] left-10 w-[50%] h-[calc(100%+50px)] bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div>

//           {/* Bouncing Square Animation */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//             <div
//               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: '0s' }}
//             ></div>
//             <div
//               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: '1s' }}
//             ></div>
//           </div>

//           {/* Main Content */}
//           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//             <h2 className="text-3xl font-bold text-white">Sales Force Automation Tools</h2>
//             <p className="mt-2 text-lg text-blue-50"></p>
//             <ul className="mt-4 md:text-lg space-y-2">
//               {[
//           "Streamlines sales processes with technology-driven solutions",
//             "Improves sales tracking, reporting, and performance",
//             "Enhances field sales efficiency and customer engagement",

//         ].map((item, index) => (
//                 <li key={index} className="text-white">• {item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg">
//           {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
//           <Lottie
//     options={{
//       loop: true,
//       autoplay: true,
//       animationData: GIF_6,
//       rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//       }
//     }}
//     height={window.innerWidth < 768 ? 300 : 360}
//     width={window.innerWidth < 768 ? 300 : 360}
//   />

//         </div>
//       </section>

//       {/* <ServiceSection
//         title="Sales Force Automation Tools"
//         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
//         listItems={[
//           "Streamlines sales processes with technology-driven solutions",
//             "Improves sales tracking, reporting, and performance",
//             "Enhances field sales efficiency and customer engagement",

//         ]}
//         imageLeft={false}
//         gradientColors={["#ffbc00", "#ff0058"]}
//         // gradientColors={["#4B0082", "#D4AF37"]}
//       /> */}

//        <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900">
//         <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
//           {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
//           <Lottie
//     options={{
//       loop: true,
//       autoplay: true,
//       animationData: GIF_3,
//       rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//       }
//     }}
//     height={window.innerWidth < 768 ? 300 : 400}
//     width={window.innerWidth < 768 ? 300 : 400}
//   />
//         </div>
//         {/* Card Effect for Text Side */}
//         <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
//           {/* Tilted Background Card */}
//           <div
//             className="absolute  top-[-30px] left-10 w-[50%] h-[calc(100%+75px)] bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div>
//           {/* Blurred Tilted Background Card */}
//           <div
//             className="absolute top-[-30px] left-10 w-[50%] h-[calc(100%+75px)] bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div>

//           {/* Bouncing Square Animation */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//             <div
//               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: '0s' }}
//             ></div>
//             <div
//               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: '1s' }}
//             ></div>
//           </div>

//           {/* Main Content */}
//           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//             <h2 className="text-3xl font-bold text-white">Learning & Development Modules</h2>
//             <p className="mt-2 text-lg text-blue-50"></p>
//             <ul className="mt-4 md:text-lg space-y-2">
//               {[
//           "Provides training programs for skill development",
//           "Enhances employee productivity and business performance",
//           "Covers leadership, sales, and customer service training",].map((item, index) => (
//                 <li key={index} className="text-white">• {item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* <ServiceSection
//         title="Learning & Development Modules"
//         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
//         listItems={[
//             "Provides training programs for skill development",
//             "Enhances employee productivity and business performance",
//             "Covers leadership, sales, and customer service training",]}
//             gradientColors={["#4dff03", "#00d0ff"]}
//       /> */}

// <section className="container mx-auto grid md:grid-rows-1 md:grid-rows-auto grid-flow-dense md:grid-flow-row grid-rows-2 gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900">
//         {/* Card Effect for Text Side */}
//         <div className="group relative row-start-2 md:row-start-auto flex justify-center items-center w-[320px] h-[400px] mx-auto">
//           {/* Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div>
//           {/* Blurred Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div>

//           {/* Bouncing Square Animation */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//             <div
//               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: '0s' }}
//             ></div>
//             <div
//               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: '1s' }}
//             ></div>
//           </div>

//           {/* Main Content */}
//           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//             <h2 className="text-3xl font-bold text-white">CRM Solutions</h2>
//             <p className="mt-2 text-lg text-blue-50"></p>
//             <ul className="mt-4 md:text-lg space-y-2">
//               {[
//            "Manages customer relationships effectively.",
//            " Automates interactions and tracks customer journeys.",
//             "Improves customer retention and engagement.",

//         ].map((item, index) => (
//                 <li key={index} className="text-white">• {item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
//           {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
//           <Lottie
//     options={{
//       loop: true,
//       autoplay: true,
//       animationData: GIF_7,
//       rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//       }
//     }}
//     height={window.innerWidth < 768 ? 300 : 400}
//     width={window.innerWidth < 768 ? 300 : 400}
//   />

//         </div>
//       </section>

// {/*
//       <ServiceSection
//         title="CRM Solutions"
//         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
//         listItems={[
//         "lisManages customer relationships effectively.",
//        " Automates interactions and tracks customer journeys.",
//         "Improves customer retention and engagement.",
//         ]}
//         imageLeft={false}
//         gradientColors={["#03a9f4", "#ff0058"]}
//       /> */}

//     </main>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import Lottie from "react-lottie";
// import BackgroundAnimation from "../components/BackgroundAnimation";

// import GIF_1 from "../animation/Data_Technology/GIF_1/animations/de1f599d-57f5-4f97-868b-e6b14e39db48.json";
// import GIF_6 from "../animation/Data_Technology/GIF_6.json";
// import GIF_3 from "../animation/Data_Technology/GIF_3/animations/7739e827-9992-4c54-a610-49bacaa2605a.json";
// import GIF_7 from "../animation/Data_Technology/GIF_7.json";

// const services = [
//   {
//     title: "Data & Operational Intelligence",
//     description: [
//       "Analyzes business operations to improve efficiency",
//       "Uses real-time insights to optimize processes",
//       "Enhances productivity and reduces operational costs",
//     ],
//     animation: GIF_1,
//   },
//   {
//     title: "Sales Force Automation Tools",
//     description: [
//       "Streamlines sales processes with technology-driven solutions",
//       "Improves sales tracking, reporting, and performance",
//       "Enhances field sales efficiency and customer engagement",
//     ],
//     animation: GIF_6,
//   },
//   {
//     title: "Learning & Development Modules",
//     description: [
//       "Provides training programs for skill development",
//       "Enhances employee productivity and business performance",
//       "Covers leadership, sales, and customer service training",
//     ],
//     animation: GIF_3,
//   },
//   {
//     title: "CRM Solutions",
//     description: [
//       "Manages customer relationships effectively",
//       "Automates interactions and tracks customer journeys",
//       "Improves customer retention and engagement",
//     ],
//     animation: GIF_7,
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-sky-50 text-gray-900">
//       <BackgroundAnimation />

//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-20 text-center">
//         <h1 className="text-5xl font-bold text-blue-700 mt-7">Data & Technology</h1>
//         <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
//           We leverage cutting-edge technology to optimize business operations and decision-making.
//         </p>
//         <Link
//           to="/contact"
//           className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded shadow-lg transition-all duration-300
//              hover:bg-gradient-to-r hover:from-purple-500 hover:to-teal-400 hover:scale-105"
//         >
//           Get in Touch →
//         </Link>
//       </section>

//       {/* Services Section */}
//       <section className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center md:text-left md:flex-row bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500 transition duration-300 hover:shadow-yellow-100"
//           >
//             <div className="w-48 h-48 mb-6 md:mb-0">
//               <Lottie
//                 options={{
//                   loop: true,
//                   autoplay: true,
//                   animationData: service.animation,
//                 }}
//                 height={180}
//                 width={180}
//               />
//             </div>
//             <div className="md:ml-6">
//               <h2 className="text-2xl font-bold text-blue-700">{service.title}</h2>
//               <ul className="mt-2 text-gray-600">
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

import GIF_1 from "../animation/Data_Technology/Gif__1/de1f599d 57f5 4f97 868b e6b14e39db48.json";
import GIF_6 from "../animation/Data_Technology/Gif__1/GIF_6.json";
import GIF_3 from "../animation/Data_Technology/Gif__1/JS.json";
import GIF_7 from "../animation/Data_Technology/Gif__1/GIF_7.json";

import BackgroundAnimation from "../components/BackgroundAnimation";

const services = [
  {
    title: "Data & Operational Intelligence",
    description: [
      "Analyzes business operations to improve efficiency",
      "Uses real-time insights to optimize processes",
      "Enhances productivity and reduces operational costs",
    ],
    
    icon:  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData:GIF_1,
                    }}
                    height={120}
                    width={120} />,
   
},
  {
    title: "Sales Force Automation Tools",
    description: [
      "Streamlines sales processes with technology-driven solutions",
      "Improves sales tracking, reporting, and performance",
      "Enhances field sales efficiency and customer engagement",
    ],
    icon:  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData:GIF_6,
    }}
    height={180}
    width={180} />,

  },
  {
    title: "Learning & Development Modules",
    description: [
      "Provides training programs for skill development",
      "Enhances employee productivity and business performance",
      "Covers leadership, sales, and customer service training",
    ],
    icon: <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData:GIF_3,
    }}
    height={120}
    width={120} />,
  },
  {
    title: "CRM Solutions",
    description: [
      "Manages customer relationships effectively",
      "Automates interactions and tracks customer journeys",
      "Improves customer retention and engagement",
    ],
    icon: <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData:GIF_7,
    }}
    height={120}
    width={120} />
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-sky-50 text-gray-900">
      <BackgroundAnimation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mt-7">Data & Technology</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
          We leverage cutting-edge technology to optimize business operations
          and decision-making.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-3 rounded shadow-sm transition-all duration-300 from-yellow-400  to-yellow-600 hover:shadow-md"
        >
          Get in Touch →
        </Link>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center md:text-left md:flex-row bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-yellow-700"
          >
            <div className="w-48 h-48 mb-6 md:mb-0 flex items-center justify-center">
              {service.icon}
            </div>
            <div className="md:ml-6">
              <h2 className="text-2xl font-bold text-black">
                {service.title}
              </h2>
              <ul className="mt-2 text-gray-600 ">
                {service.description.map((point, idx) => (
                  <li key={idx} className="mt-1">
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
