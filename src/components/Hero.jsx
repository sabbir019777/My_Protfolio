import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const heroImage = "https://i.ibb.co/ZpvGMdRQ/abbu.png";
  
  const [text, setText] = useState("");
  const fullText = "Taherul islam";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 2000);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[150vh] w-full bg-[#02010a] text-white flex items-center justify-center relative overflow-hidden font-sans py-20">
      
     

     

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-10 w-full z-10 py-40">
        
        {/* --- বাম পাশের কন্টেন্ট --- */}

        <div className="flex flex-col w-full lg:w-1/2 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 px-6 py-2 bg-cyan-950/20 border border-cyan-500/20 rounded-full w-fit backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></span>
            <span className="text-cyan-400 font-mono text-sm tracking-[0.5em] uppercase">MERN Stack Developer</span>
          </motion.div>

          
          <div className="relative h-[180px] md:h-[240px] flex flex-col justify-end">
            <h1 className="text-6xl md:text-[85px] font-black leading-tight tracking-tighter">
             Hi I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                {text}
              </span>
            </h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-3xl max-w-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500 opacity-60 shadow-[0_0_15px_#06b6d4]"></div>
            <p className="text-gray-300 text-xl leading-relaxed font-light">
              "Transforming complex requirements into <span className="text-cyan-400 font-medium italic underline decoration-cyan-400/30">seamless digital experiences</span>. Specializing in the MERN stack to build scalable, high-performance applications."
            </p>
          </motion.div>

         
        </div>

        {/* --- ডান পাশের ইমেজ স্ট্যাক --- */}

        <div className="w-full lg:w-1/2 flex justify-center mt-32 lg:mt-0 relative">
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-20 left-0 z-50 bg-cyan-500/10 border border-cyan-500/40 px-6 py-2 rounded-lg backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Taherul Islam </p>
          </motion.div>

          <div className="relative w-[340px] h-[480px] md:w-[480px] md:h-[620px]">
            
            {/* Breathing Glow Layers */}
            <motion.div 
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-[4rem] translate-x-12 translate-y-12 -z-30 border border-purple-500/40"
            >
               <img src={heroImage} className="w-full h-full object-cover grayscale opacity-50 shadow-[0_0_40px_rgba(168,85,247,0.3)]" alt="stack-1" />
            </motion.div>

            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 rounded-[4rem] translate-x-6 translate-y-6 -z-20 border border-cyan-500/40"
            >
               <img src={heroImage} className="w-full h-full object-cover opacity-60 shadow-[0_0_40px_rgba(34,211,238,0.3)]" alt="stack-2" />
            </motion.div>

            {/* Main Glowing Card */}
            <motion.div 
              animate={{ scale: [1, 1.04, 1] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden border-2 border-cyan-500/40 group bg-black shadow-[0_0_80px_rgba(34,211,238,0.4)]"
            >
              <img 
                src={heroImage} 
                alt="Tamim" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
           
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-sm border-t border-cyan-500/20">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
                    <p className="text-[10px] font-mono text-cyan-400 tracking-[4px] uppercase opacity-70">Authenticated_User</p>
                  </div>
             
                  <h3 className="text-4xl font-black tracking-tight italic bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.5)]">
                  Taherul Islam
                  </h3>
                </div>
              </div>

              {/* HUD Circle Overlay */}

              <div className="absolute inset-0 border-[15px] border-cyan-400/10 rounded-full scale-[0.85] shadow-[inset_0_0_50px_rgba(34,211,238,0.1)] pointer-events-none"></div>
            </motion.div>

            {/* Corner Brackets */}
            
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -left-10 w-32 h-32 border-t-4 border-l-4 border-cyan-400 rounded-tl-[3rem] shadow-[-10px_-10px_30px_rgba(34,211,238,0.5)] z-20"
            ></motion.div>
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-10 -right-10 w-32 h-32 border-b-4 border-r-4 border-purple-500 rounded-br-[3rem] shadow-[10px_10px_30px_rgba(168,85,247,0.5)] z-20"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;