import BlogCard from "@/app/components/BlogCard";
import React from "react";

const blogData = [
  {
    title: "Bridging the Gap Between Policy and Practice",
    description:
      "How strategic planning and local engagement can transform sustainability policies into measurable on-the-ground impact.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
  {
    title: "Building Resilient Communities",
    description:
      "Exploring innovative ways communities can adapt to climate change while preserving culture and heritage.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
  {
    title: "The Future of Renewable Energy",
    description:
      "Why solar, wind, and hybrid projects are critical for achieving carbon neutrality goals.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
  {
    title: "Sustainable Land Use Planning",
    description:
      "How land-use strategies can align with indigenous knowledge to create long-term value.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
  {
    title: "Climate-Smart Infrastructure",
    description:
      "Practical insights into designing infrastructure that withstands extreme climate events.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
    {
    title: "Climate-Smart Infrastructure",
    description:
      "Practical insights into designing infrastructure that withstands extreme climate events.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
];

const Perspectives = () => {
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
              Our experts share perspectives on the latest sustainability challenges,
              project innovations, and community-driven solutions.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              linkText={blog.linkText}
              linkHref={blog.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perspectives;
