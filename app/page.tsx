import Blog from "./components/Blog";
import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";
import NewsRoom from "./components/NewsRoom";
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
      <NewsRoom />
      <CTA
        heading="Let’s Build Something That Lasts"
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </>
  );
}
