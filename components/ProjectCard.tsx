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
      <Link href={route} className="block opacity-90 md:opacity-40 md:hover:opacity-95 group transition-all duration-500 break-inside-avoid">
        <div className="relative overflow-hidden">
          {image.includes("mp4") || image.includes("webm") ? (

            <div className="flex md:h-[524px]">
              <video autoPlay muted loop disableRemotePlayback playsInline className="pointer-events-none touch-none select-none w-full h-auto object-cover group-hover:scale-105 transition-all duration-500" controlsList="noplaybackrate nodownload nofullscreen" disablePictureInPicture>
                <source src={image} />
                <p>Your browser does not support HTML video</p>
              </video>
            </div>
          ) : (
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={800}
              height={600}
              className="w-full group-hover:scale-105 transition-all duration-500"
              style={{ height: "auto" }}
            />
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-md font-regular mb-1">{title}</h3>
          <p className="text-xs font-light text-gray-400">{tags.join(", ")}</p>
        </div>
      </Link>
  );
}
