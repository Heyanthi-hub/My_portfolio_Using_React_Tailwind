import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-5xl bg-[#171616]/90 backdrop-blur-xl border border-[#282626] rounded-full px-4 sm:px-6 py-2.5 shadow-2xl flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo & Status */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={portfolioData.personalInfo.image}
              alt={portfolioData.personalInfo.name}
              className="w-9 h-9 rounded-full object-cover border border-lime-400/40 group-hover:scale-105 transition-transform"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#171616]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors tracking-tight">
              {portfolioData.personalInfo.name}
            </span>
            <span className="text-[10px] text-neutral-400 font-mono tracking-wider flex items-center gap-1">
              <Shield className="w-2.5 h-2.5 text-lime-400 inline" /> CYBER SEC & DEV
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0e0d0d]/60 px-3 py-1 rounded-full border border-[#282626]">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-lime-400 text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#222020] text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="btn-lime px-4 py-1.5 rounded-full text-xs flex items-center gap-1.5"
          >
            Let's Talk <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-[#222020] text-neutral-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-[#171616] border border-[#282626] rounded-3xl p-6 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-lime-400 font-medium text-sm py-2 border-b border-[#282626] flex items-center justify-between"
            >
              {link.name}
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#222020] border border-[#282626] text-xs text-neutral-300"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#222020] border border-[#282626] text-xs text-neutral-300"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
