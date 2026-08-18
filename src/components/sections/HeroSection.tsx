import React, { useState, useEffect } from 'react';
import { Hero3DCanvas } from '../canvas/Hero3DCanvas';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { downloadResumePdf } from '../../utils/generateResumePdf';
import {
  Database,
  Terminal,
  FileText,
  Download,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  Cpu,
  Server,
  Cloud,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Loader2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenSqlTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenSqlTerminal }) => {
  // Typing typewriter effect for phrases
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const fullPhrase = PERSONAL_INFO.typewriterPhrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(fullPhrase.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullPhrase.length) {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        // Deleting backward
        setDisplayedText(fullPhrase.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % PERSONAL_INFO.typewriterPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  const floatingBadges = [
    { label: 'SQL Server 2019', icon: Database, color: 'text-cyan-400', border: 'border-cyan-500/40', glow: 'shadow-[0_0_20px_rgba(0,229,255,0.25)]' },
    { label: 'C# .NET Core', icon: Cpu, color: 'text-violet-400', border: 'border-violet-500/40', glow: 'shadow-[0_0_20px_rgba(124,77,255,0.25)]' },
    { label: 'Azure Cloud', icon: Cloud, color: 'text-sky-400', border: 'border-sky-500/40', glow: 'shadow-[0_0_20px_rgba(56,189,248,0.25)]' },
    { label: 'T-SQL Optimization', icon: Terminal, color: 'text-emerald-400', border: 'border-emerald-500/40', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.25)]' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A0E27]"
    >
      {/* 3D WebGL Background Scene */}
      <Hero3DCanvas />

      {/* Bold Typography Dot Grid Background */}
      <div className="absolute inset-0 opacity-20 bold-dot-grid pointer-events-none" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#7C4DFF] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#00E5FF] rounded-full blur-[120px] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bold Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left py-4">
            <div>
              {/* <Developer /> Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#00E5FF] font-mono text-sm font-bold tracking-tight">
                  &lt;Developer /&gt;
                </span>
                <span className="text-gray-500 font-mono text-xs">|</span>
                <span className="text-gray-400 font-mono text-xs tracking-wider uppercase">
                  Infosys (5 YOE) • Daimler DTFSA
                </span>
              </div>

              {/* Massive Bold Typography Heading */}
              <h1
                id="hero-name-chrome"
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-black leading-[0.88] tracking-tighter mb-6 relative select-none"
                style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">
                  RAM SINGH
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] drop-shadow-[0_10px_25px_rgba(0,229,255,0.35)]">
                  YADAV
                </span>
              </h1>

              {/* Tagline */}
              <p
                id="hero-tagline"
                className="text-lg sm:text-xl text-gray-300 max-w-xl font-light leading-relaxed mb-6 italic"
              >
                Turning Data into Decisions <span className="text-white font-normal">|</span>{' '}
                <span className="text-[#00E5FF] font-medium not-italic">SQL</span> ×{' '}
                <span className="text-[#7C4DFF] font-medium not-italic">.NET</span> ×{' '}
                <span className="text-sky-300 font-medium not-italic">Azure</span>
              </p>

              {/* Animated Typing Terminal Line */}
              <div
                id="hero-typewriter-box"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/5 border border-white/10 mb-8 max-w-full"
              >
                <Terminal className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span className="text-[11px] font-mono text-gray-400">Status::</span>
                <span className="text-xs font-mono text-[#00E5FF] font-bold truncate">
                  {displayedText}
                </span>
                <span className="w-1.5 h-3.5 bg-[#00E5FF] inline-block animate-pulse shrink-0" />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#projects"
                  id="hero-cta-projects"
                  className="px-8 py-3.5 bg-[#00E5FF] text-[#0A0E27] font-bold text-xs uppercase tracking-widest rounded-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:brightness-105 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={async () => {
                    setIsDownloading(true);
                    try {
                      await downloadResumePdf();
                    } finally {
                      setTimeout(() => setIsDownloading(false), 800);
                    }
                  }}
                  id="hero-cta-resume"
                  disabled={isDownloading}
                  className="px-8 py-3.5 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isDownloading ? (
                    <Loader2 className="w-4 h-4 text-[#00E5FF] animate-spin" />
                  ) : (
                    <Download className="w-4 h-4 text-[#00E5FF]" />
                  )}
                  <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
                </button>

                <button
                  onClick={onOpenSqlTerminal}
                  id="hero-cta-terminal"
                  className="px-5 py-3.5 border border-[#7C4DFF]/40 text-[#7C4DFF] font-mono text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#7C4DFF]/10 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Terminal className="w-4 h-4" />
                  <span>EXEC Query</span>
                </button>
              </div>
            </div>

            {/* Stat Cards with Solid Accent Left Borders */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/5 p-3.5 border-l-2 border-[#00E5FF] backdrop-blur-sm">
                <div className="text-2xl font-black text-white">200+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Users Served</div>
              </div>

              <div className="bg-white/5 p-3.5 border-l-2 border-[#7C4DFF] backdrop-blur-sm">
                <div className="text-2xl font-black text-white">99%</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Job Completion</div>
              </div>

              <div className="bg-white/5 p-3.5 border-l-2 border-[#00E5FF] backdrop-blur-sm">
                <div className="text-2xl font-black text-white">40+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Procedures</div>
              </div>

              <div className="bg-white/5 p-3.5 border-l-2 border-[#7C4DFF] backdrop-blur-sm">
                <div className="text-2xl font-black text-white">30%</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Query Speedup</div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D Angled Code Glass Window (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            <div className="w-full max-w-md perspective-1000">
              <div className="relative w-full bg-[#12183d]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 transform lg:rotate-y-[-18deg] lg:rotate-x-[12deg] lg:skew-y-[-3deg] hover:rotate-0 transition-transform duration-500">
                {/* Window Top Controls */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 italic">query_optimizer.sql</div>
                </div>

                {/* SQL Query Snippet */}
                <div className="font-mono text-xs leading-relaxed mb-6 bg-[#0A0E27]/90 p-4 rounded-xl border border-white/5">
                  <div className="text-[#7C4DFF] font-bold">SELECT</div>
                  <div className="pl-4 text-[#00E5FF] font-bold">efficiency, automation, stability</div>
                  <div className="text-[#7C4DFF] font-bold">FROM</div>
                  <div className="pl-4 text-white">enterprise_database</div>
                  <div className="text-[#7C4DFF] font-bold">WHERE</div>
                  <div className="pl-4 text-white">
                    dev_level = <span className="text-yellow-400">&apos;Senior&apos;</span>
                  </div>
                  <div className="mt-3 text-emerald-400 text-[11px]">
                    -- Result: Query optimized by 30%, SLA 95%
                  </div>
                </div>

                {/* Current Project & Milestone Badges */}
                <div className="space-y-3">
                  <div className="bg-[#0A0E27] p-3 rounded-xl border border-[#00E5FF]/20 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#00E5FF] uppercase font-bold tracking-wider">Current Project</div>
                      <div className="text-sm font-bold text-white">Daimler RnS Reporting</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Azure Cloud + .NET Core</div>
                    </div>
                    <div className="text-right font-mono text-[10px] text-[#00E5FF]">
                      [LIVE]
                    </div>
                  </div>

                  <div className="bg-[#0A0E27] p-3 rounded-xl border border-[#7C4DFF]/20 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#7C4DFF] uppercase font-bold tracking-wider">Production SLA</div>
                      <div className="text-sm font-bold text-white">99% On-Time Completion</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Infosys | Senior System Associate</div>
                    </div>
                    <div className="text-right font-mono text-[10px] text-[#7C4DFF]">
                      [VERIFIED]
                    </div>
                  </div>
                </div>

                {/* Corner Ambient Glow */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#00E5FF] to-[#7C4DFF] rounded-full blur-[60px] opacity-30 pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* Floating Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-14">
          <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mr-2">Ecosystem:</span>
          {floatingBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <span
                key={idx}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[11px] text-[#00E5FF] font-mono flex items-center gap-1.5 hover:bg-white/10 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{badge.label}</span>
              </span>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 text-center">
          <a
            href="#impact"
            className="inline-flex flex-col items-center gap-1 text-gray-500 hover:text-[#00E5FF] transition-colors"
            aria-label="Scroll to Impact Metrics"
          >
            <span className="text-[9px] font-mono tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#00E5FF]" />
          </a>
        </div>
      </div>
    </section>
  );
};
