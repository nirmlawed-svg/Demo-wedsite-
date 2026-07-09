import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../data';
import { Course } from '../types';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Calculator, 
  HeartPulse, 
  Award, 
  ArrowRight, 
  Check, 
  Calendar, 
  BookMarked,
  Clock,
  ShieldAlert,
  Sparkles,
  X
} from 'lucide-react';

interface CoursesProps {
  onOpenDemoWithCourse: (courseTitle: string) => void;
  isDarkMode: boolean;
}

// Map dynamic string to Lucide React element
export function getCourseIcon(iconName: string, className: string = "w-6 h-6") {
  switch (iconName) {
    case 'GraduationCap': return <GraduationCap className={`${className} text-gold-500`} />;
    case 'BookOpen': return <BookOpen className={`${className} text-gold-500`} />;
    case 'FileText': return <FileText className={`${className} text-gold-500`} />;
    case 'Calculator': return <Calculator className={`${className} text-gold-500`} />;
    case 'HeartPulse': return <HeartPulse className={`${className} text-gold-500`} />;
    case 'Award': return <Award className={`${className} text-gold-500`} />;
    default: return <GraduationCap className={`${className} text-gold-500`} />;
  }
}

export default function Courses({ onOpenDemoWithCourse, isDarkMode }: CoursesProps) {
  const [filter, setFilter] = useState<'all' | 'curriculum' | 'competitive'>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Filter criteria logic
  const filteredCourses = COURSES.filter((course) => {
    if (filter === 'all') return true;
    if (filter === 'curriculum') {
      return ['foundation', 'secondary', 'senior'].includes(course.category);
    }
    if (filter === 'competitive') {
      return ['entrance', 'olympiad'].includes(course.category);
    }
    return true;
  });

  return (
    <section 
      id="courses" 
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-b from-brand-blue-950 to-brand-blue-950 text-white' 
          : 'bg-gradient-to-b from-brand-blue-50/40 to-white text-brand-blue-950'
      }`}
    >
      {/* Background Graphic Patterns */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
            Engineered Curriculum
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
            Academic Programs For <span className="text-metallic-gold">Success</span>
          </h3>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
            Explore our curated, specialized learning tracks built on rigorous analytics, extensive question practice banks, and meticulous feedback.
          </p>

          {/* Filtering Menu Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'curriculum', label: 'School Boards' },
              { id: 'competitive', label: 'Competitive Prep' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-brand-blue-950 border-gold-400 font-extrabold shadow-md'
                    : isDarkMode
                      ? 'border-brand-blue-800 bg-brand-blue-900/20 text-brand-blue-300 hover:bg-brand-blue-900/50'
                      : 'border-brand-blue-200 bg-white text-brand-blue-800 hover:bg-brand-blue-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento/Grid of Course Cards */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${
                  isDarkMode 
                    ? 'bg-brand-blue-900/20 border-brand-blue-900 hover:border-gold-500/40 hover:bg-brand-blue-900/35' 
                    : 'bg-white border-brand-blue-100 hover:border-gold-500/40 shadow-sm'
                }`}
              >
                <div>
                  {/* Category micro badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/25 group-hover:scale-105 transition-transform duration-300">
                      {getCourseIcon(course.iconName)}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      course.category === 'entrance' || course.category === 'olympiad'
                        ? 'bg-rose-500/10 text-rose-500 dark:text-rose-400 border border-rose-500/20'
                        : 'bg-brand-blue-500/10 text-brand-blue-600 dark:text-brand-blue-300 border border-brand-blue-500/25'
                    }`}>
                      {course.category}
                    </span>
                  </div>

                  {/* Title & Duration */}
                  <h4 className="font-serif text-lg md:text-xl font-bold mb-2 tracking-tight">
                    {course.title}
                  </h4>
                  <div className={`flex items-center gap-1.5 text-xs font-semibold mb-4 ${
                    isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-600'
                  }`}>
                    <Clock className="w-3.5 h-3.5 text-gold-500" />
                    <span>Duration: {course.duration}</span>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${
                    isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-600'
                  }`}>
                    {course.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-8">
                    {course.keyFeatures.slice(0, 3).map((feat, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className={`text-xs ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-brand-blue-500/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className={`text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-1 cursor-pointer ${
                      isDarkMode ? 'text-brand-blue-300 hover:text-white' : 'text-brand-blue-800 hover:text-brand-blue-950'
                    }`}
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenDemoWithCourse(course.title)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-blue-500/10 text-brand-blue-600 dark:text-brand-blue-300 border border-brand-blue-500/20 hover:bg-gold-500 hover:text-brand-blue-950 hover:border-gold-400 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Detail Modal (For "View Details") */}
        <AnimatePresence>
          {selectedCourse && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCourse(null)}
                className="absolute inset-0 bg-brand-blue-950/75 backdrop-blur-md"
              />

              <motion.div
                id="course-detail-modal"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className={`relative w-full max-w-xl rounded-2xl p-6 md:p-8 shadow-2xl border ${
                  isDarkMode 
                    ? 'bg-brand-blue-950 text-white border-brand-blue-800' 
                    : 'bg-white text-brand-blue-950 border-brand-blue-100'
                } z-10 overflow-hidden`}
              >
                {/* Background gold glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/25">
                      {getCourseIcon(selectedCourse.iconName, "w-6 h-6")}
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gold-500">
                        {selectedCourse.category} Track
                      </span>
                      <h4 className="font-serif text-xl md:text-2xl font-bold tracking-tight">
                        {selectedCourse.title}
                      </h4>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className={`p-1 rounded-full border transition-colors ${
                      isDarkMode 
                        ? 'hover:bg-brand-blue-900 border-brand-blue-800 text-brand-blue-400 hover:text-white' 
                        : 'hover:bg-brand-blue-50 border-brand-blue-100 text-brand-blue-600 hover:text-brand-blue-900'
                    }`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider mb-2 text-gold-500">
                      Core Program Overview
                    </h5>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                      {selectedCourse.description}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider mb-3 text-gold-500">
                      Complete Curricular Syllabus & Features
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedCourse.keyFeatures.map((feat, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-brand-blue-500/5 border border-brand-blue-500/5 text-xs">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className={isDarkMode ? 'text-brand-blue-200' : 'text-brand-blue-800'}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Meta Details Row */}
                  <div className={`p-4 rounded-xl grid grid-cols-2 gap-4 border text-center ${
                    isDarkMode ? 'bg-brand-blue-900/20 border-brand-blue-800' : 'bg-brand-blue-50/50 border-brand-blue-100'
                  }`}>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-500'}`}>Duration</p>
                      <p className="font-serif font-extrabold text-sm mt-0.5">{selectedCourse.duration}</p>
                    </div>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-500'}`}>Batch Frequency</p>
                      <p className="font-serif font-extrabold text-sm mt-0.5">3 Classes / Week + Test</p>
                    </div>
                  </div>

                  {/* Actions inside detail view */}
                  <div className="pt-4 border-t border-brand-blue-500/10 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(null)}
                      className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                        isDarkMode
                          ? 'border-brand-blue-800 hover:bg-brand-blue-900 text-brand-blue-300 hover:text-white'
                          : 'border-brand-blue-200 hover:bg-brand-blue-50 text-brand-blue-800 hover:text-brand-blue-950'
                      }`}
                    >
                      Close Overview
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const title = selectedCourse.title;
                        setSelectedCourse(null);
                        onOpenDemoWithCourse(title);
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-gold-500 to-gold-600 text-brand-blue-950 border border-gold-400 shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                    >
                      Reserve Free Seat
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
