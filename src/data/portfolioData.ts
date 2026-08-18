import {
  SkillItem,
  ExperienceItem,
  ProjectItem,
  MetricCard,
  CertificationItem,
  EducationItem
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'RAM SINGH YADAV',
  role: 'Senior SQL Server & .NET Developer',
  experienceYears: 5,
  company: 'Infosys',
  client: 'Daimler (DTFSA)',
  location: 'Hyderabad, Telangana, India',
  phone: '+91 8318915988',
  email: 'ramsinghyadav.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ram-singh-yadav01/',
  github: 'https://github.com',
  status: 'Open to Senior Backend / Database Opportunities',
  bio: 'Results-driven SQL Server & .NET Developer with 5 years at Infosys, specializing in high-performance database design, complex T-SQL optimization, and enterprise C# automation. Proven record of reducing query execution times by 30%, automating mission-critical workflows by 70%, and leading successful on-premise to Azure cloud migrations for Daimler financial services.',
  tagline: 'Turning Data into Decisions | SQL × .NET × Azure',
  typewriterPhrases: [
    '30% Faster Queries via Index Tuning',
    '70% Manual Time Saved via C# Automation',
    '15% Fewer Defects across Production Builds',
    '99% On-Time SQL Agent Task Execution',
    '200+ Enterprise Users & Stakeholders Empowered'
  ]
};

