export interface Fortune500Company {
  id: string;
  name: string;
  ticker?: string;
  industry: 'Tech & Cloud' | 'Consulting & Strategy' | 'Banking & Finance' | 'Consumer Goods (FMCG)' | 'Telecom & Hardware';
  atsSystem: 'Workday' | 'Greenhouse' | 'Lever' | 'Taleo' | 'Custom / In-house';
  careersUrl: string;
  searchTips: string;
  keySkills: string[];
  headquarters: string;
  globalPresence: string;
  applicationAdvice: string;
}

export const FORTUNE_500_COMPANIES: Fortune500Company[] = [
  {
    id: 'google',
    name: 'Google (Alphabet)',
    ticker: 'GOOGL',
    industry: 'Tech & Cloud',
    atsSystem: 'Custom / In-house',
    careersUrl: 'https://www.google.com/about/careers/applications/jobs/results/',
    searchTips: 'Filter by Remote or EMEA/Asia-Pacific. Focus on Software Engineering, Cloud Architect, Data & AI roles.',
    keySkills: ['Distributed Systems', 'Go / C++ / Python', 'Cloud Infrastructure (GCP)', 'Data Structures & Algorithms'],
    headquarters: 'Mountain View, CA, USA',
    globalPresence: 'Active remote and regional offices worldwide',
    applicationAdvice: 'Strictly follow Google’s XYZ formula: "Accomplished [X] as measured by [Y] by doing [Z]". Keep to 1 page.',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    ticker: 'MSFT',
    industry: 'Tech & Cloud',
    atsSystem: 'Custom / In-house',
    careersUrl: 'https://careers.microsoft.com/us/en',
    searchTips: 'Search for Azure Cloud, C#, TypeScript, Microsoft 365, and AI platform engineering.',
    keySkills: ['Azure Cloud', 'C# / .NET', 'TypeScript / React', 'Enterprise Solutions', 'System Design'],
    headquarters: 'Redmond, WA, USA',
    globalPresence: 'Worldwide engineering centers & Microsoft for Startups hubs',
    applicationAdvice: 'Highlight impact on enterprise scalability, customer obsession, and cross-functional leadership.',
  },
  {
    id: 'amazon',
    name: 'Amazon / AWS',
    ticker: 'AMZN',
    industry: 'Tech & Cloud',
    atsSystem: 'Custom / In-house',
    careersUrl: 'https://www.amazon.jobs/en/',
    searchTips: 'Look for AWS Cloud Support, Software Development Engineer (SDE I/II), and Solutions Architecture.',
    keySkills: ['AWS Services', 'Java / Python', 'High-Scale Distributed Systems', 'Leadership Principles'],
    headquarters: 'Seattle, WA, USA',
    globalPresence: 'Massive remote workforce and global AWS regional centers',
    applicationAdvice: 'Align experience bullets with Amazon’s 16 Leadership Principles (e.g., Customer Obsession, Deliver Results).',
  },
  {
    id: 'apple',
    name: 'Apple',
    ticker: 'AAPL',
    industry: 'Tech & Cloud',
    atsSystem: 'Custom / In-house',
    careersUrl: 'https://www.apple.com/careers/',
    searchTips: 'Search for iOS, Swift, Hardware Engineering, Machine Learning, and Operations.',
    keySkills: ['Swift / Objective-C', 'System Architecture', 'Product Design & UI/UX', 'Performance Optimization'],
    headquarters: 'Cupertino, CA, USA',
    globalPresence: 'Global retail, engineering, and supply chain operations',
    applicationAdvice: 'Emphasize pixel-perfect craftsmanship, user privacy, and zero-defect execution in your achievements.',
  },
  {
    id: 'meta',
    name: 'Meta (Facebook)',
    ticker: 'META',
    industry: 'Tech & Cloud',
    atsSystem: 'Custom / In-house',
    careersUrl: 'https://www.metacareers.com/',
    searchTips: 'Look for Product Engineer, Infrastructure, React/PyTorch AI, and Production Engineering.',
    keySkills: ['React.js / GraphQL', 'PyTorch / Python', 'Large Scale Infrastructure', 'Metrics Optimization'],
    headquarters: 'Menlo Park, CA, USA',
    globalPresence: 'Global hubs with extensive remote hiring programs',
    applicationAdvice: 'Demonstrate rapid iteration, moving fast with high quality, and driving measurable user growth.',
  },
  {
    id: 'mckinsey',
    name: 'McKinsey & Company',
    industry: 'Consulting & Strategy',
    atsSystem: 'Taleo',
    careersUrl: 'https://www.mckinsey.com/careers/search-jobs',
    searchTips: 'Search for Business Analyst, Associate, Junior Consultant, and QuantumBlack AI specialists.',
    keySkills: ['Quantitative Analysis', 'Strategic Problem Solving', 'Financial Modeling', 'Executive Presentation'],
    headquarters: 'New York, NY, USA',
    globalPresence: 'Over 130 cities in 65+ countries',
    applicationAdvice: 'Quantify every project with business outcome metrics (e.g., $ savings, EBITDA lift, efficiency %).',
  },
  {
    id: 'goldman-sachs',
    name: 'Goldman Sachs',
    ticker: 'GS',
    industry: 'Banking & Finance',
    atsSystem: 'Workday',
    careersUrl: 'https://www.goldmansachs.com/careers/',
    searchTips: 'Search for Engineering Analyst, Global Markets, Asset Management, and Quantitative Strategy.',
    keySkills: ['Algorithmic Trading', 'Java / Python / C++', 'Financial Engineering', 'Risk & Compliance'],
    headquarters: 'New York, NY, USA',
    globalPresence: 'Major global financial centers in Americas, EMEA, and Asia',
    applicationAdvice: 'Emphasize mathematical rigor, low-latency performance, and integrity under high-stakes environments.',
  },
  {
    id: 'unilever',
    name: 'Unilever',
    ticker: 'UL',
    industry: 'Consumer Goods (FMCG)',
    atsSystem: 'Workday',
    careersUrl: 'https://careers.unilever.com/',
    searchTips: 'Explore Unilever Future Leaders Programme (UFLP), Supply Chain, and Digital Commerce.',
    keySkills: ['Supply Chain Logistics', 'Brand Strategy', 'Data Analytics (SAP/PowerBI)', 'FMCG Distribution'],
    headquarters: 'London, United Kingdom',
    globalPresence: 'Present in over 190 countries including extensive operations in South Asia',
    applicationAdvice: 'Highlight sustainable growth, cross-functional leadership, and agile supply chain turnarounds.',
  },
  {
    id: 'pg',
    name: 'Procter & Gamble (P&G)',
    ticker: 'PG',
    industry: 'Consumer Goods (FMCG)',
    atsSystem: 'Workday',
    careersUrl: 'https://www.pgcareers.com/',
    searchTips: 'Search for Brand Management, IT Solutions, and Product Supply Management.',
    keySkills: ['Process Improvement (Six Sigma)', 'Operations & Planning', 'Data-driven Marketing', 'Project Management'],
    headquarters: 'Cincinnati, OH, USA',
    globalPresence: '70+ countries with regional manufacturing and corporate hubs',
    applicationAdvice: 'P&G values Peak Performance indicators: leadership, strategic thinking, and innovative execution.',
  },
  {
    id: 'jpmorgan',
    name: 'JPMorgan Chase & Co.',
    ticker: 'JPM',
    industry: 'Banking & Finance',
    atsSystem: 'Workday',
    careersUrl: 'https://careers.jpmorgan.com/global/en/home',
    searchTips: 'Search for Software Engineering, Cyber Security, Cloud Operations, and Risk Analysts.',
    keySkills: ['Enterprise Java / Spring Boot', 'Cloud Microservices', 'Fintech Security', 'Agile Methodologies'],
    headquarters: 'New York, NY, USA',
    globalPresence: 'Operating across 100+ countries with large technology development centers',
    applicationAdvice: 'Ensure your resume displays strict adherence to regulatory standards, security, and measurable ROI.',
  },
  {
    id: 'ibm',
    name: 'IBM',
    ticker: 'IBM',
    industry: 'Tech & Cloud',
    atsSystem: 'BrassRing',
    careersUrl: 'https://www.ibm.com/careers',
    searchTips: 'Search for Red Hat OpenShift, IBM Cloud, Hybrid Cloud Architecture, and Data Science.',
    keySkills: ['Hybrid Cloud / Kubernetes', 'Python / AI Models', 'Linux Administration', 'Enterprise Consulting'],
    headquarters: 'Armonk, NY, USA',
    globalPresence: 'Over 170 countries worldwide',
    applicationAdvice: 'Showcase certifications (Red Hat, AWS, Azure, IBM) and enterprise client delivery track records.',
  },
  {
    id: 'deloitte',
    name: 'Deloitte',
    industry: 'Consulting & Strategy',
    atsSystem: 'Taleo',
    careersUrl: 'https://www2.deloitte.com/global/en/careers/careers.html',
    searchTips: 'Search for Cloud Transformation, Cyber Risk, Technology Strategy, and Analytics.',
    keySkills: ['IT Audit & Risk', 'ERP / Cloud Migration', 'Business Analysis', 'Stakeholder Engagement'],
    headquarters: 'London, United Kingdom',
    globalPresence: 'Offices in more than 150 countries and territories',
    applicationAdvice: 'Detail client engagement scopes, technology modernizations, and risk mitigation methodologies.',
  },
  {
    id: 'cisco',
    name: 'Cisco Systems',
    ticker: 'CSCO',
    industry: 'Telecom & Hardware',
    atsSystem: 'Workday',
    careersUrl: 'https://jobs.cisco.com/',
    searchTips: 'Search for Network Software Engineer, Cyber Security (Duo/Splunk), and Cloud Networking.',
    keySkills: ['CCNA / CCNP Protocols', 'Network Automation (Python)', 'Cyber Security', 'DevOps & CI/CD'],
    headquarters: 'San Jose, CA, USA',
    globalPresence: 'Extensive global network supporting Fortune 500 digital backbones',
    applicationAdvice: 'Feature networking protocols, automation scripts, and certified infrastructure experience.',
  },
  {
    id: 'nestle',
    name: 'Nestlé',
    industry: 'Consumer Goods (FMCG)',
    atsSystem: 'Workday',
    careersUrl: 'https://www.nestle.com/jobs',
    searchTips: 'Search for IT Business Solutions, Supply Chain Optimization, and Production Engineering.',
    keySkills: ['Supply Chain Excellence', 'Quality Assurance', 'ERP Systems', 'Consumer Insights'],
    headquarters: 'Vevey, Switzerland',
    globalPresence: 'World’s largest food and beverage company with factories and sales offices worldwide',
    applicationAdvice: 'Focus on supply chain resilience, cost reductions, and operational excellence achievements.',
  },
  {
    id: 'oracle',
    name: 'Oracle',
    ticker: 'ORCL',
    industry: 'Tech & Cloud',
    atsSystem: 'Taleo',
    careersUrl: 'https://www.oracle.com/corporate/careers/',
    searchTips: 'Search for OCI (Oracle Cloud Infrastructure), Database Engineering, and Java Core.',
    keySkills: ['Oracle Cloud (OCI)', 'SQL & Relational DBs', 'Java Ecosystem', 'High Availability Architectures'],
    headquarters: 'Austin, TX, USA',
    globalPresence: 'Global database and enterprise software titan',
    applicationAdvice: 'Detail database throughput, replication latency improvements, and enterprise cloud migrations.',
  },
  {
    id: 'siemens',
    name: 'Siemens',
    industry: 'Telecom & Hardware',
    atsSystem: 'Workday',
    careersUrl: 'https://www.siemens.com/global/en/company/jobs.html',
    searchTips: 'Search for Industrial IoT, Automation Engineering, Smart Infrastructure, and Software.',
    keySkills: ['PLC & SCADA', 'Industrial Automation', 'Embedded Systems', 'IoT Architectures'],
    headquarters: 'Munich, Germany',
    globalPresence: 'Active in 190+ countries across industrial, energy, and healthcare sectors',
    applicationAdvice: 'Emphasize engineering precision, safety compliance, and energy-efficiency savings.',
  },
];

