import { ResumeData } from '../types/resume';

export const SAMPLE_STS_CANDIDATE_RESUME: ResumeData = {
  fullName: 'Muhammad Farhan',
  fatherName: 'Abdul Rasheed Shaikh',
  cnic: '45504-1234567-1',
  email: 'farhan.sts.prep@gmail.com',
  phone: '+92 300 1234567',
  alternatePhone: '+92 333 7654321',
  address: 'House # 42, St. 3, Near Old Bus Stand',
  city: 'Sukkur',
  domicileDistrict: 'Sukkur (Rural)',
  province: 'Sindh',
  dob: '1998-04-15',
  gender: 'Male',
  maritalStatus: 'Single',
  religion: 'Islam',
  hafizEQuran: true,
  photoUrl: '',

  targetHeadline: 'Candidate for STS BPS 05–15 Screening / STEDA PST & JEST Teacher / Junior Clerk (BPS-11)',
  professionalSummary: 'Dedicated, detail-oriented candidate with a BS in Computer Science and certified STEDA Teaching License. Proven expertise in data entry, office administration, and computerized record-keeping. Seeking to contribute strong analytical, organizational, and pedagogical skills to public sector service in Sindh.',

  education: [
    {
      id: 'edu-1',
      degreeLevel: 'Bachelor (16 Years)',
      degreeTitle: 'BS in Computer Science (BSCS)',
      instituteOrBoard: 'Shah Abdul Latif University, Khairpur',
      passingYear: '2022',
      obtainedMarks: '3.45',
      totalMarks: '4.00',
      percentageOrCgpa: '86.2%',
      divisionOrGrade: '1st Division (A Grade)',
      majorSubjects: 'Database Systems, Data Communication, Office Automation, Software Eng.',
    },
    {
      id: 'edu-2',
      degreeLevel: 'Intermediate (HSSC)',
      degreeTitle: 'Pre-Engineering',
      instituteOrBoard: 'BISE Sukkur',
      passingYear: '2018',
      obtainedMarks: '870',
      totalMarks: '1100',
      percentageOrCgpa: '79.09%',
      divisionOrGrade: 'Grade A',
      majorSubjects: 'Physics, Chemistry, Mathematics',
    },
    {
      id: 'edu-3',
      degreeLevel: 'Matriculation (SSC)',
      degreeTitle: 'Science Group',
      instituteOrBoard: 'BISE Sukkur',
      passingYear: '2016',
      obtainedMarks: '745',
      totalMarks: '850',
      percentageOrCgpa: '87.65%',
      divisionOrGrade: 'Grade A-1',
      majorSubjects: 'Biology, Physics, Chemistry, Mathematics',
    },
  ],

  experience: [
    {
      id: 'exp-1',
      organization: 'District Education Office / Govt. High School',
      designation: 'Internee Computer Operator & Records Clerk',
      employmentType: 'Contract',
      location: 'Sukkur, Sindh',
      startDate: '2023-01',
      endDate: '2024-03',
      isCurrent: false,
      responsibilities: [
        'Maintained student enrollment databases, attendance ledgers, and official dispatch registers.',
        'Prepared monthly biometric staff reporting spreadsheets in MS Excel with 100% accuracy.',
        'Drafted official correspondence and notifications adhering to standard Secretariat manual formats.',
      ],
    },
    {
      id: 'exp-2',
      organization: 'Beacon Academy & Coaching Institute',
      designation: 'General Science & Math Instructor (Grades 6–10)',
      employmentType: 'Full-time',
      location: 'Sukkur, Sindh',
      startDate: '2022-06',
      endDate: '2022-12',
      isCurrent: false,
      responsibilities: [
        'Delivered Sindh Textbook Board aligned lectures in General Science, Mathematics, and Computer Studies.',
        'Designed weekly diagnostic tests modeled on Sukkur IBA STS screening test pattern.',
      ],
    },
  ],

  skills: [
    { id: 'sk-1', name: 'MS Office (Word, Excel, PowerPoint)', category: 'office', level: 'Expert' },
    { id: 'sk-2', name: 'Urdu & Sindhi InPage Typing (45+ WPM)', category: 'office', level: 'Expert' },
    { id: 'sk-3', name: 'English Typing Speed (50+ WPM)', category: 'office', level: 'Proficient' },
    { id: 'sk-4', name: 'Database Management & Data Entry', category: 'technical', level: 'Proficient' },
    { id: 'sk-5', name: 'Sindhi (Native)', category: 'language', level: 'Expert' },
    { id: 'sk-6', name: 'Urdu (Fluent - Written & Spoken)', category: 'language', level: 'Expert' },
    { id: 'sk-7', name: 'English (Professional Proficiency)', category: 'language', level: 'Proficient' },
    { id: 'sk-8', name: 'Public Sector File & Registry Handling', category: 'office', level: 'Proficient' },
  ],

  certifications: [
    {
      id: 'cert-1',
      title: 'Sindh Teaching License (STEDA PST License Category)',
      issuingAuthority: 'Sindh Teachers Education Development Authority (STEDA)',
      issueYear: '2024',
      licenseOrCertificateNo: 'STEDA-TL-2024-SKR-8841',
    },
    {
      id: 'cert-2',
      title: 'Certificate in Information Technology (CIT - 1 Year)',
      issuingAuthority: 'Sindh Board of Technical Education (SBTE)',
      issueYear: '2021',
      licenseOrCertificateNo: 'SBTE/CIT/2021-9302',
    },
    {
      id: 'cert-3',
      title: 'Shorthand & Speed Typing Certificate',
      issuingAuthority: 'Vocational Training Institute Sukkur',
      issueYear: '2020',
      licenseOrCertificateNo: 'VTI-ST-771',
    },
  ],

  references: [
    {
      id: 'ref-1',
      name: 'Prof. Ghulam Mustafa Memon',
      designation: 'Head of Department (Computer Science)',
      organization: 'Shah Abdul Latif University, Khairpur',
      contact: 'dept.cs@salu.edu.pk / +92 243 928001',
    },
    {
      id: 'ref-2',
      name: 'Mr. Tariq Hussain Chandio',
      designation: 'Head Master (BPS-18)',
      organization: 'Govt. Higher Secondary School, Sukkur',
      contact: 'Available upon formal departmental scrutiny request',
    },
  ],

  template: 'sts-govt',
  accentColor: 'emerald',
  fontSize: 'normal',
  showPhoto: false,
  showFatherName: true,
  showCnic: true,
  showDomicile: true,
  showHafizStatus: true,
};

