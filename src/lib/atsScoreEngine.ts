import { ResumeData } from '../types/resume';

export interface AtsCheckItem {
  id: string;
  category: 'contact' | 'summary' | 'experience' | 'skills' | 'education' | 'formatting';
  title: string;
  description: string;
  score: number;
  maxScore: number;
  passed: boolean;
  recommendation?: string;
}

export interface AtsAuditResult {
  totalScore: number; // 0 - 100
  grade: 'A+' | 'A' | 'B' | 'C' | 'D';
  gradeColor: string;
  summary: string;
  items: AtsCheckItem[];
  metricsPercentage: number;
  powerVerbsPercentage: number;
  wordCount: number;
  suggestedActionVerbs: string[];
}

export const COMMON_ATS_ACTION_VERBS = [
  'Accelerated', 'Administered', 'Advised', 'Analyzed', 'Automated', 
  'Collaborated', 'Conducted', 'Coordinated', 'Delivered', 'Deployed',
  'Designed', 'Developed', 'Engineered', 'Established', 'Executed',
  'Formulated', 'Generated', 'Implemented', 'Improved', 'Increased',
  'Initiated', 'Inspected', 'Instituted', 'Integrated', 'Led',
  'Managed', 'Maximized', 'Mentored', 'Monitored', 'Negotiated',
  'Optimized', 'Orchestrated', 'Organized', 'Oversaw', 'Prepared',
  'Processed', 'Programmed', 'Resolved', 'Restructured', 'Revitalized',
  'Spearheaded', 'Standardized', 'Streamlined', 'Supervised', 'Trained',
  'Transformed', 'Upgraded', 'Validated'
];

