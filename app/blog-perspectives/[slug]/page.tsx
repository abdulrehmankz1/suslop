"use client";

import { useEffect, useState } from "react";
import CTA from "@/app/components/CTA";
import Image from "next/image";

const sections = [
  { id: "intro", label: "Bridging the Gap Between Policy and Practice" },
  { id: "section-1", label: "Bridging the Gap Between Policy and Practice" },
  { id: "section-2", label: "Bridging the Gap Between Policy and Practice" },
  { id: "section-3", label: "Bridging the Gap Between Policy and Practice" },
  { id: "section-4", label: "Bridging the Gap Between Policy and Practice" },
];

const BlogDetail = () => {
  const [activeId, setActiveId] = useState<string>("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="container mx-auto scroll-smooth px-4 sm:px-6 lg:px-8">
        <div className="blog_detail_page mt-10">
          {/* Banner Image */}
          <div className="image_wrapper overflow-hidden rounded-2xl">
            <Image
              src="/assets/images/blog-detail.png"
              alt=""
              width={600}
              height={400}
              className="rounded-lg mt-20 w-full h-auto object-cover"
              draggable="false"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-start mt-12 justify-between gap-12">
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-3/5">
              <div id="intro">
                <h2 className="text-dark w-full">
                  Bridging the Gap Between Policy and Practice
                </h2>
                <p className="mt-3 text-dark opacity-[0.7]">
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                </p>
              </div>

              <div className="blog_post_image mt-10">
                <div className="image_wrapper overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/images/blog-detail.png"
                    alt=""
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto object-cover"
                    draggable="false"
                  />
                </div>
              </div>

              <div className="mb-[100px]">
                {sections.slice(1).map((section) => (
                  <div id={section.id} key={section.id} className="mt-10">
                    <h4 className="text-dark">{section.label}</h4>
                    <p className="mt-3 text-dark opacity-[0.7]">
                      How strategic planning and local engagement can transform
                      sustainability policies into measurable on-the-ground
                      impact. How strategic planning and local engagement can
                      transform sustainability policies into measurable
                      on-the-ground impact. How strategic planning and local
                      engagement can transform sustainability policies into
                      measurable on-the-ground impact. How strategic planning
                      and local engagement can transform sustainability policies
                      into measurable on-the-ground impact. How strategic
                      planning and local engagement can transform sustainability
                      policies into measurable on-the-ground impact. How
                      strategic planning and local engagement can transform
                      sustainability policies into measurable on-the-ground
                      impact.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT TOC */}
            <div className="w-full lg:w-2/5 border-s-0 lg:border-s-2 border-[#00000033] lg:ps-7 lg:sticky top-20 h-fit mb-5 pb-12">
              <h4 className="text-dark">Table of Content</h4>
              <ol className="mt-6 lg:mt-10 list-decimal list-outside pl-6">
                {sections.map((section, index) => (
                  <li
                    key={section.id}
                    className={`text-xl lg:text-3xl cursor-pointer transition-colors ${
                      index === 0
                        ? "pb-4 lg:pb-7"
                        : "py-4 lg:py-7 border-t-1 border-[#00000033]"
                    } ${
                      activeId === section.id
                        ? "text-dark hover:text-[#0E0E0E80]"
                        : "text-[#0E0E0E80] hover:text-dark"
                    }`}
                  >
                    <a href={`#${section.id}`} className="block">
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <CTA
        heading="Let’s Build Something That Lasts"
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </section>
  );
};

export default BlogDetail;
