"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const ClientVideo = dynamic(() => import("./ClientVideo"), { ssr: false });

export default function MediaPreview({ src, className}: { src: string, className?: string }) {
  const isVideo = src?.includes("mp4") || src?.includes("webm");

  if (isVideo) {
    return (
      <div className={className || "flex h-48 md:h-[28rem] w-full"}>
        <ClientVideo src={src}/>
      </div>
    );
  }

  return (
    <div className={className || "flex h-48 md:h-[28rem] w-full"}>
      <Image
        src={src || "/placeholder.svg"}
        alt={"Preview Image"}
        width={500}
        height={500}
        className="group-hover:scale-105 w-full h-full object-cover transition-all duration-500"
      />
    </div>
  );
}
