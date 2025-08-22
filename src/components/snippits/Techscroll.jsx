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
function Techscroll() {
  const [tech, setTech] = useState();
  const techs = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={60} /> },
    { name: "CSS", icon: <FaCss3Alt size={60} color="#1572B6" /> },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssLine size={60} color="#38B2AC" />,
    },
    { name: "Bootstrap", icon: <FaBootstrap size={60} color="#7952B3" /> },
    { name: "Material UI", icon: <SiMui size={60} color="#007FFF" /> },
    {
      name: "Javascript",
      icon: <IoLogoJavascript size={60} color="	#F7DF1E" />,
    },
    { name: "Typescript", icon: <SiTypescript size={60} color="	#3178C6" /> },

    { name: "ReactJS", icon: <FaReact size={60} color="#61DAFB" /> },
    { name: "Angular", icon: <FaAngular size={60} color="#DD0031" /> },
    { name: "Next-js", icon: <RiNextjsLine size={60} color="	#000000 " /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" size={60} /> },
    { name: "Express.js", icon: <SiExpress color="#000000" size={60} /> },
    { name: "Python", icon: <SiPython color="#3776AB" size={60} /> },
    { name: "Java", icon: <FaJava color="#007396" size={60} /> },
    { name: "ASP.NET Core", icon: <SiDotnet color="#512BD4" size={60} /> },
    { name: "Django", icon: <SiDjango color="#092E20" size={60} /> },
    { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" size={60} /> },
    { name: "Hibernate", icon: <SiHibernate color="#59666C" size={60} /> },
    {
      name: "MySQL",
      icon: <SiMysql size={60} color="#4479A1" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={60} color="#336791" />,
    },
    {
      name: "SQLite",
      icon: <SiSqlite size={60} color="#003B57" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={60} color="#47A248" />,
    },
    {
      name: "DynamoDB",
      icon: <SiAmazondynamodb size={60} color="#4053D6" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={60} color="#FFCA28" />,
    },
    {
      name: "Redis",
      icon: <SiRedis size={60} color="#DC382D" />,
    },
    { name: "AWS", icon: <FaAws color="#FF9900" size={60} /> },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud color="#4285F4" size={60} />,
    },
    {
      name: "Microsoft Azure",
      icon: <FaCloud color="#0078D4" size={60} />,
    },
    { name: "Docker", icon: <SiDocker color="#2496ED" size={60} /> },
    { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" size={60} /> },
    { name: "Terraform", icon: <SiTerraform color="#7B42BC" size={60} /> },
    { name: "Jenkins", icon: <SiJenkins color="#D24939" size={60} /> },
    { name: "Cloudflare", icon: <SiCloudflare color="#F38020" size={60} /> },
    { name: "Ethereum", icon: <SiEthereum size={60} color="#3C3C3D" /> },
    { name: "Solana", icon: <SiSolana size={60} color="#14F195" /> },
    { name: "Bitcoin", icon: <SiBitcoin size={60} color="#F7931A" /> },
    {
      name: "Binance Smart Chain",
      icon: <SiBinance size={60} color="#F0B90B" />,
    },
    { name: "Polygon", icon: <SiPolygon size={60} color="#8247E5" /> },
    { name: "Cardano", icon: <SiCardano size={60} color="#0033AD" /> },
  ];
  return (
    <div>
      <section
        className="w-full overflow-hidden flex gap-16 p-8 select-none"
        aria-label="Technology skills carousel"
      >
        <ul
          className="flex flex-shrink-0 justify-around min-w-full gap-16 animate-scroll list-none p-0 m-0"
          role="list"
        >
          {techs.map((item) => (
            <li>{item.icon}</li>
          ))}
        </ul>
        <ul
          className="flex flex-shrink-0 justify-around min-w-full gap-16 animate-scroll list-none p-0 m-0"
          aria-hidden="true"
          role="presentation"
        >
          {techs.map((item) => (
            <li>{item.icon}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default Techscroll;
