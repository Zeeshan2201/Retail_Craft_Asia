import { useState } from "react";
import { FaGem, FaStopwatch, FaHandPointer, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
  { icon: <FaGem />, title: "Premium Quality", text: "We ensure the best quality in our services.", color: "gold" },
  { icon: <FaStopwatch />, title: "Timely Service", text: "Punctuality is our priority.", color: "#b8860b" },
  { icon: <FaHandPointer />, title: "Easy Process", text: "Seamless and user-friendly experience.", color: "#daa520" },
  { icon: <FaHeart />, title: "Customer Satisfaction", text: "We prioritize your happiness and trust.", color: "#ff6347" },
];

function WhyChooseUs() {
  const [selected, setSelected] = useState({ title: "WHY CHOOSE US", text: "We provide top-tier services with a commitment to excellence and efficiency.", color: "gold" });

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px', background: '#f8f9fa', position: 'relative' }}
    className='pl-[60px]'>
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        style={{ width: '300px', height: '300px', background: `radial-gradient(circle, ${selected.color},rgb(239, 192, 75))`, borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', position: 'relative', zIndex: 2, transition: 'all 0.2s ease-in-out' }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{selected.title}</h2>
        <p style={{ fontSize: '14px', marginTop: '10px', padding: '0 20px' }}>{selected.text}</p>
      </motion.div>
      <div style={{ position: 'absolute', width: '400px', height: '400px', background: '#e0e0e0', borderRadius: '50%', zIndex: 1, left: '120px' }}></div>
      <div style={{ marginLeft: '120px', position: 'relative' }}>
        {data.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            whileHover={{ scale: 1.1, boxShadow: '0px 6px 10px rgba(0,0,0,0.2)' }}
            onClick={() => setSelected(item)}
            style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', background: 'white', padding: '15px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', maxWidth: '350px', transition: 'all 0.2s ease-in-out', position: 'relative', cursor: 'pointer' }}
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
      </div>
    </div>
  );
}

export default WhyChooseUs;
