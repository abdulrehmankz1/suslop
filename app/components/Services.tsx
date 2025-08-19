"use client";

import React, { useRef, useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";

const servicesData = [
  {
    number: "01.",
    title: "Sustainability Strategy",
    description:
      "Setting clear, measurable goals and turning vision into action.",
    image: "/assets/images/service-card.png",
  },
  {
    number: "02.",
    title: "Climate Action",
    description:
      "Helping organizations reduce their carbon footprint effectively.",
    image: "/assets/images/service-card.png",
  },
  {
    number: "03.",
    title: "Innovation & Technology",
    description:
      "Driving solutions with advanced technology and smart systems.",
    image: "/assets/images/service-card.png",
  },
  {
    number: "04.",
    title: "Circular Economy",
    description: "Turning waste into resources through sustainable models.",
    image: "/assets/images/service-card.png",
  },
  {
    number: "05.",
    title: "Green Financing",
    description:
      "Funding sustainable projects with eco-friendly investment solutions.",
    image: "/assets/images/service-card.png",
  },
];

const Services = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const totalBullets = 3;
  const [activeBullet, setActiveBullet] = useState<number>(0);

  // Update active bullet on slide change
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const updateBullet = () => {
      const slidesPerBullet = Math.ceil(servicesData.length / totalBullets);
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

    const slidesPerBullet = Math.ceil(servicesData.length / totalBullets);
    const targetSlide = index * slidesPerBullet;

    if (targetSlide < servicesData.length) {
      swiper.slideToLoop(targetSlide);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-[80%] h-28 bg-green-100/30 rounded-b-[100px]"></div>
      </div>
      <div className="absolute top-6 left-0 w-full flex justify-center">
        <div className="w-[90%] h-36 bg-green-200/20 rounded-b-[120px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="w-full lg:w-2/3 mx-auto text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Holistic Solutions for Complex Challenges
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We bring decades of multidisciplinary experience to create tailored
            strategies that work for people and the planet.
          </p>
        </div>

        <div className="px-4">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            loop={true}
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
            className="services-swiper"
          >
            {servicesData.map((service, i) => (
              <SwiperSlide key={i} className="mb-10">
                <ServiceCard {...service} />
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

      <style jsx>{`
        .services-swiper {
          padding: 10px 5px 30px;
        }

        @media (min-width: 768px) {
          .services-swiper {
            padding: 15px 10px 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
