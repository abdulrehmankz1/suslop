  // ---------------- Types ----------------
export interface WPProject {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  acf?: {
    about_the_project: string;
    location: string;
    project_images: { url: string }[];
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
  location: string;
  about_the_project: string;
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

export const fetchProjectBySlug = async (slug: string): Promise<WPProject | null> => {
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

export const extractProjectData = (project: WPProject | null): ProjectData | null => {
  if (!project) return null;

  const contentHtml = project.content?.rendered || "";

  // 1. Try to get the featured image from _embedded
  let featuredImage =
    project._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

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
    id: project.id,
    slug: project.slug,
    title: project.title?.rendered || "Untitled Project",
    excerpt: project.excerpt?.rendered || "",
    content: cleanedContent,
    date: project.date,
    featuredImage,
    images,
    location: project.acf && project.acf.location ? project.acf.location : "",
    about_the_project: project.acf && project.acf.about_the_project ? project.acf.about_the_project : "",
    project_images: project.acf?.project_images?.map((img) => img.url) || [],
  };
};
