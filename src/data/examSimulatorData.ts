import { MCQ } from '../types';
import { MCQS_DATA } from './mcqsData';
import { 
  STS_100_PATTERN_MCQS, 
  PST_PEDAGOGY_MCQS, 
  PST_SINDHI_MCQS, 
  PST_URDU_MCQS 
} from './stsPatternData';
import { TEACHING_LICENSE_PAPER_1_MCQS } from './teachingLicensePaper1';
import { TEACHING_LICENSE_PAPER_2_MCQS } from './teachingLicensePaper2';

export type SimulatorId = 'sts' | 'fpsc';
export type StsTier = 'Graduation (BPS 11–15)' | 'Intermediate (BPS 05–10)' | 'Matric (BPS 05)' | 'PST' | 'JEST' | 'STS IBA Teaching License Test';
export type FpscTrack = 'General Recruitment' | 'FIA Professional' | 'Customs & Revenue' | 'Administrative';

export interface SimulatorLaunch {
  simulatorId: SimulatorId;
  title?: string;
  category: StsTier | FpscTrack;
  durationMinutes?: number;
  timeMinutes?: number;
  questionCount?: number;
  negativeMarking: boolean;
}

export const TEACHING_LICENSE_BLUEPRINT = {
  title: 'STS IBA Teaching License Test (STEDA)',
  duration: 120,
  questions: 100,
  passingScore: 60,
  note: 'Official STEDA 50–50 syllabus: 50% Content Knowledge (Class 1–8 DCAR) & 50% Pedagogical Content Knowledge (HEC B.Ed). Passing criteria: 60% minimum (60 Marks).',
  sections: [
    { name: 'Part I: Content Knowledge', marks: 50, detail: 'English (10) · Mathematics (10) · General Science (10) · Social Studies & Sindh (10) · Sindhi/Urdu Mother Tongue (10)' },
    { name: 'Part II: Pedagogical Content Knowledge', marks: 50, detail: 'Teaching Methods (10) · Child Psychology (10) · Classroom Management (10) · Assessment & Testing (10) · School & Community (10)' },
  ],
};

export const SIMULATOR_BLUEPRINTS = {
  sts: {
    title: 'STS BPS 05–15 Screening Simulator',
    duration: 100,
    questions: 100,
    note: '40–20–40 preparation blueprint. Confirm the exact distribution in the advertisement for your post.',
    sections: [
      { name: 'English', marks: 40, detail: '10 comprehension · 10 vocabulary · 5 spellings · 5 error detection · 10 grammar/prepositions' },
      { name: 'Mathematics', marks: 20, detail: 'Arithmetic · percentages · ratios · algebra · word problems' },
      { name: 'General Knowledge', marks: 40, detail: '10 science · 10 current/world · 10 Pakistan · 10 computer/Islamiat' },
    ],
  },
  fpsc: {
    title: 'FPSC One-Paper General Recruitment Simulator',
    duration: 100,
    questions: 100,
    note: '20–80 preparation blueprint. The professional portion varies by case number and official syllabus.',
    sections: [
      { name: 'English', marks: 20, detail: 'Grammar · sentence structure · vocabulary · idioms · prepositions' },
      { name: 'General Intelligence / Professional', marks: 80, detail: 'General ability or post-specific professional syllabus' },
    ],
  },
} as const;

