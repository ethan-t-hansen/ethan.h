import { projects } from "@/app/constants";
import { ProjectCard } from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="columns-1 md:columns-2 gap-x-16 justify-items-center">
        {projects.map((project, index) => (
          <div key={project.title} className={index !== 0 ? "pt-8 md:pt-32" : ""}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
