import React from "react";

const Form = () => {
  return (
    <section>
      <div className="container mx-auto my-20 px-4">
        {/* Heading Row */}
        <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-20 lg:gap-5 gap-5 lg:mb-12 md:mb-8 mb-5">
          <div className="xl:col-span-7">
            <h2 className="text-dark text-3xl font-bold">Let’s Connect</h2>
          </div>
          <div className="xl:col-span-5">
            <p className="text-black">
              At Suslop, we help governments, communities, and industries design
              and deliver solutions that balance environmental responsibility,
              economic growth, and social well-being.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form className="mt-10 space-y-5">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First name *"
              className="w-full rounded-md border border-gray-300 bg-[#9F9F9F1A] placeholder:text-[#292929] px-4 py-3 focus:border-black focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-full rounded-md border border-gray-300 bg-[#9F9F9F1A] placeholder:text-[#292929] px-4 py-3 focus:border-black focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email *"
            className="w-full rounded-md border border-gray-300 bg-[#9F9F9F1A] placeholder:text-[#292929] px-4 py-3 focus:border-black focus:outline-none"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Enter your Phone Number *"
            className="w-full rounded-md border border-gray-300 bg-[#9F9F9F1A] placeholder:text-[#292929] px-4 py-3 focus:border-black focus:outline-none"
            required
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject *"
            className="w-full rounded-md border border-gray-300 bg-[#9F9F9F1A] placeholder:text-[#292929] px-4 py-3 focus:border-black focus:outline-none"
            required
          />

          {/* Message */}
          <textarea
            rows={6}
            placeholder="Your message here *"
            className="w-full rounded-md border border-gray-300 bg-[#9F9F9F1A] placeholder:text-[#292929] min-h-16 px-4 py-3 focus:border-black focus:outline-none"
            required
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="btn secondary_btn">
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
