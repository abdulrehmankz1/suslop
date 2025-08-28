"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const OurImpact = () => {
  return (
    <section className="px-3 md:px-4 lg:px-5">
      <div className="container mx-auto md:p-10 px-5 py-10 bg-black rounded-4xl">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-5 gap-10">
          <div>
            <h2 className="text-white">Turning Vision into Reality</h2>
          </div>
          <div>
            <p className="text-fefe">
              See how Suslop partnered with local communities and industry
              leaders to deliver a renewable energy project that created jobs,
              protected ecosystems, and advanced regional sustainability goals.
            </p>
            <button className="btn primary_btn lg:mt-10 mt-5">
              View Project
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="xl:mt-12 lg:mt-10 mt-8 relative slider_container">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="rounded-xl overflow-hidden"
          >
            <SwiperSlide>
              <div className="image_wrapper">
                <Image
                  src="/assets/images/image-2.png"
                  alt="Project 1"
                  className="w-full! h-full! object-cover"
                  width={1920}
                  height={1080}
                  priority
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image_wrapper">
                <Image
                  src="/assets/images/image-2.png"
                  alt="Project 2"
                  className="w-full! h-full! object-cover"
                  width={1920}
                  height={1080}
                  priority
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image_wrapper">
                <Image
                  src="/assets/images/image-2.png"
                  alt="Project 3"
                  className="w-full! h-full! object-cover"
                  width={1920}
                  height={1080}
                  priority
                />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom pagination positioning */}
          <style jsx global>{`
            .swiper-pagination {
              bottom: 15px !important;
              right: 20px !important;
              left: auto !important;
              display: flex !important;
              gap: 5px !important;
              justify-content: flex-end;
            }
            .swiper-pagination-bullet {
              width: 50px !important;
              height: 5px !important;
              background: white !important;
              opacity: 0.2 !important;
              border-radius: 0 !important;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              width: 110px !important;
              opacity: 1 !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
