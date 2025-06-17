import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
// import './index.css'
import Footer from './components/Footer';
// import FaQ from './pages/FaQ';
import Services from './pages/Services';
import Career from './components/Career';
// import ServicesPage from './components/ServicesPages';
// import SubServiceDataAndTechnology from './components/SubServiceDataAndTechnology';

// Lazy load service pages for better performance
const SalesAndMerchandising = lazy(() => import('./pages/Services/SalesAndMerchandising'));
const BrandActivation = lazy(() => import('./pages/Services/BrandActivation'));
const MarketExpansion = lazy(() => import('./pages/Services/MarketExpansion'));
const DataAndTechnology = lazy(() => import('./pages/Services/DataAndTechnology'));
const DigitalMarketing = lazy(() => import('./pages/Services/DigitalMarketing'));

import ScrollToTop from './components/ScrollToTop';
import MangTeam from './components/MangTeam';
import MemberOne from './components/MemberOne';
import NotFound from './pages/NotFound';
import Breadcrumb from './components/Breadcrumb';
// import ComingSoon from './pages/CommingSoon';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Breadcrumb />
      <main>
        <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>}>
          <Routes>
              {/* <Route path="/" element={<ComingSoon />} /> Coming Soon Page */}
              <Route path="/" element={<Home />} /> {/* Full Website Preview */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/faq" element={<FaQ />} /> */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/sales-merchandising" element={<SalesAndMerchandising/>} />
              <Route path="/services/SalesAndMerchandising" element={<SalesAndMerchandising/>} />
              <Route path="/services/brand-activation" element={<BrandActivation/>} />
              <Route path="/services/BrandActivation" element={<BrandActivation/>} />
              <Route path="/services/market-expansion" element={<MarketExpansion/>} />
              <Route path="/services/MarketExpansion" element={<MarketExpansion/>} />
              <Route path="/services/data-technology" element={<DataAndTechnology/>} />
              <Route path="/services/DataAndTechnology" element={<DataAndTechnology/>} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing/>} />
              <Route path="/services/DigitalMarketing" element={<DigitalMarketing/>} />
              <Route path="/team" element={<MangTeam/>}/>
              {/* <Route path="/MangTeam" element={<MangTeam/>}/> */}
              <Route path="/team/member/:id" element={<MemberOne/>}/>
              <Route path="/MemberOne" element={<MemberOne/>}/>
              <Route path="/career" element={<Career/>}/>
              <Route path="/Career" element={<Career/>}/>
              
              {/* 404 Page */}              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
  );
}

export default App;