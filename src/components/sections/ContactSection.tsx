import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Copy,
  Check,
  Send,
  Sparkles,
  RotateCw,
  MessageSquare,
  ShieldCheck,
  Terminal
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({ particleCount: 80, spread: 100, origin: { y: 0.6 } });
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsFlipped(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[#00E5FF] text-[10px] font-mono uppercase tracking-widest mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>INITIATE ENGAGEMENT</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
          style={{ fontFamily: '"Arial Black", "Space Grotesk", sans-serif' }}
        >
          GET IN TOUCH
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
          Open for Senior SQL Server &amp; .NET engineering opportunities, enterprise database consulting, and architecture roles.
        </p>
      </div>

      <div className="max-w-4xl mx-auto perspective-2000">
        {/* 3D Flip Card Container */}
        <div
          className="relative min-h-[460px] preserve-3d transition-transform duration-700"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* FRONT OF CARD: Direct Contact Info & Holographic Badges */}
          <div className="absolute inset-0 backface-hidden">
            <div className="h-full rounded-3xl bg-[#09102c]/90 border border-cyan-500/30 p-8 sm:p-12 shadow-[0_0_50px_rgba(0,229,255,0.2)] flex flex-col justify-between backdrop-blur-2xl">
              <div>
                {/* Top Status */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-bold text-lg font-display">
                      RY
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400">
                        {PERSONAL_INFO.role} (5 YOE @ Infosys)
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsFlipped(true)}
                    id="flip-to-message-form-btn"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono hover:bg-cyan-950 hover:border-cyan-300 cursor-pointer transition-all shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Flip to Quick Message</span>
                  </button>
                </div>

                {/* Contact Channels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {/* Phone */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex items-center justify-between group hover:border-cyan-400/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase block">Phone / Mobile</span>
                        <a
                          href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                          className="text-sm font-mono font-bold text-white hover:text-cyan-300 transition-colors"
                        >
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 rounded-lg bg-slate-900 border border-cyan-500/20 text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors"
                      title="Copy phone"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex items-center justify-between group hover:border-cyan-400/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase block">Email Address</span>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-xs sm:text-sm font-mono font-bold text-white hover:text-cyan-300 transition-colors truncate max-w-[180px] sm:max-w-none block"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-slate-900 border border-cyan-500/20 text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Location</span>
                      <span className="text-sm font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase block">LinkedIn Profile</span>
                        <a
                          href={PERSONAL_INFO.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                        >
                          ram-singh-yadav01
                        </a>
                      </div>
                    </div>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-mono hover:bg-sky-500/30 transition-colors"
                    >
                      Connect →
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-6 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 font-semibold">{PERSONAL_INFO.status}</span>
                </div>
                <div className="text-cyan-400">
                  Response SLA: &lt; 12 Hours
                </div>
              </div>
            </div>
          </div>

          {/* BACK OF CARD: Quick Recruiter Message Form */}
          <div
            className="absolute inset-0 backface-hidden"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div className="h-full rounded-3xl bg-[#09102c]/95 border border-cyan-500/30 p-8 sm:p-10 shadow-[0_0_50px_rgba(124,77,255,0.2)] flex flex-col justify-between backdrop-blur-2xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Dispatch Direct Note
                    </h3>
                    <p className="text-xs text-slate-400">
                      Sends an instant dispatch notification to Ram&apos;s workspace
                    </p>
                  </div>

                  <button
                    onClick={() => setIsFlipped(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-slate-300 text-xs hover:text-white cursor-pointer"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Flip Back</span>
                  </button>
                </div>

                {formSubmitted ? (
                  <div className="my-10 p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in zoom-in-95 duration-200">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mx-auto mb-3 text-emerald-400">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                    <p className="text-xs text-slate-300 mt-1 font-mono">
                      Thank you! Ram Singh Yadav will review your message and connect promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-cyan-500/30 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@company.com"
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-cyan-500/30 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Company / Organization</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Daimler / Tech Corp"
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-cyan-500/30 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Message / Role Requirements *</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Ram, we reviewed your work on Daimler DTFSA reporting and query optimization..."
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-cyan-500/30 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="send-message-submit-btn"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] cursor-pointer transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message to Ram Singh Yadav</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
