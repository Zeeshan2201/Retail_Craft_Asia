 import React from 'react';
import Carousel from './Carousel';
 
 const ServiceHero = () => {
   return (
     <div className='flex mt-16 mb-8'>
       <div className='w-[50%] text-white'>
        <div className='pl-32'>
            <h1 className='font-bold text-6xl pb-8'>Full-Service <br/> Branding Agency</h1>
            <div className='text-lg pb-4 '>Work with a top-rated branding agency to boost brand awareness, create consistency across channels and reach your audience through results-driven strategies and solutions.</div>
            <p className='text-lg pb-4'>1. Boost Your Brand Awareness</p>
            <p className='text-lg pb-4'>2. Build Trust & Credibility</p>
            <p className='text-lg pb-4'>3. Resonate With Your Audience</p>
        </div>
    </div>
       <div className='w-[50%]'>
            <div><Carousel/></div>
       </div>
     </div>
   );
 }
 
 export default ServiceHero;
 