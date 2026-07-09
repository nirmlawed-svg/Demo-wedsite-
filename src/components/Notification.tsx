import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertTriangle, X, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface NotificationProps {
  key?: string;
  id: string;
  message: string;
  type?: ToastType;
  onClose: (id: string) => void;
  duration?: number;
}

export default function Notification({ id, message, type = 'success', onClose, duration = 4000 }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    error: <AlertTriangle className="w-5 h-5 text-rose-500" />,
    info: <Info className="w-5 h-5 text-brand-blue-500" />
  };

  const bgStyles = {
    success: 'bg-white dark:bg-brand-blue-950 border-emerald-500/20 text-brand-blue-950 dark:text-white',
    error: 'bg-white dark:bg-brand-blue-950 border-rose-500/20 text-brand-blue-950 dark:text-white',
    info: 'bg-white dark:bg-brand-blue-950 border-brand-blue-500/20 text-brand-blue-950 dark:text-white'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border shadow-xl w-80 pointer-events-auto relative overflow-hidden ${bgStyles[type]}`}
    >
      {/* Visual side accent bar */}
      <div className={`absolute left-0 inset-y-0 w-1 ${
        type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-rose-500' : 'bg-brand-blue-500'
      }`} />

      <div className="flex-shrink-0 pl-1">
        {icons[type]}
      </div>
      
      <div className="flex-1 text-xs font-semibold leading-relaxed">
        {message}
      </div>

      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 p-1 rounded-full text-brand-blue-400 dark:text-brand-blue-500 hover:text-brand-blue-950 dark:hover:text-white transition-colors cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
