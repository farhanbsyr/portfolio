import type { IconType } from "react-icons";
interface CardServiceProps {
  title: string;
  paragraf: string;
  Icon: IconType;
}

const CardService: React.FC<CardServiceProps> = ({ title, paragraf, Icon }) => {
  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex items-center justify-center mb-2 ">
        <Icon size={45} className="text-indigo-500" />
      </div>
      <h3 className=" text-2xl  font-bold text-indigo-950 rajdhani">{title}</h3>
      <p className="text-base text-gray-500 rubik">{paragraf} </p>
    </div>
  );
};

export default CardService;
