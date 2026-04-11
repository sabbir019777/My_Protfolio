import React from "react";
import { motion } from "framer-motion";
import { FaFutbol, FaPlaneDeparture, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const About = () => {
  const techStack = [
    { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML5" },
    { icon: <FaCss3Alt />, color: "text-blue-500", name: "CSS3" },
    { icon: <FaJs />, color: "text-yellow-400", name: "JavaScript" },
    { icon: <SiTailwindcss />, color: "text-cyan-400", name: "Tailwind" },
    { icon: <FaReact />, color: "text-cyan-400", name: "React" },
    { icon: <FaNodeJs />, color: "text-green-500", name: "Node.js" },
    { icon: <SiExpress />, color: "text-gray-400", name: "Express" },
    { icon: <SiMongodb />, color: "text-green-600", name: "MongoDB" },
  ];

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#02010a] text-white py-20 flex items-center relative overflow-hidden font-sans"
    >
    
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#1e1b4b_0%,transparent_50%)] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#1e1b4b_0%,transparent_50%)] opacity-30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.1]"></div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 pt-10">
        
        {/* --- Left Column: Tech Icons & Status --- */}
        <div className="hidden lg:flex lg:col-span-3 flex-col gap-8 self-start mt-20">
          <div className="flex flex-wrap gap-5 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
            <p className="w-full text-[12px] uppercase tracking-[4px] text-cyan-400 font-bold mb-2">Tech_Stack</p>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3, rotate: 10 }}
                className={`text-3xl ${tech.color} drop-shadow-[0_0_10px_currentColor]`}
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>

          <motion.div 
            animate={{ boxShadow: ["0 0 10px #06b6d433", "0 0 25px #06b6d466", "0 0 10px #06b6d433"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="p-6 bg-white/5 border border-cyan-500/30 rounded-3xl backdrop-blur-md"
          >
            <p className="text-[12px] uppercase tracking-[4px] text-cyan-400 font-bold mb-4">Dev_Status</p>
            <div className="space-y-5 text-[12px] font-mono">
              <div className="flex justify-between"><span>Efficiency</span><span className="text-cyan-400">98%</span></div>
              <div className="h-[2px] w-full bg-gray-800"><div className="h-full w-[98%] bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div></div>
              <div className="flex justify-between"><span>Uptime</span><span className="text-purple-400">99.9%</span></div>
              <div className="h-[2px] w-full bg-gray-800"><div className="h-full w-[99%] bg-purple-500 shadow-[0_0_10px_#a855f7]"></div></div>
            </div>
          </motion.div>
        </div>

        {/* --- Middle Column: Core Content --- */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-6">
            <span className="text-sm font-mono text-cyan-500/60 uppercase tracking-[0.6em] mb-4 block">Identity: Verified</span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter uppercase italic">
              About <span className="text-gray-500 not-italic">me</span>, a <br />
              <motion.span 
                animate={{ textShadow: ["0 0 8px #06b6d4", "0 0 30px #06b6d4", "0 0 8px #06b6d4"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-black"
              >
                MERN Architect
              </motion.span>
            </h2>
          </motion.div>

          {/* --- ENLARGED ULTRA GLOW IMAGE CARD --- */}
          <motion.div 
            animate={{ 
              borderColor: ["#22d3ee33", "#22d3eeff", "#22d3ee33"],
              boxShadow: ["0 0 30px #22d3ee33", "0 0 80px #22d3ee55", "0 0 30px #22d3ee33"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative w-full aspect-[4/5] md:aspect-[16/10] rounded-[3rem] overflow-hidden border-2 mb-12 group bg-black shadow-2xl"
          >
            {/* Inner Glow Overlay */}
            <div className="absolute inset-0 bg-cyan-500/5 mix-blend-screen z-10 pointer-events-none"></div>
            <img 
              src="https://i.ibb.co/qLThS8WV/abbu-3.png" 
              alt="Taherul Islam" 
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 object-top"
            />
            
            {/* Animated Corner Brackets */}
            <div className="absolute top-0 right-0 w-32 h-32 p-6 flex items-start justify-end">
               <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex">
                 <div className="w-[3px] h-12 bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>
                 <div className="w-12 h-[3px] bg-cyan-400 ml-[-3px] shadow-[0_0_20px_#22d3ee]"></div>
               </motion.div>
            </div>

            {/* Bottom ID Bar - Increased contrast */}
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-[2px]">
                <p className="text-[12px] font-mono text-cyan-400 tracking-[8px] animate-pulse font-bold">SYSTEM_SCAN: COMPLETE</p>
                <h3 className="text-3xl font-black italic tracking-widest text-white drop-shadow-[0_0_15px_#fff] mt-2">TAHERUL ISLAM</h3>
            </div>
          </motion.div>

          {/* --- ENLARGED BIO TEXT --- */}
          <div className="space-y-8 text-gray-300 text-lg md:text-2xl font-light leading-relaxed text-center px-4">
            <p className="drop-shadow-sm">
              My coding journey began with <span className="text-cyan-400 font-bold">pure curiosity</span>. Today, I am a dedicated <span className="text-white font-black italic underline decoration-cyan-500/40 tracking-wider">MERN STACK DEVELOPER</span>.
            </p>
            <p className="drop-shadow-sm">
              I primarily focus on crafting <span className="text-white font-semibold">High-Performance</span> and <span className="text-purple-400 font-bold italic">Scalable</span> digital solutions with a relentless commitment to <span className="text-cyan-400">clean architecture</span>.
            </p>
          </div>
        </div>

        {/* --- Right Column: Hobbies & Metrics --- */}
        
        <div className="lg:col-span-3 flex flex-col gap-12 lg:pt-20 self-start mt-20">
          <div className="space-y-6">
            <p className="text-[12px] text-gray-500 uppercase tracking-[5px] font-bold pl-3 border-l-4 border-purple-500">Hobbies</p>
            <div className="grid gap-4">
               <motion.div whileHover={{ scale: 1.05, x: -10 }} className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-3xl hover:border-cyan-500 transition-all cursor-default">
                 <FaFutbol className="text-cyan-400 text-2xl shadow-[0_0_10px_#22d3ee]" />
                 <span className="text-[12px] uppercase tracking-widest text-gray-200 font-bold">Building Solutions to Become a Billionaire</span>
               </motion.div>
               <motion.div whileHover={{ scale: 1.05, x: -10 }} className="flex items-center gap-5 p-5 bg-white/5 border border-white/10 rounded-3xl hover:border-purple-500 transition-all cursor-default">
                 <FaPlaneDeparture className="text-purple-400 text-2xl shadow-[0_0_10px_#a855f7]" />
                 <span className="text-[12px] uppercase tracking-widest text-gray-200 font-bold">Exploring World</span>
               </motion.div>
            </div>
          </div>

          <div className="space-y-10 pt-10 border-t border-white/10">
            <div className="flex items-baseline gap-5">
              <span className="text-6xl font-black italic text-cyan-400 leading-none drop-shadow-[0_0_20px_#22d3ee]">2+</span>
              <span className="text-[12px] text-gray-500 uppercase tracking-widest leading-tight font-bold">Years <br /> Experience</span>
            </div>
            <div className="flex items-baseline gap-5">
              <span className="text-6xl font-black italic text-purple-500 leading-none drop-shadow-[0_0_20px_#a855f7]">25+</span>
              <span className="text-[12px] text-gray-500 uppercase tracking-widest leading-tight font-bold">Major <br /> Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;