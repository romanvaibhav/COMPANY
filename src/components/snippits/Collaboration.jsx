export default function Collaboration() {
  return (
    <div className="w-full h-[auto]">
      <div className="ml-[10vw] pb-[15vh] mt-[15vh]">
        <div>
          <p className="text-4xl font-bold">How We Collaborate with You</p>
          <p className="text-lg mt-[2vh] text-gray-600 font-semibold">
            Collaboration is the core of any relationship and we believe in
            long-term relationship building.
            <br /> Therefore, we keep it seamless and simple.
          </p>
        </div>
        <div className=" grid lg:grid-cols-2 gap-9 w-[76vw] mt-[6vh]">
          <div className="w-[80vw] lg:w-[37vw] h-[26vh] border-1 border-gray-500 rounded-md bg-white">
            <div className="py-4 px-2 bg-gray-100 rounded-md font-semibold">
              <p>NDA for Confidentiality</p>
            </div>
            <hr />
            <div className="px-4 py-4 text-gray-600">
              <p>
                The process begins by signing a non-disclosure agreement to make
                sure all your crucial business information stays confidential.
                This information may related to the idea, vision, technologies
                used, or architecture.
              </p>
            </div>
          </div>
          <div className="w-[80vw] lg:w-[37vw] h-[28vh] lg:h-[26vh] border-1 border-gray-500 rounded-md bg-white">
            <div className="py-4 px-2 bg-gray-100 rounded-md font-semibold">
              <p>Discussion with Technical Team</p>
            </div>
            <hr />
            <div className="px-4 py-4 text-gray-600">
              <p>
                At this stage, we set a meeting between you and the CTO or BA to
                gather all your requirements or challenges and understand your
                idea in detail. This helps create a process that is efficient
                and plan for your product and is cost-effective in all ways
                possible.
              </p>
            </div>
          </div>

          <div className="w-[80vw] lg:w-[37vw] h-[26vh] border-1 border-gray-500 rounded-md bg-white">
            <div className="py-4 px-2 bg-gray-100 rounded-md font-semibold">
              <p>Meeting the Development Team</p>
            </div>
            <hr />
            <div className="px-4 py-4 text-gray-600">
              <p>
                To become familiar with our product engineers, we keep your
                discussions with them. In this meeting, you can understand their
                expertise and ask them questions around the product, work
                approach, or other related questions.
              </p>
            </div>
          </div>
          <div className="w-[80vw] lg:w-[37vw] h-[26vh] border-1 border-gray-500 rounded-md bg-white">
            <div className="py-4 px-2 bg-gray-100 rounded-md font-semibold">
              <p>Initiating the Project</p>
            </div>
            <hr />
            <div className="px-4 py-4 text-gray-600">
              <p>
                Once all the above requirements are fulfilled, our technical
                team and product engineers are ready to initiate the process and
                begin the project. The date is generally fixed by both the
                parties on a mutual agreement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
