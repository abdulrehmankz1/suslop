"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type TocItem = { id: string; label: string; tag: string };

export default function TOCWithHighlight({ toc }: { toc: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(`#${entry.target.id}`);
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    toc.forEach((section) => {
      const el = document.querySelector(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  return (
    <div className="w-full lg:w-[30%] border-s-0 lg:border-s-2 border-[#00000033] lg:ps-7 lg:sticky top-20 h-fit lg:mb-12">
      <div className="hidden lg:block toc_container">
        <h4 className="text-dark">Table of Content</h4>
        <ol className="-mt-6 lg:mt-10 list-decimal list-outside pl-6">
          {toc.map((section, index) => (
            <li
              key={section.id}
              className={`text-xl xl:text-3xl lg:text-2xl cursor-pointer transition-colors ${
                index === 0
                  ? "pb-4 lg:pb-7"
                  : "py-4 lg:py-7 border-t-1 border-[#00000033]"
              } ${
                activeId === section.id
                  ? "text_dark"
                  : "text-[#0E0E0E80] hover:text-dark"
              }`}
            >
              <Link href={section.id} className="block">
                {section.label}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
