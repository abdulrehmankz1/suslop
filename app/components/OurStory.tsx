import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="our_story py-12">
      <div className="container mx-auto">
        <div className="flex w-full gap-9">
          {/* First child: 40% */}

          <div className="w-3/5 flex justify-between gap-3">
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
          </div>

          {/* Second child: 60% */}
          <div className="w-2/5">
            <h2 className="text-start text-dark">Our Story</h2>
            <p className="text-black mt-7">
              Founded with the vision of transforming complex challenges into
              opportunities for growth, Suslop has evolved into a trusted
              partner for sustainable development.
            </p>
            <p className="text-black">
              Our multidisciplinary team brings together expertise in policy,
              engineering, community engagement, and environmental science —
              enabling us to deliver projects that are as resilient as they are
              impactful.{" "}
            </p>
            <button className="btn secondary_btn mt-7">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
