import { MdCloudDone } from "react-icons/md";
import { RiCloudyFill } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { BsCloudsFill } from "react-icons/bs";

export default function CloudService() {
  return (
    <div className="ml-[10vw] mt-[12vh]">
      <div>
        <p className="text-4xl font-bold">Cloud and DevOps Services</p>
        <p className="w-[80vw] lg:w-[60vw] text-lg mt-[2vh] text-gray-700">
          Web-Blocks is recognized as a leading DevOps and Cloud consulting
          partner. Leveraging modern technologies and advanced product
          engineering practices, we accelerate digital transformation and drive
          business growth.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 w-[80vw] mt-[5vh]">
        <div className="w-[80vw] lg:w-[40vw] h-[20vh]   py-4">
          <p className="text-lg flex font-semibold">
            <span className="mr-3 mt-1">
              {" "}
              <RiCloudyFill />
            </span>
            Cloud Consulting
          </p>
          <hr />
          <p className="text-gray-600 mt-3">
            We assess your business needs and recommend the best cloud platform.
            Create a strategic roadmap for smooth adoption and future growth.
            Ensure alignment with your goals and technology strategy.
          </p>
        </div>
        <div className="w-[80vw] lg:w-[40vw] h-[20vh]   py-4">
          <p className="text-lg flex font-semibold">
            {" "}
            <span className="mr-3 mt-1">
              <FaCloudUploadAlt />
            </span>
            Cloud Migration
          </p>
          <hr />
          <p className="text-gray-600 mt-3">
            Seamlessly move your systems from on-premises to the cloud. Maintain
            data integrity, security, and minimal downtime during migration.
            Enable your team to adopt cloud solutions quickly and efficiently.
          </p>
        </div>

        <div className="w-[80vw] lg:w-[40vw] h-[20vh]   py-4">
          <p className="text-lg flex font-semibold">
            <span className="mr-3 mt-1">
              <FaTachometerAlt />
            </span>
            Cloud Optimization
          </p>
          <hr />
          <p className="text-gray-600 mt-3">
            Improve your cloud performance and operational efficiency. Reduce
            costs while scaling resources based on demand. Ensure your cloud
            environment is agile, reliable, and future-ready.
          </p>
        </div>

        <div className="w-[80vw] lg:w-[40vw] h-[20vh]  py-4">
          <p className="text-lg flex font-semibold">
            <span className="mr-3 mt-1">
              <MdCloudDone />
            </span>
            Cloud Security
          </p>
          <hr />
          <p className="text-gray-600 mt-3">
            Protect sensitive data with advanced security measures. Ensure
            compliance with industry standards and regulations. Safeguard
            against threats while maintaining uninterrupted operations.
          </p>
        </div>

        <div className="w-[80vw] lg:w-[40vw] h-[20vh]  py-4">
          <p className="text-lg flex font-semibold">
            <span className="mr-3 mt-1">
              <BsCloudsFill />
            </span>
            Multi-Cloud & Hybrid Solutions
          </p>
          <hr />
          <p className="text-gray-600 mt-3">
            Design flexible cloud architectures that suit your business model.
            Combine multiple cloud platforms for optimal performance and
            reliability. Enable seamless collaboration across different cloud
            environments.
          </p>
        </div>
      </div>
    </div>
  );
}
