'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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

// --- API Functions and Helpers ---
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
  const cleanedContent = contentHtml;

  return {
    id: report.id,
    slug: report.slug,
    title: report.title?.rendered || "Untitled Report",
    excerpt: stripHtml(report.excerpt?.rendered || ""),
    content: cleanedContent,
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

// --- Slider Component ---
const Slider: React.FC = () => {
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reports.length) % reports.length);
  };

  if (loading) {
    return <div className="text-center p-10">Loading reports...</div>;
  }

  if (reports.length < 2) {
    return <div className="text-center p-10">Not enough reports to display a slider.</div>;
  }

  const activeSlide = reports[currentIndex];
  const inactiveSlide = reports[(currentIndex + 1) % reports.length];

  return (
    <div className="relative w-full overflow-hidden p-6">
      <div className="flex w-full transition-transform duration-500 ease-in-out">
        {/* Active Slide (60% width) */}
        <div className="w-[60%] flex-shrink-0 p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="relative h-96">
              {activeSlide.featuredImage && (
                <Image
                  src={activeSlide.featuredImage}
                  alt={activeSlide.title}
                  fill
                  className="rounded-t-lg object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="mt-2 text-2xl font-bold">{activeSlide.title}</h3>
              <p className="mt-2 text-gray-600">{activeSlide.excerpt}</p>
              <a href={`/reports/${activeSlide.slug}`} className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700 font-semibold">
                Read Report
                <span className="ml-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Inactive Slide (40% width) */}
        <div className="w-[40%] flex-shrink-0 p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="relative h-96">
              {inactiveSlide.featuredImage && (
                <Image
                  src={inactiveSlide.featuredImage}
                  alt={inactiveSlide.title}
                  fill
                  className="rounded-t-lg object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="mt-2 text-xl font-semibold">{inactiveSlide.title}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-6 bottom-6 flex space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        >
          <svg className="w-6 h-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;