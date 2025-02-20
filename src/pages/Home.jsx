import React from 'react';
import ProductShowcase from '../components/ProductShowCase';
import WhyChooseUs from '../components/WhyChooseUs';
import ManagementTeam from '../components/ManagementTeam';
import HeroSection from '../components/HeroSection';
import ServicesSlider from '../components/Ser';
import FlipCardApp from '../components/Industries';


const Home = () => {
  return (
    <div >
      <HeroSection />
      {/* <ProductShowcase></ProductShowcase> */}
      <ServicesSlider></ServicesSlider>
      <FlipCardApp></FlipCardApp>


      <WhyChooseUs></WhyChooseUs>
      <ManagementTeam></ManagementTeam>
      
    </div>
      
  );
}

export default Home;
