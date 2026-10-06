import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../data/cvData';
import { User, Calendar, Heart, Shield, Home, Users, Check, MapPin, Activity, Flower2, Palette, Award } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'details' | 'values'>('profile');

  const personalInfoItems = [
    { label: 'Date of Birth', value: CV_DATA.personalDetails.dateOfBirth, sub: 'Age 22 Years', icon: Calendar },
    { label: 'Gender', value: CV_DATA.personalDetails.gender, sub: 'Female', icon: User },
    { label: 'Marital Status', value: CV_DATA.personalDetails.maritalStatus, sub: 'Family Focused', icon: Heart },
    { label: 'Blood Group', value: CV_DATA.personalDetails.bloodGroup, sub: 'Universal Donor / A Positive', icon: Activity },
    { label: 'Religion', value: CV_DATA.personalDetails.religion, sub: 'Islamic Faith & Values', icon: Shield },
    { label: 'Nationality', value: CV_DATA.personalDetails.nationality, sub: 'Proud Bangladeshi', icon: Home },
  ];

  const familyItems = [
    { role: "Father's Name", name: CV_DATA.personalDetails.fatherName, note: 'Pillar of Support' },
    { role: "Mother's Name", name: CV_DATA.personalDetails.motherName, note: 'Inspiring Professional' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-pink-50/40 to-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flower2 className="w-3.5 h-3.5 text-pink-600" />
            <span>Profile & Heritage</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            About Sanjida Islam Lamia
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A balanced fusion of social responsibility, educational enthusiasm, commerce discipline, and creative craftsmanship.
          </p>

          {/* Interactive Navigation Segmented Control */}
          <div className="mt-6 inline-flex p-1 bg-white rounded-full border border-pink-200/80 shadow-xs">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-pink-600'
              }`}
            >
              Biography & Summary
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'details'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-pink-600'
              }`}
            >
              Personal Details & Family
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'values'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-pink-600'
              }`}
            >
              Core Values & Philosophy
            </button>
          </div>
        </div>

        {/* Tab 1: Profile & Summary */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Big Bio Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-pink-100 to-rose-50 rounded-bl-full -z-0 opacity-60" />
              <div className="relative z-10">
                <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">
                  Professional Statement
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-slate-800 mt-2 mb-4">
                  "Dedication, communication, and a service-minded outlook in every endeavor."
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {CV_DATA.profileSummary}
                </p>

                <div className="space-y-3 pt-4 border-t border-pink-100/80">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-pink-600" />
                    </div>
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900">Academic Excellence:</strong> Consistently achieved distinguished GPA records across PSC (5.00), JSC (4.50), SSC (4.17), and HSC (4.58).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-pink-600" />
                    </div>
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900">Humanitarian Empathy:</strong> Currently pursuing an Honours degree in Social Work at Comilla Victoria Government College.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-pink-600" />
                    </div>
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900">Practical Versatility:</strong> Certified baker by The Cake Fairy, A+ grade in Computer Management, and skilled in handmade artisanal papercraft.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Badge */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Location: Cumilla Adarsha Sadar</span>
                <span className="text-pink-600 font-semibold">Expected Graduation: 2027</span>
              </div>
            </div>

            {/* Right Pillars Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-6 text-white shadow-md shadow-pink-200">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-serif-display text-xl font-bold">Service-Minded Heart</h4>
                <p className="mt-2 text-pink-100 text-sm leading-relaxed">
                  Passionate about community development, social equity, and uplifting children and youth through education and psychological support.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center mb-3 text-pink-600">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-base">Private Tuition & Mentorship</h4>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Hands-on home tutoring practice that translates complex academic topics into digestible, engaging lessons with unwavering patience.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center mb-3 text-pink-600">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-base">Creative Dexterity & Baking</h4>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Combining aesthetic design sensibility with culinary accuracy in cake artistry, pastry crafting, and custom decorative pieces.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Personal Details & Family */}
        {activeTab === 'details' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Grid of Personal Attributes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {personalInfoItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-pink-100 shadow-xs hover:border-pink-300 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                    <div className="text-base font-bold text-slate-800 mt-0.5">{item.value}</div>
                    <div className="text-[11px] text-pink-600/80 font-medium mt-1">{item.sub}</div>
                  </div>
                );
              })}
            </div>

            {/* Family & Address Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Family Lineage */}
              <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-xs">
                <h4 className="font-serif-display text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-pink-500" />
                  <span>Family Background</span>
                </h4>
                <div className="space-y-4">
                  {familyItems.map((fam, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-pink-50/50 border border-pink-100/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-500 font-medium">{fam.role}</div>
                        <div className="text-sm font-bold text-slate-800">{fam.name}</div>
                      </div>
                      <span className="text-xs font-semibold text-pink-600 bg-white px-2.5 py-1 rounded-full border border-pink-200">
                        {fam.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Permanent Residence Address */}
              <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-display text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-pink-500" />
                    <span>Permanent Address</span>
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-pink-50/50 p-4 rounded-2xl border border-pink-100">
                    {CV_DATA.contact.address.full}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>Postal Code: 3500</span>
                  <span className="text-pink-600 font-medium">Chattogram Division</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Core Values & Philosophy */}
        {activeTab === 'values' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4 font-bold text-lg">
                🌸
              </div>
              <h4 className="font-serif-display text-lg font-bold text-slate-800">Empathy & Service</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Approaching every interaction with genuine kindness, deep listening, and a heartfelt desire to contribute positively to society and individuals in need.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4 font-bold text-lg">
                📖
              </div>
              <h4 className="font-serif-display text-lg font-bold text-slate-800">Academic Diligence</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Consistency, meticulous preparation, and perseverance. Proven by a spotless academic record from primary school through higher secondary and ongoing Honours.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4 font-bold text-lg">
                🎨
              </div>
              <h4 className="font-serif-display text-lg font-bold text-slate-800">Creative Craftsmanship</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Transforming simple ingredients and paper into works of art. Valuing neatness, patience, color theory, and aesthetic elegance in every project.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
