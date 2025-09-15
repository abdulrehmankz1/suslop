"use client";

import React, { useEffect, useState } from "react";
import UpdatesCard from "./UpdatesCard";
import { fetchAllNewsRooms, extractNewsRoomData, WPNewsRoom, NewsRoomData } from "../../services/newsRoom.service";

const NewsRoom = () => {
  const [newsData, setNewsData] = useState<NewsRoomData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const newsRooms: WPNewsRoom[] = await fetchAllNewsRooms();
      const extractedData = newsRooms.map((newsRoom) => extractNewsRoomData(newsRoom)).filter((data): data is NewsRoomData => data !== null);
      setNewsData(extractedData);
      setLoading(false);
    };
    loadNews();
  }, []);

  return (
    <section className="latest_updates px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-20 lg:gap-5 gap-5 lg:mb-12 md:mb-8 mb-5">
          <div className="xl:w-2/3 w-[90%]">
            <h2 className="text-dark">Latest Updates from Suslop</h2>
          </div>
          <div>
            <p className="text-black">
              Stay informed on our projects, partnerships, and initiatives
              shaping sustainable development across regions.
            </p>
            <button className="btn secondary_btn mt-5">View Newsroom</button>
          </div>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {loading ? (
            <p>Loading news...</p>
          ) : (
            newsData.slice(0, 4).map((update) => (
              <UpdatesCard
                key={update.id}
                image={update.featuredImage || "/assets/images/left-top.png"}
                title={update.title}
                link={`/news-room/${update.slug}`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsRoom;
