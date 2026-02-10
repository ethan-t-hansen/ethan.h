"use client";

import MediaPreview from "./MediaPreview";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  slug: string;
  title: string;
  role: string;
  tags: string[];
  type?: string;
  previewImage: string;
  featured: boolean;
  date?: string;
  className?: string;
  yearLabel?: string;
  isDimmed?: boolean;
  isActive?: boolean;
  showMeta?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export function ProjectCard({
  slug,
  title,
  role,
  // type,
  // tags,
  previewImage,
  className,
  yearLabel,
  isDimmed = false,
  isActive = false,
  showMeta = true,
  onHoverStart,
  onHoverEnd,
}: ProjectCardProps) {
  return (
    <Link
      href={`/project/${slug}`}
      className={cn(
        "block w-full group transition-all duration-200 ease-out break-inside-avoid relative",
        className,
        isDimmed && "opacity-20",
        isActive && "z-30 opacity-100"
      )}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div className="relative overflow-hidden aspect-[5/3] bg-background transition-all duration-200 ease-out">
        <MediaPreview
          src={previewImage}
          className="absolute flex h-full w-full"
        />
      </div>

      {isActive && (
        <>
          <div className="absolute left-[-8px] top-[-10px] border border-[#e3e3e3] bg-white px-3 py-2 text-[12px] text-black transition-all duration-200 ease-out">
            {title}
          </div>
          <div className="absolute bottom-[-10px] right-[-8px] border border-[#e3e3e3] bg-white px-3 py-2 text-[12px] text-black transition-all duration-200 ease-out">
            {yearLabel ?? "2026"}
          </div>
        </>
      )}

      {showMeta && (
        <div className="flex flex-col my-2 -space-y-0.5">
          <span className="text-foreground font-normal text-sm">{title}</span>
          <span className="text-muted-foreground font-thin text-[11px]">{role}</span>
        </div>
      )}
    </Link>
  );
}
