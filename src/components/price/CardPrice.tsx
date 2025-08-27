import React from "react";
import ButtonCustom from "../button/ButtonCustom";
import { FaCircleCheck } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
interface CardPriceProps {
  price: string;
  points: string[];
  type: string;
}
const CardPrice: React.FC<CardPriceProps> = ({ price, points, type }) => {
  return (
    <div className="flex flex-col text-start gap-10">
      <div>
        <div className="rajdhani font-bold text-lg mb-2">{type}</div>
        <div className="rubik font-semibold text-4xl">{price}</div>
      </div>
      <div className="flex flex-col">
        {points.map((point) => (
          <div className=" inline-flex gap-2 mb-2 text-gray-500 rubik items-center text-sm">
            <FaCircleCheck className="text-green-600" size={16} />{" "}
            <div>{point}</div>
          </div>
        ))}
      </div>
      <ButtonCustom
        colorBtn="bg-indigo-600 hover:bg-indigo-600 w-[150px] h-[40px]"
        labelBtn="Get Started"
        functionBtn={() => {}}
        Icon={FiArrowRight}
      />
    </div>
  );
};

export default CardPrice;
