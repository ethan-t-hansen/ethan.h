"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "./NavItem";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/about", label: "ABOUT", external: false },
    { href: "/contact", label: "CONTACT", external: false },
    {
      href: "https://github.com/ethan-t-hansen",
      label: "GITHUB",
      external: true,
    },
  ];

  const backgroundVariants = {
    hidden: {
      clipPath: "inset(0 0 100% 0)",
    },
    visible: {
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      clipPath: "inset(0 0 100% 0)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.2 + i * 0.05,
        ease: "easeOut",
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        delay: (menuItems.length - i) * 0.02,
        ease: "easeIn",
      },
    }),
  };

  return (
    <>
      <header className="py-4">
        <nav className="flex h-12 items-center justify-between">
          <Link href="/" className="flex flex-row items-center gap-2">
            <div className="text-lg font-regular">ethan.h</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {menuItems.slice(0, 6).map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : ""}
                rel="noopener noreferrer"
              >
                {item.label}
              </NavItem>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative h-12 w-12 md:hidden z-[101]"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-6 w-6 flex-col items-center justify-center">
                <span
                  className={`absolute h-[1px] bg-foreground transition-all duration-300 ${
                    isOpen
                      ? "w-6 translate-y-0 rotate-45"
                      : "w-6 -translate-y-1"
                  }`}
                />
                <span
                  className={`absolute h-[1px] w-6 bg-foreground transition-all duration-300 ${
                    isOpen
                      ? "opacity-0 translate-x-2"
                      : "opacity-100 translate-x-0"
                  }`}
                />
                <span
                  className={`absolute h-[1px] bg-foreground transition-all duration-300 ${
                    isOpen
                      ? "w-6 translate-y-0 -rotate-45"
                      : "w-6 translate-y-1"
                  }`}
                />
              </div>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="pt-16 w-full h-full overflow-auto">
              <div className="space-y-8 px-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <NavItem
                      href={item.href}
                      onClick={() => item.external ? {} : setIsOpen(false)}
                      target={item.external ? "_blank" : ""}
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </NavItem>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
