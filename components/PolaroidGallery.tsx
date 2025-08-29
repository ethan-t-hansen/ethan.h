"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { nanumPenScript } from "@/lib/fonts";

type Polaroid = {
  src: string;
  alt: string;
  date: string;
  description: string;
};

const polaroids: Polaroid[] = [
  {
    src: "/about/mt-batur.png",
    alt: "Mt. Batur",
    date: "03.01.24",
    description: "Mt. Batur, Indonesia",
  },
  {
    src: "/about/langkawi.png",
    alt: "Langkawi",
    date: "04.10.24",
    description: "Langkawi, Malaysia",
  },
  {
    src: "/about/gateways.png",
    alt: "Gateways",
    date: "11.16.24",
    description: "MA Gateways, UBC",
  },
  {
    src: "/about/dataverse.png",
    alt: "Dataverse",
    date: "11.30.24",
    description: "BizTech Dataverse, UBC",
  },
  {
    src: "/about/death-valley.png",
    alt: "Death Valley",
    date: "12.07.24",
    description: "Death Valley, USA",
  },
  {
    src: "/about/japan.png",
    alt: "Japan",
    date: "05.08.25",
    description: "Meiji Shrine, Japan",
  },
];

export default function PolaroidGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="flex justify-start items-center md:w-fit w-screen 
          -ml-6 md:ml-0 overflow-visible"
    >
      <div
        className="
          flex
          overflow-x-scroll
          md:overflow-visible
          space-x-0 md:-space-x-12
          py-4 px-6 md:py-0 md:px-0
          no-scrollbar
        "
      >
        {polaroids.map((p, i) => {
          const rotation = (i % 2 === 0 ? -1 : 1) * (2 + i * 1.25);

          return (
            <motion.div
              key={i}
              className={clsx(
                "relative bg-zinc-50 shadow-xl rounded-sm border border-zinc-200 p-2 w-40 md:w-48",
                "flex flex-col items-center flex-shrink-0"
              )}
              style={{
                rotate: rotation,
                zIndex: hovered === i ? 50 : i,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={240}
                height={300}
                className="rounded-sm object-cover aspect-[4/5]"
              />
              <div className={`mt-2 text-center ${nanumPenScript.className}`}>
                <p className="md:text-xl text-zinc-700">{p.description}</p>
                <p className="text-sm md:text-md font-medium text-zinc-500">
                  {p.date}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
