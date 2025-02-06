import ProjectsSection from "@/components/projects-section";

export default function Page() {
  return (
    <main className="relative pt-16 pr-8 lg:pr-48 lg:justify-start justify-center">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-full bg-white w-32 h-32" />

        <h1 className="mb-8 text-2xl leading-tight dark:text-white text-black md:text-4xl">
          Creative developer exploring digital experience through 3D,
          animation, and web.
        </h1>
        <div className="mb-8 space-y-2">
          <p className="text-sm font-medium dark:text-white text-black/60">What am I up to?</p>
          <p className="text-md dark:text-white text-black">
            Design engineering for customer apps @ ICBC.
          </p>
          <p className="text-md dark:text-white text-black">
            Studying business + computer science @ the University of British
            Columbia.
          </p>
        </div>
      </div>

      <ProjectsSection />


<div className="h-[200vh]"></div>
    </main>
  );
}
