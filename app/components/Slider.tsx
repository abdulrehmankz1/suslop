"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

// --- Types ---
export interface WPReport {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    ["wp:featuredmedia"]?: {
      source_url: string;
    }[];
  };
}

export interface ReportData {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: string | null;
  images: string[];
}

// --- Helpers ---
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\[&hellip;\]/g, "")
    .trim();
}

function extractImageSrcs(html: string): string[] {
  const regex = /<img[^>]+src=["']([^"']+)["']/gi;
  const srcs: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    srcs.push(match[1]);
  }
  return srcs;
}

const extractReportData = (report: WPReport): ReportData => {
  const contentHtml = report.content?.rendered || "";

  let featuredImage =
    report._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  const allImages = extractImageSrcs(contentHtml);

  if (!featuredImage && allImages.length > 0) {
    featuredImage = allImages[0];
  }

  const images = allImages.filter((src) => src !== featuredImage);

  return {
    id: report.id,
    slug: report.slug,
    title: report.title?.rendered || "Untitled Report",
    excerpt: stripHtml(report.excerpt?.rendered || ""),
    content: contentHtml,
    date: report.date,
    featuredImage,
    images,
  };
};

const fetchAllReports = async (): Promise<WPReport[]> => {
  try {
    const response = await fetch(
      "https://suslop.wasmer.app/wp-json/wp/v2/reports?_embed&per_page=10"
    );
    if (!response.ok) {
      console.error("Failed to fetch reports:", response.status);
      return [];
    }
    return (await response.json()) as WPReport[];
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};

// --- Slider ---
const Slider = () => {
  const [reports, setReports] = useState<ReportData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const fetchedReports = await fetchAllReports();
      const transformedReports = fetchedReports.map(extractReportData);
      setReports(transformedReports);
      setLoading(false);
    };

    getData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reports.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reports.length) % reports.length
    );
  };

  if (loading) {
    return <div className="text-center p-10">Loading reports...</div>;
  }

  if (reports.length < 2) {
    return (
      <div className="text-center p-10">
        Not enough reports to display a slider.
      </div>
    );
  }

  const activeSlide = reports[currentIndex];
  const inactiveSlide = reports[(currentIndex + 1) % reports.length];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Mobile Nav */}
      <div className="lg:hidden block">
        <div className="flex gap-3 mb-5 justify-end">
          <button
            onClick={prevSlide}
            className="reports-prev md:p-4 p-3 bg-[#EFEFEF] rounded-full flex items-center justify-center cursor-pointer"
          >
            <ArrowLeft size={35} className="text-[#AAAAAA] size-6" />
          </button>
          <button
            onClick={nextSlide}
            className="reports-next md:p-4 p-3 bg-dark rounded-full flex items-center justify-center cursor-pointer"
          >
            <ArrowRight size={35} className="text-white size-6" />
          </button>
        </div>
      </div>

      {/* Main Slides */}
      <div className="flex w-full gap-6">
        {/* Active Slide */}
        {/* Active Slide */}
        <div className="w-full lg:w-[60%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href={`/our-reports/${activeSlide.slug}`}>
                {/* Image Wrapper */}
                <div className="relative h-96 rounded-lg overflow-hidden">
                  {activeSlide.featuredImage && (
                    <Image
                      src={activeSlide.featuredImage}
                      alt={activeSlide.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div>
                  <div className="text-green-deep mt-5">Report</div>
                  <h4 className="text-dark my-2.5">{activeSlide.title}</h4>
                  <p className="text-dark mb-7 line-clamp-3">
                    {activeSlide.excerpt}
                  </p>
                  <div className="flex md:gap-9 gap-2 items-center">
                    <h4 className="text-dark mr-2">Read Report</h4>
                    <ArrowUpRight
                      size={25}
                      color="#0E0E0E"
                      className="size-7 md:size-10"
                    />
                  </div>
                  <div className="h-1 w-[100px] bg-black mt-1"></div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Inactive Slide → Only show on desktop */}
        {/* Inactive Slide */}
        <div className="hidden lg:block w-[40%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={inactiveSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative h-96 rounded-lg overflow-hidden">
                  {inactiveSlide.featuredImage && (
                    <Image
                      src={inactiveSlide.featuredImage}
                      alt={inactiveSlide.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div>
                  <div className="text-green-deep mt-5">Report</div>
                  <h4 className="text-dark my-2.5">{inactiveSlide.title}</h4>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="lg:block hidden">
        <div className="absolute bottom-22 right-4 flex gap-3 z-10 ">
          <button
            onClick={prevSlide}
            className="reports-prev p-4 bg-[#EFEFEF] rounded-full flex items-center justify-center cursor-pointer"
          >
            <ArrowLeft size={35} className="text-[#AAAAAA]" />
          </button>
          <button
            onClick={nextSlide}
            className="reports-next p-4 bg-dark rounded-full flex items-center justify-center cursor-pointer"
          >
            <ArrowRight size={35} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
