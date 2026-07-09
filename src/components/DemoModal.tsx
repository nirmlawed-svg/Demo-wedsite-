import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, BookOpen, Check, Award, Shield, User } from 'lucide-react';
import { DemoBooking } from '../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onBookingSuccess: (booking: DemoBooking) => void;
  preselectedCourse?: string;
}

export default function DemoModal({ isOpen, onClose, isDarkMode, onBookingSuccess, preselectedCourse }: DemoModalProps) {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [classLevel, setClassLevel] = useState(preselectedCourse || 'Class 9–10 Math & Science');
  const [preferredSlot, setPreferredSlot] = useState('4:30 PM – 6:00 PM');
  const [preferredDate, setPreferredDate] = useState('');
  const [subjectInterest, setSubjectInterest] = useState<'math' | 'science' | 'both'>('both');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !parentName || !parentEmail || !parentPhone || !preferredDate) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database insertion and loading state
    setTimeout(() => {
      const newBooking: DemoBooking = {
        id: `book-${Date.now()}`,
        studentName,
        parentName,
        parentEmail,
        parentPhone,
        classLevel,
        preferredSlot,
        preferredDate,
        subjectInterest,
        createdAt: new Date().toISOString(),
        status: 'confirmed'
      };

      // Store in localStorage
      const existing = localStorage.getItem('nimai_demo_bookings');
      const bookings = existing ? JSON.parse(existing) : [];
      bookings.push(newBooking);
      localStorage.setItem('nimai_demo_bookings', JSON.stringify(bookings));

      onBookingSuccess(newBooking);
      setIsSubmitting(false);
      setStep(3); // Go to success screen
    }, 1200);
  };

  const resetForm = () => {
    setStudentName('');
    setParentName('');
    setParentEmail('');
    setParentPhone('');
    setPreferredDate('');
    setStep(1);
  };

  if (!isOpen) return null;

  const bgStyle = isDarkMode 
    ? 'bg-brand-blue-950/95 text-white border-brand-blue-800' 
    : 'bg-white text-brand-blue-950 border-brand-blue-100';

  const inputStyle = isDarkMode
    ? 'w-full px-4 py-2.5 rounded-lg bg-brand-blue-900/50 border border-brand-blue-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white outline-none transition-all'
    : 'w-full px-4 py-2.5 rounded-lg bg-brand-blue-50/50 border border-brand-blue-200 focus:border-brand-blue-600 focus:ring-1 focus:ring-brand-blue-600 text-brand-blue-950 outline-none transition-all';

  const labelStyle = `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => { resetForm(); onClose(); }}
          className="absolute inset-0 bg-brand-blue-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          id="demo-modal"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className={`relative w-full max-w-xl rounded-2xl p-6 md:p-8 shadow-2xl border ${bgStyle} z-10 overflow-hidden`}
        >
          {/* Accent Gold Corner Ribbons */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-500/20 to-transparent pointer-events-none rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-blue-500/20 to-transparent pointer-events-none rounded-full blur-2xl" />

          {/* Close Button */}
          <button
            onClick={() => { resetForm(); onClose(); }}
            className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors ${
              isDarkMode 
                ? 'hover:bg-brand-blue-900 text-brand-blue-400 hover:text-white' 
                : 'hover:bg-brand-blue-50 text-brand-blue-600 hover:text-brand-blue-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          {step < 3 && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-500 border border-gold-500/20 mb-2">
                <Award className="w-3.5 h-3.5" /> Free Academic Mentorship
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
                Book a Free <span className="text-metallic-gold">Demo Class</span>
              </h3>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-600'}`}>
                Experience India's most analytical, high-care Math & Science program.
              </p>

              {/* Steps Indicator */}
              <div className="flex items-center gap-2 mt-4">
                <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-8 bg-gold-500' : 'w-4 bg-brand-blue-500/40'}`} />
                <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-8 bg-gold-500' : 'w-4 bg-brand-blue-500/40'}`} />
                <div className="h-1.5 w-4 rounded-full bg-brand-blue-500/40" />
              </div>
            </div>
          )}

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div>
                <label className={labelStyle}>Student Name *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-brand-blue-400" />
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Enter student's full name"
                    className={`${inputStyle} pl-10`}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Class / Program Interest *</label>
                <select
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                  className={inputStyle}
                >
                  <option value="Class 6–8 Foundation">Class 6–8 Foundation</option>
                  <option value="Class 9–10 Math & Science">Class 9–10 Math & Science</option>
                  <option value="Class 11–12 PCM">Class 11–12 PCM</option>
                  <option value="JEE Foundation">JEE Foundation (Engineering)</option>
                  <option value="NEET Foundation">NEET Foundation (Medical)</option>
                  <option value="Olympiad Preparation">Olympiad Preparation</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>Subject Interest</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['both', 'math', 'science'] as const).map((subj) => (
                    <button
                      key={subj}
                      type="button"
                      onClick={() => setSubjectInterest(subj)}
                      className={`py-2 px-3 rounded-lg border text-sm font-medium capitalize transition-all ${
                        subjectInterest === subj
                          ? 'border-gold-500 bg-gold-500/15 text-gold-500'
                          : isDarkMode
                            ? 'border-brand-blue-800 bg-brand-blue-900/30 text-brand-blue-300 hover:bg-brand-blue-900/60'
                            : 'border-brand-blue-200 bg-white text-brand-blue-700 hover:bg-brand-blue-50'
                      }`}
                    >
                      {subj === 'both' ? 'Math & Science' : subj}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (studentName.trim() === '') {
                      alert('Please enter the student\'s name.');
                      return;
                    }
                    setStep(2);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 text-white rounded-lg hover:from-brand-blue-700 hover:to-brand-blue-900 font-semibold text-sm transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  Next: Slot Details →
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelStyle}>Parent Full Name *</label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Parent's Name"
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className={labelStyle}>Parent Phone *</label>
                  <input
                    type="tel"
                    required
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="Primary contact number"
                    className={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Parent Email *</label>
                <input
                  type="email"
                  required
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className={inputStyle}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelStyle}>Preferred Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4.5 h-4.5 text-brand-blue-400 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`${inputStyle} pl-10`}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelStyle}>Time Slot *</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-4.5 h-4.5 text-brand-blue-400 pointer-events-none" />
                    <select
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className={`${inputStyle} pl-10`}
                    >
                      <option value="4:30 PM – 6:00 PM">4:30 PM – 6:00 PM</option>
                      <option value="6:15 PM – 7:45 PM">6:15 PM – 7:45 PM</option>
                      <option value="10:00 AM – 11:30 AM (Sat/Sun)">10:00 AM – 11:30 AM (Weekend)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`text-sm font-semibold hover:underline ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-600'}`}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-brand-blue-950 rounded-lg font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-blue-950 border-t-transparent rounded-full animate-spin" />
                      Scheduling Demo...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 stroke-[3px]" />
                      Schedule Free Demo
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 p-3 rounded-lg flex items-start gap-2.5 bg-brand-blue-500/10 border border-brand-blue-500/20 text-[11px] leading-relaxed text-brand-blue-400">
                <Shield className="w-4 h-4 flex-shrink-0 text-gold-500 mt-0.5" />
                <span>By booking, you register for a free orientation class. Your data is protected by premium end-to-end industry security protocols. No spam.</span>
              </div>
            </motion.form>
          )}

          {step === 3 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6 space-y-4"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center text-gold-500 shadow-lg">
                <Check className="w-8 h-8 stroke-[3.5px] animate-pulse" />
              </div>

              <h3 className="font-serif text-2xl font-bold">Demo Scheduled Successfully!</h3>
              
              <div className={`p-4 rounded-xl text-left text-sm max-w-sm mx-auto border ${
                isDarkMode ? 'bg-brand-blue-900/40 border-brand-blue-800' : 'bg-brand-blue-50/50 border-brand-blue-100'
              }`}>
                <div className="flex justify-between border-b pb-1.5 mb-1.5 border-dashed border-brand-blue-500/20">
                  <span className="font-semibold">Student:</span>
                  <span>{studentName}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 mb-1.5 border-dashed border-brand-blue-500/20">
                  <span className="font-semibold">Class Level:</span>
                  <span>{classLevel}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 mb-1.5 border-dashed border-brand-blue-500/20">
                  <span className="font-semibold">Date:</span>
                  <span>{preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Time:</span>
                  <span>{preferredSlot}</span>
                </div>
              </div>

              <p className={`text-sm max-w-md mx-auto ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-600'}`}>
                A validation SMS and calendar invite has been sent to <span className="font-semibold text-gold-500">{parentPhone}</span> and <span className="font-semibold text-gold-500">{parentEmail}</span>. Our student coordinator will contact you shortly to share the digital preparation worksheets.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => { resetForm(); onClose(); }}
                  className="px-6 py-2.5 bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 text-white rounded-lg hover:from-brand-blue-700 hover:to-brand-blue-900 font-semibold text-sm transition-all shadow-md cursor-pointer"
                >
                  Awesome, Close
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
