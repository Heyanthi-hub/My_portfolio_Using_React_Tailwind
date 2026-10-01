import React from 'react';
import { ArrowUpRight, Shield, Terminal, Mail, Download, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="hero" className="pt-28 pb-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-lime-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Sawad Style Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT BENTO CARD: Main Profile & Headline (7 Cols) */}
          <div className="lg:col-span-7 sawad-bento p-6 sm:p-8 flex flex-col justify-between space-y-8 relative overflow-hidden">
            
            {/* Top Status Pill */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222020] border border-[#2f2c2c] text-emerald-400 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for full-time roles & projects
              </div>
              <span className="text-xs font-mono text-neutral-500">
                Vizianagaram, AP
              </span>
            </div>

            {/* Profile Photo + Greeting Intro */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative shrink-0">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-top border-2 border-lime-400/30 shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-lime-400 text-black shadow-md">
                  <Shield className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1">
                <h2 className="text-sm font-mono text-lime-400 uppercase tracking-wider">
                  Hello, I'm {personalInfo.name} 👋
                </h2>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Full-Stack Web Developer & <span className="gradient-text-lime">Cyber Security Specialist</span>
                </h1>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              B.Tech CSE (Cyber Security) graduate experienced in building secure, scalable 
              <span className="text-white font-medium"> Java, Spring Boot & React</span> applications, and engineering 
              <span className="text-white font-medium"> Machine Learning vulnerability classification tools</span>.
            </p>

            {/* Action buttons & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="btn-lime px-6 py-3 rounded-xl text-xs flex items-center gap-2"
              >
                Talk With Me <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="px-5 py-3 rounded-xl bg-[#222020] hover:bg-[#2b2828] border border-[#2f2c2c] text-white text-xs font-semibold transition-all"
              >
                View Work
              </a>

              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#222020] hover:bg-[#2b2828] border border-[#2f2c2c] text-neutral-300 hover:text-white transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#222020] hover:bg-[#2b2828] border border-[#2f2c2c] text-neutral-300 hover:text-cyan-400 transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT BENTO STACK (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Bento Stat Card */}
            <div className="sawad-bento p-6 flex flex-col justify-between">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-lime-400" /> Academic & Experience Snapshot
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0e0d0d] border border-[#262424]">
                  <div className="text-2xl font-black text-lime-400">7.85</div>
                  <div className="text-xs text-neutral-400 mt-1">B.Tech CSE CGPA</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0e0d0d] border border-[#262424]">
                  <div className="text-2xl font-black text-white">3+</div>
                  <div className="text-xs text-neutral-400 mt-1">Industry Internships</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0e0d0d] border border-[#262424]">
                  <div className="text-2xl font-black text-white">5+</div>
                  <div className="text-xs text-neutral-400 mt-1">Full-Stack Projects</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0e0d0d] border border-[#262424]">
                  <div className="text-2xl font-black text-lime-400">5</div>
                  <div className="text-xs text-neutral-400 mt-1">Certifications</div>
                </div>
              </div>
            </div>

            {/* Bento Tech Focus Card */}
            <div className="sawad-bento-highlight p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-lime-400" /> Core Tech Stack
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/20">
                  SECURE & SCALABLE
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "React", "Python", "SQL / MySQL", "Network Security", "ML Pipelines"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#0e0d0d]/80 text-neutral-300 text-xs font-mono border border-[#2a2828]"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* LinkedIn Quick Connect Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="sawad-bento p-5 flex items-center justify-between group hover:border-lime-400/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">LinkedIn Profile</div>
                  <div className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">
                    Connect on LinkedIn
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-lime-400 transition-colors" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
