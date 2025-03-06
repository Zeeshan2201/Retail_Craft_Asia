import React, { useState } from "react";

const AnimatedBackground = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to check if a dot should expand based on its position relative to the hovered dot
  const shouldExpand = (index) => {
    if (hoveredIndex === null) return false;

    const hoveredRow = Math.floor(hoveredIndex / 10);
    const hoveredCol = hoveredIndex % 10;
    const currentRow = Math.floor(index / 10);
    const currentCol = index % 10;

    // Define the star pattern relative to the hovered dot
    const rowDiff = Math.abs(currentRow - hoveredRow);
    const colDiff = Math.abs(currentCol - hoveredCol);

    // Star pattern logic
    return (
      rowDiff === colDiff || // Diagonal dots
      currentRow === hoveredRow || // Same row
      currentCol === hoveredCol // Same column
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-purple-200 to-pink-200">
      {/* White Background Container */}
      <div className="relative w-full h-full bg-white">
        {/* Dots Grid Effect */}
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-purple-900 transition-all duration-500 ${
                  shouldExpand(index) ? "h-12 w-12" : ""
                }`}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;