import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const VantaBirds = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      birdSize: 1.5, // Increase the size of the birds
      wingSpan: 20.0, // Adjust wing span
      separation: 50.0, // Spacing between birds
      alignment: 50.0, // How much birds align with each other
      cohesion: 50.0, // How much birds stick together
      quantity: 3.0, // Number of birds
      backgroundColor: 0x001133, // Background color
      color1: 0xff8800, // Bird color
      color2: 0x00ffaa, // Secondary color for variety
    });

    return () => vantaEffect && vantaEffect.destroy();
  }, []);

  return <div ref={vantaRef} className="w-full h-screen absolute top-0 left-0" />;
};

export default VantaBirds;
