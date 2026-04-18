import { FaCircle } from "react-icons/fa";
import ButtonCustom from "../button/ButtonCustom";
import CardWrapper from "../card/CardWrapper";
import profile from "@/assets/profile_farhan.jpg";
import RevealOnce from "@/lib/RevealOnce";

const Hero = () => {
  const goToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <section id="home" className=" mt-[82px]">
      <RevealOnce delay={0.2}>
        <div className="containerCustom flex flex-col lg:flex-row items-center justify-between lg:gap-20 md:gap-12 sm:gap-10 gap-8">
          <div className="flex flex-col flex-1 lg:gap-6  sm:gap-4 gap-3">
            <div className="md:px-6 px-4 w-fit md:py-[6px] py-[4px] text-[12px] sm:text-[13px] md:text-sm justify-start rajdhani font-semibold inline-flex items-center gap-2 text-left text-indigo-600 bg-white  border-1 border-gray-200  shadow-sm rounded-full  ">
              <FaCircle size={10} className="text-indigo-600 " />
              <p className="">Available for project</p>
            </div>
            <div className="md:text-[54px] sm:text-[46px] text-[32px] font-bold rajdhani leading-[120%]  text-[#212529]">
              <h1 className=" md:hidden lg:block ">
                Build a Professional Website Without Technical Hassles
              </h1>
              <h1 className="lg:hidden md:block sm:hidden hidden">
                Build a <br />
                Professional Website <br />
                Without Technical Hassles
              </h1>
              {/* <h1>Bangun Website Profesional Tanpa Pusing Teknis</h1> */}
            </div>
            <div className="mb-2 md:text-base text-sm text-gray-400 rubik">
              {/* Dari landing page sederhana hingga sistem web kompleks, saya
              membantu bisnis Anda hadir online dengan desain modern, performa
              cepat, dan mudah dikelola. */}
              Whether it’s a sleek landing page or a complex web platform, I
              help your business stand out online with stunning design, high
              speed, and easy-to-manage solutions.
            </div>
            <div className="inline-flex gap-4 rubik">
              <div className="min-w-[160px] lg:h-[60px] sm:h-[50px] h-[40px] ">
                <ButtonCustom
                  labelBtn="View My Project"
                  functionBtn={goToPortfolio}
                  colorBtn="bg-indigo-600 "
                />
              </div>
              <div className="min-w-[180px]">
                <a href="https://wa.me/6287852433015" target="_blank">
                  <ButtonCustom
                    labelBtn="Contact Me"
                    functionBtn={() => {}}
                    colorBtn="bg-white hover:text-white text-indigo-600 border-1 border-indigo-500 hover:bg-indigo-500"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[500px] w-full ">
            <div className="lg:h-[600px] md:h-[700px] sm:h-[500px] h-[100vw]   ">
              <CardWrapper paddingX="20px" paddingY="20px">
                <div className="relative w-full h-full">
                  <div className="absolute w-full h-full  rounded-md bg-gradient-to-r from-transparent to-black/90 "></div>
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