export const FPSC_PROFESSIONAL_LAW_MCQS: MCQ[] = [
  // FIA Act 1974
  {
    id: 'fpsc-fia-1',
    question: 'Under Section 3 of the Federal Investigation Agency (FIA) Act 1974, the superintendence of the Agency vests in the:',
    options: ['Supreme Court of Pakistan', 'Federal Government', 'Ministry of Law and Justice', 'Inspector General of Police'],
    correctIndex: 1,
    explanation: 'Section 3(2) of the FIA Act, 1974 explicitly states that the superintendence of the Agency shall vest in the Federal Government.',
    category: 'pakistan-affairs',
    subtopic: 'FIA Act 1974',
    difficulty: 'Hard',
    examTags: ['FPSC', 'AD-FIA', 'Inspector-FIA'],
  },
  {
    id: 'fpsc-fia-2',
    question: 'Under Section 5 of the FIA Act 1974, members of the Agency possess powers of police officers throughout:',
    options: ['Islamabad Capital Territory only', 'Specified border areas', 'The whole of Pakistan', 'Federal ministries and divisions only'],
    correctIndex: 2,
    explanation: 'Under Section 5(1) of the FIA Act 1974, members of the Agency have in relation to the investigation of scheduled offences all the powers, search, seizure, and arrest throughout Pakistan.',
    category: 'pakistan-affairs',
    subtopic: 'FIA Act 1974',
    difficulty: 'Medium',
    examTags: ['FPSC', 'AD-FIA', 'Inspector-FIA'],
  },
  {
    id: 'fpsc-fia-3',
    question: 'The scheduled offences under the FIA Act 1974 are enumerated in the:',
    options: ['Criminal Procedure Code Schedule II', 'Schedule appended to the FIA Act, 1974', 'Pakistan Penal Code Chapter XVII', 'Federal Rules of Business 1973'],
    correctIndex: 1,
    explanation: 'The Schedule appended to the FIA Act, 1974 lists all offences under the PPC and special laws which the Agency is legally empowered to investigate.',
    category: 'pakistan-affairs',
    subtopic: 'FIA Act 1974',
    difficulty: 'Medium',
    examTags: ['FPSC', 'AD-FIA'],
  },
  {
    id: 'fpsc-fia-4',
    question: 'Who is authorized to appoint the Director General (DG) of the Federal Investigation Agency under Section 3(3) of the Act?',
    options: ['Prime Minister directly', 'Federal Government', 'Federal Public Service Commission', 'Chief Justice of Pakistan'],
    correctIndex: 1,
    explanation: 'Section 3(3) provides that the Agency shall be administered by a Director General appointed by the Federal Government.',
    category: 'pakistan-affairs',
    subtopic: 'FIA Act 1974',
    difficulty: 'Medium',
    examTags: ['FPSC', 'AD-FIA'],
  },
  // PECA 2016
  {
    id: 'fpsc-peca-1',
    question: 'What is the maximum punishment for Cyber Terrorism under Section 10 of the Prevention of Electronic Crimes Act (PECA), 2016?',
    options: ['7 years imprisonment', '10 years imprisonment', '14 years imprisonment, or fine up to 50 million rupees, or both', 'Life imprisonment without parole'],
    correctIndex: 2,
    explanation: 'Section 10 of PECA 2016 prescribes imprisonment which may extend to 14 years, or with fine up to fifty million rupees, or with both for cyber terrorism.',
    category: 'pakistan-affairs',
    subtopic: 'PECA 2016',
    difficulty: 'Hard',
    examTags: ['FPSC', 'AD-FIA', 'Cyber-Crime'],
  },
  {
    id: 'fpsc-peca-2',
    question: 'Under Section 3 of PECA 2016, unauthorized access to an information system or data is punishable with imprisonment up to:',
    options: ['3 months', '6 months or fine up to 50,000 rupees', '3 months or fine up to 50,000 rupees, or both', '3 years or fine up to 1 million rupees'],
    correctIndex: 2,
    explanation: 'Section 3 of PECA 2016 provides punishment of imprisonment for a term which may extend to three months or with fine up to fifty thousand rupees or both.',
    category: 'pakistan-affairs',
    subtopic: 'PECA 2016',
    difficulty: 'Hard',
    examTags: ['FPSC', 'AD-FIA'],
  },
  {
    id: 'fpsc-peca-3',
    question: 'Under Section 32 of PECA 2016, service providers are required to retain specified traffic data for a minimum period of:',
    options: ['30 days', '90 days', 'One year (365 days)', 'Three years'],
    correctIndex: 2,
    explanation: 'Under Section 32 of PECA 2016, a service provider shall retain specified traffic data for a minimum period of one year.',
    category: 'pakistan-affairs',
    subtopic: 'PECA 2016',
    difficulty: 'Medium',
    examTags: ['FPSC', 'AD-FIA'],
  },
  // Anti-Money Laundering Act 2010
  {
    id: 'fpsc-aml-1',
    question: 'Under the Anti-Money Laundering Act (AMLA), 2010, the Financial Monitoring Unit (FMU) is housed administratively in the:',
    options: ['Ministry of Finance', 'State Bank of Pakistan (SBP)', 'Federal Board of Revenue', 'FIA Headquarters'],
    correctIndex: 1,
    explanation: 'Section 6 of AMLA 2010 establishes the Financial Monitoring Unit (FMU) situated in the State Bank of Pakistan, functioning autonomously.',
    category: 'pakistan-affairs',
    subtopic: 'AML Act 2010',
    difficulty: 'Hard',
    examTags: ['FPSC', 'AD-FIA', 'Customs'],
  },
  {
    id: 'fpsc-aml-2',
    question: 'Under Section 4 of the Anti-Money Laundering Act 2010, what is the punishment for the offence of money laundering?',
    options: ['Imprisonment of 1 to 5 years', 'Rigorous imprisonment not less than 1 year up to 10 years and fine up to 25 million PKR', 'Life imprisonment', 'Fine only equal to the laundered amount'],
    correctIndex: 1,
    explanation: 'Section 4 of AMLA 2010 prescribes rigorous imprisonment for 1 to 10 years, fine up to 25 million rupees, and forfeiture of property involved.',
    category: 'pakistan-affairs',
    subtopic: 'AML Act 2010',
    difficulty: 'Hard',
    examTags: ['FPSC', 'AD-FIA', 'Customs'],
  },
  {
    id: 'fpsc-aml-3',
    question: 'Under AMLA 2010, CTR and STR stand respectively for:',
    options: ['Credit Transfer Report and Standard Tax Return', 'Currency Transaction Report and Suspicious Transaction Report', 'Commercial Trade Receipt and Special Tariff Report', 'Customs Tariff Rate and Scheduled Tax Return'],
    correctIndex: 1,
    explanation: 'Under the AML Act 2010, CTR refers to Currency Transaction Report and STR refers to Suspicious Transaction Report filed by reporting entities to the FMU.',
    category: 'pakistan-affairs',
    subtopic: 'AML Act 2010',
    difficulty: 'Medium',
    examTags: ['FPSC', 'AD-FIA', 'Customs'],
  },
  // Customs Act 1969
  {
    id: 'fpsc-customs-1',
    question: 'Under Section 25 of the Customs Act, 1969, the primary and preferred method for valuation of imported goods is the:',
    options: ['Deductive value method', 'Computed value method', 'Transaction value method', 'Fall-back value method'],
    correctIndex: 2,
    explanation: 'Under Section 25(1) of the Customs Act 1969, the transaction value (actual price paid or payable) is the primary method of assessment.',
    category: 'pakistan-affairs',
    subtopic: 'Customs Act 1969',
    difficulty: 'Hard',
    examTags: ['FPSC', 'Inspector-Customs', 'Preventive-Officer'],
  },
  {
    id: 'fpsc-customs-2',
    question: 'Under Section 168 of the Customs Act 1969, what statutory power is conferred on an authorized customs officer regarding goods liable to confiscation?',
    options: ['Power to immediately destroy goods', 'Power to seize goods and documents', 'Power to auction goods without notice', 'Power to fine the owner on the spot'],
    correctIndex: 1,
    explanation: 'Section 168 gives the authorized officer of customs the statutory power to seize things, conveyances, and goods liable to confiscation under the Act.',
    category: 'pakistan-affairs',
    subtopic: 'Customs Act 1969',
    difficulty: 'Medium',
    examTags: ['FPSC', 'Inspector-Customs', 'Appraising-Officer'],
  },
  {
    id: 'fpsc-customs-3',
    question: 'Under Section 79 of the Customs Act 1969, the document filed by an importer for customs clearance of imported goods is called the:',
    options: ['Bill of Lading', 'Goods Declaration (GD)', 'Consular Invoice', 'Letter of Credit (LC)'],
    correctIndex: 1,
    explanation: 'Section 79 requires the owner of any imported goods to make entry thereof by filing a Goods Declaration (GD) in electronic or physical form.',
    category: 'pakistan-affairs',
    subtopic: 'Customs Act 1969',
    difficulty: 'Medium',
    examTags: ['FPSC', 'Inspector-Customs'],
  },
  {
    id: 'fpsc-customs-4',
    question: 'Which schedule of the Customs Act, 1969 contains the Pakistan Customs Tariff (PCT) codes and statutory duty rates?',
    options: ['First Schedule', 'Third Schedule', 'Fifth Schedule', 'Twelfth Schedule'],
    correctIndex: 0,
    explanation: 'The First Schedule to the Customs Act, 1969 contains the Pakistan Customs Tariff harmonized commodity description and coding system.',
    category: 'pakistan-affairs',
    subtopic: 'Customs Act 1969',
    difficulty: 'Hard',
    examTags: ['FPSC', 'Inspector-Customs'],
  },
  // Public Procurement Rules (PPRA) 2004
  {
    id: 'fpsc-ppra-1',
    question: 'Under Rule 12(1) of the Public Procurement Rules 2004, procurements exceeding what threshold must be advertised on the PPRA website?',
    options: ['PKR 100,000', 'PKR 500,000', 'PKR 1,000,000', 'PKR 3,000,000'],
    correctIndex: 1,
    explanation: 'Rule 12(1) stipulates that procurements over PKR 500,000 up to three million rupees shall be advertised on the PPRA website.',
    category: 'pakistan-affairs',
    subtopic: 'PPRA 2004',
    difficulty: 'Hard',
    examTags: ['FPSC', 'Administrative', 'AD-FPSC'],
  },
  {
    id: 'fpsc-ppra-2',
    question: 'Under Rule 12(2) of PPRA 2004, procurements exceeding which limit must also be mandatorily published in at least two national daily newspapers?',
    options: ['PKR 1 Million', 'PKR 2 Million', 'PKR 3 Million', 'PKR 5 Million'],
    correctIndex: 2,
    explanation: 'Procurements over PKR 3 Million must be advertised on the Authority website as well as in at least two national daily newspapers having wide circulation.',
    category: 'pakistan-affairs',
    subtopic: 'PPRA 2004',
    difficulty: 'Medium',
    examTags: ['FPSC', 'Administrative', 'AD-FPSC'],
  },
  {
    id: 'fpsc-ppra-3',
    question: 'Under Rule 36(a) of PPRA Rules 2004, what is the default open competitive bidding procedure for standard goods and services?',
    options: ['Two stage two envelope procedure', 'Single stage one envelope procedure', 'Single stage two envelope procedure', 'Direct contracting'],
    correctIndex: 1,
    explanation: 'Single stage one envelope bidding procedure is the default and preferred method for standard procurement under Rule 36(a).',
    category: 'pakistan-affairs',
    subtopic: 'PPRA 2004',
    difficulty: 'Medium',
    examTags: ['FPSC', 'Administrative'],
  },
  {
    id: 'fpsc-ppra-4',
    question: 'Under Rule 35 of the Public Procurement Rules 2004, a procuring agency must announce the bid evaluation results at least how many days prior to award of procurement contract?',
    options: ['5 days', '10 days', '15 days', '30 days'],
    correctIndex: 1,
    explanation: 'Rule 35 mandates that procuring agencies announce the results of bid evaluation at least ten days prior to the award of procurement contract to allow grievance redressal.',
    category: 'pakistan-affairs',
    subtopic: 'PPRA 2004',
    difficulty: 'Hard',
    examTags: ['FPSC', 'Administrative'],
  },
];

