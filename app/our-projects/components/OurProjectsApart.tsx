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
const OurProjectsApart = () => {
  return (
    <div>
      <section className="pt_100 px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          {/* Values */}
          <div className="2xl:w-[45%] xl:w-[55%] lg:w-[70%] md:w-[80%] w-full mx-auto text-center lg:mb-12 mb-7">
            <h2 className="mb-3 text-dark">What Sets Our Projects Apart</h2>
          </div>
          <div>
            {/* <h2 className="text-center xl:w-[50%] lg:w-[70%] w-full text-dark mb-10 md:mb-12 mx-auto">
              What Sets Our Projects Apart{" "}
            </h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {valuesData.map((value, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="w-fit mx-auto sm:mx-0 rounded-full">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={50}
                      height={50}
                      draggable="false"
                    />
                  </div>
                  <h4 className="text-black mt-4 text-lg font-semibold">
                    {value.title}
                  </h4>
                  <p className="text-black mt-2 opacity-70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjectsApart;
