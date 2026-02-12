import { getAllProjects } from "@/lib/getAllProjects";
import { sandbox_projects } from "@/app/constants";
import ProjectFolderTabs from "@/components/ProjectFolderTabs";
import fs from "fs/promises";
import path from "path";

const SUPPORTED_MEDIA_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".avif",
  ".mp4",
  ".webm",
]);

async function readGalleryMedia(
  rootDir: string,
  currentDir: string,
  urlBase: string
): Promise<string[]> {
  const entries = await fs.readdir(currentDir, { withFileTypes: true });
  const sortedEntries = entries.sort((a, b) => a.name.localeCompare(b.name));
  const media: string[] = [];

  for (const entry of sortedEntries) {
    const entryPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      const nested = await readGalleryMedia(rootDir, entryPath, urlBase);
      media.push(...nested);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!SUPPORTED_MEDIA_EXTENSIONS.has(ext)) continue;

    const relativeFromRoot = path
      .relative(rootDir, entryPath)
      .split(path.sep)
      .join("/");
    media.push(`/${relativeFromRoot}`);
  }

  return media;
}

export default async function ProjectGrid() {
  const projects = await getAllProjects();

  const large_projects = projects.filter((project) => project.featured);
  const publicRoot = path.join(process.cwd(), "public");

  const sandboxProjectsWithGallery = await Promise.all(
    sandbox_projects.map(async (project) => {
      const folderPath = path.join(publicRoot, project.galleryFolder.replace(/^\//, ""));

      let gallery: string[] = [];
      try {
        gallery = await readGalleryMedia(publicRoot, folderPath, project.galleryFolder);
      } catch {
        gallery = [];
      }

      // Keep the tile cover as the first item for seamless transition.
      const deduped = Array.from(new Set([project.image, ...gallery]));

      return {
        ...project,
        gallery: deduped,
      };
    })
  );

  return (
    <ProjectFolderTabs
      projects={large_projects}
      sandboxProjects={sandboxProjectsWithGallery}
    />
  );
}
