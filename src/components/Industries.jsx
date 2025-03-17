import React from 'react';
 
import FMCGIcon from '../assets/Industry/fmcg.svg';
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
    <div className='bg-gradient-to-b from-yellow-50 to-white shadow-xl rounded-2xl p-8 text-center border transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center hover:bg-yellow-20 hover:shadow-yellow-700
          > '>
      <div className='bg-gradient-to-r from-blue-200 to-blue-300 p-4 rounded-full w-28 h-28 flex items-center justify-center shadow-md'>
        <img src={icon} alt={title} className='w-16 h-16' />
      </div>
      <h3 className='text-3xl font-extrabold mt-4 text-yellow-600 tracking-wide'>{title}</h3>
      <p className='text-black text-lg mt-3 leading-relaxed max-w-xs'>{description}</p>
    </div>
  );
};

const IndustriesGrid = () => {
  return (
    <div className='py-16 text-center px-6 bg-gray-100'>
      <h2 className='text-5xl font-semibold  text-yellow-600 mb-12 uppercase tracking-wide drop-shadow-lg'>Industries and Sectors</h2>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto'>
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </div>
  );
};

export default IndustriesGrid;
