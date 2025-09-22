import React from "react";

const Introduction = () => {
  return (
    <section className="px-3 md:px-4 lg:px-5 pt_100">
      <div className="container mx-auto">
        <h2 className="text-dark">Introduction</h2>
        <p className="text-dark-50 text-50 lg:mt-12 md:mt-8 mt-5">
          <span className="text-dark me-2">
            At Suslop, we believe sustainability isn’t just a goal — it’s a
            responsibility.
          </span>
          We partner with governments, communities, and industries to design and
          deliver solutions that balance environmental stewardship, economic
          growth, and social well-being.
          <br />
          From strategic advisory to on-the-ground project delivery, our work is
          guided by one principle: building a future where people and the planet
          thrive together.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
