"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import clsx from "clsx";

const ClientVideo = dynamic(() => import("./ClientVideo"), { ssr: false });

export default function MediaPreview({ src, className, width, height }: { src: string; className?: string, width?: number, height?: number }) {
  const isVideo = src?.includes("mp4") || src?.includes("webm");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={clsx("relative overflow-hidden", className || "flex h-48 md:h-[28rem] w-full")}>
      
      {isLoading && (
        <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 animate-pulse" />
      )}

      {isVideo ? (
        <ClientVideo
          src={src}
          onLoadedData={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt="Preview"
          width={width || 2700}
          height={height || 1080}
          onLoad={() => setIsLoading(false)}
          className={clsx(
            "transition-all duration-500 w-full h-full object-cover group-hover:scale-105",
            isLoading ? "opacity-0" : "opacity-100"
          )}
        />
      )}
    </div>
  );
}
