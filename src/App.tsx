import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PetalCanvas } from './components/PetalCanvas';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrintResumeModal } from './components/PrintResumeModal';
import { Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);

  const triggerCelebration = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f472b6', '#ec4899', '#fbcfe8', '#fda4af']
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-slate-800 relative selection:bg-pink-300 selection:text-pink-950 font-sans">
      {/* Floating Cherry Blossom Petals Background */}
      <PetalCanvas enabled={petalsEnabled} />

      {/* Navigation Header */}
      <Navbar
        onOpenCVModal={() => setIsCVModalOpen(true)}
        petalsEnabled={petalsEnabled}
        onTogglePetals={() => setPetalsEnabled(!petalsEnabled)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Official Curriculum Vitae Printable Modal */}
      <PrintResumeModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Floating Sparkle Wand Button */}
      <button
        onClick={triggerCelebration}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 text-white shadow-lg shadow-pink-300/60 hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center border-2 border-white"
        title="Sprinkle Pink Joy ✨"
        aria-label="Sparkle effect"
      >
        <Sparkles className="w-5 h-5 animate-spin-slow" />
      </button>
    </div>
  );
}
