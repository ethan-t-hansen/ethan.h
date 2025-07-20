import {
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiPostgresql,
  SiStripe,
  SiRedis,
  SiTypescript,
  SiSupabase,
  SiRust,
  SiGoland,
  SiTailwindcss,
  SiVercel,
  SiIos,
  SiJavascript,
  SiIced,
  SiAwslambda,
  SiServerless,
  SiAmazondynamodb,
  SiDrizzle,
  SiRive,
  SiRailway,
} from "react-icons/si";
import { MdOutlineStyle, MdScreenshot } from "react-icons/md";
import { TbCube3dSphere } from "react-icons/tb";
import { IconType } from "react-icons";
import { FaApple, FaMobile, FaPenNib, FaWordpress } from "react-icons/fa";
import { Component } from "lucide-react";

export type TagConfig = {
  label: string;
  icon: IconType;
  borderColor: string;
};

export const TAGS: Record<string, TagConfig> = {
  React: {
    label: "React",
    icon: SiReact,
    borderColor: "#61DAFB",
  },
  "Next.js": {
    label: "Next.js",
    icon: SiNextdotjs,
    borderColor: "#fff",
  },
  Figma: {
    label: "Figma",
    icon: SiFigma,
    borderColor: "#a259ff",
  },
  PostgreSQL: {
    label: "PostgreSQL",
    icon: SiPostgresql,
    borderColor: "#61B1F6",
  },
  Drizzle: {
    label: "Drizzle",
    icon: SiDrizzle,
    borderColor: "#C6FA50",
  },
  Railway: {
    label: "Railway",
    icon: SiRailway,
    borderColor: "#9309B5",
  },
  Stripe: {
    label: "Stripe",
    icon: SiStripe,
    borderColor: "#635bff",
  },
  Redis: {
    label: "Redis",
    icon: SiRedis,
    borderColor: "#FF4438",
  },
  TypeScript: {
    label: "TypeScript",
    icon: SiTypescript,
    borderColor: "#3178c6",
  },
  Supabase: {
    label: "Supabase",
    icon: SiSupabase,
    borderColor: "#3ECF8E",
  },
  Serverless: {
    label: "Serverless",
    icon: SiServerless,
    borderColor: "#ff4d00",
  },
  "AWS Lambda": {
    label: "AWS Lambda",
    icon: SiAwslambda,
    borderColor: "#FF9900",
  },
  DynamoDB: {
    label: "DynamoDB",
    icon: SiAmazondynamodb,
    borderColor: "#2371BA",
  },
  Lynx: {
    label: "LynxJS",
    icon: SiJavascript,
    borderColor: "#ffea63",
  },
  GoLang: {
    label: "GoLang",
    icon: SiGoland,
    borderColor: "#00ADD8",
  },
  Rust: {
    label: "Rust",
    icon: SiRust,
    borderColor: "#dea584",
  },
  "Iced GUI": {
    label: "Iced GUI",
    icon: SiIced,
    borderColor: "#7f5af0",
  },
  Cargo: {
    label: "Cargo",
    icon: SiRust,
    borderColor: "#b7410e",
  },
  Mobile: {
    label: "Mobile",
    icon: FaMobile,
    borderColor: "#999999",
  },
  "IOS Design": {
    label: "iOS Design",
    icon: FaApple,
    borderColor: "#999999",
  },
  "3D": {
    label: "3D",
    icon: TbCube3dSphere,
    borderColor: "#a3e635",
  },
  "Interface Design": {
    label: "Interface Design",
    icon: FaPenNib,
    borderColor: "#64748b",
  },
  Prototyping: {
    label: "Prototyping",
    icon: MdScreenshot,
    borderColor: "#94a3b8",
  },
  Branding: {
    label: "Branding",
    icon: MdOutlineStyle,
    borderColor: "#e879f9",
  },
  "Design Systems": {
    label: "Design Systems",
    icon: Component,
    borderColor: "#6366f1",
  },
  "Web Design": {
    label: "Web Design",
    icon: FaPenNib,
    borderColor: "#8cd9ff",
  },
  Freelance: {
    label: "Freelance",
    icon: SiFigma,
    borderColor: "#53ffa3",
  },
  Rive: {
    label: "Rive",
    icon: SiRive,
    borderColor: "#FFA41C",
  },
  Wordpress: {
    label: "Wordpress",
    icon: FaWordpress,
    borderColor: "#3D5DEA"
  }
};
