import talkify from "@/assets/talkify.png";
import styleSavvy from "@/assets/styleSavvy.png";
import managerial from "@/assets/FH_Management.png";
import CardPortofolio from "./CardPortofolio";
import RevealOnce from "@/lib/RevealOnce";
import { Element } from "react-scroll";

const Portofolio = () => {
  const projects = [
    {
      projectName: "Talkify",
      projectImage: talkify,
      techStacks: ["React", "SpringBoot", "Websocket", "PostgreSQL"],
    },
    {
      projectName: "StyleSavvy",
      projectImage: styleSavvy,
      techStacks: ["React", "ExpressJS", "MonggoDB"],
    },
    {
      projectName: "FH Managerial",
      projectImage: managerial,
      techStacks: ["NextJS", "PostgreSQL"],
    },
  ];

  return (
    //   <section id="portfolio" className="text-center flex justify-center ">
    //     <div className="containerCustom">
    //       <div className="mb-10 ">
    //         <h3 className="text-base font-bold tracking-widest text-indigo-600 rajdhani uppercase mb-3">
    //           Latest Portfolio
    //         </h3>
    //         <h1 className="text-5xl font-bold rajdhani">
    //           Transforming Ideas into Exceptional
    //         </h1>
    //       </div>
    //       <RevealOnce delay={0.3}>
    //         <div className="grid grid-cols-3 gap-6">
    //           {projects.map((item, index) => (
    //             <CardPortofolio
    //               key={index}
    //               projectName={item.projectName}
    //               projectImage={item.projectImage}
    //               techStacks={item.techStacks}
    //             />
    //           ))}
    //         </div>
    //       </RevealOnce>
    //     </div>
    //   </section>
    <Element name="portfolio">
      <RevealOnce>
        <section id="portfolio" className="text-center flex justify-center ">
          <div className="containerCustom">
            <div className="mb-10 ">
              <h3 className="text-base font-bold tracking-widest text-indigo-600 rajdhani uppercase mb-3">
                Latest Portfolio
              </h3>
              <h1 className="text-5xl font-bold rajdhani">
                Transforming Ideas into Exceptional
              </h1>
            </div>
            <RevealOnce delay={0.3}>
              <div className="grid grid-cols-3 gap-6">
                {projects.map((item, index) => (
                  <CardPortofolio
                    key={index}
                    projectName={item.projectName}
                    projectImage={item.projectImage}
                    techStacks={item.techStacks}
                  />
                ))}
              </div>
            </RevealOnce>
          </div>
        </section>
      </RevealOnce>
    </Element>
  );
};
export default Portofolio;
