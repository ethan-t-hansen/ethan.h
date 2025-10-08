import ContactTeamsSection from "@/components/ContactTeamsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export default function Page() {
  return (
    <main className="lg:justify-start justify-center items-start space-y-8 mt-16 md:mt-24">
      <Hero />
      <ContactTeamsSection />

      <div className="w-full border-muted-foreground/20 border-t pb-8"/>
      <ProjectGrid />
      <div className="mt-16 h-1"/>
      <Footer />
    </main>
  );
}
