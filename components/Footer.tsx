'use client'

import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative mt-16 flex w-full flex-row items-center justify-between overflow-visible text-xs font-light">
      <p>© February 2026</p>
      <Image
        width={64}
        height={64}
        src="/icon/maltese-lazy.png"
        alt="Dog"
        className="h-fit md:w-16 w-10 pointer-events-none absolute left-1/2 ml-2 md:ml-8 bottom-0 select-none block"
      />
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
