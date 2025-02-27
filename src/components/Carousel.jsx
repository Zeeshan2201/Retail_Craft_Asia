"use client"

import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/Services/Growth_1.jpg",
    alt: "J&H Tackle Fishing Equipment",
  },
  {
    image: "/Services/Growth_2.jpeg",
    alt: "J&H Tackle Brand",
  },
  {
    image: "/Services/Growth_4.png",
    alt: "Absolute Dogs Training",
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  // const previous = () => {
  //   setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  // }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, []) // Removed next from dependencies

  return (
    <div className="relative h-[60vh] w-[90%] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/40 to-blue-600/40" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full rounded-lg shadow-lg object-cover" />
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={previous}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button> */}

      {/* <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-16 h-1.5 rounded-full transition-colors
              ${index === current ? "bg-blue-500" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