const norm = (mcq: MCQ) => `${mcq.category} ${mcq.subtopic || ''} ${mcq.question}`.toLowerCase();
const has = (mcq: MCQ, terms: string[]) => terms.some((term) => norm(mcq).includes(term));
const shuffled = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);

const uniqueTake = (pool: MCQ[], used: Set<string>, count: number, predicate: (mcq: MCQ) => boolean) => {
  const chosen = shuffled(pool.filter((mcq) => !used.has(mcq.id) && predicate(mcq))).slice(0, count);
  chosen.forEach((mcq) => used.add(mcq.id));
  return chosen;
};

export const buildExactPatternQuestions = (pool: MCQ[], launch: SimulatorLaunch): MCQ[] => {
  // Aggregate comprehensive question bank across all sources
  const basePool = pool && pool.length >= 100 
    ? pool 
    : Array.from(
        new Map(
          [
            ...(pool || []),
            ...MCQS_DATA,
            ...STS_100_PATTERN_MCQS,
            ...FPSC_PROFESSIONAL_LAW_MCQS,
            ...PST_PEDAGOGY_MCQS,
            ...PST_SINDHI_MCQS,
            ...PST_URDU_MCQS,
          ].map((m) => [m.id, m])
        ).values()
      );

  const used = new Set<string>();
  const english = (mcq: MCQ) => has(mcq, ['english', 'grammar', 'vocabulary', 'synonym', 'antonym', 'spelling', 'preposition', 'comprehension']);
  const math = (mcq: MCQ) => has(mcq, ['math', 'arithmetic', 'algebra', 'ratio', 'percentage', 'geometry', 'quantitative']);
  const science = (mcq: MCQ) => has(mcq, ['science', 'biology', 'physics', 'chemistry', 'everyday']);
  const pakistan = (mcq: MCQ) => has(mcq, ['pakistan', 'pak studies', 'sindh', 'constitution']);
  const currentWorld = (mcq: MCQ) => has(mcq, ['current', 'world', 'international', 'geography', 'general knowledge']);
  const computerIslam = (mcq: MCQ) => has(mcq, ['computer', 'information technology', 'islam', 'islamiat']);
  const pedagogy = (mcq: MCQ) => has(mcq, ['pedagogy', 'teaching', 'psychology', 'bloom', 'piaget', 'curriculum']);
  const motherTongue = (mcq: MCQ) => has(mcq, ['sindhi', 'urdu', 'huroof', 'shahar', 'zaban']);

  const professional = (mcq: MCQ) => {
    if (launch.category === 'FIA Professional') return has(mcq, ['fia', 'cyber', 'electronic crime', 'peca', 'money laundering', 'aml', 'investigation', 'law']);
    if (launch.category === 'Customs & Revenue') return has(mcq, ['custom', 'tax', 'excise', 'revenue', 'tariff', 'valuation', 'law']);
    if (launch.category === 'Administrative') return has(mcq, ['ppra', 'procurement', 'civil servant', 'administration', 'bidding', 'law']);
    return !english(mcq);
  };

  let result: MCQ[] = [];

  if (launch.simulatorId === 'sts') {
    if (launch.category === 'STS IBA Teaching License Test') {
      // 50% Content Knowledge (Class 1-8 DCAR) + 50% Pedagogical Content Knowledge (HEC B.Ed)
      const p1Content = TEACHING_LICENSE_PAPER_1_MCQS.slice(0, 50);
      const p1Pedagogy = TEACHING_LICENSE_PAPER_1_MCQS.slice(50, 100);
      const p2Content = TEACHING_LICENSE_PAPER_2_MCQS.slice(0, 50);
      const p2Pedagogy = TEACHING_LICENSE_PAPER_2_MCQS.slice(50, 100);

      result = [
        ...p1Content.slice(0, 25),
        ...p2Content.slice(0, 25),
        ...p1Pedagogy.slice(0, 25),
        ...p2Pedagogy.slice(0, 25),
      ];
    } else if (launch.category === 'PST' || launch.category === 'JEST') {
      result = [
        ...uniqueTake(basePool, used, 25, english),
        ...uniqueTake(basePool, used, 20, math),
        ...uniqueTake(basePool, used, 15, science),
        ...uniqueTake(basePool, used, 15, pedagogy),
        ...uniqueTake(basePool, used, 10, motherTongue),
        ...uniqueTake(basePool, used, 15, (m) => pakistan(m) || currentWorld(m) || computerIslam(m)),
      ];
    } else {
      result = [
        ...uniqueTake(basePool, used, 40, english),
        ...uniqueTake(basePool, used, 20, math),
        ...uniqueTake(basePool, used, 10, science),
        ...uniqueTake(basePool, used, 10, currentWorld),
        ...uniqueTake(basePool, used, 10, pakistan),
        ...uniqueTake(basePool, used, 10, computerIslam),
      ];
    }
  } else {
    // FPSC One-Paper (20 English, 80 Professional / Intelligence)
    result = [
      ...uniqueTake(basePool, used, 20, english),
      ...uniqueTake(basePool, used, 30, professional),
      ...uniqueTake(basePool, used, 20, math),
      ...uniqueTake(basePool, used, 15, science),
      ...uniqueTake(basePool, used, 15, (m) => currentWorld(m) || pakistan(m)),
    ];
  }

  if (result.length < 100) {
    result.push(...uniqueTake(basePool, used, 100 - result.length, () => true));
  }
  return result.slice(0, 100);
};

