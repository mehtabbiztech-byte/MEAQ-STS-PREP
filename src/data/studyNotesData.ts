import { StudyNote, StudySubject } from '../types';
import { MCQS_DATA } from './mcqsData';

export const STUDY_NOTES_DATA: StudyNote[] = [
  {
    id: 'note-01',
    title: 'Constitutional History of Pakistan: 1956, 1962 & 1973',
    subject: 'Pakistan Studies',
    readTime: '6 min read',
    summary: 'A fast-track comparative analysis of Pakistan\'s three constitutions, key institutions, Islamic provisions, and major milestones.',
    keyPoints: [
      '1956 Constitution: Promulgated on March 23, 1956. Declared Pakistan an Islamic Republic with a unicameral legislature (National Assembly of 300 members with parity between East and West Pakistan). Abrogated on October 7, 1958.',
      '1962 Constitution: Promulgated on June 8, 1962 by Field Marshal Ayub Khan. Introduced a presidential system, Basic Democracies (80,000 electoral college), and unicameral parliament. Abrogated on March 25, 1969.',
      '1973 Constitution: Enacted on August 14, 1973 under Zulfikar Ali Bhutto. Introduced a bicameral parliament (National Assembly & Senate) and parliamentary executive led by Prime Minister.',
      '18th Amendment (2010): Abolished concurrent legislative list, devolved powers to provinces, repealed Article 58(2)(b), and renamed NWFP to Khyber Pakhtunkhwa.',
    ],
    frequentlyAsked: [
      'Who was the chairman of the 1973 Constitution drafting committee? (Abdul Hafeez Pirzada)',
      'Which amendment introduced the Federal Shariat Court? (8th Amendment / 1980 Presidential Order)',
      'Under which article is the National Finance Commission (NFC) Award formulated? (Article 160)',
    ],
  },
  {
    id: 'note-02',
    title: 'Indus Water Treaty (1960) & Transboundary Rivers',
    subject: 'General Knowledge & Pakistan Geography',
    readTime: '5 min read',
    summary: 'The water-sharing treaty brokered by the World Bank between Pakistan and India, signed in Karachi on September 19, 1960.',
    keyPoints: [
      'Signatories: President Field Marshal Ayub Khan (Pakistan) and Prime Minister Jawaharlal Nehru (India).',
      'Mediator: International Bank for Reconstruction and Development (World Bank).',
      'Western Rivers allocated to Pakistan: Indus, Jhelum, and Chenab (approx 80% flow).',
      'Eastern Rivers allocated to India: Ravi, Beas, and Sutlej.',
      'Pakistan built Tarbela Dam (Indus River, 1976) and Mangla Dam (Jhelum River, 1967) under the Indus Basin Development Fund to compensate water loss.',
    ],
    frequentlyAsked: [
      'Where was the Indus Water Treaty signed? (Karachi)',
      'Which World Bank president brokered the treaty? (Eugene R. Black)',
      'What is the dispute mechanism under the treaty? (Neutral Expert and Court of Arbitration at The Hague)',
    ],
  },
  {
    id: 'note-03',
    title: 'Essential Prepositions & Idioms for Competitive English',
    subject: 'English',
    readTime: '8 min read',
    summary: 'Most frequently tested prepositions, verb-preposition pairs, and Latin adjectives tested by FPSC, PPSC, and STS.',
    keyPoints: [
      'Latin Comparatives take "TO": Senior to, Junior to, Prior to, Superior to, Inferior to, Prefer... to (e.g. "I prefer tea to coffee").',
      'Die OF vs Die FROM: Die of disease/hunger (e.g. "He died of malaria"); Die from wound/overwork (e.g. "He died from snakebite / exhaustion").',
      'Abide by rules, Abstain from smoking, Accused of theft, Acquitted of murder.',
      'Congratulate ON success, Comply WITH regulations, Deprived OF rights, Eligible FOR the post.',
    ],
    frequentlyAsked: [
      'He insisted _____ going there immediately. (on)',
      'She is blind _____ one eye. (in) vs blind _____ faults (to)',
      'The criminal was convicted _____ armed robbery. (of)',
    ],
  },
  {
    id: 'note-04',
    title: 'Human Body Systems, Blood Groups & Vitamins Cheat Sheet',
    subject: 'Everyday Science',
    readTime: '7 min read',
    summary: 'High-frequency biology and everyday science facts repeatedly queried in CSS MPT, PPSC, and STS screening tests.',
    keyPoints: [
      'Universal Blood Donor: O negative (O-); Universal Blood Recipient: AB positive (AB+).',
      'Largest organ in human body: Skin (integumentary system); Largest internal gland: Liver.',
      'Normal human body temperature: 98.6°F (37°C); Blood pH: 7.35 to 7.45 (slightly basic).',
      'Fat-soluble vitamins: A, D, E, K; Water-soluble vitamins: B-complex and C.',
      'Vitamin A deficiency: Night Blindness; Vitamin B1: Beri-beri; Vitamin C: Scurvy; Vitamin D: Rickets.',
    ],
    frequentlyAsked: [
      'Which blood cells fight infections? (Leukocytes / White Blood Cells)',
      'Which hormone regulates glucose metabolism? (Insulin, secreted by Islets of Langerhans in pancreas)',
      'Which organ cleanses and filters blood? (Kidneys, containing nephrons)',
    ],
  },
];

