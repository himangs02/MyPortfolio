import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [time, setTime] = useState('');
  const [copied, setCopied] = useState(false);
  const emailAddress = "himangshukumardas75695@gmail.com";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in IST (or user's local time)
      setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://himangshu-portfolio-3nma.onrender.com';
      await axios.post(`${backendUrl}/submit`, formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div id="Contact" className="min-h-[100svh] w-full flex flex-col justify-center snap-start bg-transparent relative overflow-hidden pt-20 pb-16 md:pt-0 md:pb-12">
      
      {/* Main Split Layout Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10 h-full">
        
        {/* Left Side: Typography & Widgets */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 order-1 lg:order-1">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="inline-block self-start bg-[#FF0055] text-black font-black uppercase tracking-widest text-[10px] sm:text-xs px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 mb-4 cursor-none">
              Get in Touch
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.85] [text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,6px_6px_0_var(--cursor-color)] mb-2">
              LET'S
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.85] [text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,6px_6px_0_var(--cursor-color)]">
              TALK.
            </h1>
            <p className="text-black dark:text-white font-bold text-sm sm:text-base md:text-lg mt-6 bg-white dark:bg-[#111111] p-3 sm:p-4 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] max-w-md">
              Have a crazy idea? Need a digital masterpiece? Just want to grab a virtual coffee? Drop me a line.
            </p>
          </motion.div>

          {/* Interactive Widgets */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2"
          >
            {/* Live Status Widget */}
            <div className="flex items-center gap-3 bg-[#00FF66] border-4 border-black px-4 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-bold text-black text-sm sm:text-base">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
              </span>
              <span>IN — {time}</span>
            </div>

            {/* Copy Email Widget */}
            <button 
              onClick={handleCopyEmail}
              className="group relative flex items-center gap-2 bg-[#00E5FF] hover:bg-white border-4 border-black px-4 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 active:shadow-none active:translate-y-1.5 active:translate-x-1.5 transition-all font-bold text-black text-sm sm:text-base cursor-none outline-none"
            >
              {copied ? (
                <>
                  <span className="text-black">COPIED!</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </>
              ) : (
                <>
                  <span className="text-black">{emailAddress}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-2 z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.01, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            viewport={{ once: true }}
            className="w-full sm:max-w-md md:max-w-lg bg-[#FFEB3B] rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] border-4 border-black p-6 md:p-8 relative overflow-hidden"
          >
            {/* Success Overlay Animation */}
            {status === 'success' && (
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="absolute inset-0 bg-[#00FF66] z-20 flex flex-col items-center justify-center p-6 border-4 border-black text-center"
              >
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4 [text-shadow:2px_2px_0px_#fff]">Boom!</h2>
                <p className="text-black font-bold text-sm md:text-base border-2 border-black bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                  Message received. I'll get back to you soon!
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-black text-white font-black uppercase px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-none"
                >
                  Send Another
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="w-full space-y-4 text-black relative z-10">
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <label className="block text-lg font-black uppercase mb-1">Name</label>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border-4 border-black px-4 py-3 outline-none focus:bg-[var(--cursor-color)] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all duration-200 text-base font-bold placeholder-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-none"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <label className="block text-lg font-black uppercase mb-1">Email</label>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border-4 border-black px-4 py-3 outline-none focus:bg-[#00FF66] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all duration-200 text-base font-bold placeholder-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-none"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <label className="block text-lg font-black uppercase mb-1">Message</label>
                <textarea 
                  name="message" 
                  placeholder="How can I help you?" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border-4 border-black px-4 py-3 outline-none focus:bg-[#FF0055] focus:text-white focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all duration-200 text-base font-bold placeholder-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none cursor-none"
                ></textarea>
              </motion.div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="group w-full bg-black text-white font-black uppercase text-lg py-3 hover:bg-white hover:text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-2 active:translate-x-2 active:shadow-none transition-all duration-200 disabled:opacity-50 flex justify-center items-center gap-2 mt-4 cursor-none outline-none"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
                  </>
                )}
              </button>

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-[#FF0055] border-4 border-black p-3 mt-3 text-center relative z-10"
                >
                    <p className="text-white font-black uppercase text-base">Failed to send message. Try again.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Marquee Banner at Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-[var(--cursor-color)] border-t-4 border-black py-2 sm:py-3 z-0 flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex font-black text-black text-lg sm:text-xl uppercase tracking-widest whitespace-nowrap"
        >
          {Array(8).fill("/// AVAILABLE FOR FREELANCE WORK /// LET'S BUILD SOMETHING AWESOME ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
