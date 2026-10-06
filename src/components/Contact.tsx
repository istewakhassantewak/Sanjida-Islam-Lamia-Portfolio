import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CV_DATA } from '../data/cvData';
import { Mail, Phone, MapPin, Send, MessageSquare, Copy, Check, Heart, ExternalLink, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Tuition / Social Work / Creative Craft Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#ec4899', '#fbcfe8', '#ffd1dc', '#f43f5e']
    });

    // Provide a convenient mailto fallback link automatically
    const mailtoLink = `mailto:${CV_DATA.contact.email}?subject=${encodeURIComponent(
      formData.subject + ' - from ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-pink-500" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Connect with Sanjida
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Feel free to reach out for tutoring inquiries, social work collaboration, custom crafting, or general academic communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-pink-50/50 border border-pink-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-pink-500 text-white flex items-center justify-center shadow-xs">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(CV_DATA.contact.phone, 'phone')}
                  className="p-2 rounded-xl bg-white text-pink-600 border border-pink-200 hover:bg-pink-100 transition-colors text-xs font-medium flex items-center gap-1 cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedType === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Mobile & Phone
              </div>
              <a
                href={`tel:${CV_DATA.contact.phone}`}
                className="text-xl font-bold text-slate-900 hover:text-pink-600 transition-colors block mt-1"
              >
                {CV_DATA.contact.phone}
              </a>
              <div className="text-xs text-slate-500 mt-1">
                Available for academic and professional inquiries
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-4 pt-3 border-t border-pink-200/60 flex items-center justify-between">
                <a
                  href={`https://wa.me/8801817410805`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-slate-400">+880 1817-410805</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-pink-50/50 border border-pink-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(CV_DATA.contact.email, 'email')}
                  className="p-2 rounded-xl bg-white text-rose-600 border border-pink-200 hover:bg-pink-100 transition-colors text-xs font-medium flex items-center gap-1 cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedType === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email Address
              </div>
              <a
                href={`mailto:${CV_DATA.contact.email}`}
                className="text-lg font-bold text-slate-900 hover:text-rose-600 transition-colors block mt-1 break-all"
              >
                {CV_DATA.contact.email}
              </a>
              <div className="text-xs text-slate-500 mt-1">
                Direct inbox for questions, tutoring, or collaborations
              </div>
            </div>

            {/* Portfolio Card */}
            <div className="p-6 rounded-3xl bg-pink-50/50 border border-pink-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(CV_DATA.contact.portfolio, 'portfolio')}
                  className="p-2 rounded-xl bg-white text-pink-600 border border-pink-200 hover:bg-pink-100 transition-colors text-xs font-medium flex items-center gap-1 cursor-pointer"
                  title="Copy Portfolio URL"
                >
                  {copiedType === 'portfolio' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedType === 'portfolio' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Live Portfolio on Vercel
              </div>
              <a
                href={CV_DATA.contact.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-bold text-slate-900 hover:text-pink-600 transition-colors block mt-1 break-all"
              >
                {CV_DATA.contact.portfolio}
              </a>
              <div className="text-xs text-slate-500 mt-1">
                Official personal portfolio link from CV
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-pink-50/50 border border-pink-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Residential Address
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    Cumilla, Bangladesh
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-white p-3.5 rounded-xl border border-pink-100">
                {CV_DATA.contact.address.full}
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                <span>Ward No. 12, Cumilla City</span>
                <span className="text-pink-600 font-medium">Postal: 3500</span>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-md shadow-pink-100/50">
              <h3 className="font-serif-display text-2xl font-bold text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Fill in the details below to start a conversation with Sanjida.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 fill-pink-500" />
                  </div>
                  <h4 className="font-serif-display text-xl font-bold text-slate-900">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                    Your message has been initiated. Opening your email app to finalize delivery to <strong className="text-pink-600">{CV_DATA.contact.email}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-5 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold text-xs hover:bg-pink-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ayesha Rahman"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm text-slate-800 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm text-slate-800 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm text-slate-800 transition-all bg-white"
                    >
                      <option value="Tuition / Student Mentoring Inquiry">Private Home Tuition Inquiry</option>
                      <option value="Social Work Project or Study Collaboration">Social Work & Academic Collaboration</option>
                      <option value="Baking or Cake Order Consultation">Baking & Confectionery Consultation</option>
                      <option value="Handmade Crafts & Decorative Design">Handmade Crafts & Gift Art</option>
                      <option value="General Professional Networking">General Professional Networking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message, queries, or tutoring requirements here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm text-slate-800 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold text-sm shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
