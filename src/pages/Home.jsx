import React from 'react';
import ProductShowcase from '../components/ProductShowCase';
import WhyChooseUs from '../components/WhyChooseUs';
import ManagementTeam from '../components/ManagementTeam';
import HeroSection from '../components/HeroSection';
import ServicesSlider from '../components/Ser';


const Home = () => {
  return (
    <div >
      <HeroSection />
      {/* <ProductShowcase></ProductShowcase> */}
      <ServicesSlider></ServicesSlider>


      <WhyChooseUs></WhyChooseUs>
      <ManagementTeam></ManagementTeam>
      
    </div>
      
  );
}

export default Home;
