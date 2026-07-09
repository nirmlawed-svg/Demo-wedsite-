import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, CalendarRange, ArrowDown, Award, Users, BookOpen, Star } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  isDarkMode: boolean;
}

function Counter({ end, duration = 1500, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero({ onOpenDemo, isDarkMode }: HeroProps) {
  
  const handleExploreClick = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = coursesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const textGradient = isDarkMode
    ? 'from-white via-brand-blue-100 to-brand-blue-300'
    : 'from-brand-blue-950 via-brand-blue-900 to-brand-blue-800';

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Graphic Overlay (High Quality Unsplash Learning Scene) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" 
          alt="Students studying in a premium modern environment" 
          className="w-full h-full object-cover object-center opacity-15 dark:opacity-10 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft Radial Gradients to establish depth */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-brand-blue-950/80 via-brand-blue-950/95 to-brand-blue-950' 
            : 'bg-gradient-to-b from-white/80 via-brand-blue-50/90 to-brand-blue-50/40'
        }`} />
        
        {/* Floating Abstract Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text and Description Column (8 Cols on large, centered otherwise) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Top Micro-badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/10 dark:bg-gold-500/15 text-gold-600 dark:text-gold-400 border border-gold-500/25"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-spin" style={{ animationDuration: '4s' }} />
              Admissions Open for Academic Batch 2026-27
            </motion.div>

            {/* Core H1 Title */}
            <div className="space-y-3.5">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] ${
                  isDarkMode ? 'text-white' : 'text-brand-blue-950'
                }`}
              >
                Unlock Your Child's <br />
                <span className="text-metallic-gold">True Academic</span> Potential
              </motion.h2>
              
              {/* Detailed descriptive tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                  isDarkMode ? 'text-brand-blue-200' : 'text-brand-blue-800'
                }`}
              >
                Empowering students from <span className="font-bold text-gold-500 bg-gold-500/5 px-1.5 py-0.5 rounded border border-gold-500/10">Class 6–12</span> with concept-driven, analytical guidance in Mathematics, Physics, Chemistry, and Biology.
              </motion.p>
            </div>

            {/* Dual CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-brand-blue-950 hover:scale-[1.02] shadow-lg shadow-gold-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-gold-400"
              >
                <CalendarRange className="w-4.5 h-4.5" />
                Book Free Demo Class
              </button>

              <button
                onClick={handleExploreClick}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-widest border transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer ${
                  isDarkMode
                    ? 'border-brand-blue-700 bg-brand-blue-900/10 text-brand-blue-200 hover:border-gold-500 hover:text-gold-400 hover:bg-brand-blue-900/40'
                    : 'border-brand-blue-300 bg-white/70 text-brand-blue-800 hover:border-gold-500 hover:text-gold-600 hover:bg-white'
                }`}
              >
                Explore Courses
                <ArrowDown className="w-4.5 h-4.5 animate-bounce" />
              </button>
            </motion.div>
          </div>

          {/* Right Floating Badge Graphic Card (5 Cols on large, hiding on mobile or positioned cleanly) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, type: 'spring' }}
              className={`w-full max-w-sm rounded-2xl p-6 md:p-8 shadow-2xl border ${
                isDarkMode ? 'glass-dark' : 'glass-light'
              } relative overflow-hidden`}
            >
              {/* Card visual elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                    <Award className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Why Academic Leaders Choose Nimai?</h4>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className={`text-xs italic leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                  "The conceptual roadmap designed by Prof. Nimai Sen didn't just help me score a perfect 100 in Mathematics boards, it made organic physics my natural language."
                </blockquote>

                <div className="flex items-center gap-2.5">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
                    alt="Happy Topper student Aarav" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-gold-500"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-xs">Aarav Singhania</p>
                    <p className={`text-[10px] ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-600'}`}>JEE Main State Topper (AIR 142)</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-blue-500/10 grid grid-cols-2 gap-3 text-center">
                  <div className="p-2 rounded-lg bg-brand-blue-500/5 border border-brand-blue-500/10">
                    <p className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Next Batch</p>
                    <p className="font-serif font-extrabold text-sm mt-0.5">Monday, July 13</p>
                  </div>
                  <div className="p-2 rounded-lg bg-brand-blue-500/5 border border-brand-blue-500/10">
                    <p className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Available Slots</p>
                    <p className="font-serif font-extrabold text-sm mt-0.5 text-rose-500">Only 4 Left</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Animated Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 pt-8 border-t border-brand-blue-500/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            {/* Stat 1 */}
            <div className="space-y-1 group">
              <div className="flex items-center justify-center text-brand-blue-500 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-5 h-5 text-gold-500" />
              </div>
              <p className="font-mono text-3xl md:text-4xl font-extrabold text-metallic-gold leading-none mt-1">
                <Counter end={1500} suffix="+" />
              </p>
              <p className={`text-[11px] md:text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                Happy Students
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1 group">
              <div className="flex items-center justify-center text-brand-blue-500 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 text-gold-500" />
              </div>
              <p className="font-mono text-3xl md:text-4xl font-extrabold text-metallic-gold leading-none mt-1">
                <Counter end={98} suffix="%" />
              </p>
              <p className={`text-[11px] md:text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                Success Rate
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1 group">
              <div className="flex items-center justify-center text-brand-blue-500 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-5 h-5 text-gold-500" />
              </div>
              <p className="font-mono text-3xl md:text-4xl font-extrabold text-metallic-gold leading-none mt-1">
                <Counter end={12} suffix="+" />
              </p>
              <p className={`text-[11px] md:text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                Years of Excellence
              </p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-1 group">
              <div className="flex items-center justify-center text-brand-blue-500 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 text-gold-500" />
              </div>
              <p className="font-mono text-3xl md:text-4xl font-extrabold text-metallic-gold leading-none mt-1">
                <Counter end={50} suffix="+" />
              </p>
              <p className={`text-[11px] md:text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                Top Rankers
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
