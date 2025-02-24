// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaBullhorn, FaChartLine, FaStar, FaRocket } from "react-icons/fa"; // Importing icons

// // ServiceCard Component
// const ServiceCard = ({ title, description, image, additionalContent, icon }) => {
//   return (
//     <motion.div
//       initial={{ rotateY: 90, opacity: 0 }}
//       animate={{ rotateY: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="w-80 h-80 bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
//     >
//       <motion.img
//         src={image}
//         alt={title}
//         className="w-full h-40 object-cover rounded-t-2xl transition-transform duration-300 transform hover:scale-110"
//       />
//       <div className="flex items-center mt-2">
//         <span className="text-3xl text-yellow-600">{icon}</span>
//         <h2 className="text-2xl font-bold text-yellow-600 ml-2">{title}</h2>
//       </div>
//       <p className="text-gray-600 text-center">{description}</p>
//       <p className="text-gray-500 text-center mt-2">{additionalContent}</p>
//       {/* Decorative Shapes */}
//       <motion.div
//         className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-300 rounded-full"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         exit={{ scale: 0 }}
//         transition={{ duration: 0.5 }}
//       />
//       <motion.div
//         className="absolute -bottom-10 -left-10 w-16 h-16 bg-blue-300 rounded-full"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         exit={{ scale: 0 }}
//         transition={{ duration: 0.5 }}
//       />
//     </motion.div>
//   );
// };

// // Services Data
// const services = [
//   { title: "Digital Marketing", description: "Boost your online presence with strategic marketing.", additionalContent: "Get personalized marketing strategies tailored to your needs.", image: "/Services/planet1.png", icon: <FaBullhorn /> },
//   { title: "Data & Technology", description: "Leverage data-driven solutions for business growth.", additionalContent: "Implement cutting-edge technologies to streamline operations.", image: "/Services/planet2.png", icon: <FaChartLine /> },
//   { title: "Brand Activation", description: "Engage customers with impactful brand experiences.", additionalContent: "Create memorable events that resonate with your audience.", image: "/Services/SpaceCity1.jpg", icon: <FaStar /> },
//   { title: "Market Expansion Services", description: "Expand into new markets with confidence and strategy.", additionalContent: "Utilize market research to identify the best opportunities.", image: "/Services/SpaceCity.jpg", icon: <FaRocket /> },
// ];

// // ServiceCarousel Component
// const ServiceCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="w-full max-w-8xl mx-auto py-10 bg-gradient-to-r from-yellow-600 to-white-500">
//       <div className="text-6xl font-bold text-center mb-8 text-white">Our Services</div>
//     <div className="w-full py-10 bg-gradient-to-r from-yellow-600 to-white">
//       <div className="text-6xl text-center mb-8 text-white">Our Services</div>
//       <Slider {...settings} className="flex justify-center items-center">
//         {services.map((service, index) => (
//           <div key={index} className="flex justify-center items-center ml-[38%]">
//             <ServiceCard
//               title={service.title}
//               description={service.description}
//               additionalContent={service.additionalContent}
//               image={service.image}
//               icon={service.icon}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ServiceCarousel;
