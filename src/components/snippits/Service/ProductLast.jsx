export default function ProductLast() {
  return (
    <div>
      <section className="w-full bg-gradient-to-r animated-gradient text-white py-16 px-8 text-center shadow-lg">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Ready to Engineer Your Next Big Product?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Turn your vision into reality with innovative, reliable, and
            future-ready product engineering services.
          </p>
          <div className="flex flex-col sm:flex-row  justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-700 font-semibold px-8 py-3 mr-4 rounded-lg shadow-md hover:bg-gray-400 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="#schedule"
              className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-300 transition"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
