import React from 'react';
import Lottie from "react-lottie";
import GIF_1 from "../animation/Digital_Marketing/GIF_1.json"
import GIF_2 from "../animation/Digital_Marketing/GIF_2.json"

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
          Digital Marketing
        </h1> <br></br>
        <p className="mb-4 mt-4 md:m-8 text-justify text-2xl font-semibold tracking-wider">We boost online brand presence through digital marketing strategies, including SEO, PPC, and performance marketing. Our targeted campaigns engage audiences, generate leads, and drive conversions, ensuring measurable growth.</p>
        <Button className="mt-8">SPEAK WITH OUR EXPERTS →</Button>
      </section>


      <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-r from-purple-900 via-purple-900  to-[#D4AF37]">
        <div className="relative h-[400px] overflow-hidden rounded-lg">
        <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: GIF_2,
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
            style={{ background: `linear-gradient(315deg, #ffbc00, ,#ff0058)` }}
          ></div>
          {/* Blurred Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 blur-xl opacity-50 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg,#ffbc00,#ff0058)` }}
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
            <h2 className="text-3xl font-bold text-white"> Content Marketing</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
              {[
          "Creates valuable and relevant content for target audiences",
            "Improves brand authority and customer trust",
            "Boosts website traffic and social media engagement.",].map((item, index) => (
                <li key={index} className="text-white">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Service Sections with Glassmorphism & Hover Animation */}
      {/* <ServiceSection

        title="Content Marketing"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Creates valuable and relevant content for target audiences",
            "Improves brand authority and customer trust",
            "Boosts website traffic and social media engagement.",]}
        gradientColors={["#ffbc00", "#ff0058"]}
      /> */}

<section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center bg-gradient-to-l from-purple-900 via-purple-900  to-[#D4AF37]">
        {/* Card Effect for Text Side */}
        <div className="group relative flex justify-center items-center w-[320px] h-[400px] mx-auto">
          {/* Tilted Background Card */}
          <div
            className="absolute top-0 left-10 w-[50%] h-full bg-white rounded-lg transform skew-x-12 transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-40px)]"
            style={{ background: `linear-gradient(315deg, #03a9f4,#ff0058 )` }}
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
            <h2 className="text-3xl font-bold text-white">Social Media Marketing</h2>
            <p className="mt-2 text-lg text-blue-50"></p>
            <ul className="mt-4 space-y-2">
              {[
          "Builds brand awareness through social media platforms",
            "Engages with customers via organic and paid campaigns",
            "Drives sales and brand loyalty through targeted marketing",
        ].map((item, index) => (
                <li key={index} className="text-white">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
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
    height={400}
    width={400}
  />

        </div>
      </section>

      {/* <ServiceSection
        title="Social Media Marketing"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        listItems={[
          "Builds brand awareness through social media platforms",
            "Engages with customers via organic and paid campaigns",
            "Drives sales and brand loyalty through targeted marketing",
        ]}
        imageLeft={false}
        gradientColors={["#03a9f4", "#ff0058"]}
      /> */}

    </main>
  );
}