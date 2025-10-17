"use client";

import React, { useEffect, useState } from "react";
import UpdatesCard from "../components/UpdatesCard";
import {
  fetchAllNewsRooms,
  extractNewsRoomData,
  NewsRoomData,
} from "../../services/newsRoom.service";
import CTA from "../components/CTA";
import HeroSection from "../components/HeroSection";

const SkeletonCard = () => (
  <div className="animate-pulse rounded-lg overflow-hidden shadow bg-gray-200">
    <div className="h-[200px] w-full bg-gray-300"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);

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

  return (
    <>
      <HeroSection
        title="Creating Sustainable Impact That Lasts Generations"
        description="At Suslop, we help governments, communities, and industries design and deliver solutions that balance environmental responsibility, economic growth, and social well-being."
        className="rounded-b-4xl"
      />
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
            {loading ? (
              // show skeletons while loading
              Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            ) : error ? (
              <p className="col-span-full text-red-500">Error: {error}</p>
            ) : (
              newsRooms.map((newsRoom) => (
                <UpdatesCard
                  key={newsRoom.id}
                  image={
                    newsRoom.featuredImage || "/assets/images/left-top.png"
                  }
                  title={newsRoom.title}
                  link={`/news-room/${newsRoom.slug}`}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <CTA
        heading="Let’s Build Something That Lasts"
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact-us"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </>
  );
};

export default Page;
