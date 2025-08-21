import Blog from "./components/Blog";
import Footer from "./components/Footer";
import FooterBanner from "./components/CTA";
import HeroSection from "./components/HeroSection";
import LatestUpdates from "./components/LatestUpdates";
import Navbar from "./components/Navbar";
import OurEdge from "./components/OurEdge";
import OurImpact from "./components/OurImpact";
import Reports from "./components/Reports";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <OurEdge />
      <OurImpact />
      <Reports />
      <Blog />
      <LatestUpdates />
      <FooterBanner />
      <Footer />
    </>
  );
}
