import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/app/components/CTA";
import { fetchPostBySlug, extractPostData } from "@/services/blog.service";
import * as cheerio from "cheerio";
import { ChevronDown } from "lucide-react";

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

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

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
      <div className="container mx-auto scroll-smooth px-4 sm:px-6 lg:px-8">
        <div className="blog_detail_page mt-10">
          {blogData.featuredImage && (
            <div className="image_wrapper overflow-hidden rounded-2xl">
              <Image
                src={blogData.featuredImage}
                alt={blogData.title}
                width={1200}
                height={800}
                className="rounded-lg mt-20 w-full h-auto object-cover"
                draggable="false"
              />
            </div>
          )}

          <div className="flex flex-col lg:flex-row items-start mt-12 justify-between gap-12">
            <div className="w-full lg:w-3/5">
              <div id="intro">
                <h2 className="text-dark w-full">{blogData.title}</h2>
              </div>

              <div
                className="mt-10 content_block"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            <div className="w-full lg:w-2/5 border-s-0 lg:border-s-2 border-[#00000033] lg:ps-7 lg:sticky top-20 h-fit lg:mb-12">
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

              <div className="hidden lg:block">
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

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import CTA from "@/app/components/CTA";
// import { fetchPostBySlug, extractPostData, PostData } from "@/services/blog.service";
// import * as cheerio from "cheerio";
// import { ChevronDown } from "lucide-react";

// // Helper function to generate Table of Contents (TOC) and split content into sections
// const generateTOCAndContent = (htmlContent: string) => {
//   if (!htmlContent) {
//     return { toc: [], sections: [] };
//   }
//   const $ = cheerio.load(htmlContent);
//   const toc: { id: string; label: string; tag: string }[] = [];
//   const sections: { id: string; title: string; content: string }[] = [];

//   let currentContent = "";
//   let currentTitle = "";
//   let currentId = "";

//   // Iterate over all child elements
//   $.root()
//     .contents()
//     .each((_, element) => {
//       const tagName = element.tagName;
//       const isHeading = tagName === "h2" || tagName === "h3" || tagName === "h4";

//       // If we find a new heading, create a new section
//       if (isHeading) {
//         // Save the previous section if it exists
//         if (currentTitle) {
//           sections.push({
//             id: currentId,
//             title: currentTitle,
//             content: currentContent,
//           });
//           currentContent = "";
//         }

//         // Start a new section with the current heading
//         currentTitle = $(element).text();
//         currentId = currentTitle.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
//         $(element).attr("id", currentId);

//         toc.push({
//           id: `#${currentId}`,
//           label: currentTitle,
//           tag: tagName,
//         });
//       } else {
//         // Otherwise, append the current element's HTML to the content of the current section
//         currentContent += $(element).html() || "";
//       }
//     });

//   // Push the final section
//   if (currentTitle) {
//     sections.push({
//       id: currentId,
//       title: currentTitle,
//       content: currentContent,
//     });
//   }

//   return { toc, sections };
// };

// const BlogDetailPage = () => {
//   const { slug } = useParams();
//   const [postData, setPostData] = useState<PostData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [toc, setToc] = useState<any[]>([]);
//   const [sections, setSections] = useState<any[]>([]);
//   const [activeId, setActiveId] = useState<string>("");

//   useEffect(() => {
//     if (slug) {
//       const getPostData = async () => {
//         setLoading(true);
//         const fetchedPost = await fetchPostBySlug(slug as string);
//         const extractedData = extractPostData(fetchedPost);

//         if (!extractedData) {
//           notFound();
//           return;
//         }

//         const { toc: parsedToc, sections: parsedSections } = generateTOCAndContent(extractedData.content);

//         setPostData(extractedData);
//         setToc([{ id: "#intro", label: extractedData.title, tag: "h1" }, ...parsedToc]);
//         setSections(parsedSections);
//         setLoading(false);
//       };
//       getPostData();
//     }
//   }, [slug]);

//   useEffect(() => {
//     if (toc.length > 0) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveId(entry.target.id);
//             }
//           });
//         },
//         { rootMargin: "-25% 0px -75% 0px", threshold: 0.2 }
//       );

