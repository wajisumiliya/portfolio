import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Fullstack', 'Backend', 'Systems'];
  
  const filteredProjects = activeCategory === 'All' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div className="text-center md:text-left">
                <h2 className="text-sky-500 font-mono text-[9px] tracking-[0.4em] uppercase mb-2">Technical</h2>
                <h3 className="text-3xl font-black text-white tracking-tighter">Core Repositories</h3>
            </div>

            <div className="flex bg-slate-900/40 p-1 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            activeCategory === cat 
                                ? 'bg-sky-600 text-white shadow-md' 
                                : 'text-slate-500 hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-slate-900/20 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-sky-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 z-20">
                    <span className="px-3 py-1 bg-slate-950/90 backdrop-blur-md text-[8px] font-black uppercase tracking-widest text-sky-400 rounded-lg border border-sky-500/20 shadow-lg">
                        {project.category}
                    </span>
                </div>
              </div>
              
              <div className="p-5">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors tracking-tight">{project.title}</h4>
                <p className="text-slate-400 mb-4 line-clamp-2 text-xs leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-900/50 text-slate-500 text-[9px] font-black uppercase tracking-wider border border-slate-800 group-hover:text-sky-400 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
            <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200 max-h-[85vh]">
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-50 p-2 bg-slate-950/80 text-white rounded-full border border-slate-700"><X size={18} /></button>
                <div className="w-full md:w-5/12 h-56 md:h-auto overflow-hidden">
                    <img src={selectedProject.imageUrl} className="w-full h-full object-cover" alt={selectedProject.title} />
                </div>
                <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col overflow-y-auto custom-scrollbar">
                    <span className="text-sky-500 font-black uppercase tracking-[0.3em] text-[9px] mb-2 block">Case Study</span>
                    <h2 className="text-3xl font-black text-white mb-4 tracking-tighter">{selectedProject.title}</h2>
                    <p className="text-slate-400 leading-relaxed text-sm mb-8">
                        {selectedProject.longDescription || selectedProject.description}
                    </p>
                    <div className="mt-auto space-y-6">
                        <div className="flex flex-wrap gap-1.5">
                            {selectedProject.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-950 text-sky-400 text-[10px] font-bold rounded-lg border border-slate-800">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <a href={selectedProject.link} className="flex-1 flex items-center justify-center gap-2 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-sky-900/20">
                                <ExternalLink size={16} /> Live Demo
                            </a>
                            <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800 text-slate-200 rounded-xl text-sm font-bold border border-slate-700">
                                <Github size={16} /> Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Projects;