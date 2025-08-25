import AiImage from "../../assets/7.webp";

const Aiinte = () => {
  return (
    <div>
      <div className="w-full flex-col d h-[110vh] bg-gradient-to-r from-blue-100 to-white flex justify-center mt-[12vh]  items-center">
        <div>
          <h1 className="text-black text-[2vw] font-bold mb-15">
            Web Blocks AI-Powered SDLC
          </h1>
        </div>
        <div
          className="w-[70vw] h-[90vh] bg-white bg-cover shadow-lg rounded-xl bg-center rounded-md"
          style={{ backgroundImage: `url(${AiImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default Aiinte;
