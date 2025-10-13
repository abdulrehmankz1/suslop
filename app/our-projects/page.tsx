import React from "react";
import HeroSection from "../components/HeroSection";
import OurStory from "../components/OurStory";
import OurProjectsApart from "./components/OurProjectsApart";
import CTA from "../components/CTA";
import CaseStudies from "./components/Projects";

const OurProjects = () => {
  return (
    <>
      <HeroSection
        title="Real-World Impact, Proven Results"
        description="At Suslop, we don’t just design strategies — we bring them to life.
Our projects demonstrate how collaborative partnerships, rigorous research, and innovative solutions create meaningful, measurable change for communities, industries, and the environment."
        className="rounded-b-4xl"
      />
      <OurStory
        styleVariant="our_story_none"
        variant="left-text"
        heading="Our Approach to Projects"
        paragraphs={[
          "Every project begins with listening. We take the time to understand the cultural, environmental, and economic context before shaping a solution that aligns with the goals of all stakeholders. From feasibility studies to post-implementation monitoring, we ensure each step delivers long-term value.",
          "Every project begins with listening. We take the time to understand the cultural, environmental, and economic context before shaping a solution that aligns with the goals of all stakeholders. From feasibility studies to post-implementation monitoring, we ensure each step delivers long-term value.",
        ]}
        buttonText="Discover More"
      />
      <CaseStudies />
      <OurProjectsApart />
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

export default OurProjects;
