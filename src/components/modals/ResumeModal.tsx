import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Building2,
  CheckCircle2,
  Calendar,
  Loader2
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, CERTIFICATIONS_DATA, EDUCATION_DATA } from '../../data/portfolioData';
import { downloadResumePdf } from '../../utils/generateResumePdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadResumePdf();
    } finally {
      setTimeout(() => setIsDownloading(false), 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0b1026] border border-cyan-500/30 p-4 sm:p-8 shadow-[0_0_60px_rgba(0,229,255,0.25)] text-left">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20 bg-[#0b1026]/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-display font-bold text-white text-base sm:text-lg">
              RAM SINGH YADAV — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              id="resume-download-pdf-btn"
              disabled={isDownloading}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00E5FF] text-[#0A0E27] text-xs font-bold font-mono hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] cursor-pointer transition-all disabled:opacity-70"
            >
              {isDownloading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
            </button>

            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono hover:bg-cyan-500/30 cursor-pointer transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save</span>
            </button>

            <button
              onClick={onClose}
              id="resume-close-btn"
              className="p-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-slate-400 hover:text-white cursor-pointer transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Paper */}
        <div className="bg-white text-slate-900 p-6 sm:p-10 rounded-xl shadow-2xl font-sans text-xs leading-relaxed max-w-3xl mx-auto selection:bg-cyan-200">
          {/* Header */}
          <div className="text-center pb-4 border-b border-slate-300">
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 font-serif">
              RAM SINGH YADAV
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-600 mt-1 font-mono">
              <span>{PERSONAL_INFO.phone}</span>
              <span>|</span>
              <span>{PERSONAL_INFO.email}</span>
              <span>|</span>
              <span>{PERSONAL_INFO.location}</span>
              <span>|</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1 font-serif">
              SUMMARY
            </h2>
            <p className="text-[11.5px] text-slate-800 leading-snug">
              SQL Server &amp; .Net Developer with 5 years at Infosys, specializing in database design, performance optimization, and automation. Proven ability to reduce query times by 30% and develop C# tools for report automation. Skilled in enhancing data integrity and streamlining operations to support business efficiency.
            </p>
          </div>

          {/* PROFESSIONAL EXPERIENCE */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2 font-serif">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-3">
              {/* Senior System Associate */}
              <div>
                <div className="flex justify-between items-baseline font-semibold text-[11.5px] text-slate-950">
                  <span>Senior System Associate | Infosys, Hyderabad</span>
                  <span className="font-normal text-slate-600">(April 2023– Present)</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 mt-1 text-[11px] text-slate-800">
                  <li>Led regular code and design reviews, identifying design gaps and potential defects early, which helped reduce overall defects by 15%.</li>
                  <li>Designed and implemented database schemas and tablespaces that supported data integrity for applications serving 200+ users.</li>
                  <li>Independently developed a C# automation tool that generated 5 daily business reports and automated uploads via API, reducing manual processing time by 70% and improving data accuracy.</li>
                </ul>
              </div>

              {/* System Associate */}
              <div>
                <div className="flex justify-between items-baseline font-semibold text-[11.5px] text-slate-950">
                  <span>System Associate | Infosys, Hyderabad</span>
                  <span className="font-normal text-slate-600">(Jan 2023– Mar 2023)</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 mt-1 text-[11px] text-slate-800">
                  <li>Owned development and optimization of 40+ stored procedures, managing schema evolution and delivering 20% faster data retrieval.</li>
                  <li>Configured 5+ SQL Server Agent Jobs with detailed schedules, multi-step processes, and notifications to ensure 99% on-time task completion.</li>
                  <li>Automated job status communications for 200+ stakeholders, significantly improving visibility and reducing manual operational follow-ups.</li>
                  <li>Proactively monitored and analyzed SQL job performance, performing root cause analysis to resolve scheduling and execution issues and reduce job failures by 35%.</li>
                </ul>
              </div>

              {/* Operations Executive */}
              <div>
                <div className="flex justify-between items-baseline font-semibold text-[11.5px] text-slate-950">
                  <span>Operations Executive | Infosys, Hyderabad</span>
                  <span className="font-normal text-slate-600">(Jul 2021 – Dec 2022)</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 mt-1 text-[11px] text-slate-800">
                  <li>Handled 200+ incidents, changes, and feature requests, achieving 95% SLA compliance and ensuring business continuity.</li>
                  <li>Delivered L1 support, resolving 85% of user issues independently, minimizing system downtime and boosting customer satisfaction.</li>
                  <li>Analyzed recurring issue patterns and shared insights with product teams, influencing 3 backlog items for improvement.</li>
                  <li>Collaborated with developers to ensure smooth deployment of fixes, reducing post-release escalations by 25%.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2 font-serif">
              PROJECTS
            </h2>

            <div className="space-y-3">
              <div>
                <div className="font-semibold text-[11.5px] text-slate-950">
                  • RnS Reporting Application | Daimler (DTFSA)
                </div>
                <ul className="list-disc list-outside pl-6 space-y-0.5 mt-0.5 text-[11px] text-slate-800">
                  <li>Developed and maintained legacy reporting application using .NET Framework 4.5, C# 5.0 &amp; SQL Server.</li>
                  <li>Led migration of legacy application to Azure Cloud.</li>
                  <li>Led migration of databases from on-premise to Azure Cloud using SQL Server.</li>
                  <li>Converted legacy application to cloud based Web Application leveraging ADO.NET, C# and ASP.NET Core.</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-[11.5px] text-slate-950">
                  • BAMIC Application | Daimler (DTFSA)
                </div>
                <ul className="list-disc list-outside pl-6 space-y-0.5 mt-0.5 text-[11px] text-slate-800">
                  <li>Created backend logic to parse uploaded CSV files, log the upload operations and store the data in SQL Server database.</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-[11.5px] text-slate-950">
                  • Enterprise Stationery Report Automation System | Daimler (DTFSA)
                </div>
                <ul className="list-disc list-outside pl-6 space-y-0.5 mt-0.5 text-[11px] text-slate-800">
                  <li>Designed and developed bulk stationery report generation modules using C#, WinForms, SQL Server, and DevExpress XtraReports.</li>
                  <li>Owned end-to-end automation of contract-based PDF report generation, reducing manual processing effort and improving efficiency.</li>
                  <li>Implemented dynamic SQL queries, dataset handling, logging, and exception management for reliable large-scale processing.</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-[11.5px] text-slate-950">
                  • Automated Report Processing &amp; API Integration System | Daimler (DTFSA)
                </div>
                <ul className="list-disc list-outside pl-6 space-y-0.5 mt-0.5 text-[11px] text-slate-800">
                  <li>Developed a console-based automation solution using C#, .NET Framework, SQL Server, and REST APIs to automate bulk report file uploads.</li>
                  <li>Implemented API authentication, multipart upload handling, retry mechanisms, logging, and email notification workflows.</li>
                  <li>Added SQL-based upload history tracking, duplicate validation, and automated stakeholder notifications.</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-[11.5px] text-slate-950">
                  • Customer Footnote Management Portal | Daimler (DTFSA)
                </div>
                <ul className="list-disc list-outside pl-6 space-y-0.5 mt-0.5 text-[11px] text-slate-800">
                  <li>Developed a master maintenance UI using C#, WinForms, DevExpress Grid Controls, and SQL Server.</li>
                  <li>Implemented add, update, and soft delete operations with transaction handling and validation logic.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS & TRAINING */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1 font-serif">
              CERTIFICATIONS &amp; TRAINING
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-0.5 text-[11px] text-slate-800">
              <li>Certified ServiceNow Administrator Infosys • 2023</li>
              <li>Basic C# Programming Infosys • 2021</li>
              <li>Certified in Business Communication Level 5 Infosys • 2021</li>
            </ul>
          </div>

          {/* SKILLS */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1 font-serif">
              SKILLS
            </h2>
            <p className="text-[11px] text-slate-800 mb-1">
              <strong>Technical Skills:</strong> SQL Server 2019 (T-SQL, SSMS v20) | Stored Procedures | SQL Optimization | Indexing | Production Support | Database Design | ServiceNow | ETL | SSIS | Azure | C# | OOPS | DevExpress Reporting (XtraReport, XtraForm) | .Net Framework | .Net Core | LINQ | Console App | Windows Forms | Database Backup | Performance Optimization | API Integration | Data Migration | Error Handling | Incident Management | Visual Studio 2019
            </p>
            <p className="text-[11px] text-slate-800">
              <strong>Soft Skills:</strong> Analytical Thinking | Communication | Leadership | Negotiation | Teamwork | Time Management | Prioritization
            </p>
          </div>

          {/* EDUCATION */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1 font-serif">
              EDUCATION
            </h2>
            <div className="space-y-1 text-[11px] text-slate-800">
              <div>
                <strong>MCA (Master of Computer Applications)</strong> | Chandigarh University | Chandigarh, Punjab, India | <strong>2025</strong>
              </div>
              <div>
                <strong>BCA (Bachelor of Computer Applications)</strong> | Babu Banarasi Das University | Lucknow, Uttar Pradesh, India | <strong>2021</strong>
              </div>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1 font-serif">
              LANGUAGES
            </h2>
            <p className="text-[11px] text-slate-800">
              English, Hindi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
