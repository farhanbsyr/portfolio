import { FaReact, FaServer } from "react-icons/fa";
import CardService from "./CardService";
import { FiLayers, FiUsers } from "react-icons/fi";
import CardWrapper from "../card/CardWrapper";
import RevealOnce from "@/lib/RevealOnce";
import { Element } from "react-scroll";

const Services = () => {
  const listCardService = [
    {
      title: "Web Application Development",
      paragraf:
        "I create fast, responsive, and modern web applications using React and Next.js, ensuring your product looks great on any device.",
      icon: FaReact,
    },
    {
      title: "Backend API & Database",
      paragraf:
        "I design and develop secure REST APIs and integrate databases like PostgreSQL and MongoDB for reliable and scalable backend systems.",
      icon: FaServer,
    },
    {
      title: "UI/UX Implementation",
      paragraf:
        "I bring designs to life with clean code, attention to detail, and a strong focus on usability and smooth user experience.",
      icon: FiLayers,
    },
    {
      title: "Requirement Analysis & Technical Planning",
      paragraf:
        "Conduct requirement analysis, define technical specifications, and create structured development plans that align with project goals.",
      icon: FiUsers,
    },
  ];

  return (
    <Element name="service" id="service">
      <RevealOnce delay={0.2}>
        <section id="service" className="flex justify-center text-center">
          <div className="containerCustom">
            <div className="mb-10 font-semibold">
              <h3 className="text-base text-indigo-600 rajdhani font-bold tracking-widest">
                What I Do
              </h3>
              <h1 className="text-5xl rajdhani font-bold">
                What I Provide For You
              </h1>
            </div>
            <div className="grid grid-cols-4 gap-6 ">
              {listCardService.map((card, index) => (
                <RevealOnce delay={0.2 + (index / 10) * 2} key={card.title}>
                  <CardWrapper key={card.title} paddingX="30px" paddingY="30px">
                    <CardService
                      title={card.title}
                      paragraf={card.paragraf}
                      Icon={card.icon}
                    />
                  </CardWrapper>
                </RevealOnce>
              ))}
            </div>
          </div>
        </section>
      </RevealOnce>
    </Element>
  );
};

export default Services;
