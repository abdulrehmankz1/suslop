"use client";
import React, { useEffect, useState } from "react";
import ServiceOfferCard from "./ServiceOfferCard";
import {
  fetchAllServices,
  extractServiceData,
  ServiceData,
} from "@/services/service.service";

const ServicesSection = () => {
  const [services, setServices] = useState<ServiceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      const servicesData = await fetchAllServices();

      const formattedServices: ServiceData[] = servicesData
        .map((service) => extractServiceData(service))
        .filter((service): service is ServiceData => service !== null);

      setServices(formattedServices);
      setLoading(false);
    };

    loadServices();
  }, []);

  return (
    <section className="pt_100 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        <div className="lg:w-[60%] md:w-[75%] mx-auto text-center lg:mb-12 mb-7">
          <h2 className="mb-3 text-dark">Our Service Offerings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 md:gap-5 gap-4">
          {loading
            ? // Skeleton loader cards
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="service_card animate-pulse">
                  <div className="flex items-baseline mb-2">
                    <div className="h-6 w-10 bg-gray-300 rounded"></div>
                    <hr className="border-1 border-y-gray-200 w-full mx-2" />
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="h-[300px] w-full bg-gray-300 rounded-lg my-4"></div>
                  <div>
                    <div className="h-6 w-2/3 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded mb-1"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded mb-1"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded mb-1"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded mb-1"></div>
                  </div>
                </div>
              ))
            : // Actual services
              services.map((service, index) => (
                <ServiceOfferCard
                  key={service.id}
                  number={index + 1}
                  title={service.title}
                  description={service.description}
                  image={service.featuredImage ?? "/assets/service-card.png"}
                  listItems={service.listItems}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
