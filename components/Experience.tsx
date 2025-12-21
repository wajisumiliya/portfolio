import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Building2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import { Experience as ExperienceType } from '../types';

interface ExperienceItemProps {
  job: ExperienceType;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ job, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div ref={itemRef} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className={`flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 bg-slate-900 group-hover:border-sky-500 text-slate-500 group-hover:text-sky-500 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500`}>
        <Briefcase size={14} />
      </div>

      <div className={`w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-slate-900/50 p-5 rounded-xl border border-slate-800 hover:border-sky-500/20 transition-all shadow-sm duration-500 ${isVisible ? 'translate-x-0 opacity-100' : `${isEven ? 'md:translate-x-8' : 'md:-translate-x-8'} translate-x-4 opacity-0`}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center overflow-hidden flex-shrink-0 p-1">
            {job.logoUrl && !imgError ? (
              <img src={job.logoUrl} alt={job.company} className="max-w-full max-h-full object-contain" onError={() => setImgError(true)}/>
            ) : (
              <Building2 size={20} className="text-slate-400" />
            )}
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <h3 className="font-bold text-white text-sm truncate">{job.role}</h3>
              <span className="text-[8px] font-bold text-sky-400 bg-sky-400/10 px-1.5 py-0.5 rounded font-mono whitespace-nowrap">
                {job.period}
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-medium truncate">
              {job.companyUrl ? (
                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors inline-flex items-center gap-1">
                  {job.company} <ExternalLink size={8} />
                </a>
              ) : job.company}
            </div>
          </div>
        </div>
        
        <ul className="space-y-1.5">
          {job.description.split(/\.(?:\s+|$)/).map((sentence, idx) => {
            const clean = sentence.trim();
            if (!clean) return null;
            return (
              <li key={idx} className="text-slate-400 text-xs leading-relaxed flex items-start">
                <span className="mr-2 mt-1.5 w-1 h-1 bg-sky-500 rounded-full flex-shrink-0"></span>
                <span>{clean}.</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-10 md:text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">Professional Experience</h2>
                <div className="w-16 h-1 bg-sky-500 md:mx-auto rounded-full mb-4"></div>
                <p className="text-slate-400 text-sm">Professional trajectory focused on high-performance architectures.</p>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-800">
                {PORTFOLIO_DATA.experience.map((job, index) => (
                    <ExperienceItem key={index} job={job} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Experience;