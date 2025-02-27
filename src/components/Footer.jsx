import { Link } from 'react-router-dom';
import { ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-purple-900 font-semibold py-12 px-4 md:px-6">
      <div className="container mx-auto border-t-2 border-purple-900 pt-16 max-w-7xl">
        <div className="flex justify-evenly md:flex-row flex-col gap-8">
          {/* Brand and Mission Column */}
          <div className="lg:col-span-2 md:w-[25%]">
            <h2 className="text-xl mb-4">Retail Craft Asia</h2>
            <p className="text-purple-900 font-semibold mb-6 text-lg ">
            We are your strategic partners who will help you grow and transform your business and brands at Market Place 
             </p>
            {/* Bird Logo Placeholder */}
            <div className="w-24 h-24">
              <img src='/logo.png'/>
            </div>
          </div>
{/* comment */}
          {/* Useful Links Column */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Useful Links</h3>
            <ul className="space-y-2">
            <li>
                <Link to="/" className="hover:text-purple-900 font-semibold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Services" className="hover:text-purple-900 font-semibold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-purple-900 font-semibold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:text-purple-900 font-semibold transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-purple-900 font-semibold transition-colors">
                  Ask Retail Craft (FAQs)
                </Link>
              </li>
            </ul>
          </div>

          {/* Downloads Column */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/SalesAndMerchandising" className="hover:text-purple-900 font-semibold transition-colors flex items-center gap-1">
                Sales and Merchandising
                </Link>
              </li>
              <li>
                <Link to="/services/BrandActivation" className="hover:text-purple-900 font-semibold transition-colors flex items-center gap-1">
                Brand Activation and Experiental Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/MarketExpansion" className="hover:text-purple-900 font-semibold transition-colors flex items-center gap-1">
                Market Expansion Services
                </Link>
              </li>
              <li>
                <Link to="/services/DataAndTechnology" className="hover:text-purple-900 font-semibold transition-colors flex items-center gap-1">
                Data & Technology
                </Link>
              </li>
              <li>
                <Link to="/services/DigitalMarketing" className="hover:text-purple-900 font-semibold transition-colors flex items-center gap-1">
                Digital Marketing
                </Link>
              </li>
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
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Company</h3>
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
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t-2 border-purple-900">
          {/* <h3 className="text-sm font-semibold uppercase tracking-wider">Follow us on</h3> */}
        </div>
      </div>
    </footer>
  )
}

