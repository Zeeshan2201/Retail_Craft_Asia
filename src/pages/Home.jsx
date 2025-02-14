import React from 'react';
import ProductShowcase from '../components/ProductShowCase';
import WhyChooseUs from '../components/WhyChooseUs';
import ManagementTeam from '../components/ManagementTeam';
import HeroSection from '../components/HeroSection';


const Home = () => {
  return (
    <div >
      <HeroSection />
      <ProductShowcase></ProductShowcase>
      <WhyChooseUs></WhyChooseUs>
      <ManagementTeam></ManagementTeam>
    </div>
      
  );
}

export default Home;
