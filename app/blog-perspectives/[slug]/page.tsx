// app/blog-perspectives/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import CTA from "@/app/components/CTA";
import {
  fetchPostBySlug,
  fetchAllPosts,
  extractPostData,
} from "@/services/blog.service";
import * as cheerio from "cheerio";
import "../../styles/detail.scss";
import TOCWithHighlight from "../components/toc-client";

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
    toc.push({ id: `#${id}`, label: title, tag: element.tagName });
  });

  return { toc, content: $.html() };
};

interface BlogDetailProps {
  params: { slug: string };
}

const BlogDetailPage = async ({ params }: BlogDetailProps) => {
  const slug = params.slug; // ✅ no await here

  const post = await fetchPostBySlug(slug);
  if (!post) notFound();

  const blogData = extractPostData(post);
  if (!blogData) notFound();

  const { toc, content } = generateTOCAndContent(blogData.content);

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 mt-32">
        <div className="container mx-auto scroll-smooth">
          {blogData.featuredImage && (
            <div className="featured_image_wrapper">
              <Image
                src={blogData.featuredImage}
                alt={blogData.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          )}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 mt_100">
        <div className="container mx-auto scroll-smooth">
          <div className="blog_detail_page flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="w-full lg:w-[70%]">
              <h1 className="text-dark text_h2">{blogData.title}</h1>
              <div
                className="blog_detail_section"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            <TOCWithHighlight toc={toc} />
          </div>
        </div>
      </section>

      <CTA
        heading="Let’s Build Something That Lasts"
        description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Schedule a Consultation"
        secondaryBtnLink="/consultation"
      />
    </>
  );
};

export default BlogDetailPage;

export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
// This function is used to generate static paths for dynamic routes in Next.js     