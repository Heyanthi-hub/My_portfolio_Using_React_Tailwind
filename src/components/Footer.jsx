import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-[#1e1d1d] text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <img
            src={portfolioData.personalInfo.image}
            alt={portfolioData.personalInfo.name}
            className="w-6 h-6 rounded-full object-cover border border-lime-400/40"
          />
          <span className="font-bold text-white">{portfolioData.personalInfo.name}</span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400 font-mono text-[11px]">
            Full-Stack & Cyber Security Engineer
          </span>
        </div>

        {/* Copyright */}
        <div className="text-neutral-500 text-center font-mono text-[11px]">
          © {new Date().getFullYear()} Heyanthi Devi Abotula. All rights reserved.
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#171616] border border-[#282626] text-neutral-300 hover:text-lime-400 hover:border-lime-400/40 transition-all text-xs"
        >
          Top <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
