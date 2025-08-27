import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import WhyDeveloper from "./components/whydeveloper/WhyDeveloper";
import Prices from "./components/price/Prices";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Portofolio from "./components/portofolio/Portofolio";
import { useEffect } from "react";
import { scroller } from "react-scroll";

function App() {
  useEffect(() => {
    const hash =
      typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 3000,
        smooth: true,
        offset: 60, // kompensasi sticky header
      });
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <WhyDeveloper />
      <Portofolio />
      <Contact />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
