import { MCQ } from '../types';

export type SimulatorId = 'sts' | 'fpsc';
export type StsTier = 'Graduation (BPS 11–15)' | 'Intermediate (BPS 05–10)' | 'Matric (BPS 05)' | 'PST' | 'JEST';
export type FpscTrack = 'General Recruitment' | 'FIA Professional' | 'Customs & Revenue' | 'Administrative';

export interface SimulatorLaunch {
  simulatorId: SimulatorId;
  title: string;
  category: StsTier | FpscTrack;
  durationMinutes: 100;
  questionCount: 100;
  negativeMarking: boolean;
}

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

const norm = (mcq: MCQ) => `${mcq.category} ${mcq.subtopic || ''} ${mcq.question}`.toLowerCase();
const has = (mcq: MCQ, terms: string[]) => terms.some((term) => norm(mcq).includes(term));
const shuffled = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);

const uniqueTake = (pool: MCQ[], used: Set<string>, count: number, predicate: (mcq: MCQ) => boolean) => {
  const chosen = shuffled(pool.filter((mcq) => !used.has(mcq.id) && predicate(mcq))).slice(0, count);
  chosen.forEach((mcq) => used.add(mcq.id));
  return chosen;
};

export const buildExactPatternQuestions = (pool: MCQ[], launch: SimulatorLaunch): MCQ[] => {
  const used = new Set<string>();
  const english = (mcq: MCQ) => has(mcq, ['english', 'grammar', 'vocabulary', 'synonym', 'antonym', 'spelling', 'preposition', 'comprehension']);
  const math = (mcq: MCQ) => has(mcq, ['math', 'arithmetic', 'algebra', 'ratio', 'percentage', 'geometry', 'quantitative']);
  const science = (mcq: MCQ) => has(mcq, ['science', 'biology', 'physics', 'chemistry', 'everyday']);
  const pakistan = (mcq: MCQ) => has(mcq, ['pakistan', 'pak studies', 'sindh']);
  const currentWorld = (mcq: MCQ) => has(mcq, ['current', 'world', 'international', 'geography', 'general knowledge']);
  const computerIslam = (mcq: MCQ) => has(mcq, ['computer', 'information technology', 'islam', 'islamiat']);
  const professional = (mcq: MCQ) => {
    if (launch.category === 'FIA Professional') return has(mcq, ['fia', 'cyber', 'electronic crime', 'money laundering', 'law']);
    if (launch.category === 'Customs & Revenue') return has(mcq, ['custom', 'tax', 'excise', 'revenue', 'law']);
    if (launch.category === 'Administrative') return has(mcq, ['ppra', 'procurement', 'civil servant', 'administration', 'law']);
    return !english(mcq);
  };

  let result: MCQ[] = [];
  if (launch.simulatorId === 'sts') {
    result = [
      ...uniqueTake(pool, used, 40, english),
      ...uniqueTake(pool, used, 20, math),
      ...uniqueTake(pool, used, 10, science),
      ...uniqueTake(pool, used, 10, currentWorld),
      ...uniqueTake(pool, used, 10, pakistan),
      ...uniqueTake(pool, used, 10, computerIslam),
    ];
  } else {
    result = [
      ...uniqueTake(pool, used, 20, english),
      ...uniqueTake(pool, used, 80, professional),
    ];
  }

  if (result.length < 100) {
    result.push(...uniqueTake(pool, used, 100 - result.length, () => true));
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
