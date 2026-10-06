import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Cake, BookOpen, Palette, Hand, MessageCircle, GraduationCap, Award, Flower2, Laptop, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CV_DATA } from '../data/cvData';

interface AnimatedGirlProps {
  interactive?: boolean;
  className?: string;
}

type CharacterMood = 'greeting' | 'baking' | 'study' | 'craft';

export const AnimatedGirl: React.FC<AnimatedGirlProps> = ({ interactive = true, className = '' }) => {
  const [mood, setMood] = useState<CharacterMood>('greeting');
  const [speechBubble, setSpeechBubble] = useState<string>("Assalamu Alaikum! Welcome to my portfolio 🌸");
  const [isWaving, setIsWaving] = useState(false);
  const [heartBurst, setHeartBurst] = useState<{ id: number; x: number; y: number }[]>([]);

  const moodDialogues: Record<CharacterMood, string> = {
    greeting: "Assalamu Alaikum! I'm Sanjida Islam Lamia. Welcome to my creative portfolio! 🌸",
    baking: "Whisking up delicious joy! Certified baker from The Cake Fairy 🧁",
    study: "Empowering minds through Social Work & patient home tutoring! 📚",
    craft: "Crafting beautiful memories with handmade precision & care! 🎨"
  };

  const handleMoodChange = (newMood: CharacterMood) => {
    setMood(newMood);
    setSpeechBubble(moodDialogues[newMood]);
    
    // Confetti burst with soft pink and rose tones
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#ec4899', '#fbcfe8', '#fb7185', '#ffd1dc']
    });
  };

  const triggerWave = () => {
    setIsWaving(true);
    setSpeechBubble("Sending you warm wishes! Thank you for visiting! 👋💖");
    setTimeout(() => setIsWaving(false), 2400);

    // Heart burst animation
    const newHearts = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 120,
      y: -20 - Math.random() * 80
    }));
    setHeartBurst(prev => [...prev.slice(-10), ...newHearts]);
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={speechBubble}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative mb-4 z-20 max-w-xs text-center"
        >
          <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg shadow-pink-200/50 border border-pink-200 text-pink-950 font-medium text-xs md:text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 text-pink-500 shrink-0 fill-pink-100" />
            <span>{speechBubble}</span>
          </div>
          <div className="w-3 h-3 bg-white border-b border-r border-pink-200 rotate-45 mx-auto -mt-1.5 shadow-sm"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Animated Photo Portrait Container */}
      <div className="relative w-72 h-80 sm:w-80 sm:h-88 flex items-center justify-center">
        {/* Soft Radial Ambient Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.65, 0.85, 0.65],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-tr from-pink-300/40 via-rose-200/40 to-pink-100/50 rounded-full blur-2xl -z-10"
        />

        {/* Orbiting Rotating Badges */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Badge 1: Social Work */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 p-2 rounded-2xl bg-white shadow-md border border-pink-200 text-pink-600">
            <GraduationCap className="w-4 h-4" />
          </div>
          {/* Badge 2: Cake Fairy Baker */}
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 p-2 rounded-2xl bg-white shadow-md border border-pink-200 text-rose-500">
            <Cake className="w-4 h-4" />
          </div>
          {/* Badge 3: Computer Tech */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 p-2 rounded-2xl bg-white shadow-md border border-pink-200 text-pink-600">
            <Laptop className="w-4 h-4" />
          </div>
          {/* Badge 4: Creative Crafts */}
          <div className="absolute top-1/2 -left-3 -translate-y-1/2 p-2 rounded-2xl bg-white shadow-md border border-pink-200 text-rose-500">
            <Palette className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Floating Heart Bursts */}
        {heartBurst.map(hb => (
          <motion.div
            key={hb.id}
            initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1.4, x: hb.x, y: hb.y }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 pointer-events-none text-pink-500 text-lg z-30"
          >
            💖
          </motion.div>
        ))}

        {/* Animated Portrait Frame */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 0.6, -0.6, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={triggerWave}
          className="relative w-60 h-72 sm:w-68 sm:h-80 cursor-pointer group"
          title="Click to say hello to Sanjida!"
        >
          {/* Outer Multi-layer Frame */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-pink-400 via-rose-300 to-pink-200 p-1.5 shadow-xl shadow-pink-200/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-pink-300/80">
            <div className="w-full h-full rounded-[2.2rem] bg-white p-1.5 overflow-hidden relative">
              {/* Actual Portrait Photo */}
              <img
                src={CV_DATA.photoUrl}
                alt="Sanjida Islam Lamia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top rounded-[1.9rem] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom Subtle Gradient Overlay with Name Tag */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pink-950/80 via-pink-900/40 to-transparent p-4 pt-10 text-white rounded-b-[1.9rem] flex items-end justify-between">
                <div>
                  <div className="font-serif-display font-bold text-sm tracking-wide">
                    Sanjida Islam Lamia
                  </div>
                  <div className="text-[10px] text-pink-200 font-medium">
                    {mood === 'baking' ? 'Certified Baker 🧁' : mood === 'study' ? 'Social Work Scholar 📚' : mood === 'craft' ? 'Creative Artisan 🎨' : 'Honours Scholar 🌸'}
                  </div>
                </div>

                {/* Interactive Wave Indicator */}
                <motion.div
                  animate={isWaving ? { rotate: [0, -25, 20, -20, 15, 0] } : {}}
                  transition={{ duration: 1.5 }}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"
                >
                  <Hand className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Controls & Mode Selector */}
      {interactive && (
        <div className="mt-5 flex flex-col items-center gap-2.5">
          {/* Main Action: Wave */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerWave}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-pink-300/50 hover:shadow-lg hover:shadow-pink-400/60 transition-all cursor-pointer"
          >
            <Hand className={`w-4 h-4 ${isWaving ? 'animate-bounce' : ''}`} />
            <span>Say Hello to Lamia! 👋</span>
          </motion.button>

          {/* Persona Mood Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-white/80 backdrop-blur-md border border-pink-200/70 rounded-full shadow-sm text-xs">
            <button
              onClick={() => handleMoodChange('greeting')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                mood === 'greeting'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-pink-900/70 hover:text-pink-700 hover:bg-pink-50'
              }`}
              title="Social Work & Greeting"
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Bio</span>
            </button>
            <button
              onClick={() => handleMoodChange('baking')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                mood === 'baking'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-pink-900/70 hover:text-pink-700 hover:bg-pink-50'
              }`}
              title="Certified Baking Mode"
            >
              <Cake className="w-3.5 h-3.5" />
              <span>Baking</span>
            </button>
            <button
              onClick={() => handleMoodChange('study')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                mood === 'study'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-pink-900/70 hover:text-pink-700 hover:bg-pink-50'
              }`}
              title="Tutoring & Study Mode"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tutoring</span>
            </button>
            <button
              onClick={() => handleMoodChange('craft')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                mood === 'craft'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-pink-900/70 hover:text-pink-700 hover:bg-pink-50'
              }`}
              title="Creative Crafting Mode"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Crafts</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
