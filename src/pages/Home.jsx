import React from 'react';
// import ProductShowcase from '../components/ProductShowCase';
import WhyChooseUs from '../components/WhyChooseUs';
import ManagementTeam from '../components/ManagementTeam';
import HomeHero from "../components/HomeHero"
import Industries from '../components/Industries'
// import ServicesSlider from '../components/Ser';

import HorizontalScroll from "../components/HorizontalScroll"

const Home = () => {
  return (
    <div className='bg-gray-50'>
      <HomeHero />
      
      <Industries />
     
     
     <WhyChooseUs/>
     <div className="">
        {/* services */}
     <HorizontalScroll/> 
     </div>
      <ManagementTeam />
      
      {/* <ProductShowcase></ProductShowcase> */}
      {/* <ServicesSlider></ServicesSlider> */}
    </div>
      
  );
}

export default Home;
