import React from "react";

type HeroSectionProps = {
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "alt"; // default = hero_section_img , alt = hero_section
};

const HeroSection = ({
  title,
  description,
  className,
  variant = "default",
}: HeroSectionProps) => {
  const sectionClass =
    variant === "alt" ? "hero_section" : "hero_section_img";

  // variant-specific inner wrapper classes
  const innerClass =
    variant === "alt"
      ? // hero_section styling
        "w-full md:w-[90%] xl:w-[70%] xl:pt-[290px] xl:pb-[350px] lg:pt-[100px] lg:pb-[150px] md:pt-0 md:pb-[100px]"
      : // hero_section_img styling
        "w-full md:w-[90%] xl:w-[70%] xl:py-[200px] lg:py-[150px] md:pt-[120px] md:pb-[100px] pt-26 pb-20";

  return (
    <section
      className={`${sectionClass} relative px-3 md:px-4 lg:px-5 ${
        className || ""
      }`}
    >
      <div className="container mx-auto">
        <div className={innerClass}>
          <h1>{title}</h1>
          <p className="text-fefe lg:w-[75%] md:w-[90%] mt-5">
            {description}
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
