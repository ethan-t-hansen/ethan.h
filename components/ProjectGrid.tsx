import { ProjectCard } from "./ProjectCard";
import { getAllProjects } from "@/lib/getAllProjects";

export default async function ProjectGrid() {
  const projects = await getAllProjects();

  const large_projects = projects.filter((project) => project.featured);
  // const small_projects = projects.filter((project) => !project.featured);

  return (
    <section className="w-full mt-16 md:pb-12">
      <div className="flex flex-row items-center mt-16 mb-8 gap-4">
        <p className="text-nowrap text-xs opacity-70"> / SELECTED PROJECTS /</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {large_projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
