import { notFound } from "next/navigation";
import Image from "next/image";
import DetailSlider from "../components/DelailSlider";
import CTA from "@/app/components/CTA";
import {
  fetchProjectBySlug,
  fetchAllProjects,
  extractProjectData,
} from "@/services/project.service";
import * as cheerio from "cheerio";

import "../../styles/detail.scss";

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

  const project = await fetchProjectBySlug(slug);
  if (!project) return notFound();

  const projectData = extractProjectData(project);
  if (!projectData) return notFound();

  const { toc, content } = generateTOCAndContent(projectData.content);

  return (
    <>
      <section className="mt_100 pt-8">
        <div className="container mx-auto">
          <div className="featured_image_wrapper">
            <Image
              src={
                projectData?.featuredImage || "/assets/images/detail-image.png"
              }
              alt={projectData?.title || "Project"}
              width={600}
              height={400}
              className="w-full! h-full! object-cover"
              draggable="false"
            />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <div className="container mx-auto">
          <h2 className="text-dark lg:w-[60%] md:w-[80%] w-full">
            {projectData?.title || "Project Title"}
          </h2>
          <p
            className="mt-3 text-dark opacity-[0.7]"
            dangerouslySetInnerHTML={{ __html: projectData.excerpt }}
          />
          <div className="mt-10">
            <DetailSlider images={projectData.project_images} />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="container mx-auto">
          <div
            className="blog_detail_section"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </section>
      <CTA
        heading="Let’s Build Something That Lasts."
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact-us"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const projects = await fetchAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
