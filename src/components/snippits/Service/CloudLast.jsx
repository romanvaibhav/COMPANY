export default function CloudLast() {
  return (
    <div>
      <section className="w-full bg-gradient-to-r animated-gradient text-white py-16 px-8 text-center shadow-lg">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform with Cloud & DevOps?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Accelerate innovation and efficiency with secure, scalable, and
            automated Cloud & DevOps solutions tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row  justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-700 font-semibold px-8 py-3 mr-4 rounded-lg shadow-md hover:bg-gray-400 transition"
            >
              Get a Free Quote
            </a>
           <button
              onClick={() =>
                window.open(
                  "https://calendly.com/vaibhavroman2022/30min",
                  "_blank"
                )
              }
              href="#schedule"
              className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-300 transition"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
