import React from "react";
import HeroSection from "../components/HeroSection";
import Introduction from "./components/Introduction";
import OurStory from "../components/OurStory";
import OurVision from "./components/OurVision";
import OurTeam from "./components/OurTeam";

const AboutUs = () => {
  return (
    <>
      <HeroSection
        title="Creating Sustainable Impact That Lasts Generations"
        description="At Suslop, we help governments, communities, and industries design and deliver solutions that balance environmental responsibility, economic growth, and social well-being."
        className="rounded-b-4xl"
      />
      <Introduction />
      <OurStory />
      <OurVision />
      <OurTeam />
    </>
  );
};

export default AboutUs;
