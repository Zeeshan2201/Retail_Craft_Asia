// import Image from "next/image";
// import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import Tech from '../../src/animation/Sales/Tech/animations/a473d880-55e7-45db-930c-320a743b2afe.json'
import Tech from '../../src/animation/service/tech1.json'
// import Tech from '../../src/animation/service/tech.json'
import Marketing from '../../src/animation/service/marketing.json'
import Lottie from "react-lottie";
import { Link } from 'react-router-dom';

export default function FeaturedProject() {
  return (
    <>
    <section className="mt-10 ">
    <div>
          <div className="max-w-7xl  md:mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
            {/* <DotLottieReact
      src="https://lottie.host/90ff9944-9dce-4f64-907b-9a3ad1b4d1ff/7ogF0XlY1l.lottie"
      loop
      autoplay
    /> */}
  <svg className='md:w-[400px] md:h-[200px]  w-[380px] h-[180px]' xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="none" />

  <line x1="50" y1="150" x2="350" y2="150" stroke="#000" strokeWidth="2" />

  <line x1="50" y1="150" x2="50" y2="50" stroke="#000" strokeWidth="2" />

  <text x="30" y="155" fontSize="12" fill="#000">0</text>
  <text x="30" y="100" fontSize="12" fill="#000">50</text>
  <text x="30" y="50" fontSize="12" fill="#000">100</text>

  <text x="50" y="170" fontSize="12" fill="#000">0%</text>
  <text x="150" y="170" fontSize="12" fill="#000">25%</text>
  <text x="250" y="170" fontSize="12" fill="#000">50%</text>
  <text x="350" y="170" fontSize="12" fill="#000">100%</text>

  <path d="M50,150" stroke="#000" strokeWidth="3" fill="none">
    <animate attributeName="d" dur="4s" repeatCount="indefinite"
             values="M50,150;
                     M50,150 C100,150 100,100 150,100 S200,50 250,50 S300,50 350,50;
                     M50,150" />
  </path>

  <circle cx="50" cy="150" r="5" fill="#000">
  </circle>
  <circle cx="150" cy="100" r="0" fill="#000">
  </circle>
  <circle cx="250" cy="50" r="0" fill="#000">
  </circle>
  <circle cx="350" cy="50" r="0" fill="#000">
  </circle>
</svg>        
            </div>

            <div className="text-black space-y-6 px-4">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-bold leading-tight">
              Sales and Merchandising
              </h3>
              
              <p className="text-amber-950 text-lg  text-justify">
              Maximize your brand’s presence with expert sales, merchandising, and retail audits. We ensure optimal product placement, asset optimization, and point-of-sale execution.
              </p>
              <p className="text-amber-950 text-lg text-justify">
              Enhance customer engagement and drive conversions with data-driven insights.
 </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/services/SalesAndMerchandising" 
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </Link>
                <Link
                  to="/contact" 
                  className="md:inline-flex items-center px-6 py-3 border-2 hidden border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-flow-dense md:grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 items-center mt-10">
            <div className="text-white row-start-2 md:row-start-auto md:col-start-1 space-y-6 px-4">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-tl from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-bold leading-tight">
              Brand Activation & Experiential Marketing
              </h3>
              
              <p className="text-amber-950 text-lg text-justify">
              We create immersive brand experiences through ambassador programs, roadshows, and in-store activations to captivate audiences and strengthen brand loyalty. </p>
              
              <p className="text-amber-950 text-lg text-justify">
              From product sampling to shopper marketing, we craft experiential campaigns that boost engagement and drive sales. Whether online or offline, every interaction enhances brand perception and builds strong consumer relationships. </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/services/BrandActivation" 
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="md:inline-flex items-center px-6 py-3 border-2 hidden border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            <div className="relative">
            <DotLottieReact
      src="https://lottie.host/af206ab1-250f-43d9-8308-2cee354481ca/76CXF5NodU.lottie"
      loop
      autoplay
    />

            </div>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-10">
            <div className="relative">
            <DotLottieReact
      src="https://lottie.host/96c18b5c-99e1-4a44-9617-66423ec4a335/QSRNUUsVff.lottie"
      loop
      autoplay
    />
            </div>
            <div className="text-white space-y-6 px-4">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-bold leading-tigh">
              Market Expansion Services
              </h3>
              
              <p className="text-amber-950 text-lg text-justify">
              Our market expansion services offer end-to-end solutions for business growth, including product sourcing, sales, and marketing for a seamless market entry.  </p>
              
              <p className="text-amber-950 text-lg text-justify">
              Our solutions optimize supply chain operations, helping businesses reach the right customers and achieve long-term success.</p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/services/MarketExpansion" 
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="md:inline-flex items-center px-6 py-3 border-2 hidden border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div  className="container mx-auto grid grid-flow-dense grid-rows-2 md:grid-rows-1 md:grid-rows-auto gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center">
          <div className=" row-start-2 md:row-start-auto md:col-start-1 text-white space-y-6 px-4">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-bold leading-tigh">
              Data & Technology
              </h3>
              
              <p className="text-amber-950 text-lg text-justify">
              We empower businesses with data-driven intelligence and automation tools to streamline operations and improve decision-making. </p>
              
              <p className="text-amber-950 text-lg text-justify">
              By integrating innovation with efficiency, we enable brands to leverage data for smarter, more effective strategies.

 </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/services/DataAndTechnology" 
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="md:inline-flex items-center px-6 py-3 border-2 hidden border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            <div className="relative md:w-[400px] w-[380px] h-[400px]">
            
<Lottie
className=""
  options={{
    loop: true,
    autoplay: true,
    animationData: Tech,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  // height={400}
  // width={400}
/>
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
                  
<Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: Marketing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  height={300}
  width={300}
/>
            </div>
            <div className="text-white space-y-6 px-4 mt-10">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 text-3xl md:text-4xl font-bold leading-tigh">
              Digital Marketing
              </h3>
              
              <p className="text-amber-950 text-lg text-justify">
              Our digital marketing services enhance brand presence through content marketing and social media strategies, helping businesses engage audiences and drive customer interactions. 
              </p>
              
              <p className="text-amber-950 text-lg text-justify">
              With a results-driven approach, we ensure businesses stay visible and competitive online. Our tailored strategies generate leads, boost conversions, and maximize digital outreach for long-term success.

 </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/services/DigitalMarketing" 
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="md:inline-flex hidden items-center px-6 py-3 border-2 border-yellow-700 text-yellow font-semibold rounded-lg text-transparent bg-clip-text bg-gradient-to-t from-black to-[70%] to-yellow-700 transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            
          </div>
      </div>
    </section>
    </>
  );
}
{/* <DotLottieReact
      src="https://lottie.host/dc6dcc14-2e94-4c69-bc18-84a0b1df7211/lXDcz5OyJe.lottie"
      loop
      autoplay
    /> */}
    {/* <DotLottieReact
      src="https://lottie.host/dc6dcc14-2e94-4c69-bc18-84a0b1df7211/lXDcz5OyJe.lottie"
      loop
      autoplay
    /> */}