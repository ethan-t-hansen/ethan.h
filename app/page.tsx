import ExperienceSection from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export default function Page() {
  return (
    <main className="lg:justify-start justify-center items-start space-y-16">
      <Hero />
      <div className="my-32 space-y-32">
        <ProjectGrid />
        <ExperienceSection />
        <Footer />
      </div>
    </main>
  );
}
