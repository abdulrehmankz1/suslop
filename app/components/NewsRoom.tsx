import React from "react";
import UpdatesCard from "./UpdatesCard";

const updatesData = [
  {
    image: "/assets/images/left-top.png",
    title: "Bridging Policy and Practice in Sustainable Development",
    link: "/updates/1",
  },
  {
    image: "/assets/images/left-top.png",
    title: "Designing Infrastructure for Climate Resilience",
    link: "/updates/2",
  },
  {
    image: "/assets/images/left-top.png",
    title: "The Future of Community-Led Developments",
    link: "/updates/3",
  },
  {
    image: "/assets/images/left-top.png",
    title: "Bridging Policy and Practice in Sustainable Development",
    link: "/updates/4",
  },
];

const NewsRoom = () => {
  return (
    <section className="latest_updates px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-20 lg:gap-5 gap-5 lg:mb-12 md:mb-8 mb-5">
          <div className="xl:w-2/3 w-[90%]">
            <h2 className="text-dark">Latest Updates from Suslop</h2>
          </div>
          <div>
            <p className="text-black">
              Stay informed on our projects, partnerships, and initiatives
              shaping sustainable development across regions.
            </p>
            <button className="btn secondary_btn mt-5">View Newsroom</button>
          </div>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {updatesData.map((update, index) => (
            <UpdatesCard
              key={index}
              image={update.image}
              title={update.title}
              link={update.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsRoom;
