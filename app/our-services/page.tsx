import React from "react";
import HeroSection from "../components/HeroSection";
import ChooseUs from "./components/ChooseUs";
import Paragraph from "./components/Paragraph";
import ServiceOfferings from "./components/ServiceOfferings";

const OurServices = () => {
  return (
    <>
      <HeroSection
        title="Practical, Impact-Driven Solutions for a Sustainable Future"
        description="At Suslop, we help governments, communities, and industries design and deliver solutions that balance environmental responsibility, economic growth, and social well-being."
        className="rounded-b-4xl"
      />
      <Paragraph />
      <ServiceOfferings />
      <ChooseUs />
    </>
  );
};

export default OurServices;
