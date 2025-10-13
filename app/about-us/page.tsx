import React from "react";
import HeroSection from "../components/HeroSection";
import Introduction from "./components/Introduction";
import OurStory from "../components/OurStory";
import OurVision from "./components/OurVision";
import OurTeam from "./components/OurTeam";
import CTA from "../components/CTA";

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
        styleVariant="our_story"
        paragraphs={[
          "Founded with the vision of transforming complex challenges into opportunities for growth, Suslop has evolved into a trusted partner for sustainable development.",
          "Our multidisciplinary team brings together expertise in policy, engineering, community engagement, and environmental science — enabling us to deliver projects that are as resilient as they are impactful.",
        ]}
      />
      <OurVision />
      <OurTeam />
      <CTA
        heading="Let’s Build Something That Lasts"
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact-us"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </>
  );
};

export default AboutUs;
