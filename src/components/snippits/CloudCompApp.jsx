import { FaCheckCircle } from "react-icons/fa";

export default function CloudCompApproch() {
  return (
    <div className="ml-15 lg:ml-[10vw] flex lg:flex-row flex-col mt-[15vh]">
      <div>
        <p className="text-3xl w-[80vw] lg:w-[20vw] lg:text-4xl font-bold">
          Approach to Your DevOps Consulting
        </p>
        <p className="w-[80vw] lg:w-[20vw] mt-[3vh] lg:mt-[5vh] text-gray-700 font-semibold text-lg">
          From pipeline automation to cloud-native ops, we engineer flow that
          reduces lead time and errors. Expect rapid time-to-market, predictable
          delivery, and lean operating costs.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-1 w-[60vw] h-auto lg:h-[80vh] lg:ml-[2vw]">
        <div className="w-[75vw] mt-5 lg:mt-0 lg:w-[28vw] h-[26vh] rounded-md ">
          <div className="py-0 px-2 ml-2 flex font-semibold rounded-md">
            <FaCheckCircle className="text-orange-500 ml-[-25px] mr-2 text-xl" />
            <p>Strategy-Based Consulting </p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              After analyzing the loopholes and obstacles, we prepare the best
              strategies to overcome the loopholes. We also try to identify the
              pain points and only after that implement the strategies. We make
              use of various tools and software to bring the best results.
            </p>
          </div>
        </div>
        <div className="w-[75vw] mt-5 lg:mt-0 lg:w-[28vw] h-[26vh] rounded-md ">
          <div className="py-0 ml-2 flex px-2 font-semibold rounded-md">
            <FaCheckCircle className="text-orange-500 ml-[-25px] mr-2 text-xl" />
            <p>Continuous Integration</p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              We utilize best practices to develop the authorized codes
              permitting multiple resources to operate on the same source code.
              Continuous Integration or CI builds a highly detailed architecture
              through continuous and steady efforts and collaboration.
            </p>
          </div>
        </div>
        <div className="w-[75vw] mt-5 lg:mt-0 lg:w-[28vw] h-[26vh]  rounded-md ">
          <div className="py-0 px-2 flex font-semibold rounded-md">
            <FaCheckCircle className="text-orange-500 ml-[-25px] mr-2 text-xl" />
            <p>Continuous Delivery (CD)</p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              Our experts prepare for testing and release of automatic code
              changes. These automation in the operations boosts the risk
              identification process which leads to better efficiency,
              problem-solving, and enhanced speed.
            </p>
          </div>
        </div>
        <div className="w-[75vw] mt-5 lg:mt-0 lg:w-[28vw] h-[26vh]  rounded-md ">
          <div className="py-0 px-2 flex  font-semibold rounded-md">
            <FaCheckCircle className="text-orange-500 ml-[-25px] mr-2 text-xl" />
            <p>Build Automation</p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              Our team combines Dev and Ops to strengthen development with
              automated builds and flawless communication. This approach will
              allow early bug detection and effective cloud management due to
              the integrated and lightweight architecture.
            </p>
          </div>
        </div>
        <div className="w-[75vw] mt-5 lg:mt-0 lg:w-[28vw] mt-4 h-[26vh] rounded-md ">
          <div className="py-0 px-2 flex font-semibold rounded-md">
            <FaCheckCircle className="text-orange-500 ml-[-25px] mr-2 text-xl" />
            <p>Test Automation</p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              Our testing strategy is an extensive approach that integrates
              modern tools for automated and manual testing. This identifies and
              solves substantial problems like performance roadblocks and
              availability issues and availability concerns before the
              application goes live.
            </p>
          </div>
        </div>
        <div className="w-[75vw] mt-5 lg:mt-0 lg:w-[28vw] h-[26vh] mt-4  rounded-md ">
          <div className="py-0 px-2 flex font-semibold rounded-md">
            <FaCheckCircle className="text-orange-500 ml-[-25px] mr-2 text-xl" />
            <p>Continous Maintenance</p>
          </div>
          <div className="px-4 py-4 text-gray-600">
            <p>
              Persistent monitoring across the application, infrastructure, and
              APIs leads to fewer problems arising. This real-time data
              identifies and addresses the issues before they ruin the user
              experience. Continuous feedback mechanisms also ensure functional
              correctness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
