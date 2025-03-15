import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import BackgroundAnimation from "../components/BackgroundAnimation";

import Sales from "../animation/sales/Sales1.json";
import Merchandising from "../animation/sales/Merchandising.json";
import RetailAudit from "../animation/sales/RetailAudit.json";
import PointOfSale from "../animation/sales/PointOfSale.json";
import Asset from "../animation/sales/Asset.json";
import Product from "../animation/sales/Product.json";

const services = [
  {
    title: "Field Sales",
    description: [
      "Engages directly with retailers, wholesalers, and distributors.",
      "Builds strong relationships to expand market reach.",
      "Provides real-time market insights for improved sales performance.",
    ],
    animation: Sales,
  },
  {
    title: "Merchandising",
    description: [
      "Implements strategic product placement and eye-catching displays.",
      "Enhances brand visibility and influences customer purchasing decisions.",
      "Ensures compliance with brand guidelines for in-store execution.",
    ],
    animation: Merchandising,
  },
  {
    title: "Retail Audit",
    description: [
      "Evaluates product availability, pricing, and shelf positioning.",
      "Monitors compliance with promotional and branding guidelines.",
      "Provides data-driven insights for optimizing retail execution.",
    ],
    animation: RetailAudit,
  },
  {
    title: "Point of Sale Execution",
    description: [
      "Ensures flawless execution of branding and promotions at retail outlets.",
      "Manages promotional displays, signage, and in-store branding.",
      "Enhances consumer engagement at the final point of purchase.",
    ],
    animation: PointOfSale,
  },
  {
    title: "Asset Optimization",
    description: [
      "Maximizes the effectiveness of in-store assets like shelves and signage.",
      "Ensures proper utilization, maintenance, and strategic placement.",
      "Increases shopper engagement and improves sales efficiency.",
    ],
    animation: Asset,
  },
  {
    title: "Product Management",
    description: [
      "Oversees the entire lifecycle of FMCG products from launch to market expansion.",
      "Ensures competitive pricing and efficient distribution.",
      "Adapts to market trends and consumer preferences for sustained growth.",
    ],
    animation: Product,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-sky-50 text-gray-900">
      <BackgroundAnimation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center ">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mt-7">
  Sales & Merchandising
</h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
          We help brands maximize their market presence by ensuring the right
          products are available at the right time and place.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-3 rounded shadow-sm transition-all duration-300 from-yellow-400  to-yellow-600 hover:shadow-md 
             "
        >
          Speak with Our Experts →
        </Link>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-row items-center bg-white p-6 border-t-4 border-yellow-500 rounded-lg shadow-sm hover:shadow-md hover:shadow-yellow-100 transition-all duration-300 transform hover:scale-105 w-full mx-auto"
          >
            <div className="w-48 h-48 mb-6 md:mb-0">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: service.animation,
                }}
                height={180}
                width={180}
              />
            </div>
            <div className="md:ml-6">
              <h2 className="text-2xl font-bold text-black">
                {service.title}
              </h2>
              <ul className="mt-2 text-gray-600">
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

// import React from 'react';
// // import Sales from "../animation/sales/Sales1.json";
// import Sales from "../animation/sales/Merchandising/animations/bfc35f78-399f-4657-8c3d-7954678cb6fe.json";
// import Merchandising from "../animation/Data_Technology/Merchandising/animations/d7ff85b4-f50a-4a1e-b49c-0273e5ce9e02.json";
// // import Merchandising from "../animation/sales/Merchandising.json";
// import RetailAudit from "../animation/sales/RetailAudit/animations/75a1ac79-ede4-4910-a8c5-34e5a465018b.json";
// // import RetailAudit from "../animation/sales/RetailAudit.json";
// import PointOfSale from "../animation/sales/PointOfSale/animations/aad9511c-736a-40eb-96f0-26cfdb57c69f.json";
// // import PointOfSale from "../animation/sales/PointOfSale.json";
// import Asset from "../animation/sales/Asset/animations/f6bdf513-e5e2-4564-8cdc-ad82fc627148.json";
// // import Asset from "../animation/sales/Asset.json";
// import Product from "../animation/sales/Product/animations/58297e4c-7fc0-4406-94d2-1d1e641dadfc.json";
// // import Product from "../animation/sales/Product.json";
// import Lottie from "react-lottie";
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
//   console.log("ServicesPage is rendering"); // Debugging line
//   return (
//     <main className="min-h-screen bg-purple-900">
//       <BackgroundAnimation />
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-20 text-center text-white bg-purple-900">

