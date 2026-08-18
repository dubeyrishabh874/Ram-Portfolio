import React, { useState } from 'react';
import { SAMPLE_QUERIES, PERSONAL_INFO, PROJECTS_DATA, SKILLS_DATA, METRICS_DATA } from '../../data/portfolioData';
import {
  Terminal,
  Play,
  RotateCcw,
  Database,
  Layers,
  Sparkles,
  Table as TableIcon,
  Clock,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

export const SqlTerminalSection: React.FC = () => {
  const [currentQuery, setCurrentQuery] = useState(SAMPLE_QUERIES[0].query);
  const [activeTab, setActiveTab] = useState<'results' | 'messages' | 'plan'>('results');
  const [copied, setCopied] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [queryStats, setQueryStats] = useState({
    rows: 4,
    execTime: '0.018s',
    status: 'Command(s) completed successfully.',
    cpuTime: '2ms',
    reads: 14
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(currentQuery);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecute = () => {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
      setQueryStats({
        rows: Math.floor(Math.random() * 5) + 3,
        execTime: `${(Math.random() * 0.03 + 0.01).toFixed(3)}s`,
        status: 'Command(s) completed successfully.',
        cpuTime: `${Math.floor(Math.random() * 4) + 1}ms`,
        reads: Math.floor(Math.random() * 20) + 8
      });
    }, 350);
  };

  const renderTableResults = () => {
    const q = currentQuery.toLowerCase();

    if (q.includes('profile')) {
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-cyan-500/20 bg-slate-900/80 text-cyan-300">
                <th className="p-2.5">Developer</th>
                <th className="p-2.5">Role</th>
                <th className="p-2.5">Total_YOE</th>
                <th className="p-2.5">Primary_Client</th>
                <th className="p-2.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-500/10 text-slate-200">
              <tr className="hover:bg-cyan-500/5">
                <td className="p-2.5 font-bold text-white">{PERSONAL_INFO.name}</td>
                <td className="p-2.5 text-cyan-200">{PERSONAL_INFO.role}</td>
                <td className="p-2.5 text-emerald-400">5 Years (Infosys)</td>
                <td className="p-2.5 text-violet-300">Daimler (DTFSA)</td>
                <td className="p-2.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                    READY_TO_HIRE
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    if (q.includes('impact') || q.includes('performance') || q.includes('metric')) {
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-cyan-500/20 bg-slate-900/80 text-cyan-300">
                <th className="p-2.5">Metric</th>
                <th className="p-2.5">Gain</th>
                <th className="p-2.5">Category</th>
                <th className="p-2.5">Impact_Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-500/10 text-slate-200">
              {METRICS_DATA.slice(0, 4).map((m, idx) => (
                <tr key={idx} className="hover:bg-cyan-500/5">
                  <td className="p-2.5 font-bold text-white">{m.label}</td>
                  <td className="p-2.5 text-emerald-400 font-bold">{m.value}</td>
                  <td className="p-2.5 text-cyan-300">{m.category}</td>
                  <td className="p-2.5 text-slate-400 text-[11px]">{m.sublabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (q.includes('daimler') || q.includes('project')) {
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-cyan-500/20 bg-slate-900/80 text-cyan-300">
                <th className="p-2.5">Project_Name</th>
                <th className="p-2.5">Client</th>
                <th className="p-2.5">Category</th>
                <th className="p-2.5">Tech_Stack</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-500/10 text-slate-200">
              {PROJECTS_DATA.map((p, idx) => (
                <tr key={idx} className="hover:bg-cyan-500/5">
                  <td className="p-2.5 font-bold text-white">{p.title}</td>
                  <td className="p-2.5 text-cyan-300">{p.client}</td>
                  <td className="p-2.5 text-violet-300">{p.category}</td>
                  <td className="p-2.5 text-slate-400 text-[10px]">{p.techStack.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Default: Skills list
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-xs">
          <thead>
            <tr className="border-b border-cyan-500/20 bg-slate-900/80 text-cyan-300">
              <th className="p-2.5">Skill_Name</th>
              <th className="p-2.5">Category</th>
              <th className="p-2.5">Proficiency</th>
              <th className="p-2.5">Score</th>
              <th className="p-2.5">Experience</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-500/10 text-slate-200">
            {SKILLS_DATA.slice(0, 5).map((s, idx) => (
              <tr key={idx} className="hover:bg-cyan-500/5">
                <td className="p-2.5 font-bold text-white">{s.name}</td>
                <td className="p-2.5 text-cyan-300">{s.category}</td>
                <td className="p-2.5 text-emerald-400">{s.proficiency}</td>
                <td className="p-2.5 text-violet-300 font-bold">{s.level}%</td>
                <td className="p-2.5 text-slate-400">{s.yearsOfExp} YOE</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <section id="sql-terminal" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[#00E5FF] text-[10px] font-mono uppercase tracking-widest mb-4">
          <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>INTERACTIVE SSMS SIMULATOR</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}
        >
          SQL SERVER QUERY STUDIO
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
          Execute real-time T-SQL queries against Ram&apos;s verified technical profile, career telemetry, and Daimler DTFSA project databases.
        </p>
      </div>

      {/* Preset Query Chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {SAMPLE_QUERIES.map((sq) => (
          <button
            key={sq.id}
            onClick={() => {
              setCurrentQuery(sq.query);
              handleExecute();
            }}
            className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-cyan-500/20 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-400 cursor-pointer transition-all flex items-center gap-1.5"
          >
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>{sq.title}</span>
          </button>
        ))}
      </div>

      {/* Terminal Window Frame */}
      <div
        id="ssms-query-window"
        className="rounded-2xl bg-[#060a1e] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,229,255,0.15)] overflow-hidden"
      >
        {/* SSMS Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a1233] border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-300 ml-2 font-medium">
              SQLQuery1.sql - INFOSYS_PROD_SVR.DTFSA_Master (INFOSYS\RamSinghYadav (54))
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded bg-slate-900 border border-cyan-500/20 text-slate-400 hover:text-cyan-300 cursor-pointer"
              title="Copy Query"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleExecute}
              id="ssms-execute-query-btn"
              disabled={executing}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
            >
              <Play className={`w-3 h-3 ${executing ? 'animate-spin' : ''}`} />
              <span>{executing ? 'Executing...' : 'Execute (F5)'}</span>
            </button>
          </div>
        </div>

        {/* Query Input Editor */}
        <div className="p-4 bg-[#070d24] font-mono text-sm border-b border-cyan-500/20">
          <div className="flex items-start gap-3">
            <span className="text-slate-600 select-none text-xs leading-6">1<br />2</span>
            <textarea
              value={currentQuery}
              onChange={(e) => setCurrentQuery(e.target.value)}
              rows={2}
              id="ssms-sql-input-area"
              className="w-full bg-transparent text-cyan-300 focus:outline-none resize-none font-mono text-xs sm:text-sm leading-6"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Results & Execution Pane */}
        <div>
          {/* Sub-tabs: Results | Messages | Plan */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-[#091130] border-b border-cyan-500/20">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('results')}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'results'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TableIcon className="w-3 h-3 text-cyan-400" />
                <span>Results Grid ({queryStats.rows} rows)</span>
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'messages'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3 h-3 text-violet-400" />
                <span>Execution Messages</span>
              </button>
              <button
                onClick={() => setActiveTab('plan')}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'plan'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3 h-3 text-emerald-400" />
                <span>Execution Plan</span>
              </button>
            </div>

            {/* Execution Telemetry */}
            <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-slate-400">
              <span>Time: <strong className="text-cyan-300">{queryStats.execTime}</strong></span>
              <span>CPU: <strong className="text-emerald-300">{queryStats.cpuTime}</strong></span>
              <span>Logical Reads: <strong className="text-violet-300">{queryStats.reads}</strong></span>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-4 bg-[#070b20] min-h-[140px]">
            {activeTab === 'results' && renderTableResults()}

            {activeTab === 'messages' && (
              <div className="font-mono text-xs text-slate-300 space-y-1.5">
                <div className="text-emerald-400 font-bold">&gt; (1 row affected)</div>
                <div className="text-slate-400">&gt; Completion time: {new Date().toISOString()}</div>
                <div className="text-slate-400">&gt; Query Hash: 0x8F92BA910C24B102</div>
                <div className="text-cyan-400">&gt; Status: {queryStats.status}</div>
              </div>
            )}

            {activeTab === 'plan' && (
              <div className="p-3 rounded-lg bg-slate-950 border border-cyan-500/20 font-mono text-xs space-y-2">
                <div className="text-cyan-300 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Index Seek (NonClustered) [IX_Customer_Status] - Cost: 0.0031 (98% gain)</span>
                </div>
                <div className="text-slate-400 text-[11px] pl-6">
                  └── Nested Loops (Inner Join) → Compute Scalar → Stream Aggregate → Output
                </div>
                <div className="text-emerald-400 text-[11px] pl-6">
                  Zero Table Scans. Cardinality Estimation: Optimal.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
