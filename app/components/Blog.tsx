"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import BlogCard from "./BlogCard";

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
    title: "Bridging the Gap Between Policy and Practice",
    description:
      "How strategic planning and local engagement can transform sustainability policies into measurable on-the-ground impact.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
  {
    title: "Bridging the Gap Between Policy and Practice",
    description:
      "How strategic planning and local engagement can transform sustainability policies into measurable on-the-ground impact.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
  {
    title: "Bridging the Gap Between Policy and Practice",
    description:
      "How strategic planning and local engagement can transform sustainability policies into measurable on-the-ground impact.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
  {
    title: "Bridging the Gap Between Policy and Practice",
    description:
      "How strategic planning and local engagement can transform sustainability policies into measurable on-the-ground impact.",
    image: "/assets/images/service-card.png",
    linkText: "Read Article",
    linkHref: "#",
  },
];

const Blog = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const totalBullets = 3;
  const [activeBullet, setActiveBullet] = useState<number>(0);

  // Update active bullet on slide change
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const updateBullet = () => {
      const slidesPerBullet = Math.ceil(blogData.length / totalBullets);
      const bulletIndex = Math.floor(swiper.realIndex / slidesPerBullet);
      setActiveBullet(bulletIndex);
    };

    swiper.on("slideChange", updateBullet);
    swiper.on("init", updateBullet);

    // Initialize immediately
    updateBullet();

    return () => {
      swiper.off("slideChange", updateBullet);
      swiper.off("init", updateBullet);
    };
  }, []);

  const goToBullet = (index: number) => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const slidesPerBullet = Math.ceil(blogData.length / totalBullets);
    const targetSlide = index * slidesPerBullet;

    if (targetSlide < blogData.length) {
      swiper.slideToLoop(targetSlide);
    }
  };

  return (
    <section>
      <div className="w-full py-12 -mt-1 bg_gray_light rounded-t-[100px]">
        <div className="container mx-auto relative">
          <div className="w-[60%] mx-auto text-center mb-12">
            <h2 className="mb-3 text-dark">Blog & Perspectives</h2>
            <p className="text-black max-w-2xl mx-auto">
              Our experts share perspectives on the latest sustainability
              challenges, project innovations, and community-driven solutions.
            </p>
            <button className="secondary_btn mt-6">View All</button>
          </div>

          {/* Swiper Slider */}
          <div className="px-4">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={30}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
              className="blogs-swiper"
            >
              {blogData.map((service, i) => (
                <SwiperSlide key={i} className="mb-10">
                  <BlogCard {...service} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              {Array.from({ length: totalBullets }).map((_, i) => (
                <button
                  key={i}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === activeBullet
                      ? "bg-[#0E0E0E] w-[120px]"
                      : "bg-gray-300 w-[50px] hover:bg-gray-400"
                  }`}
                  onClick={() => goToBullet(i)}
                  aria-label={`Go to slide group ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .blogs-swiper {
          padding: 10px 5px 30px;
        }

        @media (min-width: 768px) {
          .blogs-swiper {
            padding: 15px 10px 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
