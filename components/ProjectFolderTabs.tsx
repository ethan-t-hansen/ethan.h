"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { SandboxProject } from "@/app/constants";
import { ProjectCard } from "./ProjectCard";
import MediaPreview from "./MediaPreview";

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

type TabKey = "design" | "software" | "sandbox";

function classifyProject(projectType?: string) {
  const type = (projectType ?? "").toLowerCase();
  const hasDesign = type.includes("design");
  const hasSoftware =
    type.includes("dev") ||
    type.includes("software") ||
    type.includes("engineer") ||
    type.includes("web");

  if (!hasDesign && !hasSoftware) return { design: true, software: false };
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
          ? "cursor-default text-foreground"
          : "text-muted-foreground/60 hover:text-muted-foreground"
      }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}

export default function ProjectFolderTabs({
  projects,
  sandboxProjects,
}: {
  projects: Project[];
  sandboxProjects: SandboxProject[];
}) {
  const [activeTab, setActiveTab] = useState<TabKey>("design");
  const [selectedSandbox, setSelectedSandbox] = useState<SandboxProject | null>(
    null
  );
  const [mounted, setMounted] = useState(false);

  const groupedProjects = useMemo(() => {
    const groups: Record<"design" | "software", Project[]> = {
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

  useEffect(() => {
    if (!selectedSandbox) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedSandbox(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedSandbox]);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const activeProjects =
    activeTab === "sandbox"
      ? []
      : groupedProjects[activeTab as "design" | "software"];

  const selectedSandboxGallery: string[] = selectedSandbox
    ? selectedSandbox.gallery && selectedSandbox.gallery.length > 0
      ? selectedSandbox.gallery
      : [selectedSandbox.image]
    : [];

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
          <BrowserTab
            label={`Sandbox (${sandboxProjects.length})`}
            isActive={activeTab === "sandbox"}
            onClick={() => setActiveTab("sandbox")}
          />
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              {activeTab !== "sandbox" ? (
                <div className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-2 sm:grid-cols-2">
                  {activeProjects.map((project) => (
                    <motion.div key={project.title} className="w-full">
                      <ProjectCard {...project} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="columns-1 gap-x-4 space-y-4 md:columns-2">
                  {sandboxProjects.map((project) => (
                    <button
                      type="button"
                      key={project.id}
                      onClick={() => setSelectedSandbox(project)}
                      className="group block w-full break-inside-avoid text-left"
                    >
                      <div className="relative overflow-hidden border-[0.5px] shadow-md">
                        <MediaPreview src={project.image} className="h-auto w-full" />
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {activeTab !== "sandbox" && activeProjects.length === 0 && (
                <p className="py-10 text-center text-sm text-zinc-600">
                  No projects in this folder yet.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedSandbox && (
              <motion.div
                className="fixed inset-0 z-[120] place-content-center bg-black/20 p-4 backdrop-blur-[2px] shadow-lg sm:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSandbox(null)}
              >
                <motion.div
                  className="mx-auto h-fit max-h-[90vh] w-full max-w-[573px] overflow-hidden bg-background shadow-xl"
                  initial={{ opacity: 0, y: 10, scale: 0.96, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, scale: 0.96, filter: "blur(8px)" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="flex items-start justify-between px-4 py-3">
                    <div className="min-w-0 w-full">
                      <h3 className="truncate text-sm">{selectedSandbox.title}</h3>
                      <p className="mt-1 w-5/6 text-xs font-normal text-muted-foreground">
                        {selectedSandbox.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedSandbox(null)}
                      className="p-1 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Close gallery"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="relative">

                    <div className="max-h-[60vh] overflow-auto pb-4 px-4">
                      <div className="columns-2 gap-3 space-y-3">
                        {selectedSandboxGallery.map((mediaSrc, idx) => (
                          <motion.div
                            key={`${mediaSrc}-${idx}`}
                            className="break-inside-avoid overflow-hidden border border-border/60"
                          >
                            <MediaPreview src={mediaSrc} className="h-auto w-full" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
