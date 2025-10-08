"use client";

import { TAGS } from "@/constants/tags";
import { cn, darkenColor } from "@/lib/utils";
import { useTheme } from "next-themes";

type TagKey = keyof typeof TAGS;

interface ProjectTagProps {
  tagKey: string;
}

export function ProjectTag({ tagKey }: ProjectTagProps) {

  const { theme } = useTheme();

  const tag = TAGS[tagKey as TagKey];

  if (!tag) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium border border-white text-white">
        {tagKey}
      </span>
    );
  }

  const { icon: Icon, label, borderColor } = tag;


  const color =
    theme === "light" ? darkenColor(borderColor, 0.2) : borderColor;

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium border backdrop-blur-sm text-nowrap"
      style={{
        border: `1px solid ${color}`,
        background: `${borderColor}4A`,
      }}
    >
      <Icon className={cn(`w-3 h-3 shrink-0`)} style={{ color: color }} />
      <p style={{color: color }}>{label}</p>
    </span>
  );
}
