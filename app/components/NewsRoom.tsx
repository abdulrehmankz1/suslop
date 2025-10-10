"use client";

import React, { useEffect, useState } from "react";
import UpdatesCard from "./UpdatesCard";
import {
  fetchAllNewsRooms,
  extractNewsRoomData,
  WPNewsRoom,
  NewsRoomData,
} from "../../services/newsRoom.service";
import SectionIntro from "./SectionIntro";

const NewsRoom = () => {
  const [newsData, setNewsData] = useState<NewsRoomData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const newsRooms: WPNewsRoom[] = await fetchAllNewsRooms();
      const extractedData = newsRooms
        .map((newsRoom) => extractNewsRoomData(newsRoom))
        .filter((data): data is NewsRoomData => data !== null);
      setNewsData(extractedData);
      setLoading(false);
    };
    loadNews();
  }, []);

  // 🔹 Skeleton Card Component
  const SkeletonCard = () => (
    <div className="animate-pulse rounded-xl overflow-hidden bg-white shadow-md">
      {/* Image Placeholder */}
      <div className="w-full h-[200px] md:h-[250px] lg:h-[280px] bg-gray-300"></div>
      {/* Text Placeholder */}
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
    <section className="mt_100 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading Row */}
        <SectionIntro
          heading="Latest Updates from Suslop"
          paragraph="Stay informed on our projects, partnerships, and initiatives shaping sustainable development across regions."
          buttonText="View Newsroom"
          buttonLink="/news-room"
        />

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : newsData
              .slice(0, 4)
              .map((update) => (
                <UpdatesCard
                  key={update.id}
                  image={
                    update.featuredImage || "/assets/images/left-top.png"
                  }
                  title={update.title}
                  link={`/news-room/${update.slug}`}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default NewsRoom;
