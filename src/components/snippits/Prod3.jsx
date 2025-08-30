export default function Prod3() {
  return (
    <div className=" w-full h-[100vh] flex items-center bg-gradient-to-r from-orange-100 to-white">
      <div className="mt-[vh] ml-15 lg:ml-[10vw] ">
        <p className=" text-3xl lg:text-4xl font-bold mb-7">
          Cloud & DevOps Solutions
        </p>
        <p className="w-[70vw] lg:w-[40vw] text-lg text-gray-600">
          Combining innovation with proven strategies, we help businesses
          leverage Cloud and DevOps for efficiency, scalability, and unbeatable
          speed to market.
        </p>

        <button className="bg-orange-600 text-white px-[2vw] py-[1vh] rounded-md text-[2vh] hover:bg-orange-800 mt-[5vh]">
          Get Started
        </button>
      </div>
      <div>
        {/* <img className="w-[40vw] h-[50vh]" src={prodImg} alt="" /> */}
      </div>
    </div>
  );
}
