"use client";

// import Image from "next/image";
import Link from "next/link";
import MediaPreview from "./MediaPreview";
import { ProjectCardProps } from "./ProjectCard";

export function ProjectCardSmall({
  slug,
  title,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <Link
      href={`/project/${slug}`}
      className="flex flex-row gap-4 opacity-90 md:opacity-40 md:hover:opacity-95 group transition-all duration-500 break-inside-avoid"
    >
      <div className="w-48 relative overflow-hidden">
        <MediaPreview src={image} className="flex h-24" />
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
        <h3 className="text-sm font-regular mb-1">{title}</h3>
        <p className="text-xs font-light text-gray-400">{tags.join(", ")}</p>
      </div>
    </Link>
  );
}
