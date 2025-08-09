"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MediaPreview from "./MediaPreview";

const images = [
  "/projects/mis-night.png",
  "/projects/mis-night.png",
  "/projects/mis-night.png",
  "/projects/mis-night.png",
  "/projects/mis-night.png",
  "/projects/mis-night.png",
  "/projects/mis-night.png",
  "/projects/mis-night.png",
];

export default function ScrollGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const topX = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const bottomX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div className="overflow-hidden w-screen -mx-6 lg:-mx-24 h-[32rem]">
      <div className="rotate-45 space-y-8 -my-[44rem] h-24 lg:h-32">
        {/* Top Row */}
        <motion.div style={{ x: topX }} className="flex gap-8">
          {images.map((src, i) => (
            <Image
            key={i}
            src={src}
            alt=""
            width={400}
            height={400}
            className="flex-shrink-0 object-cover rounded-lg"
          />
          ))}
        </motion.div>

        {/* Bottom Row */}
        <motion.div style={{ x: bottomX }} className="flex gap-8">
          {images.map((src, i) => (
            <Image
            key={i}
            src={src}
            alt=""
            width={400}
            height={400}
            className="flex-shrink-0 object-cover rounded-lg"
          />
          ))}
        </motion.div>

        {/* Top Row */}
        <motion.div style={{ x: topX }} className="flex gap-8">
          {images.map((src, i) => (
            <Image
            key={i}
            src={src}
            alt=""
            width={400}
            height={400}
            className="flex-shrink-0 object-cover rounded-lg"
          />
          ))}
        </motion.div>

        {/* Bottom Row */}
        <motion.div style={{ x: bottomX }} className="flex gap-8">
          {images.map((src, i) => (
            <Image
            key={i}
            src={src}
            alt=""
            width={400}
            height={400}
            className="flex-shrink-0 object-cover rounded-lg"
          />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
