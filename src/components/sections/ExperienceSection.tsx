import React from 'react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Layers,
  Building2,
  ChevronRight
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[#00E5FF] text-[10px] font-mono uppercase tracking-widest mb-4">
          <Briefcase className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>CAREER TRAJECTORY &amp; PROMOTIONS</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}
        >
          5 YEARS AT INFOSYS
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
          From Operations Executive to Senior System Associate — progressive leadership in high-concurrency database architecture, C# automation engines, and Daimler DTFSA cloud migrations.
        </p>
      </div>

      {/* Vertical 3D Timeline Container */}
      <div className="relative">
        {/* Glowing Central Neon Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-500/20 transform -translate-x-1/2 shadow-[0_0_15px_rgba(0,229,255,0.4)]" />

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Glowing Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#070a1e] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.7)] group">
                    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 animate-pulse" />
                  </div>
                </div>

                {/* Content Side Container */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <TiltCard
                    id={`exp-card-${exp.id}`}
                    maxTilt={8}
                    scaleOnHover={1.02}
                    glowColor={exp.isCurrent ? 'cyan' : 'violet'}
                    className="p-6 sm:p-8 hologram-card"
                  >
                    {/* Header: Role, Badge & Period */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-semibold">
                              CURRENT ROLE
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400">
                          <span className="flex items-center gap-1 text-cyan-300 font-semibold">
                            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {exp.summary}
                    </p>

                    {/* Metric Highlights Pill Row */}
                    <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-xl bg-slate-950/80 border border-cyan-500/15">
                      {exp.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className={`text-lg sm:text-xl font-display font-extrabold ${metric.color}`}>
                            {metric.value}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="pt-4 border-t border-cyan-500/10 flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-cyan-500/20 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
