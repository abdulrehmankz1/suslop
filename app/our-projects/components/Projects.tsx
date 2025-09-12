import {
  extractProjectData,
  fetchAllProjects,
} from "@/services/project.service";
import ProjectCard from "./ProjectCard";

const Projects = async () => {
  const projects = await fetchAllProjects();
  const projectData = projects.map(extractProjectData).filter(Boolean);

  return (
    <section className="px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {projectData.map((project) => (
          <ProjectCard
            key={project!.id}
            image={project!.featuredImage || "/assets/images/project-image.png"}
            title={project!.title}
            location={project!.locationLabel}
            region={project!.locationValue}
            descriptionLabel={project!.descriptionLabel}
            descriptionValue={project!.descriptionValue}
            slug={project!.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
