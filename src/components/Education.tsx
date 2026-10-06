import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CV_DATA, EducationItem } from '../data/cvData';
import { GraduationCap, Award, Calendar, Building2, CheckCircle2, Star, ChevronRight, X, BookOpen, ExternalLink, Sparkle } from 'lucide-react';

export const Education: React.FC = () => {
  const [selectedEduId, setSelectedEduId] = useState<string>(CV_DATA.education[0].id);
  const [modalItem, setModalItem] = useState<EducationItem | null>(null);

  const selectedItem = CV_DATA.education.find(e => e.id === selectedEduId) || CV_DATA.education[0];

  const handleOpenDetails = (edu: EducationItem) => {
    setSelectedEduId(edu.id);
    setModalItem(edu);
  };

  return (
    <section id="education" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-pink-600" />
            <span>Academic Trajectory</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Consistently distinguished scholastic achievements across prestigious academic institutions in Cumilla.
          </p>
        </div>

        {/* Master Timeline + Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Timeline Items */}
          <div className="lg:col-span-5 space-y-3">
            {CV_DATA.education.map((edu) => {
              const isSelected = edu.id === selectedEduId;

              return (
                <motion.div
                  key={edu.id}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setSelectedEduId(edu.id)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-gradient-to-r from-pink-50 to-rose-50/60 border-pink-300 shadow-sm'
                      : 'bg-white hover:bg-pink-50/30 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-pink-500 text-white shadow-xs'
                            : 'bg-pink-100 text-pink-600'
                        }`}
                      >
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-tight">
                          {edu.degree}
                        </h4>
                        <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                          <Building2 className="w-3 h-3 text-pink-400" />
                          <span>{edu.institution}</span>
                        </div>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="text-right shrink-0">
                      {edu.cgpa ? (
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold text-xs">
                          <Star className="w-3 h-3 fill-pink-500 text-pink-500" />
                          <span>{edu.cgpa} / {edu.maxGpa}</span>
                        </div>
                      ) : (
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[11px]">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-pink-100/60">
                    <span className="font-medium text-pink-700/80">{edu.field}</span>
                    
                    {/* Functional View Details Action Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDetails(edu);
                      }}
                      className="flex items-center gap-1 font-semibold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100/80 px-2.5 py-1 rounded-full border border-pink-200 transition-colors cursor-pointer"
                      title="View full curriculum & details modal"
                    >
                      <span>{isSelected ? 'View Details' : 'Inspect'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Detailed Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200/90 shadow-md shadow-pink-100/50 relative overflow-hidden"
              >
                {/* Background decorative flower */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-pink-100 to-rose-50 rounded-bl-full -z-0 opacity-70 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
                      {selectedItem.field}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-pink-400" />
                      {selectedItem.year}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    {selectedItem.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-pink-600 font-medium text-sm sm:text-base mb-6">
                    <Building2 className="w-4 h-4" />
                    <span>{selectedItem.institution}</span>
                  </div>

                  {/* Score / Status Showcase Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200/80 mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Evaluation & Academic Standing</div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                        {selectedItem.cgpa ? (
                          <span className="text-pink-600">
                            CGPA {selectedItem.cgpa}{' '}
                            <span className="text-sm font-normal text-slate-500">/ {selectedItem.maxGpa}</span>
                          </span>
                        ) : (
                          <span className="text-pink-600">{selectedItem.status}</span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-slate-500">Grade Performance</div>
                      <div className="text-sm font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        {selectedItem.cgpa && parseFloat(selectedItem.cgpa) >= 5.0
                          ? 'Golden GPA 5.00'
                          : selectedItem.cgpa && parseFloat(selectedItem.cgpa) >= 4.5
                          ? 'Excellent Distinction'
                          : selectedItem.cgpa
                          ? 'Strong Commerce Merit'
                          : 'Honours Scholar Standing'}
                      </div>
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Key Milestones & Focus Areas
                      </h5>
                      <button
                        onClick={() => handleOpenDetails(selectedItem)}
                        className="text-xs font-bold text-pink-600 hover:text-pink-700 hover:underline cursor-pointer flex items-center gap-1 mb-2"
                      >
                        <span>Open Modal View</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {selectedItem.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Interactive Education Detail Modal */}
      <AnimatePresence>
        {modalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-pink-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-pink-50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold uppercase tracking-wider">
                    {modalItem.field}
                  </span>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-900 mt-0.5 leading-snug">
                    {modalItem.degree}
                  </h3>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-pink-50/70 border border-pink-100 mb-5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">Institution</div>
                  <div className="text-sm font-bold text-slate-800">{modalItem.institution}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-500 font-medium">Standing / Result</div>
                  <div className="text-sm font-bold text-pink-600">
                    {modalItem.cgpa ? `CGPA ${modalItem.cgpa} / ${modalItem.maxGpa}` : modalItem.status}
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Academic Overview
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {modalItem.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Key Highlights & Course Learnings
                  </h4>
                  <div className="space-y-2">
                    {modalItem.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-pink-50/40">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-between">
                  <span className="text-xs font-medium">Academic Period</span>
                  <span className="text-xs font-bold">{modalItem.year}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setModalItem(null)}
                  className="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
