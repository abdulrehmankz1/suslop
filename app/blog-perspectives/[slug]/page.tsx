// src/app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import {
  fetchPostBySlug,
  fetchAllPosts,
  extractPostData,
} from "@/services/blog.service";
import * as cheerio from "cheerio";
import { ChevronDown } from "lucide-react";

import "../../styles/detail.scss";

// Helper function to generate Table of Contents (TOC) and modify content
const generateTOCAndContent = (htmlContent: string) => {
  if (!htmlContent) {
    return { toc: [], content: "" };
  }
  const $ = cheerio.load(htmlContent);
  const toc: { id: string; label: string; tag: string }[] = [];

  $("h2, h3").each((_, element) => {
    const title = $(element).text();
    const id = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    $(element).attr("id", id);
    toc.push({
      id: `#${id}`,
      label: title,
      tag: element.tagName,
    });
  });

  return { toc, content: $.html() };
};

// **THE KEY CHANGE IS HERE:** We're explicitly typing params as a Promise and awaiting it.
const BlogDetailPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;

  const post = await fetchPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const blogData = extractPostData(post);
  if (!blogData) {
    notFound();
  }

  const { toc, content } = generateTOCAndContent(blogData.content);

  return (
    <section>
      <div className="container mx-auto scroll-smooth px-4 sm:px-6 lg:px-8 pb-10">
        <div className="blog_detail_page mt-10">
          {blogData.featuredImage && (
            <div className="blog_detail_page">
              <div className="image_wrapper overflow-hidden rounded-2xl">
                <Image
                  src={blogData.featuredImage}
                  alt={blogData.title}
                  width={600}
                  height={400}
                  className="rounded-lg mt-20 w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row items-start mt-12 justify-between gap-12">
            <div className="w-full lg:w-[70%] blog_detail_section">
              <div id="intro">
                <h1 className="text-dark text_h2">{blogData.title}</h1>
              </div>

              <div
                className="mt-10 content_block"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            <div className="w-full lg:w-[30%] border-s-0 lg:border-s-2 border-[#00000033] lg:ps-7 lg:sticky top-20 h-fit lg:mb-12">
              <div className="block lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
                <div className="container mx-auto px-4 py-3">
                  <div className="relative">
                    <select
                      id="toc-dropdown"
                      className="w-full border border-gray-300 rounded-md p-2 pr-10 text-dark appearance-none focus:outline-none focus:ring-0"
                    >
                      {toc.map((section) => (
                        <option key={section.id} value={section.id}>
                          {section.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={20}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                  </div>
                </div>
              </div>

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
                      } text-[#0E0E0E80] hover:text-dark`}
                    >
                      <Link href={section.id} className="block">
                        {section.label}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
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

export default BlogDetailPage;

export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
