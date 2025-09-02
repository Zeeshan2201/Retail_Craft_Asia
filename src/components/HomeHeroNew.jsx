

export default function Hero() {
  return (
    <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col lg:flex-row min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:h-[80vh] justify-center items-center gap-6 lg:gap-0">
    <div className="w-full lg:w-[50vw] lg:mr-6 xl:mr-10 mb-6 sm:mb-8 lg:mb-8 text-center lg:text-left"> 
        <div className="flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold pb-4 sm:pb-5 md:pb-6 leading-tight"> Elevate Your <br className="hidden sm:block my-1 sm:my-2"/>Retail Strategy with
                <span className="font-bold block sm:inline-block mt-2 sm:mt-3 text-yellow-600"> Retail Craft Asia</span>

                </h1>
                <h2 className="font-semibold text-yellow-600 text-xl sm:text-2xl md:text-3xl mt-2">Delivering 
                <span className="font-semibold text-yellow-600 text-xl sm:text-2xl md:text-3xl"> Growth Consistency</span> 
                
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 leading-relaxed px-2 sm:px-0">
                EXPERT CONSULTING SERVICES TO TRANSFORM YOUR RETAIL BUSINESS WITH INNOVATIVE SOLUTIONS AND INSIGHTS
                </p>
        </div>
    </div>
    <div className="rounded-xl mb-6 sm:mb-8 w-full lg:w-auto flex justify-center">
    <video controls className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[46vw] xl:w-[44vw] rounded-2xl h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] object-cover">
      <source src="/homehero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </section>
  );
}
