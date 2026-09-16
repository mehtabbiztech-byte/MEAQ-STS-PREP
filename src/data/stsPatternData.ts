import { MCQ } from '../types';

export type StsCategory = 'graduation' | 'intermediate' | 'matric' | 'pst' | 'jest';

export interface StsCategoryInfo {
  id: StsCategory;
  name: string;
  bps: string;
  eligibility: string;
  badge: string;
  description: string;
  durationMinutes: number;
  totalMarks: number;
  passingThreshold: number; // e.g. 50%
  quotaThreshold: number; // e.g. 40% for female/minority
  color: string;
}

export const STS_CATEGORIES: Record<StsCategory, StsCategoryInfo> = {
  graduation: {
    id: 'graduation',
    name: 'Graduation Category',
    bps: 'BPS 11 to 15',
    eligibility: '14 / 16-Year Bachelor’s Degree in any discipline from an HEC-recognized university',
    badge: 'Executive / Technical',
    description: 'Premier screening test for BPS-11 to 15 administrative, officer, and technical cadres across Sindh Government departments.',
    durationMinutes: 100,
    totalMarks: 100,
    passingThreshold: 50,
    quotaThreshold: 40,
    color: 'emerald',
  },
  intermediate: {
    id: 'intermediate',
    name: 'Intermediate Category',
    bps: 'BPS 05 to 10',
    eligibility: 'HSSC / FA / FSc / I.Com / ICS (12 Years of Education) from any recognized Board',
    badge: 'Clerical / Support',
    description: 'Standard screening test for Junior Clerks, Data Entry Operators, Field Assistants, and Ministerial Staff.',
    durationMinutes: 100,
    totalMarks: 100,
    passingThreshold: 50,
    quotaThreshold: 40,
    color: 'sky',
  },
  matric: {
    id: 'matric',
    name: 'Matriculation Category',
    bps: 'BPS 05',
    eligibility: 'SSC / Matriculation (Science or General) from any recognized Board of Secondary Education',
    badge: 'Foundational Entry',
    description: 'Foundational screening for Laboratory Attendants, Drivers, Field Supervisors, and BPS-05 technical workers.',
    durationMinutes: 100,
    totalMarks: 100,
    passingThreshold: 50,
    quotaThreshold: 40,
    color: 'amber',
  },
  pst: {
    id: 'pst',
    name: 'PST (Primary School Teacher)',
    bps: 'BPS 14',
    eligibility: 'Graduation (Minimum 14 Years) with preference for B.Ed / ADE certifications',
    badge: 'Teaching Track',
    description: 'Sukkur IBA Testing Services Primary School Teacher screening featuring Mother Tongue (Sindhi/Urdu) & Pedagogy.',
    durationMinutes: 100,
    totalMarks: 100,
    passingThreshold: 50,
    quotaThreshold: 40,
    color: 'violet',
  },
  jest: {
    id: 'jest',
    name: 'JEST (Junior Elementary School Teacher)',
    bps: 'BPS 14',
    eligibility: 'Graduation in Science / Math / English / IT with preference for B.Ed / Teaching aptitude',
    badge: 'Elementary Teaching',
    description: 'Sukkur IBA Testing Services Junior Elementary School Teacher exam focusing on secondary science, mathematics & pedagogy.',
    durationMinutes: 100,
    totalMarks: 100,
    passingThreshold: 50,
    quotaThreshold: 40,
    color: 'rose',
  },
};

