import { useState } from "react";
import { FaGem, FaStopwatch, FaHandPointer, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
  { icon: <FaGem />, title: "Long Term Strategic Partnership ", text: "Building lasting partnerships for sustainable growth and innovation in retail across Asia.", color: "gold" },
  { icon: <FaStopwatch />, title: "Deep Industry Knowledge and Global Network ", text: "Leveraging deep industry expertise and a vast global network for strategic growth.", color: "#b8860b" },
  { icon: <FaHandPointer />, title: "Client Centric focus ", text: "Prioritizing client needs with tailored solutions for lasting success.", color: "#daa520" },
  { icon: <FaHeart />, title: "Tailored made solutions ", text: "Crafting tailor-made solutions to drive business excellence and growth.", color: "#ff6347" },
  { icon: <FaStopwatch />, title: "Data Driven Approach", text: "Empowering decisions with a data-driven approach for measurable success.", color: "#b8860b" },
  { icon: <FaHandPointer />, title: "Inbuilt Technology Platforms", text: "Enhancing business efficiency with inbuilt technology platforms.", color: "#daa520" },
];

function WhyChooseUs() {
  const [selected, setSelected] = useState({ title: "WHY CHOOSE US", text: "We provide top-tier services with a commitment to excellence and efficiency.", color: "gold" });

  return (
    <>
    <div 
    style={{
      background: "linear-gradient(to bottom, white 0%, #581c87 10%, #581c87 90%, white 100%)"
    }}
    className='relative  flex flex-col md:flex-row items-center justify-center p-16 md:pl-40 '>
    {/* className='relative  flex flex-col md:flex-row items-center justify-center p-16 md:pl-40 bg-gradient-to-b from-white  via-purple-900 via-[10%] to-purple-900'> */}
      {/* <h2 className="text-4xl">Why Choose us</h2> */}
      <div style={{ position: "relative" }}>
 
 {/* Yellow Baground circle */}
          <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          
          className="overflow-hidden  w-[200px] h-[200px] md:w-[320px] md:h-[320px] flex flex-col justify-center items-center text-white text-center relative z-10 transition-all ease-in-out duration-200 rounded-full"
          style={{ background: `radial-gradient(circle, ${selected?.color || '#f00'}, rgb(239, 192, 75))` }}
        >
        {/* <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      style={{
        boxShadow: "0 100px 100px rgba(255, 255, 255, 0.5)", // Approximate custom shadow
        transform: "translateX(8px)", // Equivalent to -translate-x-2
        padding: "16px",
        borderRadius: "50%", // To maintain rounded-full effect
        backgroundColor: "#f0f0f0",
        background: `radial-gradient(circle, ${selected?.color || "#f00"}, rgb(239, 192, 75))`,
      }}
      className="overflow-hidden w-[200px] h-[200px] md:w-[320px] md:h-[320px] flex flex-col justify-center items-center text-white text-center relative z-10 transition-all ease-in-out duration-200 rounded-full"
    > */}

        <h2 className="md:text-2xl text-lg font-medium md:font-bold">{selected.title}</h2>
        <p className="md:text-base text-xs mt-2 px-5">{selected.text}</p>

          </motion.div>

      {/* Background Element Gray circle - Outside motion.div */}
      <div 
      className=" bg-gray-300 absolute opacity-[0.2] rounded-full right-[10%] top-1/2 transform -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
    </div>
    </div>

      <div className="relative md:w-[45vw] w-[86vw] pr-4 mt-10 md:ml-[120px] sm:ml-4">
  {data.map((item, i) => (
    <motion.div 
      key={i}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: i * 0.1 }}
      whileHover={{ scale: 1.1, boxShadow: '0px 6px 10px rgba(0,0,0,0.2)' }}
      onClick={() => setSelected(item)}
      className="flex  items-center mb-5 bg-white p-4 rounded-lg shadow-md transition-all ease-in-out duration-200 relative cursor-pointer"
    >
      <motion.div 
        whileHover={{ rotate: 30 }}
        className="text-lg p-2 rounded-full text-white  transition-transform ease-in-out duration-200"
        style={{ background: item.color }}
      >
        {item.icon}
      </motion.div>
      <div className="ml-2">
        <h3 className=" text-base font-bold">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.text}</p>
      </div>
      <div 
        className="absolute left-[-40px] md:w-10 w-6 h-[2px] top-1/2"
        style={{ background: item.color }}
      ></div>
    </motion.div>
  ))}
</div>

    </div>
</>
  );
}

export default WhyChooseUs;
