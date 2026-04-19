import { ArrowDown, Mail } from 'lucide-react';
import data from '../data.json';

export default function Hero() {
  const { personalInfo, summary } = data;

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl opacity-0 animate-fade-in-up">
        <h2 className="text-indigo-400 font-medium tracking-widest uppercase mb-4 text-sm sm:text-base">
          Trilingual System Analyst & Backend Developer
        </h2>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-6 opacity-0 animate-fade-in-up delay-100">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">{personalInfo.name}</span>.
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl opacity-0 animate-fade-in-up delay-200">
          {summary}
        </p>
        
        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-300">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up delay-400">
        <a href="#experience" className="text-slate-400 hover:text-indigo-400 transition-colors flex flex-col items-center gap-2">
          <span className="text-sm font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
