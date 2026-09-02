import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { GithubSection } from '@/sections/GithubSection';
import { ContactSection } from '@/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-base text-fg">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <GithubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
