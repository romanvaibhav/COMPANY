import moving from "../../assets/giphy.gif";
import productEngee from "../../assets/product.png";
import saas from "../../assets/01_title_SaaS-explained_WixqlhJ_1-3.png";
import cloudComp from "../../assets/DevOps-and-Cloud-The-Match-that-Drives-Todays-Businesses.jpg";
import genAI from "../../assets/AI-Software-Development.png.webp";
import blockchain from "../../assets/87470836-blockchain-technology-colorful-line-round-vector-illustration-on-white-background.jpg";
import { Link } from "react-router-dom";
import SnippitTech from "../snippits/SnippitTech";
import SnippitWhyWebBlocks from "../snippits/snippitWhyWebBlocks";
import SnippitWhatWeValue from "../snippits/SnippitWhatWeValue";
function Home() {
  return (
    <div className="h-auto w-full overflow-hidden">
      <div
        className="sm:h-[500px] md:h-[550px]  w-full border border-black"
        style={{
          backgroundImage: `url(${moving})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center text-white items-start h-full w-full px-10">
          <div className=" md:mt-5 pb-4">
            <p className="text-white text-2xl mt-5 lg:text-4xl font-bold sm:mt-20">
              Build Bold <br /> Lead the Future
            </p>

            <p className="mt-6 text-base sm:text-3xl md:text-xl lg:text-2xl text-gray-200">
              Shape the future with us. We deliver seamless digital solutions —
              <br />
              from idea to launch, with security and scale built in. We handle
              every stage of your digital journey in-house.
            </p>
          </div>
          <div className="pb-4">
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/vaibhavroman2022/30min",
                  "_blank"
                )
              }
              className="
    border 
    text-sm px-3 py-1            /* Mobile (default) */
    sm:text-lg sm:px-4 sm:py-2   /* Small screens ≥640px */
    md:text-xl md:px-6 md:py-3   /* Medium screens ≥768px */
    lg:text-2xl lg:px-8 lg:py-4  /* Large screens ≥1024px */
    mt-4 sm:mt-6                 /* Margin top responsive */
    bg-gray-200 font-bold text-black rounded-2xl 
    hover:bg-blue-700 hover:text-white
  "
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-5">
        <div>
          <h1 className="flex justify-center font-bold text-2xl lg:text-3xl">
            Why <span className="text-blue-600 ml-2">Web Blocks </span> ?
          </h1>

          <div className="mt-10 w-[85rem] ml-8 lg:ml-20 lg:flex lg:flex-row lg:justify-center lg:gap-12">
            <div className=" flex flex-row gap-4">
              <div className="border border-gray-300 rounded-2xl h-60 w-40 lg:h-80 lg:w-64 flex flex-col justify-between p-4 bg-gradient-to-b from-blue-600 to-gray-600 transition-transform duration-300 transform hover:scale-105">
                <p className="font-semibold text-center text-[20px] lg:text-2xl ">
                  Unified Tech Expertise
                </p>
                <p className="text-sm text-center mb-5">
                  One team. All major technologies. End-to-end execution
                </p>
              </div>
              <div className="border border-gray-300 h-60 w-40 lg:h-80 lg:w-64 rounded-2xl flex flex-col justify-between p-4 bg-gradient-to-b from-blue-400 to-gray-500 transition-transform duration-300 transform hover:scale-105">
                <p className="font-semibold text-center text-[20px] lg:text-2xl ">
                  Custom-Built for Your Vision
                </p>
                <p className="text-sm text-center mb-5">
                  No templates — just tailored, results-driven solutions.
                </p>
              </div>
            </div>
            <div className=" flex w-85 mt-4 mb-4 lg:mt-0 lg:mb-0 justify-center">
              <div className=" border border-gray-300 h-60 w-40 lg:h-80 lg:w-64 rounded-2xl flex flex-col justify-between p-4 bg-gradient-to-b from-blue-300 to-gray-300 transition-transform duration-300 transform hover:scale-105">
                <p className="font-semibold text-center text-[20px] lg:text-2xl ">
                  Scalable. Reliable. Ready for Tomorrow
                </p>
                <p className="text-sm text-center mb-5">
                  Built to grow with your business, not break with it.
                </p>
              </div>
            </div>

            <div className=" flex flex-row gap-4">
              <div className="border border-gray-300 h-60 w-40 lg:h-80 lg:w-64 rounded-2xl flex flex-col justify-between p-4 bg-gradient-to-b from-blue-400 to-gray-500 transition-transform duration-300 transform hover:scale-105">
                <p className="font-semibold text-center text-[20px] lg:text-2xl ">
                  Security at Every Layer
                </p>
                <p className="text-sm text-center mb-5">
                  From code to cloud — your data, protected.
                </p>
              </div>
              <div className="border border-gray-300 h-60 w-40 lg:h-80 lg:w-64 rounded-2xl flex flex-col justify-between p-4 bg-gradient-to-b from-blue-600 to-gray-600 transition-transform duration-300 transform hover:scale-105">
                <p className="font-semibold text-center text-[20px] lg:text-2xl">
                  Innovation That Powers Results
                </p>
                <p className="text-sm text-center mb-5">
                  We don’t just build — we evolve, disrupt, and deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SnippitWhyWebBlocks />

      <div className="w-85">
        <div className="flex justify-center ml-8 flex-col w-85 lg:flex-row mt-8 lg:w-[85rem] lg:ml-15">
          <div className="relative w-85 h-50 lg:w-[713px] lg:h-60 lg:ml-8 lg:mt-10 lg:mb-10 rounded-2xl border border-gray-400 overflow-hidden ">
            {/* Background image div */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${productEngee})`,
                backgroundSize: "60% 80%",
              }}
            ></div>

            {/* Gradient overlay div */}
            <div className="absolute inset-0  bg-gradient-to-b from-blue-200 to-gray-100 opacity-70 pl-8">
              <h1 className="text-black font-semibold mt-20 lg:font-bold lg:mt-30">
                Product Engineering
              </h1>
              <p className="text-gray-950  lg:mt-4">
                Next-gen product engineering with our powerful Product
                Engineering services
              </p>
              <Link className="font-bold relative text-black hover:text-red-500 mt-4">
                Learn More
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
              </Link>
            </div>
          </div>

          <div className="relative mt-4 w-85 h-50 lg:w-[713px] lg:h-60 lg:ml-8 lg:mt-10 lg:mb-10 rounded-2xl border border-gray-400 overflow-hidden">
            {/* Background image div */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${saas})`,
                backgroundSize: "60% 80%",
              }}
            ></div>

            {/* Gradient overlay div */}
            <div className="absolute inset-0  bg-gradient-to-b from-gray-200 to-gray-100 opacity-70 pl-8">
              <h1 className="text-black font-semibold mt-20 lg:font-bold  lg:mt-30">
                SAAS App Development
              </h1>
              <p className="text-gray-950 mt-4">
                Transform your business with our exceptional SaaS Application
                Development
              </p>
              <Link className="font-bold relative text-black hover:text-red-500 mt-4">
                Learn More
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex justify-center ml-8 flex-col w-85 lg:flex-row lg:w-[85rem] lg:ml-15">
          <div className="  mt-4 w-85 h-50 relative lg:w-[464px] lg:h-60 lg:ml-8 lg:mt-0 lg:mb-10 rounded-2xl border border-gray-400 overflow-hidden">
            {/* Background image div */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${cloudComp})`,
                backgroundSize: "60% 80%",
              }}
            ></div>

            {/* Gradient overlay div */}
            <div className="absolute inset-0  bg-gradient-to-b from-gray-200 to-gray-100 opacity-70 pl-8">
              <h1 className="text-black font-semibold mt-20 lg:font-bold lg:mt-30">
                Cloud & DevOps Solutions
              </h1>
              <p className="text-gray-950 mt-4">
                Empower businesses with our comprehensive Cloud & DevOps
                services
              </p>
              <Link className="font-bold relative text-black hover:text-red-500 mt-4">
                Learn More
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
              </Link>
            </div>
          </div>

          <div className=" mt-4 w-85 h-50 relative lg:w-[464px] lg:h-60 lg:ml-8 lg:mt-0 lg:mb-10 rounded-2xl border border-gray-400 overflow-hidden">
            {/* Background image div */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${genAI})`,
                backgroundSize: "100% 100%",
              }}
            ></div>

            {/* Gradient overlay div */}
            <div className="absolute inset-0  bg-gradient-to-b from-gray-200 to-gray-100 opacity-70 pl-8">
              <h1 className="text-black font-semibold mt-20 lg:font-bold lg:mt-30">
                Generative AI development
              </h1>
              <p className="text-gray-950 mt-4">
                Let our expertise in Generative AI propel your ideas into
                reality
              </p>
              <Link className="font-bold relative text-black hover:text-red-500 mt-4">
                Learn More
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
              </Link>
            </div>
          </div>

          <div className=" mt-4 w-85 h-50 relative lg:w-[464px] lg:h-60 lg:ml-8 lg:mt-0 lg:mb-10 rounded-2xl border border-gray-400 overflow-hidden">
            {/* Background image div */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${blockchain})`,
                backgroundSize: "60% 80%",
              }}
            ></div>

            {/* Gradient overlay div */}
            <div className="absolute inset-0  bg-gradient-to-b from-gray-200 to-gray-100 opacity-70 pl-8">
              <h1 className="text-black font-semibold mt-20 lg:font-bold lg:mt-30">
                Blockchain Intergration
              </h1>
              <p className="text-gray-950 mt-4">
                Unlock decentralized potential with our end-to-end blockchain
                services
              </p>
              <Link className="font-bold relative text-black hover:text-red-500 mt-4">
                Learn More
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SnippitTech />
      <SnippitWhatWeValue />
    </div>
  );
}
export default Home;
