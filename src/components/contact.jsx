import { motion } from 'framer-motion';
import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Card = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={`bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-500 
        p-12 rounded-2xl shadow-lg transition-all duration-300 ease-in-out 
        hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-400 hover:to-orange-600
        hover:shadow-2xl w-80 h-52 cursor-pointer transform ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="text-center text-lg font-semibold">{children}</div>;
};

const Input = ({ name, type = "text", placeholder, value, onChange, required }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

const Textarea = ({ name, placeholder, value, onChange, required }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

const Button = ({ type, className, children, onClick }) => {
  return (
    <button type={type} className={`p-2 rounded-lg ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', time: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setShowPopup(false);
  };

  return (
    <div className="relative flex flex-col items-center p-6 mt-10">
      <div className="fixed top-0 h-[100vh] bg-red-500 opacity-5 w-[100vw]">
     

      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 bg-white relative z-10 rounded-2xl shadow-xl"
      >
        <div className="flex flex-col items-center mb-4">
          <motion.div
            className="w-12 mb-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <DotLottieReact
              src="https://lottie.host/5a82cdb8-d7b7-453c-a35a-c7e8cdbd6bd8/DhfBUx6Wyr.lottie"
              loop
              autoplay
            />
          </motion.div>
          <h2 className="text-xl font-bold">CONTACT US</h2>
          <p className="text-gray-500 text-sm">Please fill this form in a decent manner</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} required />
          <Textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
          <Button type="submit" className="w-full bg-blue-800 text-white">SUBMIT</Button>
        </form>
      </motion.div>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {['Get Appointment', 'Email-Support', 'FAQ', 'Schedule-Call'].map((title, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card onClick={
              title === 'Schedule-Call' ? () => setShowPopup(true) : 
              title === 'Email-Support' ? () => window.location.href = 'mailto:chaubeyvinit02@gmail.com' : 
              null
            }>
              <CardContent>
                {title}
                <DotLottieReact src={
                  title === 'Get Appointment' ? 'https://lottie.host/05bf2555-c89c-4afa-8974-b5a3d97d526c/daBQ9OoO2E.lottie' :
                  title === 'Email-Support' ? 'https://lottie.host/11c0114e-b2b4-4794-a2d4-6e688785eb65/KYjy04r72v.lottie' :
                  title === 'FAQ' ? 'https://lottie.host/e3eb1d70-ffaf-4934-b4da-cacf984d30fc/DfHEcHfJhI.lottie' :
                  'https://lottie.host/3b541f38-f0ff-494d-be28-9881822ccb40/Kx7Urcc9hq.lottie'
                } loop autoplay />
                {title === 'Schedule-Call' && showPopup && (
                  <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                      <h2 className="text-xl font-bold mb-4">Schedule a Call</h2>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        <Input name="email" type="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} required />
                        <Input name="mobile" type="tel" placeholder="Mobile No" value={formData.mobile} onChange={handleChange} required />
                        <Input name="time" type="time" value={formData.time} onChange={handleChange} required />
                        <Button type="submit" className="w-full bg-blue-800 text-white">Schedule</Button>
                      </form>
                      <Button onClick={() => setShowPopup(false) && console.log("done")} className="mt-4 bg-red-500 text-white w-full">Close</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactForm;
