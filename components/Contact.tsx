import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Send, X } from 'lucide-react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    // Create WhatsApp link
    // Using India country code 91 based on location context
    const phoneNumber = "919486033167";
    const text = `*New Inquiry from Portfolio*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setStatus('success');
    // Reset after 3 seconds
    setTimeout(() => {
      setStatus('idle');
      onClose();
      // form.reset(); // Don't reset immediately in case they want to correct something, but usually fine.
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
       <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
       
       <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200 max-h-[90vh]">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-slate-950/50 hover:bg-slate-800 rounded-full transition-colors border border-transparent hover:border-slate-700"
          >
            <X size={20} />
          </button>
          
          {/* Left Side - Info */}
          <div className="hidden md:flex w-2/5 bg-slate-900 p-8 border-r border-slate-800 flex-col justify-center relative overflow-hidden">
             {/* Decorative blobs */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-900/20 to-transparent pointer-events-none"></div>
             <div className="absolute -left-10 top-20 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">Let's work together</h2>
                <div className="w-16 h-1 bg-sky-500 rounded-full mb-8"></div>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                  Have a project in mind or want to discuss modern web technologies? 
                  I'm currently available for freelance projects.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-slate-950 p-3 rounded-lg text-sky-500 border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold text-sm">WhatsApp</h4>
                      <p className="text-slate-400 mt-0.5 text-xs">+91-9486033167</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-slate-950 p-3 rounded-lg text-sky-500 border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold text-sm">Location</h4>
                      <p className="text-slate-400 mt-0.5 text-xs">Ramanathapuram, Tamilnadu, India</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-3/5 p-6 md:p-8 bg-slate-950 overflow-y-auto">
             <div className="md:hidden mb-6">
                <h2 className="text-2xl font-bold text-white">Contact Me</h2>
             </div>
             
             <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all placeholder-slate-600 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all placeholder-slate-600 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all placeholder-slate-600 text-sm"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none placeholder-slate-600 text-sm"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full flex items-center justify-center px-6 py-4 rounded-lg text-white font-bold tracking-wide transition-all duration-300 shadow-lg mt-2 ${
                    status === 'success' ? 'bg-green-600 hover:bg-green-700 shadow-green-900/20' : 'bg-sky-600 hover:bg-sky-700 shadow-sky-900/20'
                  }`}
                >
                  {status === 'sending' ? (
                    <span className="flex items-center text-sm">
                       <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : status === 'success' ? (
                    'WhatsApp Opened!'
                  ) : (
                    <>
                      Send via WhatsApp <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
             </form>
          </div>
       </div>
    </div>
  );
};

export default Contact;
