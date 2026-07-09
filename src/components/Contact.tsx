import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, HelpCircle, Share2, Facebook, Instagram, Youtube, Linkedin, GraduationCap } from 'lucide-react';
import { ContactMessage } from '../types';

interface ContactProps {
  isDarkMode: boolean;
  onMessageSuccess: (msg: ContactMessage) => void;
}

export default function Contact({ isDarkMode, onMessageSuccess }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('Class 9–10');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSending(true);

    // Simulate sending message to the institute database
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: `msg-${Date.now()}`,
        name,
        email,
        phone,
        message,
        createdAt: new Date().toISOString()
      };

      // Store in localStorage
      const existing = localStorage.getItem('nimai_messages');
      const messages = existing ? JSON.parse(existing) : [];
      messages.push(newMessage);
      localStorage.setItem('nimai_messages', JSON.stringify(messages));

      onMessageSuccess(newMessage);
      setIsSending(false);

      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  const formBg = isDarkMode 
    ? 'bg-brand-blue-900/10 border-brand-blue-900' 
    : 'bg-white border-brand-blue-100 shadow-sm';

  const inputStyle = isDarkMode
    ? 'w-full px-4 py-2.5 rounded-lg bg-brand-blue-900/50 border border-brand-blue-800 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white outline-none text-xs transition-all'
    : 'w-full px-4 py-2.5 rounded-lg bg-brand-blue-50/50 border border-brand-blue-200 focus:border-brand-blue-600 focus:ring-1 focus:ring-brand-blue-600 text-brand-blue-950 outline-none text-xs transition-all';

  const labelStyle = `block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-700'}`;

  return (
    <section 
      id="contact" 
      className={`py-20 md:py-28 relative overflow-hidden ${
        isDarkMode ? 'bg-brand-blue-950 text-white' : 'bg-white text-brand-blue-950'
      }`}
    >
      {/* Background visual detail */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
            Get In Touch
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
            Connect With Our <span className="text-metallic-gold">Admissions Team</span>
          </h3>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
            Have custom inquiries about registrations, diagnostics, batch timings, or trial seats? Reach out directly. Our counseling desk is active 24/7.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates & Embedded Google Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              
              {/* Coordinate 1: Address */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-500 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Our Corporate Campus</h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? 'text-brand-blue-400' : 'text-brand-blue-600'}`}>
                    Nimai Classes, Plot No. 42, Academic Arcade, GK-2 Metro Hub, South Delhi, Delhi - 110048, India
                  </p>
                </div>
              </div>

              {/* Coordinate 2: Phone */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-500 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Admissions Hotline</h4>
                  <p className={`text-xs mt-1 font-semibold ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                    +91 98765 43210 <span className="text-[10px] font-normal text-gold-500 block sm:inline">(Corporate Helpdesk)</span>
                  </p>
                  <p className={`text-xs font-semibold ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                    +91 98765 43211 <span className="text-[10px] font-normal text-gold-500 block sm:inline">(Parent Liaison desk)</span>
                  </p>
                </div>
              </div>

              {/* Coordinate 3: Email */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-500 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Email Coordinates</h4>
                  <p className={`text-xs mt-1 font-semibold ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-700'}`}>
                    admissions@nimai.edu
                  </p>
                  <p className={`text-xs text-brand-blue-400 dark:text-brand-blue-500`}>
                    Response time: under 1 hour
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map with Golden Border Frame */}
            <div className="rounded-2xl overflow-hidden border-2 border-gold-500/25 shadow-xl bg-brand-blue-900/10 h-64 md:h-72 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.528448986873!2d77.2435424!3d28.5342738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d28362d29b%3A0x6b77af6be7781b49!2sGreater%20Kailash%20II%2C%20Greater%20Kailash%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                title="Nimai classes location Greater Kailash 2 New Delhi"
              />
            </div>

            {/* Social Network row */}
            <div className="space-y-2.5">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold-500">
                Follow Academic Insights
              </h5>
              <div className="flex items-center gap-3">
                {[
                  { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
                  { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
                  { icon: <Youtube className="w-4 h-4" />, href: '#', label: 'Youtube' },
                  { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'Linkedin' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2.5 rounded-xl border transition-all hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-brand-blue-900/40 border-brand-blue-800 text-brand-blue-300 hover:text-white hover:bg-brand-blue-900' 
                        : 'bg-brand-blue-50/50 border-brand-blue-200 text-brand-blue-800 hover:text-brand-blue-950 hover:bg-brand-blue-100'
                    }`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Interactive Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 md:p-8 rounded-2xl border ${formBg}`}
            >
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-gold-500/10 text-gold-500 border border-gold-500/20 mb-2">
                  <GraduationCap className="w-3.5 h-3.5" /> Fast Response Channel
                </span>
                <h4 className="font-serif text-xl md:text-2xl font-bold tracking-tight">
                  Admissions <span className="text-metallic-gold">Enquiry Form</span>
                </h4>
                <p className={`text-xs mt-1 ${isDarkMode ? 'text-brand-blue-300' : 'text-brand-blue-600'}`}>
                  Fill out this descriptive form and our principal mentors will reach out under 2 hours.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className={labelStyle}>Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alok Sharma"
                      className={inputStyle}
                    />
                  </div>
                  {/* Phone field */}
                  <div>
                    <label className={labelStyle}>Contact Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 99999 88888"
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <label className={labelStyle}>Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alok@domain.com"
                    className={inputStyle}
                  />
                </div>

                {/* Grade Interest selector */}
                <div>
                  <label className={labelStyle}>Grade / Program Segment</label>
                  <select 
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className={inputStyle}
                  >
                    <option value="Class 6–8 Foundation">Class 6–8 (Foundation Level)</option>
                    <option value="Class 9–10 Math & Science">Class 9–10 (Math & Science Boards)</option>
                    <option value="Class 11–12 PCM Boards">Class 11–12 (PCM Boards)</option>
                    <option value="JEE Preparation Track">JEE (Advanced Engineering Entrance)</option>
                    <option value="NEET Preparation Track">NEET (Medical Entrance Specialization)</option>
                    <option value="Olympiad Prep Special">Olympiads (IMO, RMO, NSO, NTSE)</option>
                  </select>
                </div>

                {/* Message text area */}
                <div>
                  <label className={labelStyle}>Detailed Query Description *</label>
                  <textarea 
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your child's current school performance, goals, and specific areas where they require assistance..."
                    className={`${inputStyle} resize-none`}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 hover:from-brand-blue-700 hover:to-brand-blue-900 text-white rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Coordinates...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Admissions Query
                      </>
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
