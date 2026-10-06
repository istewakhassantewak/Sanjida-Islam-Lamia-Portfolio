import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../data/cvData';
import {
  Laptop,
  Palette,
  HeartHandshake,
  CheckCircle2,
  Award,
  Cake,
  BookOpen,
  Scissors,
  Cpu,
  FileSpreadsheet,
  Globe,
  FileText,
  MessageCircle,
  Users,
  Lightbulb,
  Shuffle,
  ShieldCheck,
  Check
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState<number | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return Laptop;
      case 'Palette':
        return Palette;
      case 'HeartHandshake':
        return HeartHandshake;
      default:
        return Award;
    }
  };

  const getIndividualSkillIcon = (skillName: string) => {
    if (skillName.includes('Word')) return FileText;
    if (skillName.includes('Excel') || skillName.includes('PowerPoint')) return FileSpreadsheet;
    if (skillName.includes('Internet') || skillName.includes('Email')) return Globe;
    if (skillName.includes('Hardware') || skillName.includes('Troubleshooting')) return Cpu;
    if (skillName.includes('Baking') || skillName.includes('Cake')) return Cake;
    if (skillName.includes('Crafting') || skillName.includes('Paper')) return Scissors;
    if (skillName.includes('Color') || skillName.includes('Aesthetic')) return Palette;
    if (skillName.includes('Communication')) return MessageCircle;
    if (skillName.includes('Teamwork')) return Users;
    if (skillName.includes('Adaptability') || skillName.includes('Patience')) return Shuffle;
    if (skillName.includes('Problem-Solving') || skillName.includes('Teaching')) return Lightbulb;
    return Award;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Award className="w-3.5 h-3.5 text-pink-600" />
            </motion.div>
            <span>Core Competencies</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Skills & Practical Expertise
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From technical office productivity and computer maintenance to hands-on baking, crafts, and patient home teaching.
          </p>

          {/* Category Tabs with Animated Icons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {CV_DATA.skillCategories.map((cat, idx) => {
              const Icon = getCategoryIcon(cat.iconName);
              const isActive = activeCategoryIndex === idx;

              return (
                <motion.button
                  key={cat.category}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`group flex items-center gap-2.5 px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-md shadow-pink-200'
                      : 'bg-white hover:bg-pink-50 text-slate-700 border border-pink-200/70 hover:border-pink-300'
                  }`}
                >
                  <motion.div
                    animate={isActive ? { y: [0, -3, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ rotate: 18, scale: 1.2 }}
                  >
                    <Icon className={`w-4 h-4 transition-transform ${isActive ? 'text-white' : 'text-pink-500 group-hover:scale-110'}`} />
                  </motion.div>
                  <span>{cat.category}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Skill Details with Smooth Animating Bars */}
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-pink-50 border border-pink-200/80 text-pink-700 text-xs font-semibold cursor-default"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              >
                <ShieldCheck className="w-4 h-4 text-pink-500" />
              </motion.div>
              <span>Verified Skill Set</span>
            </motion.div>
          </div>

          {/* Animated Skill Bars Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {CV_DATA.skillCategories[activeCategoryIndex].skills.map((skill, sIdx) => {
              const SkillIcon = getIndividualSkillIcon(skill.name);
              const isHovered = hoveredSkillIndex === sIdx;

              return (
                <motion.div
                  key={skill.name}
                  onHoverStart={() => setHoveredSkillIndex(sIdx)}
                  onHoverEnd={() => setHoveredSkillIndex(null)}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={`p-4.5 rounded-2xl bg-gradient-to-br from-pink-50/50 to-white border transition-all duration-300 ${
                    isHovered
                      ? 'border-pink-300 shadow-md shadow-pink-100/70 bg-white'
                      : 'border-pink-100/90 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Animated Individual Skill Icon */}
                      <motion.div
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 3 + (sIdx % 3),
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        whileHover={{
                          scale: 1.3,
                          rotate: [-10, 12, -8, 0],
                          transition: { duration: 0.4 }
                        }}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
                          isHovered
                            ? 'bg-pink-500 text-white shadow-sm shadow-pink-300'
                            : 'bg-pink-100/90 text-pink-600'
                        }`}
                      >
                        <SkillIcon className="w-4.5 h-4.5" />
                      </motion.div>

                      <div>
                        <span className="font-bold text-slate-800 text-sm block leading-tight">
                          {skill.name}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          Proficiency: {skill.level}%
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-pink-600 bg-pink-100/80 px-2.5 py-0.5 rounded-full shrink-0">
                      {skill.status}
                    </span>
                  </div>

                  {/* Dynamic Animated Progress Bar */}
                  <div className="w-full h-3 bg-pink-100/70 rounded-full overflow-hidden p-0.5 relative">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 1.2,
                        delay: sIdx * 0.12,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-full relative shadow-xs"
                    >
                      {/* Moving Shimmer Light Bar */}
                      <motion.div
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: sIdx * 0.3,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2"
                      />
                      {/* Glowing Tip */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Dual Section: Hard Skills & Soft Skills from Exact CV with Animated Icons */}
        <div className="mt-14 space-y-10">
          {/* HARD SKILLS */}
          <div>
            <div className="text-center mb-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-pink-700">
                Hard Skills (Official CV)
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 text-center">
              {/* MS Word */}
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.25, rotate: -12 }}
                  className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-2xs"
                >
                  <FileText className="w-5 h-5" />
                </motion.div>
                <span className="font-bold text-xs text-slate-800 group-hover:text-pink-600 transition-colors">MS Word</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Docs & Formats</span>
              </motion.div>

              {/* Excel & PPT */}
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.25, rotate: 12 }}
                  className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-2xs"
                >
                  <FileSpreadsheet className="w-5 h-5" />
                </motion.div>
                <span className="font-bold text-xs text-slate-800 group-hover:text-pink-600 transition-colors">Excel & PPT</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Data & Slides</span>
              </motion.div>

              {/* Internet & Email */}
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  whileHover={{ scale: 1.25 }}
                  className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-2xs"
                >
                  <Globe className="w-5 h-5" />
                </motion.div>
                <span className="font-bold text-xs text-slate-800 group-hover:text-pink-600 transition-colors">Internet & Email</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Digital Comms</span>
              </motion.div>

              {/* PC Hardware */}
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.25, rotate: -15 }}
                  className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-2xs"
                >
                  <Cpu className="w-5 h-5" />
                </motion.div>
                <span className="font-bold text-xs text-slate-800 group-hover:text-pink-600 transition-colors">PC Hardware</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Grade A+ (CVGC)</span>
              </motion.div>

              {/* Baking */}
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.25, rotate: 15 }}
                  className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-2xs"
                >
                  <Cake className="w-5 h-5" />
                </motion.div>
                <span className="font-bold text-xs text-slate-800 group-hover:text-pink-600 transition-colors">Baking</span>
                <span className="text-[10px] text-slate-500 mt-0.5">The Cake Fairy</span>
              </motion.div>

              {/* Crafting */}
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.25, rotate: -18 }}
                  className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-2xs"
                >
                  <Scissors className="w-5 h-5" />
                </motion.div>
                <span className="font-bold text-xs text-slate-800 group-hover:text-pink-600 transition-colors">Crafting</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Handmade Art</span>
              </motion.div>

              {/* Tutoring */}
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                className="p-4 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center col-span-2 sm:col-span-3 lg:col-span-1 group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.25, rotate: 12 }}
                  className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-2xs"
                >
                  <BookOpen className="w-5 h-5" />
                </motion.div>
                <span className="font-bold text-xs text-slate-800 group-hover:text-pink-600 transition-colors">Tutoring</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Private Teaching</span>
              </motion.div>
            </div>
          </div>

          {/* SOFT SKILLS (Newly added to CV) */}
          <div className="pt-6 border-t border-pink-100/80">
            <div className="text-center mb-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-pink-700">
                Soft Skills (Official CV)
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-3xl mx-auto">
              {/* Communication */}
              <motion.div
                whileHover={{ y: -5, scale: 1.04 }}
                className="p-4.5 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.25, rotate: 10 }}
                  className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-xs"
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
                <span className="font-bold text-sm text-slate-800 group-hover:text-pink-600 transition-colors">Communication</span>
                <span className="text-xs text-pink-600/80 mt-0.5 font-medium">Empathetic & Clear</span>
              </motion.div>

              {/* Teamwork */}
              <motion.div
                whileHover={{ y: -5, scale: 1.04 }}
                className="p-4.5 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.25, rotate: -10 }}
                  className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-xs"
                >
                  <Users className="w-6 h-6" />
                </motion.div>
                <span className="font-bold text-sm text-slate-800 group-hover:text-pink-600 transition-colors">Teamwork</span>
                <span className="text-xs text-pink-600/80 mt-0.5 font-medium">Collaborative Spirit</span>
              </motion.div>

              {/* Adaptability */}
              <motion.div
                whileHover={{ y: -5, scale: 1.04 }}
                className="p-4.5 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  whileHover={{ scale: 1.25 }}
                  className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-xs"
                >
                  <Shuffle className="w-6 h-6" />
                </motion.div>
                <span className="font-bold text-sm text-slate-800 group-hover:text-pink-600 transition-colors">Adaptability</span>
                <span className="text-xs text-pink-600/80 mt-0.5 font-medium">Flexible & Patient</span>
              </motion.div>

              {/* Problem-Solving */}
              <motion.div
                whileHover={{ y: -5, scale: 1.04 }}
                className="p-4.5 rounded-2xl bg-white border border-pink-100 shadow-2xs hover:border-pink-300 hover:shadow-md transition-all flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.25, rotate: 15 }}
                  className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5 group-hover:bg-pink-500 group-hover:text-white transition-colors shadow-xs"
                >
                  <Lightbulb className="w-6 h-6" />
                </motion.div>
                <span className="font-bold text-sm text-slate-800 group-hover:text-pink-600 transition-colors">Problem-Solving</span>
                <span className="text-xs text-pink-600/80 mt-0.5 font-medium">Creative & Practical</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
