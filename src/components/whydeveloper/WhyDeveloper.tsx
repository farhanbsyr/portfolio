import CardWrapper from "../card/CardWrapper";
import coding from "@/assets/coding2.jpg";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import CardSubReasoning from "./CardSubReasoning";
import RevealOnce from "@/lib/RevealOnce";
import { Element } from "react-scroll";

const Portofolio = () => {
  const cardSub = [
    {
      subTitle: "Strategy Design",
      desc: "Designs are developed with clear direction to achieve goals, not just for visual appeal.",
      // desc: "Desain dikembangkan secara terarah untuk mencapai target, bukan sekadar tampilan visual",
      Icon: TbTargetArrow,
    },
    {
      subTitle: "Efisiensi & Efektivitas",
      desc: "Recommending features and workflows that are efficient, cost-effective, and easy to manage",
      // desc: "Merekomendasikan fitur dan alur kerja yang efisien, hemat biaya, dan mudah dikelola",
      Icon: IoMdSettings,
    },
  ];

  return (
    <Element name="whyme" id="whyme">
      <RevealOnce delay={0.2}>
        <section id="whyme" className="flex justify-center">
          <div className="containerCustom flex items-center justify-between gap-12 ">
            <div className="w-[47%] h-[500px]">
              <img
                src={coding}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col w-[53%] gap-2">
              <RevealOnce delay={0.3}>
                <div className="font-bold text-indigo-600 rajdhani tracking-widest uppercase">
                  Quality
                </div>
                <div className="text-5xl font-bold rajdhani leading-[110%]  text-[#212529] mb-2">
                  {" "}
                  Why Choose Me as You Developer?
                </div>
              </RevealOnce>
              <RevealOnce delay={0.5}>
                <div className="mb-6 text-base text-gray-500 rubik">
                  {/* Berpengalaman dalam membuat aplikasi end to end yang kompleks,
                mulai dari apliksi real-time, e-commerce sampai aplikasi
                managerial. */}
                  Experienced in building complex end-to-end applications,
                  ranging from real-time apps and e-commerce platforms to
                  management systems.
                </div>
              </RevealOnce>
              <div className="grid grid-cols-2  gap-6">
                {cardSub.map((item, index) => (
                  <RevealOnce delay={0.8} key={index}>
                    <CardWrapper key={index} paddingX="40px" paddingY="30px">
                      <CardSubReasoning
                        subTitle={item.subTitle}
                        desc={item.desc}
                        Icon={item.Icon}
                      />
                    </CardWrapper>
                  </RevealOnce>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealOnce>
    </Element>
  );
};

export default Portofolio;

// slider manual
{
  /* <div className="h-[600px]  rounded-lg overflow-hidden relative">
            <div
              onClick={() => slideLeft()}
              className="absolute z-20 p-2 text-4xl text-gray-400 transition duration-300 transform -translate-y-1/2 rounded-full cursor-pointer select-none active:scale-95 hover:scale-105 hover:bg-gray-100/30 top-1/2 left-4 hover:text-black"
            >
              <SlArrowLeft size={30} />
            </div>
            <div
              className={`flex h-full w-full`}
              style={{
                transform:
                  direction === "left"
                    ? "translateX(0%)" // Bergerak dari tengah ke kiri
                    : direction === "right"
                    ? "translateX(-200%)" // Bergerak dari tengah ke kanan
                    : "translateX(-100%)", // Posisi awal: gambar kedua di tengah
                transition: animating
                  ? `transform ${animationDuration}ms ease-in-out`
                  : "none",
              }}
            >
              <img
                src={photo[prevIndex]}
                className="flex-shrink-0 object-cover w-full"
              />
              <img
                src={photo[photoIndex]}
                className="flex-shrink-0 object-cover w-full"
              />
              <img
                src={photo[nextIndex]}
                className="flex-shrink-0 object-cover w-full"
              />
            </div>
            <div
              onClick={() => slideRight()}
              className="absolute z-20 p-2 text-4xl text-gray-400 transition duration-300 transform -translate-y-1/2 rounded-full cursor-pointer select-none active:scale-95 hover:scale-105 hover:bg-gray-100/30 top-1/2 right-4 hover:text-black"
            >
              <SlArrowRight size={30} />
            </div>
          </div> */
}

{
  /* Setiap elemen dibuat untuk mencapai target spesifik, baik itu
//                   meningkatkan penjualan, memperkuat brand, atau memperluas
//                   jangkauan pasar. */
}
