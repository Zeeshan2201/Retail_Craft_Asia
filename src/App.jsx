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
import ServicesPage from './components/ServicesPages';
import SubServiceBrandActivation from './components/SubServiceBrandActivation';
import SubServiceDataAndTechnology from './components/SubServiceDataAndTechnology';
import SubServiceMarketExpansion from './components/SubServiceMarketExpansion';
import SubServiceDigitalMarketing from './components/SubServiceDigitalMarketing';
// import ComingSoon from './pages/CommingSoon';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<ComingSoon />} /> Coming Soon Page */}
          <Route path="/" element={<Home />} /> {/* Full Website Preview */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesN" element={<ServicesPage />} />
          <Route path="/servicesNX" element={<SubServiceBrandActivation />} />
          <Route path="/servicesNX1" element={<SubServiceDataAndTechnology />} />
          <Route path="/servicesNX2" element={<SubServiceMarketExpansion />} />
          <Route path="/servicesNX3" element={<SubServiceDigitalMarketing/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;