"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WhyChooseUs() {
  const [expanded, setExpanded] = useState(null);

  const toggleItem = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const reasons = [
    {
      title: "Long Term Strategic Partnership",
      content: "Building lasting partnerships for sustainable growth and innovation in retail across Asia."
    },
    {
      title: "Deep Industry Knowledge and Global Network",
      content: "Leveraging deep industry expertise and a vast global network for strategic growth."
    },
    {
      title: "Client Centric Focus",
      content: "Prioritizing client needs with tailored solutions for lasting success."
    },
    {
      title: "Tailored Made Solutions",
      content: "Crafting tailor-made solutions to drive business excellence and growth."
    },
    {
      title: "Data Driven Approach",
      content: "Empowering decisions with a data-driven approach for measurable success."
    },
    {
      title: "Inbuilt Technology Platforms",
      content: "Enhancing business efficiency with inbuilt technology platforms."
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-gray-500 font-medium tracking-wide uppercase">A LITTLE MORE ABOUT US</h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                Why Choose Us
              </h2>
            </div>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-xl text-black font-medium">{reason.title}</h3>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-900 transition-transform ${expanded === index ? "rotate-180" : ""}`}
                    />
                  </div>
                  {expanded === index && (
                    <div className="mt-3 text-gray-700 animate-fadeIn">{reason.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.pihP2nhgs9HeH7_GExtMkQAAAA&pid=Api&P=0&h=220"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-full shadow-lg"
              alt="Why Choose Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}