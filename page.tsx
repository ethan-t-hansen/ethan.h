import SkyBackground from "@/components/sky-background"
import ProjectsSection from "@/components/projects-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400">
      <SkyBackground />

      <header className="fixed top-0 z-10 w-full px-6 py-4 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2 dark:text-white text-black">
            <span className="text-xl font-medium">Ethan</span>
          </div>
          <div className="flex gap-6">
            {["work", "about", "twitter", "github"].map((item) => (
              <a key={item} href={`/${item}`} className="text-sm dark:text-white text-black/80 transition-colors hover:dark:text-white text-black">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="relative pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-8 text-4xl font-medium leading-tight dark:text-white text-black md:text-6xl">
            Design engineer and creative pursuing simplicity through digital experience
          </h1>
          <div className="mb-16 space-y-4">
            <p className="text-sm font-medium dark:text-white text-black/60">CURRENTLY</p>
            <p className="text-lg dark:text-white text-black">Design engineering for customer apps @ ICBC.</p>
            <p className="text-lg dark:text-white text-black">
              Studying business + computer science @ the University of British Columbia.
            </p>
          </div>
        </div>

        <ProjectsSection />
      </main>
    </div>
  )
}

