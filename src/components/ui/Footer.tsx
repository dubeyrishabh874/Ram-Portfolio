import React from 'react';
import { Database, Terminal, ArrowUp, Mail, Phone, MapPin, Heart, Shield, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenSqlTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenSqlTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070B20] text-gray-400 font-mono text-xs overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_15px_#00E5FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-[#00E5FF] to-[#7C4DFF] rounded flex items-center justify-center font-black text-black text-xs">
                R
              </div>
              <span className="font-display font-black text-white text-lg tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-md font-sans">
              Senior SQL Server &amp; .NET Developer with 5 years at Infosys, specializing in high-concurrency database architecture, 30% query performance optimization, and Daimler DTFSA cloud systems.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-[#00E5FF] uppercase font-bold tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span>Availability: Open for Hire (Immediate / Notice Period)</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#hero" className="hover:text-[#00E5FF] transition-colors">Overview</a></li>
              <li><a href="#impact" className="hover:text-[#00E5FF] transition-colors">Impact Metrics</a></li>
              <li><a href="#skills" className="hover:text-[#00E5FF] transition-colors">Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-[#00E5FF] transition-colors">Infosys Experience</a></li>
              <li><a href="#projects" className="hover:text-[#00E5FF] transition-colors">Daimler Projects</a></li>
              <li><a href="#certifications" className="hover:text-[#00E5FF] transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">
              Direct Contact
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#00E5FF]" />
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#7C4DFF]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#00E5FF]" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00E5FF] transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-[#00E5FF] text-[10px] uppercase font-bold tracking-wider hover:bg-white/10 hover:border-[#00E5FF]/40 cursor-pointer"
                >
                  View Full Resume (PDF)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Ecosystem Bar matching design HTML */}
        <div className="py-4 border-y border-white/5 flex flex-wrap items-center justify-between gap-4 my-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest whitespace-nowrap">
              Tech Ecosystem:
            </span>
            <div className="flex flex-wrap gap-2">
              {['SQL Server 2019', '.NET 8', 'Azure', 'C#', 'SSIS', 'ServiceNow', 'XtraReports'].map((tech, i) => (
                <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-[#00E5FF] font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[9px] uppercase text-gray-500 tracking-tighter">Hyderabad, India</span>
              <span className="text-[10px] font-bold text-white tracking-widest">+91 8318915988</span>
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <div className="text-xs font-mono text-[#00E5FF] animate-pulse">_online_now</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with 3D WebGL, SQL Server &amp; .NET Core architectural precision.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSqlTerminal}
              className="text-[#00E5FF] hover:underline flex items-center gap-1 cursor-pointer font-bold"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Launch Query Console</span>
            </button>

            <button
              onClick={scrollToTop}
              id="scroll-to-top-btn"
              className="p-2 rounded bg-white/5 border border-white/10 text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF] cursor-pointer transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
