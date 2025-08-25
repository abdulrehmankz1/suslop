import React from "react";
import ServiceOfferCard from "./ServiceOfferCard";

const ServicesSection = () => {
  const services = [
    {
      number: 1,
      title: "Sustainability Strategy",
      description:
        "Setting clear, measurable goals and turning vision into action.",
      image: "/assets/images/service-card.png",
      listItems: [
        "Sustainability assessments",
        "Standards benchmarking",
        "Risk assessments & impact measurement",
        "Performance evaluations & governance models",
        "Reconciliation planning",
        "Custom strategic advisory",
      ],
    },
    {
      number: 2,
      title: "Renewable Energy Solutions",
      description:
        "Innovative solutions to transition towards renewable energy.",
      image: "/assets/images/service-card.png",
      listItems: [
        "Solar and wind integration",
        "Energy efficiency consulting",
        "Carbon footprint reduction",
        "Technology roadmap",
      ],
    },
    {
      number: 3,
      title: "Community Development",
      description:
        "Empowering communities with sustainable and inclusive strategies.",
      image: "/assets/images/service-card.png",
      listItems: [
        "Stakeholder engagement",
        "Capacity building programs",
        "Infrastructure development",
        "Cultural heritage preservation",
      ],
    },
    {
      number: 4,
      title: "Sustainability Strategy",
      description:
        "Setting clear, measurable goals and turning vision into action.",
      image: "/assets/images/service-card.png",
      listItems: [
        "Sustainability assessments",
        "Standards benchmarking",
        "Risk assessments & impact measurement",
        "Performance evaluations & governance models",
        "Reconciliation planning",
        "Custom strategic advisory",
      ],
    },
    {
      number: 5,
      title: "Renewable Energy Solutions",
      description:
        "Innovative solutions to transition towards renewable energy.",
      image: "/assets/images/service-card.png",
      listItems: [
        "Solar and wind integration",
        "Energy efficiency consulting",
        "Carbon footprint reduction",
        "Technology roadmap",
      ],
    },
    {
      number: 6,
      title: "Community Development",
      description:
        "Empowering communities with sustainable and inclusive strategies.",
      image: "/assets/images/service-card.png",
      listItems: [
        "Stakeholder engagement",
        "Capacity building programs",
        "Infrastructure development",
        "Cultural heritage preservation",
      ],
    },
    {
      number: 7,
      title: "Sustainability Strategy",
      description:
        "Setting clear, measurable goals and turning vision into action.",
      image: "/assets/images/service-card.png",
      listItems: [
        "Sustainability assessments",
        "Standards benchmarking",
        "Risk assessments & impact measurement",
        "Performance evaluations & governance models",
        "Reconciliation planning",
        "Custom strategic advisory",
      ],
    },
    {
      number: 8,
      title: "Renewable Energy Solutions",
      description:
        "Innovative solutions to transition towards renewable energy.",
      image: "/assets/images/service-card.png",
      listItems: [
        "Solar and wind integration",
        "Energy efficiency consulting",
        "Carbon footprint reduction",
        "Technology roadmap",
      ],
    },
    {
      number: 9,
      title: "Community Development",
      description:
        "Empowering communities with sustainable and inclusive strategies.",
      image: "/assets/images/service-card.png",
      listItems: [
        "Stakeholder engagement",
        "Capacity building programs",
        "Infrastructure development",
        "Cultural heritage preservation",
      ],
    },
  ];

  return (
    <section className="py-12 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceOfferCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              image={service.image}
              listItems={service.listItems}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
