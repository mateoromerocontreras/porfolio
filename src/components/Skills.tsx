import { Terminal, Database, Cloud, Code2, CheckCircle2, ShieldCheck } from 'lucide-react';
import data from '../data.json';

export default function Skills() {
  const { technicalStack, certifications } = data;

  const categories = [
    { title: "Languages", items: technicalStack.languages, icon: <Code2 size={20} className="text-indigo-400" /> },
    { title: "Backend & Frameworks", items: technicalStack.backendAndFrameworks, icon: <Terminal size={20} className="text-indigo-400" /> },
    { title: "Cloud & DevOps", items: technicalStack.cloudAndDevOps, icon: <Cloud size={20} className="text-indigo-400" /> },
    { title: "Testing & QA", items: technicalStack.testingAndQA, icon: <ShieldCheck size={20} className="text-indigo-400" /> },
    { title: "Frontend & UI", items: technicalStack.frontendAndUI, icon: <Database size={20} className="text-indigo-400" /> }, // could use better icon but good enough
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Technical Skills & Certifications</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-200">{cat.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-violet-400" /> Validated Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-colors">
                <div className="mt-1 w-2 h-2 rounded-full bg-violet-400 shrink-0 shadow-[0_0_8px_rgba(167,139,250,0.8)]"></div>
                <p className="text-slate-300">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
