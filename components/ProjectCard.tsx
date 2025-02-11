import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/legacy/image";

interface ProjectCardProps {
  id: string;
  title: string;
  tags?: string[];
  image: string;
  state: "Expanded" | "Shrunk" | "None";
  onHover: (id: string) => void;
  index?: number;
  isLargeScreen: boolean;
}

export default function ProjectCard({
  id,
  title,
  tags,
  image,
  state,
  onHover,
  isLargeScreen,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const safeTags = Array.isArray(tags) ? tags : [];

  useEffect(() => {
    setImageLoaded(false);
    const img = document.createElement("img");
    img.src = image;
    const handleLoad = () => setImageLoaded(true);
    img.addEventListener("load", handleLoad);
    if (img.complete) handleLoad();
    return () => img.removeEventListener("load", handleLoad);
  }, [image]);

  const getWidth = () => {
    if (!isLargeScreen) return "100%";
    switch (state) {
      case "Expanded":
        return "calc(40%)";
      case "Shrunk":
        return "calc(30%)";
      default:
        return "calc(33.33%)";
    }
  };

  return (
    <motion.div
      className="overflow-hidden lg:h-[22vw] md:h-96 h-auto w-full lg:w-[calc(33.33%)] p-2"
      style={{ width: getWidth() }}
      onHoverStart={() => onHover(id)}
      onHoverEnd={() => onHover("")}
      animate={{ width: getWidth() }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="relative h-full w-full group aspect-square">
        {!imageLoaded && (
          <Skeleton className="h-full w-full absolute inset-0 rounded-none" />
        )}

        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          layout="fill"
          className={`object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        <motion.div
          className="absolute inset-0 flex flex-col justify-between bg-clip-content"
          initial={{ opacity: 0, y: 0 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full flex flex-col justify-end bg-gradient-to-t from-[#101010] via-[#101010]/25 to-transparent p-4 gap-2">
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <div className="flex flex-row gap-1">
              {safeTags.length > 0 && (
                <>
                  {safeTags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded bg-black/50 px-2 py-1 text-xs font-medium text-white font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
