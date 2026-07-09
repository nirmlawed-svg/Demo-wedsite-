import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

interface TestimonialsProps {
  isDarkMode: boolean;
}

export default function Testimonials({ isDarkMode }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto advance slide every 5 seconds, unless hovered
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const currentTest = TESTIMONIALS[activeIndex];

  return (
    <section 
      id="testimonials" 
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-b from-brand-blue-950 to-brand-blue-950 text-white' 
          : 'bg-gradient-to-b from-brand-blue-50/40 to-white text-brand-blue-950'
      }`}
    >
      {/* Background glowing textures */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
            Parent & Student Voice
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
            What Our Academic <span className="text-metallic-gold">Community Says</span>
          </h3>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
            Nothing validates our teaching methods like the honest words of parents and students who have navigated board exams and competitive entries with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Card with AnimatePresence slide effect */}
          <div className="overflow-hidden min-h-[340px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTest.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className={`w-full rounded-2xl p-6 md:p-10 border shadow-xl relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-brand-blue-900/20 border-brand-blue-900' 
                    : 'bg-white border-brand-blue-100'
                }`}
              >
                {/* Large Background Quote mark */}
                <Quote className="absolute right-6 top-6 w-24 h-24 text-gold-500/10 select-none pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(currentTest.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                    ))}
                  </div>

                  {/* Feedback Narrative Text */}
                  <p className="font-sans text-base md:text-lg italic leading-relaxed font-medium">
                    "{currentTest.content}"
                  </p>

                  {/* Author Information Row */}
                  <div className="pt-4 border-t border-brand-blue-500/10 flex items-center gap-4">
                    <img 
                      src={currentTest.photo} 
                      alt={currentTest.authorName} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold-500 shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-extrabold tracking-tight">
                        {currentTest.authorName}
                      </h4>
                      <p className={`text-[10px] font-bold uppercase tracking-widest ${
                        isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-500'
                      }`}>
                        {currentTest.relation}
                      </p>
                      
                      {/* Student / Parent Category tag */}
                      <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-1.5 ${
                        currentTest.role === 'parent' 
                          ? 'bg-brand-blue-500/10 text-brand-blue-600 dark:text-brand-blue-300' 
                          : 'bg-gold-500/15 text-gold-700 dark:text-gold-400'
                      }`}>
                        {currentTest.role} Feedback
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left / Right Control Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-15px] md:left-[-30px] z-10">
            <button
              onClick={prevSlide}
              className={`p-2.5 rounded-xl border shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                isDarkMode 
                  ? 'bg-brand-blue-900 border-brand-blue-800 text-gold-400 hover:text-white' 
                  : 'bg-white border-brand-blue-200 text-brand-blue-800 hover:bg-brand-blue-50'
              }`}
              title="Previous Review"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5px]" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-[-15px] md:right-[-30px] z-10">
            <button
              onClick={nextSlide}
              className={`p-2.5 rounded-xl border shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                isDarkMode 
                  ? 'bg-brand-blue-900 border-brand-blue-800 text-gold-400 hover:text-white' 
                  : 'bg-white border-brand-blue-200 text-brand-blue-800 hover:bg-brand-blue-50'
              }`}
              title="Next Review"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5px]" />
            </button>
          </div>

        </div>

        {/* Sliding Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-6 bg-gold-500' : 'w-2.5 bg-brand-blue-500/30'
              }`}
              title={`View slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
