import React from "react";

const HeroSection = () => {
  return (
    <section className="hero_section relative px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        <div className="lg:w-[75%] w-full lg:pt-[290px] md:pt-[100px] lg:pb-[350px]">
          <h1>Building Sustainable Futures, Together</h1>
          <p className="text-fefe w-[75%] mt-5">
            At Suslop, we help governments, communities, and industries design
            and deliver solutions that balance environmental responsibility,
            economic growth, and social well-being.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <button className="btn primary_btn">Start a Conversation</button>
            <button className="btn primary_btn_outline">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
