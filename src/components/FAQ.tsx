import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, MessageCircleQuestion, Compass } from 'lucide-react';

interface FAQProps {
  isDarkMode: boolean;
}

export default function FAQ({ isDarkMode }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="faq" 
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-b from-brand-blue-950 to-brand-blue-950 text-white' 
          : 'bg-gradient-to-b from-brand-blue-50/40 to-white text-brand-blue-950'
      }`}
    >
      {/* Background Graphic Patterns */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
            Answers & Clarity
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-metallic-gold">Questions</span>
          </h3>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
            Have questions about our syllabus, scheduling, diagnostic tests, or parent communications? Find quick answers from our administrative desk.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDarkMode
                      ? 'bg-brand-blue-900/35 border-gold-500/40 shadow-lg'
                      : 'bg-white border-gold-500/40 shadow-md'
                    : isDarkMode
                      ? 'bg-brand-blue-900/15 border-brand-blue-900/80 hover:bg-brand-blue-900/25'
                      : 'bg-brand-blue-50/15 border-brand-blue-100/80 hover:bg-white'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 text-gold-500`} />
                    <span className="font-serif font-bold text-sm md:text-base tracking-tight leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`p-1 rounded-lg ${
                      isOpen 
                        ? 'bg-gold-500/10 text-gold-500' 
                        : isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5px]" />
                  </motion.div>
                </button>

                {/* Animated Expandable Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className={`px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-dashed border-brand-blue-500/10 text-xs md:text-sm leading-relaxed ${
                        isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Under-accordion prompt info */}
        <div className={`mt-10 p-5 rounded-2xl border text-center max-w-xl mx-auto space-y-3 ${
          isDarkMode ? 'bg-brand-blue-900/20 border-brand-blue-900' : 'bg-brand-blue-50/20 border-brand-blue-100'
        }`}>
          <div className="inline-flex w-10 h-10 rounded-full bg-gold-500/10 items-center justify-center border border-gold-500/25">
            <MessageCircleQuestion className="w-5 h-5 text-gold-500" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Still have unanswered questions?</h4>
            <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-600'}`}>
              Our administrative staff is ready to help. Schedule a phone call with us or walk into our campus directly.
            </p>
          </div>
          <div className="pt-1">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block text-xs font-bold uppercase tracking-widest text-gold-500 hover:underline hover:text-gold-400"
            >
              Get In Touch Now →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