//       <h1 className="mt-4 mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
//           Sales and Merchandising
//         </h1> <br></br>
//         <p className="mb-4 mt-4 md:m-8  text-justify text-lg sm:text-2xl font-semibold tracking-wider">We help brands maximize their market presence by ensuring that the right products are available at the right time and place. Our expert team focuses on enhancing product visibility, executing strategic in-store promotions, and optimizing shelf placement to drive higher sales and brand recall.

// With a data-driven approach, we analyze consumer behavior, market trends, and competitor strategies to develop customized merchandising plans that increase product engagement and boost conversions.</p>
//         <Link to="/contact" className="mt-8 bg-white text-purple-900 hover:bg-purple-50 px-3 py-2">SPEAK WITH OUR EXPERTS →</Link>
//       </section>

//       <section className="container mx-auto grid sm:gap-8 sm:px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900 ">
//       {/* <section className="container mx-auto grid sm:gap-8 sm:px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900  to-[#D4AF37]">   */}
//       <div className="relative md:h-[400px] flex justify-center items-center h-[300px] overflow-hidden rounded-lg ">
//         <Lottie
//   options={{
//     loop: true,
//     autoplay: true,
//     animationData: Sales,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   }}
//   height={window.innerWidth < 768 ? 300 : 300}
//   width={window.innerWidth < 768 ? 300 : 300}
// />

//         </div>
//         {/* Card Effect for Text Side */}
//         <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
//           {/* Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37 )`}}
//           ></div>
//           {/* Blurred Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37 )` }}
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
//             <h2 className="text-3xl font-bold text-white">Field Sales</h2>
//             <p className="mt-2 text-lg text-blue-50"></p>
//             <ul className="mt-4 space-y-2">
//               {["Engages directly with retailers, wholesalers, and distributors",
//           "Builds strong relationships to expand market reach",
//           "Provides real-time market insights for improved sales performance"].map((item, index) => (
//                 <li key={index} className="text-white">• {item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900 ">

//         {/* Card Effect for Text Side */}
//         <div className="group row-start-2 md:row-start-auto md:col-start-1 relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
//           {/* Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
//           ></div>
//           {/* Blurred Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
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
//             <h2 className="text-3xl font-bold text-white">Merchandising</h2>
//             <p className="mt-2 text-lg text-blue-50"></p>
//             <ul className="mt-4 space-y-2">
//               {["Implements strategic product placement and eye-catching displays",
//           "Enhances brand visibility and influences customer purchasing decisions",
//           "Ensures compliance with brand guidelines for in-store execution",].map((item, index) => (
//                 <li key={index} className="text-white">• {item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg ">
//         <Lottie
//   options={{
//     loop: true,
//     autoplay: true,
//     animationData:Merchandising,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   }}
//   height={window.innerWidth < 768 ? 300 : 400}
//   width={window.innerWidth < 768 ? 300 : 400}
//   />
//         </div>
//       </section>

//       <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900 ">
//       <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg ">
//         <Lottie
//   options={{
//     loop: true,
//     autoplay: true,
//     animationData: RetailAudit,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   }}
//   height={window.innerWidth < 768 ? 300 : 300}
//   width={window.innerWidth < 768 ? 300 : 300}
// />

