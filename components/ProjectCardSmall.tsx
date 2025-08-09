"use client";

import MediaPreview from "./MediaPreview";
import { ProjectCardProps } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import Link from "next/link"

export function ProjectCardSmall({
  slug,
  title,
  role,
  tags,
  previewImage,
}: ProjectCardProps) {
  return (
    <Link
      href={`/project/${slug}`}
      className="flex flex-row gap-4 opacity-90 md:opacity-70 md:hover:opacity-100 group transition-all duration-500 break-inside-avoid"
    >
      <div className="w-48 relative h-fit">
        <MediaPreview src={previewImage} className="flex h-24 w-full aspect-[4/3]" width={500} height={400}/>
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
      <div className="w-full py-1">
        <h3 className="text-sm font-regular">{title}</h3>
        <h4 className="text-xs font-regular mb-2 opacity-60">{role}</h4>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <ProjectTag key={index} tagKey={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
