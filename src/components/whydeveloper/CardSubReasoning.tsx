import React from "react";
import type { IconType } from "react-icons";
interface CardSubReasoningProps {
  subTitle: string;
  desc: string;
  Icon: IconType;
}
const CardSubReasoning: React.FC<CardSubReasoningProps> = ({
  subTitle,
  desc,
  Icon,
}) => {
  return (
    <>
      <div className="inline-flex items-center gap-3 mb-3">
        <div className="p-1 bg-indigo-600 rounded-full ">
          <Icon size="28" className="text-white" />
        </div>
        <h3 className=" text-[22px] font-bold rajdhani">{subTitle}</h3>
      </div>
      <p className="rubik text-base text-gray-500">
        {desc}
        {/* Setiap elemen dibuat untuk mencapai target spesifik, baik itu
                  meningkatkan penjualan, memperkuat brand, atau memperluas
                  jangkauan pasar. */}
      </p>
    </>
  );
};

export default CardSubReasoning;
