import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const secondaryLinks = [
  { title: "Market Expansion Services", href: "/services/MarketExpansion" },
  { title: "Sales and Merchandising", href: "/services/SalesAndMerchandising" },
  { title: "Brand Activation and Experiential Marketing", href: "/services/BrandActivation" },
  { title: "Data & Technology", href: "/services/DataAndTechnology" },
  { title: "Digital Marketing", href: "/services/DigitalMarketing" },
];

const MainNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center bg-white px-6 md:px-12 shadow-lg">
        <div className="flex flex-1 items-center justify-between w-full">
          <Link to="/" className="shrink-0">
            <img className='w-25 h-20' src="/logo_1.png" alt="Logo" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            
            <Link to="/" className="px-4 py-2 text-base  font-medium text-black hover:hover:bg-neutral-100 hover:text-black">Home</Link>
            <Link to="/About" className="px-4 py-2 text-base font-medium text-black hover:hover:bg-neutral-100 hover:text-black">About Us</Link>
            <div
              className="relative flex flex-row px-4 py-2 text-base font-medium text-black hover:hover:bg-neutral-100 hover:text-black"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/Services" className=" flex text-base font-medium text-black hover:hover:bg-neutral-100 hover:text-black">
                <span>Services</span>
                
              <span className='transition-all duration-300 ease-in-out ml-1 px-1 pt-1'>{activeDropdown ?  (<ChevronUp className="w-6 h-6 transition-all duration-300 ease-in-out " />): (<ChevronDown className="w-6 h-6 transition-all  duration-300 ease-in-out" />)}</span>
              </Link>
              {/* Dropdown */}
              <div
                className={`absolute bg-gray-100 left-0 w-56 top-full mt-1 z-50 shadow-lg transition-all duration-300 ease-in-out ${
                  activeDropdown === "services" ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="p-4">
                  {secondaryLinks.map((link, index) => (
                    <div key={index} className="py-2">
                      <Link
                        onClick={() => setActiveDropdown(null)}
                        to={link.href}
                        className="text-base text-black hover:text-gray-400"
                      >
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/MangTeam" className="px-4 py-2 text-base font-medium text-black hover:hover:bg-neutral-100 hover:text-black">Management</Link>
            <Link to="/Contact" className="px-4 py-2 text-base font-medium text-black hover:hover:bg-neutral-100 hover:text-black">Contact Us</Link>
            {/* <Link to="/faq" className="px-4 py-2 text-base font-medium text-black hover:hover:bg-neutral-100 hover:text-black">FAQ</Link> */}
            
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } p-6 shadow-lg`}
      >
        <button className="mb-4 text-black" onClick={() => setMobileMenuOpen(false)}>
          <X size={28} />
        </button>
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="text-base font-medium text-black" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/About" className="text-base font-medium text-black" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          {/* <Link to="/Services" className="text-base font-medium text-purple-900" onClick={() => setMobileMenuOpen(false)}>Services</Link> */}
          <div className="relative">
        <Link
          to="/services"
          className="flex items-center  w-full text-base font-medium text-black py-2"
        >
          Services
          <span className='ml-1 pl-1 pt-1'>{isSubMenuOpen ? <ChevronUp className="w-4 h-4" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} /> : <ChevronDown className="w-4 h-4" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} />}</span>
        </Link>

        {/* Sub-Services Dropdown */}
        {isSubMenuOpen && (
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <Link to="/services/SalesAndMerchandising" className="text-sm text-black hover:text-purple-900" onClick={() => setMobileMenuOpen(false)}>Sales and Merchandising</Link>
            <Link to="/services/BrandActivation" className="text-sm text-black hover:text-purple-900" onClick={() => setMobileMenuOpen(false)}>Brand Activation</Link>
            <Link to="/services/MarketExpansion" className="text-sm text-black hover:text-purple-900" onClick={() => setMobileMenuOpen(false)}>Market Expansion</Link>
            <Link to="/services/DataAndTechnology" className="text-sm text-black hover:text-purple-900" onClick={() => setMobileMenuOpen(false)}>Data & Technology</Link>
            <Link to="/services/DigitalMarketing" className="text-sm text-black hover:text-purple-900" onClick={() => setMobileMenuOpen(false)}>Digital Marketing</Link>
          </div>
        )}
      </div>
      <Link to="/MangTeam" className="text-base font-medium text-black" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
          <Link to="/Contact" className="text-base font-medium text-black" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
         
          {/* <Link to="/faq" className="text-base font-medium text-purple-900" onClick={() => setMobileMenuOpen(false)}>FAQ</Link> */}
        </nav>
      </div>
    </>
  );
};

export default MainNav;


// import { useState } from "react";

// import { Menu, X } from "lucide-react";

// export function Button({ children, onClick, className = "" }) {
//   return (
//     <button
//       className={`px-4 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700 transition ${className}`}
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
