import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Assuming backend runs on port 3000 locally
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
    <div id="Contact" className="min-h-[100svh] w-full py-10 md:py-16 flex flex-col justify-center items-center snap-start bg-transparent relative">
      
      {/* Professional Header */}
      <div className="flex flex-col items-center justify-center text-center gap-2 md:gap-3 mb-8 md:mb-10 px-4 z-10">
        <div className="inline-block bg-[#FF0055] text-black font-bold uppercase tracking-widest text-xs px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
          Get in Touch
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase [text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,6px_6px_0_#00E5FF]">
          Contact Me
        </h1>
        <p className="text-black dark:text-white font-medium max-w-2xl mt-1 text-sm md:text-base bg-white dark:bg-[#111111] p-2 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="w-[90vw] md:w-[60vw] lg:w-[40vw] mx-auto bg-[#FFEB3B] rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] border-4 border-black p-6 md:p-8 relative overflow-hidden z-10">

        <form onSubmit={handleSubmit} className="w-full space-y-4 text-black relative z-10">
          <div>
            <label className="block text-lg font-black uppercase mb-1">Name</label>
            <input 
              name="name" 
              type="text" 
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white border-4 border-black px-4 py-3 outline-none focus:bg-[#00E5FF] transition-colors text-base font-bold placeholder-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>

          <div>
            <label className="block text-lg font-black uppercase mb-1">Email</label>
            <input 
              name="email" 
              type="email" 
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white border-4 border-black px-4 py-3 outline-none focus:bg-[#00FF66] transition-colors text-base font-bold placeholder-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>

          <div>
            <label className="block text-lg font-black uppercase mb-1">Message</label>
            <textarea 
              name="message" 
              placeholder="How can I help you?" 
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-white border-4 border-black px-4 py-3 outline-none focus:bg-[#FF0055] focus:text-white transition-colors text-base font-bold placeholder-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-black text-white font-black uppercase text-lg py-3 hover:bg-white hover:text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all duration-300 disabled:opacity-50 flex justify-center items-center gap-2 mt-4"
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="bg-[#00FF66] border-4 border-black p-3 mt-3 text-center">
                <p className="text-black font-black uppercase text-base">Message sent successfully!</p>
            </div>
          )}
          {status === 'error' && (
            <div className="bg-[#FF0055] border-4 border-black p-3 mt-3 text-center">
                <p className="text-white font-black uppercase text-base">Failed to send message. Try again.</p>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}
