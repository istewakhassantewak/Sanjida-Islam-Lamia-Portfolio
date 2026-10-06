import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../data/cvData';
import { Laptop, Sparkles, HeartHandshake, CheckCircle2, Award, Cake, BookOpen, Scissors, Cpu, FileSpreadsheet, Globe, FileText } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return Laptop;
      case 'Sparkles':
        return Sparkles;
      case 'HeartHandshake':
        return HeartHandshake;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Core Competencies</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Skills & Practical Expertise
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From technical office productivity and computer maintenance to hands-on baking, crafts, and patient home teaching.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CV_DATA.skillCategories.map((cat, idx) => {
              const Icon = getIcon(cat.iconName);
              const isActive = activeCategoryIndex === idx;

              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-200'
                      : 'bg-white hover:bg-pink-50 text-slate-700 border border-pink-200/70'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Skill Details */}
        <motion.div
          key={activeCategoryIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-pink-100">
            <div>
              <h3 className="font-serif-display text-2xl font-bold text-slate-800">
                {CV_DATA.skillCategories[activeCategoryIndex].category}
              </h3>
              <p className="mt-1 text-slate-600 text-sm">
                {CV_DATA.skillCategories[activeCategoryIndex].description}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-50 border border-pink-200/80 text-pink-700 text-xs font-semibold">
              <Award className="w-4 h-4 text-pink-500" />
              <span>Verified Skill Set</span>
            </div>
          </div>

          {/* Skill Bars Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {CV_DATA.skillCategories[activeCategoryIndex].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-2xl bg-gradient-to-br from-pink-50/40 to-white border border-pink-100/90 hover:border-pink-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-800 text-sm">{skill.name}</span>
                  <span className="text-xs font-bold text-pink-600 bg-pink-100/80 px-2 py-0.5 rounded-full">
                    {skill.status}
                  </span>
                </div>

                {/* Animated Skill Level Bar */}
                <div className="w-full h-2.5 bg-pink-100/60 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: sIdx * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlighted Visual Skills Chips (All 7 CV Skills) */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-pink-700">
              Quick Highlights from CV Document
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 text-center">
            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs text-slate-800">MS Word</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Docs & Formats</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs text-slate-800">Excel & PPT</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Data & Slides</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs text-slate-800">Internet & Email</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Digital Comms</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs text-slate-800">PC Hardware</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Grade A+ (CVGC)</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2">
                <Cake className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs text-slate-800">Baking</span>
              <span className="text-[10px] text-slate-500 mt-0.5">The Cake Fairy</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs text-slate-800">Crafting</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Handmade Art</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-xs transition-all flex flex-col items-center col-span-2 sm:col-span-3 lg:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs text-slate-800">Tutoring</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Private Teaching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