export const SAMPLE_CORPORATE_RESUME: ResumeData = {
  fullName: 'Ayesha Siddiqui',
  fatherName: 'Muhammad Tariq Siddiqui',
  cnic: '42201-9876543-2',
  email: 'ayesha.siddiqui@outlook.com',
  phone: '+92 312 9876543',
  address: 'Gulshan-e-Iqbal, Block 13-D',
  city: 'Karachi',
  domicileDistrict: 'Karachi East',
  province: 'Sindh',
  dob: '2000-08-20',
  gender: 'Female',
  maritalStatus: 'Single',
  religion: 'Islam',
  hafizEQuran: false,

  targetHeadline: 'Junior Software Engineer / Frontend Developer & UI Specialist',
  professionalSummary: 'Analytical and results-oriented Software Engineer with strong foundation in TypeScript, React, and RESTful API architecture. Eager to leverage problem-solving abilities and competitive aptitude in developing high-throughput web applications.',

  education: [
    {
      id: 'edu-c1',
      degreeLevel: 'Bachelor (16 Years)',
      degreeTitle: 'BS Software Engineering',
      instituteOrBoard: 'NED University of Engineering & Technology, Karachi',
      passingYear: '2023',
      obtainedMarks: '3.72',
      totalMarks: '4.00',
      percentageOrCgpa: '89.5%',
      divisionOrGrade: 'First Division with Honors',
      majorSubjects: 'Full-Stack Web Engineering, Cloud Architecture, Algorithms, Databases',
    },
    {
      id: 'edu-c2',
      degreeLevel: 'Intermediate (HSSC)',
      degreeTitle: 'Pre-Engineering',
      instituteOrBoard: 'BIEK Karachi',
      passingYear: '2019',
      obtainedMarks: '912',
      totalMarks: '1100',
      percentageOrCgpa: '82.9%',
      divisionOrGrade: 'Grade A-1',
      majorSubjects: 'Mathematics, Physics, Chemistry',
    },
  ],

  experience: [
    {
      id: 'exp-c1',
      organization: 'Apex Solutions Tech Hub',
      designation: 'Associate Frontend Developer',
      employmentType: 'Full-time',
      location: 'Karachi, Pakistan',
      startDate: '2023-08',
      endDate: '2024-08',
      isCurrent: true,
      responsibilities: [
        'Developed modular React and Tailwind CSS interfaces for e-governance and exam simulation dashboards.',
        'Collaborated with backend engineers to integrate Firebase and REST endpoints, improving load time by 35%.',
      ],
    },
  ],

  skills: [
    { id: 'sk-c1', name: 'React.js & TypeScript', category: 'technical', level: 'Expert' },
    { id: 'sk-c2', name: 'Tailwind CSS & Responsive Layouts', category: 'technical', level: 'Expert' },
    { id: 'sk-c3', name: 'Node.js & Express API Development', category: 'technical', level: 'Intermediate' },
    { id: 'sk-c4', name: 'Git, GitHub, CI/CD', category: 'technical', level: 'Proficient' },
    { id: 'sk-c5', name: 'English (Fluent Professional)', category: 'language', level: 'Expert' },
    { id: 'sk-c6', name: 'Urdu (Native)', category: 'language', level: 'Expert' },
  ],

  certifications: [
    {
      id: 'cert-c1',
      title: 'Meta Frontend Developer Professional Certificate',
      issuingAuthority: 'Coursera / Meta',
      issueYear: '2023',
    },
  ],

  references: [
    {
      id: 'ref-c1',
      name: 'References available upon request',
      designation: '',
      organization: '',
      contact: '',
    },
  ],

  template: 'modern-ats',
  accentColor: 'navy',
  fontSize: 'normal',
  showPhoto: false,
  showFatherName: false,
  showCnic: false,
  showDomicile: false,
  showHafizStatus: false,
};

