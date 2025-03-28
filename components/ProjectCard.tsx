"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  tags: string[];
  image: string;
  route: string;
}

export function ProjectCard({ title, tags, image, route }: ProjectCardProps) {
  return (
    <Link
      href={`/project/${route}`}
      className="block opacity-90 w-full md:opacity-40 md:hover:opacity-95 group transition-all duration-500 break-inside-avoid"
    >
      <div className="relative overflow-hidden">
        {image.includes("mp4") || image.includes("webm") ? (
          <div className="flex h-fit md:h-[36rem]">
            <video
              autoPlay
              muted
              loop
              disableRemotePlayback
              playsInline
              className="pointer-events-none touch-none select-none object-cover group-hover:scale-105 transition-all duration-500"
              controlsList="noplaybackrate nodownload nofullscreen"
              disablePictureInPicture
            >
              <source src={image} />
              <p>Your browser does not support HTML video</p>
            </video>
          </div>
        ) : (
          <div className="flex w-full h-fit md:h-[36rem]">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={500}
              height={500}
              className="group-hover:scale-105 w-full h-full object-cover transition-all duration-500"
            />
          </div>
        )}
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
        <h3 className="text-md font-regular mb-1">{title}</h3>
        <p className="text-xs font-light text-gray-400">{tags.join(", ")}</p>
      </div>
    </Link>
  );
}
