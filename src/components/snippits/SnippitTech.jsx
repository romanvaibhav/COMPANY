import { useState } from "react";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaAws,
  FaJava,
  FaCloud,
} from "react-icons/fa";
import { RiTailwindCssLine, RiNextjsLine } from "react-icons/ri";
import {
  SiMui,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiAmazondynamodb,
  SiFirebase,
  SiRedis,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDotnet,
  SiDjango,
  SiSpringboot,
  SiHibernate,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiCloudflare,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiEthereum,
  SiSolana,
  SiBitcoin,
  SiBinance,
  SiPolygon,
  SiCardano,
} from "react-icons/si";

export default function SnippitTech() {
  const [selectedCategory, setSelectedCategory] = useState("Front-End");

  const techStack = {
    "Front-End": [
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={50} /> },
      { name: "CSS", icon: <FaCss3Alt size={50} color="#1572B6" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssLine size={50} color="#38B2AC" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap size={50} color="#7952B3" /> },
      { name: "Material UI", icon: <SiMui size={50} color="#007FFF" /> },
      {
        name: "Javascript",
        icon: <IoLogoJavascript size={50} color="	#F7DF1E" />,
      },
      { name: "Typescript", icon: <SiTypescript size={50} color="	#3178C6" /> },

      { name: "ReactJS", icon: <FaReact size={50} color="#61DAFB" /> },
      { name: "Angular", icon: <FaAngular size={50} color="#DD0031" /> },
      { name: "Next-js", icon: <RiNextjsLine size={50} color="	#000000 " /> },
    ],
    "Back-End": [
      { name: "Node.js", icon: <SiNodedotjs color="#339933" size={50} /> },
      { name: "Express.js", icon: <SiExpress color="#000000" size={50} /> },
      { name: "Python", icon: <SiPython color="#3776AB" size={50} /> },
      { name: "Java", icon: <FaJava color="#007396" size={50} /> },
      { name: "ASP.NET Core", icon: <SiDotnet color="#512BD4" size={50} /> },
      { name: "Django", icon: <SiDjango color="#092E20" size={50} /> },
      { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" size={50} /> },
      { name: "Hibernate", icon: <SiHibernate color="#59666C" size={50} /> },
    ],
    Databases: [
      {
        name: "MySQL",
        icon: <SiMysql size={50} color="#4479A1" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={50} color="#336791" />,
      },
      {
        name: "SQLite",
        icon: <SiSqlite size={50} color="#003B57" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={50} color="#47A248" />,
      },
      {
        name: "DynamoDB",
        icon: <SiAmazondynamodb size={50} color="#4053D6" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase size={50} color="#FFCA28" />,
      },
      {
        name: "Redis",
        icon: <SiRedis size={50} color="#DC382D" />,
      },
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: <FaAws color="#FF9900" size={50} /> },
      {
        name: "Google Cloud",
        icon: <SiGooglecloud color="#4285F4" size={50} />,
      },
      {
        name: "Microsoft Azure",
        icon: <FaCloud color="#0078D4" size={50} />,
      },
      { name: "Docker", icon: <SiDocker color="#2496ED" size={50} /> },
      { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" size={50} /> },
      { name: "Terraform", icon: <SiTerraform color="#7B42BC" size={50} /> },
      { name: "Jenkins", icon: <SiJenkins color="#D24939" size={50} /> },
      { name: "Cloudflare", icon: <SiCloudflare color="#F38020" size={50} /> },
    ],
    Blockchain: [
      { name: "Ethereum", icon: <SiEthereum size={50} color="#3C3C3D" /> },
      { name: "Solana", icon: <SiSolana size={50} color="#14F195" /> },
      { name: "Bitcoin", icon: <SiBitcoin size={50} color="#F7931A" /> },
      {
        name: "Binance Smart Chain",
        icon: <SiBinance size={50} color="#F0B90B" />,
      },
      { name: "Polygon", icon: <SiPolygon size={50} color="#8247E5" /> },
      { name: "Cardano", icon: <SiCardano size={50} color="#0033AD" /> },
    ],
    // You can add more categories like Back-End, Databases, etc.
  };

  return (
    <div className="bg-white p-6 w-85 ml-10 mt-8 lg:ml-20 lg:w-[85rem] rounded-lg  h-full">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold">
          Technologies and Platforms We Work With
        </h1>
        <p className="lg:w-[70rem] lg:text-[18px] mt-6 mb-4">
          Our team is proficient in a variety of programming languages,
          including but not limited to, Angular, ReactJS, Python, Java, and
          JavaScript. We also have expertise in mobile development, we are
          well-versed in iOS, Android, and cross-platform technologies like
          Flutter and React Native.
        </p>
        <p className="lg:text-[18px] lg:w-[70rem] mb-4">
          For cloud services, we work with AWS, Google Cloud, and Microsoft
          Azure, among others. We also specialize in emerging technologies like
          AI, Machine Learning, Blockchain, and IoT, enabling us to provide
          innovative solutions that meet the unique needs of our clients.{" "}
        </p>
        <p className="lg:text-[18px] lg:w-[70rem]">
          No matter your technological needs, we have the skills and experience
          to deliver high-quality, tailor-made solutions.
        </p>
      </div>

      <div className="flex flex-row text-sm lg:gap-7 ml-[-35px] mt-12">
        {Object.keys(techStack).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`font-semibold p-2 w-20 lg:w-40 transition-colors duration-200 border-2
    ${
      selectedCategory === category
        ? "text-black border-b-2 border-gray-500"
        : "text-gray-600 border-b-2 border-transparent hover:border-gray-300"
    }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display selected category */}
      {selectedCategory && (
        <div className="mt-6 grid grid-cols-2 gap-2 lg:grid lg:grid-cols-6 lg:gap-4">
          {techStack[selectedCategory].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col justify-center w-30  lg:w-[200px] items-center  p-2 rounded bg-gray-100 h-35"
            >
              <div>{tech.icon}</div>
              <span className="mt-4">{tech.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
