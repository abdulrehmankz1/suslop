// ---------------- Types ----------------
export interface WPInsight {
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

export interface InsightData {
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

export const fetchAllInsights = async (): Promise<WPInsight[]> => {
  try {
    const response = await fetch(
      "https://suslop.wasmer.app/wp-json/wp/v2/insights?_embed&per_page=10",
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      console.error("Failed to fetch insights:", response.status);
      return [];
    }
    return (await response.json()) as WPInsight[];
  } catch (error) {
    console.error("Error fetching insights:", error);
    return [];
  }
};

export const fetchInsightBySlug = async (slug: string): Promise<WPInsight | null> => {
  try {
    const response = await fetch(
      `https://suslop.wasmer.app/wp-json/wp/v2/insights?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      console.error("Failed to fetch insight:", response.status);
      return null;
    }
    const insights = (await response.json()) as WPInsight[];
    return insights.length > 0 ? insights[0] : null;
  } catch (error) {
    console.error("Error fetching insight by slug:", error);
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

export const extractInsightData = (insight: WPInsight | null): InsightData | null => {
  if (!insight) return null;

  const contentHtml = insight.content?.rendered || "";

  // 1. Try to get the featured image from _embedded
  let featuredImage =
    insight._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

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
    id: insight.id,
    slug: insight.slug,
    title: insight.title?.rendered || "Untitled Insight",
    excerpt: stripHtml(insight.excerpt?.rendered || ""),
    content: cleanedContent,
    date: insight.date,
    featuredImage,
    images,
  };
};
