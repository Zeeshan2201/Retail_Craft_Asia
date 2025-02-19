import { BrainCircuit, Palette, TextQuote, Package } from "lucide-react"

export default function BrandingServices() {
  const services = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Brand Strategy",
      description:
        "Utilize our proven brand strategy process to grow your brand both online and offline. Our brand discovery sessions, foundational messaging and research services are designed to help your business succeed in connecting with your target audience. We create custom strategies for every client, based on thorough industry analysis and competitor research.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Logo Design & Style Guide",
      description:
        "Drive brand awareness with a custom-crafted brand identity and instantly recognizable logo design. When it comes to branding and messaging, consistency is key to making sure your audience understands your offering and unique value proposition. Our comprehensive brand guidelines ensure your brand's visual identity is used correctly, consistently and with impact across platforms and channels.",
    },
    {
      icon: <TextQuote className="w-6 h-6" />,
      title: "Brand Naming",
      description:
        "Create a unique and memorable name for your brand with our thoughtful, insightful and research-driven approach to brand naming. Within our proven brand naming process, we consider important elements, such as memorability, relevance, differentiation and impact, to give you a name that represents your identity and resonates with your target audience.",
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Brand Strategy",
      description:
        "Utilize our proven brand strategy process to grow your brand both online and offline. Our brand discovery sessions, foundational messaging and research services are designed to help your business succeed in connecting with your target audience. We create custom strategies for every client, based on thorough industry analysis and competitor research.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Brand Package Designs",
      description:
        "Influence purchase decisions in seconds with our expert package design solutions. Your product's packaging is a key part of your product offering, so it needs to stand out on shelves while remaining true to your brand. Our branding team brings years of industry experience in retail and consumer packaged goods to your brands package design.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-indigo-950 to-purple-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Branding Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Work with our award-winning design team to bring your brand to life or give your brand across channels
            through custom strategies, logo design, brand naming and more.
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

