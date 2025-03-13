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

const ContactCards = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', scheduleTime: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const url = 'https://script.google.com/macros/s/AKfycbycQUoonVYOeiLDTw50GLzQubZQDJyK-iQE_MXzR4OS60HAO9JGUKgNXDmUPO5CUjon/exec'; // Replace with your Web App URL

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       mode: "no-cors",
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Data successfully sent to Google Sheets');
  //       setModalOpen(false);
  //     } else {
  //       console.error('Failed to send data to Google Sheets');
  //     }
  //   } catch (error) {
  //     console.log('Error:', error);
  //     console.error('Error:', error);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("https://script.google.com/macros/s/AKfycbycQUoonVYOeiLDTw50GLzQubZQDJyK-iQE_MXzR4OS60HAO9JGUKgNXDmUPO5CUjon/exec", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       mode: "no-cors",
  //       body: JSON.stringify(formData),
  //       // body: JSON.stringify(formData),
  //     });
  // // console.log("formData"+formData)
  //     const result = await response.json(); // ✅ Parse JSON properly
 
  //     if (result.success) {
  //       console.log('Data successfully sent to Google Sheets');
  //       setModalOpen(false); // ✅ Ensure this is called correctly
  //     } else {
  //       console.log('Failed to send data:', result.message);
  //     }
  //   } catch (error) {
  //     console.log('Error:', error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbycQUoonVYOeiLDTw50GLzQubZQDJyK-iQE_MXzR4OS60HAO9JGUKgNXDmUPO5CUjon/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify(formData),
        });

        console.log("Data successfully sent to Google Sheets");
        setModalOpen(false); // Close modal after submitting
        setFormData({})
        alert("Data successfully sent to Google Sheets")
    } catch (error) {
        console.error("Error:", error);
    }
};

  
  return (
    <div className="relative px-4 sm:px-16 md:px-32 flex flex-col items-center p-6  bg-blue-100 ">
      <div className="text-center mb-10 mt-20 ">
        <h2 className="text-4xl uppercase font-bold text-black sm:text-5xl ">How can Retail Craft Asia customer support help you today?</h2>
        <p className="text-black mt-5 text-lg sm:text-2xl">Our friendly customer support team is ready & excited to help with any issue!</p>
      </div>
      
      <div className='mt-5 mb-5 text-black text-2xl sm:text-4xl text-center'>Looking for answers? Try one of these helpful resources:</div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {['Get Appointment', 'Email-Support', 'FAQ'].map((title, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card onClick={
  title === 'Email-Support' 
    ? () => window.location.href = 'mailto:career@retailcraftasia.com' 
    : title === 'Get Appointment' 
      ? () => setModalOpen(true) 
      : title === 'FAQ' 
        ? () => window.location.href = '/faq'  // Redirects to FAQ page
        : null
}
>
              <CardContent>
                {title}
                <DotLottieReact src={
                  title === 'Get Appointment' ? 'https://lottie.host/05bf2555-c89c-4afa-8974-b5a3d97d526c/daBQ9OoO2E.lottie' :
                  title === 'Email-Support' ? 'https://lottie.host/11c0114e-b2b4-4794-a2d4-6e688785eb65/KYjy04r72v.lottie' :
                  'https://lottie.host/e3eb1d70-ffaf-4934-b4da-cacf984d30fc/DfHEcHfJhI.lottie'
                } loop autoplay />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10 bg-white p-6 rounded-4xl shadow-lg rounded-xl">
        <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800">Contact Us</h3>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">Office-Address: 65,42 Tower Building, Room No 1107, Sukhumvit 42 Road,<br/> Phra Khanong Sub-district, Khlong Toei District, Bangkok, Thailand - 10110</p>
      </div>
      
      <div className="text-center mt-10 mb-10">
        <h3 className="text-4xl font-semibold">Need More Help?</h3>
        <p className="mt-4">Call us at <a href="tel:+6623658200" className="text-white font-bold hover:underline">+6623658200</a></p>
        <p className="mt-2">Support Hours: Mon-Fri, 9 AM - 6 PM</p>
        {/* <p>We usually respond within <strong>4-8 hours</strong>.</p> */}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg w-96"
          >
            <h2 className="text-2xl font-bold mb-4">Schedule a Call</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <label className="block text-sm font-semibold mb-2">Schedule Time</label>
<input 
  type="time" 
  name="scheduleTime" 
  value={formData.scheduleTime} 
  onChange={handleChange} 
  required 
  className="w-full p-2 border border-gray-300 rounded-lg"
/>

              <div className="flex mt-4 justify-end">
                <button type="button" className="bg-gray-300 text-black px-4 py-2 mr-2 hover:bg-gray-400" onClick={() => setModalOpen(false)}>Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">Submit</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ContactCards;