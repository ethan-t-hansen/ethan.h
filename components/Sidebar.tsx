"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Sidebar() {
  const projects = [
    {
      name: "Design",
      children: [
        { name: "BluePrint", href: "/project/blueprint" },
        { name: "Spawn", href: "/project/spawn" },
        { name: "ProductX", href: "/project/productx" },
        { name: "VanDwelling", href: "/project/vancouver-dwelling" },
      ],
    },
    {
      name: "Development",
      children: [
        { name: "MA Portal", href: "/project/membership-portal" },
        { name: "BizTech Web", href: "/project/bt-web-v2" },
        { name: "BizTag", href: "/project/biztag" },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/sandbox", label: "Sandbox" },
    {
      href: "https://8gjt2hpyoydupxo2.public.blob.vercel-storage.com/resume.pdf",
      label: "CV",
    },
  ];

  const contactLinks = [
    { label: "Mail", href: "mailto:ethan.t.hansen@gmail.com" },
    { label: "GitHub", href: "https://github.com/ethan-t-hansen" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ethanth/" },
    { label: "Twitter", href: "https://twitter.com/ethanthansen" },
  ];

  // Calculate cumulative delays for proper cascading
  const baseDelay = 0.05;
  const itemDelay = 0.04;

  let delayCounter = 0;
  const getDelay = () => {
    const delay = delayCounter * itemDelay + baseDelay;
    delayCounter++;
    return delay;
  };

  // Mobile view
  // Reset counter for each render
  delayCounter = 0;

  return (
    <>
      <div className="md:hidden">
        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-50 bg-foreground text-background p-2 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </motion.button>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background"
            >
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full overflow-y-auto p-8 pt-16"
              >
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: getDelay(), duration: 0.4 }}
                  className="mb-12"
                >
                  <Link
                    href="/"
                    className="inline-block rounded bg-muted px-3 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-base font-semibold">ethan.h</span>
                  </Link>
                </motion.div>

                {/* Main Navigation */}
                <nav className="space-y-4 mb-12">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        delay: getDelay(),
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.href}
                        className="flex flex-row text-2xl font-medium hover:text-muted-foreground"
                        target={item.label == "CV" ? "_blank" : ""}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                        {item.label == "CV" && (
                          <ArrowUpRight size={16} className="mt-1 ml-1" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Project Sections */}
                {projects.map((section) => (
                  <div key={section.name} className="mb-12">
                    <motion.h3
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        delay: getDelay(),
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4"
                    >
                      {section.name}
                    </motion.h3>
                    <div className="space-y-3">
                      {section.children?.map((child) => (
                        <motion.div
                          key={child.href || child.name}
                          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{
                            delay: getDelay(),
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                        >
                          <Link
                            href={child.href || "#"}
                            className="block text-base hover:text-muted-foreground/80 "
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Contact Section */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: getDelay(),
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4"
                  >
                    Contact
                  </motion.h3>
                  <div className="space-y-3">
                    {contactLinks.map((link) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          delay: getDelay(),
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={link.href}
                          className="block text-base hover:text-muted-foreground "
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: getDelay(),
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="mt-12"
                  >
                    <ThemeToggle />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop View */}
      <aside className="w-48 min-w-48 border-r bg-background p-6 fixed top-0 left-0 h-screen overflow-y-auto hidden md:block">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block bg-muted px-3 py-2">
            <span className="text-base font-semibold">ethan.h</span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.label == "CV" ? "_blank" : ""}
              className="flex flex-row text-lg font-medium hover:text-muted-foreground"
            >
              {item.label}
              {item.label == "CV" && (
                <ArrowUpRight size={12} className="mt-1.5 ml-1" />
              )}
            </Link>
          ))}
        </nav>

        <div className="w-full border-muted-foreground/20 border-t my-8" />

        {/* Project Sections */}
        {projects.map((section) => (
          <div key={section.name} className="mb-8">
            <>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {section.name}
              </h3>
              <div className="space-y-1">
                {section.children?.map((child) => (
                  <Link
                    key={child.href || child.name}
                    href={child.href || "#"}
                    className="block text-sm hover:text-muted-foreground "
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </>
          </div>
        ))}

        <div className="w-full border-muted-foreground/20 border-t my-8" />

        {/* Contact Section */}
        <div className="">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Contact
          </h3>
          <div className="space-y-1">
            {contactLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm hover:text-muted-foreground "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-4">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
