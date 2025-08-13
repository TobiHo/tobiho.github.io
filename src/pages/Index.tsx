import { ProfileCard } from "@/components/ProfileCard";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectHistory } from "@/components/ProjectHistory";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">Tobias Holtkamp</h1>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#profile" className="text-muted-foreground hover:text-primary transition-colors">Profile</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Profile Section */}
        <section id="profile" className="flex justify-center">
          <div className="w-full max-w-md">
            <ProfileCard />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Complete Project History Section */}
        <section id="projects">
          <ProjectHistory />
        </section>

        {/* Experience Timeline Section */}
        <section id="experience">
          <ExperienceTimeline />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Tobias Holtkamp. Available for SAP & Data Analytics consulting projects.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Holtkamp Consulting GmbH • Nordhorn, Germany
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
