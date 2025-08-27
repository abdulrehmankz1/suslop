import React from "react";
import HeroSection from "./components/HeroSection";
import FindHere from "./components/FindHere";
import Perspectives from "./components/Perspectives";

const BlogPerspectives = () => {
  return (
    <>
      <HeroSection
        title="Expert Views on Sustainability, Infrastructure, and Community Development"
        description="t Suslop, we believe informed decisions create stronger, more resilient outcomes.
Our Insights & Reports bring together research, industry trends, and real-world expertise to help leaders, policymakers, and communities navigate complex challenges with clarity and confidence."
        className="rounded-b-4xl"
      />
      <FindHere />
      <Perspectives />
    </>
  );
};

export default BlogPerspectives;