export const SAMPLE_FORTUNE_500_RESUME: ResumeData = {
  fullName: 'Daniyal M. Khan',
  fatherName: '',
  cnic: '',
  email: 'daniyal.khan.eng@gmail.com',
  phone: '+92 300 8765432',
  address: '',
  city: 'Karachi, Pakistan (Open to Remote / Relocation)',
  domicileDistrict: '',
  province: '',
  dob: '',
  gender: '',
  maritalStatus: '',
  religion: '',
  hafizEQuran: false,
  photoUrl: '',
  linkedinUrl: 'linkedin.com/in/daniyal-swe',
  portfolioUrl: 'https://daniyal.dev',
  githubUrl: 'github.com/daniyal-cloud',

  targetHeadline: 'Senior Software Engineer | Distributed Systems, Cloud Architecture & High-Throughput APIs',
  professionalSummary: 'Results-driven Senior Software Engineer with 5+ years of experience engineering high-scale distributed systems and enterprise cloud microservices for global Fortune 500 and fintech clients. Adept at leveraging AWS, Kubernetes, and Go/TypeScript to improve latency by up to 45% and eliminate system bottlenecks across millions of daily active users.',

  education: [
    {
      id: 'edu-f1',
      degreeLevel: 'Bachelor of Science (16 Years)',
      degreeTitle: 'BS in Computer Science (Dean’s Honor List)',
      instituteOrBoard: 'FAST-NUCES / IBA',
      passingYear: '2021',
      obtainedMarks: '3.82',
      totalMarks: '4.00',
      percentageOrCgpa: '3.82 / 4.00 CGPA',
      divisionOrGrade: 'Summa Cum Laude / High Distinction',
      majorSubjects: 'Distributed Computing, Advanced Algorithms, Database Systems, Cloud Security',
    },
  ],

  experience: [
    {
      id: 'exp-f1',
      organization: 'CloudScale Global Technologies',
      designation: 'Senior Backend & Cloud Engineer',
      employmentType: 'Full-time',
      location: 'Remote / Global EMEA',
      startDate: '2023-02',
      endDate: 'Present',
      isCurrent: true,
      responsibilities: [
        'Spearheaded the migration of core payment gateway microservices to AWS EKS (Kubernetes), reducing p99 latency from 320ms to 85ms (73% improvement) for 4.5M monthly transactions.',
        'Architected an Apache Kafka event-driven streaming pipeline handling 18M daily events with zero data loss and 99.995% service uptime.',
        'Engineered automated Terraform infrastructure-as-code modules, trimming multi-region deployment times from 3 hours to under 12 minutes while saving $115,000 in annual AWS idle compute.',
        'Mentored 6 junior engineers on unit testing benchmarks and clean code principles, elevating test coverage from 58% to 94%.',
      ],
    },
    {
      id: 'exp-f2',
      organization: 'FinTech Edge Systems',
      designation: 'Software Engineer II',
      employmentType: 'Full-time',
      location: 'Karachi, Pakistan',
      startDate: '2021-07',
      endDate: '2023-01',
      isCurrent: false,
      responsibilities: [
        'Developed fault-tolerant REST and gRPC banking APIs in Go and TypeScript, sustaining 12,000+ concurrent requests per second under peak promotion loads.',
        'Optimized PostgreSQL query execution plans and implemented Redis caching, slashing database CPU utilization by 42% across primary clusters.',
        'Collaborated directly with US-based product managers and security auditors to achieve full SOC2 Type II and PCI-DSS compliance ahead of schedule.',
      ],
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Distributed In-Memory Raft Consensus Cache',
      role: 'Lead Architect',
      techStack: 'Go, gRPC, Raft Consensus Algorithm, Docker',
      link: 'github.com/daniyal-cloud/raft-cache',
      highlights: [
        'Engineered distributed key-value store with leader election and log replication, achieving sub-millisecond read throughput.',
        'Conducted chaos engineering benchmarks with 40% network partition tolerance.',
      ],
    },
    {
      id: 'proj-2',
      title: 'Enterprise Serverless Log Aggregator',
      role: 'Creator & Maintainer',
      techStack: 'TypeScript, AWS Lambda, DynamoDB, OpenTelemetry',
      link: 'github.com/daniyal-cloud/serverless-telemetry',
      highlights: [
        'Built real-time log ingestion pipeline indexing 50,000 logs/min with automated Slack anomaly alerts.',
      ],
    },
  ],

  skills: [
    { id: 'sk-f1', name: 'Go (Golang) & Python', category: 'technical', level: 'Expert' },
    { id: 'sk-f2', name: 'TypeScript / Node.js & React', category: 'technical', level: 'Expert' },
    { id: 'sk-f3', name: 'AWS (EKS, Lambda, S3, RDS, CloudWatch)', category: 'technical', level: 'Expert' },
    { id: 'sk-f4', name: 'Docker, Kubernetes & Terraform', category: 'technical', level: 'Expert' },
    { id: 'sk-f5', name: 'PostgreSQL, Redis & Apache Kafka', category: 'technical', level: 'Expert' },
    { id: 'sk-f6', name: 'Microservices & System Design', category: 'technical', level: 'Expert' },
    { id: 'sk-f7', name: 'CI/CD Pipelines (GitHub Actions)', category: 'technical', level: 'Proficient' },
    { id: 'sk-f8', name: 'English (Bilingual / Fluent Professional)', category: 'language', level: 'Expert' },
  ],

  certifications: [
    {
      id: 'cert-f1',
      title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
      issuingAuthority: 'Amazon Web Services',
      issueYear: '2024',
      licenseOrCertificateNo: 'AWS-SAA-8829104',
    },
    {
      id: 'cert-f2',
      title: 'Certified Kubernetes Administrator (CKA)',
      issuingAuthority: 'Cloud Native Computing Foundation (CNCF)',
      issueYear: '2023',
      licenseOrCertificateNo: 'CKA-2309-8812',
    },
    {
      id: 'cert-f3',
      title: 'Google Cloud Professional Cloud Architect',
      issuingAuthority: 'Google Cloud Platform',
      issueYear: '2023',
      licenseOrCertificateNo: 'GCP-PCA-91044',
    },
  ],

  references: [
    {
      id: 'ref-f1',
      name: 'Available upon formal request / verified on LinkedIn',
      designation: '',
      organization: '',
      contact: '',
    },
  ],

  template: 'fortune-500',
  accentColor: 'navy',
  fontSize: 'normal',
  showPhoto: false,
  showFatherName: false,
  showCnic: false,
  showDomicile: false,
  showHafizStatus: false,
};

