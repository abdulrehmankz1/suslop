"use client";

import React, { useEffect, useState } from "react";
import {
  extractProjectData,
  fetchAllProjects,
  WPProject,
  ProjectData,
} from "@/services/project.service";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const wpProjects: WPProject[] = await fetchAllProjects();
      const extractedProjects = wpProjects
        .map((project) => extractProjectData(project))
        .filter((data): data is ProjectData => data !== null);

      setProjects(extractedProjects);
      setLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <section className="px-3 md:px-4 lg:px-5 pt_100">
      <div className="container mx-auto">
        {/* <div className="lg:w-[60%] md:w-[75%] mx-auto text-center lg:mb-12 mb-7">
          <h2 className="mb-3 text-dark">Featured Case Studies</h2>
        </div> */}
        <div className="2xl:w-[45%] xl:w-[55%] lg:w-[70%] md:w-[80%] w-full mx-auto text-center lg:mb-12 mb-7">
          <h2 className="mb-3 text-dark">Featured Case Studies</h2>
        </div>
        {loading
          ? // Skeleton loader (show 3 cards while loading)
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="p-5 flex flex-col lg:flex-row items-start gap-6 mb-5 animate-pulse bg-gray-100 rounded-lg"
              >
                {/* Image skeleton */}
                <div className="w-full lg:w-[30%]">
                  <div className="w-full h-[200px] bg-gray-300 rounded-lg"></div>
                </div>

                {/* Content skeleton */}
                <div className="w-full lg:w-[70%] space-y-4">
                  <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
                  <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-10 w-40 bg-gray-300 rounded mt-4"></div>
                </div>
              </div>
            ))
          : // Actual projects
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={
                  project.featuredImage || "/assets/images/project-image.png"
                }
                title={project.title}
                location={project.locationLabel}
                region={project.locationValue}
                descriptionLabel={project.descriptionLabel}
                descriptionValue={project.descriptionValue}
                slug={project.slug}
              />
            ))}
      </div>
    </section>
  );
};

export default Projects;
