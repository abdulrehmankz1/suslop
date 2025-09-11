import React from "react";
import InsightsReportCard from "./InsightsReportCard";
import { fetchAllReports, extractReportData } from "@/services/report.service";

const InsightsReports = async () => {
  const reports = await fetchAllReports();
  const reportsData = reports.map(report => extractReportData(report)).filter(Boolean);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section className="px-3 md:px-4 lg:px-5 lg:mb-[100px] md:mb-20 mb-12">
      <div className="container mx-auto">
        {/* Heading Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-20 lg:gap-5 gap-5 lg:mb-12 md:mb-8 mb-5">
          <div className="xl:w-2/3 w-[90%]">
            <h2 className="text-dark">Our Reports</h2>
          </div>
          <div>
            <p className="text-black">
              Our research reports offer in-depth analysis, case data, and
              practical recommendations for decision-makers working at the
              intersection of environment, community, and industry.
            </p>
          </div>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12">
          {reportsData.map((report, index) => (
            <InsightsReportCard
              key={index}
              image={report?.featuredImage || "/assets/images/project-image.png"}
              title={report?.title || "Untitled"}
              link={`/our-reports/${report?.slug}`}
              date={formatDate(report?.date || "")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsReports;
