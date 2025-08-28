import React from "react";
import HeroSection from "../components/HeroSection";
import Imsights from "./components/Imsights";
import InsightsReports from "./components/InsightsReports";
import CTA from "../components/CTA";

const OurInsights = () => {
  return (
    <>
      <HeroSection
        title="Knowledge That Drives Sustainable Progress"
        description="t Suslop, we believe informed decisions create stronger, more resilient outcomes.
Our Insights & Reports bring together research, industry trends, and real-world expertise to help leaders, policymakers, and communities navigate complex challenges with clarity and confidence."
        className="rounded-b-4xl"
      />
      <Imsights />
      <InsightsReports />
      <CTA
        heading="Explore how we can bring your project vision to life."
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </>
  );
};

export default OurInsights;
