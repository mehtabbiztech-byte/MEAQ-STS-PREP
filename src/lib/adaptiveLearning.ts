export type RecallGrade = 0 | 1 | 2 | 3 | 4 | 5;

export interface SrsCard {
  questionId: string;
  topic: string;
  repetitions: number;
  intervalDays: number;
  easeFactor: number;
  dueAt: string;
  lastGrade: RecallGrade;
}

export interface AnswerEvent {
  questionId: string;
  topic: string;
  firstAnswer: number;
  finalAnswer: number;
  correctAnswer: number;
  timeSpentSeconds: number;
  changedAnswer: boolean;
}

export interface CognitiveInsight {
  id: 'second-guessing' | 'rushing' | 'time-drain' | 'steady';
  title: string;
  detail: string;
  severity: 'good' | 'watch' | 'risk';
}

export interface MistakeVaultItem {
  id: string;
  questionId: string;
  question: string;
  options: string[];
  userWrongAnswer: string;
  correctAnswer: string;
  explanation: string;
  category: string;
  consecutiveCorrect: number; // Goal: 3 consecutive clears to master
  mastered: boolean;
  addedAt: string;
  lastReviewedAt?: string;
}

export type IRTDifficulty = 'Easy' | 'Medium' | 'Hard' | 'Extreme';

export interface IRTAssessment {
  theta: number; // -3.0 to +3.0 scale
  percentile: number;
  difficulty: IRTDifficulty;
  totalAnswered: number;
  streak: number;
}

export interface FormulaCard {
  id: string;
  title: string;
  category: 'Arithmetic' | 'Algebra' | 'Geometry' | 'Analytical';
  formula: string;
  explanation: string;
  examExample: string;
  stsTip: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
  significance: string;
  era: 'Pre-Partition (1857-1947)' | 'Early Era (1947-1971)' | 'Constitutional (1973-Present)';
  examFrequency: 'Very High' | 'High' | 'Medium';
}

export interface MnemonicItem {
  id: string;
  title: string;
  subject: string;
  mnemonic: string;
  meaning: string;
  verifiedBy: string;
  upvotes: number;
  tags: string[];
}

export interface GeneratedMcq {
  id: string;
  agency: 'STS IBA' | 'SPSC' | 'FPSC' | 'CSS MPT';
  syllabusTopic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  trapAnalysis: {
    trapName: string;
    description: string;
  };
}

// SM-2 Spaced Repetition scheduler
export const scheduleReview = (card: SrsCard, grade: RecallGrade, now = new Date()): SrsCard => {
  const passed = grade >= 3;
  const repetitions = passed ? card.repetitions + 1 : 0;
  const intervalDays = !passed
    ? 1
    : repetitions === 1
      ? 1
      : repetitions === 2
        ? 6
        : Math.max(1, Math.round(card.intervalDays * card.easeFactor));
  const easeFactor = Math.max(1.3, card.easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));
  const due = new Date(now);
  due.setDate(due.getDate() + intervalDays);
  return { ...card, repetitions, intervalDays, easeFactor, dueAt: due.toISOString(), lastGrade: grade };
};

