import { ProjectCard } from "./ProjectCard";
import { getAllProjects } from "@/lib/getAllProjects";

export default async function ProjectGrid() {
  const projects = await getAllProjects();

  const large_projects = projects.filter((project) => project.featured);
  // const small_projects = projects.filter((project) => !project.featured);

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {large_projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
