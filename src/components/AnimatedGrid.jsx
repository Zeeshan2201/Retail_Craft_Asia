import React from "react";

const AnimatedGrid = () => {
  const sections = [
    { id: 1, title: "FMCG", image: "https://tse1.mm.bing.net/th?id=OIP.LOEPDtJSJN8G9ueTIjLQ0QHaEl&pid=Api&P=0&h=220" },
    { id: 2, title: "Retail", image: "https://tse1.mm.bing.net/th?id=OIP.LOEPDtJSJN8G9ueTIjLQ0QHaEl&pid=Api&P=0&h=220" },
    { id: 3, title: "Health & Beauty", image: "health-beauty.jpg" },
    { id: 4, title: "Consumer Durables & Electronics", image: "https://tse1.mm.bing.net/th?id=OIP.LOEPDtJSJN8G9ueTIjLQ0QHaEl&pid=Api&P=0&h=220" },
    { id: 5, title: "Hospitality Sector", image: "hospitality.jpg" },
    { id: 6, title: "Pharmaceuticals", image: "pharmaceuticals.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 rotate-0 group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out group-hover:rotate-[330deg]"
            />
            {/* Title */}
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 group-hover:bg-opacity-20 transition-all duration-300">
              {section.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedGrid;