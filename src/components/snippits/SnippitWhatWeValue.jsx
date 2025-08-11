import innovation from "../../assets/istockphoto-1285957020-612x612.jpg";
import Ethics from "../../assets/ethics-honesty-integrity-respect-gears-260nw-2527567239.png";
import connection from "../../assets/Rectangle 31-CaxH85gR.webp";
export default function SnippitWhatWeValue() {
  return (
    <div className="w-[85rem] ml-20 mt-10">
      <div>
        <h1 className="text-4xl font-bold flex justify-center">
          What we Value
        </h1>
      </div>
      <div className="mt-10">
        <div className="flex flex-row ">
          <div>
            <img
              className="h-60 w-[600px] rounded-md shadow-gray-400  shadow-md"
              src={innovation}
              alt=""
            />
          </div>
          <div className="ml-10 mt-20">
            <h1 className="font-semibold text-2xl">Innovation & Excellence</h1>
            <p>
              We embrace cutting-edge technologies and uphold the highest
              standards to deliver future-ready, high-performing digital
              solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-5 ml-5">
          <div>
            <img
              className="h-60 w-[700px] rounded-md shadow-gray-400  shadow-md"
              src={Ethics}
              alt=""
            />
          </div>
          <div className="ml-10 mt-20">
            <h1 className="font-semibold text-2xl">Integrity & Trust</h1>
            <p>
              We build strong relationships through transparency,
              accountability, and a security-first approach in everything we do.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-5 ml-10">
          <div>
            <img
              className="h-60 w-[800px] rounded-md shadow-gray-400  shadow-md"
              src={connection}
              alt=""
            />
          </div>
          <div className="ml-10 mt-20">
            <h1 className="font-semibold text-2xl">
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
