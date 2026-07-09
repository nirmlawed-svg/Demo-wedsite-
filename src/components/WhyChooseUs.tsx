import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Heart, 
  Tv, 
  TrendingUp, 
  BookMarked, 
  Gem, 
  Compass, 
  PiggyBank 
} from 'lucide-react';

interface WhyChooseUsProps {
  isDarkMode: boolean;
}

export default function WhyChooseUs({ isDarkMode }: WhyChooseUsProps) {
  const points = [
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: 'Expert Teachers',
      desc: 'Learn directly from IIT graduates, Ph.D. scholars, and textbook authors who know how to simplify complex theorems.'
    },
    {
      icon: <Heart className="w-6 h-6 text-gold-500" />,
      title: 'Personalized Attention',
      desc: 'With strictly limited batch sizes, we track every student conceptual learning graph and customize tutoring speed.'
    },
    {
      icon: <Tv className="w-6 h-6 text-gold-500" />,
      title: 'Smart Classrooms',
      desc: 'Equipped with 3D animation systems, digital mapping boards, and remote student clickers for active learning.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />,
      title: 'Regular Assessments',
      desc: 'Weekly performance audits, national level simulator ranking, and in-depth qualitative error analysis diagnostics.'
    },
    {
      icon: <BookMarked className="w-6 h-6 text-gold-500" />,
      title: 'Comprehensive Study Material',
      desc: 'Exhaustive custom-authored theory volumes, categorized question sheets (DPPs), and board-exam presentation booklets.'
    },
    {
      icon: <Gem className="w-6 h-6 text-gold-500" />,
      title: 'Scholarship Programs',
      desc: 'Merit-based scholarships providing up to 100% tuition waiver for outstanding school boards or NSAT performers.'
    },
    {
      icon: <Compass className="w-6 h-6 text-gold-500" />,
      title: 'Career & College Guidance',
      desc: 'Specialized counseling and orientation seminars for engineering (IIT/NIT), medical (AIIMS), and foreign college admissions.'
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-gold-500" />,
      title: 'Affordable Fee Structures',
      desc: 'Premium industry education priced transparently with monthly/quarterly installment flexibilities and refund policies.'
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDarkMode ? 'bg-brand-blue-950 text-white' : 'bg-white text-brand-blue-950'
      }`}
    >
      {/* Background glowing details */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
            A Class Apart
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
            Why Academic High-Achievers <br className="hidden sm:inline" />
            <span className="text-metallic-gold">Trust Nimai Classes</span>
          </h3>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
            We bridge the gap between textbook rote learning and high-scoring critical capabilities. Discover how our unique academic infrastructure guarantees success.
          </p>
        </div>

        {/* Feature Grid Layout (4 columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((pt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-brand-blue-900/15 border-brand-blue-900 hover:border-gold-500/35 hover:bg-brand-blue-900/30' 
                  : 'bg-brand-blue-50/15 border-brand-blue-100/70 hover:border-gold-500/35 hover:bg-white shadow-sm'
              }`}
            >
              {/* Subtle top gold-border on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/25 mb-4 group-hover:scale-110 transition-transform duration-300">
                {pt.icon}
              </div>
              
              <h4 className="font-bold text-sm mb-2 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                {pt.title}
              </h4>
              
              <p className={`text-xs leading-relaxed ${
                isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-600'
              }`}>
                {pt.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
