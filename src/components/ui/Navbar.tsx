import React, { useState, useEffect } from 'react';
import { Database, Download, Terminal, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { downloadResumePdf } from '../../utils/generateResumePdf';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenSqlTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenSqlTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'impact', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Impact', href: '#impact', id: 'impact' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadResumePdf();
    } finally {
      setTimeout(() => setIsDownloading(false), 800);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0E27]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#0A0E27]/70 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Only */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="flex items-center group focus:outline-none"
            aria-label="Ram - Back to top"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#00E5FF] to-[#7C4DFF] rounded-md flex items-center justify-center font-black text-black text-sm shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:scale-105 transition-transform duration-300">
              R
            </div>
          </a>

          {/* Clean Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-[0.18em] font-bold text-gray-400">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] font-extrabold'
                      : 'hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Essential Clean CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSqlTerminal}
              id="nav-sql-studio-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-white/5 border border-white/10 text-gray-300 text-[11px] font-mono hover:text-[#00E5FF] hover:border-[#00E5FF]/40 hover:bg-white/10 transition-all cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>SQL Studio</span>
            </button>

            <button
              onClick={handleDownload}
              id="nav-resume-btn"
              disabled={isDownloading}
              className="px-4 py-1.5 rounded-sm bg-[#00E5FF] text-[#0A0E27] text-[11px] font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:brightness-110 transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-70"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? 'Downloading...' : 'Resume'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleDownload}
              className="p-2 rounded bg-white/5 border border-white/10 text-[#00E5FF] text-xs"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle"
              className="p-2 rounded bg-white/5 border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E27]/98 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded bg-white/5 border border-white/10 text-gray-200 text-xs font-mono uppercase tracking-wider hover:text-[#00E5FF] hover:border-[#00E5FF]/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSqlTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded bg-white/5 border border-white/10 text-[#00E5FF] text-xs font-mono"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch SQL Studio</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownload();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded bg-[#00E5FF] text-[#0A0E27] text-xs font-bold uppercase tracking-wider"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
