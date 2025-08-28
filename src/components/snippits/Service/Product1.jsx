import prodImg from "../../../assets/6299913.jpg";
export default function Product1() {
  return (
    <div className=" w-full h-[80vh] flex items-center">
      <div className="mt-[-10vh] ml-15 lg:ml-[10vw] ">
        <p className=" text-3xl lg:text-4xl font-bold mb-7">
          Product Engineering Services
        </p>
        <p className="w-[70vw] lg:w-[40vw] text-lg text-gray-600">
          Web Blocks offers end-to-end product engineering—strategy, design,
          build, scale. Expect high-quality delivery, faster time-to-value, and
          user experiences that set a new bar.
        </p>

        <button className="bg-blue-600 text-white px-[2vw] py-[1vh] rounded-md text-[2vh] hover:bg-blue-800 mt-[5vh]">
          Get Started
        </button>
      </div>
      <div>
        {/* <img className="w-[40vw] h-[50vh]" src={prodImg} alt="" /> */}
      </div>
    </div>
  );
}
