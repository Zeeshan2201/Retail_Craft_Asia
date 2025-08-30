import { BrainCircuit, Palette, TextQuote, Package } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Process from '../../src/animation/service/process/animations/62cc34f5 8619 45d6 9e31 e94acf024640.json'
// import Process from '../../src/animation/service/process/animations/62cc34f5-8619-45d6-9e31-e94acf024640.json'
// import Process from '../../src/animation/service/process.json'
import Lottie from "react-lottie";
import { div } from "framer-motion/client";
import BagroundCircle from "./BagroundCircle";
import { motion } from "framer-motion";

export default function BrandingServices() {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Consultation & Understanding Needs",
      description:
        "We begin with a detailed discussion to understand your business, challenges, and objectives. This helps us craft tailored strategies that drive real results.",
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Strategy Development",
      description:
        "Based on our insights, we create a strategic plan outlining the best approach, tools, and techniques to achieve your goals. We focus on data-driven decision-making to ensure success..",
    },
    {
      icon: <TextQuote className="w-6 h-6" />,
      title: "Implementation & Execution",
      description:
        "Our team executes the plan with precision, whether it’s sales and merchandising, digital marketing, or technology integration. We ensure smooth operations while maintaining quality and efficiency.",
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Monitoring & Optimization",
      description:
        "We continuously track performance, analyze data, and refine strategies to enhance effectiveness. Our goal is to maximize ROI and ensure sustainable growth for your business.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Reporting & Support",
      description:
        "We provide transparent reports with key insights and recommendations. Our team remains available for ongoing support, ensuring long-term success and continuous improvement.",
    },
  ]

  return (
    <div className="relative bg-gradient-to-tl bg-gray-50">
      <BagroundCircle />
      <div className="min-h-screen text-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Animated Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-t text-yellow-600 font-semibold text-6xl mb-4">
              Our Process
            </h2>
            <p className="text-black max-w-2xl text-xl mx-auto">
              We follow a structured and result-driven approach to ensure seamless execution and maximum impact for our clients. Our process is designed to deliver customized solutions that align with your business goals.
            </p>
          </motion.div>

          <div className="flex relative overflow-hidden z-10 h-[80vh]">
            {/* Lottie Animation */}
            <div className="z-10 hidden sticky top-4 w-[50%] md:flex items-center mb-20">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: Process,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                }}
                height={400}
                width={400}
              />
              <div className="absolute inset-0 rounded-lg" />
            </div>

            {/* Infinite Scroll Services Grid */}
            <div className="md:w-[60%] w-[100%] flex flex-col overflow-hidden">
              <motion.div
                className="flex flex-col gap-8"
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {services.concat(services).map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-yellow-50/5 to-yellow-50 backdrop-blur-sm rounded-xl p-6 hover:bg-black/10 hover:shadow-md hover:shadow-yellow-600/80 transition-colors duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % services.length) * 0.2, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gray-500/20 text-yellow-600">{service.icon}</div>
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-black text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}