import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, FileText, Menu, X, Flower, Heart, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenCVModal: () => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal, petalsEnabled, onTogglePetals }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
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
              Sanjida <span className="text-pink-500 font-medium">Lamia</span>
            </span>
            <span className="hidden sm:block text-[10px] text-pink-700/70 tracking-widest uppercase font-semibold">
              Social Work & Creative Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
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
            <Sparkles className="w-4 h-4" />
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
            <Sparkles className="w-4 h-4" />
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
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-700 hover:bg-pink-50 hover:text-pink-600 font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
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
