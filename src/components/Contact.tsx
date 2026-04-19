import { Mail, Briefcase, Phone } from 'lucide-react';
import data from '../data.json';

export default function Contact() {
  const { personalInfo } = data;

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Currently open to new opportunities. Send me an email if you'd like to connect, discuss a project, or just say hi.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="text-slate-200 font-medium mb-1">Email</h3>
            <span className="text-slate-400 text-sm">{personalInfo.email}</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Briefcase size={24} />
            </div>
            <h3 className="text-slate-200 font-medium mb-1">LinkedIn</h3>
            <span className="text-slate-400 text-sm">Mateo Romero</span>
          </a>

          <a
            href={`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-emerald-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <h3 className="text-slate-200 font-medium mb-1">WhatsApp</h3>
            <span className="text-slate-400 text-sm">{personalInfo.phone}</span>
          </a>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col items-center">
        <p>© {new Date().getFullYear()} Mateo Romero. All rights reserved.</p>
        <p className="mt-2">Based in {personalInfo.location}</p>
      </div>
    </section>
  );
}
