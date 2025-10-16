import Image from "next/image";
import React from "react";

const valuesData = [
  {
    icon: "/assets/images/value-1.png",
    title: "Impact-Driven:",
    description:
      "Every engagement prioritizes net-positive results for people, organizations, and the environment.",
  },
  {
    icon: "/assets/images/value-2.png",
    title: "Collaborative Partnerships:",
    description:
      "We co-create solutions built on mutual trust and understanding.",
  },
  {
    icon: "/assets/images/value-3.png",
    title: "Research-Infused Expertise:",
    description:
      "Our academic rigor — paired with real-world experience — ensures each strategy is grounded, relevant, and actionable.",
  },
];
const ChooseUs = () => {
  return (
    <section className="pt_100 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Values */}
        <div className="bg-black p-8 md:p-12 rounded-3xl">
          <h2 className="text-white text-center mb-10 md:mb-12">Why Suslop?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 gap-x-6 gap-y-12">
            {valuesData.map((value, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="p-4 w-fit mx-auto sm:mx-0 rounded-full bg-white">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={35}
                    height={35}
                    className="sm:w-[45px] sm:h-[45px]"
                    draggable="false"
                  />
                </div>
                <h4 className="text-white mt-6 text-lg font-semibold">
                  {value.title}
                </h4>
                <p className="text-white mt-2 opacity-70 leading-relaxed">
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

export default ChooseUs;
