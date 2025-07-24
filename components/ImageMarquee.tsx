"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

type Props = {
  folder: string;
};

export default function ImageMarquee({ folder }: Props) {
  const [images, setImages] = useState<string[]>([]);

  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(
        `/api/images?folder=${encodeURIComponent(folder)}`
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        setImages(data);
      }
    };

    fetchImages();
  }, [folder]);

  return (
    <Marquee speed={50} gradient={true} gradientWidth={isMobile ? 96 : 164} pauseOnHover gradientColor="#000000">
      {images.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`Marquee ${idx}`}
          width={400}
          height={800}
          className="h-48 md:h-72 w-auto mx-2 md:mx-4"
        />
      ))}
    </Marquee>
  );
}
