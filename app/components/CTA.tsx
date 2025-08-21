import React from "react";

const CTA = () => {
  return (
    <section className="relative z-10">
      <div className="container mx-auto">
        <div className="footer_banner p-10">
          <div className="flex gap-28">
            <div className="w-1/2 p-6">
              <h2 className="text-fefe mb-[150px]">
                Let’s Build Something That Lasts
              </h2>
            </div>
            <div className="w-1/2 p-6 flex flex-col mt-auto">
              <p className="text-fefe">
                Whether you’re at the planning stage or ready to deliver, our
                team is here to help turn your goals into measurable outcomes.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <button className="btn primary_btn">Contact Us</button>
                <button className="btn primary_btn_outline">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
