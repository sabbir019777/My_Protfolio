import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Philosophy from "./components/Philosophy";

import Projects from "./components/Projects";






function App() {
  return (
    <div className="bg-[#030014]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
       <Experience />
      <Philosophy />

      <Projects />

    
    </div>
  );
}

export default App;