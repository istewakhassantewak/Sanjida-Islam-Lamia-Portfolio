import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, FileText, Menu, X, Flower, Heart, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenCVModal: () => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal, petalsEnabled, onTogglePetals }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'education', 'skills', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 160;

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm shadow-pink-100/60 py-3 border-b border-pink-100'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-sm shadow-pink-300 group-hover:scale-105 transition-transform">
            <Flower className="w-5 h-5 text-white animate-spin-slow" />
          </div>
          <div>
            <span className="font-serif-display font-bold text-lg sm:text-xl text-slate-800 tracking-tight group-hover:text-pink-600 transition-colors">
              Sanjida Islam <span className="text-pink-500 font-medium">Lamia</span>
            </span>
            <span className="hidden sm:block text-[10px] text-pink-700/70 tracking-widest uppercase font-semibold">
              Motivated Honours scholar in Social Work
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Active Indicator */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-white/70 backdrop-blur-md rounded-full border border-pink-100 shadow-2xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-pink-700 font-bold bg-pink-100 shadow-2xs'
                    : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Petal Canvas Toggle */}
          <button
            onClick={onTogglePetals}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              petalsEnabled
                ? 'bg-pink-100/80 border-pink-300 text-pink-600 hover:bg-pink-200'
                : 'bg-white/80 border-slate-200 text-slate-400 hover:text-slate-600'
            }`}
            title={petalsEnabled ? 'Pause floating petals' : 'Enable floating petals'}
            aria-label="Toggle cherry blossom petals"
          >
            <Flower2 className="w-4 h-4" />
          </button>

          {/* View Printable CV */}
          <button
            onClick={onOpenCVModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium text-xs shadow-xs hover:shadow-sm transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Print / View CV</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onTogglePetals}
            className="p-1.5 rounded-full bg-pink-50 text-pink-500 border border-pink-200"
            aria-label="Toggle petals"
          >
            <Flower2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-pointer"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-pink-200 overflow-hidden px-4 py-4"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-pink-500 text-white font-bold shadow-xs'
                        : 'text-slate-700 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>}
                  </a>
                );
              })}
              <div className="pt-2 border-t border-pink-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCVModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-pink-500 text-white font-medium text-sm shadow-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>View & Print Official CV</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
