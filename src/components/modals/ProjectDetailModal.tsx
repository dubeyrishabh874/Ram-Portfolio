import React from 'react';
import { ProjectItem } from '../../types/portfolio';
import {
  X,
  Database,
  Server,
  Cloud,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  Shield,
  ArrowRight
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090f2b] border border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,229,255,0.2)] text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-project-modal-btn"
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-cyan-500/30 text-slate-400 hover:text-white hover:border-cyan-400 cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold">
              {project.client}
            </span>
            <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40 text-xs font-mono font-semibold">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            {project.title}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.fullDesc}
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-center">
              <div className="text-xl font-display font-bold text-cyan-400">{m.value}</div>
              <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Architecture Topology */}
        <div className="my-6 p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/20 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Architecture & Pipeline Topology</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {project.architecture.frontend && (
              <div className="p-3 rounded-lg bg-slate-900/60 border border-cyan-500/10">
                <span className="text-slate-400 font-mono block mb-1">Presentation Layer:</span>
                <span className="text-white font-medium">{project.architecture.frontend}</span>
              </div>
            )}
            <div className="p-3 rounded-lg bg-slate-900/60 border border-cyan-500/10">
              <span className="text-slate-400 font-mono block mb-1">Backend Engine:</span>
              <span className="text-white font-medium">{project.architecture.backend}</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-cyan-500/10">
              <span className="text-slate-400 font-mono block mb-1">Database & T-SQL Layer:</span>
              <span className="text-white font-medium">{project.architecture.database}</span>
            </div>
            {project.architecture.cloud && (
              <div className="p-3 rounded-lg bg-slate-900/60 border border-cyan-500/10">
                <span className="text-slate-400 font-mono block mb-1">Cloud Infrastructure:</span>
                <span className="text-white font-medium">{project.architecture.cloud}</span>
              </div>
            )}
            <div className="p-3 rounded-lg bg-slate-900/60 border border-cyan-500/10 sm:col-span-2">
              <span className="text-slate-400 font-mono block mb-1">Protocols & Concurrency:</span>
              <span className="text-white font-medium">{project.architecture.protocols}</span>
            </div>
          </div>
        </div>

        {/* Database & SQL Highlights */}
        <div className="my-6 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 font-mono text-xs text-slate-200">
          <div className="flex items-center gap-2 text-cyan-300 font-bold mb-1.5">
            <Database className="w-4 h-4 text-cyan-400" />
            <span>T-SQL & Performance Engineering Details</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {project.sqlHighlights}
          </p>
        </div>

        {/* Key Engineering Deliverables */}
        <div className="space-y-2.5 my-6">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
            Key Deliverables & Implementations
          </h4>
          {project.highlights.map((h, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="pt-4 border-t border-cyan-500/20 flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
