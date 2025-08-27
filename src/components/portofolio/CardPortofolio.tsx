import React from "react";

interface CardPortofolioProps {
  projectName: string;
  techStacks: string[];
  projectImage: string;
}

const CardPortofolio: React.FC<CardPortofolioProps> = ({
  projectName,
  techStacks,
  projectImage,
}) => {
  return (
    <div className="p-5 bg-[#f4f4f4] shadow-sm group rounded-[20px]">
      <div className="w-full overflow-hidden rounded-2xl cursor-pointer ">
        <img
          src={projectImage}
          alt={projectName}
          className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 "
        />
      </div>
      <div className="text-left py-[10px]">
        <h4 className="rubik font-medium text-[32px] mt-5 mb-3">
          {projectName}
        </h4>
        <div className="inline-flex gap-2 flex-wrap">
          {techStacks.map((item, index) => (
            <div
              key={index}
              className="px-[15px] py-[5px] mb-[6px] text-gray-500 hover:border-indigo-600 hover:text-white font-semibold rounded-full flex items-center justify-center hover:bg-indigo-600 transition duration-500 border-2 border-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPortofolio;
