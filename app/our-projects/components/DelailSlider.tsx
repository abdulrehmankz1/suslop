"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

interface DetailSliderProps {
  images?: string[];
}

const defaultImages = [
  "/assets/images/detail-image.png",
  "/assets/images/detail-image.png",
  "/assets/images/detail-image.png",
  "/assets/images/detail-image.png",
  "/assets/images/detail-image.png",
];

function DetailSlider({ images = defaultImages }: DetailSliderProps) {
  return (
    <div className="detail_page relative">
      <div className="container mx-auto relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#FEFEFE] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#FEFEFE] to-transparent" />
        {/* Custom arrows */}
        <button className="swiper-button-prev-custom absolute left-5 top-1/2 cursor-pointer -translate-y-1/2 z-20 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-black/20 backdrop-blur-sm">
          <ChevronLeft className="text-white" size={32} />
        </button>

        <button className="swiper-button-next-custom absolute right-5 top-1/2 cursor-pointer -translate-y-1/2 z-20 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-black/20 backdrop-blur-sm">
          <ChevronRight className="text-white" size={32} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3} // default for desktop
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 3 }, // Tablet
            1024: { slidesPerView: 3 }, // Laptop/Desktop
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          loop
          className="detail_swipper"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="image_wrapper overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default DetailSlider;
