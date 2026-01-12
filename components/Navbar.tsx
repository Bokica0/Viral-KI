
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass-card px-6 py-4 flex justify-between items-center mx-4 mt-4 rounded-2xl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white">V</div>
        <span className="text-xl font-extrabold tracking-tight">Viral-<span className="text-purple-500">KI</span></span>
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
        <a href="#platforms" className="hover:text-white transition-colors">Plattformen</a>
        <a href="#features" className="hover:text-white transition-colors">Vorteile</a>
        <a href="#generator" className="hover:text-white transition-colors">KI-Generator</a>
      </div>
      <a 
        href="https://fliki.ai/?via=viral-ki" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg shadow-purple-500/20"
      >
        Fliki testen
      </a>
    </nav>
  );
};

export default Navbar;