export const METRICS_DATA: MetricCard[] = [
  {
    id: 'query-speed',
    value: '30%',
    numericTarget: 30,
    suffix: '%',
    label: 'Query Latency Reduction',
    sublabel: 'Optimized 40+ high-traffic stored procedures & indexing strategies',
    icon: 'Zap',
    category: 'Performance',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'automation-time',
    value: '70%',
    numericTarget: 70,
    suffix: '%',
    label: 'Manual Processing Saved',
    sublabel: 'Custom C# report engines & REST API multi-part upload automation',
    icon: 'Cpu',
    category: 'Efficiency',
    gradient: 'from-violet-500 to-indigo-600'
  },
  {
    id: 'users-served',
    value: '200+',
    numericTarget: 200,
    suffix: '+',
    label: 'Enterprise Users Served',
    sublabel: 'Supporting Daimler DTFSA financial applications & reports daily',
    icon: 'Users',
    category: 'Scale',
    gradient: 'from-emerald-400 to-cyan-500'
  },
  {
    id: 'stored-procedures',
    value: '40+',
    numericTarget: 40,
    suffix: '+',
    label: 'Stored Procedures Architected',
    sublabel: 'T-SQL execution plans, schema evolution & zero-defect tuning',
    icon: 'Database',
    category: 'Architecture',
    gradient: 'from-amber-400 to-orange-500'
  },
  {
    id: 'job-completion',
    value: '99%',
    numericTarget: 99,
    suffix: '%',
    label: 'SQL Agent Job Success',
    sublabel: 'Automated multi-step jobs with proactive failure alerting',
    icon: 'CheckCircle2',
    category: 'Reliability',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    id: 'sla-compliance',
    value: '95%',
    numericTarget: 95,
    suffix: '%',
    label: 'SLA Compliance Maintained',
    sublabel: 'Resolved 200+ incidents, changes and feature tickets cleanly',
    icon: 'ShieldCheck',
    category: 'Operations',
    gradient: 'from-fuchsia-500 to-pink-500'
  },
  {
    id: 'defect-reduction',
    value: '15%',
    numericTarget: 15,
    suffix: '%',
    label: 'Defect Reduction Rate',
    sublabel: 'Early design reviews, boundary validations & ACID guardrails',
    icon: 'Sparkles',
    category: 'Quality',
    gradient: 'from-teal-400 to-emerald-500'
  },
  {
    id: 'l1-resolution',
    value: '85%',
    numericTarget: 85,
    suffix: '%',
    label: 'L1 Issues Resolved Autonomously',
    sublabel: 'Minimizing downtime with proactive root-cause investigations',
    icon: 'Terminal',
    category: 'Support',
    gradient: 'from-sky-400 to-indigo-500'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'tsql-procedures',
    name: 'T-SQL & Stored Procedures',
    category: 'database',
    level: 96,
    proficiency: 'Expert',
    icon: 'Database',
    querySnippet: "SELECT [ProcName], [ExecutionTimeMs] FROM sys.dm_exec_procedure_stats WHERE [TotalWorkerTime] = 'Optimal';",
    description: 'Advanced T-SQL scripting, procedural logic, CTEs, dynamic SQL, transaction management, and execution plan optimization.',
    yearsOfExp: 5
  },
  {
    id: 'sql-optimization',
    name: 'SQL Query Optimization & Indexing',
    category: 'database',
    level: 94,
    proficiency: 'Expert',
    icon: 'Zap',
    querySnippet: "CREATE NONCLUSTERED INDEX IX_Customer_Status ON tbl_Transactions(TenantID, Status) INCLUDE (Amount, CreatedAt);",
    description: 'Index defragmentation, clustered/non-clustered index tuning, query cost reduction, and deadlock elimination.',
    yearsOfExp: 5
  },
  {
    id: 'ssms-server-ops',
    name: 'SQL Server 2019 / SSMS v20',
    category: 'database',
    level: 95,
    proficiency: 'Expert',
    icon: 'Server',
    querySnippet: "EXEC msdb.dbo.sp_start_job @job_name = N'DTFSA_DailyReport_ETL_Sync';",
    description: 'Database administration, backup & disaster recovery protocols, tablespace design, SQL Server Agent automated scheduling.',
    yearsOfExp: 5
  },
  {
    id: 'ssis-etl',
    name: 'SSIS & ETL Pipelines',
    category: 'database',
    level: 88,
    proficiency: 'Advanced',
    icon: 'Shuffle',
    querySnippet: "MERGE INTO TargetTable AS T USING StagingTable AS S ON T.ID = S.ID WHEN MATCHED THEN UPDATE...",
    description: 'Designing data integration packages, transformation tasks, bulk staging ingestion, and automated data validation.',
    yearsOfExp: 4
  },
  {
    id: 'csharp-core',
    name: 'C# & .NET Core / .NET 4.5+',
    category: 'backend',
    level: 92,
    proficiency: 'Expert',
    icon: 'Code2',
    querySnippet: "public async Task<ReportResult> ProcessBatchAsync(CancellationToken token) => await _engine.ExecutePipelineAsync();",
    description: 'Object-Oriented Programming (OOPS), asynchronous processing, dependency injection, and clean architectural design.',
    yearsOfExp: 5
  },
  {
    id: 'aspnet-ado',
    name: 'ASP.NET Core & ADO.NET',
    category: 'backend',
    level: 90,
    proficiency: 'Expert',
    icon: 'Globe',
    querySnippet: "using var conn = new SqlConnection(_connString); await conn.OpenAsync(); using var cmd = conn.CreateCommand();",
    description: 'High-throughput database connectivity, microservice endpoints, connection pooling, and resilient data access layers.',
    yearsOfExp: 4
  },
  {
    id: 'linq-data',
    name: 'LINQ & Entity Modeling',
    category: 'backend',
    level: 91,
    proficiency: 'Expert',
    icon: 'Filter',
    querySnippet: "var reports = await _context.Reports.Where(r => r.IsActive).OrderByDescending(r => r.GeneratedDate).ToListAsync();",
    description: 'Fluent LINQ querying, expression tree construction, projection mapping, and memory-efficient enumerable operations.',
    yearsOfExp: 5
  },
  {
    id: 'devexpress-reports',
    name: 'DevExpress (XtraReports / Grid)',
    category: 'backend',
    level: 90,
    proficiency: 'Expert',
    icon: 'FileSpreadsheet',
    querySnippet: "var report = new XtraReportDocument(); report.DataSource = sqlDataset; report.ExportToPdf(stream);",
    description: 'Enterprise PDF generation, dynamic tabular master-detail grids, contract-based templates, and WinForms data controls.',
    yearsOfExp: 4
  },
  {
    id: 'azure-cloud',
    name: 'Azure Cloud & DB Migration',
    category: 'cloud_tools',
    level: 86,
    proficiency: 'Advanced',
    icon: 'Cloud',
    querySnippet: "az sql db create --resource-group DTFSA-Prod --server dtfsa-sql-svr --name ReportingDB --service-objective S3",
    description: 'Migrating legacy on-premise SQL databases and .NET applications into Azure cloud infrastructure with minimal downtime.',
    yearsOfExp: 3
  },
  {
    id: 'servicenow-ops',
    name: 'ServiceNow Administration & ITSM',
    category: 'cloud_tools',
    level: 89,
    proficiency: 'Advanced',
    icon: 'Shield',
    querySnippet: "SELECT [IncidentNumber], [SLA_Status], [ResolvedTime] FROM ServiceNow_Feeds WHERE [SLA_Compliance] >= 0.95;",
    description: 'Certified ServiceNow Administrator, incident & change management, SLA tracking, root cause analysis, production support.',
    yearsOfExp: 4
  },
  {
    id: 'rest-api-integrations',
    name: 'REST API & Multipart Integration',
    category: 'architecture',
    level: 91,
    proficiency: 'Expert',
    icon: 'Radio',
    querySnippet: "using var content = new MultipartFormDataContent(); content.Add(new ByteArrayContent(pdfBytes), 'file', fileName);",
    description: 'Custom API client engines, OAuth/Token authentication, exponential retry policies, and automated webhook triggers.',
    yearsOfExp: 4
  },
  {
    id: 'db-architecture',
    name: 'Database Schema & Tablespaces',
    category: 'architecture',
    level: 93,
    proficiency: 'Expert',
    icon: 'Layers',
    querySnippet: "ALTER DATABASE ProductionDB ADD FILEGROUP FG_HistoricalRecords_2024;",
    description: 'Relational data modeling, ACID transactions, partitioning, audit trails, and referential integrity for 200+ concurrent users.',
    yearsOfExp: 5
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-senior-system-associate',
    role: 'Senior System Associate',
    company: 'Infosys',
    location: 'Hyderabad, Telangana, India',
    period: 'April 2023 — Present',
    startDate: '2023-04',
    endDate: 'Present',
    isCurrent: true,
    summary: 'Leading mission-critical database engineering and C# application development for Daimler Financial Services (DTFSA), establishing robust data architectures and automated reporting engines.',
    highlights: [
      'Led regular code and design reviews, identifying architectural bottlenecks and potential defects early, cutting overall release defects by 15%.',
      'Architected and implemented enterprise database schemas, tablespaces, and partitioning strategies maintaining strict data integrity for 200+ concurrent enterprise users.',
      'Independently engineered a C# automation tool that generates 5 daily business-critical reports and dispatches them via REST APIs, slashing manual operational effort by 70% with 100% data fidelity.',
      'Mentored junior developers on T-SQL query optimization, execution plan analysis, and indexing best practices.'
    ],
    metrics: [
      { label: 'Defect Reduction', value: '15%', color: 'text-cyan-400' },
      { label: 'Time Saved', value: '70%', color: 'text-violet-400' },
      { label: 'User Base', value: '200+', color: 'text-emerald-400' }
    ],
    techStack: ['SQL Server 2019', 'T-SQL', 'C#', '.NET Core', 'Azure SQL', 'DevExpress', 'REST APIs', 'ADO.NET']
  },
  {
    id: 'exp-system-associate',
    role: 'System Associate',
    company: 'Infosys',
    location: 'Hyderabad, Telangana, India',
    period: 'January 2023 — March 2023',
    startDate: '2023-01',
    endDate: '2023-03',
    isCurrent: false,
    summary: 'Spearheaded database schema evolution, stored procedure refactoring, and automated SQL Server Agent jobs for core financial workloads.',
    highlights: [
      'Engineered and optimized 40+ complex stored procedures, eliminating nested loops and subquery bottlenecks to achieve 20% faster query execution.',
      'Configured 5+ SQL Server Agent Jobs with fault-tolerant multi-step schedules, retry policies, and automated alerting, delivering a 99% on-time execution rate.',
      'Automated job health and execution status communications for 200+ stakeholders, eliminating manual email check-ins and operational overhead.',
      'Performed deep root-cause analysis (RCA) on recurring execution failures, resolving blocking issues and reducing overall job failures by 35%.'
    ],
    metrics: [
      { label: 'Query Speedup', value: '20%', color: 'text-cyan-400' },
      { label: 'Job Success', value: '99%', color: 'text-emerald-400' },
      { label: 'Failures Reduced', value: '35%', color: 'text-violet-400' }
    ],
    techStack: ['T-SQL', 'SQL Server Agent', 'Performance Tuning', 'SSMS', 'C#', 'Stored Procedures']
  },
  {
    id: 'exp-operations-executive',
    role: 'Operations Executive',
    company: 'Infosys',
    location: 'Hyderabad, Telangana, India',
    period: 'July 2021 — December 2022',
    startDate: '2021-07',
    endDate: '2022-12',
    isCurrent: false,
    summary: 'Delivered high-tier production operations, ITIL incident resolution, and bug fixes for Daimler enterprise infrastructure, ensuring rigorous SLA compliance.',
    highlights: [
      'Resolved 200+ incidents, standard changes, and urgent feature requests with a 95% SLA compliance benchmark, ensuring uninterrupted business continuity.',
      'Provided expert L1/L2 support, resolving 85% of complex user issues autonomously to minimize production system downtime.',
      'Analyzed repetitive issue telemetry and shared architectural feedback with engineering leads, directly influencing 3 major product backlog items.',
      'Partnered closely with development squads during release deployments, achieving a 25% decrease in post-release operational escalations.'
    ],
    metrics: [
      { label: 'SLA Met', value: '95%', color: 'text-cyan-400' },
      { label: 'Autonomous Fixes', value: '85%', color: 'text-emerald-400' },
      { label: 'Escalations Cut', value: '25%', color: 'text-violet-400' }
    ],
    techStack: ['ServiceNow', 'Incident Management', 'SQL Diagnostics', 'Production Support', 'Release Management']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'rns-reporting-azure',
    title: 'RnS Reporting Application & Azure Cloud Migration',
    client: 'Daimler (DTFSA)',
    category: 'Cloud Migration',
    shortDesc: 'Modernized legacy on-premise financial reporting infrastructure into a high-throughput Azure Cloud web application using ASP.NET Core & Azure SQL.',
    fullDesc: 'Daimler Trucks Financial Services Africa (DTFSA) relied on legacy desktop reporting systems built on .NET Framework 4.5. Ram spearheaded the end-to-end database and application migration into Microsoft Azure Cloud, re-architecting data layers with ADO.NET and modern C# web services.',
    highlights: [
      'Led zero-downtime migration of multi-gigabyte financial databases from on-premise SQL Server to Azure Cloud SQL.',
      'Transformed desktop-bound client reporting routines into responsive, cloud-hosted ASP.NET Core web microservices.',
      'Implemented ADO.NET streaming data readers to optimize heavy financial ledger calculations and query responsiveness.',
      'Configured automated CI/CD deployment pipelines and role-based Azure Active Directory access.'
    ],
    architecture: {
      frontend: 'ASP.NET Core Web UI & Razor Views',
      backend: 'C# .NET Core & ADO.NET Data Services',
      database: 'Azure SQL Database / SQL Server 2019',
      cloud: 'Microsoft Azure App Services & Virtual Network',
      protocols: 'HTTPS / TLS 1.3 / TDS Protocol'
    },
    sqlHighlights: 'Re-indexed 50+ relational tables for Azure SQL pricing tiers; optimized memory-optimized temp tables to prevent throttle caps.',
    metrics: [
      { label: 'Cloud Migration', value: '100% On-Time' },
      { label: 'Query Performance', value: '35% Faster' }
    ],
    techStack: ['.NET Framework 4.5', 'ASP.NET Core', 'C# 5.0 / 8.0', 'Azure Cloud', 'SQL Server 2019', 'ADO.NET'],
    mockupType: 'dashboard',
    featured: true
  },
  {
    id: 'bamic-csv-ingestion',
    title: 'BAMIC Automated CSV Data Ingestion & Audit Pipeline',
    client: 'Daimler (DTFSA)',
    category: 'Automation & ETL',
    shortDesc: 'High-speed backend CSV parsing engine with transactional validation, comprehensive upload logging, and relational SQL Server persistence.',
    fullDesc: 'Engineered a specialized backend data ingestion pipeline for Daimler automotive telemetry and billing feeds. The system autonomously parses multi-column CSV datasets, validates field constraints with strict schema assertions, records detailed audit trails, and commits bulk data within atomic transactions.',
    highlights: [
      'Constructed memory-efficient streaming CSV parser handling thousands of raw records without memory leaks.',
      'Implemented automated error reconciliation and bad-record isolation tables for failed rows.',
      'Engineered structured transaction logging capturing user metadata, timestamps, row counts, and checksum hashes.',
      'Designed automated notification alerts triggering upon ingestion pipeline state changes.'
    ],
    architecture: {
      backend: 'C# .NET Ingestion Daemon & File System Watcher',
      database: 'SQL Server 2019 with Staging & Production Partitioning',
      protocols: 'ACID Transactions / Bulk Copy Operations'
    },
    sqlHighlights: 'Utilized SQL Server SqlBulkCopy with optimized batch size of 5,000 rows to achieve sub-second ingestion rates.',
    metrics: [
      { label: 'Ingestion Latency', value: '< 2.5s' },
      { label: 'Data Accuracy', value: '99.99%' }
    ],
    techStack: ['C#', 'SQL Server', 'T-SQL', 'Bulk Operations', 'File I/O Stream', 'Logging & Auditing'],
    mockupType: 'terminal',
    featured: true
  },
  {
    id: 'stationery-report-automation',
    title: 'Enterprise Stationery Report Automation System',
    client: 'Daimler (DTFSA)',
    category: 'Enterprise Reporting',
    shortDesc: 'End-to-end bulk PDF contract and stationery generation suite utilizing DevExpress XtraReports, WinForms, and dynamic T-SQL.',
    fullDesc: 'Automated Daimler customer contract and stationery documentation generation. The system replaces error-prone manual document assembly with an automated C# Windows Forms application that queries live customer databases, formats dynamic legal layouts, and compiles mass PDF batches for distribution.',
    highlights: [
      'Designed custom reporting templates with DevExpress XtraReports for pixel-perfect PDF rendering.',
      'Engineered dynamic SQL query generation modules accommodating varying dealership contract rules.',
      'Eliminated hundreds of hours of monthly manual document creation, slashing turnaround times from days to minutes.',
      'Integrated robust logging and exception handling safeguarding against corrupted customer datasets.'
    ],
    architecture: {
      frontend: 'WinForms & DevExpress XtraReport Designers',
      backend: 'C# Report Engine & Dynamic Query Builder',
      database: 'SQL Server 2019 (Dynamic Views & Procedures)',
      protocols: 'Local Spooler / PDF Streaming'
    },
    sqlHighlights: 'Crafted dynamic stored procedures utilizing PIVOT and JSON serialization for complex multi-table document data.',
    metrics: [
      { label: 'Manual Effort Cut', value: '70%' },
      { label: 'Daily Reports', value: '500+ PDFs' }
    ],
    techStack: ['C#', 'WinForms', 'DevExpress XtraReports', 'SQL Server', 'T-SQL Dynamic Queries'],
    mockupType: 'reports',
    featured: true
  },
  {
    id: 'api-report-integration',
    title: 'Automated Report Processing & REST API Integration System',
    client: 'Daimler (DTFSA)',
    category: 'API Systems',
    shortDesc: 'Console-based automation engine for bulk financial report dispatch via REST APIs with retry policies, duplicate guards, and email alerts.',
    fullDesc: 'Created an autonomous C# / .NET console application responsible for scheduling, validating, and uploading bulk financial dossiers to Daimler external partner endpoints via REST APIs. Incorporates multipart payloads, exponential backoff retries, and comprehensive stakeholder alerts.',
    highlights: [
      'Developed resilient API client handling OAuth tokens, multipart payloads, and rate-limiting throttling.',
      'Engineered SQL-based upload history tracking preventing duplicate file uploads with SHA-256 fingerprinting.',
      'Integrated automated SMTP email notification workflows alerting stakeholders with delivery status manifests.',
      'Implemented robust fallback queues ensuring zero data loss during upstream network outages.'
    ],
    architecture: {
      backend: 'C# Console Automation Daemon & HttpClient Factory',
      database: 'SQL Server 2019 (Audit Tables & Retry Queues)',
      protocols: 'REST / Multipart-Form / SMTP Notifications'
    },
    sqlHighlights: 'Built transactional queue table with row-level locks (UPDLOCK, READPAST) for high-concurrency worker dispatches.',
    metrics: [
      { label: 'API Reliability', value: '99.9%' },
      { label: 'Daily Uploads', value: '100% Automated' }
    ],
    techStack: ['C#', '.NET Framework', 'SQL Server', 'REST APIs', 'Multipart Uploads', 'SMTP MailKit'],
    mockupType: 'api',
    featured: false
  },
  {
    id: 'customer-footnote-portal',
    title: 'Customer Footnote Management & Master Maintenance Portal',
    client: 'Daimler (DTFSA)',
    category: 'UI & Master Data',
    shortDesc: 'Master data management system featuring DevExpress Grid controls, transactional soft deletes, and granular validation for legal footnotes.',
    fullDesc: 'Developed a high-reliability internal master maintenance user interface allowing Daimler operations and compliance teams to manage legal disclaimers, loan footnotes, and regional terms with full versioning, historical audit trails, and soft-delete capabilities.',
    highlights: [
      'Built interactive UI with DevExpress Grid Controls featuring inline filtering, cell validation, and audit tracking.',
      'Implemented transaction-backed Add, Update, and Soft-Delete operations maintaining strict historical preservation.',
      'Enforced role-based data validation ensuring only authorized legal reviewers could promote footnotes to production.',
      'Designed optimized stored procedures delivering instant query results across millions of historical revisions.'
    ],
    architecture: {
      frontend: 'WinForms & DevExpress Advanced Grid Controls',
      backend: 'C# Business Logic Layer & Data Access Layer',
      database: 'SQL Server 2019 (Temporal Tables & Audit Triggers)',
      protocols: 'T-SQL Transactions & Optimistic Concurrency'
    },
    sqlHighlights: 'Utilized SQL Server temporal tables (SYSTEM_VERSIONING = ON) for point-in-time legal audit compliance.',
    metrics: [
      { label: 'Compliance Audit', value: '100% Passed' },
      { label: 'Query Latency', value: '< 100ms' }
    ],
    techStack: ['C#', 'WinForms', 'DevExpress Grid Controls', 'SQL Server', 'Stored Procedures', 'Temporal Tables'],
    mockupType: 'grid',
    featured: false
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-servicenow',
    title: 'Certified ServiceNow Administrator',
    issuer: 'Infosys / ServiceNow',
    year: '2023',
    code: 'INF-SN-CSA-2023',
    badgeType: 'servicenow',
    description: 'Credential in ServiceNow platform administration, incident management workflows, SLA configuration, access control (ACL), and ITSM system operations.',
    skillsVerified: ['ServiceNow Administration', 'ITSM Lifecycles', 'Incident & Change SLA', 'Access Control Rules', 'Platform Workflows']
  },
  {
    id: 'cert-csharp',
    title: 'C# Programming Certification',
    issuer: 'Infosys Technologies',
    year: '2021',
    code: 'INF-CS-PROG-2021',
    badgeType: 'csharp',
    description: 'Comprehensive certification covering C# language fundamentals, Object-Oriented Programming (OOPS), asynchronous tasks, memory management, and LINQ.',
    skillsVerified: ['Object-Oriented Design', 'Asynchronous Programming', 'LINQ & Collections', 'Exception Handling', 'Design Patterns']
  },
  {
    id: 'cert-bizcom',
    title: 'Certified in Business Communication Level 5',
    issuer: 'Infosys Technologies',
    year: '2021',
    code: 'INF-BC-LVL5-2021',
    badgeType: 'communication',
    description: 'Advanced professional communication credential demonstrating mastery in stakeholder management, client presentations, technical leadership, and cross-functional negotiation.',
    skillsVerified: ['Stakeholder Alignment', 'Cross-Functional Leadership', 'Technical Documentation', 'Client Negotiation', 'Team Collaboration']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-mca',
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Science & Software Engineering',
    institution: 'Chandigarh University',
    location: 'Chandigarh, Punjab, India',
    year: '2025',
    highlight: 'Advanced coursework in Cloud Architecture, Distributed Databases, Enterprise Software Design, and Scalable Backend Systems.',
    gpaOrStatus: 'Graduating 2025'
  },
  {
    id: 'edu-bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Applications & Database Systems',
    institution: 'Babu Banarasi Das University',
    location: 'Lucknow, Uttar Pradesh, India',
    year: '2021',
    highlight: 'Core foundation in Relational Database Management Systems (RDBMS), Data Structures, C++, Java, and Web Applications.',
    gpaOrStatus: 'Graduated with Distinction'
  }
];

export const SAMPLE_QUERIES = [
  {
    id: 'query-1',
    title: 'Profile Summary',
    query: "SELECT [Developer], [Role], [Total_YOE], [Primary_Client] FROM vw_RamSinghYadav_Profile;",
    description: 'Fetch executive bio, role, and current client engagement.'
  },
  {
    id: 'query-2',
    title: 'Top Performance Metrics',
    query: "SELECT [Metric], [Performance_Gain], [Category] FROM tbl_EngineeredImpact ORDER BY [Impact_Score] DESC;",
    description: 'View measured query speedups and automation savings.'
  },
  {
    id: 'query-3',
    title: 'Daimler Project Architecture',
    query: "SELECT [Project_Name], [Tech_Stack], [Cloud_Status] FROM tbl_DaimlerProjects WHERE [Client] = 'DTFSA';",
    description: 'Inspect all 5 enterprise Daimler DTFSA systems.'
  },
  {
    id: 'query-4',
    title: 'Technical Skills & Proficiencies',
    query: "SELECT [Skill_Name], [Category], [Proficiency_Level], [Years_Experience] FROM tbl_Skills WHERE [Proficiency_Level] = 'Expert';",
    description: 'Filter expert-level SQL and .NET technologies.'
  }
];
