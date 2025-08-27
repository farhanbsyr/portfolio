import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiSpring,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import StayMotion from "@/lib/StayMotion";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: TbBrandNextjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Express.js", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpring },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
];

const Skills = () => {
  const [embaRef] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [
      Autoplay({
        delay: 2000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div id="skills" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className=" text-center mb-4 flex items-center justify-center gap-4">
          <div className="bg-gray-400 h-[1px] w-50"></div>
          <h2 className="text-base text-white ">
            Technology <span className="text-indigo-600">Stack</span> That
            Powers My Work
          </h2>
          <div className="bg-gray-400 h-[1px] w-50"></div>
        </div>

        <StayMotion delay={0.2}>
          <div
            className="embla overflow-hidden mx-auto max-w-3xl"
            ref={embaRef}
          >
            <div className="embla__container  flex -mx-3 ">
              {skills.map(({ name, icon: Icon }, index) => (
                <div
                  key={index}
                  className="
                  embla__slide shrink-0 px-3
                "
                >
                  <div className="rounded-xl inline-flex items-center gap-2 transition whitespace-nowrap">
                    <Icon size={40} className="text-slate-300" />
                    <span className="font-bold text-2xl text-slate-300">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </StayMotion>
      </div>
    </div>
  );
};

export default Skills;

{
  /* <div className="flex flex-row gap-6 embla" ref={emblaRef}>
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="bg-white shadow-sm rounded-xl inline-flex  items-center p-6 hover:shadow-md transition"
            >
              <Icon size={48} className="text-indigo-500" />
              <span className="mt-3 font-medium text-gray-800">{name}</span>
            </div>
          ))}
        </div> */
}
