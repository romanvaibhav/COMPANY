import bgImage from "../../assets/Rectangle 3905-B9XFmqbZ.webp";
const Services = () => {
  return (
    <div
      className="
    w-[full] h-[55vh] md:h[89vh] lg:h-[89vh] text-white 
    bg-black 
    lg:bg-white    
    md:bg-white       /* Default black for small screens */
    md:bg-none           /* Remove black from medium+ if we want image instead */
    bg-cover
    bg-center
    bg-no-repeat
  "
      style={{
        backgroundImage: window.innerWidth >= 768 ? `url(${bgImage})` : "none", // Tailwind md breakpoint ~768px
      }}
    >
      <div>
        <div className="flex flex-col ">
          <div className="mt-[15vh] ml-[9vw]">
            <p className="lg:text-[5vh] font-bold text-lg">
              Provide digital solutions <br />
              for your business
            </p>
            <p className="w-80 mt-7">
              Unlock the full potential of your business with tailored digital
              solutions that drive growth, efficiency, and innovation. At
              Netefie, we design, develop, and implement technology strategies
              that solve real business challenges and deliver measurable
              results.
            </p>
            <button className="bg-white text-black px-[2vw] py-[1vh] rounded-md text-[2vh] hover:bg-gray-800 mt-6">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="hidden md:block lg:block">
          <div
            className="w-[90vw] flex justify-end mt-[-27vh] ml-[vw]
        "
          >
            <div className="text-black ">
              <p className="lg:text-[5vh] font-bold">
                AI First <br />
                Development
                <br /> For a Smart Future
              </p>
              <p className="w-80 mt-7">
                Empowering business with cutting-edge AI solutions and
                future-ready digital experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
