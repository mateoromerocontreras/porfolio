import { ExternalLink, Code2 } from 'lucide-react';
import data from '../data.json';

export default function Projects() {
  const { projects } = data;

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
              
              {/* Optional Placeholder Background Image Logic (just a gradient for now) */}
              <div className="h-40 w-full bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-700/50 flex items-center justify-center relative overflow-hidden">
                 {/* Decorative background circle */}
                 <div className="absolute w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
                 <h3 className="text-3xl font-extrabold text-slate-700/50 group-hover:text-slate-600/50 transition-colors uppercase tracking-widest">{project.name.substring(0,2)}</h3>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors bg-slate-700/50 px-4 py-2 rounded-lg"
                  >
                    <Code2 size={18} />
                    View Source
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
