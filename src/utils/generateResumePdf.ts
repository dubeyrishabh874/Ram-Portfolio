import { jsPDF } from 'jspdf';
import {
  PERSONAL_INFO,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA
} from '../data/portfolioData';

export const downloadResumePdf = async (): Promise<void> => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 14;
    const contentWidth = pageWidth - margin * 2;
    let y = 16;

    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > 280) {
        doc.addPage();
        y = 16;
      }
    };

    // Header - Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(10, 14, 39);
    doc.text(PERSONAL_INFO.name.toUpperCase(), margin, y);
    y += 6;

    // Subtitle / Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(0, 150, 180);
    doc.text('SENIOR SQL SERVER & .NET DEVELOPER (5 YEARS @ INFOSYS)', margin, y);
    y += 5;

    // Contact Information line
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(70, 75, 85);
    const contactLine = `${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.location} | linkedin.com/in/ram-singh-yadav01`;
    doc.text(contactLine, margin, y);
    y += 3;

    // Divider
    doc.setDrawColor(0, 180, 216);
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + contentWidth, y);
    y += 6;

    // Section 1: Professional Summary
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(10, 14, 39);
    doc.text('PROFESSIONAL SUMMARY', margin, y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 55, 65);
    const summaryLines = doc.splitTextToSize(PERSONAL_INFO.bio, contentWidth);
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 4 + 3;

    // Section 2: Core Technical Skills
    checkPageBreak(35);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(10, 14, 39);
    doc.text('CORE TECHNICAL SKILLS', margin, y);
    y += 4.5;

    const skillCategories = [
      {
        name: 'Database & SQL Server',
        skills: 'MS SQL Server (2014-2019), T-SQL, Stored Procedures, Index Tuning, Execution Plan Analysis, CTEs, Window Functions, SSIS, SSRS'
      },
      {
        name: 'Backend & .NET Ecosystem',
        skills: 'C#, .NET 8 / .NET Core, ASP.NET MVC, RESTful Web APIs, Entity Framework, LINQ, DevExpress XtraReports'
      },
      {
        name: 'Cloud & Infrastructure',
        skills: 'Microsoft Azure Cloud, SQL Azure, Blob Storage, AWS Fundamentals'
      },
      {
        name: 'ITSM & Enterprise Tooling',
        skills: 'ServiceNow (ITIL), SSMS, Visual Studio, Git, Bitbucket, Jira, Postman'
      }
    ];

    skillCategories.forEach(cat => {
      checkPageBreak(8);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(0, 120, 150);
      doc.text(`• ${cat.name}: `, margin, y);

      const titleWidth = doc.getTextWidth(`• ${cat.name}: `);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 55, 65);
      const skillText = doc.splitTextToSize(cat.skills, contentWidth - titleWidth);
      doc.text(skillText, margin + titleWidth, y);
      y += skillText.length * 4 + 1;
    });
    y += 3;

    // Section 3: Professional Experience
    checkPageBreak(40);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(10, 14, 39);
    doc.text('PROFESSIONAL EXPERIENCE', margin, y);
    y += 4.5;

    EXPERIENCE_DATA.forEach(exp => {
      checkPageBreak(30);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(10, 14, 39);
      doc.text(`${exp.role} — ${exp.company}`, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 105, 115);
      doc.text(`${exp.period} | ${exp.location}`, margin + contentWidth, y, { align: 'right' });
      y += 4;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 55, 65);
      exp.highlights.slice(0, 3).forEach(bullet => {
        checkPageBreak(8);
        const bulletLines = doc.splitTextToSize(`• ${bullet}`, contentWidth - 4);
        doc.text(bulletLines, margin + 2, y);
        y += bulletLines.length * 3.8;
      });
      y += 3;
    });

    // Section 4: Key Daimler (DTFSA) Projects
    checkPageBreak(35);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(10, 14, 39);
    doc.text('KEY ENTERPRISE PROJECTS (DAIMLER DTFSA)', margin, y);
    y += 4.5;

    PROJECTS_DATA.slice(0, 3).forEach(proj => {
      checkPageBreak(25);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(10, 14, 39);
      doc.text(proj.title, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(0, 140, 170);
      doc.text(`Tech: ${proj.techStack.slice(0, 5).join(', ')}`, margin + contentWidth, y, { align: 'right' });
      y += 4;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 55, 65);
      const descLines = doc.splitTextToSize(proj.shortDesc, contentWidth);
      doc.text(descLines, margin, y);
      y += descLines.length * 3.8;

      if (proj.metrics && proj.metrics.length > 0) {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(16, 120, 60);
        doc.text(`Impact: ${proj.metrics[0].label} (${proj.metrics[0].value})`, margin, y);
        y += 4.5;
      }
    });

    // Section 5: Certifications & Education
    checkPageBreak(30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(10, 14, 39);
    doc.text('EDUCATION & CERTIFICATIONS', margin, y);
    y += 4.5;

    // Education
    if (EDUCATION_DATA && EDUCATION_DATA.length > 0) {
      EDUCATION_DATA.forEach(edu => {
        checkPageBreak(10);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(10, 14, 39);
        doc.text(`${edu.degree} (${edu.year})`, margin, y);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(70, 75, 85);
        doc.text(`${edu.institution}`, margin + contentWidth, y, { align: 'right' });
        y += 4;
      });
    }

    // Certifications
    if (CERTIFICATIONS_DATA && CERTIFICATIONS_DATA.length > 0) {
      const certList = CERTIFICATIONS_DATA.map(c => `${c.title} (${c.issuer})`).join(' | ');
      const certLines = doc.splitTextToSize(`Certifications: ${certList}`, contentWidth);
      doc.text(certLines, margin, y);
    }

    // Trigger local download directly to computer
    doc.save('Ram_Singh_Yadav_Resume.pdf');
  } catch (error) {
    console.error('Error generating PDF with jsPDF, falling back to document print/save:', error);
    window.print();
  }
};
