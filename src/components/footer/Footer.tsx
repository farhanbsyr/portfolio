import ButtonCustom from "../button/ButtonCustom";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Input } from "../ui/input";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const listNav = [
    "Home",
    "Service",
    "Skills",
    "Portfolio",
    "Price",
    "Contact",
  ];

  const listIcon = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/farhanbsyr" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/farhanalktr/" },
    { icon: <FaGithub />, link: "https://github.com/farhanbsyr" },
  ];
  return (
    <footer
      id="footer"
      className=" p-20 grid grid-cols-3  gap-10 text-white bg-slate-900"
    >
      {/* colomn 1  */}
      <div className="flex flex-col col-span-2 justify-between items-start gap-8">
        <div className="inline-flex flex-col gap-2">
          <div className="text-4xl rajdhani font-bold text-indigo-600">
            FARHANALKTR
          </div>
          <div className="flex gap-8  font-semibold rubik text-sm ">
            {listNav.map((item) => (
              <a
                key={item}
                className="hover:text-indigo-600"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="inline-flex flex-col gap-2">
          <div className="inline-flex gap-1 text-sm rubik items-center">
            <MdEmail size={16} className="text-indigo-600" />{" "}
            farhanalktr91@gmail.com
          </div>
          <div className="inline-flex gap-1 text-sm  rubik items-center">
            <IoLocationSharp size={16} className="text-red-700" /> Jakarta,
            Indonesia
          </div>
        </div>
      </div>

      {/* column 2 */}
      <div className="flex flex-col items-start justify-between gap-8 ">
        <div className="inline-flex flex-col gap-2">
          <div className="rajdhani font-bold text-xl">
            Get tips & deals monthly
          </div>
          <div className="inline-flex gap-4 items-center">
            <Input className="h-full bg-white" />
            <ButtonCustom
              labelBtn="Send"
              functionBtn={() => {}}
              colorBtn="bg-indigo-600 w-[100px] "
            />{" "}
          </div>
        </div>
        <div>
          <div className="flex gap-4 mb-2">
            {listIcon.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" transition duration-300 flex items-center justify-center rounded-full bg-gray-200 p-2    hover:bg-indigo-600 hover:text-white text-indigo-950"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className=" text-sm rubik">
            Ⓒ 2025 Farhan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
