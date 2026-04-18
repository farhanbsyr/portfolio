import RevealOnce from "@/lib/RevealOnce";
import CardWrapper from "../card/CardWrapper";
import CardPrice from "./CardPrice";
import { Element } from "react-scroll";

const Prices = () => {
  const listCardService = [
    {
      type: "Bronze",
      price: "Rp.799.000",
      points: [
        "Free Domain",
        "Hosting",
        "Website SSL",
        "UI/UX",
        "5-7 Section",
        "Responsive",
        "3x Revision",
      ],
      words:
        "https://wa.me/6287852433015?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20Bronze%20Rp799.000.%20Bisa%20dibantu%20dengan%20detail%20lebih%20lanjut%3F",
    },
    {
      type: "Silver",
      price: "Rp.1.699.000",
      points: [
        "Free Domain",
        "Hosting",
        "Website SSL",
        "UI/UX",
        "2-5 Page",
        "Responsive",
        "3x Revision",
        "5 Crud",
        "API Integration",
      ],
      words:
        "https://wa.me/6287852433015?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20Silver%20Rp1.699.000.%20Saya%20ingin%20tahu%20lebih%20detail%20mengenai%20fitur%20dan%20prosesnya",
    },
    {
      type: "Gold",
      price: "Rp.3.599.000",
      points: [
        "Free Domain",
        "Hosting",
        "Website SSL",
        "UI/UX",
        "6-15 Page",
        "Responsive",
        "3x Revision",
        "Unlimited Crud",
        "API Integration",
        "Payment Gateway",
      ],
      words:
        "https://wa.me/6287852433015?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20Gold%20Rp3.599.000.%20Apakah%20bisa%20dijelaskan%20lebih%20detail%20benefit%20dan%20langkah%20selanjutnya%3F",
    },
  ];
  return (
    <Element name="price">
      <RevealOnce>
        <section id="price" className="text-center flex justify-center">
          <div className="containerCustom">
            <div className="mb-10 font-semibold">
              <h3 className="text-base tracking-widest text-indigo-600 rajdhani font-bold uppercase">
                What I Do
              </h3>
              <h1 className="text-5xl rajdhani font-bold">
                What I Provide For You
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-10  justify-center">
              {listCardService.map((card, index) => (
                <RevealOnce delay={0.2 + (index / 10) * 2} key={card.type}>
                  <CardWrapper key={card.type} paddingY="40px" paddingX="40px">
                    <CardPrice
                      words={card.words}
                      price={card.price}
                      points={card.points}
                      type={card.type}
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

export default Prices;
