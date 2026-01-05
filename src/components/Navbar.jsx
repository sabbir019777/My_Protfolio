import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const links = [
    { id: 1, link: "home", label: "HOME" },
    { id: 2, link: "projects", label: "PROJECTS" },
    { id: 3, link: "about", label: "ABOUT" },
    { id: 4, link: "philosophy", label: "PHILOSOPHY" }, 
    { id: 5, link: "experience", label: "EXPERIENCE" }, 
    { id: 6, link: "contact", label: "CONTACT" },
  ];

  return (
    <nav className={`fixed w-full z-[1000] transition-all duration-500 flex justify-center px-6 ${scrolled ? "top-4" : "top-10"}`}>
      <div className="w-full max-w-5xl relative">
        
     

     

        <div className="absolute inset-0 bg-[#0a1118]/60 backdrop-blur-md border border-white/10 rounded-[40px] shadow-2xl"></div>

        <div className="relative flex justify-between items-center h-24 px-10">
          
          {/* --- লোগো + ইমেজ সেকশন --- */}

          <Link to="home" smooth={true} duration={500} spy={true} className="flex items-center gap-4 cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/60 blur-xl rounded-full animate-pulse"></div>
              <div className="absolute -inset-1 bg-cyan-500/30 blur-md rounded-full"></div>
              <div className="relative w-12 h-12 rounded-full border-2 border-cyan-400 p-[2px] overflow-hidden bg-[#0a1118] shadow-[0_0_20px_rgba(34,211,238,0.7)]">
                <img 
                  src="https://i.ibb.co/yLkpcLL/ttt.png" 
                  alt="Avatar" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="relative flex items-center justify-center w-16 h-16">
              <div className="absolute w-14 h-9 border border-cyan-400/60 rounded-[100%] rotate-[30deg] animate-[spin_4s_linear_infinite]"></div>
              <div className="absolute w-14 h-9 border border-cyan-400/60 rounded-[100%] -rotate-[30deg] animate-[spin_6s_linear_infinite_reverse]"></div>
              <div className="relative z-10 text-cyan-400 text-3xl font-black italic tracking-tighter drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                T
              </div>
            </div>
          </Link>

          {/* ডেক্সটপ মেনু */}

          <ul className="hidden md:flex items-center gap-10">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  to={link}
                  spy={true}           
                  smooth={true}        
                  offset={-100}        
                  duration={500}       
                  activeClass="active-nav"
                  className="cursor-pointer text-xs tracking-[2px] font-medium text-gray-300 hover:text-white transition-all duration-300 relative group uppercase"
                >
                  {label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire Me বাটন */}

          <div className="hidden md:block">
            <Link to="contact" smooth={true} duration={800} offset={-100}>
              <button className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 text-xs font-bold tracking-[2px] hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] uppercase">
                Hire Me
              </button>
            </Link>
          </div>

          {/* মোবাইল টগল */}

          <div onClick={() => setNav(!nav)} className="md:hidden text-cyan-400 cursor-pointer">
            {nav ? <VscChromeClose size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </div>
        </div>

        {/* মোবাইল মেনু ড্রপডাউন */}
        {nav && (
          <div className="absolute top-28 left-0 w-full bg-[#0a1118] border border-cyan-500/20 rounded-3xl p-8 md:hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <ul className="flex flex-col gap-6 items-center">
              {links.map(({ id, link, label }) => (
                <li key={id}>
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-cyan-400 font-bold"
                    className="text-gray-300 text-lg tracking-[3px] hover:text-cyan-400 transition-colors uppercase cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <Link onClick={() => setNav(false)} to="contact" smooth={true} duration={500} offset={-80}>
                <button className="mt-4 px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 text-xs font-bold tracking-[2px] uppercase">
                  HIRE ME
                </button>
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* Active Highlighting Style */}
      
      <style>{`
        .active-nav {
          color: #22d3ee !important;
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
        }
        .active-nav::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #22d3ee;
          box-shadow: 0 0 10px #22d3ee;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;