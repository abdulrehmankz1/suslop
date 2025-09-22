import Image from "next/image";

interface OurStoryProps {
  variant?: "left-images" | "left-text";
  heading: string;
  paragraphs: string[];
  buttonText?: string;
  styleVariant: "our_story" | "our_story_none";
}

const OurStory = ({
  variant = "left-images",
  heading,
  paragraphs,
  buttonText = "Learn More",
  styleVariant,
}: OurStoryProps) => {
  // Text block
  const textContent = (
    <div className="lg:w-2/5 w-full">
      <h2 className="text-start text-dark">{heading}</h2>
      {paragraphs.map((para, idx) => (
        <p
          key={idx}
          className={`text-black ${
            idx === 0 ? "mt-5" : "mt-4"
          } leading-relaxed`}
        >
          {para}
        </p>
      ))}
      {buttonText && (
        <button className="btn secondary_btn mt-7">{buttonText}</button>
      )}
    </div>
  );

  // Images block with dynamic order
  const imageContent = (
    <div
      className={`lg:w-3/5 flex flex-col sm:flex-row justify-between gap-3 ${
        variant === "left-text" ? "sm:flex-row-reverse" : ""
      }`}
    >
      {/* Big image (60%) */}
      <div className="sm:w-[60%] w-full relative aspect-[460/535]">
        <Image
          src="/assets/images/right.png"
          alt="Main"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover rounded-lg"
          draggable={false}
        />
      </div>

      {/* Stacked images (40%) */}
      <div className="sm:w-[40%] w-full flex flex-row sm:flex-col gap-3 mt-3 sm:mt-0">
        <div className="relative w-full aspect-[320/245]">
          <Image
            src="/assets/images/left-top.png"
            alt="Top"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover rounded-lg"
            draggable={false}
          />
        </div>
        <div className="relative w-full aspect-[320/245]">
          <Image
            src="/assets/images/left-bottom.png"
            alt="Bottom"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover rounded-lg"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className={`${styleVariant} pt_100 px-3 md:px-4 lg:px-5`}>
      <div className="container mx-auto">
        <div
          className={`flex w-full gap-9 ${
            variant === "left-text"
              ? "flex-col lg:flex-row-reverse"
              : "flex-col-reverse lg:flex-row"
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
