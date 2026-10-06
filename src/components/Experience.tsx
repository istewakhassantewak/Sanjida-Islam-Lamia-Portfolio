import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../data/cvData';
import { BookOpen, Scissors, Heart, CheckCircle2, Clock, MapPin, Award, Users, Smile } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-pink-500" />
            <span>Practical Experience</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Teaching & Creative Craftsmanship
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Real-world dedication through private tuition and fine artisanal craft production.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Home Tutor */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-gradient-to-b from-white to-pink-50/40 rounded-3xl p-6 sm:p-8 border border-pink-200/90 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500 text-white flex items-center justify-center shadow-xs">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
                  Academic Mentorship
                </span>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-slate-900">
                Home Tutor (Private Tuition)
              </h3>
              <div className="text-xs text-pink-600 font-semibold mt-1 mb-4 flex items-center gap-2">
                <span>Private Student Mentoring</span>
                <span>·</span>
                <span>Cumilla, Bangladesh</span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Taught students privately at home, supporting their academic progress and building strong communication and patience. Developed personalized study routines to assist students in understanding core subjects.
              </p>

              <div className="space-y-3 pt-4 border-t border-pink-100">
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Core Highlights & Contributions:
                </h5>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span>Individualized lesson plans designed around each student's learning pace.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span>Strengthened student patience, self-discipline, and foundational academic confidence.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span>Regular progress updates and supportive communication with parents.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-white text-slate-600 text-xs border border-pink-200">
                Private Tuition
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white text-slate-600 text-xs border border-pink-200">
                Patience & Empathy
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white text-slate-600 text-xs border border-pink-200">
                Personalized Learning
              </span>
            </div>
          </motion.div>

          {/* Card 2: Crafting */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-gradient-to-b from-white to-rose-50/40 rounded-3xl p-6 sm:p-8 border border-pink-200/90 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/50 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-xs">
                  <Scissors className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
                  Artisanal Handiwork
                </span>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-slate-900">
                Crafting & Creative Design
              </h3>
              <div className="text-xs text-rose-600 font-semibold mt-1 mb-4 flex items-center gap-2">
                <span>Handmade Crafts & Visual Aesthetics</span>
                <span>·</span>
                <span>Independent Practice</span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Hands-on creative craft work demonstrating creativity, attention to detail and skilled handiwork. Crafting intricate decorative paper arts, celebratory designs, and tactile creations.
              </p>

              <div className="space-y-3 pt-4 border-t border-rose-100">
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Core Highlights & Contributions:
                </h5>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>High precision in cutting, folding, color balancing, and aesthetic arrangement.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Custom handmade gift boxes, paper bouquets, and decorative event accents.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Demonstrates perseverance, acute eye for neatness, and artistic inventiveness.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-white text-slate-600 text-xs border border-rose-200">
                Handmade Crafts
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white text-slate-600 text-xs border border-rose-200">
                Precision & Detail
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white text-slate-600 text-xs border border-rose-200">
                Creative Expression
              </span>
            </div>
          </motion.div>
        </div>

        {/* Sweet Philosophy Quote Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-md shadow-pink-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-white fill-white/80" />
            </div>
            <div>
              <h4 className="font-serif-display text-lg sm:text-xl font-bold">
                "Whether mentoring a young student or folding intricate paper flowers, every detail matters."
              </h4>
              <p className="text-pink-100 text-xs sm:text-sm mt-0.5">
                Bringing mindfulness, patience, and warmth to everything I do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
