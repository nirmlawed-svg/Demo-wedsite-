import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Faculty from './components/Faculty';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import BookingsPanel from './components/BookingsPanel';
import Notification, { ToastType } from './components/Notification';
import { DemoBooking, ContactMessage } from './types';
import { GraduationCap, Sparkles } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState<string | undefined>(undefined);
  const [bookings, setBookings] = useState<DemoBooking[]>([]);
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: ToastType }>>([]);

  // Load initial bookings from localStorage and configure loading state
  useEffect(() => {
    const existing = localStorage.getItem('nimai_demo_bookings');
    if (existing) {
      setBookings(JSON.parse(existing));
    }

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(loadTimer);
  }, []);

  // Sync dark class on the HTML tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    showToast(`Switched to ${!isDarkMode ? 'Cosmic Dark' : 'Academic Light'} theme!`, 'info');
  };

  const showToast = (message: string, type: ToastType = 'success') => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleBookingSuccess = (newBooking: DemoBooking) => {
    setBookings((prev) => [...prev, newBooking]);
    showToast(`Demo booked! We scheduled ${newBooking.studentName} for ${newBooking.preferredDate}.`, 'success');
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem('nimai_demo_bookings', JSON.stringify(updated));
    showToast('Demo class schedule has been cancelled.', 'info');
  };

  const handleContactSuccess = (newMessage: ContactMessage) => {
    showToast(`Thank you, ${newMessage.name}! Our mentoring desk will reply shortly.`, 'success');
  };

  const handleOpenDemoWithCourse = (courseTitle: string) => {
    setPreselectedCourse(courseTitle);
    setIsDemoOpen(true);
  };

  const handleGeneralOpenDemo = () => {
    setPreselectedCourse(undefined);
    setIsDemoOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-brand-blue-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* 1. Fullscreen Elegant Entrance Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-brand-blue-950 flex flex-col items-center justify-center text-white"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              {/* Gold spinning academic crest */}
              <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <GraduationCap className="w-12 h-12 text-brand-blue-950" />
                <div className="absolute inset-[-6px] border border-gold-500/30 rounded-3xl animate-ping" />
              </div>
              <div className="space-y-1.5">
                <h1 className="font-serif text-2xl md:text-3xl font-extrabold tracking-tight">
                  NIMAI <span className="text-metallic-gold font-sans text-sm tracking-wider px-2 py-0.5 rounded bg-white/10 ml-1">Classes</span>
                </h1>
                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-blue-300">
                  Math & Science Coaching Centre
                </p>
              </div>

              {/* Progress loader */}
              <div className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden relative">
                <motion.div 
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website View (rendered when loaded) */}
      {!isLoading && (
        <div className="relative">
          {/* Header section */}
          <Header
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            onOpenDemo={handleGeneralOpenDemo}
            onOpenBookings={() => setIsBookingsOpen(true)}
            bookingsCount={bookings.length}
          />

          {/* Core scroll segments */}
          <main className="space-y-0 overflow-x-hidden">
            <Hero 
              onOpenDemo={handleGeneralOpenDemo} 
              isDarkMode={isDarkMode} 
            />
            <About 
              isDarkMode={isDarkMode} 
            />
            <Courses 
              onOpenDemoWithCourse={handleOpenDemoWithCourse} 
              isDarkMode={isDarkMode} 
            />
            <WhyChooseUs 
              isDarkMode={isDarkMode} 
            />
            <Faculty 
              isDarkMode={isDarkMode} 
            />
            <Results 
              isDarkMode={isDarkMode} 
            />
            <Testimonials 
              isDarkMode={isDarkMode} 
            />
            <Gallery 
              isDarkMode={isDarkMode} 
            />
            <FAQ 
              isDarkMode={isDarkMode} 
            />
            <Contact 
              isDarkMode={isDarkMode} 
              onMessageSuccess={handleContactSuccess} 
            />
          </main>

          {/* Footer section */}
          <Footer 
            isDarkMode={isDarkMode} 
          />

          {/* Floating Action Button (Quick booking reminder) */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3 }}
            className="fixed bottom-6 right-6 z-30"
          >
            <button
              onClick={handleGeneralOpenDemo}
              className="p-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-brand-blue-950 font-extrabold uppercase shadow-xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-gold-400 relative group overflow-hidden"
              title="Book Free Demo class"
            >
              <Sparkles className="w-5 h-5 fill-brand-blue-950 animate-pulse" />
              <span className="hidden md:inline text-xs font-black tracking-wider">Demo Slot</span>
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </motion.div>

          {/* Interactive Modals and Side Panels */}
          <DemoModal
            isOpen={isDemoOpen}
            onClose={() => setIsDemoOpen(false)}
            isDarkMode={isDarkMode}
            onBookingSuccess={handleBookingSuccess}
            preselectedCourse={preselectedCourse}
          />

          <BookingsPanel
            isOpen={isBookingsOpen}
            onClose={() => setIsBookingsOpen(false)}
            isDarkMode={isDarkMode}
            bookings={bookings}
            onCancelBooking={handleCancelBooking}
          />

          {/* Floating Toast Notification Containers */}
          <div className="fixed top-24 right-4 z-[70] pointer-events-none flex flex-col gap-2">
            <AnimatePresence>
              {toasts.map((toast) => (
                <Notification
                  key={toast.id}
                  id={toast.id}
                  message={toast.message}
                  type={toast.type}
                  onClose={removeToast}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
