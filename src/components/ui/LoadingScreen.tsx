import React, { useState, useEffect } from 'react';
import { Database, Server, Cpu, CheckCircle } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusLog, setStatusLog] = useState('INIT_CORE_SERVICES');

  const logs = [
    { p: 15, msg: 'MOUNTING_SQL_SERVER_2019_CLUSTER' },
    { p: 35, msg: 'LOADING_T_SQL_STORED_PROCEDURES' },
    { p: 55, msg: 'INDEXING_DAIMLER_FINANCIAL_REPORTS' },
    { p: 75, msg: 'ESTABLISHING_AZURE_CLOUD_PIPELINE' },
    { p: 92, msg: 'INITIALIZING_3D_ISOMETRIC_VIEWPORT' },
    { p: 100, msg: 'RAM_SINGH_YADAV_PORTFOLIO_READY' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }

        const currentLog = logs.find((l) => next >= l.p && prev < l.p);
        if (currentLog) {
          setStatusLog(currentLog.msg);
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#06091e] flex flex-col items-center justify-center p-6 select-none">
      {/* 3D Assembling Database Icon Graphic */}
      <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />

        {/* Outer Rotating Gear / Ring */}
        <div
          className="absolute inset-0 rounded-3xl border-2 border-dashed border-cyan-400/40 animate-spin"
          style={{ animationDuration: '8s' }}
        />

        {/* Database Disc Layers Assembling */}
        <div className="relative flex flex-col items-center gap-1.5 z-10">
          <div
            className="w-14 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 border border-cyan-200 shadow-[0_0_15px_rgba(0,229,255,0.8)] transition-all duration-500"
            style={{
              transform: progress > 60 ? 'translateY(0)' : 'translateY(-20px)',
              opacity: progress > 60 ? 1 : 0.4
            }}
          />
          <div
            className="w-14 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border border-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.6)] transition-all duration-500"
            style={{
              transform: progress > 30 ? 'translateY(0)' : 'translateY(-10px)',
              opacity: progress > 30 ? 1 : 0.4
            }}
          />
          <div
            className="w-14 h-4 rounded-full bg-gradient-to-r from-slate-800 to-cyan-950 border border-cyan-500/60 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
          />
        </div>
      </div>

      {/* Developer Name */}
      <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-widest uppercase mb-1 text-glow-cyan">
        RAM SINGH YADAV
      </h2>
      <p className="text-xs font-mono text-cyan-300 mb-6 tracking-wide">
        SQL Server &amp; .NET Specialist (5 YOE @ Infosys)
      </p>

      {/* Progress Bar Container */}
      <div className="w-full max-w-xs space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="text-cyan-400 font-bold">&gt; {statusLog}</span>
          <span className="text-white font-bold">{progress}%</span>
        </div>

        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/30">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-300 transition-all duration-75 shadow-[0_0_12px_rgba(0,229,255,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
