import { notFound } from "next/navigation";
import Image from "next/image";
import DetailSlider from "../components/DelailSlider";
import VideoWrapper from "../components/VideoWrapper";
import CTA from "@/app/components/CTA";
import {
  fetchReportBySlug,
  fetchAllReports,
  extractReportData,
} from "@/services/report.service";
import * as cheerio from "cheerio";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to generate Table of Contents (TOC) and modify content
const generateTOCAndContent = (htmlContent: string) => {
  if (!htmlContent) {
    return { toc: [], content: "" };
  }
  const $ = cheerio.load(htmlContent);
  const toc: { id: string; label: string; tag: string }[] = [];
  const usedIds = new Set<string>();

  $("h2, h3").each((_, element) => {
    const title = $(element).text();
    let id = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    let uniqueId = id;
    let counter = 1;
    while (usedIds.has(uniqueId)) {
      uniqueId = `${id}-${counter}`;
      counter++;
    }
    usedIds.add(uniqueId);
    $(element).attr("id", uniqueId);
    toc.push({
      id: `#${uniqueId}`,
      label: title,
      tag: element.tagName,
    });
  });

  return { toc, content: $.html() };
};

const Page = async ({ params }: CaseStudyPageProps) => {
  const { slug } = await params;

  const report = await fetchReportBySlug(slug);
  if (!report) return notFound();

  const reportData = extractReportData(report);
  if (!reportData) return notFound();

  const { toc, content } = generateTOCAndContent(reportData.content);

  return (
    <section className="py-10 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        <div className="detail_page">
          <div className="image_wrapper overflow-hidden rounded-2xl">
            <Image
              src={reportData?.featuredImage || "/assets/images/detail-image.png"}
              alt={reportData?.title || "Report"}
              width={600}
              height={400}
              className="rounded-lg mt-20 w-full! h-full! object-cover"
              draggable="false"
            />
          </div>

          <div className="mt-12">
            <h2 className="text-dark lg:w-[60%] md:w-[80%] w-full">
              {reportData?.title || "Report Title"}
            </h2>
            <p className="mt-3 text-dark opacity-[0.7]">
              {reportData?.excerpt || "Report excerpt"}
            </p>
          </div>
          <div>
            <DetailSlider />
            <div>
              <h4 className="text-dark">
                Bridging the Gap Between Policy and Practice
              </h4>
              <p className="mt-3 text-dark opacity-[0.7]">
                How strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.
                How strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.
              </p>
            </div>
            <div className="mt-10">
              <h4 className="text-dark">
                Bridging the Gap Between Policy and Practice
              </h4>
              <p className="mt-3 text-dark opacity-[0.7]">
                How strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.
                How strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.
              </p>
            </div>
            <div>
              {/* Video wrapper */}
              <div className="my-10">
                <VideoWrapper />
              </div>
              <div>
                <h4 className="text-dark">
                  Bridging the Gap Between Policy and Practice
                </h4>
                <p className="mt-3 text-dark opacity-[0.7]">
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground
                  impact.How strategic planning and local engagement can
                  transform sustainability policies into measurable
                  on-the-ground impact.How strategic planning and local
                  engagement can transform sustainability policies into
                  measurable on-the-ground impact.How strategic planning and
                  local engagement can transform sustainability policies into
                  measurable on-the-ground impact.How strategic planning and
                  local engagement can transform sustainability policies into
                  measurable on-the-ground impact.
                </p>
              </div>
              <div className="my-10">
                <h4 className="text-dark">
                  Bridging the Gap Between Policy and Practice
                </h4>
                <p className="mt-3 text-dark opacity-[0.7]">
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground
                  impact.How strategic planning and local engagement can
                  transform sustainability policies into measurable
                  on-the-ground impact.How strategic planning and local
                  engagement can transform sustainability policies into
                  measurable on-the-ground impact.How strategic planning and
                  local engagement can transform sustainability policies into
                  measurable on-the-ground impact.How strategic planning and
                  local engagement can transform sustainability policies into
                  measurable on-the-ground impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <CTA
        heading="Let’s Build Something That Lasts."
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </section>
  );
};

export default Page;
