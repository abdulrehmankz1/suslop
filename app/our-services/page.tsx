import React from "react";
import HeroSection from "../components/HeroSection";
import ChooseUs from "./components/ChooseUs";
import Paragraph from "./components/Paragraph";
import ServiceOfferings from "./components/ServiceOfferings";
import CTA from "../components/CTA";

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
      <CTA
        heading="Explore how we can bring your project vision to life."
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact-us"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </>
  );
};

export default OurServices;
