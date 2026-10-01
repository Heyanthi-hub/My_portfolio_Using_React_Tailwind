import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full-Stack Web App', 'AI & Cyber Security'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171616] border border-[#282626] text-lime-400 text-xs font-mono uppercase tracking-wider">
            Featured Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-text-lime">Projects</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Full-stack web applications and AI-driven cybersecurity tools engineered during degree & internships.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'btn-lime'
                  : 'bg-[#171616] text-neutral-400 hover:text-white border border-[#282626]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sawad Bento Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="sawad-bento p-6 sm:p-8 flex flex-col justify-between group hover:border-lime-400/50 transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-lime-400/10 text-lime-400 border border-lime-400/20">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white group-hover:text-lime-400 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                    Implementation Highlights:
                  </div>
                  {project.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-neutral-300 text-xs leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Links & Tech */}
              <div className="pt-6 border-t border-[#242222] flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#0e0d0d] text-neutral-400 text-[11px] font-mono border border-[#262424]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#222020] hover:bg-[#2b2828] border border-[#2f2c2c] text-white transition-colors shrink-0"
                  title="View GitHub Repository"
                >
                  <ArrowUpRight className="w-4 h-4 text-lime-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