//         </div>
//         {/* Card Effect for Text Side */}
//         <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
//           {/* Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)`}}
//           ></div>
//           {/* Blurred Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37 )` }}
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
//             <h2 className="text-3xl font-bold text-white">Retail Audit</h2>
//             <p className="mt-2 text-lg text-blue-50"></p>
//             <ul className="mt-4 space-y-2">
//               {[ "Evaluates product availability, pricing, and shelf positioning",
//           "Monitors compliance with promotional and branding guidelines",
//           "Provides data-driven insights for optimizing retail execution"].map((item, index) => (
//                 <li key={index} className="text-white">• {item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//         <section className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900 ">

// {/* Card Effect for Text Side */}
// <div className="group row-start-2 md:row-start-auto md:col-start-1 relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
//   {/* Tilted Background Card */}
//   <div
//     className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//     style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//   ></div>
//   {/* Blurred Tilted Background Card */}
//   <div
//     className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//     style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
//   ></div>

//   {/* Bouncing Square Animation */}
//   <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//     <div
//       className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//       style={{ animationDelay: '0s' }}
//     ></div>
//     <div
//       className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//       style={{ animationDelay: '1s' }}
//     ></div>
//   </div>

//   {/* Main Content */}
//   <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//     <h2 className="text-3xl font-bold text-white">Point of Sale Execution</h2>
//     <p className="mt-2 text-lg text-blue-50"></p>
//     <ul className="mt-4 space-y-2">
//       {["Ensures flawless execution of branding and promotions at retail outlets",
//           "Manages promotional displays, signage, and in-store branding",
//           "Enhances consumer engagement at the final point of purchase",].map((item, index) => (
//         <li key={index} className="text-white">• {item}</li>
//       ))}
//     </ul>
//   </div>
// </div>
// <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg ">
// <Lottie
// options={{
// loop: true,
// autoplay: true,
// animationData:PointOfSale,
// rendererSettings: {
// preserveAspectRatio: "xMidYMid slice"
// }
// }}
// height={window.innerWidth < 768 ? 300 : 320}
// width={window.innerWidth < 768 ? 300 : 320}
// />
// </div>
//         </section>

//       <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900">
//       <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg ">
//         <Lottie
//   options={{
//     loop: true,
//     autoplay: true,
//     animationData: Asset,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   }}
//   height={window.innerWidth < 768 ? 300 : 300}
//   width={window.innerWidth < 768 ? 300 : 300}
// />

//         </div>
//         {/* Card Effect for Text Side */}
//         <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
//           {/* Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37 )`}}
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
//             <h2 className="text-3xl font-bold text-white">Asset Optimisation</h2>
//             <p className="mt-2 text-lg text-blue-50"></p>
//             <ul className="mt-4 space-y-2">
//               {["Maximizes the effectiveness of in-store assets like shelves and signage",
//           "Ensures proper utilization, maintenance, and strategic placement",
//           "Increases shopper engagement and improves sales efficiency"].map((item, index) => (
//                 <li key={index} className="text-white">• {item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//     <section className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900">

//         {/* Card Effect for Text Side */}
//         <div className="group row-start-2 md:row-start-auto md:col-start-1 relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
//           {/* Tilted Background Card */}
//           <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
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
//             <h2 className="text-3xl font-bold text-white">Product Management</h2>
//             <p className="mt-2 text-lg text-blue-50"></p>
//             <ul className="mt-4 space-y-2">
//               {["Oversees the entire lifecycle of FMCG products from launch to market expansion",
//                   "Ensures competitive pricing and efficient distribution",
//                   "Adapts to market trends and consumer preferences for sustained growth",].map((item, index) => (
//                 <li key={index} className="text-white">• {item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg ">
//         <Lottie
//         options={{
//         loop: true,
//         autoplay: true,
//         animationData:Product,
//         rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//         }
//         }}
//         height={window.innerWidth < 768 ? 300 : 380}
//   width={window.innerWidth < 768 ? 300 : 380}
//         />
//         </div>
//             </section>

//             </main>
//   );
// }
