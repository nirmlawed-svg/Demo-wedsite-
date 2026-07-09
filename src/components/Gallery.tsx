import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data';
import { GalleryImage } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Filter } from 'lucide-react';

interface GalleryProps {
  isDarkMode: boolean;
}

export default function Gallery({ isDarkMode }: GalleryProps) {
  const [filter, setFilter] = useState<'all' | 'classroom' | 'event' | 'exhibition' | 'awards'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (filter === 'all') return true;
    return img.category === filter;
  });

  const openLightbox = (imgId: string) => {
    const idx = GALLERY_IMAGES.findIndex((img) => img.id === imgId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const nextLightboxImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevLightboxImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section 
      id="gallery" 
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDarkMode ? 'bg-brand-blue-950 text-white' : 'bg-white text-brand-blue-950'
      }`}
    >
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
            Academic Life
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
            Our Campus & <span className="text-metallic-gold">Excellence Gallery</span>
          </h3>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
            Take a visual tour inside our smart classroom, fully stocked science exhibits, interactive engineering/medical seminars, and high-honor convocation events.
          </p>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'classroom', label: 'Classrooms' },
              { id: 'exhibition', label: 'Science Exhibits' },
              { id: 'event', label: 'Seminars' },
              { id: 'awards', label: 'Awards' },
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

        {/* Masonry / Grid of Images */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(img.id)}
                className={`group rounded-2xl overflow-hidden border cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-300 ${
                  isDarkMode ? 'border-brand-blue-900 bg-brand-blue-900/10' : 'border-brand-blue-100 bg-white'
                }`}
              >
                {/* Photo wrapper */}
                <div className="relative aspect-video overflow-hidden bg-brand-blue-950">
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark transparent shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/80 via-brand-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gold-500/80 text-brand-blue-950 flex items-center justify-center border border-white">
                      <Maximize2 className="w-5 h-5 stroke-[2.5px]" />
                    </div>
                  </div>

                  {/* Micro Category tag floating */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-white bg-brand-blue-950/70 backdrop-blur-sm border border-white/10">
                    {img.category}
                  </span>
                </div>

                {/* Caption Footer */}
                <div className="p-4">
                  <p className={`text-xs leading-relaxed font-semibold ${
                    isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-800'
                  }`}>
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Implementation with Next/Prev and animations */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 bg-brand-blue-950/95 backdrop-blur-md"
              />

              {/* Lightbox body */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-4xl w-full z-10 flex flex-col items-center"
              >
                {/* Image panel */}
                <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-brand-blue-950 select-none">
                  <img 
                    src={GALLERY_IMAGES[lightboxIndex].src} 
                    alt={GALLERY_IMAGES[lightboxIndex].caption} 
                    className="max-h-[70vh] object-contain mx-auto"
                    referrerPolicy="no-referrer"
                  />

                  {/* Left arrow */}
                  <button
                    onClick={prevLightboxImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-brand-blue-950/70 text-gold-500 border border-white/10 hover:bg-gold-500 hover:text-brand-blue-950 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6 stroke-[2.5px]" />
                  </button>

                  {/* Right arrow */}
                  <button
                    onClick={nextLightboxImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-brand-blue-950/70 text-gold-500 border border-white/10 hover:bg-gold-500 hover:text-brand-blue-950 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6 stroke-[2.5px]" />
                  </button>
                </div>

                {/* Close Button floating */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-[-50px] right-0 md:right-[-20px] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Subheading Caption description */}
                <div className="text-center pt-4 max-w-xl">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/20 mb-2">
                    {GALLERY_IMAGES[lightboxIndex].category} Photo
                  </span>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    {GALLERY_IMAGES[lightboxIndex].caption}
                  </p>
                  <p className="text-[10px] text-brand-blue-400 mt-1">
                    Image {lightboxIndex + 1} of {GALLERY_IMAGES.length}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
