import { Link } from 'react-router-dom';
import { ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2b2b2b] text-gray-200 py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand and Mission Column */}
          <div className="lg:col-span-2">
            <h2 className="text-xl mb-4">Retail Craft Asia</h2>
            <p className="text-gray-400 mb-6 text-lg">
              We unlock the power of food to enhance quality of life for everyone, today and for generations to come
            </p>
            {/* Bird Logo Placeholder */}
            <div className="w-24 h-24">
              <svg viewBox="0 0 100 100" className="fill-current text-gray-400" aria-hidden="true">
                <path d="M20,50 Q50,20 80,50 Q50,80 20,50 Z" />
              </svg>
            </div>
          </div>
{/* comment */}
          {/* Useful Links Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Useful Links</h3>
            <ul className="space-y-2">
            <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Ask Retail Craft (FAQs)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Downloads Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/SalesAndMerchandising" className="hover:text-white transition-colors flex items-center gap-1">
                Sales and Merchandising
                </Link>
              </li>
              <li>
                <Link href="/services/BrandActivation" className="hover:text-white transition-colors flex items-center gap-1">
                Brand Activation and Experiental Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/MarketExpansion" className="hover:text-white transition-colors flex items-center gap-1">
                Market Expansion Services
                </Link>
              </li>
              <li>
                <Link href="/services/DataAndTechnology" className="hover:text-white transition-colors flex items-center gap-1">
                Data & Technology
                </Link>
              </li>
              <li>
                <Link href="/services/DigitalMarketing" className="hover:text-white transition-colors flex items-center gap-1">
                Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Media Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Media</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Media contacts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Images
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-semibold mb-4 mt-8 uppercase tracking-wider">Investors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Corporate governance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shares, ADRs, & Bonds
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Brands A - Z
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our history
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-semibold mb-4 mt-8 uppercase tracking-wider">Share Information</h3>
            <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
              Share Price <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-sm font-semibold uppercase tracking-wider">Follow us on</h3>
        </div>
      </div>
    </footer>
  )
}

