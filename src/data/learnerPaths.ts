export type LearnerStage = 'kids' | 'school' | 'college' | 'university' | 'jobs' | 'competitive' | 'general';

export interface LearningPath {
  id: LearnerStage;
  label: string;
  icon: string;
  subtitle: string;
  options: string[];
  accent: string;
}

export const LEARNING_PATHS: LearningPath[] = [
  { id: 'kids', label: 'Kids', icon: '👧', subtitle: 'Class 1–5', options: ['Primary Learning', 'General Knowledge', 'English & Urdu/Sindhi', 'Mathematics', 'Science', 'Islamiat', 'Computer'], accent: 'from-pink-500 to-rose-500' },
  { id: 'school', label: 'School', icon: '🏫', subtitle: 'Class 6–10 & Boards', options: ['Middle School', 'Matric', 'Board Preparation', 'Class 6–8', 'Class 9–10'], accent: 'from-sky-500 to-blue-600' },
  { id: 'college', label: 'College', icon: '📚', subtitle: 'FA, FSc, ICS & ICom', options: ['Intermediate', 'FA / FSc', 'ICS / ICom', 'Entry Tests'], accent: 'from-violet-500 to-purple-600' },
  { id: 'university', label: 'University', icon: '🎓', subtitle: 'Degrees & admissions', options: ['University Exams', 'Entry Tests', 'Scholarships', 'Professional Tests'], accent: 'from-indigo-500 to-blue-700' },
  { id: 'jobs', label: 'Jobs', icon: '💼', subtitle: 'Recruitment tests', options: ['STS', 'NTS', 'PTS', 'OTS', 'CTS', 'ETEA', 'FPSC Recruitment', 'Provincial Recruitment'], accent: 'from-amber-500 to-orange-600' },
  { id: 'competitive', label: 'Competitive', icon: '🏆', subtitle: 'Federal & provincial', options: ['CSS', 'PMS', 'SPSC', 'PPSC', 'KPPSC', 'BPSC', 'AJKPSC'], accent: 'from-emerald-500 to-teal-600' },
  { id: 'general', label: 'General Skills', icon: '🧠', subtitle: 'Build core ability', options: ['IQ', 'General Knowledge', 'English', 'Mathematics', 'Science', 'Computer'], accent: 'from-cyan-500 to-teal-600' },
];

export const TARGET_OPTIONS = LEARNING_PATHS.flatMap(path =>
  path.options.map(option => ({ value: `${path.label}: ${option}`, label: `${path.icon} ${path.label} — ${option}` }))
);

export function getLearnerStage(targetExam: string): LearnerStage {
  const target = targetExam.toLowerCase();
  if (/kids|primary|class 1|class 2|class 3|class 4|class 5/.test(target)) return 'kids';
  if (/school|middle|matric|board|class 6|class 7|class 8|class 9|class 10/.test(target)) return 'school';
  if (/college|intermediate|fsc|fa |ics|icom/.test(target)) return 'college';
  if (/university|scholarship|professional/.test(target)) return 'university';
  if (/css|pms|spsc|ppsc|kppsc|bpsc|ajkpsc|competitive/.test(target)) return 'competitive';
  if (/general skills|iq|general knowledge/.test(target)) return 'general';
  return 'jobs';
}
