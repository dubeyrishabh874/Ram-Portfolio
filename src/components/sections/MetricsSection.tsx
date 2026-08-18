import React, { useState, useEffect } from 'react';
import { METRICS_DATA } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';
import {
  Zap,
  Cpu,
  Users,
  Database,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Activity
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Cpu,
  Users,
  Database,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Terminal
};

export const MetricsSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState<number[]>(METRICS_DATA.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById('impact');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 1800; // ms
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        METRICS_DATA.map((item) => Math.round(item.numericTarget * easeProgress))
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section id="impact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[#00E5FF] text-[10px] font-mono uppercase tracking-widest mb-4">
          <Activity className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>PROVEN PRODUCTION IMPACT</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}
        >
          QUANTIFIED RESULTS
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Measurable performance optimizations, database throughput enhancements, and enterprise automation delivered across 5 years of mission-critical systems engineering.
        </p>
      </div>

      {/* 3D Impact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS_DATA.map((metric, idx) => {
          const IconComponent = iconMap[metric.icon] || Activity;
          const displayCount = counts[idx];
          const isCyanAccent = idx % 2 === 0;

          return (
            <TiltCard
              key={metric.id}
              id={`metric-card-${metric.id}`}
              maxTilt={14}
              scaleOnHover={1.03}
              className={`p-6 flex flex-col justify-between hologram-card group bg-white/5 ${
                isCyanAccent ? 'border-l-4 border-[#00E5FF]' : 'border-l-4 border-[#7C4DFF]'
              }`}
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-black/40 text-gray-300 border border-white/10">
                    {metric.category}
                  </span>
                  <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00E5FF] transition-colors">
                    <IconComponent className="w-4 h-4 text-[#00E5FF]" />
                  </div>
                </div>

                {/* Animated 3D Value */}
                <div className="my-2">
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight" style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}>
                    {displayCount}
                    <span className="text-[#00E5FF] text-3xl sm:text-4xl">{metric.suffix}</span>
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200 mt-2 group-hover:text-[#00E5FF] transition-colors">
                  {metric.label}
                </h3>
              </div>

              {/* Sublabel and Progress Bar */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                  {metric.sublabel}
                </p>
                <div className="w-full h-1 bg-black/50 rounded overflow-hidden border border-white/5">
                  <div
                    className={`h-full ${isCyanAccent ? 'bg-[#00E5FF]' : 'bg-[#7C4DFF]'} transition-all duration-1000`}
                    style={{ width: inView ? `${Math.min(metric.numericTarget, 100)}%` : '0%' }}
                  />
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0a1030]/90 to-slate-900/90 border border-cyan-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">5 Years at Infosys Driving Daimler DTFSA Financial Systems</div>
            <div className="text-xs text-slate-400">Zero production data loss incidents across 50+ enterprise schema evolutions</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-cyan-300 shrink-0">
          <span className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
            Query Optimization Specialist
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-violet-950/60 border border-violet-500/30 text-violet-300">
            C# & .NET Automation Lead
          </span>
        </div>
      </div>
    </section>
  );
};
