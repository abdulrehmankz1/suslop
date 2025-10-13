import { ArrowUpRight } from "lucide-react";
import React from "react";

const LocateUs = () => {
  return (
    <section className="mt_100 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-dark text-center md:text-left">Locate Us</h2>

        {/* Map */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] mt-6 md:mt-10 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.475796938668!2d-79.38541378450356!3d43.650511979121356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d3c3a1e3e1%3A0x9b6f0a5ad1f9d5a9!2s200%20University%20Ave%20Suite%201000%2C%20Toronto%2C%20ON%20M5H%203C6%2C%20Canada!5e0!3m2!1sen!2sca!4v1693848478189!5m2!1sen!2sca"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address + Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
          <div className="text-center md:text-left md:text-2xl text-xl text-dark">
            200 University Ave., Suite 1000 <br /> Toronto, Ontario, M5H 3C6
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              type="button"
              className="btn secondary_btn flex items-center justify-center md:justify-between gap-3 w-full md:w-auto"
            >
              <span>Get Directions</span>
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocateUs;
