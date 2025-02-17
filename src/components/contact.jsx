import { motion } from 'framer-motion';
import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Card = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={`bg-white p-12 rounded-2xl shadow-lg transition-all duration-300 ease-in-out 
        hover:scale-105 hover:shadow-2xl w-80 h-52 cursor-pointer transform ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="text-center text-lg font-semibold">{children}</div>;
};

const Button = ({ type, className, children, onClick }) => {
  return (
    <button type={type} className={`p-2 rounded-lg transition-all duration-300 ease-in-out ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const ContactCards = () => {
  return (
    <div className="relative flex flex-col items-center p-6 mt-10">
      <div className="fixed top-0 h-[100vh] bg-red-500 opacity-5 w-[100vw]"></div>
      
      {/* Support Section */}
      <div className="text-center mb-60 mt-10">
        <h2 className="text-6xl">How can RetailCraftAsia customer support help you today?</h2>
        <p className="text-gray-500 mt-5 text-2xl">Our friendly customer support team is ready & excited to help with any issue!</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <span className="text-sm text-gray-500">Responds in 4-8 hours</span>
        </div>
      </div>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {['Get Appointment', 'Email-Support', 'FAQ', 'Schedule-Call'].map((title, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card onClick={title === 'Email-Support' ? () => window.location.href = 'mailto:chaubeyvinit02@gmail.com' : null}>
              <CardContent>
                {title}
                <DotLottieReact src={
                  title === 'Get Appointment' ? 'https://lottie.host/05bf2555-c89c-4afa-8974-b5a3d97d526c/daBQ9OoO2E.lottie' :
                  title === 'Email-Support' ? 'https://lottie.host/11c0114e-b2b4-4794-a2d4-6e688785eb65/KYjy04r72v.lottie' :
                  title === 'FAQ' ? 'https://lottie.host/e3eb1d70-ffaf-4934-b4da-cacf984d30fc/DfHEcHfJhI.lottie' :
                  'https://lottie.host/3b541f38-f0ff-494d-be28-9881822ccb40/Kx7Urcc9hq.lottie'
                } loop autoplay />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
};

export default ContactCards;
