import React, { useState, useEffect } from 'react';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { MetricsSection } from './components/sections/MetricsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SqlTerminalSection } from './components/sections/SqlTerminalSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/ui/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ParticleBackground } from './components/canvas/ParticleBackground';
import { ResumeModal } from './components/modals/ResumeModal';
import { LoadingScreen } from './components/ui/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeOpen(true);
  };

  const handleOpenSqlTerminal = () => {
    const el = document.getElementById('sql-terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070a1e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D Cursor on desktop */}
      <CustomCursor />

      {/* Ambient Neural Particle Matrix */}
      <ParticleBackground />

      {/* Database Loading Screen Assembler */}
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Main Navigation */}
          <Navbar
            onOpenResume={handleOpenResume}
            onOpenSqlTerminal={handleOpenSqlTerminal}
          />

          {/* Hero Section */}
          <main className="flex-1">
            <HeroSection
              onOpenResume={handleOpenResume}
              onOpenSqlTerminal={handleOpenSqlTerminal}
            />

            {/* Impact Metrics Section */}
            <MetricsSection />

            {/* 3D Skills Taxonomy */}
            <SkillsSection />

            {/* 5 Years at Infosys Experience Timeline */}
            <ExperienceSection />

            {/* Daimler DTFSA Projects */}
            <ProjectsSection />

            {/* Interactive SSMS SQL Terminal Studio */}
            <SqlTerminalSection />

            {/* Certifications & Accreditations */}
            <CertificationsSection />

            {/* Education & Soft Skills */}
            <EducationSection />

            {/* 3D Flip Contact Card */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer
            onOpenResume={handleOpenResume}
            onOpenSqlTerminal={handleOpenSqlTerminal}
          />

          {/* Complete 2-Page Resume PDF Modal */}
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
