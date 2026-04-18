import StayMotion from "@/lib/StayMotion";
import ButtonCustom from "../button/ButtonCustom";

const Contact = () => {
  return (
    <section id="contact" className=" bg-slate-900 py-20 flex justify-center">
      <StayMotion delay={0.2}>
        <div className="w-[1200px] flex flex-col gap-2 items-center">
          <div className="text-3xl text-white font-bold rajdhani">
            Let’s Build the Website Your Business Deserves
          </div>
          <div className="rubik text-lg text-white mb-4">
            From concept to launch — we deliver websites that convert and
            represent your brand.
          </div>
          <div className="inline-flex gap-4 items-center">
            <a
              href="https://wa.me/6287852433015?text=Halo%2C%20saya%20tertarik%20untuk%20membangun%20website%20bersama%20Anda.%20Bisa%20dibantu%20untuk%20informasi%20lebih%20lanjut%3F"
              target="_blank"
            >
              <ButtonCustom
                labelBtn="Launch Your Idea"
                colorBtn="bg-indigo-600 hover:bg-indigo-600 h-[45px] "
                functionBtn={() => {}}
              />
            </a>
          </div>
        </div>
      </StayMotion>
    </section>
  );
};

export default Contact;
