import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Users, ClipboardCheck, MessageSquare, TrendingUp, Cpu, Compass } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6 text-gold-500" />,
      title: 'Experienced Faculty',
      desc: 'Mentored by top IIT graduates, Ph.D. scholars, and gold-medalist educators committed to analytical clarity.'
    },
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: 'Small Batch Size',
      desc: 'Strictly limited to 20–25 students to ensure personalized interaction, eye-contact, and real-time guidance.'
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-gold-500" />,
      title: 'Weekly Revision Tests',
      desc: 'Rigorous Descriptive and MCQ examinations designed to target weak links and track curriculum retention.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-gold-500" />,
      title: 'Doubt Solving Sessions',
      desc: 'Daily dedicated hours where students can sit with professors face-to-face to untangle complex formulas.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />,
      title: 'Parent Progress Reports',
      desc: 'Real-time performance syncing, direct parent-teacher communications, and detailed progress analytics.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-gold-500" />,
      title: 'Digital Learning Support',
      desc: 'Smart screen boards, recorded lecture repositories, and localized high-quality digital mock test simulations.'
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDarkMode ? 'bg-brand-blue-950 text-white' : 'bg-white text-brand-blue-950'
      }`}
    >
      {/* Background visual detail */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-12 w-64 h-64 bg-brand-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Elegant Collage & Badges */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Photo Framed with Gold border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/30 group">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
                  alt="Interactive lecture session" 
                  className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Gold Highlight Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`absolute bottom-[-20px] right-[-10px] md:right-[-20px] p-5 rounded-xl shadow-xl border ${
                  isDarkMode 
                    ? 'bg-brand-blue-900/90 border-gold-500/30 text-white backdrop-blur-md' 
                    : 'bg-gold-50/95 border-gold-400 text-brand-blue-950 backdrop-blur-md'
                } max-w-[240px]`}
              >
                <div className="flex items-center gap-2 mb-1.5 text-gold-500 dark:text-gold-400">
                  <Compass className="w-5 h-5" />
                  <span className="font-bold text-xs uppercase tracking-widest">Our Vision</span>
                </div>
                <p className="text-[11px] leading-relaxed font-medium">
                  Guiding young minds past standard rote-learning into deep, intuitive mathematical logical and scientific first-principles.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Editorial & Feature Grid */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header */}
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                Pristine Academic Standards
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
                Empowering the Next Generation of <br className="hidden sm:inline" />
                <span className="text-metallic-gold">Thinkers & Achievers</span>
              </h3>
              <p className={`text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'
              }`}>
                At Nimai Math & Science Classes, we reject the industrial factory model of mass tuition. We believe academic excellence is an art built on individual attention, robust analytical frameworks, and unwavering mentor support.
              </p>
            </div>

            {/* Feature Cards Grid (2x3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {features.map((feat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-5 rounded-xl border transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-brand-blue-900/20 border-brand-blue-900 hover:bg-brand-blue-900/40 hover:border-gold-500/30' 
                      : 'bg-brand-blue-50/20 border-brand-blue-100/50 hover:bg-brand-blue-50/40 hover:border-gold-500/30'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center border border-gold-500/20 mb-3.5 group-hover:scale-105 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1.5">{feat.title}</h4>
                  <p className={`text-xs leading-relaxed ${
                    isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-600'
                  }`}>
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
