import Blog from "./components/Blog";
import HeroSection from "./components/HeroSection";
import LatestUpdates from "./components/LatestUpdates";
import OurEdge from "./components/OurEdge";
import OurImpact from "./components/OurImpact";
import Reports from "./components/Reports";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Building Sustainable Futures, Together"
        description="At Suslop, we help governments, communities, and industries design and deliver solutions that balance environmental responsibility, economic growth, and social well-being."
        variant="alt"
      />
      <Services />
      <OurEdge />
      <OurImpact />
      <Reports />
      <Blog />
      <LatestUpdates />
    </>
  );
}
