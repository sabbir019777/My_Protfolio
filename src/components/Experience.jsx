import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaRocket, FaAtom } from "react-icons/fa";

const Experience = () => {
  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "BKSP PUBLIC SCHOOL & COLLEGE",
      subject: "Science",
      details: "Currently pursuing HSC in Science group. My core focus is on Physics and Higher Math to build a strong analytical foundation for my future dream of studying CSE."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "BEPZA PUBLIC SCHOOL AND COLLEGE",
      subject: "Science",
      details: "Successfully completed SSC from Science group. This period ignited my passion for technology and logical problem-solving."
    }
  ];

  const experienceData = [
    {
      role: "MERN Stack Developer",
      company: "Self-Employed / Personal Projects",
      duration: "2026 - Present",
      details: "Mastering the MERN (MongoDB, Express, React, Node) stack. Building high-performance, scalable web applications with smooth UI/UX and robust backend logic."
    },
    {
      role: "Frontend Developer (Enthusiast)",
      company: "Open Source / Learning Phase",
      duration: "2024 - 2025",
      details: "Focused on crafting pixel-perfect, responsive web designs using HTML, CSS, JavaScript, and Tailwind CSS."
    }
  ];

  const eduRef = useRef(null);
  const expRef = useRef(null);
  const [isPausedEdu, setIsPausedEdu] = useState(false);
  const [isPausedExp, setIsPausedExp] = useState(false);

  useEffect(() => {
    const handleInfiniteScroll = (ref, isPaused) => {
      if (!ref.current || isPaused) return;
      ref.current.scrollTop += 1;
      if (ref.current.scrollTop >= ref.current.scrollHeight / 2) {
        ref.current.scrollTop = 0;
      }
    };

    const interval = setInterval(() => {
      handleInfiniteScroll(eduRef, isPausedEdu);
      handleInfiniteScroll(expRef, isPausedExp);
    }, 50);

    return () => clearInterval(interval);
  }, [isPausedEdu, isPausedExp]);

  const repeatedEdu = [...educationData, ...educationData];
  const repeatedExp = [...experienceData, ...experienceData];

  return (
    <div name="experience" className="w-full min-h-screen bg-[#02010a] text-white py-32 relative overflow-hidden font-sans">
      
     
     
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse"></div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* Updated Title Section */}
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-cyan-400 font-mono tracking-[0.6em] uppercase text-[12px] mb-4 drop-shadow-[0_0_8px_#22d3ee]">
              {`> My_Journey_Logs`}
            </p>
            {/* Title Size adjusted to 4xl and 6xl */}
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_#06b6d4]"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- Unified Education Card --- */}
          <motion.div 
            onMouseEnter={() => setIsPausedEdu(true)}
            onMouseLeave={() => setIsPausedEdu(false)}
            onTouchStart={() => setIsPausedEdu(true)}
            onTouchEnd={() => setIsPausedEdu(false)}
            className="relative bg-black/40 border border-cyan-500/20 rounded-[3rem] p-1 shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-700"
          >
            <div className="bg-[#0a0a1f]/90 rounded-[2.9rem] p-10 h-[600px] flex flex-col relative overflow-hidden">
              <div className="flex items-center gap-4 mb-10 border-b border-cyan-500/20 pb-6 relative z-10">
                <FaAtom className="text-cyan-400 text-4xl animate-spin-slow shadow-[0_0_15px_#22d3ee]" />
                <h3 className="text-3xl font-black uppercase tracking-widest italic text-white">Education_</h3>
              </div>

              <div ref={eduRef} className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-12 pb-10">
                {repeatedEdu.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-cyan-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]"></div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-400/10 px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">{item.duration}</span>
                    <h4 className="text-2xl font-black mt-4 text-white">{item.degree}</h4>
                    <p className="text-cyan-500/70 text-sm mt-1 font-bold uppercase tracking-widest">{item.institution}</p>
                    <div className="mt-5 bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm transition-all duration-500">
                      <p className="text-gray-300 text-base leading-relaxed font-light italic">"{item.details}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- Unified Experience Card --- */}
          <motion.div 
            onMouseEnter={() => setIsPausedExp(true)}
            onMouseLeave={() => setIsPausedExp(false)}
            onTouchStart={() => setIsPausedExp(true)}
            onTouchEnd={() => setIsPausedExp(false)}
            className="relative bg-black/40 border border-purple-500/20 rounded-[3rem] p-1 shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-700"
          >
            <div className="bg-[#0a0a1f]/90 rounded-[2.9rem] p-10 h-[600px] flex flex-col relative overflow-hidden">
              <div className="flex items-center gap-4 mb-10 border-b border-purple-500/20 pb-6 relative z-10">
                <FaLaptopCode className="text-purple-400 text-4xl animate-pulse shadow-[0_0_15px_#a855f7]" />
                <h3 className="text-3xl font-black uppercase tracking-widest italic text-white">Experience_</h3>
              </div>

              <div ref={expRef} className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-12 pb-10">
                {repeatedExp.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-purple-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]"></div>
                    <span className="text-[11px] font-mono text-purple-400 bg-purple-400/10 px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">{item.duration}</span>
                    <h4 className="text-2xl font-black mt-4 text-white">{item.role}</h4>
                    <p className="text-purple-500/70 text-sm mt-1 font-bold uppercase tracking-widest">{item.company}</p>
                    <div className="mt-5 bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm transition-all duration-500">
                      <p className="text-gray-300 text-base leading-relaxed font-light italic">"{item.details}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 211, 238, 0.2); border-radius: 10px; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </div>
  );
};

export default Experience;