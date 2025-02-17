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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;