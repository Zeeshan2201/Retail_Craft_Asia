

export default function Hero() {
  return (
    <section className="mt-24 px-24 flex h-[80vh] justify-center items-center">
    <div className="w-[50vw] mr-10 mb-8"> 
        <div className="flex flex-col justify-center ">
                <h1 className="text-5xl font-semibold  md:text-6xl pb-6 "> Elevate Your <br className="my-2"/>Retail Strategy with
                <span className="font-bold inline-block mt-3 text-yellow-600 "> Retail Craft Asia</span>

                </h1>
                <h2  className="font-semibold text-yellow-600  text-3xl mt-2" >Delivering 
                <span className="font-semibold   text-yellow-600  text-3xl"> Growth Consistency</span> 
                
                </h2>
                <p className="mt-4 text-lg text-gray-800 md:text-xl">
                Expert consulting services to transform your retail business with innovative solutions and insights.
                </p>
        </div>
    </div>
    <div className="rounded-xl mb-8">
    <video  controls className="w-[46vw] rounded-2xl h-[60vh]">
      <source src="/homehero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </section>
  );
}
