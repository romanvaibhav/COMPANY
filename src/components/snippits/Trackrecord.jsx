export default function Trackrecord() {
  return (
    <section className="bg-[#0b1120] text-white py-16 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-blue-300 font-medium mb-4">Our Track Record</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by Hundreds of Businesses{" "}
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Numbers that speak volumes. Our stats reflect your potential for
          success.{" "}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <p className="text-3xl font-bold ">4+</p>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold">30+</p>
            <p className="text-gray-400">Successful Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold">99%</p>
            <p className="text-gray-400">Client Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">25+</p>
            <p className="text-gray-400">Clients Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
