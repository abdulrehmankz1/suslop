// ---------------- Types ----------------
export interface WPProject {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  acf?: {
    location?: string;
    /** ⚠️ WP saved with colon */
    ["about_the_project:"]?: string;
    project_images?: { url: string }[];
  };
  _embedded?: {
    ["wp:featuredmedia"]?: {
      source_url: string;
    }[];
  };
}

export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: string | null;
  images: string[];
  locationLabel: string;
  locationValue: string;
  descriptionLabel: string;
  descriptionValue: string;
  project_images: string[];
}

// ---------------- API Functions ----------------
export const fetchAllProjects = async (): Promise<WPProject[]> => {
  try {
    const response = await fetch(
      "https://suslop.wasmer.app/wp-json/wp/v2/projects?_embed&per_page=10",
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      console.error("Failed to fetch projects:", response.status);
      return [];
    }
    return (await response.json()) as WPProject[];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const fetchProjectBySlug = async (
  slug: string
): Promise<WPProject | null> => {
  try {
    const response = await fetch(
      `https://suslop.wasmer.app/wp-json/wp/v2/projects?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      console.error("Failed to fetch project:", response.status);
      return null;
    }
    const projects = (await response.json()) as WPProject[];
    return projects.length > 0 ? projects[0] : null;
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }
};

// ---------------- Helpers ----------------
function stripHtml(html: string): string {
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

export const extractProjectData = (
  project: WPProject | null
): ProjectData | null => {
  if (!project) return null;

  const contentHtml = project.content?.rendered || "";

  // Featured image
  let featuredImage =
    project._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  const allImages = extractImageSrcs(contentHtml);
  if (!featuredImage && allImages.length > 0) {
    featuredImage = allImages[0];
  }

  const images = allImages.filter((src) => src !== featuredImage);

  return {
    id: project.id,
    slug: project.slug,
    title: project.title?.rendered || "Untitled Project",
    excerpt: stripHtml(project.excerpt?.rendered || ""),
    content: contentHtml,
    date: project.date,
    featuredImage,
    images,

    //  Hardcoded labels + API values
    locationLabel: "Location",
    locationValue: project.acf?.location || "",
    descriptionLabel: "About the Project:",
    descriptionValue:
      (project.acf && (project.acf as any)["about_the_project:"]) || "",

    project_images: project.acf?.project_images?.map((img) => img.url) || [],
  };
};
