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
    if (!swiper || blogData.length === 0) return;

    const updateBullet = () => {
      const currentSlidesPerView = swiper.params.slidesPerView as number;
      const maxRealIndex = Math.max(0, blogData.length - currentSlidesPerView);
      const step = totalBullets > 1 ? maxRealIndex / (totalBullets - 1) : 0;

      let bulletIndex;
      if (maxRealIndex === 0) {
        bulletIndex = 0;
      } else {
        bulletIndex = Math.round(swiper.realIndex / step);
      }

      if (bulletIndex >= totalBullets) {
        bulletIndex = totalBullets - 1;
      }

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
    if (!swiper || blogData.length === 0) return;

    const currentSlidesPerView = swiper.params.slidesPerView as number;
    const maxRealIndex = Math.max(0, blogData.length - currentSlidesPerView);
    const step = totalBullets > 1 ? maxRealIndex / (totalBullets - 1) : 0;

    let targetSlide;
    if (maxRealIndex === 0) {
      targetSlide = 0;
    } else {
      targetSlide = Math.round(index * step);
    }

    swiper.slideTo(targetSlide);
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

  // Skeleton Loader for Pagination
  const SkeletonPagination = () => (
    <div className="flex justify-center lg:mt-12 md:mt-8 mt-3 gap-2">
      {Array.from({ length: totalBullets }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse md:h-3 h-2 rounded-full bg-gray-300 md:w-[50px] w-[30px]"
        ></div>
      ))}
    </div>
  );

  return (
    <section className="bg_gray_light w-full py-12 lg:rounded-t-[100px] md:rounded-t-[70px] rounded-t-[50px] lg:px-0 md:px-3 px-3 mt_100">
      <div className="container mx-auto relative">
        <div className="2xl:w-[45%] xl:w-[55%] lg:w-[70%] md:w-[80%] w-full mx-auto text-center lg:mb-12 mb-7">
          <h2 className="mb-3 text-dark">Blog & Perspectives</h2>
          <p className="text-black mx-auto">
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
            spaceBetween={10}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3.5, spaceBetween: 15 },
              1280: { slidesPerView: 3.5, spaceBetween: 25 },
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
                  <SwiperSlide key={blog.id}>
                    <BlogCard
                      title={blog.title}
                      description={blog.excerpt}
                      image={
                        blog.featuredImage || "/assets/images/service-card.png"
                      }
                      linkText="Read Article"
                      linkHref={`/blog-perspectives/${blog.slug}`}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>

          {/* Custom Pagination */}
          {loading ? (
            <SkeletonPagination />
          ) : (
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
          )}
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
