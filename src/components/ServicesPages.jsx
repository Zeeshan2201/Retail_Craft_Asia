  import React from 'react';
  import Sales from "../animation/sales/Sales1.json";
  import Merchandising from "../animation/sales/Merchandising.json";
  import RetailAudit from "../animation/sales/RetailAudit.json";
  import PointOfSale from "../animation/sales/PointOfSale.json";
  import Asset from "../animation/sales/Asset.json";
  import Product from "../animation/sales/Product.json";
  import Lottie from "react-lottie";

  const Button = ({ children, variant = "primary", className = "" }) => {
    const baseStyle = "px-6 py-2 font-semibold rounded-md transition-colors duration-300";
    const variants = {
      primary: "bg-white text-blue-600 hover:bg-blue-50",
      secondary: "bg-transparent border border-white text-white hover:bg-white/10",
    };

    return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
  };

  const ServiceSection = ({ title, description, image, listItems, imageLeft = true, gradientColors }) => (
    <>
      {imageLeft ? (
        <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900  to-[#D4AF37]">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
          {/* Card Effect for Text Side */}
          <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
            {/* Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, ${gradientColors[0]}, ${gradientColors[1]})` }}
            ></div>
            {/* Blurred Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, ${gradientColors[0]}, ${gradientColors[1]})` }}
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
              <h2 className="text-3xl font-bold text-white">{title}</h2>
              <p className="mt-2 text-lg text-blue-50">{description}</p>
              <ul className="mt-4 space-y-2">
                {listItems.map((item, index) => (
                  <li key={index} className="text-white">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900  to-[#D4AF37]">
          {/* Card Effect for Text Side */}
          <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
            {/* Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, ${gradientColors[0]}, ${gradientColors[1]})` }}
            ></div>
            {/* Blurred Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, ${gradientColors[0]}, ${gradientColors[1]})` }}
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
              <h2 className="text-3xl font-bold text-white">{title}</h2>
              <p className="mt-2 text-lg text-blue-50">{description}</p>
              <ul className="mt-4 space-y-2">
                {listItems.map((item, index) => (
                  <li key={index} className="text-white">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
        </section>
      )}
    </>
  );

  export default function ServicesPage() {
    return (
      <main className="min-h-screen bg-purple-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center text-white bg-purple-900">
        
        <h1 className="mt-4 mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Sales and Merchandising
          </h1> <br></br>
          <p className="mb-4 mt-4 md:m-8  text-justify text-2xl font-semibold tracking-wider">We help brands maximize their market presence by ensuring that the right products are available at the right time and place. Our expert team focuses on enhancing product visibility, executing strategic in-store promotions, and optimizing shelf placement to drive higher sales and brand recall.

  With a data-driven approach, we analyze consumer behavior, market trends, and competitor strategies to develop customized merchandising plans that increase product engagement and boost conversions.</p>
          <Button className="mt-8">SPEAK WITH OUR EXPERTS →</Button>
        </section>

        {/* Service Sections with Glassmorphism & Hover Animation */}
        {/* <ServiceSection
          title="Field Sales"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
          listItems={[
            "Engages directly with retailers, wholesalers, and distributors", 
            "Builds strong relationships to expand market reach", 
            "Provides real-time market insights for improved sales performance"]}
          gradientColors={["#ffbc00", "#ff0058"]}
        /> */}
        <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900  to-[#D4AF37]">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
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

          </div>
          {/* Card Effect for Text Side */}
          <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
            {/* Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, #ffbc00, #ff0058 )`}}
            ></div>
            {/* Blurred Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, #ffbc00, #ff0058 )` }}
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
              <h2 className="text-3xl font-bold text-white">Field Sales</h2>
              <p className="mt-2 text-lg text-blue-50"></p>
              <ul className="mt-4 space-y-2">
                {["Engages directly with retailers, wholesalers, and distributors", 
            "Builds strong relationships to expand market reach", 
            "Provides real-time market insights for improved sales performance"].map((item, index) => (
                  <li key={index} className="text-white">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* <ServiceSection
          title="Merchandising"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
          listItems={[
            "Implements strategic product placement and eye-catching displays",
            "Enhances brand visibility and influences customer purchasing decisions",
            "Ensures compliance with brand guidelines for in-store execution",
          ]}
          imageLeft={false}
          gradientColors={["#03a9f4", "#ff0058"]}
        /> */}


        <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900  to-[#D4AF37]">

          {/* Card Effect for Text Side */}
          <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
            {/* Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg,#03a9f4, #ff0058)` }}
            ></div>
            {/* Blurred Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg,#03a9f4, #ff0058)` }}
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
              <h2 className="text-3xl font-bold text-white">Merchandising</h2>
              <p className="mt-2 text-lg text-blue-50"></p>
              <ul className="mt-4 space-y-2">
                {["Implements strategic product placement and eye-catching displays",
            "Enhances brand visibility and influences customer purchasing decisions",
            "Ensures compliance with brand guidelines for in-store execution",].map((item, index) => (
                  <li key={index} className="text-white">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData:Merchandising,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }}
    height={400}
    width={550}
    />
          </div>
        </section>



        {/* <ServiceSection
          title="Retail Audit"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
          listItems={[
            "Evaluates product availability, pricing, and shelf positioning", 
            "Monitors compliance with promotional and branding guidelines", 
            "Provides data-driven insights for optimizing retail execution"]}
          gradientColors={["#4dff03", "#00d0ff"]}
        /> */}


        <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900  to-[#D4AF37]">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: RetailAudit,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }}
    height={400}
    width={400}
  />

          </div>
          {/* Card Effect for Text Side */}
          <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
            {/* Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, #4dff03, #00d0ff )`}}
            ></div>
            {/* Blurred Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, #4dff03, #00d0ff )` }}
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
              <h2 className="text-3xl font-bold text-white">Retail Audit</h2>
              <p className="mt-2 text-lg text-blue-50"></p>
              <ul className="mt-4 space-y-2">
                {[ "Evaluates product availability, pricing, and shelf positioning", 
            "Monitors compliance with promotional and branding guidelines", 
            "Provides data-driven insights for optimizing retail execution"].map((item, index) => (
                  <li key={index} className="text-white">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>



        {/* <ServiceSection
          title="Point of Sale Execution"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
          listItems={[
            "Ensures flawless execution of branding and promotions at retail outlets",
            "Manages promotional displays, signage, and in-store branding",
            "Enhances consumer engagement at the final point of purchase",
          ]}
          imageLeft={false}
          gradientColors={["#ffbc00", "#ff0058"]}
        /> */}
          <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900  to-[#D4AF37]">

  {/* Card Effect for Text Side */}
  <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
    {/* Tilted Background Card */}
    <div
      className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
      style={{ background: `linear-gradient(315deg,#ffbc00, #ff0058)` }}
    ></div>
    {/* Blurred Tilted Background Card */}
    <div
      className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
      style={{ background: `linear-gradient(315deg,#ffbc00, #ff0058)` }}
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
      <h2 className="text-3xl font-bold text-white">Point of Sale Execution</h2>
      <p className="mt-2 text-lg text-blue-50"></p>
      <ul className="mt-4 space-y-2">
        {["Ensures flawless execution of branding and promotions at retail outlets",
            "Manages promotional displays, signage, and in-store branding",
            "Enhances consumer engagement at the final point of purchase",].map((item, index) => (
          <li key={index} className="text-white">• {item}</li>
        ))}
      </ul>
    </div>
  </div>
  <div className="relative h-[400px] overflow-hidden rounded-lg">
  <Lottie
  options={{
  loop: true,
  autoplay: true,
  animationData:PointOfSale,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
  }
  }}
  height={400}
  width={400}
  />
  </div>
          </section>
        
        
        {/* 
        <ServiceSection
          title="Asset Optimisation"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
          listItems={[
            "Maximizes the effectiveness of in-store assets like shelves and signage", 
            "Ensures proper utilization, maintenance, and strategic placement", 
            "Increases shopper engagement and improves sales efficiency"]}
          gradientColors={["#03a9f4", "#ff0058"]}
        /> */}


        <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900  to-[#D4AF37]">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: Asset,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }}
    height={400}
    width={400}
  />

          </div>
          {/* Card Effect for Text Side */}
          <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
            {/* Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, #03a9f4, #ff0058 )`}}
            ></div>
            {/* Blurred Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, #03a9f4, #ff0058)` }}
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
              <h2 className="text-3xl font-bold text-white">Asset Optimisation</h2>
              <p className="mt-2 text-lg text-blue-50"></p>
              <ul className="mt-4 space-y-2">
                {["Maximizes the effectiveness of in-store assets like shelves and signage", 
            "Ensures proper utilization, maintenance, and strategic placement", 
            "Increases shopper engagement and improves sales efficiency"].map((item, index) => (
                  <li key={index} className="text-white">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        
        {/* 
        <ServiceSection
          title="Product Management"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
          listItems={[
            "Oversees the entire lifecycle of FMCG products from launch to market expansion",
            "Ensures competitive pricing and efficient distribution",
            "Adapts to market trends and consumer preferences for sustained growth",
          ]}
          imageLeft={false}
          gradientColors={["#4dff03", "#00d0ff"]}
        /> */}

      <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900  to-[#D4AF37]">

          {/* Card Effect for Text Side */}
          <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
            {/* Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, #4dff03, #00d0ff)` }}
            ></div>
            {/* Blurred Tilted Background Card */}
            <div
              className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
              style={{ background: `linear-gradient(315deg, #4dff03, #00d0ff)` }}
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
              <h2 className="text-3xl font-bold text-white">Product Management</h2>
              <p className="mt-2 text-lg text-blue-50"></p>
              <ul className="mt-4 space-y-2">
                {["Oversees the entire lifecycle of FMCG products from launch to market expansion",
                    "Ensures competitive pricing and efficient distribution",
                    "Adapts to market trends and consumer preferences for sustained growth",].map((item, index) => (
                  <li key={index} className="text-white">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Lottie
          options={{
          loop: true,
          autoplay: true,
          animationData:Product,
          rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
          }
          }}
          height={400}
          width={800}
          />
          </div>
              </section>
              </main>
    );
  }