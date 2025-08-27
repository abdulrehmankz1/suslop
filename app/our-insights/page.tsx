import React from "react";
import HeroSection from "../components/HeroSection";
import Imsights from "./components/Imsights";
import InsightsReports from "./components/InsightsReports";

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
    </>
  );
};

export default OurInsights;
