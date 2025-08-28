import SnippitWhatWeValue from "../snippits/SnippitWhatWeValue";
import Techscroll from "../snippits/Techscroll";
function Engagement() {
  return (
    <div>
      <div className="w-[100vw] mt-[5vh] bg-gradient-to-br from-white to-blue-100">
        <div className=" ml-[-1.5vw] flex justify-center items-center flex-col">
          <h1 className="lg:text-4xl text-2xl font-bold mt-[5vh]">
            Engagement Model
          </h1>
          <div className="lg:flex  lg:mt-[6vh]">
            <div className="lg:w-[26vw] lg:h-[44vh] lg:ml-[2vw] w-86 h-60 rounded-se-2xl shadow-2xl shadow-gray-400 hover:bg-gradient-to-br from-blue-100 to-purple-200">
              <div className="mt-[5vh]">
                <p className="lg:w-[24vw] pt-5 text-xl lg:text-2xl font-semibold pl-[4vw]">
                  Outsourced Product Development
                </p>
                <p className="lg:pl-[2vw]  pl-4 mt-3">
                  End-to-end AI product development from ideation to deployment
                  and maintenance.
                </p>
                <ul className="list-disc mt-3  marker:text-black marker:text-2xl pl-10 lg:pl-[4vw]">
                  <li>Complete project ownership</li>
                  <li>Dedicated cross-functional team</li>
                  <li>Fixed or flexible pricing options</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[26vw] lg:h-[44vh] w-86 h-60 lg:ml-[2vw] rounded-se-2xl shadow-2xl shadow-gray-400 hover:bg-gradient-to-br from-blue-100 to-purple-200">
              <div className="mt-[5vh]">
                <p className="lg:w-[17vw] pt-5 text-xl lg:text-2xl font-semibold pl-[4vw]">
                  Extended Engineering Team
                </p>
                <p className="lg:pl-[2vw] pl-4 mt-3">
                  Augment your team with our AI specialists working as an
                  extension of your organization.
                </p>
                <ul className="list-disc mt-3 marker:text-black marker:text-2xl pl-10 lg:pl-[4vw]">
                  <li>Seamless collaboration</li>
                  <li>Shared project management</li>
                  <li>Transparent monthly billing</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[26vw] lg:h-[44vh] w-86 h-60 lg:ml-[2vw] rounded-se-2xl  shadow-2xl shadow-gray-400 hover:bg-gradient-to-br from-blue-100 to-purple-200">
              <div className="mt-[5vh]">
                <p
                  className="lg:w-[10vw] pt-5
                
                text-xl lg:text-2xl font-semibold pl-[4vw]"
                >
                  Staff Augmentation
                </p>
                <p className="lg:pl-[2vw] pl-4 mt-3">
                  Individual AI specialists who integrate directly into your
                  existing team structure.
                </p>
                <ul className="list-disc mt-3 marker:text-black marker:text-2xl pl-10 lg:pl-[4vw]">
                  <li>Flexible resource scaling</li>
                  <li>Your management and workflows</li>
                  <li>Hourly or monthly billing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <SnippitWhatWeValue />
        <Techscroll />
      </div>
    </div>
  );
}
export default Engagement;
