import React from "react";
import blocks from "../../../assets/project-blockchain.jpeg";
import image from "../../../assets/project-img.jpeg";
import cover from "../../../assets/cover3.webp";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full relative bg-gradient-to-r from-blue-100 to-white py-[10vh] lg:h-[75vh] h-130 px-[5vw] md:px-[10vw] flex flex-col md:flex-row items-center justify-between">
      {/* Left */}
      <div className="md:w-[65%] space-y-[2vh]">
        <p className="text-gray-500 uppercase  text-sm font-semibold ">
          WEB BLOCKS PRESENTS
        </p>

        <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
          The Proof of work in <br /> the Portfolio
        </h1>

        <p className="text-gray-600 w-70 h-55 lg:h-35 lg:w-[35vw] text-lg line-clamp-4">
          From full-stack development to decentralized applications and
          cloud-based solutions — we build future-ready, scalable, and secure
          digital experiences. Whether it's crafting enterprise apps,
          streamlining operations, or launching blockchain platforms, our
          projects speak louder than words.
        </p>

        <button
          className="bg-black text-white px-[2vw] py-[1vh] rounded-md text-[2vh] hover:bg-gray-800 "
          onClick={() => navigate("/contact")}
        >
          Get in Touch
        </button>
      </div>

      {/* Right */}
      <div className="md:w-[35%] flex justify-end mt-[4vh] md:mt-0 relative h-[40vh]">
        <img
          src={blocks}
          alt="blockchain"
          className="w-[12vw] h-[15vh] rounded-lg shadow-lg absolute top-[2vh] right-[-1vw] z-30"
        />

        <img
          src={image}
          alt="Code"
          className="w-[18vw] h-[29vh] rounded-lg shadow-lg absolute top-[0vh] right-[5vw] z-10 opacity-90"
        />

        <img
          src={cover}
          alt="blockchain"
          className="w-[19vw] h-[23vh] rounded-lg shadow-lg absolute top-[20vh] right-[13vw] z-20"
        />
      </div>
    </section>
  );
};

export default Hero;
