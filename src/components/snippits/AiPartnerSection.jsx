const AiPartnerSection = () => {
  return (
    <section className="w-full py-16 mt-[-2vh] bg-black flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-white text-center">
        Your AI Transformation Partner
      </h2>
      <p className="mt-4 text-white text-center max-w-2xl">
        Intelligent automation, data-driven strategies, and next-gen
        experiences.
      </p>

      {/* Cards Container */}
      <div className="mt-12 flex flex-col md:flex-row gap-6 w-[90%] md:w-[80%]">
        {/* Card 1 */}
        <div
          className="flex-1 
    bg-gradient-to-br from-indigo-300 to-purple-400 
    hover:bg-gradient-to-br hover:from-indigo-200 hover:to-purple-500 
    p-6 rounded-2xl shadow-sm 
    transform transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3">
            <span className="text-purple-500 text-2xl">🔄</span>
            <h3 className="font-bold text-lg">AI-powered delivery loops</h3>
          </div>
          <p className="mt-3 text-gray-600 text-sm">
            Emphasizes continuous integration of AI throughout the software
            lifecycle.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="flex-1 
    bg-gradient-to-br from-blue-400 to-cyan-300 
    hover:bg-gradient-to-br hover:from-blue-200 hover:to-cyan-500 
    p-6 rounded-2xl shadow-sm 
    transform transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-2xl">🧠</span>
            <h3 className="font-bold text-lg">Human logic, machine speed</h3>
          </div>
          <p className="mt-3 text-gray-600 text-sm">
            Captures your philosophy of blending engineering expertise with AI
            agents.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="flex-1 
    bg-gradient-to-br from-purple-400 to-indigo-300 
    hover:bg-gradient-to-br hover:from-purple-500 hover:to-indigo-200 
    p-6 rounded-2xl shadow-sm 
    transform transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3">
            <span className="text-purple-500 text-2xl">📊</span>
            <h3 className="font-bold text-lg">
              Structured workflows, intelligent outcomes
            </h3>
          </div>
          <p className="mt-3 text-gray-600 text-sm">
            Reinforces your value of disciplined development assisted by AI
            automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiPartnerSection;
