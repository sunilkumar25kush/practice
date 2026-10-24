import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Philosophy from './components/Philosophy/Philosophy';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ResumeModal from './components/ResumeModal/ResumeModal';
import './App.css';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Subtle Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Navigation Header matching Reference Screenshots */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Exact Page Flow Reconstructed from All 11 Reference Screenshots */}
      <main>
        {/* 1. Hero with GhostCursor & SUNIL TextPressure (Screenshot 1) */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. The Philosophy with ScrollExpand & Realtime Widget (Screenshots 2 & 3) */}
        <Philosophy />

        {/* 3. Selected Projects Alternating Showcase (Screenshots 4, 5, 6) */}
        <Projects />

        {/* 4. Where I've Been — Experience Timeline (Screenshots 7 & 8) */}
        <Experience />

        {/* 5. Get In Touch — Contact Details & Form (Screenshots 9 & 10) */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* 6. Footer (Screenshot 11) */}
      <Footer />

      {/* Interactive Resume View/Print Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
