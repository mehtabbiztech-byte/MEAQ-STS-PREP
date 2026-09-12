export type ThemeStyle = 'emerald' | 'sapphire' | 'aurora' | 'sunset';

export type NavigationTab = 
  | 'home' 
  | 'mcqs' 
  | 'quiz' 
  | 'past-papers' 
  | 'current-affairs' 
  | 'exams' 
  | 'jobs' 
  | 'study-notes' 
  | 'rankings' 
  | 'about'
  | 'bookmarks'
  | 'mistakes';

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
  subtopic?: string;
  examTags?: string[];
  year?: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  viewsCount?: number;
  submittedBy?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  totalMcqs: number;
  subtopics: string[];
  featured?: boolean;
}

export interface ExamInfo {
  id: string;
  name: string;
  shortName: string;
  fullName: string;
  conductedBy: string;
  description: string;
  eligibility: string;
  ageLimit: string;
  screeningStructure: string;
  syllabus: {
    section: string;
    weightage?: string;
    topics: string[];
  }[];
  subjects: string[];
  pastPapersCount: number;
  mockTestsCount: number;
  resources: {
    title: string;
    type: 'Guide' | 'Book' | 'Syllabus PDF' | 'Official Link';
    url?: string;
    description: string;
  }[];
}

export interface PastPaper {
  id: string;
  title: string;
  exam: string;
  conductedBy: string;
  year: number;
  postName: string;
  bps: string;
  totalQuestions: number;
  solvedDate?: string;
  mcqs: MCQ[];
}

export interface JobAlert {
  id: string;
  title: string;
  department: string;
  agency: string;
  commission?: string;
  location: string;
  bps: string;
  postsCount: number;
  vacancies?: number;
  lastDate: string;
  eligibility: string;
  qualification?: string;
  examCategory?: string;
  advertisementNo: string;
  status: 'Active' | 'Closing Soon' | 'Announced';
}

export interface StudyNote {
  id: string;
  title: string;
  subject: string;
  category?: string;
  readTime: string;
  keyPoints: string[];
  summary: string;
  frequentlyAsked: string[];
  tags?: string[];
}

export interface StudyLesson {
  id: string;
  title: string;
  audience: 'kids' | 'advanced';
  readTime: string;
  explanation: string;
  examples: string[];
  importantPoints: string[];
  images?: { src: string; alt: string; caption?: string }[];
  tables?: { title: string; headers: string[]; rows: string[][] }[];
  formulas?: string[];
  mcqs: MCQ[];
  practice: { prompt: string; answer: string }[];
  references?: { title: string; url: string }[];
  relatedQuestionIds: string[];
}

export interface StudySubject {
  id: string;
  title: string;
  chapters: { id: string; title: string; topics: {
    id: string; title: string; lessons: StudyLesson[];
  }[] }[];
}

export interface RankingUser {
  id: string;
  name: string;
  avatar: string;
  city: string;
  province: string;
  points: number;
  quizzesTaken: number;
  accuracyRate: number;
  streakDays: number;
  rank: number;
  badge: string;
}

export interface CurrentAffairItem {
  id: string;
  title: string;
  category: 'Pakistan' | 'International';
  scope?: 'Pakistan' | 'International';
  date: string;
  monthYear?: string;
  summary: string;
  importance: 'High' | 'Medium';
  bullets?: string[];
  tags?: string[];
  relatedMcq?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface QuizAttempt {
  id: string;
  date: string;
  title: string;
  totalQuestions: number;
  score: number;
  timeSpentSeconds: number;
  incorrectQuestions: {
    mcq: MCQ;
    selectedIndex: number;
  }[];
}

export interface UserProfile {
  name: string;
  email: string;
  targetExam: string;
  province: string;
  points: number;
  streakDays: number;
  bookmarks: string[]; // MCQ IDs
  mistakeIds: string[]; // MCQ IDs
  quizHistory: QuizAttempt[];
}
