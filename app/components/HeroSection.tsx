import React from "react";

const HeroSection = () => {
  return (
    <section className="hero_section ">
      <div className="container mx-auto">
        <div className="w-[75%] pt-[290px] pb-[350px]">
          <h1>Building Sustainable Futures, Together</h1>
          <p className="text-fefe w-[75%] mt-5">
            At Suslop, we help governments, communities, and industries design
            and deliver solutions that balance environmental responsibility,
            economic growth, and social well-being.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <button className="primary_btn">Start a Conversation</button>
            <button className="primary_btn_outline">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
