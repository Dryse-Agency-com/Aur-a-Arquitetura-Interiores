import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArchitectSection } from './components/ArchitectSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactCTASection } from './components/ContactCTASection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project, PROJECTS } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (sectionId: string) => {
    // If project modal is open, close it first
    if (selectedProject) {
      setSelectedProject(null);
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A19] selection:bg-[#C5A059] selection:text-white font-sans-editorial relative">
      {/* Editorial Header */}
      <Header
        onNavigate={scrollToSection}
      />

      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projetos')}
          onMeetArchitect={() => scrollToSection('arquiteta')}
        />

        {/* 2. Editorial Architect Section: Isadora Vale */}
        <ArchitectSection
          onExploreProjects={() => scrollToSection('projetos')}
        />

        {/* 3. Studio Philosophy / Essence */}
        <PhilosophySection />

        {/* 4. Selected Projects - Asymmetrical Curated Gallery */}
        <ProjectsSection
          onSelectProject={handleOpenProject}
        />

        {/* 5. Services & Process */}
        <ServicesSection
          onStartProject={() => scrollToSection('contato')}
        />

        {/* 6. Immersive Twilight CTA & Contact Form */}
        <ContactCTASection />
      </main>

      {/* 7. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Fullscreen Editorial Project Detail Modal & Lightbox */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
        allProjects={PROJECTS}
      />
    </div>
  );
}
