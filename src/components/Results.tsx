import React from 'react';
import { motion } from 'motion/react';
import { RESULTS } from '../data';
import { Star, School, Award, Trophy, ShieldCheck } from 'lucide-react';

interface ResultsProps {
  isDarkMode: boolean;
}

export default function Results({ isDarkMode }: ResultsProps) {
  return (
    <section 
      id="results" 
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDarkMode ? 'bg-brand-blue-950 text-white' : 'bg-white text-brand-blue-950'
      }`}
    >
      {/* Background Graphic Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
            Pinnacle achievements
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
            Our Hall of Fame: <span className="text-metallic-gold">Recent Toppers</span>
          </h3>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
            Witness the success of our dedicated students who conquered regional board exams and secured national ranks in JEE, NEET, and International Olympiads.
          </p>
        </div>

        {/* Results Cards Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESULTS.map((res, index) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={`rounded-2xl border p-5 flex flex-col justify-between transition-all duration-350 relative overflow-hidden group hover:shadow-2xl hover:border-gold-500/40 ${
                isDarkMode 
                  ? 'bg-brand-blue-900/15 border-brand-blue-900' 
                  : 'bg-white border-brand-blue-100 shadow-sm'
              }`}
            >
              {/* Corner Topper Medal Badge */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/15 via-transparent to-transparent pointer-events-none" />

              <div className="space-y-4">
                {/* Photo and Badge container */}
                <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-gold-500/30 group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={res.photo} 
                    alt={res.name} 
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Gold Medal Tag */}
                  <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-gold-500 text-brand-blue-950 flex items-center justify-center border border-white dark:border-brand-blue-950 shadow-md">
                    <Trophy className="w-4 h-4 fill-brand-blue-950 stroke-brand-blue-950" />
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <span className={`inline-block text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full ${
                    isDarkMode ? 'bg-gold-500/15 text-gold-400' : 'bg-gold-500/10 text-gold-700'
                  }`}>
                    {res.badge}
                  </span>
                  
                  <h4 className="font-serif text-base font-extrabold tracking-tight">
                    {res.name}
                  </h4>

                  {/* High Score Typography Display */}
                  <p className="font-mono text-2xl md:text-3xl font-extrabold text-metallic-gold leading-none py-1.5">
                    {res.score}
                  </p>
                </div>

                {/* Subheading Details */}
                <div className={`pt-3 border-t border-dashed border-brand-blue-500/10 space-y-2 text-xs text-center ${
                  isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'
                }`}>
                  <p className="font-bold text-xs flex items-center justify-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {res.achievement}
                  </p>

                  <p className="text-[10px] italic flex items-center justify-center gap-1 leading-tight text-brand-blue-400 dark:text-brand-blue-500">
                    <School className="w-3 h-3 flex-shrink-0" />
                    {res.schoolName}
                  </p>
                </div>
              </div>

              {/* Topper verified badge */}
              <div className="mt-4 pt-3 border-t border-brand-blue-500/10 text-center">
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${
                  isDarkMode ? 'text-brand-blue-500' : 'text-brand-blue-400'
                }`}>
                  Verified Topper
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
