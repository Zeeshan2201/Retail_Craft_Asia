import React from 'react';
 
// import FMCGIcon from '../assets/Industry/fmcg.svg';

// Replace with actual paths to your SVGs
import FMCGIcon from '../assets/Industry/fmcg.svg'; // Replace with actual paths to your SVGs

import RetailIcon from '../assets/Industry/retail.svg';
import HealthBeautyIcon from '../assets/Industry/health.svg';
import ConsumerDurablesIcon from '../assets/Industry/Electronic.svg';
import BankingIcon from '../assets/Industry/account_balance.svg';
import PharmaceuticalsIcon from '../assets/Industry/health_pharmacy.svg';

const industries = [
  { icon: FMCGIcon, title: 'FMCG', description: 'Fast-Moving Consumer Goods are products that sell quickly at a low cost. These include everyday essentials such as packaged food, beverages, toiletries, and over-the-counter drugs, ensuring continuous consumer demand.' },
  { icon: RetailIcon, title: 'Retail', description: 'Retail involves selling goods and services directly to consumers. It includes supermarkets, department stores, online shopping platforms, and local shops, catering to diverse consumer needs and preferences.' },
  { icon: HealthBeautyIcon, title: 'Health & Beauty', description: 'Personal care, skincare, cosmetics, and wellness products. The industry focuses on enhancing well-being, offering items such as organic skincare, premium fragrances, and dietary supplements for a healthier lifestyle.' },
  { icon: ConsumerDurablesIcon, title: 'Consumer Durables', description: 'Long-lasting goods like appliances, gadgets, and furniture. These products are designed for extended use, with advancements in smart technology and sustainable materials driving industry growth.' },
  { icon: BankingIcon, title: 'Banking & Finance', description: 'Financial services, including banking, investment, and insurance. The sector facilitates economic stability through digital banking, wealth management, credit solutions, and fintech innovations.' },
  { icon: PharmaceuticalsIcon, title: 'Pharmaceuticals', description: 'Prescription and OTC medicines, medical devices, and healthcare services. The industry plays a crucial role in global health by developing innovative treatments, vaccines, and cutting-edge diagnostic solutions.' }
];

const IndustryCard = ({ icon, title, description }) => {
  return (
    <div className='bg-gradient-to-b from-blue-50 to-white shadow-xl rounded-2xl p-8 w-85 text-center border transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
      <div className='bg-blue-100 p-4 rounded-full w-28 h-28 mx-auto flex items-center justify-center'>
        <img src={icon} alt={title} className='w-16 h-16' />
      </div>
      <h3 className='text-2xl font-bold mt-4 text-[#C6A969]'>{title}</h3>
      <p className='text-black text-lg mt-3 leading-relaxed'>{description}</p>
    </div>
  );
};

const IndustriesGrid = () => {
  return (
    <div className='py-10 text-center'>
      <h2 className='text-6xl font-bold text-[#C6A969] mb-8'>Industries and Sectors</h2>
      <div className='grid md:grid-cols-3 gap-8 px-6 justify-center'>
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </div>
  );
};

export default IndustriesGrid;