export const SUMMARY_PRESETS = [
  {
    title: 'Fortune 500 Senior Software Engineer / Distributed Systems',
    text: 'Results-driven Senior Software Engineer with 5+ years of experience engineering high-scale distributed systems and enterprise cloud microservices for global Fortune 500 clients. Adept at leveraging AWS, Kubernetes, and Go/TypeScript to improve latency by up to 45% and eliminate system bottlenecks across millions of daily active users.',
  },
  {
    title: 'Fortune 500 Product Manager / Quantitative Strategy',
    text: 'Data-driven Product Manager with a strong track record of steering cross-functional agile squads in top-tier tech and fintech environments. Skilled in translating complex user telemetry into high-impact feature roadmaps, boosting core user retention by 28% and driving $2.4M in annualized ARR growth.',
  },
  {
    title: 'Fortune 500 Cloud Solutions & DevOps Architect',
    text: 'Cloud & Infrastructure Architect certified in AWS (Solutions Architect Professional) and Kubernetes (CKA). Demonstrated excellence in designing multi-region zero-downtime microservices architectures, automating CI/CD pipelines, and cutting enterprise infrastructure expenditures by 35%+.',
  },
  {
    title: 'Fortune 500 Operations & Global Supply Chain Lead',
    text: 'Analytical Operations Specialist experienced in multinational FMCG and logistics supply chains. Proven acumen in Lean Six Sigma process re-engineering, SAP ERP inventory optimization, and vendor negotiations, realizing over $600K in operational cost reductions.',
  },
  {
    title: 'STS BPS 05–15 General Screening Candidate',
    text: 'Highly motivated graduate with proven analytical, numerical, and verbal reasoning skills honed for Sukkur IBA STS screening tests. Possesses certified office automation credentials, rapid typing accuracy (45+ WPM), and a strong commitment to transparent and diligent public sector administration.',
  },
  {
    title: 'STEDA Certified PST / JEST Teacher Candidate',
    text: 'STEDA-certified education graduate with comprehensive mastery of child pedagogy, modern classroom management, and Sindh curriculum standards. Skilled in student-centered instructional techniques and digital learning aids to inspire academic excellence in primary and elementary education.',
  },
  {
    title: 'Junior Clerk / Computer Operator (BPS 11–14)',
    text: 'Proficient administrative specialist with 1-Year Diploma in Information Technology (CIT) and bilingual typing mastery (English 50+ WPM, Sindhi/Urdu InPage 40+ WPM). Exceptional expertise in official file tracking, diary-dispatch registers, and MS Excel reporting.',
  },
  {
    title: 'SPSC / FPSC Executive & Officer Candidate',
    text: 'Disciplined and articulate competitive exam aspirant with an exemplary academic record and rigorous knowledge of Pakistan Affairs, Constitutional Law, and Governance. Demonstrates exceptional written communication, problem-solving, and public service ethics.',
  },
  {
    title: 'Fresh Graduate / IT & Corporate Entry-Level',
    text: 'Eager and fast-learning graduate with strong technical and quantitative problem-solving foundations. Skilled in collaborative project execution, data analysis, and professional presentation. Ready to make an immediate impact in a dynamic, growth-focused organization.',
  },
];
