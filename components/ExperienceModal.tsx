import React, { useEffect, useState } from 'react';
import { X, Briefcase, Building2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import { Experience as ExperienceType } from '../types';

interface ExperienceItemProps {
  exp: ExperienceType;
}

const ExperienceModalItem: React.FC<ExperienceItemProps> = ({ exp }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative pl-12 border-l-2 border-slate-800 last:border-l-0 pb-2 group">
      {/* Improved Logo Container for Modal */}
      <div className="absolute -left-6 top-0 w-12 h-12 rounded-lg bg-white border-2 border-slate-700 flex items-center justify-center overflow-hidden z-20 group-hover:border-blue-500 transition-colors p-1 shadow-sm">
        {exp.logoUrl && !imgError ? (
          <img 
            src={exp.logoUrl} 
            alt={`${exp.company} logo`} 
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" 
            onError={() => setImgError(true)}
          />
        ) : (
          <Building2 size={24} className="text-slate-400 transition-transform duration-500 group-hover:scale-110" />
        )}
      </div>
      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h4>
      <div className="text-blue-500 text-sm font-semibold mb-4 flex items-center">
        {exp.companyUrl ? (
          <a 
            href={exp.companyUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group/link"
          >
            {exp.company}
            <ExternalLink size={12} className="opacity-50 group-hover/link:opacity-100 transition-opacity" />
          </a>
        ) : (
          exp.company
        )}
        <span className="mx-2 text-slate-600">•</span> 
        {exp.period}
      </div>
      <ul className="space-y-3">
        {exp.description.split(/\.(?:\s+|$)/).map((sentence, sIdx) => {
          const trimmed = sentence.trim();
          if (!trimmed) return null;
          return (
            <li key={sIdx} className="text-slate-400 text-sm leading-relaxed flex items-start">
              <span className="mr-3 mt-2 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0 group-hover:bg-blue-500 transition-colors"></span>
              {trimmed}.
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center space-x-3">
             <div className="p-2 bg-blue-600/20 rounded-lg">
                <Briefcase className="text-blue-500" size={24} />
             </div>
             <div>
                <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
                <p className="text-slate-400 text-sm">My career journey and roles</p>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-slate-950">
           <div className="space-y-12 max-w-3xl mx-auto">
                {PORTFOLIO_DATA.experience.map((exp, idx) => (
                    <ExperienceModalItem key={idx} exp={exp} />
                ))}
            </div>
        </div>
        
        {/* Footer decoration */}
        <div className="h-2 bg-gradient-to-r from-sky-500 to-blue-600"></div>
      </div>
    </div>
  );
};

export default ExperienceModal;