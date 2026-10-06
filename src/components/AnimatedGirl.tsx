import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Cake, BookOpen, Palette, Hand, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AnimatedGirlProps {
  interactive?: boolean;
  className?: string;
}

type CharacterMood = 'greeting' | 'baking' | 'study' | 'craft' | 'happy';

export const AnimatedGirl: React.FC<AnimatedGirlProps> = ({ interactive = true, className = '' }) => {
  const [mood, setMood] = useState<CharacterMood>('greeting');
  const [speechBubble, setSpeechBubble] = useState<string>("Assalamu Alaikum! Welcome to my portfolio 🌸");
  const [isWaving, setIsWaving] = useState(false);
  const [heartBurst, setHeartBurst] = useState<{ id: number; x: number; y: number }[]>([]);

  const moodDialogues: Record<CharacterMood, string> = {
    greeting: "Assalamu Alaikum! I'm Sanjida. Welcome to my creative portfolio! 🌸",
    baking: "Whisking up delicious joy! Certified baker from The Cake Fairy 🧁✨",
    study: "Empowering minds through Social Work & patient tutoring! 📚✏️",
    craft: "Crafting beautiful memories with handmade precision & care! 🎨✂️",
    happy: "Spreading kindness, dedication, and positive energy! 💖"
  };

  const handleMoodChange = (newMood: CharacterMood) => {
    setMood(newMood);
    setSpeechBubble(moodDialogues[newMood]);
    
    // Confetti burst with pink and gold tones
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#ec4899', '#fbcfe8', '#fb7185', '#ffd1dc']
    });
  };

  const triggerWave = () => {
    setIsWaving(true);
    setSpeechBubble("Sending you warm wishes! Thank you for visiting! 👋💕");
    setTimeout(() => setIsWaving(false), 2400);

    // Heart burst
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
          className="relative mb-3 z-20 max-w-xs text-center"
        >
          <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg shadow-pink-200/50 border border-pink-200 text-pink-950 font-medium text-xs md:text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-3.5 h-3.5 text-pink-500 shrink-0 fill-pink-100" />
            <span>{speechBubble}</span>
          </div>
          <div className="w-3 h-3 bg-white border-b border-r border-pink-200 rotate-45 mx-auto -mt-1.5 shadow-sm"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Animated Vector Character Container */}
      <div className="relative w-72 h-80 sm:w-80 sm:h-88 flex items-center justify-center">
        {/* Glowing Background Radial Halo */}
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

        {/* Orbiting Sparkles & Charms */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-4 left-6 text-pink-400 opacity-80">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="absolute top-12 right-6 text-rose-400">
            <Heart className="w-4 h-4 fill-rose-300" />
          </div>
          <div className="absolute bottom-12 left-8 text-pink-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute bottom-16 right-8 text-pink-500">
            <span className="text-sm">🌸</span>
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

        {/* Animated Girl Vector Illustration */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 0.8, -0.8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-64 h-72 sm:w-72 sm:h-80 cursor-pointer"
          onClick={() => triggerWave()}
          title="Click to say hello!"
        >
          <svg
            viewBox="0 0 320 360"
            className="w-full h-full drop-shadow-xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="hijabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="50%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>

              <linearGradient id="hijabFold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fda4af" />
                <stop offset="100%" stopColor="#e11d48" stopOpacity="0.4" />
              </linearGradient>

              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffe4d6" />
                <stop offset="100%" stopColor="#fcd5c0" />
              </linearGradient>

              <linearGradient id="dressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdf2f8" />
                <stop offset="50%" stopColor="#fce7f3" />
                <stop offset="100%" stopColor="#fbcfe8" />
              </linearGradient>

              <linearGradient id="goldPin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>

              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Subtle Aura Ring */}
            <circle cx="160" cy="180" r="145" stroke="#fbcfe8" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />

            {/* Back Hijab Volume */}
            <path
              d="M100 90 C100 45, 220 45, 220 90 C240 130, 245 190, 230 250 C210 300, 110 300, 90 250 C75 190, 80 130, 100 90 Z"
              fill="url(#hijabGrad)"
              opacity="0.95"
            />

            {/* Dress / Shoulders */}
            <path
              d="M80 320 Q60 300 85 260 Q120 250 160 250 Q200 250 235 260 Q260 300 240 320 Z"
              fill="url(#dressGrad)"
              stroke="#f472b6"
              strokeWidth="2"
            />
            {/* Elegant neckline lace detailing */}
            <path
              d="M125 258 Q160 272 195 258"
              stroke="#fb7185"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="2 4"
            />

            {/* Hijab Drapes Around Chest */}
            <path
              d="M95 220 C85 270, 120 310, 160 315 C200 310, 235 270, 225 220 C205 240, 115 240, 95 220 Z"
              fill="url(#hijabGrad)"
            />
            <path
              d="M120 235 Q160 275 185 245 Q160 290 120 235 Z"
              fill="url(#hijabFold)"
            />

            {/* Face Oval */}
            <path
              d="M115 130 C115 95, 205 95, 205 130 C205 185, 185 210, 160 210 C135 210, 115 185, 115 130 Z"
              fill="url(#skinGrad)"
            />

            {/* Cheeks Blush */}
            <ellipse cx="132" cy="155" rx="10" ry="6" fill="#fb7185" opacity="0.35" />
            <ellipse cx="188" cy="155" rx="10" ry="6" fill="#fb7185" opacity="0.35" />

            {/* Eyes (Blinking animation + expressive eyelashes) */}
            <g className="animate-blink">
              {/* Left Eye */}
              <ellipse cx="140" cy="142" rx="6.5" ry="5.5" fill="#382329" />
              <ellipse cx="140" cy="142" rx="4.5" ry="3.5" fill="#1e1b4b" />
              <circle cx="142" cy="140" r="2.2" fill="#ffffff" />
              <circle cx="138" cy="143" r="1.1" fill="#ffffff" />
              {/* Left Eyelash & Brow */}
              <path d="M131 137 Q140 133 148 137" stroke="#382329" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M132 129 Q140 125 149 128" stroke="#713f12" strokeWidth="2" strokeLinecap="round" opacity="0.75" />

              {/* Right Eye */}
              <ellipse cx="180" cy="142" rx="6.5" ry="5.5" fill="#382329" />
              <ellipse cx="180" cy="142" rx="4.5" ry="3.5" fill="#1e1b4b" />
              <circle cx="182" cy="140" r="2.2" fill="#ffffff" />
              <circle cx="178" cy="143" r="1.1" fill="#ffffff" />
              {/* Right Eyelash & Brow */}
              <path d="M172 137 Q180 133 189 137" stroke="#382329" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M171 129 Q180 125 188 128" stroke="#713f12" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
            </g>

            {/* Cute Delicate Nose */}
            <path d="M159 148 Q161 154 157 156" stroke="#e0a98f" strokeWidth="1.6" strokeLinecap="round" />

            {/* Sweet Warm Smile */}
            <path
              d="M150 168 Q160 178 170 168"
              stroke="#e11d48"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Lower Lip Sheen */}
            <path
              d="M154 172 Q160 177 166 172"
              stroke="#fda4af"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Front Hijab Wrap & Framing */}
            {/* Left wrap */}
            <path
              d="M100 85 C115 70, 160 70, 175 85 C145 100, 120 108, 114 135 C110 120, 104 100, 100 85 Z"
              fill="url(#hijabGrad)"
            />
            {/* Right frame */}
            <path
              d="M175 85 C190 70, 220 85, 220 100 C215 125, 208 140, 204 150 C210 125, 195 100, 175 85 Z"
              fill="url(#hijabGrad)"
            />

            {/* Hijab folds and chin contour */}
            <path
              d="M118 175 C122 195, 140 215, 160 218 C180 215, 198 195, 202 175 C208 200, 195 225, 160 228 C125 225, 112 200, 118 175 Z"
              fill="url(#hijabGrad)"
            />

            {/* Flowing Scarf Layer Left */}
            <path
              d="M125 225 C100 250, 95 285, 105 320 C118 290, 130 260, 140 235 Z"
              fill="url(#hijabFold)"
            />

            {/* Golden Decorative Brooch/Pin */}
            <g transform="translate(196, 175)">
              <circle cx="0" cy="0" r="6" fill="url(#goldPin)" filter="url(#softGlow)" />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
              {/* Tiny dangling pearl */}
              <circle cx="0" cy="8" r="2.5" fill="#ffffff" stroke="#eab308" strokeWidth="0.8" />
              <line x1="0" y1="5" x2="0" y2="7" stroke="#ca8a04" strokeWidth="1" />
            </g>

            {/* Left Hand with dynamic props based on mood */}
            {mood === 'baking' && (
              <g transform="translate(68, 215)">
                {/* Cute Baking Whisk & Cupcake */}
                <rect x="0" y="25" width="22" height="18" rx="4" fill="#fb7185" />
                <path d="M-3 25 Q11 12 25 25" fill="#f43f5e" />
                <circle cx="11" cy="12" r="4" fill="#e11d48" />
                {/* Sparkle */}
                <path d="M11 2 L13 7 L18 8 L13 10 L11 15 L9 10 L4 8 L9 7 Z" fill="#fbbf24" />
              </g>
            )}

            {mood === 'study' && (
              <g transform="translate(68, 220)">
                {/* Book & Pen */}
                <rect x="0" y="10" width="28" height="34" rx="3" fill="#f43f5e" transform="rotate(-15)" />
                <rect x="4" y="12" width="24" height="30" rx="2" fill="#fff" transform="rotate(-15)" />
                <line x1="8" y1="20" x2="22" y2="16" stroke="#f472b6" strokeWidth="2" />
                <line x1="10" y1="26" x2="24" y2="22" stroke="#f472b6" strokeWidth="2" />
              </g>
            )}

            {mood === 'craft' && (
              <g transform="translate(64, 218)">
                {/* Craft Scissors & Origami Star */}
                <circle cx="8" cy="30" r="5" stroke="#f43f5e" strokeWidth="2" fill="none" />
                <circle cx="18" cy="34" r="5" stroke="#f43f5e" strokeWidth="2" fill="none" />
                <line x1="9" y1="26" x2="24" y2="12" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="17" y1="29" x2="5" y2="15" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M30 14 L33 22 L41 22 L35 27 L37 35 L30 30 L23 35 L25 27 L19 22 L27 22 Z" fill="#ec4899" transform="scale(0.55)" />
              </g>
            )}

            {/* Right Arm: Interactive Waving Animation */}
            <motion.g
              animate={isWaving ? {
                rotate: [0, -22, 18, -20, 15, 0],
                originX: "240px",
                originY: "260px"
              } : {
                rotate: [0, -4, 0],
                originX: "240px",
                originY: "260px"
              }}
              transition={isWaving ? {
                duration: 1.8,
                ease: "easeInOut"
              } : {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Arm Sleeve */}
              <path
                d="M235 255 Q265 245 275 220 Q265 210 240 240 Z"
                fill="url(#dressGrad)"
                stroke="#f472b6"
                strokeWidth="1.5"
              />
              {/* Hand */}
              <ellipse cx="275" cy="216" rx="8" ry="7" fill="url(#skinGrad)" />
              {/* Delicate waving fingers */}
              <path d="M272 210 Q275 204 278 210" stroke="#fcd5c0" strokeWidth="2" strokeLinecap="round" />
              <path d="M276 210 Q280 203 283 209" stroke="#fcd5c0" strokeWidth="2" strokeLinecap="round" />
              <path d="M280 212 Q284 207 286 213" stroke="#fcd5c0" strokeWidth="1.8" strokeLinecap="round" />
            </motion.g>
          </svg>
        </motion.div>
      </div>

      {/* Interactive Controls & Mode Selector */}
      {interactive && (
        <div className="mt-4 flex flex-col items-center gap-2.5">
          {/* Main Action: Wave */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerWave}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-pink-300/50 hover:shadow-lg hover:shadow-pink-400/60 transition-all cursor-pointer"
          >
            <Hand className={`w-4 h-4 ${isWaving ? 'animate-bounce' : ''}`} />
            <span>Say Hello to Lamia! 👋</span>
          </motion.button>

          {/* Persona Mood Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-white/80 backdrop-blur-md border border-pink-200/70 rounded-full shadow-sm text-xs">
            <button
              onClick={() => handleMoodChange('greeting')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                mood === 'greeting'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-pink-900/70 hover:text-pink-700 hover:bg-pink-50'
              }`}
              title="Social Work & Greeting"
            >
              <Heart className="w-3 h-3" />
              <span>Bio</span>
            </button>
            <button
              onClick={() => handleMoodChange('baking')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                mood === 'baking'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-pink-900/70 hover:text-pink-700 hover:bg-pink-50'
              }`}
              title="Certified Baking Mode"
            >
              <Cake className="w-3 h-3" />
              <span>Baking</span>
            </button>
            <button
              onClick={() => handleMoodChange('study')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                mood === 'study'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-pink-900/70 hover:text-pink-700 hover:bg-pink-50'
              }`}
              title="Tutoring & Study Mode"
            >
              <BookOpen className="w-3 h-3" />
              <span>Tutoring</span>
            </button>
            <button
              onClick={() => handleMoodChange('craft')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                mood === 'craft'
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'text-pink-900/70 hover:text-pink-700 hover:bg-pink-50'
              }`}
              title="Creative Crafting Mode"
            >
              <Palette className="w-3 h-3" />
              <span>Crafts</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
