"use client";

import React, { useEffect, useState } from "react";
import UpdatesCard from "../components/UpdatesCard";
import {
  fetchAllNewsRooms,
  extractNewsRoomData,
  NewsRoomData,
} from "../../services/newsRoom.service";

const Page = () => {
  const [newsRooms, setNewsRooms] = useState<NewsRoomData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNewsRooms = async () => {
      try {
        const wpNewsRooms = await fetchAllNewsRooms();
        const extractedNewsRooms = wpNewsRooms
          .map(extractNewsRoomData)
          .filter((newsRoom): newsRoom is NewsRoomData => newsRoom !== null);
        setNewsRooms(extractedNewsRooms);
      } catch (err) {
        setError("Failed to load news rooms");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadNewsRooms();
  }, []);

  if (loading) {
    return (
      <section className="latest_updates px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          <p>Loading news rooms...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="latest_updates px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          <p>Error: {error}</p>
        </div>
      </section>
    );
  }

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
            <button className="btn secondary_btn mt-5">View Page</button>
          </div>
        </div>

        {/* Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {newsRooms.map((newsRoom) => (
            <UpdatesCard
              key={newsRoom.id}
              image={newsRoom.featuredImage || "/assets/images/left-top.png"}
              title={newsRoom.title}
              link={`/news-room/${newsRoom.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
