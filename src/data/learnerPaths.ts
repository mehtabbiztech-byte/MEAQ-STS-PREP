export type LearnerStage = 'kids' | 'middle' | 'matric' | 'school' | 'college' | 'intermediate' | 'entry-test' | 'university' | 'jobs' | 'competitive' | 'general';

export interface LearningPath {
  id: LearnerStage;
  label: string;
  icon: string;
  subtitle: string;
  options: string[];
  accent: string;
}

export const LEARNING_PATHS: LearningPath[] = [
  { 
    id: 'kids', 
    label: 'Kids', 
    icon: '👧', 
    subtitle: 'Class 1–5', 
    options: ['Primary Learning', 'English Adventures', 'Mathematics', 'Science', 'Islamiat', 'Computer', 'World Knowledge', 'Pakistan Knowledge'], 
    accent: 'from-pink-500 to-rose-500' 
  },
  { 
    id: 'middle', 
    label: 'Middle School', 
    icon: '🎒', 
    subtitle: 'Class 6–8', 
    options: [
      'Class 6 General Science', 
      'Class 7 General Science', 
      'Class 8 General Science', 
      'Mathematics (Pre-Algebra & Geometry)', 
      'English Grammar & Reading', 
      'Urdu (اردو قواعد و ادب)', 
      'Sindhi (سنڌي وياڪرڻ)', 
      'Social Studies (History & Geography)', 
      'Islamiat & Ethics (اسلامیات)', 
      'Computer Education & ICT', 
      'Arabic Language (عربی)'
    ], 
    accent: 'from-amber-500 to-orange-600' 
  },
  { 
    id: 'matric', 
    label: 'Matric / SSC', 
    icon: '🏫', 
    subtitle: 'Class 9th & 10th', 
    options: [
      'Physics (9th & 10th)', 
      'Chemistry (9th & 10th)', 
      'Biology (9th & 10th)', 
      'Computer Science (9th & 10th)', 
      'Mathematics (Science Group)', 
      'General Science (Arts Group)', 
      'General Mathematics (Arts Group)', 
      'English Compulsory', 
      'Urdu Compulsory (اردو لازمی)', 
      'Pakistan Studies (مطالعہ پاکستان)', 
      'Islamiat & Tarjumat-ul-Quran', 
      'Sindhi Compulsory / Salees', 
      'FBISE & Provincial Boards'
    ], 
    accent: 'from-sky-500 to-blue-600' 
  },
  { 
    id: 'college', 
    label: '1st & 2nd Year', 
    icon: '📚', 
    subtitle: 'HSSC / FSc, ICS, ICom & FA', 
    options: [
      'FSc Pre-Medical (1st & 2nd Year)', 
      'FSc Pre-Engineering (1st & 2nd Year)', 
      'ICS Computer Science (1st & 2nd Year)', 
      'I.Com Commerce (1st & 2nd Year)', 
      'FA Humanities & Arts', 
      'Physics (11th & 12th)', 
      'Chemistry (11th & 12th)', 
      'Biology (11th & 12th)', 
      'Mathematics (11th & 12th)', 
      'Computer Science (11th & 12th)', 
      'Principles of Accounting', 
      'Principles of Economics', 
      'Business Mathematics & Statistics', 
      'English & Urdu Compulsory', 
      'Islamiat & Pakistan Studies'
    ], 
    accent: 'from-violet-500 to-purple-600' 
  },
  { 
    id: 'entry-test', 
    label: 'Entry Test Prep', 
    icon: '🎯', 
    subtitle: 'MDCAT, ECAT, NET, LAT & USAT', 
    options: [
      'MDCAT (PMDC Medical & Dental)', 
      'ECAT (UET Engineering)', 
      'NUST NET (Engineering & Computing)', 
      'NUMS (Medical Cadet)', 
      'FAST & GIKI Entry Tests', 
      'HEC USAT & NTS NAT', 
      'LAT (Law Admission Test)', 
      'Logical & Analytical Reasoning', 
      'Speed Math & Shortcut Formulas', 
      'Negative Marking Mock Drills'
    ], 
    accent: 'from-teal-500 to-emerald-600' 
  },
  { 
    id: 'university', 
    label: 'University', 
    icon: '🎓', 
    subtitle: 'Degrees & scholarships', 
    options: ['University Exams', 'GAT General / Subject', 'HEC Scholarships', 'Professional Licensing'], 
    accent: 'from-indigo-500 to-blue-700' 
  },
  { 
    id: 'jobs', 
    label: 'Jobs', 
    icon: '💼', 
    subtitle: 'Recruitment tests', 
    options: ['STS', 'NTS', 'PTS', 'OTS', 'CTS', 'ETEA', 'FPSC Recruitment', 'Provincial Recruitment'], 
    accent: 'from-amber-500 to-orange-600' 
  },
  { 
    id: 'competitive', 
    label: 'Competitive', 
    icon: '🏆', 
    subtitle: 'Federal & provincial', 
    options: ['CSS', 'PMS', 'SPSC', 'PPSC', 'KPPSC', 'BPSC', 'AJKPSC'], 
    accent: 'from-emerald-500 to-teal-600' 
  },
  { 
    id: 'general', 
    label: 'General Skills', 
    icon: '🧠', 
    subtitle: 'Build core ability', 
    options: ['IQ', 'General Knowledge', 'English', 'Mathematics', 'Science', 'Computer'], 
    accent: 'from-cyan-500 to-teal-600' 
  },
];

export const TARGET_OPTIONS = LEARNING_PATHS.flatMap(path =>
  path.options.map(option => ({ value: `${path.label}: ${option}`, label: `${path.icon} ${path.label} — ${option}` }))
);

export function getLearnerStage(targetExam: string): LearnerStage {
  const target = targetExam.toLowerCase();
  if (/kids|primary|class 1|class 2|class 3|class 4|class 5/.test(target)) return 'kids';
  if (/middle|class 6|class 7|class 8|grade 6|grade 7|grade 8/.test(target)) return 'middle';
  if (/matric|ssc|class 9|class 10|9th|10th|grade 9|grade 10|board/.test(target)) return 'matric';
  if (/school/.test(target)) return 'matric';
  if (/mdcat|ecat|nums|nust|net|fast|giki|lat|usat|nat|entry test|admission test/.test(target)) return 'entry-test';
  if (/college|intermediate|1st year|2nd year|11th|12th|fsc|fa |ics|icom|hssc/.test(target)) return 'college';
  if (/university|scholarship|professional|gat/.test(target)) return 'university';
  if (/css|pms|spsc|ppsc|kppsc|bpsc|ajkpsc|competitive/.test(target)) return 'competitive';
  if (/general skills|iq|general knowledge/.test(target)) return 'general';
  return 'jobs';
}
