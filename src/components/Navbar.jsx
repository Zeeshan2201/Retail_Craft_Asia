import React, { useState } from 'react';
import { Globe, HelpCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
// import Image from 'react-image';

const vehicles = [
  {
    name: "Model S",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
  },
  {
    name: "Model 3",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
  },
  {
    name: "Model Y",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
  },
  {
    name: "New Model Y",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
    isNew: true,
  },
  {
    name: "Model X",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
  },
  {
    name: "Cybertruck",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
  },
];

const secondaryLinks = [
  { title: "Inventory", href: "#" },
  { title: "Used Cars", href: "#" },
  { title: "Demo Drive", href: "#" },
  { title: "Trade-In", href: "#" },
  { title: "Compare", href: "#" },
  { title: "Help Me Charge", href: "#" },
  { title: "Fleet", href: "#" },
  { title: "Semi", href: "#" },
  { title: "Roadster", href: "#" },
  { title: "Federal Tax Credit", href: "#" },
];

const MainNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center bg-white px-12">
        <div className="flex flex-1 items-center gap-16">
          <Link to="/" className="shrink-0">
            {/* <svg className="h-6 w-32" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h24v27.9h11.5V7h24.5V0H85.3z"
                fill="currentColor"
              />
            </svg> */}
            
            <img className='w-20 h-15' src="/logo.png"/>
          </Link>
          <nav className="hidden space-x-2 md:flex">
          <button className="rounded-md px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
              Home
            </button>
            <div
              className="group relative"
              onMouseEnter={() => setActiveDropdown("vehicles")}
              // onMouseLeave={() => setActiveDropdown(null)}
            >
            </div>
            <Link to="/Services" className="rounded-md px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
              Service
            </Link>
            <Link to="/About" className="rounded-md px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
              About Us 
            </Link>
            <Link to="/Contact" className="rounded-md px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
              Contact us
            </Link>
            <Link to="/faq" className="rounded-md px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
              FAQ
            </Link>
            
          </nav>
        </div>
        {/* <div className="flex items-center gap-2">
          <button className="rounded-md p-2 text-neutral-900 hover:bg-neutral-100">
            <HelpCircle className="h-5 w-5" />
          </button>
          <button className="rounded-md p-2 text-neutral-900 hover:bg-neutral-100">
            <Globe className="h-5 w-5" />
          </button>
          <button className="rounded-md p-2 text-neutral-900 hover:bg-neutral-100">
            <User className="h-5 w-5" />
          </button>
        </div> */}
      </header>

      {/* Full-width dropdown menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 transform bg-white shadow-lg transition-all duration-300 ease-in-out ${
          activeDropdown === "vehicles"
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onMouseEnter={() => setActiveDropdown("vehicles")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="mx-auto max-w-7xl px-12 py-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-3 gap-8">
              {vehicles.map((vehicle) => (
                <div key={vehicle.name} className="group/card">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="text-base font-medium text-neutral-900">
                      {vehicle.name}
                      {vehicle.isNew && <span className="ml-2 text-xs font-medium text-neutral-500">New</span>}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-4 text-sm text-neutral-500">
                    <Link to="#" className="hover:text-neutral-900 hover:underline">
                      Learn
                    </Link>
                    <Link to="#" className="hover:text-neutral-900 hover:underline">
                      Order
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-4">
              <div className="grid gap-y-4">
                {secondaryLinks.map((link) => (
                  <Link key={link.title} to={link.href} className="text-sm text-neutral-500 hover:text-neutral-900">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for the rest of the page when dropdown is active */}
      <div
        className={`fixed inset-0 z-30 bg-black/20 transition-opacity ${
          activeDropdown ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onMouseEnter={() => setActiveDropdown(null)}
      />
    </>
  );
};

export default MainNav;


// import { useState } from "react";

// import { Menu, X } from "lucide-react";

// export function Button({ children, onClick, className = "" }) {
//   return (
//     <button
//       className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <a href="#" className="text-xl font-bold text-blue-600">Brand</a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
//           <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
//           <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
//           <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
//           <Button>Sign Up</Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
//           <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
//           <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
//           <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
//           <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
//           <Button>Sign Up</Button>
//         </div>
//       )}
//     </nav>
//   );
// }
