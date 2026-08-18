import React, { useState } from 'react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { SkillItem } from '../../types/portfolio';
import { TiltCard } from '../ui/TiltCard';
import {
  Database,
  Zap,
  Server,
  Shuffle,
  Code2,
  Globe,
  Filter,
  FileSpreadsheet,
  Cloud,
  Shield,
  Radio,
  Layers,
  Search,
  CheckCircle,
  Sparkles,
  Terminal
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Database,
  Zap,
  Server,
  Shuffle,
  Code2,
  Globe,
  Filter,
  FileSpreadsheet,
  Cloud,
  Shield,
  Radio,
  Layers
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'database' | 'backend' | 'cloud_tools' | 'architecture'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(SKILLS_DATA[0]);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'database', label: 'Database & SQL Server' },
    { id: 'backend', label: '.NET & C# Ecosystem' },
    { id: 'cloud_tools', label: 'Azure & ServiceNow' },
    { id: 'architecture', label: 'Architecture & APIs' },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.querySnippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[#00E5FF] text-[10px] font-mono uppercase tracking-widest mb-4">
          <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>TECHNICAL TAXONOMY</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}
        >
          CORE STACK &amp; SKILLS
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
          Five years of hands-on production expertise in enterprise SQL Server performance engineering, C# backend automation, and scalable cloud data pipelines.
        </p>

        {/* Live SQL Header snippet */}
        <div className="mt-6 inline-block text-left p-3.5 rounded bg-white/5 border border-white/10 font-mono text-xs text-[#00E5FF]">
          <span className="text-[#7C4DFF] font-bold">SELECT</span> * <span className="text-[#7C4DFF] font-bold">FROM</span> [dbo].[RamSinghYadav_Skills] <span className="text-[#7C4DFF] font-bold">WHERE</span> [Proficiency] = <span className="text-emerald-400">&apos;Expert&apos;</span>;
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-sm text-[10px] uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#00E5FF] text-[#0A0E27] shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#00E5FF] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills, T-SQL, C#..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-sm bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00E5FF]"
          />
        </div>
      </div>

      {/* 3D Grid of Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Database;
          const radius = 24;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (skill.level / 100) * circumference;

          return (
            <TiltCard
              key={skill.id}
              id={`skill-card-${skill.id}`}
              maxTilt={12}
              scaleOnHover={1.02}
              onClick={() => setActiveSkill(skill)}
              className="p-6 cursor-pointer hologram-card group flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon, Level Ring & Category */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] font-mono text-cyan-400">
                          {skill.yearsOfExp} YOE
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-[11px] font-mono text-violet-400">
                          {skill.proficiency}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Animated Circular Progress Ring */}
                  <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                    <svg className="w-14 h-14 transform -rotate-90">
                      <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-slate-800"
                        fill="transparent"
                      />
                      <circle
                        cx="28"
                        cy="28"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="text-cyan-400 transition-all duration-1000 ease-out"
                        fill="transparent"
                      />
                    </svg>
                    <span className="absolute text-[11px] font-mono font-bold text-cyan-300">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Code Snippet / SQL Syntax box */}
              <div className="pt-3 border-t border-cyan-500/10">
                <div className="p-2.5 rounded-lg bg-slate-950/90 border border-cyan-500/20 font-mono text-[11px] text-slate-300 overflow-x-auto">
                  <div className="text-[9px] uppercase tracking-wider text-slate-500 mb-1 flex items-center justify-between">
                    <span>SYNTAX EXECUTION</span>
                    <span className="text-cyan-400">T-SQL / C#</span>
                  </div>
                  <code className="text-cyan-200 block truncate group-hover:whitespace-normal transition-all">
                    {skill.querySnippet}
                  </code>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};
