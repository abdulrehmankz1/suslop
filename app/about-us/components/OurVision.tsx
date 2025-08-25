import Image from "next/image";
import React from "react";

const valuesData = [
  {
    icon: "/assets/images/value-1.png",
    title: "Integrity",
    description:
      "Acting with transparency, honesty, and respect in everything we do.",
  },
  {
    icon: "/assets/images/value-2.png",
    title: "Collaboration",
    description: "Building strong partnerships that empower shared success.",
  },
  {
    icon: "/assets/images/value-3.png",
    title: "Innovation",
    description:
      "Leveraging new ideas, technologies, and approaches to address evolving challenge.",
  },
  {
    icon: "/assets/images/value-4.png",
    title: "Respect for Communities",
    description:
      "Valuing cultural heritage, local knowledge, and diverse perspectives.",
  },
  {
    icon: "/assets/images/value-5.png",
    title: "Sustainability",
    description:
      "Committing to environmental stewardship and long-term impact.",
  },
];

const OurVision = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-black p-12 rounded-[50px]">
            <h2 className="text-white">Our Mission</h2>
            <p className="text-white mt-3">
              To create innovative, practical, and culturally respectful
              solutions that enable communities and industries to prosper while
              protecting the natural environment.
            </p>
          </div>
          <div className="bg-black p-12 rounded-[50px]">
            <h2 className="text-white">Our Vision</h2>
            <p className="text-white mt-3">
              A world where sustainable development is the standard — not the
              exception — and every project leaves a positive legacy for future
              generations.
            </p>
          </div>
        </div>

        {/* map data */}
        <div className="bg-black p-12 rounded-[50px] mt-5">
          <h2 className="text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16">
            {valuesData.map((value, index) => (
              <div key={index}>
                <div className="p-4 w-fit rounded-full bg-white">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={50}
                    height={50}
                    draggable="false"
                  />
                </div>
                <h4 className="text-white mt-7">{value.title}</h4>
                <p className="text-white mt-2 opacity-[0.7]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
