// import Image from "next/image";
// import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Tech from '../../src/animation/service/tech.json'
import Marketing from '../../src/animation/service/marketing.json'
import Lottie from "react-lottie";

export default function FeaturedProject() {
  return (
    <>
    <section className="mt-10">
    <div>
          <div className="max-w-7xl  mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
            {/* <DotLottieReact
      src="https://lottie.host/90ff9944-9dce-4f64-907b-9a3ad1b4d1ff/7ogF0XlY1l.lottie"
      loop
      autoplay
    /> */}
{/* <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
 
  <rect width="100%" height="100%" fill="#f0f0f0" />

  <line x1="50" y1="150" x2="350" y2="150" stroke="#000" stroke-width="2" />


  <line x1="50" y1="150" x2="50" y2="50" stroke="#000" stroke-width="2" />

  <text x="30" y="155" fontSize="12" fill="#000">0</text>
  <text x="30" y="100" fontSize="12" fill="#000">50</text>
  <text x="30" y="50" fontSize="12" fill="#000">100</text>

  <text x="50" y="170" fontSize="12" fill="#000">0%</text>
  <text x="150" y="170" fontSize="12" fill="#000">25%</text>
  <text x="250" y="170" fontSize="12" fill="#000">50%</text>
  <text x="350" y="170" fontSize="12" fill="#000">100%</text>

  
  <polyline points="50,150" stroke="#000" stroke-width="3" fill="none">
    <animate attributeName="points" dur="4s" fill="freeze" 
             from="50,150" 
             to="50,150 150,100 250,50 350,50" />
  </polyline>

  <circle cx="50" cy="150" r="5" fill="#000">
    <animate attributeName="r" from="0" to="5" dur="0.5s" fill="freeze" />
  </circle>
  <circle cx="150" cy="100" r="0" fill="#000">
    <animate attributeName="r" from="0" to="5" dur="0.5s" begin="1s" fill="freeze" />
  </circle>
  <circle cx="250" cy="50" r="0" fill="#000">
    <animate attributeName="r" from="0" to="5" dur="0.5s" begin="2s" fill="freeze" />
  </circle>
  <circle cx="350" cy="50" r="0" fill="#000">
    <animate attributeName="r" from="0" to="5" dur="0.5s" begin="3s" fill="freeze" />
  </circle>
</svg> */}
  <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">

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
    {/* <animate attributeName="r" from="0" to="5" dur="0.5s" repeatCount="indefinite" /> */}
  </circle>
  <circle cx="150" cy="100" r="0" fill="#000">
    {/* <animate attributeName="r" from="0" to="5" dur="0.5s" begin="1s" repeatCount="indefinite" /> */}
  </circle>
  <circle cx="250" cy="50" r="0" fill="#000">
    {/* <animate attributeName="r" from="0" to="5" dur="0.5s" begin="2s" repeatCount="indefinite" /> */}
  </circle>
  <circle cx="350" cy="50" r="0" fill="#000">
    {/* <animate attributeName="r" from="0" to="5" dur="0.5s" begin="3s" repeatCount="indefinite" /> */}
  </circle>
</svg>        
            </div>

            <div className="text-black space-y-6 px-4">
              <h3 className="text-purple-900 text-3xl md:text-4xl font-bold leading-tight">
              Sales and Merchandising
              </h3>
              
              <p className="text-gray-700 text-lg">
              Maximize your brand’s presence with expert sales, merchandising, and retail audits. We ensure optimal product placement, asset optimization, and point-of-sale execution.
              </p>
              <p className="text-white/80 text-lg">
              Enhance customer engagement and drive conversions with data-driven insights.
 </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 border-2 border-[#00E5FF] text-purple-900 font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 px-4">
              <h3 className="text-purple-900 text-3xl md:text-4xl font-bold leading-tight">
              Brand Activation & Experiential Marketing
              </h3>
              
              <p className="text-gray-700 text-lg">
              We create immersive brand experiences through ambassador programs, roadshows, and in-store activations to captivate audiences and strengthen brand loyalty. </p>
              
              <p className="text-white/80 text-lg">
              From product sampling to shopper marketing, we craft experiential campaigns that boost engagement and drive sales. Whether online or offline, every interaction enhances brand perception and builds strong consumer relationships. </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 border-2 border-[#00E5FF] text-purple-900 font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
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
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
            <DotLottieReact
      src="https://lottie.host/96c18b5c-99e1-4a44-9617-66423ec4a335/QSRNUUsVff.lottie"
      loop
      autoplay
    />

            </div>

            <div className="text-white space-y-6 px-4">
              <h3 className="text-purple-900 text-3xl md:text-4xl font-bold leading-tight">
              Market Expansion Services
              </h3>
              
              <p className="text-gray-700 text-lg">
              Our market expansion services offer end-to-end solutions for business growth, including product sourcing, sales, and marketing for a seamless market entry.  </p>
              
              <p className="text-white/80 text-lg">
              Our solutions optimize supply chain operations, helping businesses reach the right customers and achieve long-term success.</p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 border-2 border-[#00E5FF] text-purple-900 font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 px-4">
              <h3 className="text-purple-900 text-3xl md:text-4xl font-bold leading-tight">
              Data & Technology
              </h3>
              
              <p className="text-gray-700 text-lg">
              We empower businesses with data-driven intelligence and automation tools to streamline operations and improve decision-making. </p>
              
              <p className="text-white/80 text-lg">
              By integrating innovation with efficiency, we enable brands to leverage data for smarter, more effective strategies.

 </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 border-2 border-[#00E5FF] text-purple-900 font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="relative">
            {/* <DotLottieReact
      src="https://lottie.host/dc6dcc14-2e94-4c69-bc18-84a0b1df7211/lXDcz5OyJe.lottie"
      loop
      autoplay
    /> */}
<Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: Tech,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  height={400}
  width={400}
/>
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
                  {/* <DotLottieReact
      src="https://lottie.host/dc6dcc14-2e94-4c69-bc18-84a0b1df7211/lXDcz5OyJe.lottie"
      loop
      autoplay
    /> */}
<Lottie
  options={{
    loop: true,
    autoplay: true,
    animationData: Marketing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }}
  height={400}
  width={400}
/>
            </div>
            <div className="text-white space-y-6 px-4">
              <h3 className="text-purple-900 text-3xl md:text-4xl font-bold leading-tight">
              Digital Marketing
              </h3>
              
              <p className="text-gray-700 text-lg">
              Our digital marketing services enhance brand presence through content marketing and social media strategies, helping businesses engage audiences and drive customer interactions. 
              </p>
              
              <p className="text-white/80 text-lg">
              With a results-driven approach, we ensure businesses stay visible and competitive online. Our tailored strategies generate leads, boost conversions, and maximize digital outreach for long-term success.

 </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-white text-[#1a237e] font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 border-2 border-[#00E5FF] text-purple-900 font-semibold rounded-lg hover:bg-[#00E5FF] hover:text-white transition-colors"
                >
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            
          </div>
      </div>
    </section>
    </>
  );
}