import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes, FaCode, FaServer, FaCogs } from "react-icons/fa";


const projectData = [
  {
    id: 1,
    title: "Velocity Car Rental",
    image: "https://static.vecteezy.com/system/resources/thumbnails/050/809/138/small/vintage-cars-and-classic-automobile-show-parade-of-retro-luxury-classic-old-cars-photo.jpeg", 
    description: "Premium car booking system with real-time availability and secure Stripe payments.",
    techStack: ["React", "Node", "MongoDB"],
    liveLink: "https://car-rentals-plantform.netlify.app",
    challenges: "Handling dual reservations & image optimization.",
    improvements: "AI-driven predictive maintenance engine."
  },
  {
    id: 2,
    title: "Digital Life Mentor",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    description: "Advanced LMS for life-skills with real-time student progress syncing.",
    techStack: ["Next.js", "Firebase", "Tailwind"],
    liveLink: "https://digital-lifes-lesson.netlify.app",
    challenges: "Real-time sync layer for student progress.",
    improvements: "Future VR mentorship integration."
  },
  {
    id: 3,
    title: "OmniSupport CRM",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
    description: "Futuristic support ecosystem with high-speed Kanban ticket management.",
    techStack: ["React", "Appwrite", "DND-Kit"],
    liveLink: "https://coustomers-support.netlify.app",
    challenges: "Optimizing DOM for 1000+ tickets.",
    improvements: "NLP-based auto-replies system."
  },
 {
    id: 4,
    title: "Tech Vibe",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", // Tech workspace image
    description: "A modern tech enthusiast portal featuring latest gadget reviews and tech news.",
    techStack: ["React", "Tailwind", "Vite"],
    liveLink: "https://tech-vibe-eight.vercel.app",
    challenges: "Implementing dynamic content filtering.",
    improvements: "Adding user authentication for comments."
  },
  {
    id: 5,
    title: "Hero.IO API Engine",
    image: "https://media.licdn.com/dms/image/v2/D5612AQGvosNy2T2XlQ/article-cover_image-shrink_720_1280/B56Zidf7zJHUAI-/0/1754989051597?e=2147483647&v=beta&t=O9KC8u8o1yxfkKeW-QtbSi5lwqzmKlQp-2y2YSIJ3_8",
    description: "Centralized microservices gateway with real-time HUD monitoring alerts.",
    techStack: ["Express", "Redis", "Docker"],
    liveLink: "https://ephemeral-crostata-6bab04.netlify.app",
    challenges: "Sub-50ms latency monitoring.",
    improvements: "Next-gen GraphQL mesh deployment."
  },
 {
    id: 6,
    title: "Employee & Asset Manager", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", 
    description: "A comprehensive full-stack platform for managing company assets and employee workflow.",
    techStack: ["React", "MongoDB", "Express.js"],
    liveLink: "https://assignment-12-gray.vercel.app",
    challenges: "Handling complex database queries and JWT auth.",
    improvements: "Real-time notification integration."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" name="projects" className="min-h-screen w-full bg-[#01010a] text-white py-28 px-6 relative overflow-hidden font-sans">
      
      {/* --- CYBERNETICA BG DESIGN --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)`, 
             backgroundSize: '45px 45px',
             transform: 'perspective(500px) rotateX(60deg)',
             transformOrigin: 'top',
           }}>
      </div>

      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-indigo-600/15 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 mb-4 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-md">
            <p className="text-cyan-400 font-mono tracking-[0.5em] uppercase text-[10px] font-bold">{`> MY_Project`}</p>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
            My Own PROJECT <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">GRID</span>
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-transparent mx-auto mt-6 rounded-full shadow-[0_0_25px_#22d3ee]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ delay: index * 0.1 }} 
              whileHover={{ y: -12, scale: 1.02 }} 
              className="group bg-[#0d0d1a]/50 border border-cyan-500/30 rounded-[2.5rem] p-6 flex flex-col min-h-[540px] transition-all duration-500 shadow-[0_0_20px_rgba(8,145,178,0.2)] hover:shadow-[0_0_50px_rgba(8,145,178,0.4)] backdrop-blur-lg hover:border-cyan-400/60"
            >
              <div className="relative h-56 rounded-[2rem] overflow-hidden mb-6 border border-white/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02020a] via-transparent to-transparent opacity-80"></div>
              </div>
              
              <h3 className="text-3xl font-black italic mb-3 uppercase tracking-tighter text-white group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                {project.title}
              </h3>
              <p className="text-gray-400 text-[14px] leading-relaxed mb-6 font-medium line-clamp-3 italic opacity-90">{`// ${project.description}`}</p>
              
              <button 
                onClick={() => setSelectedProject(project)} 
                className="mt-auto relative w-full py-4 bg-white/5 border border-cyan-500/20 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] text-cyan-400 transition-all duration-500 overflow-hidden group/btn hover:bg-cyan-500 hover:text-black shadow-[0_0_15px_rgba(6,182,212,0.1)]"
              >
                <span className="relative z-10">View Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL BOX (বক্স ছোট করা হয়েছে) --- */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-xl"></motion.div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, rotateX: 20 }} 
                animate={{ scale: 1, opacity: 1, rotateX: 0 }} 
                exit={{ scale: 0.9, opacity: 0 }} 
                className="relative bg-[#050512] w-full max-w-[380px] rounded-[2.5rem] border border-cyan-500/50 p-6 shadow-[0_0_80px_rgba(6,182,212,0.25)]"
              >
                
                <button onClick={() => setSelectedProject(null)} className="absolute top-5 right-5 p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-full transition-all text-gray-500 border border-white/10 z-20"><FaTimes size={14} /></button>

                <div className="flex items-center gap-2 mb-4">
                   <div className="p-2 bg-cyan-400/10 rounded-xl text-cyan-400 border border-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]"><FaCode size={14}/></div>
                   <h4 className="text-[9px] font-mono text-cyan-400 uppercase tracking-[3px] font-bold italic">Log_Access</h4>
                </div>

                <h3 className="text-2xl font-black italic uppercase text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] tracking-tighter">{selectedProject.title}</h3>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-cyan-300 text-[9px] font-bold rounded uppercase tracking-wider">{tech}</span>
                    ))}
                  </div>

                  <p className="text-gray-300 text-[13px] leading-relaxed font-light border-l-2 border-cyan-500/40 pl-3 py-0.5 bg-cyan-500/5 italic">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-3 pt-1">
                     <div className="p-3 bg-black/40 rounded-2xl border border-white/5 shadow-inner">
                        <div className="flex items-center gap-2 mb-1">
                          <FaCogs className="text-cyan-400 text-[10px]" />
                          <p className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">Hurdle</p>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-snug">{selectedProject.challenges}</p>
                     </div>
                     <div className="p-3 bg-black/40 rounded-2xl border border-white/5 shadow-inner">
                        <div className="flex items-center gap-2 mb-1">
                          <FaServer className="text-purple-400 text-[10px]" />
                          <p className="text-[9px] font-black text-purple-400 uppercase tracking-widest">Roadmap</p>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-snug">{selectedProject.improvements}</p>
                     </div>
                  </div>

                  <div className="pt-3">
                    <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-black text-[12px] font-black uppercase rounded-2xl hover:shadow-[0_0_30px_#06b6d4] transition-all tracking-[0.4em] active:scale-95 shadow-xl group/modalbtn relative overflow-hidden">
                      <span className="relative z-10"> Live Link</span>
                      <FaExternalLinkAlt size={11} className="relative z-10"/>
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/modalbtn:translate-x-[100%] transition-transform duration-700"></div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 20px; }
      `}</style>
    </div>
  );
};

export default Projects;