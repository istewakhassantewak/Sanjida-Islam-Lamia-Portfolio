import React from 'react';
import { Flower, Heart, ArrowUp, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pink-100/60 border-t border-pink-200/80 pt-14 pb-10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-pink-200/60">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white">
                <Flower className="w-4 h-4 animate-spin-slow" />
              </div>
              <h3 className="font-serif-display text-xl font-bold text-slate-900">
                Sanjida Islam Lamia
              </h3>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              Honours Student in Social Work at Comilla Victoria Government College. Dedicated Home Tutor & Creative Artisan in Baking and Crafts.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-pink-700 font-medium">
              <span>{CV_DATA.banglaName}</span>
              <span>·</span>
              <span>Cumilla - 3500, Bangladesh</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-700">
            <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
            <a href="#education" className="hover:text-pink-600 transition-colors">Education</a>
            <a href="#skills" className="hover:text-pink-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-pink-600 transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-pink-600 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-white hover:bg-pink-50 border border-pink-200 text-pink-600 shadow-xs hover:shadow-sm transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 inline" />
            <span>and sweet pink aesthetics for Sanjida Islam Lamia</span>
          </div>

          <div className="text-[11px] text-pink-800/70">
            © {new Date().getFullYear()} All Rights Reserved · Optimized for Vercel
          </div>
        </div>
      </div>
    </footer>
  );
};
