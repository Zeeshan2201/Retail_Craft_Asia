import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const secondaryLinks = [
  { title: "Market Expansion Services", href: "/services/market-expansion" },
  { title: "Sales and Merchandising", href: "/services/sales-merchandising" },
  { title: "Brand Activation and Experiential Marketing", href: "/services/brand-activation" },
  { title: "Data & Technology", href: "/services/data-technology" },
  { title: "Digital Marketing", href: "/services/digital-marketing" },
];

const MainNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 md:h-20 items-center bg-white px-4 sm:px-6 md:px-8 lg:px-12 shadow-lg">
        <div className="flex flex-1 items-center justify-between w-full max-w-7xl mx-auto">
          <Link to="/" className="shrink-0" aria-label="Retail Craft Asia Home">
            <img className='h-12 md:h-16' src="/logo.png" alt="Retail Craft Asia Logo" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            <Link 
              to="/" 
              className="px-3 py-2 text-sm lg:text-base font-medium text-black hover:bg-neutral-100 hover:text-black rounded-md transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 text-sm lg:text-base font-medium text-black hover:bg-neutral-100 hover:text-black rounded-md transition-colors"
            >
              About Us
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/services" 
                className="flex items-center px-3 py-2 text-sm lg:text-base font-medium text-black hover:bg-neutral-100 hover:text-black rounded-md transition-colors"
              >
                <span>Services</span>
                <span className="ml-1">
                  {activeDropdown ? (
                    <ChevronUp className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200" />
                  )}
                </span>
              </Link>
              {/* Dropdown */}
              <div
                className={`absolute left-0 w-48 sm:w-52 md:w-56 lg:w-60 mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 origin-top ${
                  activeDropdown === "services" 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="p-3 sm:p-4">
                  {secondaryLinks.map((link, index) => (
                    <div key={index} className="py-1.5 sm:py-2">
                      <Link
                        onClick={() => setActiveDropdown(null)}
                        to={link.href}
                        className="text-sm sm:text-base text-black hover:text-gray-400 transition-colors"
                      >
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/team" className="px-2 sm:px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-black hover:bg-neutral-100 hover:text-black rounded-md transition-colors">Leadership Team</Link>
            <Link to="/Career" className="px-2 sm:px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-black hover:bg-neutral-100 hover:text-black rounded-md transition-colors">Career</Link>
            <Link to="/Contact" className="px-2 sm:px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-black hover:bg-neutral-100 hover:text-black rounded-md transition-colors">Contact Us</Link>
            {/* <Link to="/faq" className="px-4 py-2 text-base font-medium text-black hover:hover:bg-neutral-100 hover:text-black">FAQ</Link> */}
            
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 max-w-[90vw] sm:max-w-full bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
            <img className="h-8 sm:h-10" src="/logo.png" alt="Retail Craft Asia Logo" />
            <button
              className="p-2 -mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex-1 px-4 sm:px-6 py-3 sm:py-4 space-y-1">
            <Link
              to="/"
              className="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="space-y-1">
              <button
                className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                aria-expanded={isSubMenuOpen}
              >
                <span>Services</span>
                {isSubMenuOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Sub-Services Dropdown */}
              {isSubMenuOpen && (
                <div className="ml-3 sm:ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-3 sm:pl-4 py-2">
                  <Link
                    to="/services/SalesAndMerchandising"
                    className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sales and Merchandising
                  </Link>
                  <Link
                    to="/services/BrandActivation"
                    className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Brand Activation
                  </Link>
                  <Link
                    to="/services/MarketExpansion"
                    className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Market Expansion
                  </Link>
                  <Link
                    to="/services/DataAndTechnology"
                    className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Data & Technology
                  </Link>
                  <Link
                    to="/services/DigitalMarketing"
                    className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/team"
              className="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership Team
            </Link>
            
            <Link
              to="/Career"
              className="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career
            </Link>
            
            <Link
              to="/Contact"
              className="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
          
          <div className="p-4 sm:p-6 border-t border-gray-200 mt-auto">
            <p className="text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} Retail Craft Asia. All rights reserved.
            </p>
          </div>
        </div>
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
