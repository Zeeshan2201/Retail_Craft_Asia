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
    className='relative  flex flex-col md:flex-row items-center justify-center p-16 md:pl-40 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-800 '>
      {/* <h2 className="text-4xl">Why Choose us</h2> */}
      <div style={{ position: "relative" }}>
  {/* <motion.div 
    whileHover={{ scale: 1.1, rotate: 5 }}
    className=" overflow-hidden"
    style={{'@media (max-width: 768px)': {
    width: '200px',
    height: '200px',
  }, width: '320px', height: '320px', background: `radial-gradient(circle, ${selected.color}, rgb(239, 192, 75))`, borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', position: 'relative', zIndex: 2, transition: 'all 0.2s ease-in-out' }}
    // style={{ width: '300px', height: '300px', background: `radial-gradient(circle, ${selected.color}, rgb(239, 192, 75))`, borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', position: 'relative', zIndex: 2, transition: 'all 0.2s ease-in-out' }}
  > */}
  <motion.div 
  whileHover={{ scale: 1.1, rotate: 5 }}
  className="overflow-hidden w-[200px] h-[200px] md:w-[320px] md:h-[320px] flex flex-col justify-center items-center text-white text-center relative z-10 transition-all ease-in-out duration-200 rounded-full"
  style={{ background: `radial-gradient(circle, ${selected?.color || '#f00'}, rgb(239, 192, 75))` }}
>

<h2 className="md:text-2xl text-lg font-medium md:font-bold">{selected.title}</h2>
<p className="md:text-base text-xs mt-2 px-5">{selected.text}</p>

  </motion.div>

  {/* Background Element - Outside motion.div */}
  {/* <div 

    className="-z-10 bg-gray-300 " 
    style={{'@media (max-width: 768px)': {
    width: '250px',
    height: '250px',
  }, position: 'absolute', width: '400px', height: '400px',  borderRadius: '50%', zIndex: 1, right:'10%', top: '50%', transform: 'translateY(-50%)' }}>
  </div> */}
  <div 
  className=" bg-gray-300 absolute rounded-full right-[10%] top-1/2 transform -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
</div>
</div>


      {/* <div >
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className=""
        style={{ width: '300px', height: '300px', background: `radial-gradient(circle, ${selected.color},rgb(239, 192, 75))`, borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', position: 'relative', zIndex: 2, transition: 'all 0.2s ease-in-out' }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{selected.title}</h2>
        <p style={{ fontSize: '14px', marginTop: '10px', padding: '0 20px' }}>{selected.text}</p>
      <div className="-z-10" style={{ position: 'absolute', width: '400px', height: '400px', background: '#e0e0e0', borderRadius: '50%', zIndex: 1, left: '120px' }}></div>
      </motion.div>
      
      </div> */}
      {/* <div className="" style={{ marginLeft: '120px', position: 'relative' }}>
        {data.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            whileHover={{ scale: 1.1, boxShadow: '0px 6px 10px rgba(0,0,0,0.2)' }}
            onClick={() => setSelected(item)}
            style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', background: 'white', padding: '15px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',  transition: 'all 0.2s ease-in-out', position: 'relative', cursor: 'pointer' }}
          >
            <motion.div 
              whileHover={{ rotate: 30 }}
              style={{ fontSize: '20px', padding: '10px', background: item.color, borderRadius: '50%', color: 'white', marginRight: '10px', transition: 'transform 0.2s ease-in-out' }}
            >
              {item.icon}
            </motion.div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#555' }}>{item.text}</p>
            </div>
            <div style={{ position: 'absolute', left: '-40px', width: '40px', height: '2px', background: item.color, top: '50%' }}></div>
          </motion.div>
        ))}
      </div> */}
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
      <div>
        <h3 className="text-base font-bold">{item.title}</h3>
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
