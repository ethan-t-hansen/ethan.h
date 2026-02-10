import { ProjectCard } from "./ProjectCard";
import { getAllProjects } from "@/lib/getAllProjects";

export default async function ProjectGrid() {
  const projects = await getAllProjects();

  const large_projects = projects.filter((project) => project.featured);
  // const small_projects = projects.filter((project) => !project.featured);

  return (
    <section className="w-full pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        {large_projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
