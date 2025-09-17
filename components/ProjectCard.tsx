"use client";

import MediaPreview from "./MediaPreview";
import Link from "next/link";

export interface ProjectCardProps {
  slug: string;
  title: string;
  role: string;
  tags: string[];
  type?: string;
  previewImage: string;
  featured: boolean;
}

export function ProjectCard({
  slug,
  title,
  role,
  // type,
  // tags,
  previewImage,
}: ProjectCardProps) {
  return (
    <Link
      href={`/project/${slug}`}
      className="block opacity-90 w-full group transition-all duration-500 break-inside-avoid"
    >
      <div className="relative overflow-hidden">

        <MediaPreview
          src={previewImage}
          className="absolute flex h-fit w-full aspect-[5/3] md:aspect-square"
        />

        <div className="opacity-0 absolute bottom-0 left-0 group-hover:opacity-100 transition-opacity duration-200 w-full h-full bg-gradient-to-t from-black/80 to-black/0">
          <div className="absolute flex flex-col bottom-4 left-4">
            <span className="text-white font-medium text-lg">
              {title}
            </span>
            <span className="text-neutral-400 text-sm">
              {role}
            </span>
          </div>
          
        </div>


        <div className="opacity-0 group-hover:opacity-60 transition-opacity duration-300">

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
    </Link>
  );
}
