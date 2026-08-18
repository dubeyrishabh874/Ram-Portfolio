import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import { TiltCard } from '../ui/TiltCard';
import { ProjectDetailModal } from '../modals/ProjectDetailModal';
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Database,
  Cloud,
  Cpu,
  FileSpreadsheet,
  Terminal,
  Shield,
  ArrowRight,
  Sparkles,
  Maximize2
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'Cloud Migration' | 'Automation & ETL' | 'Enterprise Reporting' | 'API Systems' | 'UI & Master Data'>('all');

  const tabs = [
    { id: 'all', label: 'All Projects (5)' },
    { id: 'Cloud Migration', label: 'Cloud Migration' },
    { id: 'Automation & ETL', label: 'ETL & Ingestion' },
    { id: 'Enterprise Reporting', label: 'DevExpress Reports' },
    { id: 'API Systems', label: 'REST APIs' },
    { id: 'UI & Master Data', label: 'Master Portals' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const renderMockup = (project: ProjectItem) => {
    switch (project.mockupType) {
      case 'dashboard':
        return (
          <div className="w-full h-44 rounded-xl bg-slate-950/90 border border-cyan-500/20 p-3.5 flex flex-col justify-between font-mono text-[11px] select-none overflow-hidden relative group-hover:border-cyan-400/50 transition-colors">
            <div className="flex items-center justify-between border-b border-cyan-500/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 text-slate-400">azure-app::rns-reporting-prod.azurewebsites.net</span>
              </div>
              <span className="text-emerald-400 font-bold">LIVE 99.99%</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-slate-900/80 border border-cyan-500/10">
                <div className="text-slate-500 text-[9px]">AZURE SQL TIER</div>
                <div className="text-cyan-300 font-bold text-xs">Standard S3</div>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-cyan-500/10">
                <div className="text-slate-500 text-[9px]">LATENCY</div>
                <div className="text-emerald-300 font-bold text-xs">12.4ms (↓ 35%)</div>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-cyan-500/10">
                <div className="text-slate-500 text-[9px]">CONCURRENCY</div>
                <div className="text-violet-300 font-bold text-xs">200+ Sessions</div>
              </div>
            </div>
            <div className="text-[10px] text-cyan-400 flex items-center justify-between">
              <span>ADO.NET Stream Reader Active</span>
              <span className="text-slate-400">TDS 7.4 Protocol</span>
            </div>
          </div>
        );

      case 'terminal':
        return (
          <div className="w-full h-44 rounded-xl bg-[#060a1a] border border-cyan-500/20 p-3.5 flex flex-col justify-between font-mono text-[11px] select-none overflow-hidden relative group-hover:border-cyan-400/50 transition-colors">
            <div className="flex items-center justify-between border-b border-cyan-500/10 pb-2">
              <span className="text-slate-400">bamic-ingestion-daemon.exe</span>
              <span className="text-cyan-400">STATUS: COMMITTED</span>
            </div>
            <div className="text-slate-300 text-[10px] space-y-1 my-1">
              <div className="text-cyan-300">&gt; Ingesting Daimler_Telemetry_Batch_9481.csv</div>
              <div className="text-slate-400">&gt; Parsed: 14,820 records (0 validation errors)</div>
              <div className="text-emerald-400">&gt; SqlBulkCopy Transaction Completed: 1,840ms</div>
              <div className="text-violet-300">&gt; Audit log hash generated &amp; saved to SQL</div>
            </div>
            <div className="text-[10px] text-emerald-400 font-bold">ACID Transaction: OK (100% fidelity)</div>
          </div>
        );

      case 'reports':
        return (
          <div className="w-full h-44 rounded-xl bg-slate-950/90 border border-violet-500/20 p-3.5 flex flex-col justify-between font-mono text-[11px] select-none overflow-hidden relative group-hover:border-violet-400/50 transition-colors">
            <div className="flex items-center justify-between border-b border-violet-500/10 pb-2">
              <span className="text-violet-300 font-bold">DevExpress XtraReport Engine</span>
              <span className="text-cyan-300">500+ PDFs/day</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2 rounded bg-slate-900 border border-violet-500/20 text-slate-300">
                <span className="text-[9px] text-slate-400 block">Report Output</span>
                <span className="text-white font-semibold">Legal Contract PDF</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-violet-500/20 text-slate-300">
                <span className="text-[9px] text-slate-400 block">Manual Effort</span>
                <span className="text-emerald-400 font-semibold">Reduced by 70%</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-400">Dynamic T-SQL PIVOT &amp; Parameterized Stored Procs</div>
          </div>
        );

      case 'api':
        return (
          <div className="w-full h-44 rounded-xl bg-slate-950/90 border border-sky-500/20 p-3.5 flex flex-col justify-between font-mono text-[11px] select-none overflow-hidden relative group-hover:border-sky-400/50 transition-colors">
            <div className="flex items-center justify-between border-b border-sky-500/10 pb-2">
              <span className="text-sky-300 font-bold">POST /api/v2/reports/bulk-upload</span>
              <span className="text-emerald-400">HTTP 200 OK</span>
            </div>
            <div className="text-slate-400 text-[10px] space-y-1 my-1">
              <div>&gt; Auth: Bearer Token Verified</div>
              <div>&gt; Payload: MultipartFormData (Encrypted SHA-256)</div>
              <div>&gt; Duplicate Check: PASSED (SQL Fingerprint)</div>
              <div className="text-sky-300">&gt; Stakeholder Alert: SMTP Email Dispatched</div>
            </div>
            <div className="text-[10px] text-cyan-300">Exponential Backoff &amp; Retry Queue: Active</div>
          </div>
        );

      case 'grid':
      default:
        return (
          <div className="w-full h-44 rounded-xl bg-slate-950/90 border border-cyan-500/20 p-3.5 flex flex-col justify-between font-mono text-[11px] select-none overflow-hidden relative group-hover:border-cyan-400/50 transition-colors">
            <div className="flex items-center justify-between border-b border-cyan-500/10 pb-2">
              <span className="text-cyan-300 font-bold">DevExpress Master Grid View</span>
              <span className="text-slate-400">Temporal Audit Table</span>
            </div>
            <div className="space-y-1 text-[10px] text-slate-300 my-1">
              <div className="p-1 rounded bg-slate-900 flex justify-between">
                <span>[ID: 1042] Loan Footnote EU-2024</span>
                <span className="text-emerald-400">APPROVED</span>
              </div>
              <div className="p-1 rounded bg-slate-900 flex justify-between">
                <span>[ID: 1043] Daimler Lease Disclaimer</span>
                <span className="text-cyan-400">ACTIVE</span>
              </div>
            </div>
            <div className="text-[10px] text-violet-300">Soft-Delete &amp; Point-in-time Historical Queries</div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[#00E5FF] text-[10px] font-mono uppercase tracking-widest mb-4">
          <FolderGit2 className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>PRODUCTION SYSTEMS ARCHITECTURE</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}
        >
          DAIMLER (DTFSA) PORTFOLIO
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
          Architected, migrated, and maintained mission-critical financial applications, reporting engines, and high-throughput data automation systems for Daimler Trucks Financial Services Africa.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-sm text-[10px] uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#00E5FF] text-[#0A0E27] shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects 3D Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <TiltCard
            key={project.id}
            id={`project-card-${project.id}`}
            maxTilt={8}
            scaleOnHover={1.02}
            className="p-6 sm:p-8 hologram-card group flex flex-col justify-between"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold">
                    {project.client}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30 text-xs font-mono">
                    {project.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="p-2 rounded-lg bg-slate-900/80 border border-cyan-500/20 text-slate-400 hover:text-cyan-300 hover:border-cyan-400 cursor-pointer transition-colors"
                  aria-label="Inspect project details"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {project.shortDesc}
              </p>

              {/* 3D Mockup Box */}
              <div className="mb-6">
                {renderMockup(project)}
              </div>

              {/* Key Metric Pills */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-2.5 rounded-lg bg-slate-950/80 border border-cyan-500/15 text-center">
                    <div className="text-base font-display font-bold text-cyan-400">{m.value}</div>
                    <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions and Stack */}
            <div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-cyan-500/10 mb-4">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/20 text-[10px] font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                id={`view-details-${project.id}`}
                className="w-full py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-cyan-300 font-mono text-xs hover:bg-cyan-950/70 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Full Architecture &amp; T-SQL Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
