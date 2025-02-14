import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-5">
      <div className="max-w-2xl text-center animate-fadeIn">
        <div className="w-64 h-24 mx-auto mb-8 relative">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4v9eFudy4kYrWYrCaOeSso2dlRfhXv.png"
            alt="Retail Craft Asia Logo"
            className="w-full h-full object-contain animate-slideDown"
          />
        </div>
        <div className="mb-8 animate-slideUp">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Website Under Development</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
            Our new website is currently under construction. We're working hard to bring you an enhanced digital experience.
          </p>
        </div>
        <a
          href="mailto:contact@retailcraftasia.com"
          className="inline-flex items-center gap-2 bg-[#C5A572] text-white text-lg font-medium px-6 py-3 rounded-md transition duration-300 hover:bg-[#b39461] animate-fadeIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Contact Us
        </a>
        <div className="flex justify-center mt-8">
          <div className="w-10 h-10 border-4 border-[#C5A572] rounded-full relative animate-spin">
            <div className="absolute bg-[#C5A572] w-1 h-5 top-[-10px] left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute bg-[#C5A572] w-5 h-1 left-[-10px] top-1/2 transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
