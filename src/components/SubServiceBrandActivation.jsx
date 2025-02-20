import React from 'react';

const Button = ({ children, variant = "primary", className = "" }) => {
  const baseStyle = "px-6 py-2 font-semibold rounded-md transition-colors duration-300";
  const variants = {
    primary: "bg-white text-blue-600 hover:bg-blue-50",
    secondary: "bg-transparent border border-white text-white hover:bg-white/10",
  };

  return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
};

const ServiceSection = ({ title, description, image, listItems, imageLeft = true, gradientColors }) => (
  <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center">
    {imageLeft ? (
      <>
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
      </>
    ) : (
      <>
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
      </>
    )}
  </section>
);

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center text-white">
       
       <h1 className="mt-4 mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Brand Activation 
        </h1> <br></br>
        <p className="mb-4 mt-4  text-justify text-2xl font-semibold tracking-wider">We help brands maximize their market presence by ensuring that the right products are available at the right time and place. Our expert team focuses on enhancing product visibility, executing strategic in-store promotions, and optimizing shelf placement to drive higher sales and brand recall.

With a data-driven approach, we analyze consumer behavior, market trends, and competitor strategies to develop customized merchandising plans that increase product engagement and boost conversions.</p>
        <Button className="mt-8">SPEAK WITH OUR EXPERTS →</Button>
      </section>

      {/* Service Sections with Glassmorphism & Hover Animation */}
      <ServiceSection
        title="Field Sales"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Engages directly with retailers, wholesalers, and distributors", 
          "Builds strong relationships to expand market reach", 
          "Provides real-time market insights for improved sales performance"]}
        gradientColors={["#ffbc00", "#ff0058"]}
      />

      <ServiceSection
        title="Merchandising"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Implements strategic product placement and eye-catching displays",
          "Enhances brand visibility and influences customer purchasing decisions",
          "Ensures compliance with brand guidelines for in-store execution",
        ]}
        imageLeft={false}
        gradientColors={["#03a9f4", "#ff0058"]}
      />

      <ServiceSection
        title="Retail Audit"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Evaluates product availability, pricing, and shelf positioning", 
          "Monitors compliance with promotional and branding guidelines", 
          "Provides data-driven insights for optimizing retail execution"]}
        gradientColors={["#4dff03", "#00d0ff"]}
      />

      <ServiceSection
        title="Point of Sale Execution"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Ensures flawless execution of branding and promotions at retail outlets",
          "Manages promotional displays, signage, and in-store branding",
          "Enhances consumer engagement at the final point of purchase",
        ]}
        imageLeft={false}
        gradientColors={["#ffbc00", "#ff0058"]}
      />

      <ServiceSection
        title="Asset Optimisation"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Maximizes the effectiveness of in-store assets like shelves and signage", 
          "Ensures proper utilization, maintenance, and strategic placement", 
          "Increases shopper engagement and improves sales efficiency"]}
        gradientColors={["#03a9f4", "#ff0058"]}
      />

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
      />
    </main>
  );
}