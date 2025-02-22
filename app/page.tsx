import ExperienceSection from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import TextScroll from "@/components/TextScroll";

export default function Page() {
  return (
    <main className="lg:justify-start justify-center items-start">
      <Hero />
      <ProjectGrid />
      <TextScroll />
      <ExperienceSection />
      <div className="h-64"></div>
    </main>
  );
}
