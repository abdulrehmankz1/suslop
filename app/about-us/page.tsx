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
      <OurStory
        variant="left-images"
        heading="Our Story"
        paragraphs={[
          "Founded with the vision of transforming complex challenges into opportunities for growth, Suslop has evolved into a trusted partner for sustainable development.",
          "Our multidisciplinary team brings together expertise in policy, engineering, community engagement, and environmental science — enabling us to deliver projects that are as resilient as they are impactful.",
        ]}
      />
      <OurVision />
      <OurTeam />
    </>
  );
};

export default AboutUs;
