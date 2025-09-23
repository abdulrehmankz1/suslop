"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {
  fetchAllProjects,
  extractProjectData,
  WPProject,
  ProjectData,
} from "../../services/project.service";

const OurImpact = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const wpProjects: WPProject[] = await fetchAllProjects();
        const extractedProjects = wpProjects
          .map((project) => extractProjectData(project))
          .filter((data): data is ProjectData => data !== null);
        setProjects(extractedProjects);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  //  Inline Skeleton Slide
  const SkeletonSlide = () => (
    <div className="image_wrapper animate-pulse">
      <div className="w-full h-[200px] md:h-[400px] lg:h-[590px] bg-gray-700 rounded-xl"></div>
    </div>
  );

  return (
    <section className="px-3 md:px-4 lg:px-5 mt_100">
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
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <SwiperSlide key={`skeleton-${i}`}>
                    <SkeletonSlide />
                  </SwiperSlide>
                ))
              : projects.slice(0, 3).map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="image_wrapper">
                      <Image
                        src={
                          project.featuredImage || "/assets/images/image-2.png"
                        }
                        alt={project.title}
                        className="w-full! h-full! object-cover"
                        width={1920}
                        height={1080}
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
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

            @media (max-width: 767px) {
              .swiper-pagination {
                gap: 0px !important;
              }
              .swiper-pagination-bullet {
                width: 20px !important;
              }
              .swiper-pagination-bullet-active {
                width: 70px !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
