import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Trash2, Award, BookOpen, AlertCircle } from 'lucide-react';
import { DemoBooking } from '../types';

interface BookingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  bookings: DemoBooking[];
  onCancelBooking: (id: string) => void;
}

export default function BookingsPanel({ isOpen, onClose, isDarkMode, bookings, onCancelBooking }: BookingsPanelProps) {
  const bgStyle = isDarkMode 
    ? 'bg-brand-blue-950 text-white border-l border-brand-blue-800' 
    : 'bg-white text-brand-blue-950 border-l border-brand-blue-200';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-blue-950/60 backdrop-blur-sm"
          />

          {/* Slider Container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`w-screen max-w-md ${bgStyle} shadow-2xl flex flex-col`}
            >
              {/* Header */}
              <div className={`p-6 border-b flex justify-between items-center ${
                isDarkMode ? 'border-brand-blue-900 bg-brand-blue-950' : 'border-brand-blue-100 bg-brand-blue-50/50'
              }`}>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-tight">Your Schedules</h3>
                  <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-600'}`}>
                    Manage booked demo and trial sessions
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className={`p-1.5 rounded-full transition-all ${
                    isDarkMode 
                      ? 'hover:bg-brand-blue-900 text-brand-blue-400 hover:text-white' 
                      : 'hover:bg-brand-blue-50 text-brand-blue-600 hover:text-brand-blue-900'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Booking List Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {bookings.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-brand-blue-500/10 flex items-center justify-center text-brand-blue-500 mx-auto">
                      <BookOpen className="w-6 h-6 stroke-[1.5px]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">No Demo Classes Scheduled</p>
                      <p className={`text-xs mt-1 max-w-xs mx-auto leading-relaxed ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-500'}`}>
                        You haven't scheduled any trial lectures yet. Click "Book Free Demo Class" in the hero area to schedule your slot!
                      </p>
                    </div>
                  </div>
                ) : (
                  bookings.map((booking) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className={`p-4 rounded-xl border relative overflow-hidden transition-all group ${
                        isDarkMode 
                          ? 'bg-brand-blue-900/30 border-brand-blue-800/80 hover:bg-brand-blue-900/50' 
                          : 'bg-brand-blue-50/40 border-brand-blue-200/60 hover:bg-brand-blue-50/80'
                      }`}
                    >
                      {/* Left color bar indicator */}
                      <div className="absolute left-0 inset-y-0 w-1 bg-gold-500" />

                      <div className="flex justify-between items-start pl-2">
                        <div className="space-y-1">
                          <span className={`inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${
                            isDarkMode ? 'bg-gold-500/15 text-gold-400' : 'bg-gold-500/10 text-gold-700'
                          }`}>
                            {booking.classLevel}
                          </span>
                          <h4 className="font-semibold text-sm">{booking.studentName}</h4>
                          
                          <div className={`flex items-center gap-1.5 text-xs ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-600'}`}>
                            <Calendar className="w-3.5 h-3.5 text-gold-500" />
                            <span>{booking.preferredDate}</span>
                          </div>

                          <div className={`flex items-center gap-1.5 text-xs ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-600'}`}>
                            <Clock className="w-3.5 h-3.5 text-gold-500" />
                            <span>{booking.preferredSlot}</span>
                          </div>

                          <p className={`text-[11px] pt-1 leading-tight ${isDarkMode ? 'text-brand-blue-500' : 'text-brand-blue-500'}`}>
                            Subject: <span className="font-semibold capitalize">{booking.subjectInterest === 'both' ? 'Math & Science' : booking.subjectInterest}</span>
                          </p>
                        </div>

                        {/* Actions */}
                        <button
                          onClick={() => onCancelBooking(booking.id)}
                          className={`p-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer`}
                          title="Cancel Demo Class"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Info Badge */}
                      <div className="mt-3 pt-3 border-t border-dashed border-brand-blue-500/10 flex items-center justify-between text-[10px]">
                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Class Active
                        </span>
                        <span className={`text-right ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-500'}`}>
                          ID: #{booking.id.split('-')[1]?.substring(0, 5)}
                        </span>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Bottom footer bar */}
              {bookings.length > 0 && (
                <div className={`p-4 border-t flex items-start gap-2 ${
                  isDarkMode ? 'bg-brand-blue-900/20 border-brand-blue-900 text-brand-blue-400' : 'bg-brand-blue-50/20 border-brand-blue-100 text-brand-blue-600'
                } text-[11px] leading-relaxed`}>
                  <AlertCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    To reschedule or edit any details, please call us directly at <span className="font-semibold text-gold-500">+91 98765 43210</span>. Please bring a laptop/tablet or notepad for digital classrooms.
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
