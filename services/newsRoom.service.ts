// ---------------- Types ----------------
export interface WPNewsRoom {
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

export interface NewsRoomData {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: string | null;
}

// ---------------- API Functions ----------------

export const fetchAllNewsRooms = async (): Promise<WPNewsRoom[]> => {
  try {
    const response = await fetch(
      "https://suslop.wasmer.app/wp-json/wp/v2/news_room?_embed&per_page=10",
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      console.error("Failed to fetch news rooms:", response.status);
      return [];
    }
    return (await response.json()) as WPNewsRoom[];
  } catch (error) {
    console.error("Error fetching news rooms:", error);
    return [];
  }
};

export const fetchNewsRoomBySlug = async (
  slug: string
): Promise<WPNewsRoom | null> => {
  try {
    const response = await fetch(
      `https://suslop.wasmer.app/wp-json/wp/v2/news_room?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      console.error("Failed to fetch news room:", response.status);
      return null;
    }
    const newsRooms = (await response.json()) as WPNewsRoom[];
    return newsRooms.length > 0 ? newsRooms[0] : null;
  } catch (error) {
    console.error("Error fetching news room by slug:", error);
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

export const extractNewsRoomData = (
  newsRoom: WPNewsRoom | null
): NewsRoomData | null => {
  if (!newsRoom) return null;

  const contentHtml = newsRoom.content?.rendered || "";

  // 1. Try to get the featured image from _embedded
  let featuredImage =
    newsRoom._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  // 2. If no featured image is found, extract all images from the content
  const allImages = extractImageSrcs(contentHtml);

  // 3. Set the featuredImage to the first image found in the content if the _embedded field was empty
  if (!featuredImage && allImages.length > 0) {
    featuredImage = allImages[0];
  }

  const cleanedContent = contentHtml;

  return {
    id: newsRoom.id,
    slug: newsRoom.slug,
    title: newsRoom.title?.rendered || "Untitled News",
    excerpt: newsRoom.excerpt?.rendered || "",
    content: cleanedContent,
    date: newsRoom.date,
    featuredImage,
  };
};

function extractImageSrcs(html: string): string[] {
  const regex = /<img[^>]+src=["']([^"']+)["']/gi;
  const srcs: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    srcs.push(match[1]);
  }
  return srcs;
}
