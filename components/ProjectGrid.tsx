import { getAllProjects } from "@/lib/getAllProjects";
import ProjectFolderTabs from "./ProjectFolderTabs";

export default async function ProjectGrid() {
  const projects = await getAllProjects();

  const large_projects = projects.filter((project) => project.featured);

  return (
    <ProjectFolderTabs projects={large_projects} />
  );
}
