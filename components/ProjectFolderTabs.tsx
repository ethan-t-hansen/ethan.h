"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

type Project = {
  slug: string;
  title: string;
  role: string;
  tags: string[];
  type?: string;
  previewImage: string;
  featured: boolean;
  date?: string;
};

type TabKey = "design" | "software";

function classifyProject(projectType?: string) {
  const type = (projectType ?? "").toLowerCase();
  const hasDesign = type.includes("design");
  const hasSoftware =
    type.includes("dev") ||
    type.includes("software") ||
    type.includes("engineer") ||
    type.includes("web");

  if (!hasDesign && !hasSoftware) {
    return { design: true, software: false };
  }

  return { design: hasDesign, software: hasSoftware };
}

function BrowserTab({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative -mb-px text-sm ${
        isActive
          ? "text-foreground cursor-default"
          : "text-muted-foreground/60 hover:text-muted-foreground"
      }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}

export default function ProjectFolderTabs({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState<TabKey>("design");

  const groupedProjects = useMemo(() => {
    const groups: Record<TabKey, Project[]> = {
      design: [],
      software: [],
    };

    for (const project of projects) {
      const bucket = classifyProject(project.type);
      if (bucket.design) groups.design.push(project);
      if (bucket.software) groups.software.push(project);
    }

    return groups;
  }, [projects]);

  useEffect(() => {
    if (activeTab === "design" && groupedProjects.design.length === 0) {
      setActiveTab("software");
    }
    if (activeTab === "software" && groupedProjects.software.length === 0) {
      setActiveTab("design");
    }
  }, [activeTab, groupedProjects]);

  const activeProjects = groupedProjects[activeTab];

  return (
    <section className="w-full pt-2">
      <div className="w-full">
        <div className="flex items-end gap-1">
          <BrowserTab
            label={`Design (${groupedProjects.design.length})`}
            isActive={activeTab === "design"}
            onClick={() => setActiveTab("design")}
          />
          <BrowserTab
            label={`Software (${groupedProjects.software.length})`}
            isActive={activeTab === "software"}
            onClick={() => setActiveTab("software")}
          />
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 2, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -2, filter: "blur(4px)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-2 sm:grid-cols-2">
                {activeProjects.map((project, idx) => (
                  <motion.div
                    key={project.title}
                    className="w-full"
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>

              {activeProjects.length === 0 && (
                <p className="py-10 text-center text-sm text-zinc-600">
                  No projects in this folder yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
