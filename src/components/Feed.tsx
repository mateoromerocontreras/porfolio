import { CalendarDays, ArrowRight } from 'lucide-react';
import blogData from '../blog.json';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  content: string;
  link?: string;
  linkText?: string;
}

export default function Feed() {
  return (
    <section id="updates" className="py-24 px-6 sm:px-12 lg:px-24 bg-slate-900/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Latest Updates</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mb-12 rounded-full"></div>
        
               <ul className="grid grid-cols-1 gap-8">
          {(blogData as BlogPost[]).map((post) => (
            <li key={post.id} className="p-6 sm:p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-center gap-2 text-indigo-400 mb-4">
                <CalendarDays size={16} />
                <span className="text-sm font-medium tracking-wide uppercase">{post.date}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-4">{post.title}</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                {post.content}
              </p>
              
              {post.link && (
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors group-hover:underline underline-offset-4"
                >
                  {post.linkText || 'Read more'}
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
