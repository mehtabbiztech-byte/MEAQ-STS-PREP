export interface PreparationRoomAnnouncement {
  title: string;
  url: string;
  checkedOn: string;
  type: 'Syllabus' | 'Schedule' | 'Announcement' | 'Past papers';
}

export interface PreparationRoom {
  id: string;
  examIds: string[];
  title: string;
  subtitle: string;
  accent: string;
  officialName: string;
  officialUrl: string;
  syllabusUrl: string;
  syllabusTopics: string[];
  pastPaperYears: number[];
  repeatedTopics: string[];
  dailyPlan: { label: string; minutes: number }[];
  testDate?: string;
  announcements: PreparationRoomAnnouncement[];
}

export const PREPARATION_ROOMS: PreparationRoom[] = [
  {
    id: 'sts-iba',
    examIds: ['sts'],
    title: 'STS / IBA Preparation Room',
    subtitle: 'School teaching, graduation and recruitment screening tests',
    accent: 'emerald',
    officialName: 'SIBA Testing Services',
    officialUrl: 'https://www.sts.net.pk/',
    syllabusUrl: 'https://www.sts.net.pk/',
    syllabusTopics: ['English & comprehension', 'Mathematics', 'General knowledge', 'Everyday science', 'Computer studies', 'Pakistan studies', 'Islamiat', 'Pedagogy & teaching aptitude'],
    pastPaperYears: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019],
    repeatedTopics: ['Percentages and ratios', 'Sentence correction', 'Pakistan geography', 'Basic science', 'Computer fundamentals', 'Teaching methods'],
    dailyPlan: [{ label: 'Review one syllabus topic', minutes: 15 }, { label: 'Solve 25 targeted MCQs', minutes: 25 }, { label: 'Revise saved mistakes', minutes: 10 }, { label: 'Attempt a timed mini-test', minutes: 20 }],
    announcements: [
      { title: 'Open the official STS announcements and projects portal', url: 'https://www.sts.net.pk/', checkedOn: '2026-09-14', type: 'Announcement' },
      { title: 'Confirm the syllabus shown in your active project advertisement', url: 'https://www.sts.net.pk/', checkedOn: '2026-09-14', type: 'Syllabus' },
    ],
  },
  {
    id: 'spsc-cce',
    examIds: ['spsc-cce'],
    title: 'SPSC / CCE Preparation Room',
    subtitle: 'Combined Competitive Examination and Sindh recruitment',
    accent: 'sky',
    officialName: 'Sindh Public Service Commission',
    officialUrl: 'https://spsc.gov.pk/',
    syllabusUrl: 'https://spsc.gos.pk/Syllabus/Dec2023/Revised-Syallabus-CCE.pdf',
    syllabusTopics: ['English Essay', 'English Precis & Composition', 'General Paper in Sindhi or Urdu', 'Current Affairs & Pakistan Affairs', 'General Science & Ability', 'Islamic Studies or Comparative Religion', 'Optional subjects'],
    pastPaperYears: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018],
    repeatedTopics: ['Constitutional development', 'Sindh history and culture', 'Pakistan economy', 'Climate and water', 'Governance', 'Precis, grammar and vocabulary'],
    dailyPlan: [{ label: 'Read one compulsory-subject lesson', minutes: 25 }, { label: 'Write one answer outline', minutes: 20 }, { label: 'Review current affairs', minutes: 15 }, { label: 'Solve past-paper questions', minutes: 30 }],
    announcements: [
      { title: 'Official revised CCE syllabus PDF', url: 'https://spsc.gos.pk/Syllabus/Dec2023/Revised-Syallabus-CCE.pdf', checkedOn: '2026-09-14', type: 'Syllabus' },
      { title: 'SPSC past papers and examination notices', url: 'https://spsc.gov.pk/', checkedOn: '2026-09-14', type: 'Past papers' },
    ],
  },
  {
    id: 'fpsc-css',
    examIds: ['css', 'fpsc'],
    title: 'FPSC / CSS Preparation Room',
    subtitle: 'Central Superior Services and federal recruitment',
    accent: 'violet',
    officialName: 'Federal Public Service Commission',
    officialUrl: 'https://www.fpsc.gov.pk/',
    syllabusUrl: 'https://www.fpsc.gov.pk/category/css-syllabus',
    syllabusTopics: ['English Essay', 'English Precis & Composition', 'General Science & Ability', 'Current Affairs', 'Pakistan Affairs', 'Islamic Studies or Comparative Religion', 'Optional subjects'],
    pastPaperYears: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016],
    repeatedTopics: ['Governance and institutions', 'Pakistan foreign policy', 'Economic reform', 'Climate change', 'Science and technology', 'Essay argument and structure'],
    dailyPlan: [{ label: 'Read and annotate one major topic', minutes: 30 }, { label: 'Create one essay outline', minutes: 20 }, { label: 'Practice precis or GSA', minutes: 25 }, { label: 'Revise current affairs notes', minutes: 15 }],
    announcements: [
      { title: 'FPSC official CSS syllabus', url: 'https://www.fpsc.gov.pk/category/css-syllabus', checkedOn: '2026-09-14', type: 'Syllabus' },
      { title: 'FPSC competitive examination notices', url: 'https://www.fpsc.gov.pk/', checkedOn: '2026-09-14', type: 'Announcement' },
    ],
  },
  {
    id: 'nts',
    examIds: ['nts'],
    title: 'NTS Preparation Room',
    subtitle: 'Admissions, scholarships and recruitment assessments',
    accent: 'amber',
    officialName: 'National Testing Service Pakistan',
    officialUrl: 'https://www.nts.org.pk/',
    syllabusUrl: 'https://www.nts.org.pk/',
    syllabusTopics: ['Verbal reasoning', 'Quantitative reasoning', 'Analytical reasoning', 'Subject knowledge', 'General knowledge', 'Computer fundamentals'],
    pastPaperYears: [2026, 2025, 2024, 2023, 2022, 2021, 2020],
    repeatedTopics: ['Analogies and vocabulary', 'Percentages and averages', 'Number series', 'Logical sequences', 'Data interpretation', 'Subject fundamentals'],
    dailyPlan: [{ label: 'Complete one reasoning drill', minutes: 15 }, { label: 'Solve 20 quantitative questions', minutes: 25 }, { label: 'Practice vocabulary', minutes: 10 }, { label: 'Take a timed mixed quiz', minutes: 20 }],
    announcements: [
      { title: 'NTS active tests, projects and candidate notices', url: 'https://www.nts.org.pk/', checkedOn: '2026-09-14', type: 'Announcement' },
      { title: 'Confirm the paper pattern on your NTS project page', url: 'https://www.nts.org.pk/', checkedOn: '2026-09-14', type: 'Syllabus' },
    ],
  },
  {
    id: 'boards',
    examIds: ['matric-board', 'federal-board-fbise', 'intermediate-fsc'],
    title: 'Matric & Intermediate Board Room',
    subtitle: 'SSC and HSSC preparation across Pakistani examination boards',
    accent: 'rose',
    officialName: 'Relevant Board / IBCC',
    officialUrl: 'https://ibcc.edu.pk/',
    syllabusUrl: 'https://ibcc.edu.pk/',
    syllabusTopics: ['English', 'Urdu or regional language', 'Mathematics', 'Physics', 'Chemistry', 'Biology or Computer Science', 'Pakistan Studies', 'Islamiat', 'Elective subjects'],
    pastPaperYears: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019],
    repeatedTopics: ['Definitions and short questions', 'Numerical problems', 'Diagrams and labelling', 'Grammar and translation', 'Long-answer concepts', 'Board-specific model-paper patterns'],
    dailyPlan: [{ label: 'Revise one textbook exercise', minutes: 25 }, { label: 'Solve short questions', minutes: 20 }, { label: 'Practice one long question', minutes: 20 }, { label: 'Check mistakes against the textbook', minutes: 10 }],
    announcements: [
      { title: 'IBCC official coordination and equivalence information', url: 'https://ibcc.edu.pk/', checkedOn: '2026-09-14', type: 'Announcement' },
      { title: 'Use your own board website for final syllabus and date sheet', url: 'https://ibcc.edu.pk/bise/', checkedOn: '2026-09-14', type: 'Schedule' },
    ],
  },
  {
    id: 'primary',
    examIds: ['primary-school'],
    title: 'Primary Classes 1–5 Learning Room',
    subtitle: 'Friendly daily learning for young Pakistani students',
    accent: 'cyan',
    officialName: 'National Curriculum Council Pakistan',
    officialUrl: 'https://ncc.gov.pk/',
    syllabusUrl: 'https://ncc.gov.pk/',
    syllabusTopics: ['English', 'Urdu or Sindhi', 'Mathematics', 'General Knowledge', 'Science', 'Islamiat', 'Computer studies', 'Arts & creativity'],
    pastPaperYears: [],
    repeatedTopics: ['Reading and phonics', 'Addition and subtraction', 'Shapes and measurement', 'Living things', 'Pakistan and community', 'Digital safety'],
    dailyPlan: [{ label: 'Read one short lesson', minutes: 10 }, { label: 'Answer 10 fun questions', minutes: 10 }, { label: 'Play one learning game', minutes: 10 }, { label: 'Complete a creative worksheet', minutes: 15 }],
    announcements: [
      { title: 'National Curriculum Council resources', url: 'https://ncc.gov.pk/', checkedOn: '2026-09-14', type: 'Syllabus' },
      { title: 'Parents: confirm textbooks with the child’s school or board', url: 'https://ncc.gov.pk/', checkedOn: '2026-09-14', type: 'Announcement' },
    ],
  },
];

export function getPreparationRoom(examId: string) {
  return PREPARATION_ROOMS.find(room => room.examIds.includes(examId));
}
