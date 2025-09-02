import { Link } from 'react-router-dom';
import { ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-black w-full py-6 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 xl:px-10" role="contentinfo">
      <div className="max-w-7xl mx-auto border-t-2 border-yellow-500 pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Brand and Mission Section */}
          <section className="xs:col-span-2 md:col-span-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Retail Craft Asia</h2>
            <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              We are your strategic partners who help grow and transform your business and brands at Market Place
            </p>
            {/* Company Logo */}
            <div className="w-32 h-28 sm:w-36 sm:h-32 md:w-40 md:h-36 lg:w-44 lg:h-40">
              <Link to="/" aria-label="Retail Craft Asia Home" className="block h-full w-full">
                <img 
                  src='/logo.png' 
                  alt="Retail Craft Asia Logo" 
                  className="w-full h-full object-contain object-left"
                  loading="lazy"
                  width="176"
                  height="160"
                />
              </Link>
            </div>
          </section>

          {/* Navigation Links Section */}
          <nav aria-label="Footer Navigation" className="mt-4 sm:mt-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 uppercase tracking-wider text-gray-800">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-2 sm:gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/team", label: "Leadership Team" },
                { to: "/career", label: "Career" },
                { to: "/contact", label: "Contact Us" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to}
                    className="text-sm xs:text-sm sm:text-base text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200 inline-block py-1.5 sm:py-2 hover:pl-1.5 rounded-md hover:bg-gray-50 w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Section */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 uppercase tracking-wider text-gray-800">
              Our Services
            </h3>
            <ul className="grid grid-cols-1 gap-2 sm:gap-3">
              {[
                { to: "/services/market-expansion", label: "Market Expansion" },
                { to: "/services/sales-merchandising", label: "Sales & Merchandising" },
                { to: "/services/brand-activation", label: "Brand Activation" },
                { to: "/services/data-technology", label: "Data & Technology" },
                { to: "/services/digital-marketing", label: "Digital Marketing" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to}
                    className="text-sm xs:text-sm sm:text-base text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200 inline-block py-1.5 sm:py-2 hover:pl-1.5 rounded-md hover:bg-gray-50 w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Column */}
          {/* <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Media</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Media contacts
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Images
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-semibold mb-4 mt-8 uppercase tracking-wider">Investors</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Corporate governance
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Shares, ADRs, & Bonds
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Publications
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Company Column */}
          {/* <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Strategy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Our leadership
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Brands A - Z
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Our history
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-900 font-semibold transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-semibold mb-4 mt-8 uppercase tracking-wider">Share Information</h3>
            <Link to="#" className="hover:text-purple-900 font-semibold transition-colors flex items-center gap-1">
              Share Price <ExternalLink className="h-4 w-4" />
            </Link>
          </div> */}
          {/* Contact Information Section */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 uppercase tracking-wider text-gray-800">
              Contact Info
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-1 mr-2 sm:mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Asia Pacific Region<br className="hidden sm:block" />
                  <span className="sm:hidden"> - </span>Bangkok, Thailand
                </span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:info@retailcraftasia.com" 
                  className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-yellow-600 transition-colors duration-200 break-all"
                >
                  info@retailcraftasia.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} Retail Craft Asia. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link 
                to="/privacy" 
                className="text-xs sm:text-sm text-gray-500 hover:text-yellow-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-xs sm:text-sm text-gray-500 hover:text-yellow-600 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

