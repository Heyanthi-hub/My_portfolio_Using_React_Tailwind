import React from 'react';
import { 
  FileCode, Coffee, Code, Database, Server, Atom, Layout, Network, 
  GitBranch, Terminal, Cloud, CheckCircle2, Cpu 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const iconMap = {
    FileCode, Coffee, Code, Database, Server, Atom, Layout, Network,
    GitBranch, Terminal, Cloud
  };

  const renderSkillBar = (skill) => {
    const Icon = iconMap[skill.icon] || Code;
    return (
      <div key={skill.name} className="space-y-2">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-neutral-200 font-medium">
            <Icon className="w-4 h-4 text-lime-400" />
            <span>{skill.name}</span>
          </div>
          <span className="font-mono text-xs text-neutral-400">{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full bg-[#0e0d0d] rounded-full overflow-hidden border border-[#262424]">
          <div
            className="h-full bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full transition-all duration-1000"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171616] border border-[#282626] text-lime-400 text-xs font-mono uppercase tracking-wider">
            Technical Skillset
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-lime">Competencies</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Comprehensive skill set across backend frameworks, web frontends, databases, security tools, and core CS concepts.
          </p>
        </div>

        {/* 3 Main Skill Category Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Programming Languages */}
          <div className="sawad-bento p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#282626]">
                <div className="p-2 rounded-xl bg-lime-400/10 text-lime-400 border border-lime-400/20">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Programming Languages</h3>
              </div>
              <div className="space-y-4">
                {skills.languages.map(renderSkillBar)}
              </div>
            </div>
          </div>

          {/* Frameworks & Web */}
          <div className="sawad-bento p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#282626]">
                <div className="p-2 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Frameworks & Web</h3>
              </div>
              <div className="space-y-4">
                {skills.frameworks.map(renderSkillBar)}
              </div>
            </div>
          </div>

          {/* Databases & Tools */}
          <div className="sawad-bento p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#282626]">
                <div className="p-2 rounded-xl bg-purple-400/10 text-purple-400 border border-purple-400/20">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Databases & Tools</h3>
              </div>
              <div className="space-y-4">
                {skills.databasesTools.map(renderSkillBar)}
              </div>
            </div>
          </div>

        </div>

        {/* Core CS Concepts Bento Box */}
        <div className="sawad-bento p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-5 h-5 text-lime-400" />
            <h3 className="text-base font-bold text-white">Core CS & Security Foundations</h3>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {skills.coreConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e0d0d] border border-[#262424] text-xs font-semibold text-neutral-300 hover:border-lime-400/40 hover:text-white transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                <span>{concept}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
