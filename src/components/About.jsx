import React from 'react';
import { ShieldAlert, Code2, BrainCircuit, CheckCircle2, Lock, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { pillars } = portfolioData;

  const iconMap = {
    ShieldAlert: ShieldAlert,
    Code2: Code2,
    BrainCircuit: BrainCircuit
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171616] border border-[#282626] text-lime-400 text-xs font-mono uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging <span className="gradient-text-lime">Software Engineering</span> & <span className="text-lime-400">Cyber Security</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            I specialize in developing secure full-stack Java/Spring Boot & React applications, 
            building machine learning classification models, and conducting vulnerability audits.
          </p>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Code2;
            return (
              <div
                key={idx}
                className="sawad-bento p-8 flex flex-col justify-between group hover:border-lime-400/40 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0e0d0d] border border-[#262424] flex items-center justify-center mb-6 text-lime-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Foundations Bento Box */}
        <div className="sawad-bento p-8 border border-[#282626]">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Lock className="w-5 h-5 text-lime-400" />
            Core Software Engineering Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Design (OOP)",
              "Software Development Life Cycle (SDLC)",
              "RESTful APIs Architecture",
              "Relational Database Management (SQL/MySQL)",
              "Vulnerability Assessment & Penetration Testing",
              "Machine Learning Data Pipelines",
              "Git Version Control & Linux Fundamentals",
              "AWS Cloud Fundamentals"
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0e0d0d] border border-[#262424] hover:border-lime-400/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="text-xs font-medium text-neutral-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