export function auditResumeAts(data: ResumeData): AtsAuditResult {
  const items: AtsCheckItem[] = [];

  // 1. Contact Information
  const hasName = !!data.fullName?.trim();
  const hasEmail = !!data.email?.trim() && data.email.includes('@');
  const hasPhone = !!data.phone?.trim() && data.phone.length >= 7;
  const hasLocation = !!data.city?.trim() || !!data.domicileDistrict?.trim();
  const hasTarget = !!data.targetHeadline?.trim();

  let contactScore = 0;
  if (hasName) contactScore += 3;
  if (hasEmail) contactScore += 4;
  if (hasPhone) contactScore += 4;
  if (hasLocation) contactScore += 2;
  if (hasTarget) contactScore += 2;

  items.push({
    id: 'contact_info',
    category: 'contact',
    title: 'Essential Contact & Identification',
    description: 'Recruiters and automated parsers need clean, parseable contact channels.',
    score: contactScore,
    maxScore: 15,
    passed: contactScore >= 13,
    recommendation: !hasEmail ? 'Add a valid email address.' : !hasPhone ? 'Include a direct contact phone number.' : !hasTarget ? 'Add a target job headline (e.g. Junior Clerk BPS-11).' : undefined
  });

  // 2. Professional Summary
  const summaryLength = (data.professionalSummary || '').trim().split(/\s+/).filter(Boolean).length;
  let summaryScore = 0;
  let summaryRec: string | undefined;

  if (summaryLength >= 25 && summaryLength <= 120) {
    summaryScore = 15;
  } else if (summaryLength > 0 && summaryLength < 25) {
    summaryScore = 8;
    summaryRec = 'Expand your summary to 2-3 sentences (30-80 words) highlighting accomplishments.';
  } else if (summaryLength > 120) {
    summaryScore = 10;
    summaryRec = 'Summary is slightly long. ATS algorithms favor concise 30-75 word summaries.';
  } else {
    summaryScore = 0;
    summaryRec = 'Write a 2-3 sentence summary or use AI Summary Generator.';
  }

  items.push({
    id: 'summary_quality',
    category: 'summary',
    title: 'Professional Profile & Impact Summary',
    description: 'High-density elevator pitch demonstrating your primary value proposition.',
    score: summaryScore,
    maxScore: 15,
    passed: summaryScore >= 12,
    recommendation: summaryRec
  });

  // 3. Work Experience & Bullet Metrics
  const experienceCount = (data.experience || []).length;
  const allBullets = (data.experience || []).flatMap(e => e.responsibilities || []).filter(b => b.trim().length > 0);
  
  // Check quantifiable metrics (% , numbers, currency, ratios)
  const bulletsWithMetrics = allBullets.filter(b => /[\d%+$]/.test(b));
  const metricsPercentage = allBullets.length > 0 ? Math.round((bulletsWithMetrics.length / allBullets.length) * 100) : 0;

  // Check action verbs
  const bulletsWithVerbs = allBullets.filter(b => {
    const firstWord = b.trim().split(/\s+/)[0]?.replace(/[^a-zA-Z]/g, '');
    return COMMON_ATS_ACTION_VERBS.some(v => v.toLowerCase() === firstWord?.toLowerCase());
  });
  const powerVerbsPercentage = allBullets.length > 0 ? Math.round((bulletsWithVerbs.length / allBullets.length) * 100) : 0;

  let expScore = 0;
  if (experienceCount > 0) expScore += 8;
  if (allBullets.length >= 3) expScore += 7;
  if (metricsPercentage >= 40) expScore += 5;
  if (powerVerbsPercentage >= 50) expScore += 5;

  let expRec: string | undefined;
  if (experienceCount === 0) {
    expRec = 'Add at least 1 professional work, internship, or academic project experience.';
  } else if (metricsPercentage < 30) {
    expRec = 'Incorporate measurable impact (e.g. "processed 150+ files daily", "improved accuracy by 25%").';
  } else if (powerVerbsPercentage < 40) {
    expRec = 'Start experience bullets with strong past-tense action verbs (e.g. Spearheaded, Implemented).';
  }

  items.push({
    id: 'experience_metrics',
    category: 'experience',
    title: 'Quantified Experience & Power Verbs',
    description: 'Google XYZ formula: Accomplished [X], measured by [Y], by doing [Z].',
    score: expScore,
    maxScore: 25,
    passed: expScore >= 20,
    recommendation: expRec
  });

  // 4. Skills & Competencies
  const skillCount = (data.skills || []).length;
  let skillScore = 0;
  if (skillCount >= 8) skillScore = 20;
  else if (skillCount >= 5) skillScore = 15;
  else if (skillCount >= 2) skillScore = 10;
  else skillScore = 4;

  items.push({
    id: 'skills_inventory',
    category: 'skills',
    title: 'Core Competencies & Keyword Density',
    description: 'ATS parsers scan for 6 to 12 relevant hard, technical, and domain skills.',
    score: skillScore,
    maxScore: 20,
    passed: skillScore >= 15,
    recommendation: skillCount < 6 ? `You currently have ${skillCount} skills. Add at least 6 relevant skills for keyword matching.` : undefined
  });

  // 5. Education History
  const eduCount = (data.education || []).length;
  const hasDetails = (data.education || []).every(e => e.degreeTitle && e.instituteOrBoard && e.passingYear);
  let eduScore = 0;
  if (eduCount >= 1 && hasDetails) eduScore = 15;
  else if (eduCount >= 1) eduScore = 10;
  else eduScore = 0;

  items.push({
    id: 'education_records',
    category: 'education',
    title: 'Education & Academic Verification',
    description: 'Degrees, boards/universities, passing years, and academic divisions/CGPA.',
    score: eduScore,
    maxScore: 15,
    passed: eduScore >= 12,
    recommendation: eduCount === 0 ? 'Add your highest academic qualification (Matric, Inter, Bachelor, or Master).' : undefined
  });

  // 6. Formatting & Layout Compatibility
  let formatScore = 10;
  if (data.template === 'modern-ats' || data.template === 'fortune-500' || data.template === 'tech-compact') {
    formatScore = 10;
  } else if (data.template === 'sts-govt' || data.template === 'executive' || data.template === 'minimal') {
    formatScore = 9;
  }

  items.push({
    id: 'ats_formatting',
    category: 'formatting',
    title: 'Machine-Readable Document Flow',
    description: 'Single-column parseable layout free of corrupting tables or graphics.',
    score: formatScore,
    maxScore: 10,
    passed: true
  });

  const totalScore = items.reduce((acc, i) => acc + i.score, 0);

  let grade: 'A+' | 'A' | 'B' | 'C' | 'D' = 'D';
  let gradeColor = 'text-rose-600 bg-rose-50 border-rose-200';
  let summary = 'Needs optimization before submitting to ATS screening portals.';

  if (totalScore >= 90) {
    grade = 'A+';
    gradeColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
    summary = 'Outstanding ATS compatibility! Optimized for high-volume automated parsers.';
  } else if (totalScore >= 80) {
    grade = 'A';
    gradeColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
    summary = 'Strong ATS compliance. Likely to rank in the top quartile of applicant pools.';
  } else if (totalScore >= 70) {
    grade = 'B';
    gradeColor = 'text-blue-600 bg-blue-50 border-blue-200';
    summary = 'Good foundation. A few metric additions will push this into top tier.';
  } else if (totalScore >= 55) {
    grade = 'C';
    gradeColor = 'text-amber-600 bg-amber-50 border-amber-200';
    summary = 'Fair. Missing key quantifiable bullet points or core skills.';
  }

  // Count total words in resume
  const textCorpus = [
    data.fullName,
    data.targetHeadline,
    data.professionalSummary,
    ...allBullets,
    ...data.skills.map(s => s.name),
    ...data.education.map(e => `${e.degreeTitle} ${e.instituteOrBoard}`)
  ].join(' ');
  const wordCount = textCorpus.split(/\s+/).filter(Boolean).length;

  return {
    totalScore,
    grade,
    gradeColor,
    summary,
    items,
    metricsPercentage,
    powerVerbsPercentage,
    wordCount,
    suggestedActionVerbs: COMMON_ATS_ACTION_VERBS.slice(0, 12),
  };
}

