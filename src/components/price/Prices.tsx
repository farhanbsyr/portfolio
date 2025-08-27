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
