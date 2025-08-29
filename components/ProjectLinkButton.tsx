import { ExternalLink, LinkType } from "@/app/constants";
import Link from "next/link";
import { FaApple, FaFigma, FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";

export default function ProjectLinkButton({ item }: { item: ExternalLink }) {
  const { url, linkType, cta } = item;

  let icon = item.icon || null;

  switch (linkType) {
    case LinkType.GITHUB:
      icon = <FaGithub size={16} />;
      break;
    case LinkType.FIGMA:
      icon = <FaFigma size={16} />;
      break;
    case LinkType.WEBSITE:
      icon = <Globe size={16} />;
      break;
    case LinkType.APPLE:
      icon = <FaApple size={16} />;
      break;
    default:
      break;
  }

  return (
    <Link href={url} target="_blank">
      <button
        className="flex flex-row gap-2 w-fit items-center px-4 py-2 border border-foreground/20 rounded-full
      shadow-[inset_0_-1px_8px_rgba(100,100,100,0.6)] hover:bg-white/10 bg-background transition-all duration-500 group"
      >
        {icon && icon}
        <span className="relative inline-flex overflow-hidden text-sm">
          <div className="translate-y-0 skew-y-0 transition-all duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12">
            {cta}
          </div>
          <div className="absolute translate-y-[150%] skew-y-12 transition-all duration-500 group-hover:translate-y-0 group-hover:skew-y-0 ">
            {cta}
          </div>
        </span>
      </button>
    </Link>
  );
}