import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, CalendarDays, GraduationCap, Sparkles } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onOpenDemo: () => void;
  onOpenBookings: () => void;
  bookingsCount: number;
}

export default function Header({ isDarkMode, toggleTheme, onOpenDemo, onOpenBookings, bookingsCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll height and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Background styling
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check current section
      const sections = ['home', 'about', 'courses', 'why-choose-us', 'faculty', 'results', 'testimonials', 'gallery', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'results', label: 'Results' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
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

  const headerBg = isScrolled
    ? isDarkMode 
      ? 'bg-brand-blue-950/85 backdrop-blur-md shadow-lg border-b border-brand-blue-900/50' 
      : 'bg-white/90 backdrop-blur-md shadow-md border-b border-brand-blue-100/50'
    : 'bg-transparent';

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-brand-blue-950/20 dark:bg-white/10 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className={`fixed top-0 left-0 right-0 h-20 z-40 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Area */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 flex items-center justify-center text-white shadow-md border border-white/10 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-gold-200" />
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
            <div>
              <h1 className="font-serif text-lg md:text-xl font-extrabold tracking-tight flex items-center gap-1">
                <span>NIMAI</span>
                <span className="text-gold-500 font-sans text-xs uppercase font-extrabold px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/20 tracking-wider">Classes</span>
              </h1>
              <p className={`text-[10px] uppercase font-bold tracking-widest ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-600'}`}>
                Math & Science Institute
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                    active 
                      ? 'text-gold-500' 
                      : isDarkMode 
                        ? 'text-brand-blue-200 hover:text-white hover:bg-white/5' 
                        : 'text-brand-blue-800 hover:text-brand-blue-950 hover:bg-brand-blue-50'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-[3px] rounded-full bg-gold-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Elements */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* View Bookings Button */}
            <button
              onClick={onOpenBookings}
              className={`p-2 rounded-xl border relative transition-all cursor-pointer flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-brand-blue-900/30 border-brand-blue-800 text-brand-blue-300 hover:bg-brand-blue-900/50' 
                  : 'bg-brand-blue-50/50 border-brand-blue-200 text-brand-blue-700 hover:bg-brand-blue-100'
              }`}
              title="My Booked Demos"
            >
              <CalendarDays className="w-5 h-5 text-gold-500" />
              
              <AnimatePresence>
                {bookingsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white font-mono text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-brand-blue-950 shadow-md"
                  >
                    {bookingsCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Dark Mode Switcher */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-brand-blue-900/30 border-brand-blue-800 text-gold-400 hover:bg-brand-blue-900/50 hover:text-gold-300' 
                  : 'bg-brand-blue-50/50 border-brand-blue-200 text-brand-blue-800 hover:bg-brand-blue-100 hover:text-brand-blue-950'
              }`}
              title={isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Premium Call-to-Action button */}
            <button
              onClick={onOpenDemo}
              className="px-4.5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-brand-blue-950 hover:shadow-lg hover:shadow-gold-500/10 border border-gold-400/50 transition-all flex items-center gap-1.5 cursor-pointer relative overflow-hidden group"
            >
              <Sparkles className="w-4 h-4 fill-brand-blue-950 animate-pulse" />
              <span>Free Demo</span>
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </div>

          {/* Hamburger Menu & Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            
            {/* Dark Mode and Calendar icons on Mobile Header too */}
            <button
              onClick={onOpenBookings}
              className={`p-2 rounded-xl border relative transition-all ${
                isDarkMode ? 'bg-brand-blue-900/20 border-brand-blue-800 text-brand-blue-300' : 'bg-brand-blue-50/30 border-brand-blue-200 text-brand-blue-800'
              }`}
            >
              <CalendarDays className="w-4.5 h-4.5 text-gold-500" />
              {bookingsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-rose-500 text-white font-mono text-[9px] font-bold flex items-center justify-center shadow-sm">
                  {bookingsCount}
                </span>
              )}
            </button>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all ${
                isDarkMode ? 'bg-brand-blue-900/20 border-brand-blue-800 text-gold-400' : 'bg-brand-blue-50/30 border-brand-blue-200 text-brand-blue-800'
              }`}
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border transition-all ${
                isDarkMode 
                  ? 'bg-brand-blue-900/30 border-brand-blue-800 text-white hover:bg-brand-blue-900' 
                  : 'bg-brand-blue-50/50 border-brand-blue-200 text-brand-blue-950 hover:bg-brand-blue-100'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`fixed top-20 left-0 right-0 z-30 lg:hidden border-b overflow-hidden shadow-2xl ${
              isDarkMode 
                ? 'bg-brand-blue-950/95 backdrop-blur-lg border-brand-blue-900' 
                : 'bg-white/95 backdrop-blur-lg border-brand-blue-100'
            }`}
          >
            <div className="px-4 py-6 space-y-3.5 max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-4 py-2 text-left text-sm uppercase tracking-wider font-bold rounded-xl transition-all ${
                      activeSection === link.id
                        ? 'bg-gold-500/10 text-gold-500'
                        : isDarkMode
                          ? 'text-brand-blue-200 hover:bg-brand-blue-900/50 hover:text-white'
                          : 'text-brand-blue-800 hover:bg-brand-blue-50 hover:text-brand-blue-950'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-brand-blue-500/10 flex flex-col gap-3">
                <button
                  onClick={() => { setIsOpen(false); onOpenDemo(); }}
                  className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-center text-xs bg-gradient-to-r from-gold-500 to-gold-600 text-brand-blue-950 border border-gold-400 shadow-md flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4.5 h-4.5 fill-brand-blue-950" />
                  Book Free Demo Class
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
