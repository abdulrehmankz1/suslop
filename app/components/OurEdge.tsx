import Image from "next/image";
import React from "react";

const OurEdge = () => {
  return (
    <section className="our_edge">
      <div className="container mx-auto">
        <div className="flex w-full gap-9">
          {/* First child: 40% */}
          <div className="w-2/5">
            <h2 className="text-start">Our Difference is in the Details</h2>
            <div className="my-12">
              <div className="pb-7 border-b border-[#0E0E0E4D]">
                <h4>Integrated Expertise</h4>
                <p className="text-dark opacity-[0.7] mt-2.5">
                  bridging environmental science, infrastructure, and community
                  engagement.
                </p>
              </div>
              <div className="py-7 border-b border-[#0E0E0E4D]">
                <h4>Local Knowledge</h4>
                <p className="text-dark opacity-[0.7] mt-2.5">
                  deep understanding of regional, cultural, and regulatory
                  contexts.
                </p>
              </div>
              <div className="pt-7">
                <h4>Sustainable Impact</h4>
                <p className="text-dark opacity-[0.7] mt-2.5">
                  balancing today’s needs with tomorrow’s priorities.
                </p>
              </div>
            </div>
            <button className="secondary_btn">Learn More</button>
          </div>

          {/* Second child: 60% */}
          <div className="w-3/5 flex justify-between gap-3">
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
