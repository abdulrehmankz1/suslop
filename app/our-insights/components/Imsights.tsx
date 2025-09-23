"use client";

import React, { useEffect, useState } from "react";
import UpdatesCard from "@/app/components/UpdatesCard";
import {
  fetchAllInsights,
  extractInsightData,
  InsightData,
} from "@/services/insight.service";

const Imsights = () => {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInsights = async () => {
      setLoading(true);
      const data = await fetchAllInsights();
      const formatted = data
        .map((insight) => extractInsightData(insight))
        .filter((item): item is InsightData => item !== null);

      setInsights(formatted);
      setLoading(false);
    };

    loadInsights();
  }, []);

  return (
    <section className="mt_100 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-20 lg:gap-5 gap-5 lg:mb-12 md:mb-8 mb-5">
          <div className="xl:w-2/3 w-[90%]">
            <h2 className="text-dark">Our Insights</h2>
          </div>
          <div>
            <p className="text-black">
              Stay ahead with perspectives from our multidisciplinary team. From
              policy shifts to emerging sustainability technologies, our
              insights help you anticipate change and seize opportunities.
            </p>
          </div>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12">
          {loading
            ? // Skeleton cards (4 loaders)
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
            : insights.map((insight) => (
                <UpdatesCard
                  key={insight.id}
                  image={insight.featuredImage || "/assets/images/left-top.png"}
                  title={insight.title || "Untitled"}
                  link={`/our-insights/${insight.slug}`}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Imsights;
