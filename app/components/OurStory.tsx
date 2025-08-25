import Image from "next/image";
import React from "react";

interface OurStoryProps {
  variant?: "left-images" | "left-text";
  heading: string;
  paragraphs: string[];
  buttonText?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  variant = "left-images",
  heading,
  paragraphs,
  buttonText = "Learn More",
}) => {
  // Text block
  const textContent = (
    <div className="lg:w-2/5 w-full">
      <h2 className="text-start text-dark text-2xl md:text-3xl font-bold">
        {heading}
      </h2>
      {paragraphs.map((para, idx) => (
        <p
          key={idx}
          className={`text-black ${
            idx === 0 ? "mt-5" : "mt-4"
          } text-sm md:text-base leading-relaxed`}
        >
          {para}
        </p>
      ))}
      {buttonText && (
        <button className="btn secondary_btn mt-7">{buttonText}</button>
      )}
    </div>
  );

  // Images block (static)
  const imageContent = (
    <div className="lg:w-3/5 flex flex-col sm:flex-row justify-between gap-3">
      {/* Big right image */}
      <div className="sm:w-[60%] w-full">
        <Image
          src="/assets/images/right.png"
          alt="Main"
          width={460}
          height={535}
          className="w-full h-auto rounded-lg"
          draggable="false"
        />
      </div>

      {/* Left two stacked images */}
      <div className="sm:w-[40%] w-full flex flex-row sm:flex-col gap-3 mt-3 sm:mt-0">
        <Image
          src="/assets/images/left-top.png"
          alt="Top"
          width={320}
          height={245}
          className="w-full h-auto rounded-lg"
          draggable="false"
        />
        <Image
          src="/assets/images/left-bottom.png"
          alt="Bottom"
          width={320}
          height={245}
          className="w-full h-auto rounded-lg"
          draggable="false"
        />
      </div>
    </div>
  );

  return (
    <section className="our_story py-12">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col lg:flex-row w-full gap-9 ${
            variant === "left-text" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {imageContent}
          {textContent}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
