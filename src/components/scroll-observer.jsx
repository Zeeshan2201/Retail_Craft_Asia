"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ScrollContext = createContext({
  scrollY: 0,
  scrollDirection: null,
})

export function ScrollObserver({ children }) {
  const [scrollY, setScrollY] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up")
      }

      setScrollY(currentScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return <ScrollContext.Provider value={{ scrollY, scrollDirection }}>{children}</ScrollContext.Provider>
}

export function useScroll() {
  return useContext(ScrollContext)
}
