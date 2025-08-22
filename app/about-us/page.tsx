import React from "react";
import HeroSection from "../components/HeroSection";
import Introduction from "./components/Introduction";
import OurStory from "../components/OurStory";

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
    </>
  );
};

export default AboutUs;
