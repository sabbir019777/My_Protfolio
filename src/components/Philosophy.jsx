import React from "react";
import { motion } from "framer-motion";

const Philosophy = () => {
  const principles = [
    { 
  
      title: "Scalable Architecture", 
      desc: "I write code that isn't just functional, but maintainable for the next decade. Clean architecture is my core investment.",
      icon: "🧩",
      glowColor: "rgba(6, 182, 212, 0.5)"
    },
    { 
    
      title: "Business Impact Logic", 
      desc: "Beyond syntax, I focus on building digital assets that solve real-world problems and drive massive global impact.",
      icon: "🚀",
      glowColor: "rgba(168, 85, 247, 0.5)"
    },
    { 
       
      title: "Performance First", 
      desc: "Speed is a feature. I prioritize lightweight architecture to ensure lightning-fast execution and zero-latency UX.",
      icon: "⚡",
      glowColor: "rgba(245, 158, 11, 0.5)"
    },
    { 
   
      title: "Entrepreneurial Mindset", 
      desc: "I don't just build websites; I architect ecosystems designed to scale from zero to a billion-dollar legacy.",
      icon: "💡",
      glowColor: "rgba(59, 130, 246, 0.5)"
    },
    { 
      
      title: "Security & Encryption", 
      desc: "Security is baked in from the first line of code. I ensure every API and input is shielded with advanced protocols.",
      icon: "🔒",
      glowColor: "rgba(244, 63, 94, 0.5)"
    },
    { 
     
      title: "Continuous Evolution", 
      desc: "In tech, stagnation is death. I commit to learning emerging stacks every day to stay ahead of the global market.",
      icon: "🌐",
      glowColor: "rgba(20, 184, 166, 0.5)"
    }
  ];

  return (
    <div 
      name="philosophy" 
      className="w-full min-h-screen bg-[#010103] py-28 px-6 relative flex flex-col items-center overflow-hidden font-sans"
    >
      
      {/* --- BACKGROUND IMAGE  */}
      

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1, y: -50 }}
          whileInView={{ opacity: 1, scale: 1, y: -180 }} 
          transition={{ duration: 1.5 }}
          className="w-full max-w-[1500px] h-[1000px]" 
          style={{
            backgroundImage: `url('https://i.ibb.co/h1rbmBwS/abbu-2.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center 10%', 
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(1.1) contrast(1.1)', 
          }}
        />
        <div className="absolute inset-0 bg-black/20 z-0"></div>
      </div>

      <div className="w-full max-w-[1400px] relative z-10"> 
        
        {/* Section Header */}

        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-mono tracking-[0.6em] uppercase text-[12px] mb-4 font-bold"
          >
            {`> My_Developing_Mindset`}
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
            Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Philosophy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-8 rounded-full shadow-[0_0_20px_#06b6d4]"></div>
        </div>

        {/* --- CRYSTAL CLEAR CARDS GRID --- */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-32"> 
          {principles.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div 
                className="relative bg-black/30 border border-white/20 p-10 rounded-[2.5rem] h-full transition-all duration-500 group-hover:bg-black/50 group-hover:border-cyan-500/60 shadow-2xl overflow-hidden backdrop-blur-none"
              >
                <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                     style={{ backgroundColor: p.glowColor }}></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <span className="text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-transform group-hover:scale-125 duration-500">
                    {p.icon}
                  </span>
                  <span className="text-6xl font-black text-white/5 group-hover:text-cyan-500/20 transition-colors">
                    0{p.id}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tight group-hover:text-cyan-400 transition-colors relative z-10 drop-shadow-[0_3px_6px_rgba(0,0,0,1)]">
                  {p.title}
                </h3>
                
                <p className="text-white text-base leading-relaxed font-black group-hover:text-cyan-50 transition-colors relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                  {p.desc}
                </p>

                <div className="absolute bottom-6 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-cyan-400 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Impact Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 bg-black/40 border border-white/20 rounded-[3rem] text-center relative overflow-hidden group shadow-2xl backdrop-blur-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-30"></div>
          <p className="text-2xl md:text-5xl font-light italic text-white leading-snug relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
            "My goal is not just to build websites, but to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">architect digital assets</span> that create a billion-dollar legacy."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;