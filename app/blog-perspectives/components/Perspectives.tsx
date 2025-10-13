"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "@/app/components/BlogCard";
import {
  fetchAllPosts,
  extractPostData,
  PostData,
} from "@/services/blog.service";
import SectionIntro from "@/app/components/SectionIntro";

const Perspectives = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchAllPosts();

      const formatted: PostData[] = fetchedPosts
        .map((post) => extractPostData(post))
        .filter((post): post is PostData => post !== null);

      setPosts(formatted);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <section className="mt_100 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading Row */}
        <SectionIntro
          heading="Blog & Perspectives"
          paragraph="Our experts share perspectives on the latest sustainabilitychallenges, project innovations, and community-driven solutions."
        />

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? // 🔹 Skeleton loaders with unique keys
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-xl overflow-hidden"
                >
                  <div className="w-full h-[300px] bg-gray-300"></div>
                  <div className="mt-4 space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              ))
            : posts.map((blog) => (
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  description={blog.excerpt}
                  image={blog.featuredImage ?? ""}
                  linkText="Read Article"
                  linkHref={`/blog-perspectives/${blog.slug}`}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Perspectives;
