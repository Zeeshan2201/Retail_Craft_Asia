import React, { useEffect, useState } from "react";
import boxIcon1 from "../assets/Industry/fmcg.svg";
import boxIcon2 from "../assets/Industry/account_balance.svg";
import boxIcon3 from "../assets/Industry/Electronic.svg";
import boxIcon4 from "../assets/Industry/health.svg";
import boxIcon5 from "../assets/Industry/health_pharmacy.svg";

const icons = [boxIcon1, boxIcon2, boxIcon3, boxIcon4, boxIcon5]; // List of SVGs

const BackgroundAnimation = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const numBoxes = 30; // Number of moving objects
    const newBoxes = Array.from({ length: numBoxes }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}vw`, // Random horizontal position
      size: `${Math.random() * 50 + 20}px`, // Random box size (20px - 70px)
      delay: `${Math.random() * 3}s`, // Random delay
      duration: `${Math.random() * 10 + 6}s`, // Slightly faster movement (6s - 16s)
      icon: icons[Math.floor(Math.random() * icons.length)], // Random SVG
    }));
    setBoxes(newBoxes);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="absolute flex items-center justify-center rounded-xl bg-white bg-opacity-10"
          style={{
            width: box.size,
            height: box.size,
            left: box.left,
            bottom: "-50px", // Start slightly below the screen
            animation: `box-rise ${box.duration} linear infinite`,
            animationDelay: box.delay,
          }}
        >
          {/* <img src={box.icon} alt="Box Icon" className="w-3/4 h-3/4 opacity-80" /> */}
          {/* <div className="rounded-full bg-purple-900 h-8 w-8"></div> */}
        </div>
      ))}
      <style>
        {`
          @keyframes box-rise {
            from {
              transform: translateY(0) scale(1) rotate(0deg);
              opacity: 0.9;
            }
            to {
              transform: translateY(-110vh) scale(1.2) rotate(720deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundAnimation;
