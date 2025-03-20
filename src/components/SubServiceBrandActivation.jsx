// import React from "react";
// import Brand from "../animation/BrandActivation/Ambass/animations/745b1692-1531-4d8c-aa8a-a881efdbce78.json";
// import Instore_1 from "../animation/BrandActivation/Instore_1.json";
// import sampeling from "../animation/BrandActivation/sampeling.json";
// import Event from "../animation/BrandActivation/Event_1/animations/c83bfc08-686e-4341-9742-75a33f2f4de9.json";

// import Lottie from "react-lottie";

// import { Link } from "react-router-dom";
// import BackgroundAnimation from "../components/BackgroundAnimation"; // Adjust the import path

// const Button = ({ children, variant = "primary", className = "" }) => {
//   const baseStyle =
//     "px-6 py-2 font-semibold rounded-md transition-colors duration-300";
//   const variants = {
//     primary: "bg-white text-purple-800 hover:bg-purple-50",
//     secondary:
//       "bg-transparent border border-white text-white hover:bg-white/10",
//   };

//   return (
//     <button className={`${baseStyle} ${variants[variant]} ${className}`}>
//       {children}
//     </button>
//   );
// };

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-[#EEF1FF]">
//       <BackgroundAnimation />
//       {/* <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700"> */}
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-20 text-center text-white bg-[#EEF1FF]">
//       <h1 className="mt-10 mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl text-black">
//   Brand <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r  text-#D4AF37]from-[#8c6b2f] to-[#b78c2a]">Activation</span> & Experiential Marketing
// </h1>
// #D4AF37

// {" "}
//         <br></br>
//         <p className="mb-4 mt-4 md:m-8 text-justify  md:text-2xl tracking-wider
//          text-black">
//           We create immersive brand experiences that engage consumers and leave
//           a lasting impression. Through interactive campaigns, live events, and
//           on-ground activations, we help brands establish deeper connections
//           with their audiences. These experiences enhance brand recall, foster
//           customer loyalty, and drive higher engagement.
//         </p>
//         {/* <Link to="/contact" className="mt-8 bg-gradient-to-r from-blue-900 to-purple-500  text-white  text-lg  text-bold rounded px-4 py-3 hover:text-xl hover:px-4 hover:py-3  ">Get in Touch →</Link> */}
//         <Link
//           to="/contact"
//           className="px-6 py-3 rounded shadow-lg text-[#121212] font-semibold
//                      bg-gradient-to-r from-[#D4AF37] to-[#B8860B] transition-all duration-300
//                    hover:from-[#8B6F47] hover:to-[#C0A080] hover:shadow-xl"
//         >
//           Get in Touch →
//         </Link>
//       </section>

//       {/* Service Sections with Glassmorphism & Hover Animation */}
//       {/* <ServiceSection
//         title="Brand Ambassador Programmes"
//         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
//         listItems={[
//           "Utilizes influencers and representatives to promote brand trust",
//           "Builds long-term customer relationships through personal engagement",
//           "Boosts credibility and visibility in target markets",
//         ]}
//         gradientColors={["#ffbc00", "#ff0058"]}
//       /> */}

//       <section
//         className="container mx-auto grid gap-8 px-4 py-16 text-white
//                     md:grid-cols-2 md:items-center
//                     bg-gradient-to-r-[#EEF1FF]  "
//       >
//         <div className="relative flex justify-center mb-20 items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg ">
//           <Lottie
//             options={{
//               loop: true,
//               autoplay: true,
//               animationData: Brand,
//               rendererSettings: {
//                 preserveAspectRatio: "xMidYMid slice",
//               },
//             }}
//             height={window.innerWidth < 768 ? 500 : 900}
//             width={window.innerWidth < 768 ? 500 : 700}
//           />
//         </div>
//         {/* Card Effect for Text Side */}
//         <div
//           className="group relative flex justify-center items-center  mx-auto
//              bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#8B6F47]
//              rounded-xl shadow-lg transition-all duration-500 ease-in-out
//              hover:shadow-2xl hover:scale-105 hover:-translate-y-3 hover:from-[#8B6F47] hover:to-[#D4AF37]"

//         >
//           {/* Tilted Background Card */}

//           {/* <div
//             className="absolute top-[-50px] left-10 w-[50%] h-[calc(100%+100px)] bg-gray-300 rounded-lg transform skew-x-12
//             transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]
//             animate-floating"
//             style={{ background: `linear-gradient(315deg, #8B1E3F, #C9A063)` }}
//           ></div> */}
//           {/* Blurred Tilted Background Card */}
//           {/* <div
//             className="absolute top-[-50px] left-10 w-[50%] h-[calc(100%+100px)] bg-white rounded-lg transform skew-x-12 blur-xl opacity-50
//             transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]
//             animate-pulse"
//             style={{ background: `linear-gradient(315deg, #8B1E3F, #C9A063)` }}
//           ></div> */}

//           {/* Bouncing Square Animation */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//             <div
//               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "0s" }}
//             ></div>
//             <div
//               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "1s" }}
//             ></div>
//           </div>

//           {/* Main Content */}
//           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//             <h2 className="text-3xl font-semibold text-white">
//               Brand Ambassador Programmes
//             </h2>
//             <p className="mt-2 text-lg md:te text-purple-100"></p>
//             <ul className="mt-4 md:text-lg space-y-2">
//               {[
//                 "Utilizes influencers and representatives to promote brand trust",
//                 "Builds long-term customer relationships through personal engagement",
//                 "Boosts credibility and visibility in target markets",
//               ].map((item, index) => (
//                 <li key={index} className="text-white ">
//                   • {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* <ServiceSection
//         title="Events & Road Shows"
//         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
//         listItems={[
//           "Engages consumers directly through interactive and mobile campaigns",
//           "Increases brand awareness in high-footfall locations",
//           "Provides real-time feedback and consumer interaction opportunities",
//         ]}
//         imageLeft={false}
//         gradientColors={["#4dff03", "#00d0ff"]}
//       /> */}

//       <section className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto  gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l bg-indigo-100">
//         {/* Card Effect for Text Side */}
//         <div className="group relative flex justify-center items-center ml-10 mx-auto
//              bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#8B6F47]
//              rounded-xl shadow-lg transition-all duration-500 ease-in-out
//              hover:shadow-2xl hover:scale-105 hover:-translate-y-3 hover:from-[#8B6F47] hover:to-[#D4AF37]">
//           {/* Tilted Background Card */}
//            {/* <div
//             className="absolute  top-[-50px] left-10 w-[50%] h-[calc(100%+100px)] bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
//           ></div>  */}
//           {/* Blurred Tilted Background Card */}
//           {/* <div
//             className="absolute  top-[-50px] left-10 w-[50%] h-[calc(100%+100px)] bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
//           ></div> */}

//           {/* Bouncing Square Animation */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//             <div
//               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "0s" }}
//             ></div>
//             <div
//               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "1s" }}
//             ></div>
//           </div>

//           {/* Main Content */}
//           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//             <h2 className="text-3xl font-semibold text-white">
//               Events & Road Shows
//             </h2>
//             <p className="mt-2 text-lg text-purple-100"></p>
//             <ul className="mt-4 md:text-lg space-y-2">
//               {[
//                 "Engages consumers directly through interactive and mobile campaigns",
//                 "Increases brand awareness in high-footfall locations",
//                 "Provides real-time feedback and consumer interaction opportunities",
//               ].map((item, index) => (
//                 <li key={index} className="text-white">
//                   • {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg">
//           <Lottie
//             options={{
//               loop: true,
//               autoplay: true,
//               animationData: Event,
//               rendererSettings: {
//                 preserveAspectRatio: "xMidYMid slice",
//               },
//             }}
//             height={window.innerWidth < 768 ? 300 : 400}
//             width={window.innerWidth < 768 ? 300 : 400}
//           />
//         </div>
//       </section>

//       {/* <ServiceSection
//         title="Sampling"
//         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
//         listItems={[
//           "Encourages product trials to boost consumer confidence",
//           "Helps in generating word-of-mouth marketing and customer reviews",
//           "Drives sales conversion by reducing purchase hesitation",
//         ]}
//         gradientColors={["#03a9f4", "#ff0058"]}
//       /> */}

//       <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center  bg-[#EEF1FF]">
//         <div className="relative md:h-[400px] h-[350px] md:w-[450px] w-[300px] rounded-lg ">
//           <Lottie
//             options={{
//               loop: true,
//               autoplay: true,
//               animationData: sampeling,
//               rendererSettings: {
//                 preserveAspectRatio: "xMidYMid slice",
//               },
//             }}
//             height={window.innerWidth < 768 ? 300 : 400}
//             width={window.innerWidth < 768 ? 300 : 600}
//           />
//         </div>
//         {/* Card Effect for Text Side */}
//         <div className="group relative flex justify-center items-center  mx-auto
//              bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#8B6F47]
//              rounded-xl shadow-lg transition-all duration-500 ease-in-out
//              hover:shadow-2xl hover:scale-105 hover:-translate-y-3 hover:from-[#8B6F47] hover:to-[#D4AF37]">
//           {/* Tilted Background Card */}
//           {/* <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div>  */}
//           {/* Blurred Tilted Background Card */}
//           {/* <div
//             className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg,  #4B0082, #D4AF37)` }}
//           ></div> */}

//           {/* Bouncing Square Animation */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//             <div
//               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "0s" }}
//             ></div>
//             <div
//               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "1s" }}
//             ></div>
//           </div>

//           {/* Main Content */}
//           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//             <h2 className="text-3xl font-semibold text-white">Sampling</h2>
//             <p className="mt-2 text-lg text-purple-100"></p>
//             <ul className="mt-4 md:text-lg space-y-2">
//               {[
//                 "Encourages product trials to boost consumer confidence",
//                 "Helps in generating word-of-mouth marketing and customer reviews",
//                 "Drives sales conversion by reducing purchase hesitation",
//               ].map((item, index) => (
//                 <li key={index} className="text-white">
//                   • {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* <ServiceSection
//         title="Shopper Marketing"
//         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
//         listItems={[
//           "Influences buying decisions at the point of sale",
//           "Uses in-store promotions, displays, and personalized offers",
//           "Enhances customer shopping experience and increases basket value",
//         ]}
//         imageLeft={false}
//         gradientColors={["#4dff03", "#00d0ff"]}
//       /> */}

//       <section className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto  gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l bg-indigo-100">
//         {/* Card Effect for Text Side */}
//         <div className="group relative flex justify-center items-center ml-10 mx-auto
//              bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#8B6F47]
//              rounded-xl shadow-lg transition-all duration-500 ease-in-out
//              hover:shadow-2xl hover:scale-105 hover:-translate-y-3 hover:from-[#8B6F47] hover:to-[#D4AF37]">
//           {/* Tilted Background Card */}
//           {/* <div
//             className="absolute  top-[-50px] left-10 w-[50%] h-[calc(100%+100px)] bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div> */}
//           {/* Blurred Tilted Background Card */}
//           {/* <div
//             className="absolute  top-[-50px] left-10 w-[50%] h-[calc(100%+100px)] bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
//           ></div> */}

//           {/* Bouncing Square Animation */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//             <div
//               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "0s" }}
//             ></div>
//             <div
//               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "1s" }}
//             ></div>
//           </div>

//           {/* Main Content */}
//           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//             <h2 className="text-3xl font-semibold text-white">Shopper Marketing</h2>
//             <p className="mt-2 text-lg text-purple-100"></p>
//             <ul className="mt-4 md:text-lg space-y-2">
//               {[
//                 "Influences buying decisions at the point of sale",
//                 "Uses in-store promotions, displays, and personalized offers",
//                 "Enhances customer shopping experience and increases basket value",
//               ].map((item, index) => (
//                 <li key={index} className="text-white">
//                   • {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg ">
//           <Lottie
//             options={{
//               loop: true,
//               autoplay: true,
//               animationData: Marketing,
//               rendererSettings: {
//                 preserveAspectRatio: "xMidYMid slice",
//               },
//             }}
//             height={window.innerWidth < 768 ? 300 : 400}
//             width={window.innerWidth < 768 ? 300 : 400}
//           />
//         </div>
//       </section>

//       {/* <ServiceSection
//         title="Instore Activation"
//         image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
//         listItems={[
//           "Creates engaging in-store experiences to attract customers",
//           "Includes product demonstrations, promotional campaigns, and contests",
//           "Strengthens brand visibility and customer loyalty",
//         ]}
//         gradientColors={["#03a9f4", "#ff0058"]}
//       /> */}

//       <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r bg-[#EEF1FF]">
//         <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg ">
//           <Lottie
//             options={{
//               loop: true,
//               autoplay: true,
//               animationData: Instore_1,
//               rendererSettings: {
//                 preserveAspectRatio: "xMidYMid slice",
//               },
//             }}
//             height={window.innerWidth < 768 ? 300 : 400}
//             width={window.innerWidth < 768 ? 300 : 400}
//           />
//         </div>
//         {/* Card Effect for Text Side */}
//         <div className="group relative flex justify-center items-center  mx-auto
//              bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#8B6F47]
//              rounded-xl shadow-lg transition-all duration-500 ease-in-out
//              hover:shadow-2xl hover:scale-105 hover:-translate-y-3 hover:from-[#8B6F47] hover:to-[#D4AF37]">
//           {/* Tilted Background Card */}
//           {/* <div
//             className="absolute  top-[-35px] left-10 w-[50%] h-[calc(100%+75px)] bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div> */}
//           {/* Blurred Tilted Background Card */}
//           {/* <div
//             className="absolute top-[-35px] left-10 w-[50%] h-[calc(100%+75px)] bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
//             style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
//           ></div> */}

//           {/* Bouncing Square Animation */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
//             <div
//               className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "0s" }}
//             ></div>
//             <div
//               className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
//               style={{ animationDelay: "1s" }}
//             ></div>
//           </div>

//           {/* Main Content */}
//           <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
//             <h2 className="text-3xl font-semibold text-white">
//               Instore Activation
//             </h2>
//             <p className="mt-2 text-lg text-purple-100"></p>
//             <ul className="mt-4 md:text-lg space-y-2">
//               {[
//                 "Creates engaging in-store experiences to attract customers",
//                 "Includes product demonstrations, promotional campaigns, and contests",
//                 "Strengthens brand visibility and customer loyalty",
//               ].map((item, index) => (
//                 <li key={index} className="text-white">
//                   • {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import Brand from "../animation/BrandActivation/Brand.json";
import Event from "../animation/BrandActivation/Event.json";
import sampeling from "../animation/BrandActivation/sampeling.json";
import Marketing from "../animation/BrandActivation/marketing.json";
// import Instore_1 from "../animation/BrandActivation/Instore_1.json";
import Instore from "../animation/BrandActivation/Instore.json";
// import { FaUsers, FaStore, FaChartLine, FaCalendarAlt } from "react-icons/fa";
import BackgroundAnimation from "../components/BackgroundAnimation";

const services = [
  {
    title: "Brand Ambassador Programmes",
    description: [
      "Utilizes influencers and representatives to promote brand trust.",
      "Builds long-term customer relationships through personal engagement.",
      "Boosts credibility and visibility in target markets.",
    ],
    icon:  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData:Brand,
                    }}
                    height={180}
                    width={180} />,
                   
  },
  {
    title: "Events & Road Shows",
    description: [
      "Engages consumers directly through interactive and mobile campaigns.",
      "Increases brand awareness in high-footfall locations.",
      "Provides real-time feedback and consumer interaction opportunities.",
    ],
    icon:  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData:Event,
    }}
    height={180}
    width={180} />,
  },
  {
    title: "Sampling",
    description: [
      "Encourages product trials to boost consumer confidence.",
      "Helps in generating word-of-mouth marketing and customer reviews.",
      "Drives sales conversion by reducing purchase hesitation.",
    ],
    icon:  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData:sampeling,
    }}
    height={180}
    width={180} />
  },
  {
    title: "Shopper Marketing",
    description: [
      "Influences buying decisions at the point of sale.",
      "Uses in-store promotions, displays, and personalized offers.",
      "Enhances customer shopping experience and increases basket value.",
    ],
    icon:  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData:Marketing,
    }}
    height={180}
    width={180} />
  },
  {
    title: " Instore Activation",
    description: [
      "Influences buying decisions at the point of sale.",
      "Uses in-store promotions, displays, and personalized offers.",
      "Enhances customer shopping experience and increases basket value.",
    ],
    icon:  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData:Instore,
    }}
    height={180}
    width={180} />,
   
},
  
  
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <BackgroundAnimation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center ">
        <h1 className="text-4xl sm:text-5xl  font-semibold text-black mt-7">
          Brand{" "}
          <span className="bg-clip-text text-transparent  text-yellow-600 drop-shadow-md">
            Activation
          </span>{" "}
          & Experiential Marketing
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
          We create immersive brand experiences that engage consumers and leave
          a lasting impression through interactive campaigns and live events.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-3 rounded shadow-sm transition-all duration-300 from-yellow-400  to-yellow-600 hover:shadow-md"
        >
          Get in Touch →
        </Link>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center md:text-left md:flex-row bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_4px_30px_rgba(255,215,0,0.5)]"
          >
            <div className="w-48 h-48 flex justify-center items-center mr-6">
              {service.icon}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                {service.title}
              </h2>
              <ul className="text-gray-600 mt-2">
                {service.description.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
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
