import React, { useState } from 'react';
import { Globe, HelpCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
// import Image from 'react-image';

const vehicles = [
  {
    name: "Sales and Merchandising ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
  },
  {
    name: "Brand Activation and Experiental Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
  },
  {
    name: "Market Expansion Services ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
  },
  {
    name: "Data & Technology ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
    isNew: true,
  },
  {
    name: "Digital Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ze7My4Grm0mgN34J2qnGtNmViop3v.png",
  },
];

const secondaryLinks = [
  { title: "Sales and Merchandising", href: "/services/SalesAndMerchandising" },
  { title: "Brand Activation and Experiental Marketing", href: "/services/BrandActivation" },
  { title: "Market Expansion Services", href: "/services/MarketExpansion" },
  { title: "Data & Technology", href: "/services/DataAndTechnology" },
  { title: "Digital Marketing", href: "/services/DigitalMarketing" },
];

const MainNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center bg-white px-12">
        <div className="flex flex-1 items-center gap-16">
          <Link to="/" className="shrink-0">
         
            <img className='w-20 h-15' src="/logo.png"/>
          </Link>
          <nav className="hidden space-x-2 md:flex">
          <Link to="/" className="rounded-md px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
              Home
            </Link>
            {/* <div
              className="group relative"
              
            >vehical
            </div> */}
            <Link onMouseEnter={() => setActiveDropdown("vehicles")}
              onMouseLeave={() => setActiveDropdown(null)} to="/Services" className="rounded-md px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
              Service
            </Link>
            <Link  to="/About" className="rounded-md px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
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
        <div className=" w-[20vw] px-12 py-8">
              <div className="grid gap-y-4">
                {secondaryLinks.map((link) => (
                  <Link onClick={()=>setActiveDropdown(null)} key={link.title} to={link.href} className="text-sm text-neutral-500 hover:text-neutral-900">
                    {link.title}
                  </Link>
                ))}
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
