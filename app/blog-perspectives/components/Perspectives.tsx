import BlogCard from "@/app/components/BlogCard";
import React from "react";
import {
  fetchAllPosts,
  extractPostData,
  PostData,
} from "@/services/blog.service";

const Perspectives = async () => {
  // Fetch posts from API
  const posts = await fetchAllPosts();

  // Explicitly tell TypeScript the result will be an array of non-null PostData objects
  const formattedPosts: PostData[] = posts
    .map((post) => extractPostData(post))
    .filter((post): post is PostData => post !== null);

  return (
    <section className="latest_updates px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading Row */}
        <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-20 lg:gap-5 gap-5 lg:mb-12 md:mb-8 mb-5">
          <div className="xl:col-span-8">
            <h2 className="text-dark">Blog & Perspectives</h2>
          </div>
          <div className="xl:col-span-4">
            <p className="text-black">
              Our experts share perspectives on the latest sustainability
              challenges, project innovations, and community-driven solutions.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {formattedPosts.map((blog) => (
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
