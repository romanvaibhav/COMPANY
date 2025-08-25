import { useState } from "react";
import AiPartnerSection from "./AiPartnerSection";
import Techscroll from "./Techscroll";
export default function Timeline() {
  const steps = [
    {
      title: "Data-Driven Decision Making",
      description:
        "We harness data from diverse sources, leveraging AI to unlock insights that guide smarter business decisions.",
    },
    {
      title: "Search Algorithms & Optimization",
      description:
        "Our tech stack includes custom algorithms built for precision, efficiency, and performance optimization.",
    },
    {
      title: "Code That Performs",
      description:
        "We use modern programming frameworks and tools to build resilient systems designed for scalability, speed, and seamless integration with applications.",
    },
    {
      title: "Cybersecurity Protocols",
      description:
        "We implement security protocols to protect systems, ensure compliance, and mitigate risks from evolving threats.",
    },
    {
      title: "AI & Automation",
      description:
        "We build custom AI solutions to automate workflows, drive intelligent decision-making, and unlock new efficiencies.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-auto lg:h-[160vh] px-10 py-10 bg-black ">
      <AiPartnerSection />

      <div className="w-[80vw] h-[auto]] flex flex-col justify-center ml-[2vw] lg:ml-[7vw] mt-[7vh]">
        <div className="w-full flex justify-center lg:justify-end">
          <p className="lg:text-[2vw] text-lg text-white font-semibold w-60 lg:w-[40vw] mb-[10vh]">
            Pioneering{" "}
            <span className="text-blue-500">digital transformation </span>, we
            leverage cutting-edge technology, & intelligent strategy to build
            future-ready digital solution.
          </p>
        </div>
        {/* Timeline line */}
        <div className="flex ml-[-5vw] items-center relative">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white"></div>
          {steps.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative z-10 flex flex-col items-center cursor-pointer"
              style={{ flex: 1 }}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  activeIndex === index
                    ? "bg-blue-500 border-blue-800"
                    : "bg-white border-gray-400"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="mt-8 flex flex-col lg:flex-row lg:justify-between items-center ml-[-29vw] lg:ml-[0]">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="w-1/5 text-center cursor-pointer"
            >
              <h3
                className={`text-lg w-[50vw] lg:w-[auto]  ${
                  activeIndex === index
                    ? "font-bold text-blue-500"
                    : "font-normal text-white"
                }`}
              >
                {step.title}
              </h3>
              <p className="text-sm text-white mt-2 w-[50vw] lg:w-[auto] mb-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Techscroll />
    </div>
  );
}
