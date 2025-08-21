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
    <section className="reports_section">
      <div className="container mx-auto">
        {/* Heading Row */}
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h2 className="text-dark w-1/2">Insights & Reports</h2>
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
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            loop={true}
            slidesPerView={"auto"}
            centeredSlides={false}
            navigation={{
              nextEl: ".reports-next",
              prevEl: ".reports-prev",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="reports-swiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="report-card">
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
                <div>
                  <div className="text-green-deep mt-5">Report</div>
                  <Link href="#" className="hover:underline">
                    <h4 className="text-dark my-2.5">
                      2025 Sustainability Trends Report
                    </h4>
                  </Link>

                  {/* Always rendered, only opacity/translate toggles */}
                  <div
                    className={`transition-all duration-500 ease-in-out transform ${
                      activeIndex === 0
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none absolute"
                    }`}
                  >
                    <p className="text-dark mb-7">
                      Explore the emerging environmental, social, and regulatory
                      shifts shaping the future of infrastructure and community
                      projects.
                    </p>
                    <Link href="#">
                      <div className="flex gap-9 items-center">
                        <h4 className="text-dark mr-2">Read Report</h4>
                        <ArrowUpRight size={40} color="#0E0E0E" />
                      </div>
                      <div className="h-1 w-[100px] bg-black mt-1"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="report-card">
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
                <div>
                  <div className="text-green-deep mt-5">Report</div>
                  <Link href="#" className="hover:underline">
                    <h4 className="text-dark my-2.5">
                      Indigenous Partnership Best Practices
                    </h4>
                  </Link>

                  <div
                    className={`transition-all duration-500 ease-in-out transform ${
                      activeIndex === 1
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none absolute"
                    }`}
                  >
                    <p className="text-dark mb-7">
                      Explore the emerging environmental, social, and regulatory
                      shifts shaping the future of infrastructure and community
                      projects.
                    </p>
                    <Link href="#">
                      <div className="flex gap-9 items-center">
                        <h4 className="text-dark mr-2">Read Report</h4>
                        <ArrowUpRight size={40} color="#0E0E0E" />
                      </div>
                      <div className="h-1 w-[100px] bg-black mt-1"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="report-card">
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
                <div>
                  <div className="text-green-deep mt-5">Report</div>
                  <Link href="#" className="hover:underline">
                    <h4 className="text-dark my-2.5">
                      Climate Impact Analysis
                    </h4>
                  </Link>

                  <div
                    className={`transition-all duration-500 ease-in-out transform ${
                      activeIndex === 2
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none absolute"
                    }`}
                  >
                    <p className="text-dark mb-7">
                      Explore the emerging environmental, social, and regulatory
                      shifts shaping the future of infrastructure and community
                      projects.
                    </p>
                    <Link href="#">
                      <div className="flex gap-9 items-center">
                        <h4 className="text-dark mr-2">Read Report</h4>
                        <ArrowUpRight size={40} color="#0E0E0E" />
                      </div>
                      <div className="h-1 w-[100px] bg-black mt-1"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Nav Buttons */}
          <div className="absolute bottom-22 right-4 flex gap-3 z-10">
            <button className="reports-prev p-4 bg-[#EFEFEF] rounded-full flex items-center justify-center cursar-pointer">
              <ArrowLeft size={35} className="text-[#AAAAAA]" />
            </button>
            <button className="reports-next p-4 bg-black/70 rounded-full flex items-center justify-center cursar-pointer">
              <ArrowRight size={35} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
