import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const colors = ["#eee", "#545454", "#596d91", "#bb5a68", "#696541"];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      generateDots();
    };

    const generateDots = () => {
      dotsRef.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 2, // Velocity X
        vy: (Math.random() - 0.5) * 2, // Velocity Y
      }));
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsRef.current.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateDots = () => {
      dotsRef.current.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1;
      });
    };

    const animate = () => {
      updateDots();
      drawDots();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const mouse = { x: event.clientX - rect.left, y: event.clientY - rect.top };

      drawDots(); // Keep dots visible while interacting
      dotsRef.current.forEach((dot) => {
        const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 120) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    resizeCanvas();
    drawDots();
    animate();

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-black overflow-hidden"
    >
      <h5 className="text-lg text-gray-300">@Lundeveloper</h5>
      <div className="mt-2">
        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent uppercase">
          ANIMATION SPIDER-MAN
        </h1>
        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-l from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent uppercase">
          USING JAVASCRIPT
        </h1>
      </div>
      <h4 className="mt-4 text-lg text-gray-300">
        Subscribe to the channel for more amazing videos!
      </h4>
      <button className="mt-6 px-6 py-2 text-lg border border-gray-400 rounded-full bg-gradient-to-b from-red-500 to-transparent hover:bg-purple-500 hover:text-black hover:shadow-lg transition">
        Subscribe Now &#8599;
      </button>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
    </main>
  );
};

export default HeroSection;


// import React from "react";
// import bgImage from "../images/bg.jpg";
// import logo from "../images/2.png";
// import codeImage from "../images/code.png";
// import bg1 from "../images/bg.png";
// import bg2 from "../images/bg2.png";
// import mockup from "../images/mockup.png";
// import rock1 from "../images/rock1.png";
// import rock2 from "../images/rock2.png";
// import rock3 from "../images/rock3.png";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative h-screen bg-gray-300 bg-opacity-75 bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="container mx-auto px-4 py-16">
//         {/* Header */}
//         <header className="flex justify-between items-start flex-wrap">
//           <div className="flex flex-col justify-start items-start max-w-lg">
//             <h1 className="text-5xl font-semibold text-gray-800 font-karantina leading-tight">
//               CSS ONLY
//             </h1>
//             <img src={logo} alt="Logo" className="w-32 mt-4" />
//           </div>
//           <div className="text-right max-w-xs">
//             <h3 className="text-4xl font-karantina text-gray-800">LUN DEV</h3>
//             <div className="mt-2">
//               <p>Design By</p>
//               <p className="font-medium">Lun Dev</p>
//             </div>
//             <div className="mt-2">
//               <p>Code By</p>
//               <p className="font-medium">Lun Dev</p>
//             </div>
//             <img src={codeImage} alt="Code" className="mt-4 w-64" />
//           </div>
//         </header>

//         {/* Image Slider Section */}
//         <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-10">
//           <div className="flex space-x-4">
//             <div className="relative w-72 h-96 bg-white rounded-lg overflow-hidden">
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${bg1})`,
//                   WebkitMaskImage: `url(${mockup})`,
//                   maskImage: `url(${mockup})`,
//                   WebkitMaskSize: "contain",
//                   maskSize: "contain",
//                   WebkitMaskRepeat: "no-repeat",
//                   maskRepeat: "no-repeat",
//                 }}
//               />
//             </div>
//             <div className="relative w-72 h-96 bg-white rounded-lg overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-700">
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${bg2})`,
//                   WebkitMaskImage: `url(${mockup})`,
//                   maskImage: `url(${mockup})`,
//                   WebkitMaskSize: "contain",
//                   maskSize: "contain",
//                   WebkitMaskRepeat: "no-repeat",
//                   maskRepeat: "no-repeat",
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Rock Images Section */}
//         <div className="absolute inset-0 z-0 pointer-events-none">
//           <div className="absolute w-full h-full flex justify-center items-start space-x-8 bottom-8 z-10">
//             <img src={rock1} alt="Rock 1" className="h-40 transition-all duration-700" />
//             <img src={rock2} alt="Rock 2" className="h-1/2 absolute bottom-0 left-0 transition-all duration-700" />
//             <img src={rock3} alt="Rock 3" className="h-full absolute bottom-0 right-0 -rotate-6 transition-all duration-700" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
