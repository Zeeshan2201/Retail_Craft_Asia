import React from 'react';
<<<<<<< HEAD
import FMCGIcon from '../assets/Industry/fmcg.svg';
=======
// import FMCGIcon from '../assets/Industry/fmcg.svg'
// Replace with actual paths to your SVGs
import FMCGIcon from '../assets/Industry/fmcg.svg'; // Replace with actual paths to your SVG
>>>>>>> 6a061beb081bde549e871e7d345e220ee09aa3ff
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
    <div className='bg-gradient-to-b from-[#FDFBF5] to-white shadow-lg rounded-2xl p-8 w-85 text-center border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
      <div className='bg-[#B89C65] p-5 rounded-full w-28 h-28 mx-auto flex items-center justify-center'>
        <img src={icon} alt={title} className='w-16 h-16' />
      </div>
      <h3 className='text-3xl font-bold mt-4 text-black'>{title}</h3>
      <p className='text-lg text-gray-700 mt-3 leading-relaxed'>{description}</p>
    </div>
  );
};

const IndustriesGrid = () => {
  return (
    <div className='py-12 text-center'>
      <h2 className='text-5xl font-bold text-[#B89C65] mb-10'>Industries and Sectors</h2>
      <div className='grid md:grid-cols-3 gap-10 px-6 justify-center'>
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </div>
  );
};

export default IndustriesGrid;
