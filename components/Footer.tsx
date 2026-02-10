'use client'

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="w-full text-xs flex flex-row justify-between items-center mt-16 font-light">
      <p>© January 2026</p>
      <button
        onClick={scrollToTop}
        className="flex flex-row gap-1 text-foreground hover:underline items-center"
      >
        Back to top
        <ArrowUp height={8} width={8} />
      </button>
    </div>
  );
}
