import { FaEnvelope, FaPhone } from "react-icons/fa";
import frame1 from "../../assets/frame_1321317576-BlAR8Shm.webp";
import frame2 from "../../assets/frame_1321317740-B7venXKh.webp";
import frame3 from "../../assets/frame_1321317741-BzkRKWqB.webp";
import frame4 from "../../assets/frame_1321317578-CLuuBSr6.webp";
import frame5 from "../../assets/frame_1321317742-CFmQVlbd.webp";

function Howwe() {
  return (
    <div className="relative w-full  lg:h-[75vh]  h-[40vh] bg-black overflow-hidden">
      {/* <!-- Glowing moving background -->
      <div className=""></div>
      <div className=""></div>
      <div className="absolute w-[80vw] h-[70vh] sm:w-[0.001vmin] sm:h-[0.001vmin] rounded-full opacity-25 glow3"></div> */}

      {/* <!-- Center fading text --> */}
      <div className=" glow3"></div>

      <div className="w-full flex flex-row justify-between">
        <div className="ml-[5vw]">
          <div className="lg:mt-[8vh] mt-5 ">
            <h1 className="text-white font-bold tracking-[0.1em] text-2xl">
              How We
            </h1>
            <h1 className="font-bold tracking-[0.2em] text-3xl lg:text-5xl text-white/90 animate-fade-text">
              WEB BLOCKS
            </h1>
          </div>
          <div className="mt-[7vh] ">
            {/* <p className="w-[35vw]  font-semibold tracking-[0.0em] text lg:text-2xl text-white">
              Reach out to us if you want to talk Product Development!
            </p>
            <p className="font flex tracking-[0.1em] items-center gap-2 text-1xl text-white mt-[4vh]">
              <FaEnvelope className="text-gray-300" /> hr@webblocks.in
            </p>
            <p className="font tracking-[0.1em] flex items-center text-1xl gap-2 text-white mt-[1vh]">
              <FaPhone className="text-gray-300" /> +91 7385171681
            </p> */}
            <button className="relative text-white group flex  lg:text-2xl mt-[15vh] lg:mt-[35vh] items-center gap-2">
              <span className="relative">
                Book a Call with our CEO
                {/* Underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>

              {/* Arrow */}
              <span className="inline-block transform translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </button>
          </div>
        </div>
        <div className="lg:mt-[15vh] lg:mr-[10vw] lg:w-[20vw] lg:h-[40vh] mt-25 w-60 h-40 bg-black flex  border-blue-400 justify-center items-center">
          {/* Scrollable container with hidden scrollbar */}
          <div className="lg:w-[19vw] lg:h-[43vh] w-50 h-40 overflow-y-auto space-y-8 hide-scrollbar ">
            <div className="lg:w-full lg:h-[40vh] h-40 w-45 border-4  bg-gray-400 rounded-2xl">
              <img
                className="lg:w-full w-45 lg:h-[45vh] h-43 h-[2]rounded-2xl"
                src={frame1}
                alt=""
              />
            </div>
            <div className="lg:w-full lg:h-[40vh] h-40 w-45 border-4  bg-gray-400 rounded-2xl">
              <img
                className="lg:w-full w-45 lg:h-[45vh] h-43 h-[2]rounded-2xl"
                src={frame2}
                alt=""
              />
            </div>
            <div className="lg:w-full lg:h-[40vh] h-40 w-45 border-4  bg-gray-400 rounded-2xl">
              <img
                className="lg:w-full w-45 lg:h-[45vh] h-43 h-[2]rounded-2xl"
                src={frame3}
                alt=""
              />
            </div>
            <div className="lg:w-full lg:h-[40vh] h-40 w-45 border-4  bg-gray-400 rounded-2xl">
              <img
                className="lg:w-full w-45 lg:h-[45vh] h-43 h-[2]rounded-2xl"
                src={frame4}
                alt=""
              />
            </div>
            <div className="lg:w-full lg:h-[40vh] h-40 w-45 border-4  bg-gray-400 rounded-2xl">
              <img
                className="lg:w-full lg:h-[45vh] w-45 h-43 h-[2]rounded-2xl"
                src={frame5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <h1 className="absolute w-full mt-[-300px] text-center top-[48vh] text-white/90 font-bold tracking-[0.8em] text-[2vw] uppercase animate-fade-text">
        My Glowing Text
      </h1> */}
    </div>
  );
}

export default Howwe;
