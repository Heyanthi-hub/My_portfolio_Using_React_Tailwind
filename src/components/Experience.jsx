import React from 'react';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171616] border border-[#282626] text-lime-400 text-xs font-mono uppercase tracking-wider">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="gradient-text-lime">Experience</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Hands-on technical internships across AI/ML engineering, Java web development, and cybersecurity.
          </p>
        </div>

        {/* Bento Timeline Grid */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="sawad-bento p-6 sm:p-8 hover:border-lime-400/40 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#282626]">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-lime-400/10 text-lime-400 border border-lime-400/20">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-neutral-400">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e0d0d] border border-[#262424]">
                    <Calendar className="w-3.5 h-3.5 text-lime-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e0d0d] border border-[#262424]">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    <ArrowRight className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#242222]">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-[#0e0d0d] text-neutral-400 text-xs font-mono border border-[#262424]"
                  >
                    #{skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
