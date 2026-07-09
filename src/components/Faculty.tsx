import React from 'react';
import { motion } from 'motion/react';
import { FACULTY } from '../data';
import { Linkedin, Twitter, Mail, Award, BookOpen } from 'lucide-react';

interface FacultyProps {
  isDarkMode: boolean;
}

export default function Faculty({ isDarkMode }: FacultyProps) {
  return (
    <section 
      id="faculty" 
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-b from-brand-blue-950 to-brand-blue-950 text-white' 
          : 'bg-gradient-to-b from-white to-brand-blue-50/40 text-brand-blue-950'
      }`}
    >
      {/* Visual backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
            Pedagogical Leaders
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
            Learn From India's <span className="text-metallic-gold">Premier Educators</span>
          </h3>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
            Our mentors are seasoned specialists, textbook authors, and research scholars who bridge the gap between classroom guidelines and advanced applications.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACULTY.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-350 group hover:shadow-2xl hover:border-gold-500/40 ${
                isDarkMode 
                  ? 'bg-brand-blue-900/15 border-brand-blue-900' 
                  : 'bg-white border-brand-blue-100 shadow-sm'
              }`}
            >
              <div>
                {/* Photo Header Container with Hover Zoom and Social pop-ups */}
                <div className="relative h-64 overflow-hidden bg-brand-blue-900/10">
                  <img 
                    src={teacher.photo} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Elegant Gradient Shade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-brand-blue-950/20 to-transparent opacity-60" />

                  {/* Subject badge floating */}
                  <div className="absolute bottom-4 left-4 right-4 p-2.5 rounded-lg glass-dark border border-white/10 text-white backdrop-blur-md">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" /> Mentor Subject
                    </p>
                    <p className="font-bold text-xs mt-0.5">{teacher.subject}</p>
                  </div>
                </div>

                {/* Teacher Bio & Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-extrabold tracking-tight">
                      {teacher.name}
                    </h4>
                    <p className="text-xs font-semibold text-gold-600 dark:text-gold-400 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      {teacher.qualification}
                    </p>
                    <p className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-500'}`}>
                      {teacher.experience}
                    </p>
                  </div>

                  <p className={`text-xs leading-relaxed italic ${
                    isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-600'
                  }`}>
                    "{teacher.bio}"
                  </p>
                </div>
              </div>

              {/* Social Quick-actions footer */}
              <div className={`px-6 py-4 border-t flex items-center justify-between ${
                isDarkMode ? 'border-brand-blue-900 bg-brand-blue-950/40' : 'border-brand-blue-50 bg-brand-blue-50/10'
              }`}>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-brand-blue-500' : 'text-brand-blue-400'}`}>
                  Connect Mentor
                </span>
                
                <div className="flex items-center gap-2.5">
                  {teacher.socials?.linkedin && (
                    <a 
                      href={teacher.socials.linkedin} 
                      className={`p-1.5 rounded-lg transition-colors ${
                        isDarkMode ? 'hover:bg-brand-blue-900 text-brand-blue-400 hover:text-white' : 'hover:bg-brand-blue-50 text-brand-blue-600 hover:text-brand-blue-900'
                      }`}
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {teacher.socials?.twitter && (
                    <a 
                      href={teacher.socials.twitter} 
                      className={`p-1.5 rounded-lg transition-colors ${
                        isDarkMode ? 'hover:bg-brand-blue-900 text-brand-blue-400 hover:text-white' : 'hover:bg-brand-blue-50 text-brand-blue-600 hover:text-brand-blue-900'
                      }`}
                      title="Twitter Profile"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {teacher.socials?.email && (
                    <a 
                      href={`mailto:${teacher.socials.email}`} 
                      className={`p-1.5 rounded-lg transition-colors ${
                        isDarkMode ? 'hover:bg-brand-blue-900 text-brand-blue-400 hover:text-white' : 'hover:bg-brand-blue-50 text-brand-blue-600 hover:text-brand-blue-900'
                      }`}
                      title="Send Academic Mail"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
