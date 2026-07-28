import React from 'react';
import { LayoutTextFlip } from './ui/layout-text-flip';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div id="About" className="snap-start py-12 sm:py-16 md:py-24 min-h-[100svh] flex flex-col justify-center items-center w-full overflow-hidden relative px-3 sm:px-6">
      
      {/* Professional Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center justify-center text-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16 px-4 z-10"
      >
        <div className="inline-block bg-[#FFEB3B] text-black font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
          Discover
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white uppercase [text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,4px_4px_0_var(--cursor-color)] sm:[text-shadow:-2px_-2px_0_#000,0_-2px_0_#000,2px_-2px_0_#000,-2px_0_0_#000,2px_0_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_2px_0_#000,6px_6px_0_var(--cursor-color)]">
          About Me
        </h1>
      </motion.div>

      <div className="w-[94vw] sm:w-[88vw] lg:w-[80vw] flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-center mx-auto z-10">
        
        {/* Left: Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 flex flex-col gap-6 sm:gap-8 w-full border-3 sm:border-4 border-black bg-white dark:bg-[#111111] p-4 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] sm:dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]"
        >
          <div className="flex items-center min-h-[3.5rem] sm:min-h-[4rem] text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white uppercase border-b-2 sm:border-b-4 border-black dark:border-white pb-3 sm:pb-4">
            <LayoutTextFlip
              text="I'm "
              words={[
                'Himangshu',
                'a FullStack Dev',
                'a Web-Designer',
                'a Problem Solver'
              ]}
              duration={3000}
            />
          </div>
          <div className="text-black dark:text-white whitespace-pre-wrap leading-relaxed text-base md:text-lg font-medium font-sans">
            I’m a passionate Frontend Developer with a strong foundation in building visually appealing and responsive web interfaces. My skill set includes HTML, CSS, Tailwind CSS, and JavaScript, which I use to craft clean and intuitive user experiences. I specialize in creating responsive, mobile-friendly layouts and interactive elements that bring websites to life.{'\n\n'}
            Beyond the frontend, I also have experience with Node.js and MongoDB, enabling me to work on full-stack projects and build powerful backend functionality when needed. This blend of frontend creativity and backend logic allows me to contribute to both the look and performance of web applications.{'\n\n'}
            I'm always eager to learn new technologies, solve real-world problems, and build user-focused web experiences that not only look good but also perform exceptionally.
          </div>
        </motion.div>

        {/* Right: Connect Bento */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 w-full flex flex-col gap-6"
        >
          <h3 className="text-2xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase mb-2 bg-[#FF0055] inline-block px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] self-start transform -rotate-1">
            Connect
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/himangshu-kumar-das-1349b6320" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 w-full h-full bg-[var(--cursor-color)] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all">
              <svg className="w-12 h-12 mb-3 text-black" viewBox="0 0 16 16" fill="currentColor"><path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></svg>
              <span className="text-base font-black tracking-wide text-black uppercase">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/himangs02" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 w-full h-full bg-[#FFEB3B] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all">
              <svg className="w-12 h-12 mb-3 text-black" viewBox="0 0 73 73" fill="currentColor"><path d="M34.961 8C20.07 8 8 20.07 8 34.961C8 46.866 15.712 56.969 26.43 60.553C27.781 60.801 28.273 59.967 28.273 59.255V54.235C20.708 55.856 19.163 50.56 19.163 50.56C17.935 47.438 16.179 46.611 16.179 46.611C13.738 44.943 16.355 44.975 16.355 44.975C19.055 45.165 20.476 47.744 20.476 47.744C22.875 51.854 26.746 50.662 28.326 49.882C28.57 48.082 29.296 46.862 30.098 46.166C24.062 45.482 17.759 43.149 17.759 33.556C17.759 30.82 18.734 28.583 20.354 26.852C20.095 26.166 19.239 23.619 20.6 20.165C20.6 20.165 22.716 19.489 28.221 23.226C30.233 22.667 32.598 22.387 34.961 22.387C37.324 22.387 39.69 22.667 41.702 23.226C47.206 19.489 49.322 20.165 49.322 20.165C50.683 23.619 49.827 26.166 49.568 26.852C51.188 28.583 52.164 30.82 52.164 33.556C52.164 43.167 45.85 45.474 39.803 46.147C40.808 47.013 41.705 48.723 41.705 51.378V59.254C41.705 59.98 42.188 60.824 43.493 60.552C54.21 56.96 61.923 46.866 61.923 34.96C61.922 20.07 49.852 8 34.961 8Z"></path></svg>
              <span className="text-base font-black tracking-wide text-black uppercase">GitHub</span>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/dev.himangs07?igsh=eWxianV6OGJkbmE3" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 w-full h-full bg-[#FF0055] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all">
              <svg className="w-12 h-12 mb-3 text-white" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="2" width="28" height="28" rx="0" fill="currentColor"></rect>
                <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="black"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="black"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="black"></path>
              </svg>
              <span className="text-base font-black tracking-wide text-black uppercase">Instagram</span>
            </a>

            {/* Upwork */}
            <a href="https://www.upwork.com/freelancers/~01ad2c12ed8b1fd299?mp_source=share" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 w-full h-full bg-[#00FF66] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all">
              <svg className="w-12 h-12 mb-3 text-black" viewBox="0 0 1024 1024" fill="currentColor">
                <circle cx="512" cy="512" r="512" fill="currentColor"></circle>
                <path d="M362.26 544.5c-18.49 0-30.73-14-34.15-19.43 4.38-34.33 17.2-45.18 34.15-45.18C379 479.88 392 493 392 512.19s-13 32.31-29.74 32.31zm0-85.69c-30.15 0-47 19.25-51.87 39.06-5.48-10.1-9.54-23.6-12.69-36.16H256v50.79c0 18.42-8.57 32.05-25.32 32.05s-26.35-13.63-26.35-32.05l.19-50.79h-24v50.79c0 14.83 4.9 28.27 13.85 37.86 9.21 9.91 21.78 15.08 36.34 15.08 29 0 49.23-21.77 49.23-52.94v-34.13c3 11.23 10.24 32.81 24 51.74L291.06 602h24.42l8.5-50.92a66.79 66.79 0 0 0 8.89 6.12 55.15 55.15 0 0 0 27.19 8.2s1.48.06 2.26.06c29.9 0 53.67-22.65 53.67-53.26s-23.83-53.39-53.73-53.39zm345.29 13.75v-10.85H684v100.52h23.9v-39.38c0-24.23 2.26-41.64 35.44-39.37v-23c-15.49-1.1-27.54 2.05-35.79 12.08zm-166-10.85L524.26 532l-18.49-70.29h-30.42L456.8 532l-17.27-70.29H415.3l26.55 100.58h28.74l20-71.43 19.78 71.43h28.74l28.09-100.58zm78.22 82.85c-17 0-29.77-13.12-29.77-32.37s12.82-32.31 29.77-32.31c16.75 0 29.77 13.12 29.77 32.31s-12.98 32.37-29.73 32.37zm0-85.75c-30.09 0-53.67 22.84-53.67 53.38s23.58 53.19 53.67 53.19c29.9 0 53.67-22.65 53.67-53.19s-23.67-53.38-53.63-53.38zm157.78 54h5.54l33.38 49.47h27l-38.4-54.83c18.62-7.13 31.12-25.74 31.12-45.75h-23.81c0 21.71-17.46 29.91-34.79 29.91V422h-24v140.29h23.9z" fill="#000"></path>
              </svg>
              <span className="text-base font-black tracking-wide text-black uppercase">Upwork</span>
            </a>

          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
