import ContactTeamsSection from "@/components/ContactTeamsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export default function Page() {
  return (
    <main className="w-full">
      <div className="space-y-4">
        <Hero />

        <div className="w-full border-t border-dashed border-muted-foreground/20" />
        <ContactTeamsSection />

        <div className="w-full border-t border-dashed border-muted-foreground/20" />
        <ProjectGrid />
      </div>
      <div className="mt-16 h-1" />
      <Footer />
    </main>
  );
}