// Answer habits analyser
export const analyseAnswerHabits = (events: AnswerEvent[]): CognitiveInsight[] => {
  if (!events.length) {
    return [{ id: 'steady', title: 'Complete a quiz to unlock insights', detail: 'Timing and answer-change patterns will appear here.', severity: 'good' }];
  }
  const changedCorrectToWrong = events.filter((event) => event.changedAnswer && event.firstAnswer === event.correctAnswer && event.finalAnswer !== event.correctAnswer).length;
  const rushed = events.filter((event) => event.timeSpentSeconds < 12).length;
  const timeDrains = events.filter((event) => event.timeSpentSeconds > 72).length;
  const insights: CognitiveInsight[] = [];
  if (changedCorrectToWrong) {
    insights.push({ id: 'second-guessing', title: 'Second-guessing detected', detail: `${changedCorrectToWrong} initially correct answer${changedCorrectToWrong > 1 ? 's were' : ' was'} changed to a distractor. Recheck only when you can name a clear grammatical or factual rule.`, severity: 'risk' });
  }
  if (rushed) {
    insights.push({ id: 'rushing', title: 'Fast-reading risk', detail: `${rushed} question${rushed > 1 ? 's were' : ' was'} answered in under 12 seconds. Slow down for qualifiers such as “NOT”, “NEITHER”, and “EXCEPT”.`, severity: rushed / events.length > 0.3 ? 'risk' : 'watch' });
  }
  if (timeDrains) {
    insights.push({ id: 'time-drain', title: 'Time-drain questions', detail: `${timeDrains} question${timeDrains > 1 ? 's took' : ' took'} over 1.2 minutes. Mark, move on, and return after securing high-yield marks first.`, severity: 'watch' });
  }
  if (!insights.length) {
    insights.push({ id: 'steady', title: 'Decision pattern is steady', detail: 'No major rushing, time-drain, or second-guessing pattern was detected in your latest run.', severity: 'good' });
  }
  return insights;
};

