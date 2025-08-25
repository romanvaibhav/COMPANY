import innovation from "../../assets/istockphoto-1285957020-612x612.jpg";
import Ethics from "../../assets/ethics-honesty-integrity-respect-gears-260nw-2527567239.png";
import connection from "../../assets/Rectangle 31-CaxH85gR.webp";
export default function SnippitWhatWeValue() {
  return (
    <div className=" w-[95vw] ml-[5vw] lg:w-[85rem] lg:ml-20 mt-25 pb-[9vh]">
      <div>
        <h1 className="lg:text-4xl text-2xl font-bold flex justify-center">
          What we Value
        </h1>
      </div>
      <div className="mt-10">
        <div className="flex flex-row ">
          <div>
            <img
              className="lg:h-60 lg:w-[600px] h-30 w-180 rounded-md shadow-gray-400  shadow-md"
              src={innovation}
              alt=""
            />
          </div>
          <div className=" lg:ml-10 ml-5 lg:mt-20">
            <h1 className="font-semibold text-base lg:text-2xl">
              Innovation & Excellence
            </h1>
            <p>
              We embrace cutting-edge technologies and uphold the highest
              standards to deliver future-ready, high-performing digital
              solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-5 lg:ml-5">
          <div>
            <img
              className="h-30 w-160 lg:h-60 lg:w-[700px] rounded-md shadow-gray-400  shadow-md"
              src={Ethics}
              alt=""
            />
          </div>
          <div className="lg:ml-10 ml-5 lg:mt-20">
            <h1 className="font-semibold text-base lg:text-2xl">
              Integrity & Trust
            </h1>
            <p>
              We build strong relationships through transparency,
              accountability, and a security-first approach in everything we do.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-5 lg:ml-10">
          <div>
            <img
              className="h-30 w-160 lg:h-60 lg:w-[800px] rounded-md shadow-gray-400  shadow-md"
              src={connection}
              alt=""
            />
          </div>
          <div className="lg:ml-10 ml-5 lg:mt-20">
            <h1 className="font-semibold text-base lg:text-2xl">
              Collaboration & Client Focus
            </h1>
            <p>
              We work closely with our clients, tailoring every solution to meet
              their unique goals and drive meaningful growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
