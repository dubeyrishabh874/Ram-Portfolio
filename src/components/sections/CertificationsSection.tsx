import React from 'react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';
import {
  Award,
  ShieldCheck,
  Code2,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Building,
  Calendar
} from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[#00E5FF] text-[10px] font-mono uppercase tracking-widest mb-4">
          <Award className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>VERIFIED INDUSTRY CREDENTIALS</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}
        >
          CERTIFICATIONS &amp; HONORS
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
          Rigorous certifications across enterprise ITSM administration, C# backend software design, and executive business communication.
        </p>
      </div>

      {/* Holographic 3D Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CERTIFICATIONS_DATA.map((cert) => {
          let badgeIcon = ShieldCheck;
          let glow = 'cyan';
          let accentColor = 'from-cyan-500 to-blue-600';

          if (cert.badgeType === 'csharp') {
            badgeIcon = Code2;
            glow = 'violet';
            accentColor = 'from-violet-500 to-purple-600';
          } else if (cert.badgeType === 'communication') {
            badgeIcon = MessageSquare;
            glow = 'emerald';
            accentColor = 'from-emerald-500 to-teal-600';
          }

          const IconComponent = badgeIcon;

          return (
            <TiltCard
              key={cert.id}
              id={`cert-card-${cert.id}`}
              maxTilt={14}
              scaleOnHover={1.03}
              glowColor={glow as any}
              className="p-8 hologram-card flex flex-col justify-between"
            >
              <div>
                {/* Top Badge Stamp */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accentColor} p-0.5 shadow-[0_0_20px_rgba(0,229,255,0.3)]`}>
                    <div className="w-full h-full rounded-2xl bg-[#090f28] flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-cyan-300" />
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300">
                      {cert.year}
                    </span>
                    <div className="text-[10px] font-mono text-slate-500 mt-1">
                      {cert.code}
                    </div>
                  </div>
                </div>

                {/* Title and Issuer */}
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-4">
                  <Building className="w-3.5 h-3.5" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Verified Competencies */}
              <div className="pt-4 border-t border-cyan-500/10">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Skills Validated:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsVerified.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950/80 border border-cyan-500/20 text-[10px] font-mono text-slate-300"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};
