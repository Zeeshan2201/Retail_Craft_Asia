import React from 'react';
import FMCGIcon1 from '../assets/Industry/fmcg1.svg'; // Replace with actual paths to your SVGs
import FMCGIcon from '../assets/Industry/fmcg.svg'; // Replace with actual paths to your SVGs
import RetailIcon from '../assets/Industry/retail.svg';
import RetailIcon1 from '../assets/Industry/retail1.svg';
import HealthBeautyIcon from '../assets/Industry/health.svg';
import HealthBeautyIcon1 from '../assets/Industry/health1.svg';
import ConsumerDurablesIcon from '../assets/Industry/Electronic.svg';
import ConsumerDurablesIcon1 from '../assets/Industry/Electronic1.svg';
import BankingIcon from '../assets/Industry/account_balance.svg';
import BankingIcon1 from '../assets/Industry/account_balance1.svg';
// import BankingIcon from '../assets/Industry/account_balance.svg';
import PharmaceuticalsIcon1 from '../assets/Industry/health_pharmacy1.svg';
import PharmaceuticalsIcon from '../assets/Industry/health_pharmacy.svg';

const FlipCard = () => {
  return (
    <div className='bg-white mb-10'>
    {/* <div className='bg-gradient-to-r from-purple-900 via-purple-600 to-purple-800'> */}
      <h2 className="text-center font-bold md:text-6xl text-4xl mt-15 py-10 ">
        Industries and Sectors
      </h2>
      <div className="flex flex-wrap md:gap-x-[8vw] gap-y-[2vh] justify-evenly md:px-32 ">
        {/* FMCG Card */}
        <div className="md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] md:m-4 md:mx-auto  perspective-[1000px] cursor-pointer group">
          <div className="relative md:w-[20vw] md:h-[40vh] h-[25vh] w-[88vw]  transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
            {/* Back Face */}
            <div className="absolute w-full h-full  backface-hidden flex flex-col items-center justify-center rounded-3xl  bg-[#d4af37] border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10 ">
              <img src={FMCGIcon} alt="FMCG" className="w-24  text-black  h-24 mb-4" />
              <p className="text-lg text-center px-2">
                FMCG (Fast-Moving Consumer Goods) refers to products that are sold quickly and at relatively low cost.
              </p>
            </div>
            {/* Front Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-purple-900 text-white">
              <img src={FMCGIcon1} alt="FMCG" className="w-24 text-white h-24 mb-4" />
              <p className="text-2xl font-semibold">FMCG</p>
            </div>
          </div>
        </div>

        {/* Retail Card */}
        <div className="md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] md:m-4 md:mx-auto perspective-[1000px] cursor-pointer group">
          <div className="relative md:w-[20vw] md:h-[40vh] h-[25vh] w-[88vw] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
            {/* Back Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-[#d4af37] border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
              <img src={RetailIcon} alt="Retail" className="w-24 h-24 mb-4" />
              <p className="text-lg text-center px-2">
                Retail involves selling goods and services directly to consumers through various channels.
              </p>
            </div>
            {/* Front Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-purple-900 text-white">
              <img src={RetailIcon1} alt="Retail" className="w-24 h-24 mb-4" />
              <p className="text-2xl font-semibold">Retail</p>
            </div>
          </div>
        </div>

        {/* Health and Beauty Card */}
        <div className="md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] md:m-4 md:mx-auto perspective-[1000px] cursor-pointer group">
          <div className="relative md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
            {/* Back Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-[#d4af37] border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
              <img src={HealthBeautyIcon} alt="Health and Beauty" className="w-24 h-24 mb-4" />
              <p className="text-lg text-center px-2">
                This sector includes products and services related to personal care, skincare, cosmetics, and wellness.
              </p>
            </div>
            {/* Front Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-purple-900 text-white">
              <img src={HealthBeautyIcon1} alt="Health and Beauty" className="w-24 h-24 mb-4" />
              <p className="text-2xl font-semibold">Health and Beauty</p>
            </div>
          </div>
        </div>

        {/* Consumer Durables and Electronics Card */}
        <div className="md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] md:m-4 md:mx-auto perspective-[1000px] cursor-pointer group">
          <div className="relative md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
            {/* Back Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-[#d4af37] border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
              <img src={ConsumerDurablesIcon} alt="Consumer Durables" className="w-24 h-24 mb-4" />
              <p className="text-lg text-center px-2">
                This category includes long-lasting goods such as home appliances, gadgets, smartphones, and furniture.
              </p>
            </div>
            {/* Front Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-purple-900 text-white">
              <img src={ConsumerDurablesIcon1} alt="Consumer Durables" className="w-24 h-24 mb-4" />
              <p className="text-2xl text-center font-semibold px-5">Consumer Durables and Electronics</p>
            </div>  
          </div>
        </div>

        {/* Banking and Financial Services Card */}
        <div className="md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] md:m-4 md:mx-auto perspective-[1000px] cursor-pointer group">
          <div className="relative md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
            {/* Back Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-[#d4af37] border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
              <img src={BankingIcon} alt="Banking" className="w-24 h-24" />
              <p className="text-lg text-center px-2">
                This sector covers financial institutions providing banking, investment, insurance, and wealth management services.
              </p>
            </div>
            {/* Front Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-purple-900 text-white">
              <img src={BankingIcon1} alt="Banking" className="w-24 h-24 mb-4" />
              <p className="text-2xl text-center font-semibold px-5">Banking and Financial Services</p>
            </div>
          </div>
        </div>

        {/* Health and Pharmaceuticals Card */}
        <div className="md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] md:m-4 md:mx-auto perspective-[1000px] cursor-pointer group">
          <div className="relative md:h-[40vh] md:w-[20vw] h-[25vh] w-[88vw] transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
            {/* Back Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-[#d4af37] border border-gray-200 [transform:rotateY(180deg)] group-hover:z-10">
              <img src={PharmaceuticalsIcon} alt="Pharmaceuticals" className="w-24 h-24" />
              <p className="text-lg text-center px-2">
                This industry comprises prescription and over-the-counter medicines, medical devices, and healthcare services.
              </p>
            </div>
            {/* Front Face */}
            <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl bg-purple-900 text-white">
              <img src={PharmaceuticalsIcon1} alt="Pharmaceuticals" className="w-24 h-24 mb-4" />
              <p className="text-2xl  font-semibold text-center ">Health and Pharmaceuticals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;