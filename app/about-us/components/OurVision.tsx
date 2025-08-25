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
    <section className="lg:py-12 py-10 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto px-4">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black p-8 md:p-12 rounded-3xl">
            <h2 className="text-white">
              Our Mission
            </h2>
            <p className="text-white mt-3 text-sm md:text-base leading-relaxed">
              To create innovative, practical, and culturally respectful
              solutions that enable communities and industries to prosper while
              protecting the natural environment.
            </p>
          </div>
          <div className="bg-black p-8 md:p-12 rounded-3xl">
            <h2 className="text-white">
              Our Vision
            </h2>
            <p className="text-white mt-3 text-sm md:text-base leading-relaxed">
              A world where sustainable development is the standard — not the
              exception — and every project leaves a positive legacy for future
              generations.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-black p-8 md:p-12 rounded-3xl mt-6">
          <h2 className="text-white text-center mb-10 md:mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {valuesData.map((value, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="p-4 w-fit mx-auto sm:mx-0 rounded-full bg-white">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={50}
                    height={50}
                    draggable="false"
                  />
                </div>
                <h4 className="text-white mt-6 text-lg font-semibold">
                  {value.title}
                </h4>
                <p className="text-white mt-2 opacity-70 text-sm md:text-base leading-relaxed">
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
