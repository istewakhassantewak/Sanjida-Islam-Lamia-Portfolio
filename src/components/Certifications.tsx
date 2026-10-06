import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CV_DATA, CertificationItem } from '../data/cvData';
import { Award, CheckCircle2, Cake, Laptop, ShieldCheck, ExternalLink, X } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-pink-50/40 via-white to-pink-50/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-pink-500" />
            <span>Credentials & Recognition</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Certifications & Formal Training
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Verified qualifications demonstrating verified computer literacy and culinary baking craft.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CV_DATA.certifications.map((cert) => {
            const isBaking = cert.id.includes('baking');

            return (
              <motion.div
                key={cert.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200/90 shadow-md shadow-pink-100/60 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative corner medal badge */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-pink-100 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md ${
                        isBaking
                          ? 'bg-gradient-to-tr from-pink-500 to-rose-400 shadow-pink-200'
                          : 'bg-gradient-to-tr from-rose-500 to-pink-600 shadow-rose-200'
                      }`}
                    >
                      {isBaking ? <Cake className="w-7 h-7" /> : <Laptop className="w-7 h-7" />}
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified
                      </span>
                      {cert.grade && (
                        <span className="mt-1 text-xs font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md">
                          Grade: {cert.grade}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-serif-display text-2xl font-bold text-slate-900 mb-1">
                    {cert.title}
                  </h3>

                  <div className="text-sm font-semibold text-pink-600 mb-4 flex items-center gap-1.5">
                    <span>Issued by:</span>
                    <strong className="text-slate-800">{cert.issuer}</strong>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Key Competencies Tested:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-pink-50 text-pink-800 text-xs font-medium border border-pink-100/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Official Curriculum Completed</span>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-bold text-pink-600 hover:text-pink-700 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>View Certificate Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-pink-200 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-pink-50 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center pb-4 border-b border-pink-100">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white mb-3 shadow-md shadow-pink-200">
                  <Award className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-pink-600">
                  Certificate Record
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-slate-900 mt-1">
                  {selectedCert.title}
                </h3>
                <div className="text-sm font-semibold text-slate-600 mt-1">
                  Presented to <span className="text-pink-600">{CV_DATA.name}</span>
                </div>
              </div>

              <div className="py-5 space-y-4 text-sm text-slate-700">
                <div className="p-3.5 rounded-xl bg-pink-50 border border-pink-100">
                  <div className="text-xs text-slate-500">Institution / Issuing Body</div>
                  <div className="font-bold text-slate-900 text-base">{selectedCert.issuer}</div>
                  {selectedCert.grade && (
                    <div className="text-xs text-pink-700 font-semibold mt-1">
                      Distinction: {selectedCert.grade}
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedCert.description}
                </p>

                <div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Verified Competencies:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedCert.skillsCovered.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-pink-500" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