export const PROFESSIONAL_LAW_MODULES = [
  {
    id: 'fia-act',
    agency: 'FIA',
    title: 'Federal Investigation Agency Act, 1974',
    focus: ['Agency constitution and administration', 'Powers of members', 'Scheduled offences', 'Delegation and legal protections'],
    sourceUrl: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuUY2Zr-sg-jjjjjjjjjjjjj',
    sourceLabel: 'Pakistan Code — Ministry of Law and Justice',
  },
  {
    id: 'peca',
    agency: 'FIA',
    title: 'Prevention of Electronic Crimes Act, 2016',
    focus: ['Definitions', 'Offences against data and systems', 'Investigation and preservation', 'Current amendments and procedure'],
    sourceUrl: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Jvbp8%3D-sg-jjjjjjjjjjjjj',
    sourceLabel: 'Pakistan Code — Ministry of Law and Justice',
  },
  {
    id: 'aml',
    agency: 'FIA',
    title: 'Anti-Money Laundering Act, 2010',
    focus: ['Money-laundering offence', 'Predicate offences', 'Financial intelligence', 'Attachment, investigation and reporting'],
    sourceUrl: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npaplq-sg-jjjjjjjjjjjjj',
    sourceLabel: 'Pakistan Code — Ministry of Law and Justice',
  },
  {
    id: 'customs',
    agency: 'Customs',
    title: 'Customs Act, 1969',
    focus: ['Customs control and assessment', 'Import/export restrictions', 'Search, seizure and adjudication', 'Offences and penalties'],
    sourceUrl: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lrbw%3D%3D-sg-jjjjjjjjjjjjj',
    sourceLabel: 'Pakistan Code — Ministry of Law and Justice',
  },
  {
    id: 'ppra',
    agency: 'Administration',
    title: 'Public Procurement Rules, 2004',
    focus: ['Open competitive bidding', 'Bidding documents and evaluation', 'Alternative procurement methods', 'Grievance redressal and transparency'],
    sourceUrl: 'https://www.ppra.org.pk/Rules.asp',
    sourceLabel: 'Public Procurement Regulatory Authority',
  },
] as const;

export const OFFICIAL_PATTERN_SOURCES = [
  { label: 'SIBA Testing Services announcements', url: 'https://www.sts.net.pk/contents/announcements.aspx' },
  { label: 'FPSC General Recruitment syllabi', url: 'https://www.fpsc.gov.pk/category/syllabi-1605520196-2024-06-11' },
] as const;

