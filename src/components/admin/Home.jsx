import moving from "../../assets/giphy.gif";

function Home() {
  return (
    <div className="h-auto w-full overflow-hidden">
      <div
        className="h-[550px] w-full border border-black"
        style={{
          backgroundImage: `url(${moving})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center text-white items-start h-full w-full px-10">
          <div className="-mt-10">
            <p className="text-white text-4xl font-bold">
              Build Bold <br /> Lead the Future
            </p>
            <p className="mt-6 text-2xl text-gray-200">
              Shape the future with us. We deliver seamless digital solutions —
              <br />
              from idea to launch, with security and scale built in. We handle
              every stage of your digital journey in-house.
            </p>
          </div>
          <button className="border mt-6 px-4 py-2 bg-gray-200 font-bold text-black rounded-2xl">
            Lets Connect
          </button>
        </div>
      </div>

      <div className=" mt-5">
        <div>
          <h1 className=" flex justify-center font-bold text-3xl">
            Why Choose -
            <p>
              <span className="text-blue-600">BLOCKS</span> ?
            </p>
          </h1>
          <div className="flex justify-center items-center py-8">
            <div className="bg-gray-200 border border-gray-400 rounded-xl w-[900px] p-6 text-center">
              <p className="text-lg font-medium text-gray-800 leading-relaxed gap-5">
                At Blocks, we build future-ready solutions that accelerate your
                growth. <br />
                From software engineering and cloud transformation to AI-driven
                insights <br />
                and blockchain integration, our team of experts ensures every
                project is <br />
                delivered with excellence, speed, and impact — all under one
                roof.
              </p>
            </div>
          </div>

          <div className="mt-10 w-full flex flex-row justify-center gap-12">
            <div className="border border-gray-300 rounded-2xl h-80 w-64 flex flex-col justify-between p-4 bg-gradient-to-b from-blue-600 to-gray-600 transition-transform duration-300 transform hover:scale-105">
              <p className="font-semibold text-center text-2xl ">
                Unified Tech Expertise
              </p>
              <p className="text-sm text-center mb-5">
                One team. All major technologies. End-to-end execution
              </p>
            </div>
            <div className="border border-gray-300 h-80 w-64 rounded-2xl flex flex-col justify-between p-4 bg-gradient-to-b from-blue-400 to-gray-500 transition-transform duration-300 transform hover:scale-105">
              <p className="font-semibold text-center text-2xl ">
                Custom-Built for Your Vision
              </p>
              <p className="text-sm text-center mb-5">
                No templates — just tailored, results-driven solutions.
              </p>
            </div>
            <div className="border border-gray-300 h-80 w-64 rounded-2xl flex flex-col justify-between p-4 bg-gradient-to-b from-blue-300 to-gray-300 transition-transform duration-300 transform hover:scale-105">
              <p className="font-semibold text-center text-2xl ">
                Scalable. Reliable. Ready for Tomorrow
              </p>
              <p className="text-sm text-center mb-5">
                Built to grow with your business, not break with it.
              </p>
            </div>
            <div className="border border-gray-300 h-80 w-64 rounded-2xl flex flex-col justify-between p-4 bg-gradient-to-b from-blue-400 to-gray-500 transition-transform duration-300 transform hover:scale-105">
              <p className="font-semibold text-center text-2xl ">
                Security at Every Layer
              </p>
              <p className="text-sm text-center mb-5">
                From code to cloud — your data, protected.
              </p>
            </div>
            <div className="border border-gray-300 h-80 w-64 rounded-2xl flex flex-col justify-between p-4 bg-gradient-to-b from-blue-600 to-gray-600 transition-transform duration-300 transform hover:scale-105">
              <p className="font-semibold text-center text-2xl ">
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
  );
}
export default Home;
