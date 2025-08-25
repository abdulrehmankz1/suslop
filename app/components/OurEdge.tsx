import Image from "next/image";
import React from "react";

const OurEdge = () => {
  return (
    <section className="our_edge px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap w-full xl:gap-9 lg:gap-7 gap-9">
          {/* First child: 40% */}
          <div className="w-full xl:w-2/5 lg:w-3/6">
            <h2 className="text-start text-dark">
              Our Difference is in the Details
            </h2>
            <div className="xl:my-12 lg:my-8 md:my-8 my-5">
              <div className="xl:pb-7 lg:pb-4 md:pb-5 pb-3 border-b border-[#0E0E0E4D]">
                <h4 className="text-dark">Integrated Expertise</h4>
                <p className="text-dark opacity-[0.7] mt-2.5">
                  bridging environmental science, infrastructure, and community
                  engagement.
                </p>
              </div>
              <div className="xl:py-7 lg:py-4 md:py-5 py-3 border-b border-[#0E0E0E4D]">
                <h4 className="text-dark">Local Knowledge</h4>
                <p className="text-dark opacity-[0.7] mt-2.5">
                  deep understanding of regional, cultural, and regulatory
                  contexts.
                </p>
              </div>
              <div className="xl:pt-7 lg:pt-4 md:pt-5 pt-3">
                <h4 className="text-dark">Sustainable Impact</h4>
                <p className="text-dark opacity-[0.7] mt-2.5">
                  balancing today’s needs with tomorrow’s priorities.
                </p>
              </div>
            </div>
            <button className="btn secondary_btn">Learn More</button>
          </div>

          {/* Second child: 60% */}
          <div className="w-full xl:w-3/5 lg:w-3/6 flex justify-between gap-3">
            <div className="w-[40%] flex flex-col gap-3">
              <Image
                src="/assets/images/left-top.png"
                alt="Description"
                width={320}
                height={245}
                className="w-full h-auto"
                draggable="false"
              />
              <Image
                src="/assets/images/left-bottom.png"
                alt="Description"
                width={320}
                height={245}
                className="w-full h-auto"
                draggable="false"
              />
            </div>
            <div className="w-[60%]">
              <Image
                src="/assets/images/right.png"
                alt="Description"
                width={460}
                height={535}
                className="w-full h-auto"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default OurEdge;
