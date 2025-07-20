"use client";

import Link from "next/link";
import MediaPreview from "./MediaPreview";
import { ProjectTag } from "./ProjectTag";

export interface ProjectCardProps {
  slug: string;
  title: string;
  role: string;
  tags: string[];
  previewImage: string;
  featured: boolean;
}

export function ProjectCard({
  slug,
  title,
  role,
  tags,
  previewImage,
}: ProjectCardProps) {
  return (
    <Link
      href={`/project/${slug}`}
      className="block opacity-90 w-full md:opacity-70 md:hover:opacity-100 group transition-all duration-500 break-inside-avoid"
    >
      <div className="relative overflow-hidden">
        <MediaPreview
          src={previewImage}
          className="flex h-fit w-full aspect-[5/3] md:aspect-square"
        />

        <div className="opacity-0 group-hover:opacity-60 transition-all duration-300">
          <span className="absolute left-0 top-0 h-2 w-2">
            <span className="absolute left-0 top-0 h-[1px] w-4 bg-foreground" />
            <span className="absolute left-0 top-0 h-4 w-[1px] bg-foreground" />
          </span>
          <span className="absolute right-0 top-0 h-2 w-2">
            <span className="absolute right-0 top-0 h-[1px] w-4 bg-foreground" />
            <span className="absolute right-0 top-0 h-4 w-[1px] bg-foreground" />
          </span>
          <span className="absolute bottom-0 left-0 h-2 w-2">
            <span className="absolute bottom-0 left-0 h-[1px] w-4 bg-foreground" />
            <span className="absolute left-0 bottom-0 h-4 w-[1px] bg-foreground" />
          </span>
          <span className="absolute bottom-0 right-0 h-2 w-2">
            <span className="absolute bottom-0 right-0 h-[1px] w-4 bg-foreground" />
            <span className="absolute right-0 bottom-0 h-4 w-[1px] bg-foreground" />
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-md font-regular">{title}</h3>
        <h4 className="text-xs font-regular mb-4 opacity-60">{role}</h4>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <ProjectTag key={index} tagKey={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
