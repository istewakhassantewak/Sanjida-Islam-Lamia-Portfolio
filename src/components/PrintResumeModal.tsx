import React from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../data/cvData';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle, GraduationCap, Award, BookOpen, Scissors } from 'lucide-react';

interface PrintResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintResumeModal: React.FC<PrintResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white print:static">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-pink-200 relative print:max-w-none print:shadow-none print:border-none print:rounded-none print:max-h-none print:overflow-visible"
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-pink-100 flex items-center justify-between z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-500 animate-pulse"></span>
            <span className="text-sm font-bold text-slate-800">
              Official Curriculum Vitae (CV) Preview
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/Sanjida Islam Lamia CV.pdf"
              download="Sanjida Islam Lamia CV.pdf"
              className="px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Download official PDF CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-600 font-semibold text-xs border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Print CV or Save via browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-pink-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Printable Resume Container - Matching the exact format of the provided CV */}
        <div className="p-6 sm:p-10 text-slate-800 bg-[#FAF9F6] print:bg-white print:p-0">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 grid grid-cols-1 md:grid-cols-12 gap-8 print:border-none print:shadow-none">
            {/* Sidebar Column (Left 4 cols) - styled like the dark teal / deep rose cyan column in the original CV */}
            <div className="md:col-span-4 bg-[#144f54] text-white p-6 rounded-2xl flex flex-col justify-between print:bg-[#144f54] print:text-white">
              <div>
                {/* Authentic Profile Photo with Elegant Framing */}
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white/90 shadow-md bg-pink-100 mb-6 relative">
                  <img
                    src={CV_DATA.photoUrl}
                    alt="Sanjida Islam Lamia"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* CONTACT SECTION */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold tracking-widest text-[#6ee7b7] uppercase border-b border-white/20 pb-1 mb-3">
                    CONTACT
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                        MOBILE
                      </div>
                      <div className="font-medium text-white">{CV_DATA.contact.phone}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                        EMAIL
                      </div>
                      <div className="font-medium text-white break-all">{CV_DATA.contact.email}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                        PORTFOLIO
                      </div>
                      <a
                        href={CV_DATA.contact.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#6ee7b7] hover:underline break-all"
                      >
                        {CV_DATA.contact.portfolio}
                      </a>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                        ADDRESS
                      </div>
                      <div className="font-medium text-white/90 leading-relaxed text-[11px]">
                        {CV_DATA.contact.address.full}
                      </div>
                    </div>
                  </div>
                </div>

                {/* PERSONAL DETAILS SECTION */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold tracking-widest text-[#6ee7b7] uppercase border-b border-white/20 pb-1 mb-3">
                    PERSONAL DETAILS
                  </h4>
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">DATE OF BIRTH</div>
                      <div className="font-medium text-white">{CV_DATA.personalDetails.dateOfBirth}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">GENDER</div>
                      <div className="font-medium text-white">{CV_DATA.personalDetails.gender}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">MARITAL STATUS</div>
                      <div className="font-medium text-white">{CV_DATA.personalDetails.maritalStatus}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">RELIGION</div>
                      <div className="font-medium text-white">{CV_DATA.personalDetails.religion}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">BLOOD GROUP</div>
                      <div className="font-medium text-white">{CV_DATA.personalDetails.bloodGroup}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">FATHER'S NAME</div>
                      <div className="font-medium text-white">{CV_DATA.personalDetails.fatherName}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase font-semibold">MOTHER'S NAME</div>
                      <div className="font-medium text-white">{CV_DATA.personalDetails.motherName}</div>
                    </div>
                  </div>
                </div>

                {/* SKILLS SECTION */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-[#6ee7b7] uppercase border-b border-white/20 pb-1 mb-2.5">
                    SKILLS
                  </h4>
                  
                  {/* HARD SKILLS */}
                  <div className="mb-3.5">
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mb-1.5">
                      HARD SKILLS
                    </div>
                    <ul className="space-y-1 text-xs text-white/95">
                      {CV_DATA.hardSkills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7]"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SOFT SKILLS */}
                  <div>
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold mb-1.5">
                      SOFT SKILLS
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-white/95">
                      {CV_DATA.softSkills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7]"></span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Column (Right 8 cols) */}
            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                {/* Header Name & Title */}
                <div className="border-b-2 border-slate-100 pb-5 mb-5">
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#144f54] tracking-tight">
                    Sanjida Islam <br />
                    <span>Lamia</span>
                  </h1>
                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    Honours Student, Social Work | Commerce Background
                  </p>
                </div>

                {/* PROFILE */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold tracking-wider text-[#144f54] uppercase border-b-2 border-[#144f54] pb-1 mb-2.5 inline-block">
                    PROFILE
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                    {CV_DATA.profileSummary}
                  </p>
                </div>

                {/* EDUCATION */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold tracking-wider text-[#144f54] uppercase border-b-2 border-[#144f54] pb-1 mb-3 inline-block">
                    EDUCATION
                  </h3>
                  <div className="space-y-3.5 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#144f54]"></span>
                        <strong className="text-slate-900 font-bold">Honours in Social Work</strong>
                      </div>
                      <div className="text-slate-600 ml-4">Comilla Victoria Government College</div>
                      <div className="text-slate-500 ml-4 italic">Running | Expected 2027</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#144f54]"></span>
                        <strong className="text-slate-900 font-bold">
                          Higher Secondary Certificate (HSC), Commerce
                        </strong>
                      </div>
                      <div className="text-slate-600 ml-4">Cumilla Govt. Women's College</div>
                      <div className="text-slate-800 ml-4 font-semibold">CGPA: 4.58</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#144f54]"></span>
                        <strong className="text-slate-900 font-bold">
                          Secondary School Certificate (SSC), Commerce
                        </strong>
                      </div>
                      <div className="text-slate-600 ml-4">Comilla Modern High School</div>
                      <div className="text-slate-800 ml-4 font-semibold">CGPA: 4.17</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#144f54]"></span>
                        <strong className="text-slate-900 font-bold">
                          Junior School Certificate (JSC)
                        </strong>
                      </div>
                      <div className="text-slate-600 ml-4">Comilla Modern High School</div>
                      <div className="text-slate-800 ml-4 font-semibold">CGPA: 4.50</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#144f54]"></span>
                        <strong className="text-slate-900 font-bold">
                          Primary School Certificate (PSC)
                        </strong>
                      </div>
                      <div className="text-slate-600 ml-4">YWCA School, Cumilla</div>
                      <div className="text-slate-800 ml-4 font-semibold">CGPA: 5.00</div>
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold tracking-wider text-[#144f54] uppercase border-b-2 border-[#144f54] pb-1 mb-3 inline-block">
                    EXPERIENCE
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#144f54]"></span>
                        <strong className="text-slate-900 font-bold">
                          Home Tutor (Private Tuition)
                        </strong>
                      </div>
                      <p className="text-slate-600 ml-4 leading-relaxed mt-0.5">
                        Taught students privately at home, supporting their academic progress and building strong communication and patience.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#144f54]"></span>
                        <strong className="text-slate-900 font-bold">Crafting</strong>
                      </div>
                      <p className="text-slate-600 ml-4 leading-relaxed mt-0.5">
                        Hands-on creative craft work demonstrating creativity, attention to detail and skilled handiwork.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CERTIFICATIONS */}
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#144f54] uppercase border-b-2 border-[#144f54] pb-1 mb-3 inline-block">
                    CERTIFICATIONS
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#144f54]"></span>
                        <strong className="text-slate-900 font-bold">Basic Baking Course</strong>
                      </div>
                      <div className="text-slate-600 ml-4">The Cake Fairy</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#144f54]"></span>
                        <strong className="text-slate-900 font-bold">Computer Management</strong>
                      </div>
                      <div className="text-slate-600 ml-4">Comilla Victoria Govt. College</div>
                      <div className="text-slate-700 ml-4 text-[11px] leading-relaxed mt-0.5">
                        Grade: A+ | Computer hardware, MS Word, Excel and PowerPoint, internet and email
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
