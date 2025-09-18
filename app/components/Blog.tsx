"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import BlogCard from "./BlogCard";
import {
  fetchAllPosts,
  extractPostData,
  WPPost,
  PostData,
} from "../../services/blog.service";

const Blog = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const totalBullets = 3;
  const [activeBullet, setActiveBullet] = useState<number>(0);
  const [blogData, setBlogData] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      const posts: WPPost[] = await fetchAllPosts();
      const extractedData = posts
        .map((post) => extractPostData(post))
        .filter((data): data is PostData => data !== null);
      setBlogData(extractedData);
      setLoading(false);
    };
    loadBlogs();
  }, []);

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

    updateBullet();

    return () => {
      swiper.off("slideChange", updateBullet);
      swiper.off("init", updateBullet);
    };
  }, [blogData]);

  const goToBullet = (index: number) => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const slidesPerBullet = Math.ceil(blogData.length / totalBullets);
    const targetSlide = index * slidesPerBullet;

    if (targetSlide < blogData.length) {
      swiper.slideToLoop(targetSlide);
    }
  };

  // Skeleton Loader Slide
  const SkeletonSlide = () => (
    <div className="animate-pulse rounded-xl overflow-hidden">
      <div className="w-full h-[200px] bg-gray-300"></div>
      <div className="mt-4 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );

  return (
    <section className="px-3 md:px-4 lg:px-5">
      <div className="w-full py-12 -mt-1 bg_gray_light lg:rounded-t-[100px] md:rounded-t-[70px] rounded-t-[50px] lg:px-0 md:px-3 px-0">
        <div className="container mx-auto relative">
          <div className="xl:w-[60%] lg:w-[75%] w-[80%] mx-auto text-center lg:mb-12 mb-10">
            <h2 className="mb-3 text-dark">Blog & Perspectives</h2>
            <p className="text-black max-w-2xl mx-auto">
              Our experts share perspectives on the latest sustainability
              challenges, project innovations, and community-driven solutions.
            </p>
            <button className="btn secondary_btn lg:mt-6 md:mt-5 mt-4">
              View All
            </button>
          </div>

          {/* Swiper Slider */}
          <div>
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
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <SwiperSlide key={i}>
                      <SkeletonSlide />
                    </SwiperSlide>
                  ))
                : blogData.map((blog) => (
                    <SwiperSlide key={blog.id} className="mb-10">
                      <BlogCard
                        title={blog.title}
                        description={blog.excerpt}
                        image={
                          blog.featuredImage ||
                          "/assets/images/service-card.png"
                        }
                        linkText="Read Article"
                        linkHref={`/blog-perspectives/${blog.slug}`}
                      />
                    </SwiperSlide>
                  ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="flex justify-center lg:mt-12 md:mt-8 mt-3 gap-2">
              {Array.from({ length: totalBullets }).map((_, i) => (
                <button
                  key={i}
                  className={`md:h-3 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeBullet
                      ? "bg-[#0E0E0E] md:w-[120px] w-20"
                      : "bg-gray-300 md:w-[50px] w-[30px] hover:bg-gray-400"
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
