import React from 'react';
import { Layout, Server, Globe, ShieldCheck } from 'lucide-react';

const CoreCompetencies: React.FC = () => {
  const competencies = [
    {
      category: "Front-End",
      icon: <Layout size={16} />,
      skills: ["React", "TypeScript", "Tailwind", "Next.js"],
      color: "from-sky-500/10"
    },
    {
      category: "Back-End",
      icon: <Server size={16} />,
      skills: ["Node.js", "Python", "ASP.Net", "REST"],
      color: "from-blue-500/10"
    },
    {
      category: "Infrastructure",
      icon: <Globe size={16} />,
      skills: ["Docker", "AWS", "Vercel", "CI/CD"],
      color: "from-indigo-500/10"
    },
    {
      category: "Security & DB",
      icon: <ShieldCheck size={16} />,
      skills: ["MySQL", "MongoDB", "Auth0", "JWT"],
      color: "from-cyan-500/10"
    }
  ];

  return (
    <section id="competencies" className="py-16 bg-slate-950 relative overflow-hidden">
      {/* Refined Background Elements - smaller and more subtle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/[0.02] rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-xl">
            <h2 className="text-sky-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-2">Technical Stack</h2>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              Core Competencies
            </h3>
          </div>
          <div className="hidden md:block">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-full">
              <span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">Production Ready</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competencies.map((comp, idx) => (
            <div 
              key={idx} 
              className="group relative p-5 bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl hover:border-sky-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${comp.color} to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    {comp.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm group-hover:text-sky-400 transition-colors">
                    {comp.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {comp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2 py-0.5 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-400 text-[10px] font-medium hover:text-slate-200 hover:border-slate-600 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;