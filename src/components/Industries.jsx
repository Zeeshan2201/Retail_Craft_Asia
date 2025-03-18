import React from 'react';
 
import FMCGIcon from '../assets/Industry/fmcg.svg';
import RetailIcon from '../assets/Industry/retail.svg';
import HealthBeautyIcon from '../assets/Industry/health.svg';
import ConsumerDurablesIcon from '../assets/Industry/Electronic.svg';
import BankingIcon from '../assets/Industry/account_balance.svg';
import PharmaceuticalsIcon from '../assets/Industry/health_pharmacy.svg';

const industries = [
  { icon: FMCGIcon, title: 'FMCG', description: 'Fast-Moving Consumer Goods include packaged food, beverages, toiletries, and over-the-counter drugs, ensuring constant demand.' },
  { icon: RetailIcon, title: 'Retail', description: 'Retail involves selling goods and services directly to consumers through supermarkets, department stores, and online platforms.' },
  { icon: HealthBeautyIcon, title: 'Health & Beauty', description: 'Personal care, skincare, cosmetics, and wellness products, focusing on enhancing well-being and promoting a healthier lifestyle.' },
  { icon: ConsumerDurablesIcon, title: 'Consumer Durables', description: 'Long-lasting goods like appliances, gadgets, and furniture designed for extended use and smart technology integration.' },
  { icon: BankingIcon, title: 'Hospitality Sector', description: 'Hotels, restaurants, travel, and tourism services that focus on customer experience and leisure industry innovations.' },
  { icon: PharmaceuticalsIcon, title: 'Pharmaceuticals', description: 'Prescription and OTC medicines, medical devices, and healthcare solutions that drive advancements in global health.' }
];

const IndustryCard = ({ icon, title, description }) => {
  return (
    <div className='hover:bg-gradient-to-r from-[#f1ecd0] via-white to-white bg-white shadow-xl rounded-2xl p-8 text-center border transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center hover:bg-yellow-20 hover:shadow-yellow-300'>
      <div className='bg-gradient-to-r from-yellow-50 via-white to-white p-4 rounded-full w-28 h-28 flex items-center justify-center shadow-md'>
        <img src={icon} alt={title} className='w-16 h-16' />
      </div>
      <h3 className='text-3xl font-semibold mt-4 text-yellow-600 tracking-wide'>{title}</h3>
      <p className='text-black text-lg mt-3 leading-relaxed max-w-xs'>{description}</p>
    </div>
  );
};

const IndustriesGrid = () => {
  return (
    <div className='py-16 text-center px-6 bg-gray-50'>
      <h2 className="text-6xl font-semibold mb-16 text-yellow-600 uppercase tracking-wide drop-shadow-lg">Industries and Sectors</h2>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto'>
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </div>
  );
};

export default IndustriesGrid;
