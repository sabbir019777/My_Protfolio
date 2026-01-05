import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(() => {
        alert("Message Sent! ✅");
        e.target.reset();
    }, (error) => {
        alert("Failed! ❌");
        console.log(error.text);
    });
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-gray-950 text-white py-20 relative overflow-hidden">

      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono tracking-[0.3em] text-xs mb-2">{`> ESTABLISHING_CONNECTION...`}</p>
          <h2 className="text-5xl font-black uppercase tracking-tighter">Contact <span className="text-cyan-400">Me</span></h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-4xl font-bold mb-4 leading-tight">
                Let's build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 underline decoration-cyan-500/20">
                  Extraordinary
                </span>
              </h3>
              <p className="text-gray-400 font-mono text-sm tracking-wide">// Available for freelance and collaborations</p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: <FaEnvelope />, title: "Email Address", value: "sa9079600@gmail.com", color: "cyan", delay: 0.1 },
                { icon: <FaPhoneAlt />, title: "Phone Number", value: "01977795336", color: "purple", delay: 0.2 },
                { icon: <FaWhatsapp />, title: "WhatsApp (Optional)", value: "01977795336", color: "green", delay: 0.3 }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-6 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
                >
                  <div className={`bg-cyan-500/20 p-4 rounded-xl text-2xl text-cyan-400 group-hover:scale-110 transition-all`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest mb-1">{item.title}</p>
                    <p className="text-lg font-semibold tracking-tight">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Message Box (Minimum Blur Version) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(3, 0, 20, 0.2), rgba(3, 0, 20, 0.3)), url('https://i.ibb.co/jPGcGBYF/nnn.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-cyan-500"></div>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4 relative z-10">
              <p className="font-mono text-cyan-400 text-sm">{`// Incoming_Transmission`}</p>
              
              
              <input 
                type="text" 
                name="user_name" 
                placeholder="Full Name" 
                required 
                className="w-full p-4 bg-black/10 border border-white/20 rounded-xl outline-none focus:border-cyan-500 text-white placeholder:text-gray-300 transition-all" 
              />
              
              <input 
                type="email" 
                name="user_email" 
                placeholder="Email Address" 
                required 
                className="w-full p-4 bg-black/10 border border-white/20 rounded-xl outline-none focus:border-cyan-500 text-white placeholder:text-gray-300 transition-all" 
              />
              
              <textarea 
                name="message" 
                placeholder="How can I help you?" 
                required 
                className="w-full h-32 p-4 bg-black/10 border border-white/20 rounded-xl outline-none focus:border-cyan-500 text-white placeholder:text-gray-300 transition-all" 
              />

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-black font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <footer className="mt-32 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-6 group">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-dashed border-cyan-500/40 rounded-full animate-[spin_8s_linear_infinite]"></div>
                <div className="absolute inset-1.5 border border-cyan-400/20 rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(6,182,212,0.6)] z-10">T</div>
                <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="text-left">
                <h4 className="font-mono text-xl tracking-[0.3em] text-white font-black uppercase">TAMIM_IQBAL</h4>
                <p className="text-sm text-cyan-400 font-mono tracking-widest uppercase mt-1">Professional Full Stack Developer</p>
              </div>
            </motion.div>
            <div className="text-center order-3 md:order-2">
              <p className="text-gray-400 text-sm font-mono tracking-[0.2em] uppercase mb-3">© 2026 Developer Edition</p>
              <div className="flex items-center justify-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                <span className="text-white text-xs font-mono tracking-widest uppercase">System Status: Active & Ready</span>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="text-center md:text-right order-2 md:order-3">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 text-xs font-mono uppercase tracking-[0.4em] mb-3">Built for the Future</p>
              <div className="flex items-center justify-center md:justify-end gap-4 text-gray-400">
                <span className="h-px w-12 bg-cyan-500/50"></span>
                <span className="text-xs font-mono uppercase tracking-widest">React 18.2.0 & Tailwind 3.4</span>
              </div>
            </motion.div>
          </div>
          <div className="mt-16 text-center">
             <div className="group inline-block px-8 py-2 rounded-full border border-white/5 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500">
                <p className="text-xs text-gray-500 group-hover:text-gray-300 font-mono tracking-[0.6em] uppercase transition-colors">
                   Handcrafted  ❤️ by <span className="text-cyan-500">Tamim Iqbal</span>
                </p>
             </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;