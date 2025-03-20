// "use client"

// import { useEffect, useRef, useState } from "react";

// export default function HoverAnimation() {
//   const containerRef = useRef(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Number of dots/lines in each row and column
//   const gridSize = 10;

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       setMousePosition({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("mousemove", handleMouseMove);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("mousemove", handleMouseMove);
//       }
//     };
//   }, []);

//   // Generate grid items
//   const gridItems = [];
//   for (let row = 0; row < gridSize; row++) {
//     for (let col = 0; col < gridSize; col++) {
//       // Calculate position as percentage of container
//       const xPos = (col + 0.5) * (100 / gridSize);
//       const yPos = (row + 0.5) * (100 / gridSize);

//       // Calculate angle from mouse position to this dot
//       const centerX = containerRef.current ? containerRef.current.offsetWidth * (xPos / 100) : 0;
//       const centerY = containerRef.current ? containerRef.current.offsetHeight * (yPos / 100) : 0;

//       // Calculate angle from center to mouse position
//       const dx = mousePosition.x - centerX;
//       const dy = mousePosition.y - centerY;
//       const angle = Math.atan2(dy, dx) * (180 / Math.PI);

//       gridItems.push(
//         <div
//           key={`${row}-${col}`}
//           className="absolute transform transition-all duration-300"
//           style={{
//             left: `${xPos}%`,
//             top: `${yPos}%`,
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           <div
//             className={`
//               transition-all duration-300 ease-out
//               ${isHovering ? "w-5 h-0.5 bg-yellow-600/80" : "w-1.5 h-1.5 rounded-full bg-yellow-600/60"}
//               `}
//             //   ${isHovering ? "w-5 h-0.5 bg-white/80" : "w-1.5 h-1.5 rounded-full bg-white/60"}
//             style={{
//               transform: isHovering ? `rotate(${angle}deg)` : "rotate(0deg)",
//               boxShadow: "0 0 5px rgba(202, 138, 4, 0.3)",
//             //   boxShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
//             }}
//           />
//         </div>
//       );
//     }
//   }

//   return (
//     <div className="flex  absolute z-20 left-0 items-center justify-center h-screen ">
//     {/* <div className="flex  absolute z-20 left-0 items-center justify-center h-screen bg-gray-900"> */}
//       <div
//         ref={containerRef}
//         className="relative   w-72 h-[100vh] rounded-lg overflow-hidden"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//         // style={{
//         //   background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
//         // }}
//       >
//         {/* Gradient overlay */}
//         {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-emerald-500/60 z-0" /> */}

//         {/* Grid items */}
//         {gridItems}
//       </div>
//     </div>
//   );
// }
"use client"

import { useEffect, useRef, useState } from "react";

export default function HoverAnimation() {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Increase grid size to decrease distance between dots
  const gridSize = 15;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Generate grid items
  const gridItems = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      // Calculate position as percentage of container
      const xPos = (col + 0.5) * (100 / gridSize);
      const yPos = (row + 0.5) * (100 / gridSize);

      // Calculate angle from mouse position to this dot
      const centerX = containerRef.current ? containerRef.current.offsetWidth * (xPos / 100) : 0;
      const centerY = containerRef.current ? containerRef.current.offsetHeight * (yPos / 100) : 0;

      // Calculate angle from center to mouse position
      const dx = mousePosition.x - centerX;
      const dy = mousePosition.y - centerY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      gridItems.push(
        <div
          key={`${row}-${col}`}
          className="absolute transform transition-all duration-300"
          style={{
            left: `${xPos}%`,
            top: `${yPos}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`
              transition-all duration-300 ease-out
              ${isHovering ? "w-5 h-0.5 bg-yellow-600/80" : "w-1.5 h-1.5 rounded-full bg-yellow-600/60"}
            `}
            style={{
              transform: isHovering ? `rotate(${angle}deg)` : "rotate(0deg)",
              boxShadow: "0 0 5px rgba(202, 138, 4, 0.3)",
            }}
          />
        </div>
      );
    }
  }

  return (
    <div className="flex absolute z-10 left-0 items-center justify-center h-screen">
      <div
        ref={containerRef}
        className="relative w-72 h-[100vh] rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        // style={{
        //   background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        // }}
      >
        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-emerald-500/60 z-0" /> */}

        {/* Grid items */}
        {gridItems}
      </div>
    </div>
  );
}