//       toc.forEach((section) => {
//         const el = document.getElementById(section.id.substring(1));
//         if (el) observer.observe(el);
//       });

//       return () => observer.disconnect();
//     }
//   }, [toc]);

//   if (loading) {
//     return (
//       <section>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-center text-dark mt-20">Loading...</h2>
//         </div>
//       </section>
//     );
//   }

//   if (!postData) {
//     return (
//       <section>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-center text-dark mt-20">Post not found.</h2>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section>
//       <div className="container mx-auto scroll-smooth px-4 sm:px-6 lg:px-8">
//         <div className="blog_detail_page mt-10">
//           {postData.featuredImage && (
//             <div className="image_wrapper overflow-hidden rounded-2xl">
//               <Image
//                 src={postData.featuredImage}
//                 alt={postData.title}
//                 width={1200}
//                 height={800}
//                 className="rounded-lg mt-20 w-full h-auto object-cover"
//                 draggable="false"
//               />
//             </div>
//           )}

//           <div className="flex flex-col lg:flex-row items-start mt-12 justify-between gap-12">
//             <div className="w-full lg:w-3/5">
//               <div id="intro">
//                 <h2 className="text-dark w-full">{postData.title}</h2>
//                 <p className="mt-3 text-dark opacity-[0.7]">{postData.excerpt}</p>
//                      <div className="image_wrapper overflow-hidden rounded-2xl">
//               <Image
//                 src={postData.images[0]}
//                 alt={postData.title}
//                 width={1200}
//                 height={800}
//                 className="rounded-lg mt-20 w-full h-auto object-cover"
//                 draggable="false"
//               />
//             </div>
//               </div>

//               {sections.map((section, index) => (
//                 <div key={index} id={section.id}>
//                   <div className="mt-10 content_block">
//                     <h4 className="text-dark">{section.title}</h4>
//                     <div
//                       className="mt-3 text-dark opacity-[0.7]"
//                       dangerouslySetInnerHTML={{ __html: section.content }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="w-full lg:w-2/5 border-s-0 lg:border-s-2 border-[#00000033] lg:ps-7 lg:sticky top-20 h-fit lg:mb-12">
//               <div className="block lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
//                 <div className="container mx-auto px-4 py-3">
//                   <div className="relative">
//                     <select
//                       id="toc-dropdown"
//                       value={activeId}
//                       onChange={(e) => {
//                         const targetId = e.target.value;
//                         setActiveId(targetId);
//                         document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
//                       }}
//                       className="w-full border border-gray-300 rounded-md p-2 pr-10 text-dark appearance-none focus:outline-none focus:ring-0"
//                     >
//                       {toc.map((section) => (
//                         <option key={section.id} value={section.id.substring(1)}>
//                           {section.label}
//                         </option>
//                       ))}
//                     </select>
//                     <ChevronDown
//                       size={20}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="hidden lg:block">
//                 <h4 className="text-dark">Table of Content</h4>
//                 <ol className="-mt-6 lg:mt-10 list-decimal list-outside pl-6">
//                   {toc.map((section, index) => (
//                     <li
//                       key={section.id}
//                       className={`text-xl xl:text-3xl lg:text-2xl cursor-pointer transition-colors ${
//                         index === 0 ? "pb-4 lg:pb-7" : "py-4 lg:py-7 border-t-1 border-[#00000033]"
//                       } ${
//                         activeId === section.id.substring(1)
//                           ? "text-dark"
//                           : "text-[#0E0E0E80]"
//                       } hover:text-dark`}
//                     >
//                       <Link href={section.id} className="block">
//                         {section.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <CTA
//         heading="Let’s Build Something That Lasts"
//         description="Whether you’re at the planning stage or ready to deliver, our team is here to help turn your goals into measurable outcomes."
//         primaryBtnText="Contact Us"
//         primaryBtnLink="/contact"
//         secondaryBtnText="Schedule a Consultation"
//         secondaryBtnLink="/consultation"
//       />
//     </section>
//   );
// };

// export default BlogDetailPage;
