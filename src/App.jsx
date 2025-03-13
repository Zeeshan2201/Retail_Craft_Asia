import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
// import './index.css'
import Footer from './components/Footer';
import FaQ from './pages/FaQ';
import Services from './pages/Services';
// import ServicesPage from './components/ServicesPages';
// import SubServiceDataAndTechnology from './components/SubServiceDataAndTechnology';
import SalesAndMerchandising from './pages/Services/SalesAndMerchandising';
import BrandActivation from './pages/Services/BrandActivation';
import MarketExpansion from './pages/Services/MarketExpansion';
import DataAndTechnology from './pages/Services/DataAndTechnology';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import ScrollToTop from './components/ScrollToTop';
import MangTeam from './components/MangTeam';
// import ComingSoon from './pages/CommingSoon';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<ComingSoon />} /> Coming Soon Page */}
          <Route path="/" element={<Home />} /> {/* Full Website Preview */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/SalesAndMerchandising" element={<SalesAndMerchandising/>} />
          <Route path="/services/BrandActivation" element={<BrandActivation/>} />
          <Route path="/services/MarketExpansion" element={<MarketExpansion/>} />
          <Route path="/services/DataAndTechnology" element={<DataAndTechnology/>} />
          <Route path="/services/DigitalMarketing" element={<DigitalMarketing/>} />
          <Route path="/MangTeam" element={<MangTeam/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;