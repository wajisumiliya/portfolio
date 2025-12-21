import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, FileDown, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-950">
      {/* Dynamic Animated Background */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] bg-sky-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-blue-700/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-slate-900/50 border border-slate-800 shadow-xl backdrop-blur-sm print-hide">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-bold tracking-widest text-[9px] uppercase">Active for Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-4 tracking-tighter">
              {PORTFOLIO_DATA.name} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 print:text-black">
                {PORTFOLIO_DATA.title.split('&')[0]}
              </span>
            </h1>

            {/* Contact info - Update Email and Remove Website as requested */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 mt-6 mb-4 text-slate-400 font-bold text-xs sm:text-sm print:text-black print:mb-8">
              <div className="flex items-center gap-2 hover:text-sky-400 transition-colors cursor-default">
                <Mail size={14} className="print:text-black" /> mohamedwajeethuali@gmail.com
              </div>
              <div className="flex items-center gap-2 hover:text-sky-400 transition-colors cursor-default">
                <Phone size={14} className="print:text-black" /> +91-9486033167
              </div>
              <div className="flex items-center gap-2 hover:text-sky-400 transition-colors cursor-default">
                <MapPin size={14} className="print:text-black" /> Ramanathapuram,Tamilnadu,India.
              </div>
            </div>
            
            <p 
              ref={textRef}
              className={`text-base md:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed transform transition-all duration-1000 ease-out font-medium print:transform-none print:opacity-100 print:text-black print:max-w-none ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {PORTFOLIO_DATA.about}
            </p>
            
            <div className="flex flex-wrap gap-3 print:hidden">
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-900/20 group">
                View Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={handlePrint}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-200 bg-slate-900 rounded-xl border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all shadow-md"
              >
                <FileDown className="mr-2 h-4 w-4" /> Download CV
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-4 print:hidden">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[9px] font-bold text-slate-400 shadow-lg">
                    {i === 3 ? '5+' : ''}
                  </div>
                ))}
              </div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                High-Availability Deployments
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative print:hidden">
            <div className="relative group max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-blue-600/10 rounded-[40px] blur-xl opacity-50"></div>
              <div className="relative rounded-[32px] overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-3 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Full Stack Developer Workspace" 
                  className="rounded-[24px] w-full aspect-[1/1.1] object-cover grayscale-[0.2]"
                />
                
                
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
