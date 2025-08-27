import { FaCircle } from "react-icons/fa";
import ButtonCustom from "../button/ButtonCustom";
import CardWrapper from "../card/CardWrapper";
import profile from "@/assets/profile.jpg";
import RevealOnce from "@/lib/RevealOnce";
// test
const Hero = () => {
  const goToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <section id="home" className="flex justify-center mt-[82px]">
      <RevealOnce delay={0.2}>
        <div className="containerCustom flex items-center justify-between gap-20 py-20">
          <div className="flex flex-col flex-1 gap-6 ">
            <div className="w-fit px-6 py-[6px] text-sm justify-start rajdhani font-semibold flex flex-row items-center gap-2 text-left text-indigo-600 bg-white  border-1 border-gray-200  shadow-sm rounded-full  ">
              <FaCircle size={10} className="text-indigo-600 " /> Available for
              project
            </div>
            <div className="text-[54px] font-bold rajdhani leading-[120%]  text-[#212529]">
              {" "}
              <h1>Build a Professional Website Without Technical Hassles</h1>
              {/* <h1>Bangun Website Profesional Tanpa Pusing Teknis</h1> */}
            </div>
            <div className="mb-2 text-base text-gray-400 rubik">
              {/* Dari landing page sederhana hingga sistem web kompleks, saya
              membantu bisnis Anda hadir online dengan desain modern, performa
              cepat, dan mudah dikelola. */}
              Whether it’s a sleek landing page or a complex web platform, I
              help your business stand out online with stunning design, high
              speed, and easy-to-manage solutions.
            </div>
            <div className="inline-flex gap-4 rubik">
              <div className="min-w-[180px] h-[60px] ">
                <ButtonCustom
                  labelBtn="View My Project"
                  functionBtn={goToPortfolio}
                  colorBtn="bg-indigo-600 "
                />
              </div>
              <div className="min-w-[180px]">
                <ButtonCustom
                  labelBtn="Contact Me"
                  functionBtn={() => {}}
                  colorBtn="bg-white hover:text-white text-indigo-600 border-1 border-indigo-500 hover:bg-indigo-500"
                />
              </div>
            </div>
            <div className="inline-flex"></div>
          </div>
          <div className="w-[500px]">
            <div className="h-[600px] ">
              <CardWrapper paddingX="20px" paddingY="20px">
                <div className="relative w-full h-full ">
                  <div className="absolute w-full h-full rounded-md bg-gradient-to-r from-transparent to-black/90 "></div>
                  <img
                    src={profile}
                    className="object-cover w-full h-full rounded-md object-[center_65%] "
                    alt=""
                  />
                </div>
              </CardWrapper>
            </div>
          </div>
        </div>
      </RevealOnce>
    </section>
  );
};

export default Hero;
