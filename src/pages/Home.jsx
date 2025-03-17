import React from 'react';
// import ProductShowcase from '../components/ProductShowCase';
// import WhyChooseUs from '../components/WhyChooseUs';
import WhyChooseUsNew from '../components/WhyChooseUsNew';
import HomeHero from "../components/HomeHero"
import Industries from '../components/Industries'
import Home_Service from "../components/Home_Service"
import Home_2 from "../components/Home_2"
// import ServicesSlider from '../components/Ser';
import MangTeam from "../components/MangTeam"


const Home = () => {
  return (
    <div className='bg-gray-50'>
      <HomeHero />
      <Home_2/>
      <Home_Service/>
      
      <Industries />
     
     
     {/* <WhyChooseUs/> */}
     <WhyChooseUsNew/>
     <div className="">
        {/* services */}
     
     </div>
      {/* <ManagementTeam /> */}
      <MangTeam />
      
      {/* <ProductShowcase></ProductShowcase> */}
      {/* <ServicesSlider></ServicesSlider> */}
    </div>
      
  );
}

export default Home;
