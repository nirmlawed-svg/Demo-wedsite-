import React from 'react';
import { GraduationCap, ArrowUp, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerBg = isDarkMode 
    ? 'bg-brand-blue-950 text-white border-t border-brand-blue-900' 
    : 'bg-brand-blue-950 text-white'; // Always deep blue for that ultra premium contrast look!

  return (
    <footer className={`${footerBg} pt-16 pb-8 relative z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Information */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={handleScrollToTop}
              className="flex items-center gap-2 text-left group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 flex items-center justify-center text-white border border-white/10 shadow-sm">
                <GraduationCap className="w-6 h-6 text-gold-200" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-extrabold tracking-tight flex items-center gap-1 text-white">
                  <span>NIMAI</span>
                  <span className="text-gold-400 font-sans text-[10px] uppercase font-bold tracking-wider px-1 rounded bg-gold-400/10 border border-gold-400/20">Classes</span>
                </h4>
                <p className="text-[9px] uppercase font-bold tracking-widest text-brand-blue-300">
                  Math & Science Institute
                </p>
              </div>
            </button>

            <p className="text-xs text-brand-blue-300 leading-relaxed max-w-sm">
              An institution engineered on strict diagnostic analytics, personalized mentorship pathways, and premium classroom facilities designed to nurture the scientists and mathematicians of tomorrow.
            </p>

            <p className="text-[10px] text-brand-blue-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
              Empowering Minds Since 2014
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
              Institution
            </h5>
            <ul className="space-y-2.5 text-xs text-brand-blue-300">
              {[
                { id: 'home', label: 'Home Base' },
                { id: 'about', label: 'About Us' },
                { id: 'faculty', label: 'Our Professors' },
                { id: 'results', label: 'Topper Board' },
                { id: 'testimonials', label: 'Community Reviews' },
                { id: 'gallery', label: 'Campus Gallery' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-gold-400 transition-colors cursor-pointer text-left font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Course Links */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
              Our Curriculum
            </h5>
            <ul className="space-y-2.5 text-xs text-brand-blue-300">
              {[
                'Class 6–8 Foundation Program',
                'Class 9–10 Board Preparation',
                'Class 11–12 PCM Engineering Track',
                'JEE Advanced Specialized Entrance',
                'NEET Medical Biology Track',
                'Pre-RMO/IMO Olympiad Mentorship',
              ].map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick('courses')}
                    className="hover:text-gold-400 transition-colors text-left font-medium cursor-pointer"
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
              Coordinates
            </h5>
            <ul className="space-y-3 text-xs text-brand-blue-300">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Plot No. 42, Academic Arcade, GK-2 Metro Hub, South Delhi, Delhi, India</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>admissions@nimai.edu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar & back to top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-brand-blue-400">
          <div>
            <p>© {new Date().getFullYear()} Nimai Math & Science Classes. All rights reserved.</p>
            <p className="mt-0.5 text-brand-blue-500">Built in collaboration with Google AI Studio.</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLinkClick('faq')}
              className="hover:text-gold-400 transition-colors font-medium cursor-pointer"
            >
              Support Accordion
            </button>
            
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-gold-400 hover:text-gold-400 transition-all font-bold uppercase tracking-widest text-[10px] cursor-pointer"
              title="Scroll to Top"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
