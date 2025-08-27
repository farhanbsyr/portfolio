import { useEffect, useRef, useState } from "react";
import ButtonCustom from "../button/ButtonCustom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [show, setShow] = useState(true);
  // refs untuk auto-hide yang halus
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  const listNav = ["Home", "Service", "WhyMe", "Portfolio", "Price"];

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);

  //   if (windowWidth >= 1024) {
  //     setIsMenuToggled(true);
  //   } else {
  //     setIsMenuToggled(false);
  //   }

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [windowWidth]);

  useEffect(() => {
    setActiveLink("home");
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const y = window.scrollY + 82;

      sections.forEach((section) => {
        const top: number = section.offsetTop;
        const height: number = section.offsetHeight;
        const id: string | undefined = section
          .getAttribute("id")
          ?.toLowerCase();

        console.log(sections);
        console.log(top);
        console.log(id);

        console.log(window.scrollY);

        if (y >= top && y < top + height && id) {
          setActiveLink(id);
        }

        if (y === 0 || y < 850) {
          setActiveLink("home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          const last = lastScrollYRef.current;

          if (current > last && current > 80) {
            setShow(false);
          } else {
            setShow(true);
          }

          lastScrollYRef.current = current;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`flex justify-center fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm
                  transition-transform duration-300 will-change-transform  ${
                    show ? "translate-y-0" : "-translate-y-full"
                  }`}
    >
      <div className="w-[1200px]  flex items-center justify-between py-4 px-14">
        <div className="py-[2px] cursor-pointer">
          <a href="/">
            <h1 className="text-4xl font-bold rajdhani ">Farhanalktr</h1>
          </a>
        </div>
        <div className="inline-flex gap-5">
          {listNav.map((item) => (
            <ScrollLink
              key={item}
              to={`${item.toLowerCase()}`}
              smooth={true}
              duration={1200}
              offset={-22}
              spy={true}
              onSetActive={(to) => setActiveLink(to)}
              className={`  cursor-pointer transition duration-500 rajdhani px-3 py-2 font-bold text-base hover:text-indigo-600 hover:bg-indigo-100 hover:rounded-[4px] ${
                activeLink === item.toLowerCase()
                  ? " text-indigo-600 bg-indigo-600/15  rounded-[4px]"
                  : " text-indigo-950"
              }`}
              target="_self"
              href={`#${
                item.toLowerCase() == "home" ? "hero" : item.toLowerCase()
              }`}
            >
              {item}
            </ScrollLink>
          ))}
        </div>

        <div className="inline-flex items-center gap-8 min-w-[130px] h-[50px]">
          <ButtonCustom
            functionBtn={() => {}}
            labelBtn="Contact Me"
            colorBtn="bg-indigo-600 rubik"
          ></ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
