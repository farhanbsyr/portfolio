import React from "react";
import { Button } from "../ui/button";
import type { IconType } from "react-icons";

interface ButtonCustomProps {
  functionBtn: any;
  labelBtn: string;
  colorBtn: string;
  Icon?: IconType;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  functionBtn,
  labelBtn,
  colorBtn,
  Icon,
}) => {
  return (
    <Button
      className={`w-full h-full  px-6 text-base gap-1 ${colorBtn} cursor-pointer hover:scale-110 active:scale-90 transition duration-300 hover:bg-indigo-600`}
      onClick={functionBtn}
    >
      {labelBtn}
      {Icon ? <Icon /> : ""}
    </Button>
  );
};

export default ButtonCustom;
