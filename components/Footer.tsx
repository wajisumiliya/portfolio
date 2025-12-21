import React, { useState, useEffect } from 'react';
import { Eye, MapPin, Server, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    // Fetch Visitor Country
    fetch('https://api.country.is')
      .then(res => {
        if (!res.ok) throw new Error('Country API failed');
        return res.json();
      })
      .then(data => setCountry(data.country))
      .catch(err => console.warn('Country fetch error:', err));

    // Visit Counter Logic
    const NAMESPACE = 'mohamed-wajeethu-ali-portfolio';
    const KEY = 'visits';
    const STORAGE_KEY = 'has_visited_portfolio';
    
    const hasVisited = localStorage.getItem(STORAGE_KEY);
    const baseUrl = 'https://api.counterapi.dev/v1';
    const apiUrl = hasVisited 
      ? `${baseUrl}/${NAMESPACE}/${KEY}`
      : `${baseUrl}/${NAMESPACE}/${KEY}/up`;

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) throw new Error('Counter API failed');
        return res.json();
      })
      .then(data => {
        setVisitCount(data.count);
        if (!hasVisited) {
          localStorage.setItem(STORAGE_KEY, 'true');
        }
      })
      .catch(err => {
        console.warn('Count fetch error:', err);
      });
  }, []);

  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode) return '';
    return countryCode.toUpperCase().replace(/./g, char => 
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
  };

  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-slate-400 tracking-tight">Mohamed Wajeethu <span className="text-sky-600">Ali</span></span>
            <div className="text-slate-600 text-sm font-medium mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>

          {/* System Status Dashboard */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 rounded-lg border border-slate-800">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">System Health: <span className="text-emerald-400 font-bold">Optimal</span></span>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 rounded-lg border border-slate-800">
              <Zap size={12} className="text-yellow-500" />
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Hosted on: <span className="text-slate-300 font-bold">Vercel Edge</span></span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 rounded-lg border border-slate-800">
              <Server size={12} className="text-indigo-500" />
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Region: <span className="text-slate-300 font-bold">aws-fra-1</span></span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/50 backdrop-blur-sm shadow-sm">
             {/* Visit Counter */}
             <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-900 rounded-full border border-slate-800">
                <Eye size={14} className="text-sky-500" />
                <span className="text-xs font-mono text-slate-300 font-semibold">
                  {visitCount > 0 ? visitCount.toLocaleString() : '...'}
                </span>
             </div>

             {/* Country Flag */}
             {country && (
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-900 rounded-full border border-slate-800">
                   <MapPin size={14} className="text-sky-500" />
                   <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <span className="text-base leading-none grayscale hover:grayscale-0 transition-all cursor-default" role="img" aria-label={`Flag of ${country}`}>
                        {getFlagEmoji(country)}
                      </span>
                      <span>{country}</span>
                   </span>
                </div>
             )}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
