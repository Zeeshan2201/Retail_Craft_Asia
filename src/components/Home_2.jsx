import Mem_1 from "../assets/Home_Hero/Mem_1.png"

const IndustrySection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-8 md:py-8 mb-10 bg-gradient-to-r from-yellow-50 to-gray-100 overflow-hidden animate-fadeIn">
      {/* Left Content */}
      <div className="w-full md:max-w-2xl mb-12 md:mb-0">
        <h3 className="uppercase tracking-wide drop-shadow-lg text-3xl md:text-5xl font-semibold text-yellow-600 text-center md:text-left">
          INDUSTRY SOLUTIONS
        </h3>
        <h2 className="uppercase tracking-wide drop-shadow-lg text-3xl md:text-5xl font-bold text-gray-900 mt-2 text-center md:text-left">
          Tailored Solutions for <span className="mt-4 text-yellow-700">Retail & FMCG</span>
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
            className="w-72 h-72 md:w-96 md:h-96 shadow-lg border-8 border-white"
          />
        </div>
      </div>
    </section>
  )
}

export default IndustrySection
