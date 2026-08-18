export interface SkillItem {
  id: string;
  name: string;
  category: 'database' | 'backend' | 'cloud_tools' | 'architecture';
  level: number; // percentage e.g. 95
  proficiency: 'Expert' | 'Advanced' | 'Proficient';
  icon: string;
  querySnippet: string;
  description: string;
  yearsOfExp: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
    color: string;
  }[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string; // Daimler (DTFSA)
  category: 'Cloud Migration' | 'Automation & ETL' | 'Enterprise Reporting' | 'API Systems' | 'UI & Master Data';
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  architecture: {
    frontend?: string;
    backend: string;
    database: string;
    cloud?: string;
    protocols: string;
  };
  sqlHighlights: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  mockupType: 'dashboard' | 'terminal' | 'reports' | 'api' | 'grid';
  featured?: boolean;
}

export interface MetricCard {
  id: string;
  value: string;
  numericTarget: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: string;
  category: string;
  gradient: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  code: string;
  badgeType: 'servicenow' | 'csharp' | 'communication';
  description: string;
  skillsVerified: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  highlight: string;
  gpaOrStatus: string;
}
