import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../data/cvData';
import { AnimatedGirl } from './AnimatedGirl';
import { Mail, Phone, MapPin, Download, Heart, ArrowDown, Award, CheckCircle2, BookOpen, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-pink-200/30 via-pink-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Introduction & Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Soft Kicker */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/90 text-pink-700 text-xs font-semibold mb-4 border border-pink-200/80 shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-pink-600" />
              <span>Dedicated Scholar & Creative Artisan</span>
              <span className="text-pink-300">·</span>
              <span>Cumilla, Bangladesh</span>
            </div>

            {/* Name Heading */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              Sanjida Islam <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600">
                Lamia
              </span>
            </h1>

            {/* Bangla Name & Pronunciation */}
            <div className="mt-1 flex items-center gap-2 text-sm text-pink-800/80 font-medium">
              <span className="font-serif text-base tracking-wide">{CV_DATA.banglaName}</span>
              <span>·</span>
              <span className="text-xs text-slate-500">Honours in Social Work</span>
            </div>

            {/* Headline & Overview */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Motivated Honours scholar in <span className="font-medium text-slate-800">Social Work</span> with a solid <span className="font-medium text-slate-800">Commerce</span> background. Combining empathetic community vision, patient academic mentoring, and artisanal craftsmanship in baking and design.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg text-left">
              <div className="p-3 rounded-2xl bg-white/80 border border-pink-100 shadow-xs hover:border-pink-300 transition-colors">
                <div className="text-[11px] font-semibold text-pink-500 uppercase tracking-wider flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> Academics
                </div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">Social Work</div>
                <div className="text-[11px] text-slate-500">CVGC (Running 2027)</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/80 border border-pink-100 shadow-xs hover:border-pink-300 transition-colors">
                <div className="text-[11px] font-semibold text-pink-500 uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3 h-3" /> Computer Tech
                </div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">Grade A+</div>
                <div className="text-[11px] text-slate-500">MS Office & Hardware</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/80 border border-pink-100 shadow-xs hover:border-pink-300 transition-colors col-span-2 sm:col-span-1">
                <div className="text-[11px] font-semibold text-pink-500 uppercase tracking-wider flex items-center gap-1">
                  <Heart className="w-3 h-3" /> Creative Arts
                </div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">Certified Baker</div>
                <div className="text-[11px] text-slate-500">The Cake Fairy</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold text-sm shadow-md shadow-pink-300/40 hover:shadow-lg hover:shadow-pink-400/50 transition-all cursor-pointer flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact & Connect</span>
              </a>

              <button
                onClick={onOpenCVModal}
                className="px-5 py-3 rounded-full bg-white hover:bg-pink-50 text-pink-700 font-semibold text-sm border border-pink-200 shadow-xs hover:border-pink-300 transition-all cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-pink-500" />
                <span>Download / Print CV</span>
              </button>

              <a
                href="#education"
                className="px-4 py-3 rounded-full text-slate-600 hover:text-pink-600 text-sm font-medium transition-colors flex items-center gap-1"
              >
                <span>Explore Details</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Contact Line */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-600">
              <button
                onClick={() => handleCopy(CV_DATA.contact.email, 'email')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-slate-700 hover:text-pink-700 transition-colors cursor-pointer border border-pink-100"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-pink-500" />
                <span>{CV_DATA.contact.email}</span>
                {copiedType === 'email' && (
                  <span className="text-[10px] text-emerald-600 font-bold ml-1">Copied!</span>
                )}
              </button>

              <button
                onClick={() => handleCopy(CV_DATA.contact.phone, 'phone')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-slate-700 hover:text-pink-700 transition-colors cursor-pointer border border-pink-100"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-pink-500" />
                <span>{CV_DATA.contact.phone}</span>
                {copiedType === 'phone' && (
                  <span className="text-[10px] text-emerald-600 font-bold ml-1">Copied!</span>
                )}
              </button>

              <span className="flex items-center gap-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                <span>Cumilla Sadar, Bangladesh</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Animated Modern Girl Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-sm flex flex-col items-center">
              {/* Girl Graphic Component */}
              <AnimatedGirl />

              {/* Status Note underneath */}
              <div className="mt-3 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-pink-200/70 text-[11px] font-medium text-slate-600 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to Academic, Social Work & Teaching Roles
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
