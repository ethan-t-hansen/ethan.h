import { projects } from "@/app/constants";
import { ProjectCard } from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="container mx-auto md:pb-12">
      <div className="flex flex-row items-center mb-12 gap-4">
        <p className="text-nowrap text-xs opacity-50"> / SELECTED PROJECTS /</p>
      </div>
      <div className="columns-1 md:columns-2 gap-x-8 md:gap-x=12 lg:gap-x-16 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={index !== 0 ? "pt-8 md:pt-32" : ""}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
