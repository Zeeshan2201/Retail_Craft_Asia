import Mem_1 from "../assets/Home_Hero/Mem_1.png"

const IndustrySection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-8 md:py-8 mb-10 bg-gradient-to-r from-yellow-50 to-gray-100 overflow-hidden animate-fadeIn">
      {/* Left Content */}
      <div className="w-full md:max-w-2xl mb-12 md:mb-0">
        <h3 className="uppercase tracking-wide drop-shadow-lg text-3xl md:text-5xl font-semibold text-yellow-600 text-center md:text-left">
          INDUSTRY SOLUTIONS
        </h3>
        <h2 className=" uppercase tracking-wide drop-shadow-lg text-3xl md:text-5xl font-bold text-gray-900 mt-2 text-center md:text-left">
          Tailored Solutions for <span className="mt-4 text-yellow-600">Retail & FMCG</span>
        </h2>
        <p className="mt-8 text-base md:text-lg text-gray-700 text-center md:text-left">
          We provide expert consulting services to help businesses optimize operations, enhance customer experience, and
          drive growth in the competitive retail industry.
        </p>
      </div>

      {/* Right Content - Single Image */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end h-[300px] md:h-[60vh]">
        <div className="relative w-[300px] md:w-[40vw] h-full flex justify-center items-center">
          <div className="absolute w-80 h-80 md:w-96 md:h-96  opacity-30 blur-3xl rounded-full"></div>
          <img
            src={Mem_1 || "/placeholder.svg"}
            alt="Industry Expert"
            className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full shadow-lg border-4 border-white top-[8%] left-[40%]"
          />
          <img
            src={Home_2 || "/placeholder.svg"}
            alt="Retail Professional"
            className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full shadow-lg border-4 border-white top-[35%] left-[5%] md:left-[15%]"
          />
          <img
            src={Home_3 || "/placeholder.svg"}
            alt="FMCG Specialist"
            className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-white bottom-[9%] left-[32%] md:left-[42%]"
          />
          <img
            src={Home_4 || "/placeholder.svg"}
            alt="Market Analyst"
            className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-white right-[15%] md:right-[15%] top-[35%]"
          />
        </div>
      </div>
    </section>
  )
}

export default IndustrySection
