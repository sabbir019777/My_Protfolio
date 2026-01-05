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
    liveLink: "https://amazing-bavarois-33f61c.netlify.app",
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
    title: "GreenNest Eco-Care",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop",
    description: "Cyber-botanist portal with seasonal data and interactive HUD interface.",
    techStack: ["Vite", "Three.js", "GSAP"],
    liveLink: "https://green-plantcare.netlify.app",
    challenges: "SVG path-drawing synchronization.",
    improvements: "IoT moisture sensor integration."
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
    title: "Sustainable Living AR",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    description: "AR architecture guide for sustainable home design with carbon metrics.",
    techStack: ["React", "WebXR", "Three.js"],
    liveLink: "https://green-nest-projects.netlify.app/",
    challenges: "60fps AR rendering on mobile browsers.",
    improvements: "Multi-player design collaboration."
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-900/10 blur-[200px] rounded-full pointer-events-none"></div>

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

        {/* --- MODAL BOX --- */}
        
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[3000] flex items-center justify-center p-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-xl"></motion.div>
              
              <motion.div initial={{ scale: 0.9, opacity: 0, rotateX: 20 }} animate={{ scale: 1, opacity: 1, rotateX: 0 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#050512] w-full max-w-[440px] rounded-[3rem] border border-cyan-500/50 p-8 shadow-[0_0_100px_rgba(6,182,212,0.3)]">
                
                <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-2.5 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-full transition-all text-gray-500 border border-white/10 z-20"><FaTimes size={16} /></button>

                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-cyan-400/10 rounded-2xl text-cyan-400 border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.3)]"><FaCode size={18}/></div>
                   <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-[4px] font-bold italic">Log_Access</h4>
                </div>

                <h3 className="text-3xl font-black italic uppercase text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] tracking-tighter">{selectedProject.title}</h3>
                
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-cyan-300 text-[10px] font-bold rounded-md uppercase tracking-wider">{tech}</span>
                    ))}
                  </div>

                  <p className="text-gray-300 text-[14px] leading-relaxed font-light border-l-2 border-cyan-500/40 pl-4 py-1 bg-cyan-500/5 italic">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-4 pt-2">
                     <div className="p-4 bg-black/40 rounded-2xl border border-white/5 shadow-inner">
                        <div className="flex items-center gap-2 mb-1">
                          <FaCogs className="text-cyan-400 text-xs" />
                          <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Hurdle</p>
                        </div>
                        <p className="text-[12px] text-gray-400 leading-snug">{selectedProject.challenges}</p>
                     </div>
                     <div className="p-4 bg-black/40 rounded-2xl border border-white/5 shadow-inner">
                        <div className="flex items-center gap-2 mb-1">
                          <FaServer className="text-purple-400 text-xs" />
                          <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Roadmap</p>
                        </div>
                        <p className="text-[12px] text-gray-400 leading-snug">{selectedProject.improvements}</p>
                     </div>
                  </div>

                  <div className="pt-4">
                    <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-3 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-black text-[15px] font-black uppercase rounded-2xl hover:shadow-[0_0_40px_#06b6d4] transition-all tracking-[0.5em] active:scale-95 shadow-xl group/modalbtn relative overflow-hidden">
                      <span className="relative z-10"> Live Link</span>
                      <FaExternalLinkAlt size={13} className="relative z-10"/>
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