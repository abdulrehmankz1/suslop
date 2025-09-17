"use client";

import React, { useRef, useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import { fetchAllServices, extractServiceData, WPService, ServiceData } from "../../services/service.service";

const Services = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const totalBullets = 3;
  const [activeBullet, setActiveBullet] = useState<number>(0);
  const [servicesData, setServicesData] = useState<ServiceData[]>([]);

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
  }, [servicesData]);

  useEffect(() => {
    const loadServices = async () => {
      const wpServices: WPService[] = await fetchAllServices();
      const extractedServices = wpServices.map((service) => extractServiceData(service)).filter((data): data is ServiceData => data !== null);
      setServicesData(extractedServices);
    };
    loadServices();
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
    <section>
      <div className="relative md:-mt-[200px] -mt-[120px]">
        {/* Yellow Shape */}
        <div className="hero_shape w-[80%] md:h-28 h-20 mx-auto"></div>

        {/* Red Shape */}
        <div className="hero_shape w-[90%] h-36 mx-auto -mt-1"></div>

        {/* Service Section */}
        <div className="service_section w-full md:py-12 py-10 -mt-1 px-3 md:px-4 lg:px-5">
          <div className="container mx-auto relative">
            <div className="lg:w-[60%] md:w-[75%] mx-auto text-center lg:mb-12 mb-7">
              <h2 className="mb-3 text-dark">
                Holistic Solutions for Complex Challenges
              </h2>
              <p className="text-black max-w-2xl mx-auto">
                We bring decades of multidisciplinary experience to create
                tailored strategies that work for people and the planet.
              </p>
            </div>

            {/* Swiper Slider */}
            <div className="md:px-4">
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
                  <SwiperSlide key={service.id}>
                    <ServiceCard
                      number={i + 1}
                      title={service.title}
                      description={service.description}
                      image={service.featuredImage || undefined}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination */}
              <div className="flex justify-center lg:mt-12 md:mt-8 mt-5 gap-2">
                {Array.from({ length: totalBullets }).map((_, i) => (
                  <button
                    key={i}
                    className={`md:h-3 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeBullet
                        ? "bg-[#0E0E0E] md:w-[120px] w-[80px]"
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
