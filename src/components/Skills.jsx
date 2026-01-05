import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaTools, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite, SiFirebase } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      icon: <FaReact className="text-cyan-400" />,
      skills: [
        { name: "HTML", level: 100, icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS / Tailwind", level: 100, icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "JavaScript", level: 90, icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "React.js", level: 90, icon: <FaReact className="text-blue-400" /> },
      ],
    },
    {
      title: "Backend Infrastructure",
      icon: <FaNodeJs className="text-green-500" />,
      skills: [
        { name: "Node.js", level: 65, icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", level: 62, icon: <SiExpress className="text-gray-400" /> },
        { name: "MongoDB", level: 50, icon: <SiMongodb className="text-green-600" /> },
        { name: "Firebase", level: 76, icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      title: "Development Suite",
      icon: <FaTools className="text-purple-500" />,
      skills: [
        { name: "Git / GitHub", level: 70, icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Figma (UI/UX)", level: 53, icon: <FaFigma className="text-pink-500" /> },
        { name: "Vite / NPM", level: 65, icon: <SiVite className="text-purple-400" /> },
        { name: "Problem Solving", level: 80, icon: <FaDatabase className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <div
      name="skills"
      className="min-h-screen w-full bg-[#030014] text-white py-24 relative overflow-hidden font-sans"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#11112b_0%,transparent_70%)] opacity-70"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-mono tracking-[0.4em] uppercase text-[12px] mb-2 font-bold"
          >
           My_Skill_Sets
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight italic">
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">Matrix</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_#06b6d4]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.8, scale: 0.95 }}
              animate={{ 
               
                scale: [0.95, 1.05, 0.95],
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  "0 0 0px rgba(34,211,238,0)", 
                  "0 0 40px rgba(34,211,238,0.2)", 
                  "0 0 0px rgba(34,211,238,0)"
                ]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: idx * 2 
              }}
              whileHover={{ scale: 1.08, opacity: 1, zIndex: 50, transition: { duration: 0.3 } }}
              className="relative p-[1px] rounded-[2.5rem] group"
            >
              <div className="bg-[#0a0a1f]/95 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.4rem] h-full shadow-2xl overflow-hidden relative z-10">
                
                <div className="absolute -top-12 -right-12 text-[12rem] opacity-[0.04] group-hover:opacity-[0.1] transition-all duration-1000 pointer-events-none">
                    {category.icon}
                </div>

                <div className="flex items-center gap-6 mb-14">
                  <div className="p-5 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-4xl shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-widest italic leading-tight text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-12">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="relative group/skill">
                      <div className="flex justify-between items-end mb-4">
                        <div className="flex items-center gap-5">
                          <span className="text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                            {skill.icon}
                          </span>
                          <span className="font-black text-gray-200 uppercase tracking-[0.2em] text-[13px]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[13px] font-mono text-cyan-400 font-black">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1.5px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-blue-500 relative rounded-full"
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[shimmer_3s_infinite]"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Skills;