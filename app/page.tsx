import ExperienceSection from "@/components/Experience";
import Footer from "@/components/Footer";
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
      <Footer/>
    </main>
  );
}
