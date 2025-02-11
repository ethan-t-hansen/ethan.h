"use client";

import ProjectsSection from "@/components/ProjectsSection";

export default function Page() {

  return (
    <main className="mt-12 lg:justify-start justify-center items-start">
      <div className="max-w-6xl mb-4">

        <p className="text-2xl md:text-4xl leading-tight font-regular font-sans mb-8 flex-row flex tracking-tight">
          Creative developer exploring digital experience through 3D, animation,
          and web.
        </p>

        <div className="space-y-2">
          <p className="text-sm font-medium opacity-50 font-mono">CURRENTLY</p>
          <p className="text-md ">
            Design engineering for customer apps @ ICBC.
          </p>
          <p className="text-md">
            Studying business + computer science @ the University of British
            Columbia.
          </p>
        </div>
      </div>
      <ProjectsSection/>
    </main>
  );
}
