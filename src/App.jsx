import React from 'react';
import Hero3D from './components/Hero3D.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProjectsGallery from './components/ProjectsGallery.jsx';
import ResumeContactSection from './components/ResumeContactSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100">
      {/* Hero with 3D Spline */}
      <Hero3D />

      {/* About */}
      <section id="about" className="scroll-mt-20">
        <AboutSection />
      </section>

      {/* Achievements & Projects */}
      <section id="projects" className="scroll-mt-20">
        <ProjectsGallery />
      </section>

      {/* Resume + Contact */}
      <section id="resume" className="scroll-mt-20">
        <ResumeContactSection />
      </section>

      <footer className="py-10 text-center text-xs text-slate-400/80">
        © {new Date().getFullYear()} — Portfolio of an eCommerce Fulfillment Team Lead
      </footer>
    </div>
  );
}
