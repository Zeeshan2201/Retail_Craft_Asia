import React from 'react';
import Lottie from "react-lottie";
import GIF_1 from "../animation/Data_Technology/GIF_1/animations/de1f599d-57f5-4f97-868b-e6b14e39db48.json"
// import GIF_1 from "../animation/Data_Technology/GIF_1.json"
import GIF_6 from "../animation/Data_Technology/GIF_6.json"
import GIF_3 from "../animation/Data_Technology/GIF_3/animations/7739e827-9992-4c54-a610-49bacaa2605a.json"
// import GIF_3 from "../animation/Data_Technology/GIF_3.json"
import GIF_7 from "../animation/Data_Technology/GIF_7.json"

import { Link } from 'react-router-dom';
import BackgroundAnimation from '../components/BackgroundAnimation'; // Adjust the import path

const Button = ({ children, variant = "primary", className = "" }) => {
  const baseStyle = "px-6 py-2 font-semibold rounded-md transition-colors duration-300";
  const variants = {
    primary: "bg-white text-blue-600 hover:bg-blue-50",
    secondary: "bg-transparent border border-white text-white hover:bg-white/10",
  };

  return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
};



export default function ServicesPage() {
  return (
    <main className="min-h-screen  bg-purple-900">
      <BackgroundAnimation />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center text-white  bg-purple-900">
       
       <h1 className="mt-4 mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Data And Technology
        </h1> <br></br>
        <p className="mb-4 mt-4 md:m-8 text-justify text-2xl font-semibold tracking-wider">We leverage cutting-edge technology to optimize business operations and decision-making. Our solutions include AI-driven analytics, automation tools, and digital transformation strategies to enhance efficiency, improve customer experiences, and drive business growth.</p>
        <Link to="/contact" className="mt-8 bg-white text-purple-900 hover:bg-purple-50 px-3 py-2">SPEAK WITH OUR EXPERTS →</Link>
      </section>

      
      <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900">
        <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg">
          {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
          <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: GIF_1,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }}
    height={window.innerWidth < 768 ? 300 : 340}
    width={window.innerWidth < 768 ? 300 : 340}
  />
        </div>
        {/* Card Effect for Text Side */}
        <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
          {/* Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
          ></div>
          {/* Blurred Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37)` }}
          ></div>

          {/* Bouncing Square Animation */}
          <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
              style={{ animationDelay: '0s' }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>

          {/* Main Content */}
          <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
            <h2 className="text-3xl font-bold text-white">Data & Operational Intelligence</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
              {[
          "Analyzes business operations to improve efficiency",
         "Uses real-time insights to optimize processes",
         "Enhances productivity and reduces operat",]      
         .map((item, index) => (
                <li key={index} className="text-white">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Sections with Glassmorphism & Hover Animation
      <ServiceSection
        title="Data & Operational Intelligence"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Analyzes business operations to improve efficiency",
         "Uses real-time insights to optimize processes",
         "Enhances productivity and reduces operat",]}      
         gradientColors={["#03a9f4", "#ff0058"]}
      /> */}

<section className="container mx-auto grid md:grid-rows-1 md:grid-rows-auto grid-flow-dense md:grid-flow-row grid-rows-2 gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900">
        {/* Card Effect for Text Side */}
        <div className="group relative row-start-2 md:row-start-auto flex justify-center items-center w-[320px] h-[400px] mx-auto">
          {/* Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
          ></div>
          {/* Blurred Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
          ></div>

          {/* Bouncing Square Animation */}
          <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
              style={{ animationDelay: '0s' }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>

          {/* Main Content */}
          <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
            <h2 className="text-3xl font-bold text-white">Sales Force Automation Tools</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
              {[
          "Streamlines sales processes with technology-driven solutions",
            "Improves sales tracking, reporting, and performance",
            "Enhances field sales efficiency and customer engagement",
          
        ].map((item, index) => (
                <li key={index} className="text-white">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative flex justify-center items-center md:h-[400px] h-[300px] overflow-hidden rounded-lg">
          {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
          <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: GIF_6,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }}
    height={window.innerWidth < 768 ? 300 : 360}
    width={window.innerWidth < 768 ? 300 : 360}
  />

        </div>
      </section>

      {/* <ServiceSection
        title="Sales Force Automation Tools"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Streamlines sales processes with technology-driven solutions",
            "Improves sales tracking, reporting, and performance",
            "Enhances field sales efficiency and customer engagement",
          
        ]}
        imageLeft={false}
        gradientColors={["#ffbc00", "#ff0058"]}
        // gradientColors={["#4B0082", "#D4AF37"]}
      /> */}
       
       <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900">
        <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
          {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
          <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: GIF_3,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }}
    height={window.innerWidth < 768 ? 300 : 400}
    width={window.innerWidth < 768 ? 300 : 400}
  />
        </div>
        {/* Card Effect for Text Side */}
        <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
          {/* Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
          ></div>
          {/* Blurred Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
          ></div>

          {/* Bouncing Square Animation */}
          <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
              style={{ animationDelay: '0s' }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>

          {/* Main Content */}
          <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
            <h2 className="text-3xl font-bold text-white">Learning & Development Modules</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
              {[
          "Provides training programs for skill development",
          "Enhances employee productivity and business performance",
          "Covers leadership, sales, and customer service training",].map((item, index) => (
                <li key={index} className="text-white">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* <ServiceSection
        title="Learning & Development Modules"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
            "Provides training programs for skill development",
            "Enhances employee productivity and business performance",
            "Covers leadership, sales, and customer service training",]}
            gradientColors={["#4dff03", "#00d0ff"]}
      /> */}


<section className="container mx-auto grid md:grid-rows-1 md:grid-rows-auto grid-flow-dense md:grid-flow-row grid-rows-2 gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900">
        {/* Card Effect for Text Side */}
        <div className="group relative row-start-2 md:row-start-auto flex justify-center items-center w-[320px] h-[400px] mx-auto">
          {/* Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
          ></div>
          {/* Blurred Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37)` }}
          ></div>

          {/* Bouncing Square Animation */}
          <div className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
              style={{ animationDelay: '0s' }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] animate-bounce"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>

          {/* Main Content */}
          <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
            <h2 className="text-3xl font-bold text-white">CRM Solutions</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
              {[
           "lisManages customer relationships effectively.",
           " Automates interactions and tracks customer journeys.",
            "Improves customer retention and engagement.",
          
        ].map((item, index) => (
                <li key={index} className="text-white">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
          {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
          <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: GIF_7,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }}
    height={window.innerWidth < 768 ? 300 : 400}
    width={window.innerWidth < 768 ? 300 : 400}
  />

        </div>
      </section>

     
{/*      
      <ServiceSection
        title="CRM Solutions"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
        "lisManages customer relationships effectively.",
       " Automates interactions and tracks customer journeys.",
        "Improves customer retention and engagement.",
        ]}
        imageLeft={false}
        gradientColors={["#03a9f4", "#ff0058"]}
      /> */}

    </main>
  );
}