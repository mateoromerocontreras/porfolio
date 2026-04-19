import { Briefcase, Calendar } from 'lucide-react';
import data from '../data.json';

export default function Experience() {
  const { experience } = data;

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mb-12 rounded-full"></div>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          
          {experience.map((job, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-indigo-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase size={16} className="text-white" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-colors backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-xl text-slate-100">{job.role}</h3>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                    <Calendar size={14} />
                    {job.period}
                  </span>
                </div>
                <div className="text-slate-300 font-medium mb-3">{job.company}</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
