import UpdatesCard from "@/app/components/UpdatesCard";
import React from "react";
import { fetchAllInsights, extractInsightData } from "@/services/insight.service";

const Imsights = async () => {
  const insights = await fetchAllInsights();
  const insightsData = insights.map(insight => extractInsightData(insight)).filter(Boolean);

  return (
    <section className="latest_updates px-3 md:px-4 lg:px-5">
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
          {insightsData.map((insight, index) => (
            <UpdatesCard
              key={index}
              image={insight?.featuredImage || "/assets/images/left-top.png"}
              title={insight?.title || "Untitled"}
              link={`/our-insights/${insight?.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Imsights;
