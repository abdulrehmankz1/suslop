// ---------------- Types ----------------
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

// ---------------- API Functions ----------------

export const fetchAllReports = async (): Promise<WPReport[]> => {
  try {
    const response = await fetch(
      "https://suslop.wasmer.app/wp-json/wp/v2/reports?_embed&per_page=10",
      { next: { revalidate: 3600 } }
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

export const fetchReportBySlug = async (slug: string): Promise<WPReport | null> => {
  try {
    const response = await fetch(
      `https://suslop.wasmer.app/wp-json/wp/v2/reports?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      console.error("Failed to fetch report:", response.status);
      return null;
    }
    const reports = (await response.json()) as WPReport[];
    return reports.length > 0 ? reports[0] : null;
  } catch (error) {
    console.error("Error fetching report by slug:", error);
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

export const extractReportData = (report: WPReport | null): ReportData | null => {
  if (!report) return null;

  const contentHtml = report.content?.rendered || "";

  // 1. Try to get the featured image from _embedded
  let featuredImage =
    report._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

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
