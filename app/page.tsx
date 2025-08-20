import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurEdge from "./components/OurEdge";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <OurEdge />
    </>
  );
}