export interface StsReadingPassage {
  id: string;
  title: string;
  text: string;
  questions: {
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export const STS_READING_PASSAGES: StsReadingPassage[] = [
  {
    id: 'passage-indus-civilization',
    title: 'The Great Indus River & Mohenjo-Daro',
    text: `The Indus River has been the lifeblood of Sindh and the surrounding regions for over five millennia. Emerging from the Tibetan plateau near Lake Mansarovar, it flows through the towering Himalayas before descending into the fertile plains of Pakistan. Along its lower reaches flourished the Indus Valley Civilization, one of the three early cradles of world civilizations alongside Mesopotamia and ancient Egypt.

Mohenjo-daro, meaning "Mound of the Dead Men" in Sindhi, was built around 2500 BCE and represents one of the earliest major urban settlements in human history. Its archaeological remains exhibit remarkable civic planning: paved brick streets laid out in a grid pattern, standardized burnt-brick architecture, multi-storey residential quarters, sophisticated covered drainage conduits, and the monumental Great Bath. The city thrived without monumental palaces or warrior monuments, suggesting an egalitarian, trade-centered social order supported by surplus agriculture from the Indus floodplains. Today, it stands designated as a UNESCO World Heritage site, underscoring Sindh's profound heritage in global urban archaeology.`,
    questions: [
      {
        prompt: 'According to the passage, from which geographical area does the Indus River originate?',
        options: ['The Tibetan plateau near Lake Mansarovar', 'The Hindu Kush range in northern Afghanistan', 'The Karakorams near K2 base camp', 'The Potohar plateau in Punjab'],
        correctIndex: 0,
        explanation: 'The passage explicitly states that the Indus emerges from the Tibetan plateau near Lake Mansarovar.',
      },
      {
        prompt: 'What does the term "Mohenjo-daro" mean in the Sindhi language?',
        options: ['City of Wells', 'Mound of the Dead Men', 'Fort of the River', 'Place of Golden Bricks'],
        correctIndex: 1,
        explanation: 'The passage clarifies that Mohenjo-daro translates to "Mound of the Dead Men" in Sindhi.',
      },
      {
        prompt: 'Which characteristic of Mohenjo-daro indicates advanced civic engineering for its era?',
        options: ['Massive pyramids taller than those in Egypt', 'Paved grid streets and covered drainage conduits', 'Large iron smelters and weaponry depots', 'Intricate marble temples dedicated to river gods'],
        correctIndex: 1,
        explanation: 'The text highlights paved brick streets laid out in a grid pattern and sophisticated covered drainage conduits.',
      },
      {
        prompt: 'The absence of warrior monuments or royal palaces suggests that the civilization was likely:',
        options: ['Dominated by military conquerors', 'Sparsely populated and migratory', 'Egalitarian and centered on trade and agriculture', 'Ruled by foreign Egyptian Pharaohs'],
        correctIndex: 2,
        explanation: 'The passage notes that the absence of royal palaces or warrior monuments suggests an egalitarian, trade-centered social order.',
      },
      {
        prompt: 'What international recognition does Mohenjo-daro currently hold?',
        options: ['World Wonder of the Ancient Mediterranean', 'UNESCO World Heritage Site', 'IUCN Protected Wildlife Sanctuary', 'Ramsar Wetland Site'],
        correctIndex: 1,
        explanation: 'The passage concludes that Mohenjo-daro is designated as a UNESCO World Heritage site.',
      },
    ],
  },
  {
    id: 'passage-sukkur-barrage',
    title: 'The Engineering Feat of Sukkur Barrage',
    text: `Completed in 1932 under the supervision of British engineer Sir Arnold Musto and Governor Sir George Lloyd, the Sukkur Barrage (originally designated Lloyd Barrage) represents a watershed milestone in the agricultural history of Pakistan. Prior to its construction, farming in Sindh depended predominantly on seasonal inundation canals, which flowed only during summer when the Indus was swollen with Himalayan snowmelt. Agriculture was precarious, and famines were frequent during drought cycles.

Constructed from yellow stone quarried from Rohri, the barrage spans approximately 1,600 metres across the Indus River and features 66 spans, each fitted with heavy steel gates to regulate water levels. It bifurcates the river into seven colossal feeder canals—three on the right bank (including the Dadu and Rice Canals) and four on the left bank (including the Nara and Rohri Canals). Together, these canals feed a colossal network irrigating more than 8 million acres of fertile agricultural land, transforming Sindh into a regional food basket for rice, wheat, cotton, and sugarcane. Even after nearly a century of continuous service, the barrage remains the cornerstone of Sindh’s agrarian economy.`,
    questions: [
      {
        prompt: 'In which year was the construction of the Sukkur Barrage officially completed?',
        options: ['1923', '1932', '1947', '1960'],
        correctIndex: 1,
        explanation: 'The passage notes the barrage was completed in 1932.',
      },
      {
        prompt: 'Before the barrage was built, what made agriculture in Sindh precarious?',
        options: ['Complete reliance on sea water desalination', 'Dependence on seasonal inundation canals only active during summer', 'Total lack of fertile soil along the riverbanks', 'Constant cold waves freezing the crops'],
        correctIndex: 1,
        explanation: 'The passage mentions farming depended on seasonal inundation canals that flowed only in summer.',
      },
      {
        prompt: 'How many total spans does the Sukkur Barrage contain to regulate water discharge?',
        options: ['44 spans', '55 spans', '66 spans', '88 spans'],
        correctIndex: 2,
        explanation: 'The text states that the barrage features 66 spans fitted with heavy steel gates.',
      },
      {
        prompt: 'How many feeder canals originate directly from the Sukkur Barrage?',
        options: ['Five canals', 'Seven canals', 'Ten canals', 'Twelve canals'],
        correctIndex: 1,
        explanation: 'The passage specifies that it bifurcates the river into seven colossal feeder canals (3 on right bank, 4 on left bank).',
      },
      {
        prompt: 'From where was the yellow stone used in constructing the barrage quarried?',
        options: ['Thatta hills', 'Rohri quarries', 'Gorakh Hill', 'Kirthar range'],
        correctIndex: 1,
        explanation: 'The text notes it was constructed from yellow stone quarried from Rohri.',
      },
    ],
  },
];

export interface StsQuestionItem {
  id: string;
  part: 'english' | 'mathematics' | 'general';
  subSection: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isReadingPassage?: boolean;
  passageId?: string;
  categoryTier?: 'all' | 'graduation' | 'intermediate' | 'matric' | 'teaching';
}

// -------------------------------------------------------------
// SECTION 1: ENGLISH (40 QUESTIONS PATTERN)
// -------------------------------------------------------------

// Sub-component: Synonyms (5 Questions)
const SYNONYMS_POOL: StsQuestionItem[] = [
  {
    id: 'sts-syn-01',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly SYNONYMOUS in meaning to: CANDID',
    options: ['Frank and outspoken', 'Deceitful and shy', 'Polite but hesitant', 'Proud and aloof'],
    correctIndex: 0,
    explanation: '“Candid” means truthful, frank, and straightforward without reservation.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-syn-02',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly SYNONYMOUS in meaning to: DILIGENT',
    options: ['Careless', 'Hardworking and persistent', 'Quick-tempered', 'Intellectually gifted'],
    correctIndex: 1,
    explanation: '“Diligent” refers to someone who shows conscientious and hardworking effort.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-syn-03',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly SYNONYMOUS in meaning to: MITIGATE',
    options: ['To aggravate', 'To lessen or alleviate', 'To measure accurately', 'To delay unnecessarily'],
    correctIndex: 1,
    explanation: '“Mitigate” means to make something less severe, painful, or intense.',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
  {
    id: 'sts-syn-04',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly SYNONYMOUS in meaning to: FEASIBLE',
    options: ['Impossible', 'Practicable and viable', 'Destructive', 'Temporary'],
    correctIndex: 1,
    explanation: '“Feasible” means capable of being achieved or done conveniently.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-syn-05',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly SYNONYMOUS in meaning to: RESILIENT',
    options: ['Fragile', 'Quick to recover from adversity', 'Stubborn and rigid', 'Easily frightened'],
    correctIndex: 1,
    explanation: '“Resilient” signifies the ability to withstand or recover quickly from difficult conditions.',
    difficulty: 'Medium',
  },
];

// Sub-component: Antonyms (5 Questions)
const ANTONYMS_POOL: StsQuestionItem[] = [
  {
    id: 'sts-ant-01',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly OPPOSITE (Antonym) in meaning to: OBSOLETE',
    options: ['Outdated', 'Current and modern', 'Dangerous', 'Inexpensive'],
    correctIndex: 1,
    explanation: '“Obsolete” means out of date or no longer produced; its opposite is current, modern, or in vogue.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-ant-02',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly OPPOSITE (Antonym) in meaning to: METICULOUS',
    options: ['Accurate', 'Careful', 'Sloppy and negligent', 'Painstaking'],
    correctIndex: 2,
    explanation: '“Meticulous” means showing extreme care and precision; its antonym is sloppy or careless.',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
  {
    id: 'sts-ant-03',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly OPPOSITE (Antonym) in meaning to: SCARCITY',
    options: ['Dearth', 'Deficiency', 'Abundance', 'Poverty'],
    correctIndex: 2,
    explanation: '“Scarcity” means insufficiency or shortage; its opposite is abundance or surplus.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-ant-04',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly OPPOSITE (Antonym) in meaning to: COMPULSORY',
    options: ['Mandatory', 'Obligatory', 'Voluntary and optional', 'Strict'],
    correctIndex: 2,
    explanation: '“Compulsory” means required by law or rule; its antonym is voluntary or optional.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-ant-05',
    part: 'english',
    subSection: 'Synonyms & Antonyms',
    question: 'Choose the word that is most nearly OPPOSITE (Antonym) in meaning to: DORMANT',
    options: ['Active and energetic', 'Sleeping', 'Latent', 'Peaceful'],
    correctIndex: 0,
    explanation: '“Dormant” means in a state of rest or inactive; its opposite is active or awake.',
    difficulty: 'Medium',
  },
];

// Sub-component: Spellings (5 Questions)
const SPELLINGS_POOL: StsQuestionItem[] = [
  {
    id: 'sts-sp-01',
    part: 'english',
    subSection: 'Spellings',
    question: 'Identify the word with the CORRECT spelling:',
    options: ['Accomodation', 'Accommodation', 'Acomodation', 'Accomodasion'],
    correctIndex: 1,
    explanation: '“Accommodation” has two "c"s and two "m"s.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-sp-02',
    part: 'english',
    subSection: 'Spellings',
    question: 'Identify the word with the CORRECT spelling:',
    options: ['Maintainance', 'Maintenence', 'Maintenance', 'Maintanence'],
    correctIndex: 2,
    explanation: 'While the verb is "maintain", the noun is spelled “maintenance” (ten-ance).',
    difficulty: 'Medium',
  },
  {
    id: 'sts-sp-03',
    part: 'english',
    subSection: 'Spellings',
    question: 'Identify the word with the CORRECT spelling:',
    options: ['Privilege', 'Priviledge', 'Privelege', 'Privilage'],
    correctIndex: 0,
    explanation: '“Privilege” does not contain a "d" and ends in "-lege".',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
  {
    id: 'sts-sp-04',
    part: 'english',
    subSection: 'Spellings',
    question: 'Identify the word with the CORRECT spelling:',
    options: ['Bureaucracy', 'Bureacracy', 'Beurocracy', 'Burocracy'],
    correctIndex: 0,
    explanation: '“Bureaucracy” is spelled B-U-R-E-A-U-C-R-A-C-Y.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-sp-05',
    part: 'english',
    subSection: 'Spellings',
    question: 'Identify the word with the CORRECT spelling:',
    options: ['Conscentious', 'Conscientious', 'Conscintious', 'Consciencious'],
    correctIndex: 1,
    explanation: '“Conscientious” (meaning wishing to do what is right) is spelled C-O-N-S-C-I-E-N-T-I-O-U-S.',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
];

// Sub-component: Error Detection (5 Questions)
const ERROR_DETECTION_POOL: StsQuestionItem[] = [
  {
    id: 'sts-err-01',
    part: 'english',
    subSection: 'Error Detection',
    question: 'Identify the underlined part that contains an error:\nNeither the project manager (A) nor the technical engineers (B) was present (C) during the site inspection (D).',
    options: ['(A) Neither the project manager', '(B) nor the technical engineers', '(C) was present', '(D) during the site inspection'],
    correctIndex: 2,
    explanation: 'Rule of Proximity: When subjects are joined by "neither...nor", the verb agrees with the closer subject. Since "technical engineers" is plural, the verb should be "were present" instead of "was present".',
    difficulty: 'Medium',
  },
  {
    id: 'sts-err-02',
    part: 'english',
    subSection: 'Error Detection',
    question: 'Identify the underlined part that contains an error:\nShe has been working (A) in the education department (B) since five years (C) without any promotion (D).',
    options: ['(A) She has been working', '(B) in the education department', '(C) since five years', '(D) without any promotion'],
    correctIndex: 2,
    explanation: 'For a duration of time ("five years"), use "for", not "since". It should read: "for five years".',
    difficulty: 'Easy',
  },
  {
    id: 'sts-err-03',
    part: 'english',
    subSection: 'Error Detection',
    question: 'Identify the underlined part that contains an error:\nOne of the main reasons (A) for his sudden resignation (B) were his worsening health (C) and family matters (D).',
    options: ['(A) One of the main reasons', '(B) for his sudden resignation', '(C) were his worsening health', '(D) and family matters'],
    correctIndex: 2,
    explanation: 'The true grammatical subject is "One", which is singular. Therefore, the linking verb must be "was", not "were".',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
  {
    id: 'sts-err-04',
    part: 'english',
    subSection: 'Error Detection',
    question: 'Identify the underlined part that contains an error:\nHardly had the candidate entered (A) the examination hall (B) than the question papers (C) were distributed (D).',
    options: ['(A) Hardly had the candidate entered', '(B) the examination hall', '(C) than the question papers', '(D) were distributed'],
    correctIndex: 2,
    explanation: 'Correlative conjunction: "Hardly" and "Scarcely" are followed by "when" or "before", never by "than". (Only "No sooner" takes "than").',
    difficulty: 'Medium',
  },
  {
    id: 'sts-err-05',
    part: 'english',
    subSection: 'Error Detection',
    question: 'Identify the underlined part that contains an error:\nDespite of the heavy rainfall (A) and blocked roads (B), all the applicants reached (C) the test centre on time (D).',
    options: ['(A) Despite of the heavy rainfall', '(B) and blocked roads', '(C) all the applicants reached', '(D) the test centre on time'],
    correctIndex: 0,
    explanation: '“Despite” is never followed by the preposition “of”. Use either “Despite the heavy rainfall” or “In spite of the heavy rainfall”.',
    difficulty: 'Easy',
  },
];

// Sub-component: Prepositions & Grammar (10 Questions)
const PREPOSITIONS_GRAMMAR_POOL: StsQuestionItem[] = [
  {
    id: 'sts-prep-01',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Complete the sentence with the appropriate preposition: The officer was accused ___ negligence of official duty.',
    options: ['with', 'of', 'for', 'about'],
    correctIndex: 1,
    explanation: 'The standard collocation is “accused of” a crime or misconduct.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-prep-02',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Complete the sentence: He is proficient ___ both English and Sindhi languages.',
    options: ['in', 'at', 'with', 'on'],
    correctIndex: 0,
    explanation: 'One is “proficient in” a subject, discipline, or language.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-prep-03',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Complete the sentence: All civil servants must adhere strictly ___ the prescribed code of conduct.',
    options: ['with', 'to', 'for', 'by'],
    correctIndex: 1,
    explanation: 'The verb “adhere” is always paired with the preposition “to”.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-prep-04',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Complete the sentence: We are all looking forward ___ your presentation at the conference.',
    options: ['to attend', 'to attending', 'for attending', 'at attending'],
    correctIndex: 1,
    explanation: 'In the phrasal verb “look forward to”, "to" is a preposition, which must be followed by a gerund (-ing form).',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
  {
    id: 'sts-prep-05',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Select the correct conditional sentence form: If the administration ___ the warning earlier, the disaster could have been prevented.',
    options: ['heeded', 'has heeded', 'had heeded', 'would have heeded'],
    correctIndex: 2,
    explanation: 'Third Conditional (unreal past): "If + past perfect (had heeded)... would/could have + past participle".',
    difficulty: 'Medium',
  },
  {
    id: 'sts-prep-06',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Complete the sentence: The candidate was disqualified ___ participating in the examination due to invalid credentials.',
    options: ['from', 'to', 'for', 'against'],
    correctIndex: 0,
    explanation: 'The standard idiom is “disqualified from” doing something.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-prep-07',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Complete the sentence: The property was divided equally ___ the three surviving heirs.',
    options: ['between', 'among', 'amidst', 'within'],
    correctIndex: 1,
    explanation: '“Among” is used when dividing between more than two entities (“between” is strictly for two).',
    difficulty: 'Easy',
  },
  {
    id: 'sts-prep-08',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Choose the correct form: It is high time that the government ___ concrete steps to combat inflation.',
    options: ['takes', 'took', 'has taken', 'will take'],
    correctIndex: 1,
    explanation: 'After the phrase “It is high time...”, a subjunctive past tense verb form (“took”) is required to express urgent necessity.',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
  {
    id: 'sts-prep-09',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Complete the sentence: He insisted ___ seeing the verified document before signing.',
    options: ['for', 'on', 'to', 'over'],
    correctIndex: 1,
    explanation: 'The verb “insist” takes the preposition “on” (or upon) followed by a gerund.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-prep-10',
    part: 'english',
    subSection: 'Prepositions & Grammar',
    question: 'Choose the sentence with correct punctuation and syntax:',
    options: [
      'The teacher said, “Knowledge is power.”',
      'The teacher said “Knowledge is power”.',
      'The teacher said that, “Knowledge is power”.',
      'The teacher said; “Knowledge is power”!'
    ],
    correctIndex: 0,
    explanation: 'In direct speech, a comma precedes the quotation marks, and terminal punctuation sits inside the closing quotation marks.',
    difficulty: 'Easy',
  },
];

// -------------------------------------------------------------
// SECTION 2: MATHEMATICS (20 QUESTIONS PATTERN)
// -------------------------------------------------------------

const MATHEMATICS_POOL: StsQuestionItem[] = [
  // 1-4: Arithmetic & Fractions
  {
    id: 'sts-math-01',
    part: 'mathematics',
    subSection: 'Arithmetic & Fractions',
    question: 'Evaluate the arithmetic expression using BODMAS: 24 − 6 ÷ 2 + (3 × 4)',
    options: ['21', '33', '27', '30'],
    correctIndex: 1,
    explanation: 'BODMAS order: Brackets (3 × 4 = 12), Division (6 ÷ 2 = 3). Expression becomes: 24 − 3 + 12 = 33.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-math-02',
    part: 'mathematics',
    subSection: 'Arithmetic & Fractions',
    question: 'Find the simplified sum of the fractions: 3/4 + 2/5 − 1/2',
    options: ['13/20', '11/20', '9/20', '7/10'],
    correctIndex: 0,
    explanation: 'LCM of 4, 5, and 2 is 20. Convert fractions: (15/20) + (8/20) − (10/20) = 13/20.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-math-03',
    part: 'mathematics',
    subSection: 'Arithmetic & Fractions',
    question: 'What is the Least Common Multiple (LCM) of 18, 24, and 36?',
    options: ['72', '144', '108', '54'],
    correctIndex: 0,
    explanation: 'Prime factors: 18 = 2 × 3², 24 = 2³ × 3, 36 = 2² × 3². LCM = 2³ × 3² = 8 × 9 = 72.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-math-04',
    part: 'mathematics',
    subSection: 'Arithmetic & Fractions',
    question: 'What is the Highest Common Factor (HCF / GCD) of 84 and 126?',
    options: ['14', '21', '42', '28'],
    correctIndex: 2,
    explanation: '84 = 2² × 3 × 7; 126 = 2 × 3² × 7. HCF = 2 × 3 × 7 = 42.',
    difficulty: 'Medium',
  },

  // 5-8: Percentages, Profit & Loss
  {
    id: 'sts-math-05',
    part: 'mathematics',
    subSection: 'Percentages & Profit/Loss',
    question: 'In an examination of 800 marks, a candidate secured 576 marks. What percentage of marks did the candidate achieve?',
    options: ['68%', '72%', '74%', '76%'],
    correctIndex: 1,
    explanation: 'Percentage = (576 ÷ 800) × 100 = 0.72 × 100 = 72%.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-math-06',
    part: 'mathematics',
    subSection: 'Percentages & Profit/Loss',
    question: 'A merchant purchased a commodity for PKR 4,000 and sold it for PKR 4,800. What is his profit percentage?',
    options: ['16.6%', '20%', '25%', '15%'],
    correctIndex: 1,
    explanation: 'Profit = 4,800 − 4,000 = 800. Profit % = (800 ÷ 4,000) × 100 = 20%.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-math-07',
    part: 'mathematics',
    subSection: 'Percentages & Profit/Loss',
    question: 'An item marked at PKR 2,500 is sold after offering a 12% cash discount. What is the net selling price?',
    options: ['PKR 2,150', 'PKR 2,200', 'PKR 2,250', 'PKR 2,300'],
    correctIndex: 1,
    explanation: 'Discount = 12% of 2,500 = 300. Selling Price = 2,500 − 300 = PKR 2,200.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-math-08',
    part: 'mathematics',
    subSection: 'Percentages & Profit/Loss',
    question: 'If the price of petrol increases by 25%, by what percentage must a motorist reduce consumption to keep total expenditure unchanged?',
    options: ['20%', '25%', '16.67%', '15%'],
    correctIndex: 0,
    explanation: 'Formula: [R / (100 + R)] × 100 = [25 / 125] × 100 = (1/5) × 100 = 20%.',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },

  // 9-12: Ratios & Proportions
  {
    id: 'sts-math-09',
    part: 'mathematics',
    subSection: 'Ratios & Proportions',
    question: 'A sum of PKR 72,000 is distributed among three partners A, B, and C in the ratio 2 : 3 : 4. What is the share of partner B?',
    options: ['PKR 16,000', 'PKR 24,000', 'PKR 32,000', 'PKR 28,000'],
    correctIndex: 1,
    explanation: 'Total ratio parts = 2 + 3 + 4 = 9. One part = 72,000 ÷ 9 = 8,000. Partner B’s share = 3 × 8,000 = PKR 24,000.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-math-10',
    part: 'mathematics',
    subSection: 'Ratios & Proportions',
    question: 'If 15 men can construct a boundary wall in 12 days, how many days will 10 men take to construct the same wall at the same work rate?',
    options: ['16 days', '18 days', '20 days', '22 days'],
    correctIndex: 1,
    explanation: 'Inverse proportion: M₁ × D₁ = M₂ × D₂ => 15 × 12 = 10 × D₂ => 180 = 10 × D₂ => D₂ = 18 days.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-math-11',
    part: 'mathematics',
    subSection: 'Ratios & Proportions',
    question: 'If A : B = 3 : 4 and B : C = 8 : 9, what is the combined ratio A : B : C?',
    options: ['3 : 8 : 9', '6 : 8 : 9', '3 : 4 : 9', '6 : 7 : 9'],
    correctIndex: 1,
    explanation: 'Multiply A:B by 2 to equate B: (3×2) : (4×2) = 6 : 8. Since B:C = 8 : 9, combined A : B : C = 6 : 8 : 9.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-math-12',
    part: 'mathematics',
    subSection: 'Ratios & Proportions',
    question: 'Find the fourth proportional to 4, 9, and 12.',
    options: ['18', '24', '27', '36'],
    correctIndex: 2,
    explanation: '4 : 9 = 12 : x => 4x = 9 × 12 = 108 => x = 108 ÷ 4 = 27.',
    difficulty: 'Easy',
  },

  // 13-16: Algebraic Equations & Identities
  {
    id: 'sts-math-13',
    part: 'mathematics',
    subSection: 'Algebraic Equations',
    question: 'Solve for x: 5x − 7 = 3x + 13',
    options: ['x = 8', 'x = 10', 'x = 12', 'x = 6'],
    correctIndex: 1,
    explanation: '5x − 3x = 13 + 7 => 2x = 20 => x = 10.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-math-14',
    part: 'mathematics',
    subSection: 'Algebraic Equations',
    question: 'If a + b = 9 and ab = 20, what is the value of a² + b²?',
    options: ['41', '61', '81', '49'],
    correctIndex: 0,
    explanation: 'Identity: (a + b)² = a² + b² + 2ab => 9² = a² + b² + 2(20) => 81 = a² + b² + 40 => a² + b² = 41.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-math-15',
    part: 'mathematics',
    subSection: 'Algebraic Equations',
    question: 'Factorize the quadratic expression: x² − 7x + 12',
    options: ['(x − 3)(x − 4)', '(x + 3)(x + 4)', '(x − 2)(x − 6)', '(x + 2)(x − 6)'],
    correctIndex: 0,
    explanation: 'Find two numbers that multiply to +12 and add to −7: −3 and −4. Factors: (x − 3)(x − 4).',
    difficulty: 'Easy',
  },
  {
    id: 'sts-math-16',
    part: 'mathematics',
    subSection: 'Algebraic Equations',
    question: 'Simplify the algebraic power: (2x³y²)³',
    options: ['6x⁶y⁵', '8x⁹y⁶', '8x⁶y⁵', '6x⁹y⁶'],
    correctIndex: 1,
    explanation: 'Distribute exponent 3: 2³ × (x³)³ × (y²)³ = 8x⁹y⁶.',
    difficulty: 'Medium',
  },

  // 17-20: Practical Word Problems & Averages
  {
    id: 'sts-math-17',
    part: 'mathematics',
    subSection: 'Word Problems & Averages',
    question: 'The average age of 5 employees in an office is 28 years. When a new manager joins, the average age becomes 30 years. What is the age of the manager?',
    options: ['35 years', '38 years', '40 years', '42 years'],
    correctIndex: 2,
    explanation: 'Initial total age = 5 × 28 = 140. New total age with 6 people = 6 × 30 = 180. Manager’s age = 180 − 140 = 40 years.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-math-18',
    part: 'mathematics',
    subSection: 'Word Problems & Averages',
    question: 'A train traveling at a constant speed of 72 km/h crosses a 200-metre long railway bridge in 20 seconds. What is the length of the train?',
    options: ['150 metres', '200 metres', '250 metres', '300 metres'],
    correctIndex: 1,
    explanation: 'Convert speed to m/s: 72 × (5/18) = 20 m/s. Total distance in 20 seconds = 20 × 20 = 400 metres. Train length = 400 − 200 = 200 metres.',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
  {
    id: 'sts-math-19',
    part: 'mathematics',
    subSection: 'Word Problems & Averages',
    question: 'The present age of a father is four times that of his son. In 10 years, the father will be only twice as old as his son. What is the present age of the son?',
    options: ['5 years', '7 years', '10 years', '12 years'],
    correctIndex: 0,
    explanation: 'Let son’s age = x, father = 4x. In 10 years: 4x + 10 = 2(x + 10) => 4x + 10 = 2x + 20 => 2x = 10 => x = 5 years.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-math-20',
    part: 'mathematics',
    subSection: 'Word Problems & Averages',
    question: 'Pipe A can fill a water reservoir in 6 hours and Pipe B can empty it in 8 hours. If both pipes are opened simultaneously, in how many hours will the reservoir be filled?',
    options: ['14 hours', '18 hours', '24 hours', '30 hours'],
    correctIndex: 2,
    explanation: 'Net rate per hour = (1/6) − (1/8) = (4 − 3)/24 = 1/24. Therefore, it will take 24 hours to fill the reservoir.',
    difficulty: 'Medium',
  },
];

// -------------------------------------------------------------
// SECTION 3: GENERAL KNOWLEDGE (40 QUESTIONS PATTERN)
// -------------------------------------------------------------

// Sub-component: Everyday Science (10 Questions)
const SCIENCE_POOL: StsQuestionItem[] = [
  {
    id: 'sts-sci-01',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'Deficiency of Vitamin C in human diet causes which condition?',
    options: ['Rickets', 'Scurvy', 'Night blindness', 'Beriberi'],
    correctIndex: 1,
    explanation: 'Vitamin C (Ascorbic acid) deficiency leads to Scurvy, characterized by bleeding gums and delayed wound healing.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-sci-02',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'Which blood group is universally designated as the "Universal Donor"?',
    options: ['Blood Group AB Positive', 'Blood Group O Negative', 'Blood Group A Positive', 'Blood Group B Negative'],
    correctIndex: 1,
    explanation: 'O-negative red blood cells lack A, B, and Rh surface antigens, allowing them to be safely transfused to recipients of any blood type.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-sci-03',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'What is the standard SI unit of atmospheric or fluid pressure?',
    options: ['Newton', 'Pascal', 'Joule', 'Watt'],
    correctIndex: 1,
    explanation: 'The SI unit of pressure is Pascal (Pa), equivalent to one Newton per square metre (N/m²).',
    difficulty: 'Easy',
  },
  {
    id: 'sts-sci-04',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'Which planet in our solar system possesses the fastest rotation on its axis, resulting in the shortest day?',
    options: ['Earth', 'Mars', 'Jupiter', 'Mercury'],
    correctIndex: 2,
    explanation: 'Jupiter rotates on its axis once every approximately 9 hours and 55 minutes, giving it the shortest day in the solar system.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-sci-05',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'What is the chemical formula of common washing soda?',
    options: ['NaHCO₃', 'Na₂CO₃·10H₂O', 'NaCl', 'CaSO₄·2H₂O'],
    correctIndex: 1,
    explanation: 'Washing soda is hydrated sodium carbonate (Na₂CO₃·10H₂O), whereas baking soda is sodium bicarbonate (NaHCO₃).',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
  {
    id: 'sts-sci-06',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'Which human organ is primarily responsible for filtering urea and metabolic waste products from the bloodstream?',
    options: ['Liver', 'Kidneys', 'Spleen', 'Pancreas'],
    correctIndex: 1,
    explanation: 'The kidneys filter blood through millions of nephrons to excrete urea, excess salts, and water as urine.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-sci-07',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'The bending of a light ray as it passes from one transparent medium to another of different optical density is known as:',
    options: ['Reflection', 'Refraction', 'Diffraction', 'Dispersion'],
    correctIndex: 1,
    explanation: 'Refraction is the change in direction and speed of light waves when passing between different media.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-sci-08',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'Which gas comprises the highest percentage by volume in Earth’s atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'],
    correctIndex: 1,
    explanation: 'Nitrogen constitutes approximately 78.08% of dry atmospheric air by volume.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-sci-09',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'A solution with a pH value of exactly 3 is classified as:',
    options: ['Neutral', 'Strongly Acidic', 'Weakly Basic', 'Alkaline'],
    correctIndex: 1,
    explanation: 'The pH scale runs from 0 to 14. Values below 7 are acidic; a pH of 3 is strongly acidic.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-sci-10',
    part: 'general',
    subSection: 'Everyday Science',
    question: 'Sound waves cannot propagate through which of the following media?',
    options: ['Solid iron', 'Pure water', 'Vacuum', 'Air at sea level'],
    correctIndex: 2,
    explanation: 'Sound is a mechanical longitudinal wave requiring a physical medium of particles to transmit vibrations; it cannot travel in a vacuum.',
    difficulty: 'Easy',
  },
];

// Sub-component: Current Affairs & World GK (10 Questions)
const WORLD_GK_POOL: StsQuestionItem[] = [
  {
    id: 'sts-wgk-01',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'Where is the permanent headquarters of the United Nations Educational, Scientific and Cultural Organization (UNESCO) situated?',
    options: ['Geneva, Switzerland', 'Paris, France', 'New York, USA', 'Vienna, Austria'],
    correctIndex: 1,
    explanation: 'UNESCO is headquartered in Paris, France.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-wgk-02',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'Which narrow strait connects the Persian Gulf with the Gulf of Oman and the Arabian Sea?',
    options: ['Strait of Malacca', 'Strait of Hormuz', 'Bab-el-Mandeb', 'Bosphorus Strait'],
    correctIndex: 1,
    explanation: 'The Strait of Hormuz is the world’s most critical petroleum transit chokepoint, linking the Persian Gulf with the Gulf of Oman.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-wgk-03',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'The International Court of Justice (ICJ) is established in which European city?',
    options: ['Brussels, Belgium', 'The Hague, Netherlands', 'Rome, Italy', 'Bern, Switzerland'],
    correctIndex: 1,
    explanation: 'The ICJ, the principal judicial organ of the United Nations, sits at the Peace Palace in The Hague, Netherlands.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-wgk-04',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'Which country is known as the "Land of the Midnight Sun"?',
    options: ['Finland', 'Norway', 'Iceland', 'Canada'],
    correctIndex: 1,
    explanation: 'Norway experiences continuous daylight during summer months in its northern arctic regions.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-wgk-05',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'What is the currency of Japan?',
    options: ['Yuan', 'Yen', 'Won', 'Ringgit'],
    correctIndex: 1,
    explanation: 'The Japanese Yen (JPY) is the official currency of Japan.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-wgk-06',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'The Suez Canal directly connects which two bodies of water?',
    options: ['Mediterranean Sea and Red Sea', 'Atlantic Ocean and Pacific Ocean', 'Black Sea and Aegean Sea', 'Arabian Sea and Bay of Bengal'],
    correctIndex: 0,
    explanation: 'The Suez Canal in Egypt provides a direct maritime conduit between the Mediterranean Sea and the northern Red Sea.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-wgk-07',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'How many non-permanent member states sit on the United Nations Security Council (UNSC) at any given time?',
    options: ['5 members', '10 members', '15 members', '20 members'],
    correctIndex: 1,
    explanation: 'The UNSC has 15 total members: 5 permanent veto-holding members and 10 non-permanent members elected for two-year terms.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-wgk-08',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'What is the capital city of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctIndex: 2,
    explanation: 'Canberra was chosen as the federal capital of Australia in 1908 as a compromise between Sydney and Melbourne.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-wgk-09',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'The World Health Organization (WHO) declared its headquarters in which city?',
    options: ['Geneva, Switzerland', 'Washington D.C., USA', 'London, UK', 'Tokyo, Japan'],
    correctIndex: 0,
    explanation: 'WHO is headquartered in Geneva, Switzerland.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-wgk-10',
    part: 'general',
    subSection: 'Current Affairs & World GK',
    question: 'Which treaty established the European Union in 1993?',
    options: ['Treaty of Versailles', 'Maastricht Treaty', 'Treaty of Rome', 'Kyoto Protocol'],
    correctIndex: 1,
    explanation: 'The Maastricht Treaty (signed in 1992, effective 1993) created the European Union and paved the way for the Euro.',
    difficulty: 'Hard',
    categoryTier: 'graduation',
  },
];

// Sub-component: Pakistan Affairs & Sindh Studies (10 Questions)
const PAK_STUDIES_POOL: StsQuestionItem[] = [
  {
    id: 'sts-pak-01',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'Under the 1973 Constitution of Pakistan, what is the term of office for an elected member of the Senate?',
    options: ['3 years', '4 years', '5 years', '6 years'],
    correctIndex: 3,
    explanation: 'Senators serve a six-year term, with half of the house retiring every three years.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-pak-02',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'Which barrage is the southernmost barrage constructed on the Indus River in Sindh?',
    options: ['Guddu Barrage', 'Sukkur Barrage', 'Kotri Barrage (Ghulam Muhammad Barrage)', 'Taunsa Barrage'],
    correctIndex: 2,
    explanation: 'Kotri Barrage (also called Ghulam Muhammad Barrage), completed in 1955 near Jamshoro/Hyderabad, is the southernmost barrage on the Indus before it reaches the delta.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-pak-03',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'The historical Kot Diji Fort is located in which district of Sindh?',
    options: ['Larkana', 'Khairpur Mirs', 'Thatta', 'Jamshoro'],
    correctIndex: 1,
    explanation: 'Kot Diji Fort (Fort Ahmadabad) was built in the late 18th century by Mir Sohrab Khan Talpur in Khairpur district.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-pak-04',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'Makli Necropolis, one of the largest funerary sites in the world, is situated in which district of Sindh?',
    options: ['Badin', 'Thatta', 'Sujawal', 'Hyderabad'],
    correctIndex: 1,
    explanation: 'Makli Hill is located near Thatta, housing approximately half a million graves and tombs spanning from the 14th to 18th centuries.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-pak-05',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'Who authored the renowned Sindhi literary classic "Shah Jo Risalo"?',
    options: ['Sachal Sarmast', 'Shah Abdul Latif Bhittai', 'Shaikh Ayaz', 'Makhdoom Bilawal'],
    correctIndex: 1,
    explanation: 'Shah Jo Risalo is the celebrated poetic compilation of mystic Sufi poet Shah Abdul Latif Bhittai (1689–1752).',
    difficulty: 'Easy',
  },
  {
    id: 'sts-pak-06',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'Gorakh Hill Station, often called the "Murree of Sindh", is situated in which mountain range?',
    options: ['Sulaiman Range', 'Kirthar Range', 'Safed Koh', 'Salt Range'],
    correctIndex: 1,
    explanation: 'Gorakh Hill Station is situated in the Kirthar Mountain Range in Dadu district, at an elevation of over 5,600 feet.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-pak-07',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'Which Constitutional Amendment in Pakistan abolished the Concurrent Legislative List and devolved powers to the provinces?',
    options: ['17th Amendment', '18th Amendment', '19th Amendment', '21st Amendment'],
    correctIndex: 1,
    explanation: 'The 18th Constitutional Amendment (passed in April 2010) enhanced provincial autonomy by abolishing the concurrent list.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-pak-08',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'The historic Lahore Resolution was presented on 23rd March 1940 by which prominent political figure?',
    options: ['Liaquat Ali Khan', 'A.K. Fazlul Huq (Sher-e-Bengal)', 'Chaudhry Khaliquzzaman', 'Huseyn Shaheed Suhrawardy'],
    correctIndex: 1,
    explanation: 'Abul Kashem Fazlul Huq, the Premier of Bengal, moved the historic Lahore Resolution at Minto Park in March 1940.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-pak-09',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'Which natural freshwater lake in Sindh is one of the largest in Asia?',
    options: ['Keenjhar Lake', 'Manchar Lake', 'Haleji Lake', 'Hadero Lake'],
    correctIndex: 1,
    explanation: 'Manchar Lake, situated in Jamshoro and Dadu districts west of the Indus, is Pakistan’s largest natural freshwater lake.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-pak-10',
    part: 'general',
    subSection: 'Pakistan Affairs & Sindh Studies',
    question: 'Which river is the longest river flowing through Pakistan?',
    options: ['Chenab River', 'Jhelum River', 'Indus River', 'Sutlej River'],
    correctIndex: 2,
    explanation: 'The Indus River (approx 3,180 km total length) is the longest river in Pakistan.',
    difficulty: 'Easy',
  },
];

// Sub-component: Computer Basics & Islamiat / Ethics (10 Questions)
const COMPUTER_ISLAMIAT_POOL: StsQuestionItem[] = [
  // 5 Computer
  {
    id: 'sts-comp-01',
    part: 'general',
    subSection: 'Computer Basics',
    question: 'In Microsoft Excel, which keyboard shortcut allows you to quickly repeat the last action or apply absolute cell referencing ($A$1)?',
    options: ['F2', 'F4', 'F7', 'F12'],
    correctIndex: 1,
    explanation: 'Pressing F4 in Excel toggles absolute/relative reference modes ($A$1) in formulas, or repeats the last formatting action.',
    difficulty: 'Medium',
    categoryTier: 'graduation',
  },
  {
    id: 'sts-comp-02',
    part: 'general',
    subSection: 'Computer Basics',
    question: 'Which shortcut key in Microsoft Word is used to align selected text to the center?',
    options: ['Ctrl + C', 'Ctrl + E', 'Ctrl + J', 'Ctrl + R'],
    correctIndex: 1,
    explanation: 'Ctrl + E centers text in MS Word (Ctrl + L is left, Ctrl + R is right, Ctrl + J is justify).',
    difficulty: 'Easy',
  },
  {
    id: 'sts-comp-03',
    part: 'general',
    subSection: 'Computer Basics',
    question: 'How many bytes are there in one Megabyte (MB) under binary computing standards?',
    options: ['1,000,000 bytes', '1,024 Kilobytes (1,048,576 bytes)', '1,024 bytes', '512 Kilobytes'],
    correctIndex: 1,
    explanation: '1 KB = 1024 Bytes; 1 MB = 1024 KB = 1,048,576 Bytes.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-comp-04',
    part: 'general',
    subSection: 'Computer Basics',
    question: 'Which of the following is considered volatile memory, losing its stored data when power is switched off?',
    options: ['Hard Disk Drive (HDD)', 'Read-Only Memory (ROM)', 'Random Access Memory (RAM)', 'Solid State Drive (SSD)'],
    correctIndex: 2,
    explanation: 'RAM is primary volatile memory that requires electrical power to retain data.',
    difficulty: 'Easy',
  },
  {
    id: 'sts-comp-05',
    part: 'general',
    subSection: 'Computer Basics',
    question: 'What is the function of the "Ctrl + Z" shortcut key across operating systems?',
    options: ['Redo last operation', 'Undo last operation', 'Save active file', 'Close active window'],
    correctIndex: 1,
    explanation: 'Ctrl + Z reverses (undoes) the most recent action.',
    difficulty: 'Easy',
  },

  // 5 Islamiat / Ethics
  {
    id: 'sts-isl-01',
    part: 'general',
    subSection: 'Islamiat & Ethics',
    question: 'In which Hijri year did the historic Battle of Badr (Ghazwa-e-Badr) take place?',
    options: ['1st Hijri', '2nd Hijri', '3rd Hijri', '5th Hijri'],
    correctIndex: 1,
    explanation: 'Ghazwa-e-Badr was fought on 17th Ramadan in the 2nd year of Hijrah (624 CE).',
    difficulty: 'Easy',
  },
  {
    id: 'sts-isl-02',
    part: 'general',
    subSection: 'Islamiat & Ethics',
    question: 'Under whose Caliphate was the Holy Quran compiled into a single unified standard written book (Mushaf)?',
    options: ['Hazrat Abu Bakr Siddique (RA)', 'Hazrat Umar Farooq (RA)', 'Hazrat Usman Ghani (RA)', 'Hazrat Ali ibn Abi Talib (RA)'],
    correctIndex: 0,
    explanation: 'The first unified compilation of Quranic manuscripts was commissioned by the first Caliph, Hazrat Abu Bakr (RA), following the Battle of Yamama.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-isl-03',
    part: 'general',
    subSection: 'Islamiat & Ethics',
    question: 'How many total chapters (Surahs) are in the Holy Quran?',
    options: ['110 Surahs', '114 Surahs', '120 Surahs', '124 Surahs'],
    correctIndex: 1,
    explanation: 'The Holy Quran consists of 114 Surahs (86 Makki and 28 Madani).',
    difficulty: 'Easy',
  },
  {
    id: 'sts-isl-04',
    part: 'general',
    subSection: 'Islamiat & Ethics',
    question: 'The famous Treaty of Hudaibiyyah (Sulh al-Hudaybiyyah) was concluded in which Hijri year?',
    options: ['4th Hijri', '6th Hijri', '8th Hijri', '10th Hijri'],
    correctIndex: 1,
    explanation: 'The Treaty of Hudaibiyyah was signed in Dhu al-Qi\'dah, 6th Hijri, between the Muslims of Medina and the Quraysh of Mecca.',
    difficulty: 'Medium',
  },
  {
    id: 'sts-isl-05',
    part: 'general',
    subSection: 'Islamiat & Ethics',
    question: 'Zakat is the third pillar of Islam. What is the prescribed annual rate of Zakat on qualifying savings or wealth (Nisab)?',
    options: ['2.0%', '2.5% (one-fortieth)', '5.0%', '10.0%'],
    correctIndex: 1,
    explanation: 'Zakat is payable at the rate of 2.5% (or 1/40th) on wealth held for a full lunar year above the Nisab threshold.',
    difficulty: 'Easy',
  },
];

// -------------------------------------------------------------
// DEDICATED TEACHING TRACKS: PST & JEST MODULES
// -------------------------------------------------------------

export const PST_JEST_PEDAGOGY_POOL: StsQuestionItem[] = [
  {
    id: 'sts-ped-01',
    part: 'general',
    subSection: 'Pedagogy & Child Development',
    question: 'According to Jean Piaget’s theory of cognitive development, in which stage does a child develop logical reasoning about concrete events?',
    options: ['Sensorimotor stage (0–2 yrs)', 'Pre-operational stage (2–7 yrs)', 'Concrete operational stage (7–11 yrs)', 'Formal operational stage (12+ yrs)'],
    correctIndex: 2,
    explanation: 'The Concrete Operational stage (approx. 7–11 years) is characterized by logical thinking about real, physical objects and conservation concepts.',
    difficulty: 'Medium',
    categoryTier: 'teaching',
  },
  {
    id: 'sts-ped-02',
    part: 'general',
    subSection: 'Pedagogy & Child Development',
    question: 'In Bloom’s Revised Taxonomy, what is the highest level of cognitive learning?',
    options: ['Analyzing', 'Evaluating', 'Creating', 'Applying'],
    correctIndex: 2,
    explanation: 'In Anderson and Krathwohl’s revised taxonomy (2001), "Creating" represents the pinnacle level of cognitive domain.',
    difficulty: 'Medium',
    categoryTier: 'teaching',
  },
  {
    id: 'sts-ped-03',
    part: 'general',
    subSection: 'Pedagogy & Child Development',
    question: 'What is the primary objective of "Formative Assessment" in classroom teaching?',
    options: ['To assign final end-of-year letter grades', 'To monitor student learning progress and provide ongoing corrective feedback', 'To rank students for scholarship distribution', 'To evaluate school infrastructure'],
    correctIndex: 1,
    explanation: 'Formative assessment happens during instruction to diagnose learning gaps and adapt teaching methods.',
    difficulty: 'Easy',
    categoryTier: 'teaching',
  },
  {
    id: 'sts-ped-04',
    part: 'general',
    subSection: 'Pedagogy & Child Development',
    question: 'Which teaching approach centers instruction around real-world problem-solving rather than rote memorization?',
    options: ['Constructivist Inquiry-Based Learning', 'Direct Lecture Method', 'Grammar-Translation Method', 'Authoritarian Classroom Model'],
    correctIndex: 0,
    explanation: 'Constructivist inquiry encourages students to build knowledge actively through exploration and problem solving.',
    difficulty: 'Easy',
    categoryTier: 'teaching',
  },
  {
    id: 'sts-ped-05',
    part: 'general',
    subSection: 'Pedagogy & Child Development',
    question: 'Which strategy is most effective for handling disruptive behavior in a primary classroom?',
    options: ['Immediate physical punishment', 'Praising positive behavior, establishing clear routines, and calm verbal intervention', 'Ignoring the student for the entire term', 'Expelling the child from school'],
    correctIndex: 1,
    explanation: 'Positive reinforcement, explicit routines, and constructive intervention form modern pedagogical best practices.',
    difficulty: 'Easy',
    categoryTier: 'teaching',
  },
];

export const SINDHI_URDU_MOTHER_TONGUE_POOL: StsQuestionItem[] = [
  {
    id: 'sts-lang-01',
    part: 'general',
    subSection: 'Mother Tongue (Sindhi / Urdu)',
    question: 'سنڌي ادب ۾ ”شاهه جو رسالو“ ڪيتريون ئي سُرن تي ٻڌل آهي؟ (In Sindhi literature, Shah Jo Risalo is structured into how many Suras / poetic chapters?)',
    options: ['20 سُر', '30 سُر', '36 سُر', '40 سُر'],
    correctIndex: 1,
    explanation: 'Shah Jo Risalo conventionally comprises 30 distinct thematic Suras (e.g. Kalyan, Yaman, Sarang, Sassui, Marui, Sorath).',
    difficulty: 'Medium',
    categoryTier: 'teaching',
  },
  {
    id: 'sts-lang-02',
    part: 'general',
    subSection: 'Mother Tongue (Sindhi / Urdu)',
    question: 'سنڌي گرامر ۾ اهو لفظ جيڪو ڪنهن ماڻهو، جاءِ يا شيءِ جي نالي کي ظاهر ڪري، ڇا چئبو آهي؟',
    options: ['اسم (Noun)', 'فعل (Verb)', 'ضمير (Pronoun)', 'حرف (Preposition)'],
    correctIndex: 0,
    explanation: 'اسم (Noun) represents the name of a person, place, thing, or abstract quality.',
    difficulty: 'Easy',
    categoryTier: 'teaching',
  },
  {
    id: 'sts-lang-03',
    part: 'general',
    subSection: 'Mother Tongue (Sindhi / Urdu)',
    question: 'اردو زبان میں وہ اسم جو کسی خاص شخص، خاص جگہ یا خاص چیز کے نام کو ظاہر کرے، کیا کہلاتا ہے؟',
    options: ['اسم نکرہ (Common Noun)', 'اسم معرفہ (Proper Noun)', 'اسم ضمیر (Pronoun)', 'اسم صفت (Adjective)'],
    correctIndex: 1,
    explanation: 'اسم معرفہ (Proper Noun) denotes a specific or unique entity (e.g. قائد اعظم، دریائے سندھ).',
    difficulty: 'Easy',
    categoryTier: 'teaching',
  },
  {
    id: 'sts-lang-04',
    part: 'general',
    subSection: 'Mother Tongue (Sindhi / Urdu)',
    question: 'اردو محاورے ”آ بیل مجھے مار“ کا درست مفہوم کیا ہے؟',
    options: ['طاقتور سے مقابلہ کرنا', 'خود جان بوجھ کر مصیبت مول لینا', 'بہادری کا مظاہرہ کرنا', 'بیل کی پرورش کرنا'],
    correctIndex: 1,
    explanation: '”آ بیل مجھے مار“ means deliberately inviting trouble or peril upon oneself.',
    difficulty: 'Easy',
    categoryTier: 'teaching',
  },
];

// -------------------------------------------------------------
// 100-QUESTION PAPER GENERATOR (STRICT 40-20-40 SPLIT)
// -------------------------------------------------------------

export interface StsGeneratedPaper {
  category: StsCategory;
  categoryInfo: StsCategoryInfo;
  paperTitle: string;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  sections: {
    title: string;
    weightage: string;
    questionsCount: number;
    description: string;
    questions: StsQuestionItem[];
  }[];
  allQuestions: StsQuestionItem[];
  readingPassages: StsReadingPassage[];
}

export function generateStsExamPaper(category: StsCategory): StsGeneratedPaper {
  const catInfo = STS_CATEGORIES[category] || STS_CATEGORIES.graduation;

  // 1. Part I: English (Exact 40 Questions)
  // - 10 Reading Comprehension (Passage 1: 5 Qs, Passage 2: 5 Qs)
  // - 10 Synonyms / Antonyms (5 Synonyms + 5 Antonyms)
  // - 5 Spellings
  // - 5 Error Detection
  // - 10 Prepositions & Grammar
  const passage1Questions: StsQuestionItem[] = STS_READING_PASSAGES[0].questions.map((q, idx) => ({
    id: `sts-rc1-${idx + 1}`,
    part: 'english',
    subSection: 'Reading Comprehension (Passage 1: Indus Civilization)',
    question: q.prompt,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    difficulty: 'Medium',
    isReadingPassage: true,
    passageId: STS_READING_PASSAGES[0].id,
  }));

  const passage2Questions: StsQuestionItem[] = STS_READING_PASSAGES[1].questions.map((q, idx) => ({
    id: `sts-rc2-${idx + 1}`,
    part: 'english',
    subSection: 'Reading Comprehension (Passage 2: Sukkur Barrage)',
    question: q.prompt,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    difficulty: 'Medium',
    isReadingPassage: true,
    passageId: STS_READING_PASSAGES[1].id,
  }));

  const readingComprehension = [...passage1Questions, ...passage2Questions]; // 10 Qs
  const synonyms = SYNONYMS_POOL.slice(0, 5); // 5 Qs
  const antonyms = ANTONYMS_POOL.slice(0, 5); // 5 Qs
  const spellings = SPELLINGS_POOL.slice(0, 5); // 5 Qs
  const errorDetection = ERROR_DETECTION_POOL.slice(0, 5); // 5 Qs
  const prepositionsGrammar = PREPOSITIONS_GRAMMAR_POOL.slice(0, 10); // 10 Qs

  const englishSectionQuestions: StsQuestionItem[] = [
    ...readingComprehension,
    ...synonyms,
    ...antonyms,
    ...spellings,
    ...errorDetection,
    ...prepositionsGrammar,
  ]; // Exactly 40 Questions

  // 2. Part II: Mathematics (Exact 20 Questions)
  // - 4 Arithmetic & Fractions
  // - 4 Percentages & Profit/Loss
  // - 4 Ratios & Proportions
  // - 4 Algebraic Equations
  // - 4 Word Problems & Averages
  const mathSectionQuestions = MATHEMATICS_POOL.slice(0, 20); // Exactly 20 Questions

  // 3. Part III: General Knowledge (Exact 40 Questions)
  // - 10 Everyday Science
  // - 10 Current Affairs & World GK
  // - 10 Pakistan Affairs & Sindh Studies
  // - 10 Computer Basics & Islamiat
  let gkSectionQuestions: StsQuestionItem[] = [];

  if (category === 'pst') {
    // PST special module injection: 10 Mother Tongue + 10 Pedagogy + 10 Science + 10 Pak Studies/Islamiat
    gkSectionQuestions = [
      ...SINDHI_URDU_MOTHER_TONGUE_POOL.slice(0, 4),
      ...PST_JEST_PEDAGOGY_POOL.slice(0, 5),
      ...SCIENCE_POOL.slice(0, 10),
      ...PAK_STUDIES_POOL.slice(0, 10),
      ...COMPUTER_ISLAMIAT_POOL.slice(0, 10),
      ...SINDHI_URDU_MOTHER_TONGUE_POOL.slice(0, 1),
    ];
  } else if (category === 'jest') {
    // JEST special module: 10 Pedagogy + 10 Science + 10 Computer + 10 GK/Pak Studies
    gkSectionQuestions = [
      ...PST_JEST_PEDAGOGY_POOL.slice(0, 5),
      ...PST_JEST_PEDAGOGY_POOL.slice(0, 5), // repeated or expanded pedagogy
      ...SCIENCE_POOL.slice(0, 10),
      ...COMPUTER_ISLAMIAT_POOL.slice(0, 10),
      ...PAK_STUDIES_POOL.slice(0, 10),
    ];
  } else {
    // Standard Screening (Graduation, Intermediate, Matric): 10 Science + 10 World GK + 10 Pak Studies + 10 Computer/Islamiat
    gkSectionQuestions = [
      ...SCIENCE_POOL.slice(0, 10),
      ...WORLD_GK_POOL.slice(0, 10),
      ...PAK_STUDIES_POOL.slice(0, 10),
      ...COMPUTER_ISLAMIAT_POOL.slice(0, 10),
    ];
  }

  const sections = [
    {
      title: 'Part I: English',
      weightage: '40% (40 MCQs / 40 Marks)',
      questionsCount: englishSectionQuestions.length,
      description: '10 Reading Comprehension, 10 Synonyms & Antonyms, 5 Spellings, 5 Error Detection, and 10 Prepositions & Grammar.',
      questions: englishSectionQuestions,
    },
    {
      title: 'Part II: Mathematics',
      weightage: '20% (20 MCQs / 20 Marks)',
      questionsCount: mathSectionQuestions.length,
      description: 'Arithmetic & Fractions, Percentages & Profit/Loss, Ratios & Proportions, Algebraic Equations, and Practical Word Problems.',
      questions: mathSectionQuestions,
    },
    {
      title: 'Part III: General Knowledge',
      weightage: '40% (40 MCQs / 40 Marks)',
      questionsCount: gkSectionQuestions.length,
      description: category === 'pst' || category === 'jest'
        ? 'Curated pedagogy, everyday science, mother tongue (Sindhi/Urdu), computer literacy, and Pakistan studies.'
        : '10 Everyday Science, 10 Current Affairs & World GK, 10 Pakistan Affairs & Sindh Studies, and 10 Computer Basics & Islamiat.',
      questions: gkSectionQuestions,
    },
  ];

  const allQuestions = [
    ...englishSectionQuestions,
    ...mathSectionQuestions,
    ...gkSectionQuestions,
  ];

  return {
    category,
    categoryInfo: catInfo,
    paperTitle: `Sukkur IBA STS Screening Test Simulator (${catInfo.name})`,
    totalQuestions: allQuestions.length, // 100
    totalMarks: 100,
    durationMinutes: 100,
    sections,
    allQuestions,
    readingPassages: STS_READING_PASSAGES,
  };
}

export function stsItemToMcq(item: StsQuestionItem): MCQ {
  const cat = item.part === 'english'
    ? 'english'
    : item.part === 'mathematics'
    ? 'basic-maths'
    : item.subSection.toLowerCase().includes('science')
    ? 'everyday-science'
    : item.subSection.toLowerCase().includes('islam') || item.subSection.toLowerCase().includes('computer')
    ? 'computer-skills'
    : 'pakistan-affairs';

  return {
    id: item.id,
    question: item.question,
    options: item.options,
    correctIndex: item.correctIndex,
    explanation: item.explanation,
    category: cat,
    subtopic: item.subSection,
    difficulty: item.difficulty,
    examTags: ['STS', 'BPS-05-15', 'Sukkur-IBA'],
  };
}

export const STS_100_PATTERN_MCQS: MCQ[] = generateStsExamPaper('graduation').allQuestions.map(stsItemToMcq);
export const PST_PEDAGOGY_MCQS: MCQ[] = PST_JEST_PEDAGOGY_POOL.map(stsItemToMcq);
export const PST_SINDHI_MCQS: MCQ[] = SINDHI_URDU_MOTHER_TONGUE_POOL.slice(0, 3).map(stsItemToMcq);
export const PST_URDU_MCQS: MCQ[] = SINDHI_URDU_MOTHER_TONGUE_POOL.slice(3).map(stsItemToMcq);
