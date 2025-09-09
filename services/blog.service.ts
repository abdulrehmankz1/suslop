// ---------------- Types ----------------
export interface WPPost {
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

export interface PostData {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: string | null;
  images: string[];
}

// ---------------- API Functions ----------------

export const fetchAllPosts = async (): Promise<WPPost[]> => {
  try {
    const response = await fetch(
      "https://suslop.wasmer.app/wp-json/wp/v2/blog?_embed&per_page=10",
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      console.error("Failed to fetch posts:", response.status);
      return [];
    }
    return (await response.json()) as WPPost[];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchPostBySlug = async (slug: string): Promise<WPPost | null> => {
  try {
    const response = await fetch(
      `https://suslop.wasmer.app/wp-json/wp/v2/blog?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      console.error("Failed to fetch post:", response.status);
      return null;
    }
    const posts = (await response.json()) as WPPost[];
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};

// ---------------- Helper ----------------

function stripHtml(html: string): string {
  // Removes HTML tags and the ellipsis character
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

export const extractPostData = (post: WPPost | null): PostData | null => {
  if (!post) return null;

  const contentHtml = post.content?.rendered || "";

  // 1. Try to get the featured image from _embedded
  let featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  // 2. If no featured image is found, extract all images from the content
  const allImages = extractImageSrcs(contentHtml);

  // 3. Set the featuredImage to the first image found in the content if the _embedded field was empty
  if (!featuredImage && allImages.length > 0) {
    featuredImage = allImages[0];
  }

  // 4. Filter the images from the content to remove the one we chose as the featured image
  const images = allImages.filter((src) => src !== featuredImage);
  const cleanedContent = contentHtml;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered || "Untitled Post",
    excerpt: stripHtml(post.excerpt?.rendered || ""),
    content: cleanedContent,
    date: post.date,
    featuredImage,
    images,
  };
};
