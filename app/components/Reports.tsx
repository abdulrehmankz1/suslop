"use client";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { extractReportData, fetchAllReports, ReportData, WPReport } from "@/services/report.service";


const Reports = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reports, setReports] = useState<ReportData[]>([]);

  useEffect(() => {
    const loadReports = async () => {
      const wpReports: WPReport[] = await fetchAllReports();
      const extracted = wpReports
        .map((r) => extractReportData(r))
        .filter((r): r is ReportData => r !== null);
      setReports(extracted);
    };
    loadReports();
  }, []);

  return (
    <section className="reports_section px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading Row */}
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-5 gap-5">
          <div>
            <h2 className="text-dark xl:w-1/2 lg:w-3/4">Insights & Reports</h2>
          </div>
          <div>
            <p className="text-black">
              Stay informed with our latest research, reports, and thought
              leadership on sustainability, resource management, and community
              development.
            </p>
            <button className="btn secondary_btn mt-5">View All Reports</button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="md:mt-12 mt-5 relative reports_swiper">
          {/* Mobile Nav */}
          <div className="lg:hidden block">
            <div className="flex gap-3 mb-5 justify-end">
              <button className="reports-prev md:p-4 p-3 bg-[#EFEFEF] rounded-full flex items-center justify-center cursor-pointer">
                <ArrowLeft size={35} className="text-[#AAAAAA] size-6" />
              </button>
              <button className="reports-next md:p-4 p-3 bg-dark rounded-full flex items-center justify-center cursor-pointer">
                <ArrowRight size={35} className="text-white size-6" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={0}
            centeredSlides={false}
            navigation={{
              nextEl: ".reports-next",
              prevEl: ".reports-prev",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="reports-swiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: "auto" },
            }}
          >
            {reports.map((report, index) => (
              <SwiperSlide key={report.id}>
                <Link href={`/reports/${report.slug}`} className="block">
                  <div className="report-card cursor-pointer">
                    {/* Image */}
                    <div className="aspect-video overflow-hidden rounded-lg">
                      {report.featuredImage ? (
                        <Image
                          src={report.featuredImage}
                          alt={report.title}
                          width={500}
                          height={300}
                          draggable="false"
                          className="object-cover w-full! h-full!"
                        />
                      ) : (
                        <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                          <span>No Image</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <div className="text-green-deep mt-5">Report</div>
                      <h4 className="text-dark my-2.5">{report.title}</h4>

                      {/* Animated section */}
                      <div
                        className={`transition-all duration-500 ease-in-out transform ${
                          activeIndex === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4 pointer-events-none absolute"
                        }`}
                      >
                        <p className="text-dark mb-7">{report.excerpt}</p>
                        <div className="flex md:gap-9 gap-2 items-center">
                          <h4 className="text-dark mr-2">Read Report</h4>
                          <ArrowUpRight
                            size={25}
                            color="#0E0E0E"
                            className="size-7 md:size-10"
                          />
                        </div>
                        <div className="h-1 w-[100px] bg-black mt-1"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Nav */}
          <div className="lg:block hidden">
            <div className="absolute bottom-22 right-4 flex gap-3 z-10 ">
              <button className="reports-prev p-4 bg-[#EFEFEF] rounded-full flex items-center justify-center cursor-pointer">
                <ArrowLeft size={35} className="text-[#AAAAAA]" />
              </button>
              <button className="reports-next p-4 bg-dark rounded-full flex items-center justify-center cursor-pointer">
                <ArrowRight size={35} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
