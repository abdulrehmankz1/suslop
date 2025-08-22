import React from "react";

type HeroSectionProps = {
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "alt";
};

const HeroSection = ({
  title,
  description,
  className,
  variant = "default",
}: HeroSectionProps) => {
  const sectionClass = variant === "alt" ? "hero_section" : "hero_section_img";

  return (
    <section
      className={`${sectionClass} relative px-3 md:px-4 lg:px-5 ${
        className || ""
      }`}
    >
      <div className="container mx-auto">
        <div className="lg:w-[70%] w-full lg:pt-[290px] md:pt-[100px] lg:pb-[350px]">
          <h1>{title}</h1>
          <p className="text-fefe w-[75%] mt-5">{description}</p>

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
