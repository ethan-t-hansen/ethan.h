"use client";

import { useEffect, useState } from "react";
// import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "./NavItem";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { href: "/", label: "HOME", external: false },
    { href: "/sandbox", label: "SANDBOX", external: false },
    { href: "/about", label: "ABOUT", external: false },
    { href: "/contact", label: "CONTACT", external: false },
    {
      href: "https://github.com/ethan-t-hansen",
      label: "GITHUB",
      external: true,
    },
        {
      href: "https://www.linkedin.com/in/ethanth/",
      label: "LINKEDIN",
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
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50 bg-none pointer-events-none mx-6 lg:mx-24"
    >
        <header className="py-8">
          <nav className="flex h-fit items-center md:items-start justify-between">
            <Link href="/" prefetch={true} className="flex flex-row items-center pointer-events-auto">
              <div className="text-sm font-regular">ethan.h</div>
            </Link>

            {/* Desktop Navigation */}

            <div className="hidden md:flex flex-col items-end pointer-events-auto">
              {menuItems.slice(0, 6).map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : ""}
                  rel="noopener noreferrer"
                  className="px-0"
                >
                  {item.label}
                </NavItem>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative h-12 w-12 md:hidden z-[101] pointer-events-auto"
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
                        ? "opacity-0"
                        : "opacity-100"
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
              <div className="pt-32 w-full h-full overflow-auto">
                <div className="space-y-4 px-4">
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
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          if (!item.external) {
                            setIsOpen(false);
                          }
                        }}
                        target={item.external ? "_blank" : ""}
                        rel="noopener noreferrer"
                        className="flex flex-row text-4xl opacity-100 pointer-events-auto items-center gap-4"
                      >
                        {item.label}
                        {item.external && <ArrowUpRight strokeWidth={1.5} className="w-12 h-12" />}
                      </NavItem>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.div>
  );
}
