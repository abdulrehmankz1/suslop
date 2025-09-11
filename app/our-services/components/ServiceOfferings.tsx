import React from "react";
import ServiceOfferCard from "./ServiceOfferCard";
import {
  fetchAllServices,
  extractServiceData,
  ServiceData,
} from "@/services/service.service";

const ServicesSection = async () => {
  const services = await fetchAllServices();

  const formattedServices: ServiceData[] = services
    .map((service) => extractServiceData(service))
    .filter((service): service is ServiceData => service !== null);

  console.log("Formatted Services Data with Images:", formattedServices);

  return (
    <section className="py-12 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {formattedServices.map((service, index) => (
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
