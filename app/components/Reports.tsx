"use client";
import React from "react";

import Slider from "./Slider";

const Reports = () => {
  return (
    <section className="reports_section px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading Row */}
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-5 gap-5">
          <div>
            <h2 className="text-dark xl:w-1/2 lg:w-3/4">Insights & Reports</h2>
          </div>
          <div>
            <p className="text-black">
              Stay informed with our latest research, reports, and thought
              leadership on sustainability, resource management, and community
              development.
            </p>
            <button className="btn secondary_btn mt-5">View All Reports</button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="md:mt-12 mt-5">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Reports;
