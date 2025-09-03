"use client";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Reports = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        <div className="mt-12 relative reports_swiper">
          <div className="lg:hidden block">
            <div className="flex gap-3 mb-5 justify-end">
              <button className="reports-prev p-4 bg-[#EFEFEF] rounded-full flex items-center justify-center cursor-pointer">
                <ArrowLeft size={35} className="text-[#AAAAAA]" />
              </button>
              <button className="reports-next p-4 bg-dark rounded-full flex items-center justify-center cursor-pointer">
                <ArrowRight size={35} className="text-white" />
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
              0: {
                slidesPerView: 1, // Mobile: full width
              },
              768: {
                slidesPerView: "auto", // Tablet & desktop
              },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <Link href="/our-insights" className="block">
                <div className="report-card cursor-pointer">
                  {/* Image Section */}
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/assets/images/report-1.png"
                      alt="Report 1"
                      width={500}
                      height={300}
                      draggable="false"
                      className="object-cover w-full! h-full!"
                    />
                  </div>

                  {/* Text Section */}
                  <div>
                    <div className="text-green-deep mt-5">Report</div>
                    <h4 className="text-dark my-2.5">
                      2025 Sustainability Trends Report
                    </h4>

                    {/* Animated content */}
                    <div
                      className={`transition-all duration-500 ease-in-out transform ${activeIndex === 0
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-4 pointer-events-none absolute"
                        }`}
                    >
                      <p className="text-dark mb-7">
                        Explore the emerging environmental, social, and
                        regulatory shifts shaping the future of infrastructure
                        and community projects.
                      </p>
                      <div className="flex gap-9 items-center">
                        <h4 className="text-dark mr-2">Read Report</h4>
                        <ArrowUpRight size={40} color="#0E0E0E" />
                      </div>
                      <div className="h-1 w-[100px] bg-black mt-1"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <Link href="/our-insights" className="block">
                <div className="report-card cursor-pointer">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/assets/images/report-2.png"
                      alt="Report 2"
                      width={500}
                      height={300}
                      className="object-cover w-full! h-full!"
                      draggable="false"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-green-deep mt-5">Report</div>
                    <h4 className="text-dark my-2.5">
                      Indigenous Partnership Best Practices
                    </h4>

                    <div
                      className={`transition-all duration-500 ease-in-out transform ${activeIndex === 1
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-4 pointer-events-none absolute"
                        }`}
                    >
                      <p className="text-dark mb-7">
                        Explore the emerging environmental, social, and
                        regulatory shifts shaping the future of infrastructure
                        and community projects.
                      </p>
                      <div className="flex gap-9 items-center">
                        <h4 className="text-dark mr-2">Read Report</h4>
                        <ArrowUpRight size={40} color="#0E0E0E" />
                      </div>
                      <div className="h-1 w-[100px] bg-black mt-1"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <Link href="/our-insights" className="block">
                <div className="report-card cursor-pointer">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/assets/images/report-1.png"
                      alt="Report 3"
                      width={500}
                      height={300}
                      className="object-cover w-full! h-full!"
                      draggable="false"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-green-deep mt-5">Report</div>
                    <h4 className="text-dark my-2.5">
                      Climate Impact Analysis
                    </h4>

                    <div
                      className={`transition-all duration-500 ease-in-out transform ${activeIndex === 2
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-4 pointer-events-none absolute"
                        }`}
                    >
                      <p className="text-dark mb-7">
                        Explore the emerging environmental, social, and
                        regulatory shifts shaping the future of infrastructure
                        and community projects.
                      </p>
                      <div className="flex gap-9 items-center">
                        <h4 className="text-dark mr-2">Read Report</h4>
                        <ArrowUpRight size={40} color="#0E0E0E" />
                      </div>
                      <div className="h-1 w-[100px] bg-black mt-1"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>

          {/* Custom Nav Buttons */}
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
