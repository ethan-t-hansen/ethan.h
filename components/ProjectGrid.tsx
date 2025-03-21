import { small_projects, large_projects } from "@/app/constants";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardSmall } from "./ProjectCardSmall";

export default function ProjectGrid() {
  return (
    <section className="container mx-auto mt-16 md:pb-12">
      <div className="flex flex-row items-center mt-16 mb-8 gap-4">
        <p className="text-nowrap text-xs opacity-70"> / SELECTED PROJECTS /</p>
      </div>
      <div className="columns-1 md:columns-2 gap-x-8 md:gap-x=12 lg:gap-x-16 justify-items-center">
        {large_projects.map((project) => (
          <div
            key={project.title}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center mt-16 mb-8 gap-4">
        <p className="text-nowrap text-xs opacity-70"> / ADDITIONAL PROJECTS /</p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {small_projects.map((project) => (
          <div
            key={project.title}
          >
            <ProjectCardSmall {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
