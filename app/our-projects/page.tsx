import React from "react";
import HeroSection from "../components/HeroSection";
import OurStory from "../components/OurStory";
import CaseStudies from "./components/CaseStudies";
import OurProjectsApart from "./components/OurProjectsApart";

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
    </>
  );
};

export default OurProjects;
