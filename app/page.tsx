import ExperienceSection from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Sandbox from "@/components/Sandbox";

export default function Page() {
  return (
    <main className="lg:justify-start justify-center items-start space-y-16">
      <Hero />
      <div className="my-32 space-y-32">
        <ProjectGrid />
        <div>
          <div className="flex flex-row items-center mt-16 mb-8 gap-4">
            <p className="text-nowrap text-xs opacity-70">
              / SANDBOX WORKS /
            </p>
          </div>
          <Sandbox />
        </div>
        <ExperienceSection />
        <Footer />
      </div>
    </main>
  );
}
