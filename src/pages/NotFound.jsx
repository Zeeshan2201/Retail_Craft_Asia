import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';

const NotFound = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - Retail Craft Asia",
    "description": "The page you are looking for could not be found. Return to Retail Craft Asia homepage.",
    "url": "https://retailcraftasia.com/404"
  };

  return (
    <>
      <SEOHelmet
        title="404 - Page Not Found | Retail Craft Asia"
        description="The page you are looking for could not be found. Return to Retail Craft Asia homepage for retail consultancy services."
        url="https://retailcraftasia.com"
        structuredData={structuredData}
      />
      
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Return to Homepage
            </Link>
            
            <Link
              to="/services"
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              View Our Services
            </Link>
            
            <Link
              to="/contact"
              className="block w-full text-blue-600 hover:text-blue-700 font-medium py-2 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