// Preserve the original revision sheets while giving each lesson a stable place
// in the curriculum. Related IDs refer to the existing question bank, not an
// assertion that a question appeared in a particular official paper.
const locations: Record<string, { chapter: string; topic: string; questionIds: string[] }> = {
  'note-01': { chapter: 'Constitutional history', topic: 'Constitutions and amendments', questionIds: ['ps-01', 'ps-04'] },
  'note-02': { chapter: 'Physical geography', topic: 'Water and rivers', questionIds: [] },
  'note-03': { chapter: 'Grammar', topic: 'Prepositions and idioms', questionIds: [] },
  'note-04': { chapter: 'Biology', topic: 'Human body', questionIds: [] },
};

export const STUDY_CURRICULUM: StudySubject[] = [
  {
    id: 'mathematics', title: 'Mathematics', chapters: [{ id: 'numbers', title: 'Numbers and operations', topics: [{
      id: 'addition', title: 'Addition', lessons: [{
        id: 'adding-small-numbers', title: 'Let’s add together', audience: 'kids', readTime: '4 min read',
        explanation: 'Adding means putting groups together. Count the first group, then count on for the second group to find how many there are altogether.',
        examples: ['You have 2 pencils. A friend gives you 3 more. Now you have 5 pencils.', 'Start at 4 and count two more: 5, 6. So 4 + 2 = 6.'],
        importantPoints: ['The + sign means add.', 'The = sign means both sides have the same value.', 'Adding zero does not change a number.'],
        images: [{ src: '/lessons/addition.svg', alt: 'Two green counters plus three blue counters equals five counters.', caption: 'Count the counters: 2 + 3 = 5.' }],
        tables: [{ title: 'Try counting on', headers: ['Start with', 'Add', 'Total'], rows: [['1', '2', '3'], ['2', '3', '5'], ['4', '2', '6']] }],
        formulas: ['2 + 3 = 5'],
        mcqs: [{ id: 'lesson-add-1', question: 'You have 3 books and get 2 more. How many now?', options: ['4', '5', '6'], correctIndex: 1, explanation: 'Count on from 3: 4, 5. There are 5 books.', category: 'mathematics', difficulty: 'Easy' }],
        practice: [{ prompt: 'Draw 4 circles and then 3 more. How many circles?', answer: '7 circles: 4 + 3 = 7.' }], relatedQuestionIds: [],
      }],
    }, {
      id: 'percentages', title: 'Percentages', lessons: [{
        id: 'percentage-foundations', title: 'Percentages for aptitude tests', audience: 'advanced', readTime: '6 min read',
        explanation: 'A percentage expresses a ratio out of 100. Identify the base quantity before calculating: percentage change uses the original value as its denominator.',
        examples: ['A score of 36 out of 45 is (36 ÷ 45) × 100 = 80%.', 'A price rises from 800 to 1,000. The increase is 200 ÷ 800 × 100 = 25%.'],
        importantPoints: ['Convert p% to p/100 before multiplying.', 'Successive percentage changes multiply; they do not simply add.', 'A 20% increase followed by a 20% decrease leaves 96% of the original amount.'],
        formulas: ['Percentage = (part ÷ whole) × 100', 'Percentage change = ((new − original) ÷ original) × 100'],
        tables: [{ title: 'Useful equivalents', headers: ['Fraction', 'Decimal', 'Percentage'], rows: [['1/2', '0.5', '50%'], ['1/4', '0.25', '25%'], ['1/5', '0.2', '20%']] }],
        mcqs: [{ id: 'lesson-percent-1', question: 'A value increases by 20% and then decreases by 20%. What is the net change?', options: ['No change', '4% decrease', '4% increase', '40% decrease'], correctIndex: 1, explanation: 'Start at 100: 100 × 1.2 × 0.8 = 96, a 4% decrease.', category: 'mathematics', difficulty: 'Hard' }],
        practice: [{ prompt: 'A candidate answers 42 of 60 questions correctly. Calculate the score percentage.', answer: '42 ÷ 60 × 100 = 70%.' }], relatedQuestionIds: [],
      }],
    }] }],
  },
  ...STUDY_NOTES_DATA.map(note => {
    const location = locations[note.id];
    return {
      id: `subject-${note.id}`, title: note.subject,
      chapters: [{ id: `chapter-${note.id}`, title: location.chapter, topics: [{
        id: `topic-${note.id}`, title: location.topic, lessons: [{
          id: note.id, title: note.title, audience: 'advanced' as const, readTime: note.readTime,
          explanation: note.summary, examples: note.frequentlyAsked, importantPoints: note.keyPoints,
          mcqs: MCQS_DATA.filter(q => location.questionIds.includes(q.id)),
          practice: [{ prompt: 'Without looking, recall three important points from this lesson.', answer: note.keyPoints.slice(0, 3).join('\n\n') }],
          relatedQuestionIds: location.questionIds,
        }],
      }] }],
    };
  }),
];
