import React from "react";
import Carousel from "./Carousel";

const ServiceHero = () => {
  return (
    <div className="flex pt-32 md:flex-row justify-center items-center flex-col-reverse  text-black pb-16  md:pl-6 md:mr-0  lg:px-24 bg-gray-50">
      <div className="md:w-[50%]  w-[100%] p-4 items-center">
        <div className="mr-6">
          {/* <h1 className='text-4xl md:text-5xl font-bold leading-tight'>Driving Growth & Innovation for Your Business</h1> */}
          <h1 className="text-transparent bg-clip-text  text-yellow-600 font-bold text-4xl md:text-5xl leading-tight">
           <span className="text-black "> Driving, Growth & </span> <span className="text-black inline-block mt-[6px] mb-1 ">Innovation <span 
           className="text-yellow-600"
  // className="text-transparent bg-clip-text bg-cover bg-center"
  // style={{ backgroundImage: "url('/Team/Member_3.png')" }}
>
  for Your
</span>
</span><span className="text-yellow-600 ">Business</span>
           </h1>
          <div className="text-lg text-black mt-4 leading-relaxed">
            We provide comprehensive solutions tailored to boost your brand’s
            visibility, optimize operations, and maximize sales. From expert
            field sales and merchandising to cutting-edge digital marketing, we
            help businesses grow with data-driven strategies and seamless
            execution.
          </div>
          <ul className="mt-6 space-y-2 text-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <b>End-to-end business solutions tailored to your needs</b>
              </li>
              <li>
                <b>
                  Experienced professionals with proven success in multiple
                  industries
                </b>
              </li>
              <li>
                <b>Data-driven strategies for measurable growth</b>
              </li>
              <li>
                <b>Cutting-edge technology for seamless operations</b>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="md:ml-20 p-4 md:w-[50%] w-[100%]">
        {/* <div><Carousel/></div> */}
        <div>
          <img className="rounded-3xl shadow-lg shadow-gray-300 hover:shadow-yellow-300" src="/servicehero.jpeg" alt="servicehero" />
        </div>
      </div>
    </div>
    //  <div className='flex mt-16 mb-8'>
    //    <div className='w-[50%] text-white'>
    //     <div className='pl-32'>
    //         <h1 className='font-bold text-6xl pb-8'>Full-Service <br/> Branding Agency</h1>
    //         <div className='text-lg pb-4 '>Work with a top-rated branding agency to boost brand awareness, create consistency across channels and reach your audience through results-driven strategies and solutions.</div>
    //         <p className='text-lg pb-4'>1. Boost Your Brand Awareness</p>
    //         <p className='text-lg pb-4'>2. Build Trust & Credibility</p>
    //         <p className='text-lg pb-4'>3. Resonate With Your Audience</p>
    //     </div>
    // </div>
    //    <div className='w-[50%]'>
    //         <div><Carousel/></div>
    //    </div>
    //  </div>
  );
};

export default ServiceHero;