export const FORTUNE_500_POWER_VERBS = [
  { category: 'Leadership & Strategy', verbs: ['Spearheaded', 'Orchestrated', 'Championed', 'Mobilized', 'Directed', 'Pioneered', 'Restructured'] },
  { category: 'Engineering & Technical', verbs: ['Architected', 'Engineered', 'Developed', 'Deployed', 'Refactored', 'Automated', 'Provisioned'] },
  { category: 'Scale & Optimization', verbs: ['Accelerated', 'Optimized', 'Streamlined', 'Scaled', 'Condensed', 'Maximized', 'Augmented'] },
  { category: 'Financial & Metrics', verbs: ['Decreased', 'Generated', 'Eliminated', 'Negotiated', 'Saved', 'Expanded', 'Captured'] },
];

export const OUTREACH_TEMPLATES = [
  {
    title: 'LinkedIn Recruiter Direct InMail',
    subject: 'Application & Interest: {RoleTitle} - {FullName}',
    text: `Hi {RecruiterName},

I recently submitted my application for the {RoleTitle} position at {CompanyName} and wanted to reach out directly. 

With a strong background in {KeySkill1} and {KeySkill2}, I recently achieved {KeyAchievementMetric}. I am particularly drawn to {CompanyName}’s ongoing work in {DepartmentOrProject}.

I would welcome the opportunity to connect and discuss how my skill set can support your team's upcoming milestones. My resume is attached for reference.

Best regards,
{FullName}
{Email} | {Phone} | {LinkedInUrl}`,
  },
  {
    title: 'Hiring Manager Value-Proposition Email',
    subject: '{RoleTitle} Inquiry - How I can add immediate value to {CompanyName}',
    text: `Dear {HiringManagerName},

I hope this note finds you well. I follow {CompanyName}’s impressive strides in {IndustryOrDomain} and wanted to briefly share how my background aligns with your team's focus.

In my recent work, I:
• {BulletPoint1WithMetrics}
• {BulletPoint2WithMetrics}
• Led cross-functional initiatives utilizing {KeySkill1} and {KeySkill2}.

I have applied formally through your portal (Application ID / Ref). Would you be open to a 10-minute introductory conversation this week?

Thank you for your time and leadership.

Warm regards,
{FullName}
{PortfolioOrGithub}`,
  },
  {
    title: 'Alumni / Employee Referral Request',
    subject: 'Fellow {UniversityOrNetwork} Alum - Quick question on {CompanyName}',
    text: `Hi {ContactName},

I hope you're having a great week! I noticed your inspiring trajectory as a {ContactRole} at {CompanyName} and wanted to connect as a fellow {UniversityOrNetwork} alum.

I am preparing to apply for the {RoleTitle} opening at {CompanyName}. Given your firsthand experience there, I would deeply appreciate any brief insights you might share about the team culture or interview priorities.

If you believe my profile is a solid fit, I would also be honored if you would consider referring my application internally.

Thanks so much for your time and guidance!

Best,
{FullName}
{LinkedInUrl}`,
  },
];
