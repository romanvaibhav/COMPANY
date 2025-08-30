import React from "react";

const CloudDevOpsSection = () => {
  return (
    <div className="relative bg-gradient-to-r mt-[15vh] from-orange-300 py-16 to-white text-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://your-image-url-here.com/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-white bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative ml-[10vw] container w-[80vw] lg:w-[60vw] ">
        <h1 className="text-3xl md:text-4xl text-black font-bold mb-4">
          Begin Your Cloud-Based Project With DevOps Support
        </h1>
        <p className="text-lg md:text-xl mb-8 text-black max-w-2xl">
          Reach out to Web Blocks' finest consultants and give your idea the
          ideal digital solutions. Let's develop something awesome together!
        </p>

        <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 hover:text-white transition duration-300">
          Book A Call With Our CEO →
        </button>
      </div>
    </div>
  );
};

export default CloudDevOpsSection;
