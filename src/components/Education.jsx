import React from 'react';
import { GraduationCap, Award, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171616] border border-[#282626] text-lime-400 text-xs font-mono uppercase tracking-wider">
            Academic & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text-lime">Credentials</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Academic foundation in Cyber Security & Computer Science combined with industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Education Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-lime-400" />
              Academic History
            </h3>

            {education.map((edu, idx) => (
              <div key={idx} className="sawad-bento p-6 flex flex-col justify-between group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-lime-400/10 text-lime-400 border border-lime-400/20 w-fit">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-lg font-extrabold text-white group-hover:text-lime-400 transition-colors">
                  {edu.degree}
                </h4>

                <p className="text-xs font-semibold text-neutral-400 mt-0.5">
                  {edu.institution}
                </p>

                <div className="mt-4 pt-3 border-t border-[#242222] flex items-center justify-between">
                  <span className="text-xs text-neutral-400">{edu.details}</span>
                  <span className="text-xs font-mono font-bold text-lime-400 px-3 py-1 rounded-lg bg-[#0e0d0d] border border-[#262424] shrink-0 ml-4">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              Certifications & Badges
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="sawad-bento p-4 flex items-center justify-between hover:border-lime-400/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#0e0d0d] border border-[#262424] text-lime-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-neutral-500 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0e0d0d] text-neutral-400 border border-[#262424] shrink-0">
                    {cert.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="sawad-bento p-5 border border-lime-400/20 bg-lime-400/5 mt-4">
              <div className="flex items-center gap-2 text-lime-400 font-semibold text-xs font-mono uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Professional Philosophy
              </div>
              <p className="text-neutral-300 text-xs italic leading-relaxed">
                "Passionate problem solver adept at data structures, object-oriented design, and developing secure, scalable software solutions."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