export interface KeywordMatchResult {
  matchRate: number; // 0 - 100
  matchedKeywords: string[];
  missingKeywords: string[];
  jobWordCount: number;
}

export function scanJobDescriptionKeywords(resume: ResumeData, jobDescriptionText: string): KeywordMatchResult {
  if (!jobDescriptionText || jobDescriptionText.trim().length < 10) {
    return { matchRate: 0, matchedKeywords: [], missingKeywords: [], jobWordCount: 0 };
  }

  // Extract clean text from resume
  const resumeText = [
    resume.fullName,
    resume.targetHeadline,
    resume.professionalSummary,
    ...resume.skills.map(s => s.name),
    ...resume.experience.flatMap(e => [e.designation, e.organization, ...(e.responsibilities || [])]),
    ...resume.education.map(e => `${e.degreeTitle} ${e.majorSubjects || ''}`),
    ...(resume.projects || []).flatMap(p => [p.title, p.techStack || '', ...(p.highlights || [])]),
    ...resume.certifications.map(c => c.title)
  ].join(' ').toLowerCase();

  // Common stop words to exclude
  const stopWords = new Set([
    'and', 'the', 'for', 'with', 'that', 'this', 'from', 'have', 'will', 'your',
    'must', 'should', 'about', 'more', 'their', 'such', 'into', 'than', 'them',
    'been', 'some', 'could', 'other', 'only', 'also', 'over', 'these', 'after',
    'most', 'where', 'through', 'being', 'between', 'under', 'during', 'before',
    'work', 'candidate', 'apply', 'year', 'years', 'required', 'job', 'position',
    'responsibilities', 'qualifications', 'duties', 'looking', 'skills', 'experience'
  ]);

  // Extract candidate keywords/phrases from job description
  const rawWords = jobDescriptionText
    .toLowerCase()
    .replace(/[^\w\s\-\+\#]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3 && !stopWords.has(w) && !/^\d+$/.test(w));

  // Count frequencies
  const freqMap: Record<string, number> = {};
  for (const word of rawWords) {
    freqMap[word] = (freqMap[word] || 0) + 1;
  }

  // Get top 25 high-frequency keywords
  const sortedKeywords = Object.entries(freqMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 25)
    .map(([w]) => w);

  const matchedKeywords: string[] = [];
  const missingKeywords: string[] = [];

  for (const kw of sortedKeywords) {
    // Check if kw exists as whole word or substring in resume
    const regex = new RegExp(`\\b${kw}`, 'i');
    if (regex.test(resumeText)) {
      matchedKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  }

  const matchRate = sortedKeywords.length > 0 
    ? Math.round((matchedKeywords.length / sortedKeywords.length) * 100) 
    : 0;

  return {
    matchRate,
    matchedKeywords,
    missingKeywords,
    jobWordCount: rawWords.length
  };
}
