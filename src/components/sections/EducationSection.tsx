import React from 'react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Languages,
  Sparkles,
  CheckCircle2,
  Users
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const softSkills = [
    'Analytical Thinking',
    'Executive Communication',
    'Technical Leadership',
    'Cross-Functional Negotiation',
    'Agile Teamwork',
    'Time Management',
    'Task Prioritization'
  ];

  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[#00E5FF] text-[10px] font-mono uppercase tracking-widest mb-4">
          <GraduationCap className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>ACADEMIC FOUNDATIONS</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}
        >
          EDUCATION &amp; STRENGTHS
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
          Advanced master&apos;s degree in computer applications paired with strong analytical capabilities and bilingual fluency.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Cards (2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          {EDUCATION_DATA.map((edu) => (
            <TiltCard
              key={edu.id}
              id={`edu-card-${edu.id}`}
              maxTilt={8}
              scaleOnHover={1.02}
              className="p-6 sm:p-8 hologram-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-cyan-400 mt-1">
                    {edu.institution}
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 mt-1">
                    {edu.gpaOrStatus}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{edu.location}</span>
                <span>•</span>
                <span className="text-slate-300">{edu.field}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-cyan-500/10">
                {edu.highlight}
              </p>
            </TiltCard>
          ))}
        </div>

        {/* Soft Skills & Languages Column (1 column) */}
        <div className="space-y-6">
          {/* Languages Card */}
          <TiltCard maxTilt={10} className="p-6 hologram-card">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                Bilingual Proficiency
              </h3>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 flex items-center justify-between">
                <span className="text-white font-semibold">English</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px]">
                  Professional Working
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 flex items-center justify-between">
                <span className="text-white font-semibold">Hindi</span>
                <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 text-[10px]">
                  Native / Fluent
                </span>
              </div>
            </div>
          </TiltCard>

          {/* Soft Skills Card */}
          <TiltCard maxTilt={10} className="p-6 hologram-card">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-violet-500/20 border border-violet-400/40 text-violet-300">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                Leadership &amp; Soft Skills
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-violet-500/20 text-xs font-mono text-slate-300 hover:border-violet-400 hover:text-white transition-colors"
                >
                  ✦ {skill}
                </span>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
