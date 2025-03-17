import { BrainCircuit, Palette, TextQuote, Package } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Process from '../../src/animation/service/process/animations/62cc34f5 8619 45d6 9e31 e94acf024640.json'
// import Process from '../../src/animation/service/process/animations/62cc34f5-8619-45d6-9e31-e94acf024640.json'
// import Process from '../../src/animation/service/process.json'
import Lottie from "react-lottie";
import { div } from "framer-motion/client";
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
    <div className="bg-gradient-to-tl bg-sky-50 ">
    <div className="min-h-screen text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-t text-yellow-600 font-bold text-6xl mb-4">Our Process</h2>
          <p className="text-black max-w-2xl mx-auto">
          We follow a structured and result-driven approach to ensure seamless execution and maximum impact for our clients. Our process is designed to deliver customized solutions that align with your business goals.
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex relative overflow-auto z-10 scrollbar-hide h-[80vh]">
        <div className="z-10 hidden sticky top-4 w-[50%]  md:flex items-center mb-20">
        {/* <DotLottieReact
        className="rounded-lg shadow-2xl"
      src="https://lottie.host/f6a9b5be-6ec4-4843-8aaa-5c0ea6a199e0/yiuHIZIML7.lottie"
      loop
      autoplay
    /> */}
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
          <div className="absolute inset-0  rounded-lg" />
        </div>

        {/* Services Grid */}
        <div className="grid md:w-[60%] w-[100%]  grid-cols-1 md:grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/5 backdrop-blur-sm rounded-lg p-6 hover:bg-black/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-cyan-500/20 text-pink-400">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-black text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

