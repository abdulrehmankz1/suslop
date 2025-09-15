import * as cheerio from "cheerio";

// ---------------- Type Definitions ----------------
// Define the structure of the data coming from the WordPress REST API.
export interface WPService {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string }; // Excerpt field holds the service description.
  content: { rendered: string }; // Content field holds the list items.
  acf?: {
    featured_image?: {
      url: string;
    };
  };
  _embedded?: {
    ["wp:featuredmedia"]?: {
      source_url: string;
    }[];
  };
}

// Define the final, formatted data structure to be used in components.
export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  description: string;
  listItems: string[];
  featuredImage: string | null;
}

// ---------------- API Functions ----------------

/**
 * Fetches all services from the WordPress API.
 * Uses a revalidation time of 3600 seconds (1 hour) for caching.
 * @returns A promise that resolves to an array of WPService objects.
 */
export const fetchAllServices = async (): Promise<WPService[]> => {
  try {
    const response = await fetch(
      "https://suslop.wasmer.app/wp-json/wp/v2/service?_embed",
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      console.error(
        "Failed to fetch services:",
        response.status,
        response.statusText
      );
      return [];
    }

    return (await response.json()) as WPService[];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

// ---------------- Helper Functions ----------------

/**
 * Parses an HTML string to extract text from all list items (<li>).
 * @param html The HTML string to parse.
 * @returns An array of strings, where each string is a list item.
 */
function parseListItems(html: string): string[] {
  if (!html) {
    return [];
  }
  const $ = cheerio.load(html);
  const listItems: string[] = [];

  $("li").each((_, element) => {
    listItems.push($(element).text().trim());
  });

  return listItems;
}

/**
 * Strips all HTML tags from a string.
 * @param html The HTML string to clean.
 * @returns A clean string with no HTML tags.
 */
function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\[&hellip;\]/g, "")
    .trim();
}

/**
 * Extracts and formats the necessary data from a raw WordPress service object.
 * @param service The raw WPService object.
 * @returns A formatted ServiceData object or null if the input is invalid.
 */
export const extractServiceData = (
  service: WPService | null
): ServiceData | null => {
  if (!service) return null;

  const listItemsHtml = service.content?.rendered || "";
  const descriptionHtml = service.excerpt?.rendered || "";

  return {
    id: service.id,
    slug: service.slug,
    title: service.title?.rendered || "Untitled Service",
    description: stripHtml(descriptionHtml),
    listItems: parseListItems(listItemsHtml),
    featuredImage:
      service.acf?.featured_image?.url ||
      service._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      null,
  };
};
