import React from 'react';
import ProductSourcing from "../animation/MarketExpansion/ProductSourcing.json"
import Sales from "../animation/MarketExpansion/sales.json"
import DistributionLogistics from "../animation/MarketExpansion/DistributionLogistics.json"
import MarketResearch from "../animation/MarketExpansion/MarketResearch.json"
import services from "../animation/MarketExpansion/services.json"
import Lottie from "react-lottie";

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
    <main className="min-h-screen bg-purple-900">
      <BackgroundAnimation />
    {/* <main className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700"> */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center text-white">
       
       <h1 className="mt-4 mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
       Market Expansion Services
        </h1> <br></br>
        <p className="mb-4 mt-4 md:m-8  text-justify text-lg sm:text-2xl font-semibold tracking-wider">Expanding into new markets requires strategic planning and execution. We support brands with tailored market entry strategies, local partnerships, and distribution solutions. Our expertise helps businesses overcome entry barriers, minimize risks, and establish a strong market presence.</p>
        <Link to="/contact" className="mt-8 bg-white text-purple-900 hover:bg-purple-50 px-3 py-2">SPEAK WITH OUR EXPERTS →</Link>
      </section>

      {/* Service Sections with Glassmorphism & Hover Animation */}
      <section className="container  mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900 ">
      {/* <section className="container  mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-br from-purple-900 via-purple-900 via-[80%] to-[#D4AF37]"> */}
        <div className="relative  md:h-[400px] h-[300px] overflow-hidden rounded-lg">
        <Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: ProductSourcing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  height={window.innerWidth < 768 ? 300 : 400}
  width={window.innerWidth < 768 ? 300 : 400}
/>
          {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
        </div>
        {/* Card Effect for Text Side */}
        <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
          {/* Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37` }}
          ></div>
          {/* Blurred Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37` }}
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
            <h2 className="text-3xl font-bold text-white">Product Sourcing</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
              
                <li  className="text-white">• Identifies and procures high-quality products for businesses </li>
                <li  className="text-white">• Ensures cost-effectiveness and compliance with industry standards</li>
                <li  className="text-white">• Manages supplier relationships and supply chain efficiency</li>
          
            </ul>
          </div>
        </div>
  </section>
      <section className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900">
        <div className="group relative row-start-2 md:row-start-auto md:col-start-1 flex justify-center items-center w-[320px] h-[400px] mx-auto">
        
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37` }}
          ></div>
          
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37` }}
          ></div>

         
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

          
          <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
            <h2 className="text-3xl font-bold text-white">Market Research & Insights</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
                <li  className="text-white">• Collects and analyzes consumer and market data</li>
                <li  className="text-white">• Identifies trends, preferences, and opportunities</li>
                <li  className="text-white">• Helps brands make informed business decisions</li>
            </ul>
          </div>
        </div>
        <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
          {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
          <div className=' '><Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: MarketResearch,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  height={window.innerWidth < 768 ? 300 : 400}
  width={window.innerWidth < 768 ? 300 : 400}
/></div>
        </div>
  </section>
      <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900">
        <div className="relative flex justify-center items-center h-[400px] overflow-hidden rounded-lg">
        <Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: Sales,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  height={400}
  width={400}
/>
          {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
        </div>
        {/* Card Effect for Text Side */}
        <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
          {/* Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37` }}
          ></div>
          {/* Blurred Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37` }}
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
            <h2 className="text-3xl font-bold text-white">Sales & Marketing</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
              
                <li  className="text-white">• Develops strategies to increase brand reach and sales </li>
                <li  className="text-white">• Combines traditional and digital marketing techniques</li>
                <li  className="text-white">• Focuses on customer acquisition, engagement, and retention</li>
          
            </ul>
          </div>
        </div>
  </section>
      <section className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900">
        <div className="group relative flex row-start-2 md:row-start-auto md:col-start-1 justify-center items-center w-[320px] h-[400px] mx-auto">
        
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37` }}
          ></div>
          
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37` }}
          ></div>

         
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

          
          <div className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8 w-full transition-all duration-500 transform group-hover:scale-105">
            <h2 className="text-3xl font-bold text-white">Distribution & Logistics</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
                <li  className="text-white">• Ensures efficient supply chain management and product delivery</li>
                <li  className="text-white">• Covers warehousing, transportation, and inventory control.</li>
                <li  className="text-white">• Reduces costs and improves operational efficiency</li>
            </ul>
          </div>
        </div>
        <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
          {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
          <Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: DistributionLogistics,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  height={window.innerWidth < 768 ? 300 : 400}
    width={window.innerWidth < 768 ? 300 : 400}
/>
        </div>
  </section>
  <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900">
        <div className="relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
        <Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: services,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  height={window.innerWidth < 768 ? 300 : 400}
  width={window.innerWidth < 768 ? 300 : 400}
/>
          {/* <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" /> */}
        </div>
        {/* Card Effect for Text Side */}
        <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
          {/* Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg,#4B0082, #D4AF37` }}
          ></div>
          {/* Blurred Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #4B0082, #D4AF37` }}
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
            <h2 className="text-3xl font-bold text-white">After-Sales Services</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
              
                <li  className="text-white">• Provides customer support, warranty handling, and issue resolution</li>
                <li  className="text-white">• Enhances customer satisfaction and brand loyalty</li>
                <li  className="text-white">• Includes maintenance, repairs, and product assistance</li>
          
            </ul>
          </div>
        </div>
  </section>
      {/* <ServiceSection
        title="Product Sourcing"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        // jsonfile="ProductSourcing"
        listItems={[
          "Identifies and procures high-quality products for businesses", 
          "Ensures cost-effectiveness and compliance with industry standards", 
          "Manages supplier relationships and supply chain efficiency"]}
        gradientColors={["#ffbc00", "#ff0058"]}
      /> */}

      {/* <ServiceSection
        title="Market Research & Insights"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Collects and analyzes consumer and market data",
          "Identifies trends, preferences, and opportunities",
          "Helps brands make informed business decisions",
        ]}
        imageLeft={false}
        gradientColors={["#03a9f4", "#ff0058"]}
      /> */}

      {/* <ServiceSection
        title="Sales & Marketing"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Develops strategies to increase brand reach and sales", 
          "Combines traditional and digital marketing techniques", 
          "Focuses on customer acquisition, engagement, and retention"]}
        gradientColors={["#4dff03", "#00d0ff"]}
      /> */}

      {/* <ServiceSection
        title="Distribution & Logistics"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Ensures efficient supply chain management and product delivery",
          "Covers warehousing, transportation, and inventory control.",
          "Reduces costs and improves operational efficiency",
        ]}
        imageLeft={false}
        gradientColors={["#ffbc00", "#ff0058"]}
      /> */}

      {/* <ServiceSection
        title="After-Sales Services"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Provides customer support, warranty handling, and issue resolution", 
          "Enhances customer satisfaction and brand loyalty", 
          "Includes maintenance, repairs, and product assistance"]}
        gradientColors={["#03a9f4", "#ff0058"]}
      /> */}
    </main>
  );
}