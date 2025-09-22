import React from "react";

interface CTAProps {
  heading: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

const CTA = ({
  heading,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
}: CTAProps) => {
  return (
    <section className="relative z-10 px-3 md:px-4 lg:px-5 mt_100">
      <div className="container mx-auto">
        <div className="footer_banner md:p-10 px-5 py-7">
          <div className="flex flex-col xl:gap-28 lg:gap-20 gap-0">
            {/* Heading */}
            <div className="xl:w-1/2 lg:w-2/3 w-full md:mb-0 mb-3">
              <h2 className="text-fefe">{heading}</h2>
            </div>

            {/* Description + Buttons */}
            <div className="xl:w-1/2 lg:w-2/3 w-full md:mt-5 lg:mt-0 flex flex-col self-end mt-auto">
              <p className="text-fefe">{description}</p>
              <div className="mt-6 flex items-center flex-wrap gap-3">
                <a href={primaryBtnLink} className="btn primary_btn">
                  {primaryBtnText}
                </a>
                {secondaryBtnText && secondaryBtnLink && (
                  <a
                    href={secondaryBtnLink}
                    className="btn primary_btn_outline"
                  >
                    {secondaryBtnText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
