import {
  FaBusinessTime,
  FaHandshake,
  FaDatabase,
  FaProjectDiagram,
  FaServer,
  FaRunning,
  FaSyncAlt,
} from "react-icons/fa";
import {
  RiShieldFlashLine,
  RiArrowUpLine,
  RiRefreshLine,
} from "react-icons/ri";
export default function WhyChooseWebCloud() {
  return (
    <div className="ml-[10vw] mt-[15vh] flex flex-col">
      <div className="w-[80vw] lg:w-[40vw]">
        <p className="text-4xl font-bold ">
          Why Choose Web Blocks for Cloud and DevOps Solution
        </p>
        <p className="text-gray-700 font-semibold mt-[3vh]">
          DevOps consulting services at Web Blocks comprise full lifecycle
          development. You can get your organization better ROI and results with
          our Cloud and DevOps solutions. We believe in:
        </p>
      </div>
      <div className=" grid lg:grid-cols-2 gap-0 w-[80vw] mt-[6vh]">
        <div className="w-[80vw] lg:w-[40vw] h-[30vh] border-1  bg-orange-50  group hover:shadow-lg transition border-gray-200 rounded-md ">
          <div className="py-4 px-4  rounded-md font-semibold group-hover:text-orange-500">
            <p>
              {" "}
              <span>
                <FaHandshake className="text-4xl mb-2 text-blue-500" />
              </span>
              Business-Centric Approch
            </p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              The process begins by signing a non-disclosure agreement to make
              sure all your crucial business information stays confidential.
              This information may related to the idea, vision, technologies
              used, or architecture.
            </p>
          </div>
        </div>
        <div className="w-[80vw] lg:w-[40vw] h-[30vh] border-1  group hover:shadow-lg transition bg-orange-50 border-gray-200 rounded-md ">
          <div className="py-4 px-4  rounded-md group-hover:text-orange-500 font-semibold">
            <p>
              <span>
                <RiShieldFlashLine className="text-3xl mb-2 text-red-500" />
              </span>
              Intelligent Disaster Recovery Mechanism
            </p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              The process begins by signing a non-disclosure agreement to make
              sure all your crucial business information stays confidential.
              This information may related to the idea, vision, technologies
              used, or architecture.
            </p>
          </div>
        </div>
        <div className="w-[80vw] lg:w-[40vw] h-[30vh] border-1  group hover:shadow-lg transition bg-orange-50 border-gray-200 rounded-md ">
          <div className="py-4 px-4  rounded-md group-hover:text-orange-500 font-semibold">
            <p>
              <span>
                <FaProjectDiagram className="text-3xl mb-2 text-green-500" />
              </span>
              Scalable Solution
            </p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              The process begins by signing a non-disclosure agreement to make
              sure all your crucial business information stays confidential.
              This information may related to the idea, vision, technologies
              used, or architecture.
            </p>
          </div>
        </div>
        <div className="w-[80vw] lg:w-[40vw] h-[30vh] border-1  group hover:shadow-lg transition bg-orange-50 border-gray-200 rounded-md ">
          <div className="py-4 px-4  rounded-md group-hover:text-orange-500 font-semibold">
            <p>
              <span>
                <FaSyncAlt className="text-3xl mb-2 text-purple-500" />
              </span>
              Agile Methodology
            </p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              The process begins by signing a non-disclosure agreement to make
              sure all your crucial business information stays confidential.
              This information may related to the idea, vision, technologies
              used, or architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
