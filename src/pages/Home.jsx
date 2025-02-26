import React from 'react';
// import ProductShowcase from '../components/ProductShowCase';
import WhyChooseUs from '../components/WhyChooseUs';
import ManagementTeam from '../components/ManagementTeam';
import HeroSection from '../components/HeroSection';
import Industries from '../components/Industries'
// import ServicesSlider from '../components/Ser';

import HorizontalScroll from "../components/HorizontalScroll"

const Home = () => {
  return (
    <div >
      <HeroSection />
      {/* <ProductShowcase></ProductShowcase> */}
      {/* <ServicesSlider></ServicesSlider> */}
      <Industries />


      <WhyChooseUs></WhyChooseUs>
      <div className="h-[100vh">
     <HorizontalScroll/>
     </div>
      <ManagementTeam />
      
    </div>
      
  );
}

export default Home;
