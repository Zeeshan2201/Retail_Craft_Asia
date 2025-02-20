import { BrainCircuit, Palette, TextQuote, Package } from "lucide-react"

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
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-indigo-950 to-purple-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          We follow a structured and result-driven approach to ensure seamless execution and maximum impact for our clients. Our process is designed to deliver customized solutions that align with your business goals.
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex relative overflow-auto scrollbar-hide h-[80vh]">
        <div className=" sticky top-4 mr-6 flex items-center mb-20">
          <img
            src="/img.png"
            alt="Branding Services Showcase"
            className=" rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent rounded-lg" />
        </div>

        {/* Services Grid */}
        <div className="grid w-[60%] grid-cols-1 md:grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

