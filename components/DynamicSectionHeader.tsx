"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";

// Type definitions
export interface Section {
  category: string;
  title: string;
  icon: IconType;
  content: React.ReactNode;
}

interface DynamicSectionHeaderProps {
  sections?: Section[];
  initialSection?: number;
}

export const DynamicSectionHeader: React.FC<DynamicSectionHeaderProps> = ({
  sections,
  initialSection = 0,
}) => {
  const [activeSection, setActiveSection] = useState<number>(initialSection);

  const defaultSections: Section[] = [
    {
      category: "Category",
      title: "Example Title",
      icon: FaUser,
      content: (
        <>Test</>
      ),
    },
  ];

  const currentSections: Section[] = sections || defaultSections;

  const validatedActiveSection = Math.max(
    0,
    Math.min(activeSection, currentSections.length - 1)
  );
  const currentSection: Section = currentSections[validatedActiveSection];

  const handleSectionChange = (index: number): void => {
    if (index >= 0 && index < currentSections.length) {
      setActiveSection(index);
    }
  };

  return (
    <div className="text-foreground min-h-screen">
      <div className="border-b border-muted-foreground">
        <div className="flex items-center justify-between py-4">
          <motion.div
            key={`header-${validatedActiveSection}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="text-xs text-muted-foreground mb-1 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.2 }}
            >
              {currentSection.category}
            </motion.div>
            <motion.h1
              className="text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {currentSection.title}
            </motion.h1>
          </motion.div>

          <div className="flex items-center space-x-3">
            {currentSections.map((section: Section, index: number) => {
              const IconComponent: IconType = section.icon;
              const isActive: boolean = index === validatedActiveSection;

              return (
                <motion.button
                  key={index}
                  onClick={() => handleSectionChange(index)}
                  className={`p-3 transition-all duration-200 ${
                    isActive
                      ? "bg-background text-foreground border border-[#00AB6A] shadow-lg"
                      : "bg-background text-muted-foreground hover:opacity-80 hover:text-muted-foreground border border-foreground/5"
                  }`}
                  style={
                    isActive
                      ? {
                          boxShadow:
                            "0 0 20px rgba(0, 171, 106, 0.3), 0 0 40px rgba(0, 171, 106, 0.2)",
                        }
                      : {}
                  }
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label={`Switch to ${section.title}`}
                  type="button"
                >
                  <motion.div
                    animate={{
                      rotate: isActive ? 360 : 0,
                      scale: isActive ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <IconComponent size={16} />
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${validatedActiveSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="py-8"
        >
          {currentSection.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
