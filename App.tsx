import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreCompetencies from './components/CoreCompetencies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen selection:bg-sky-500/30 selection:text-sky-200 scroll-smooth">
      <Navbar 
        onOpenContact={() => setIsContactOpen(true)} 
      />
      <main>
        <Hero />
        <CoreCompetencies />
        <Projects />
        <Experience />
        <Blog />
      </main>
      <Footer />
      <AiAssistant />
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;