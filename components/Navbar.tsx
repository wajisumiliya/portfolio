import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Github, Linkedin, MessageSquare } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string) => {
    if (linkName === 'Contact') {
      e.preventDefault();
      onOpenContact();
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-sky-500 mr-3" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tighter text-white leading-none">Wajeethu <span className="text-sky-500">Ali</span></span>
              <span className="text-[10px] text-slate-500 mt-1 font-bold uppercase tracking-widest hidden sm:block">Full Stack Developer</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-8 pr-6 border-r border-slate-800">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.name)}
                  className="text-slate-300 hover:text-sky-400 font-medium text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2">
                <Linkedin size={18} />
              </a>
              <button 
                onClick={onOpenContact}
                className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-lg shadow-sky-900/20 flex items-center gap-2"
              >
                Hire Me <MessageSquare size={14} />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={onOpenContact}
              className="bg-sky-600/10 text-sky-500 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-sky-500/20"
            >
              Contact
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-300 hover:text-white focus:outline-none p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl shadow-2xl border-t border-slate-800 animate-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.name)}
                className="block text-xl font-bold text-slate-300 hover:text-sky-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-slate-800 flex items-center space-x-6">
              <a href="https://github.com" className="text-slate-400 flex items-center gap-2 font-medium">
                <Github size={20} /> GitHub
              </a>
              <a href="https://linkedin.com" className="text-slate-400 flex items-center gap-2 font-medium">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;