export const dueCards = (cards: SrsCard[], now = new Date()) =>
  cards
    .filter((card) => new Date(card.dueAt).getTime() <= now.getTime())
    .sort((a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime());

// ----------------------------------------------------
// IRT Dynamic Difficulty Adjuster
// ----------------------------------------------------
export const updateIrtState = (
  currentState: IRTAssessment,
  isCorrect: boolean,
  currentQuestionDifficulty: IRTDifficulty
): IRTAssessment => {
  const step = isCorrect ? 0.35 : -0.4;
  const difficultyMultiplier =
    currentQuestionDifficulty === 'Extreme' ? 1.4 : currentQuestionDifficulty === 'Hard' ? 1.2 : currentQuestionDifficulty === 'Medium' ? 1.0 : 0.8;

  const newTheta = Math.min(3.0, Math.max(-3.0, currentState.theta + step * difficultyMultiplier));
  const newStreak = isCorrect ? currentState.streak + 1 : 0;
  const newTotal = currentState.totalAnswered + 1;

  // Derive difficulty from theta
  let newDiff: IRTDifficulty = 'Medium';
  if (newTheta >= 1.6) newDiff = 'Extreme';
  else if (newTheta >= 0.5) newDiff = 'Hard';
  else if (newTheta >= -0.8) newDiff = 'Medium';
  else newDiff = 'Easy';

  // Approximate percentile from standard normal CDF
  const z = newTheta;
  const percentile = Math.min(99.9, Math.max(5.0, Math.round(100 / (1 + Math.exp(-1.7 * z)))));

  return {
    theta: parseFloat(newTheta.toFixed(2)),
    percentile,
    difficulty: newDiff,
    totalAnswered: newTotal,
    streak: newStreak,
  };
};

// ----------------------------------------------------
// Mistake Vault Storage Helpers
// ----------------------------------------------------
const MISTAKE_VAULT_KEY = 'matb_mistake_vault_v2';

export const getStoredMistakes = (): MistakeVaultItem[] => {
  try {
    const raw = localStorage.getItem(MISTAKE_VAULT_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback
  }
  // Default starter mistake bank to show value immediately
  return [
    {
      id: 'mv-starter-1',
      questionId: 'eng-prep-01',
      question: 'He is proficient _____ five different foreign languages.',
      options: ['at', 'in', 'with', 'for'],
      userWrongAnswer: 'at',
      correctAnswer: 'in',
      explanation: 'The adjective "proficient" strictly takes the preposition "in" (e.g. proficient in English/Mathematics). "Good" takes "at".',
      category: 'English Prepositions',
      consecutiveCorrect: 1,
      mastered: false,
      addedAt: new Date(Date.now() - 172800000).toISOString(),
    },
    {
      id: 'mv-starter-2',
      questionId: 'math-perc-02',
      question: 'If the price of sugar increases by 25%, by what percent must a household reduce consumption to keep expenditure constant?',
      options: ['20%', '25%', '15%', '16.66%'],
      userWrongAnswer: '25%',
      correctAnswer: '20%',
      explanation: 'Formula: [R / (100 + R)] × 100% = [25 / 125] × 100% = 1/5 × 100% = 20%.',
      category: 'Arithmetic Word Problems',
      consecutiveCorrect: 0,
      mastered: false,
      addedAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: 'mv-starter-3',
      questionId: 'ps-amend-03',
      question: 'Which constitutional amendment in Pakistan established the Military Courts following the APS Peshawar tragedy?',
      options: ['18th Amendment', '19th Amendment', '21st Amendment', '25th Amendment'],
      userWrongAnswer: '19th Amendment',
      correctAnswer: '21st Amendment',
      explanation: 'The 21st Amendment was passed in January 2015 authorizing military courts for speedy trial of terrorists following the Dec 16, 2014 attack.',
      category: 'Pakistan Constitution',
      consecutiveCorrect: 2,
      mastered: false,
      addedAt: new Date(Date.now() - 259200000).toISOString(),
    },
  ];
};

export const saveMistakes = (items: MistakeVaultItem[]) => {
  try {
    localStorage.setItem(MISTAKE_VAULT_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
};

// ----------------------------------------------------
// Curated High-Yield Cheat Sheets & Timelines
// ----------------------------------------------------
export const FORMULAS_DATA: FormulaCard[] = [
  {
    id: 'f-1',
    title: 'Percentage Price & Expenditure Invariance',
    category: 'Arithmetic',
    formula: 'Reduction % = [R / (100 + R)] × 100%',
    explanation: 'When price rises by R%, consumption must decrease by this formula to maintain the same budget.',
    examExample: 'Price of petrol rises by 25% → [25/125] × 100% = 20% reduction needed.',
    stsTip: 'Appears in almost every STS BPS-11 and BPS-15 paper. Never subtract 25% directly!',
  },
  {
    id: 'f-2',
    title: 'Average Speed (Round Trip / Harmonic Mean)',
    category: 'Arithmetic',
    formula: 'Avg Speed = (2 × v1 × v2) / (v1 + v2)',
    explanation: 'When distances are equal in both directions, average speed is the harmonic mean of both speeds.',
    examExample: 'A car goes at 60 km/h and returns at 40 km/h → (2 × 60 × 40) / 100 = 48 km/h (NOT 50 km/h).',
    stsTip: 'Arithmetic mean (50) is always the most seductive distractor in FPSC and STS!',
  },
  {
    id: 'f-3',
    title: 'Time & Work (Combined Rate)',
    category: 'Arithmetic',
    formula: '1 / Total Time = 1/A + 1/B = (A + B) / (A × B)',
    explanation: 'If A takes X days and B takes Y days, together they take (X × Y) / (X + Y) days.',
    examExample: 'A takes 6 days, B takes 12 days → (6 × 12) / (6 + 12) = 72 / 18 = 4 days.',
    stsTip: 'Multiply the days and divide by their sum for instant 5-second mental math.',
  },
  {
    id: 'f-4',
    title: 'Sum of Consecutive Natural Numbers',
    category: 'Algebra',
    formula: 'Sum = [n × (n + 1)] / 2',
    explanation: 'Calculates the sum of first n integers starting from 1.',
    examExample: 'Sum of numbers from 1 to 50 = [50 × 51] / 2 = 25 × 51 = 1,275.',
    stsTip: 'Used in series and sequence questions across all screening tests.',
  },
  {
    id: 'f-5',
    title: 'Interior Angles of Any Polygon',
    category: 'Geometry',
    formula: 'Sum of Interior Angles = (n - 2) × 180°',
    explanation: 'Where n is the number of sides of the polygon.',
    examExample: 'Hexagon (6 sides) = (6 - 2) × 180° = 4 × 180° = 720°. Each angle in regular hexagon = 120°.',
    stsTip: 'Exterior angles of ANY convex polygon always sum to exactly 360°.',
  },
  {
    id: 'f-6',
    title: 'Compound Interest vs Simple Interest (2-Year Difference)',
    category: 'Arithmetic',
    formula: 'CI - SI = P × (R / 100)²',
    explanation: 'The difference between compound interest and simple interest for exactly 2 years.',
    examExample: 'For Rs. 5000 at 10% for 2 years → 5000 × (10/100)² = 5000 × 0.01 = Rs. 50.',
    stsTip: 'Saves 3 minutes of tedious calculations on one-paper exams.',
  },
];

export const TIMELINES_DATA: TimelineEvent[] = [
  {
    year: '1857',
    event: 'War of Independence / First War of National Resistance',
    significance: 'End of British East India Company rule; Queen Victoria proclamation in 1858.',
    era: 'Pre-Partition (1857-1947)',
    examFrequency: 'Very High',
  },
  {
    year: '1906 (Dec 30)',
    event: 'Foundation of All India Muslim League at Dhaka',
    significance: 'Presided by Nawab Viqar-ul-Mulk; Sir Aga Khan was appointed first permanent President.',
    era: 'Pre-Partition (1857-1947)',
    examFrequency: 'Very High',
  },
  {
    year: '1909',
    event: 'Minto-Morley Reforms (Indian Councils Act)',
    significance: 'Granted the historic right of Separate Electorates to Muslims.',
    era: 'Pre-Partition (1857-1947)',
    examFrequency: 'Very High',
  },
  {
    year: '1916',
    event: 'Lucknow Pact',
    significance: 'Joint Congress-League agreement; Jinnah hailed as "Ambassador of Hindu-Muslim Unity" by Sarojini Naidu.',
    era: 'Pre-Partition (1857-1947)',
    examFrequency: 'Very High',
  },
  {
    year: '1929 (March)',
    event: 'Quaid-e-Azam’s Fourteen Points',
    significance: 'Muslim constitutional charter in response to the anti-Muslim Nehru Report (1928).',
    era: 'Pre-Partition (1857-1947)',
    examFrequency: 'Very High',
  },
  {
    year: '1930 (Dec 29)',
    event: 'Allama Iqbal’s Historic Allahabad Address',
    significance: 'First clear political philosophical articulation of a separate Muslim state in North-West India.',
    era: 'Pre-Partition (1857-1947)',
    examFrequency: 'Very High',
  },
  {
    year: '1940 (March 23)',
    event: 'Lahore Resolution (Pakistan Resolution) passed at Minto Park',
    significance: 'Presented by A.K. Fazlul Haq (Sher-e-Bangal) and seconded by Chaudhry Khaliquzzaman.',
    era: 'Pre-Partition (1857-1947)',
    examFrequency: 'Very High',
  },
  {
    year: '1947 (June 3)',
    event: 'Mountbatten Partition Plan (3rd June Plan)',
    significance: 'Formal British plan declaring partition of British India and transfer of power on August 14-15.',
    era: 'Pre-Partition (1857-1947)',
    examFrequency: 'Very High',
  },
  {
    year: '1949 (March 12)',
    event: 'Objectives Resolution adopted by Constituent Assembly',
    significance: 'Foundational ground-norm moved by Prime Minister Liaquat Ali Khan; later made Article 2A in 1985.',
    era: 'Early Era (1947-1971)',
    examFrequency: 'Very High',
  },
  {
    year: '1973 (Aug 14)',
    event: 'Enactment of the 1973 Constitution of Pakistan',
    significance: 'Passed unanimously on April 10, 1973; enforced on August 14, 1973 under Z.A. Bhutto.',
    era: 'Constitutional (1973-Present)',
    examFrequency: 'Very High',
  },
  {
    year: '2010 (April 19)',
    event: '18th Constitutional Amendment Signed',
    significance: 'Abolished presidential Article 58(2)(b), restored parliamentary supremacy, devolved 17 ministries to provinces.',
    era: 'Constitutional (1973-Present)',
    examFrequency: 'Very High',
  },
  {
    year: '2018 (May 31)',
    event: '25th Constitutional Amendment (FATA Merger)',
    significance: 'Merged Federally Administered Tribal Areas (FATA) into Khyber Pakhtunkhwa province.',
    era: 'Constitutional (1973-Present)',
    examFrequency: 'Very High',
  },
];

// ----------------------------------------------------
// Crowdsourced & Verified Mnemonics Database
// ----------------------------------------------------
export const MNEMONICS_DATA: MnemonicItem[] = [
  {
    id: 'mn-1',
    title: 'First 4 Governor Generals of Pakistan',
    subject: 'Pakistan Affairs',
    mnemonic: '“Qaid Ke Ghulam Iskander” (Q - K - G - I)',
    meaning: '1. Quaid-e-Azam (1947–48) → 2. Khawaja Nazimuddin (1948–51) → 3. Ghulam Muhammad (1951–55) → 4. Iskander Mirza (1955–56)',
    verifiedBy: 'Syed Hamza (FPSC 2024 Merit #04)',
    upvotes: 312,
    tags: ['Governor Generals', 'Chronology', 'Pakistan History'],
  },
  {
    id: 'mn-2',
    title: 'Indus Water Treaty (1960) River Allocation',
    subject: 'Pakistan Geography',
    mnemonic: '“Pakistan gets CIJ, India gets RBS”',
    meaning: 'Western Rivers to Pakistan: Chenab, Indus, Jhelum (CIJ). Eastern Rivers to India: Ravi, Beas, Sutlej (RBS).',
    verifiedBy: 'Engr. Danial (STS BPS-16 Selected)',
    upvotes: 284,
    tags: ['Water Treaty', 'Rivers', 'Geography'],
  },
  {
    id: 'mn-3',
    title: 'SAARC 8 Member States',
    subject: 'International Organizations',
    mnemonic: '“MBBS PAIN”',
    meaning: 'Maldives, Bangladesh, Bhutan, Sri Lanka | Pakistan, Afghanistan, India, Nepal (Founded: Dec 8, 1985 in Dhaka; HQ: Kathmandu).',
    verifiedBy: 'Dr. Ayesha (SPSC CCE Qualified)',
    upvotes: 419,
    tags: ['SAARC', 'International Relations', 'General Knowledge'],
  },
  {
    id: 'mn-4',
    title: 'ASEAN 10 Founding & Member Countries',
    subject: 'World Geography',
    mnemonic: '“BTV MIM PSL” (Like TV channels & PSL cricket!)',
    meaning: 'Brunei, Thailand, Vietnam | Malaysia, Indonesia, Myanmar | Philippines, Singapore, Laos (HQ: Jakarta, Indonesia).',
    verifiedBy: 'Tariq Baloch (CSS Mentor)',
    upvotes: 198,
    tags: ['ASEAN', 'Asia', 'Headquarters'],
  },
  {
    id: 'mn-5',
    title: 'Atmospheric Layers from Ground to Space',
    subject: 'Everyday Science',
    mnemonic: '“Trust Me In The Exam” (T - S - M - T - E)',
    meaning: 'Troposphere (weather) → Stratosphere (ozone layer) → Mesosphere (meteors burn) → Thermosphere (auroras) → Exosphere (satellites).',
    verifiedBy: 'SPSC Science Specialist',
    upvotes: 367,
    tags: ['Atmosphere', 'Science', 'Layers'],
  },
  {
    id: 'mn-6',
    title: 'Order of Operations in Mathematics',
    subject: 'Mathematics',
    mnemonic: '“BODMAS / PEMDAS”',
    meaning: 'Brackets (Parentheses) → Orders (Exponents/Square roots) → Division & Multiplication (Left to Right) → Addition & Subtraction.',
    verifiedBy: 'IBA Sukkur Senior Faculty',
    upvotes: 255,
    tags: ['Arithmetic', 'Algebra', 'BODMAS'],
  },
];
