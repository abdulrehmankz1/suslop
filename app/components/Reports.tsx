"use client";
import React from "react";

import Slider from "./Slider";
import SectionIntro from "./SectionIntro";

const Reports = () => {
  return (
    <section className="reports_section px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading Row */}
        <SectionIntro
          heading="Insights & Reports"
          paragraph=" Stay informed with our latest research, reports, and thought leadership on sustainability, resource management, and community development."
          buttonText="View All Reports"
          buttonLink="/our-insights"
        />
        {/* Swiper Slider */}
        <div className="md:mt-12 mt-5">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Reports;
