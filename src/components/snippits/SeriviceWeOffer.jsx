import Aiinte from "./AiInte";

export default function ServicesweSection() {
  const services = [
    {
      icon: "",
      title: "UI/UX Design",
      description:
        "Ideate, architect and implement custom AI strategies for your unique business goals.",
      bg: "bg-white",
    },
    {
      icon: "",
      title: "Product Engineering",
      description:
        "Design and deploy generative AI products that delight users and drive competitive edge.",
      bg: "bg-white",
    },
    {
      icon: "",
      title: "SAAS App Development",
      description:
        "Tailored AI, NLP, computer vision, and analytics solutions for your business needs.",
      bg: "bg-white",
    },
    {
      icon: "",
      title: "Cloud & DevOps Solutions",
      description:
        "AI-assisted legacy upgrades for scalable, future-ready tech systems.",
      bg: "bg-white",
    },
    {
      icon: "",
      title: "Gen AI Integration",
      description:
        "Seamlessly integrate AI into existing systems for enhanced efficiency.",
      bg: "bg-white", // highlighted one
    },
    {
      icon: "",
      title: "Blockchain Intergration",
      description:
        "Streamline ML pipelines and scale AI with robust MLOps practices.",
      bg: "bg-white",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-white h-[auto] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Services We Offer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`${service.bg} shadow-lg rounded-xl p-6 flex flex-col items-start text-left transition-transform hover:scale-105 hover:bg-gradient-to-b from-blue-100 via-purple-100 to-blue-50`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <Aiinte />
      </div>
    </section>
  );
}
