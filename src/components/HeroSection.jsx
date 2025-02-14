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
        size: Math.random() * 3 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 1.5, // Velocity X
        vy: (Math.random() - 0.5) * 1.5, // Velocity Y
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
        if (distance < 150) {
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
      className="relative h-screen flex flex-col justify-center items-center text-center text-white mt-[-70px] banner"
    >
      <h5>@Lundeveloper</h5>
      <div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent uppercase">
          ANIMATION spider man
        </h1>
        <h1 className="text-6xl font-bold bg-gradient-to-l from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent uppercase">
          using JavaScript
        </h1>
      </div>
      <h4 className="mt-4">Subscribe to the channel to continuously update interesting videos</h4>
      <button className="mt-4 px-6 py-2 border border-gray-400 rounded-full bg-gradient-to-b from-red-500 to-transparent hover:bg-purple-500 hover:text-black hover:shadow-lg transition">
        Subscribe Now &#8599;
      </button>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
    </main>
  );
};

export default HeroSection;
