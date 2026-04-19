import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen selection:bg-indigo-500/30">
      {/* Fixed top blur navbar for easy navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white tracking-widest">
            M<span className="text-indigo-400">R</span>
          </a>
          <ul className="flex gap-6 text-sm font-medium text-slate-300 hidden sm:flex">
            <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a></li>
            <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
