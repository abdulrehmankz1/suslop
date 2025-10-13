"use client";

import React, { useEffect, useState } from "react";
import InsightsReportCard from "./InsightsReportCard";
import {
  fetchAllReports,
  extractReportData,
  ReportData,
} from "@/services/report.service";
import SectionIntro from "@/app/components/SectionIntro";

const InsightsReports = () => {
  const [reports, setReports] = useState<ReportData[]>([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  useEffect(() => {
    const loadReports = async () => {
      setLoading(true);
      const data = await fetchAllReports();
      const formatted = data
        .map((report) => extractReportData(report))
        .filter((item): item is ReportData => item !== null);

      setReports(formatted);
      setLoading(false);
    };

    loadReports();
  }, []);

  return (
    <section className="px-3 md:px-4 lg:px-5 mt_100">
      <div className="container mx-auto">
        {/* Heading Row */}
        <SectionIntro
          heading="Our Reports"
          paragraph="Our research reports offer in-depth analysis, case data, and practical recommendations for decision-makers working at the intersection of environment, community, and industry."
        />

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12">
          {loading
            ? // 🔹 Skeleton cards (4 loaders)
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-100 rounded-lg overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="w-full h-[180px] bg-gray-300"></div>

                {/* Content placeholder */}
                <div className="p-4 space-y-3">
                  <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))
            : reports.map((report) => (
              <InsightsReportCard
                key={report.id}
                image={
                  report.featuredImage || "/assets/images/project-image.png"
                }
                title={report.title || "Untitled"}
                link={`/our-reports/${report.slug}`}
                date={formatDate(report.date || "")}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsReports;
