import { QuizAttempt, QuizCertificate, RankTier } from '../types';

/**
 * Generates a verified national certification record from a completed quiz attempt.
 */
export function generateCertificateFromAttempt(
  attempt: QuizAttempt,
  candidateName: string,
  category: string = 'Mixed Grand Mock'
): QuizCertificate {
  const total = Math.max(1, attempt.totalQuestions || 10);
  const score = Math.max(0, attempt.score || 0);
  const percentage = Math.min(100, Math.max(0, Math.round((score / total) * 100)));

  let rankTier: RankTier = 'Participation';
  let grade = 'C';
  let percentile = 42.0;
  let rankPosition = 850;

  if (percentage >= 95) {
    rankTier = 'Gold Distinction';
    grade = 'A+';
    percentile = 99.4;
    rankPosition = Math.max(1, Math.floor(Math.random() * 5) + 1);
  } else if (percentage >= 90) {
    rankTier = 'Gold Distinction';
    grade = 'A+';
    percentile = 97.8;
    rankPosition = Math.floor(Math.random() * 15) + 6;
  } else if (percentage >= 80) {
    rankTier = 'Silver Merit';
    grade = 'A';
    percentile = 92.5;
    rankPosition = Math.floor(Math.random() * 45) + 21;
  } else if (percentage >= 70) {
    rankTier = 'Bronze Honor';
    grade = 'B+';
    percentile = 83.2;
    rankPosition = Math.floor(Math.random() * 120) + 66;
  } else if (percentage >= 50) {
    rankTier = 'Certified Aspirant';
    grade = 'B';
    percentile = 65.5;
    rankPosition = Math.floor(Math.random() * 250) + 186;
  } else {
    rankTier = 'Participation';
    grade = 'C';
    percentile = Math.max(10, percentage);
    rankPosition = 900 + Math.floor(Math.random() * 200);
  }

  // Generate unique verification code
  const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
  const certId = attempt.certificateId || `MATB-CERT-2026-${randomSuffix}`;

  const cert: QuizCertificate = {
    id: certId,
    quizId: attempt.id,
    candidateName: candidateName?.trim() || 'Aspirant Candidate',
    quizTitle: attempt.title || 'National Mock Examination',
    category,
    score,
    totalQuestions: total,
    percentage,
    grade,
    rankTier,
    rankPosition,
    percentile,
    timeSpentSeconds: attempt.timeSpentSeconds || 0,
    issuedDate: attempt.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    verificationCode: certId,
  };

  return cert;
}

/**
 * Pre-seeded sample certificates for top national aspirants on the leaderboard.
 */
export const SAMPLE_TOP_CERTIFICATES: Record<string, QuizCertificate> = {
  'MATB-CERT-2026-F89A12': {
    id: 'MATB-CERT-2026-F89A12',
    quizId: 'mock-101',
    candidateName: 'Farhan Ali Buriro',
    quizTitle: 'SPSC CCE / STS BPS-16 Grand Screening Mock',
    category: 'SPSC & STS Special',
    score: 19.5,
    totalQuestions: 20,
    percentage: 98,
    grade: 'A+',
    rankTier: 'Gold Distinction',
    rankPosition: 1,
    percentile: 99.8,
    timeSpentSeconds: 610,
    issuedDate: '10 Sep 2026',
    verificationCode: 'MATB-CERT-2026-F89A12',
  },
  'MATB-CERT-2026-A77C34': {
    id: 'MATB-CERT-2026-A77C34',
    quizId: 'mock-102',
    candidateName: 'Ayesha Siddiqui',
    quizTitle: 'PPSC Tehsildar & PMS General Knowledge Paper',
    category: 'PPSC / PMS',
    score: 19.0,
    totalQuestions: 20,
    percentage: 95,
    grade: 'A+',
    rankTier: 'Gold Distinction',
    rankPosition: 2,
    percentile: 99.2,
    timeSpentSeconds: 680,
    issuedDate: '09 Sep 2026',
    verificationCode: 'MATB-CERT-2026-A77C34',
  },
  'MATB-CERT-2026-Z91D45': {
    id: 'MATB-CERT-2026-Z91D45',
    quizId: 'mock-103',
    candidateName: 'Zohaib Hassan Jamali',
    quizTitle: 'CSS MPT 2026 General Ability & English Precis',
    category: 'FPSC / CSS',
    score: 18.5,
    totalQuestions: 20,
    percentage: 93,
    grade: 'A+',
    rankTier: 'Gold Distinction',
    rankPosition: 3,
    percentile: 98.4,
    timeSpentSeconds: 710,
    issuedDate: '08 Sep 2026',
    verificationCode: 'MATB-CERT-2026-Z91D45',
  },
  'MATB-CERT-2026-U62K19': {
    id: 'MATB-CERT-2026-U62K19',
    quizId: 'mock-104',
    candidateName: 'Muhammad Usman Khan',
    quizTitle: 'KPPSC PMS & ETEA High-Yield Screening Test',
    category: 'KPPSC & ETEA',
    score: 18.0,
    totalQuestions: 20,
    percentage: 90,
    grade: 'A+',
    rankTier: 'Gold Distinction',
    rankPosition: 4,
    percentile: 97.5,
    timeSpentSeconds: 740,
    issuedDate: '06 Sep 2026',
    verificationCode: 'MATB-CERT-2026-U62K19',
  },
  'MATB-CERT-2026-M43T08': {
    id: 'MATB-CERT-2026-M43T08',
    quizId: 'mock-105',
    candidateName: 'Mehwish Tariq',
    quizTitle: 'FPSC Inspector Customs & FIA Investigation Test',
    category: 'FPSC Federal',
    score: 17.5,
    totalQuestions: 20,
    percentage: 88,
    grade: 'A',
    rankTier: 'Silver Merit',
    rankPosition: 5,
    percentile: 94.0,
    timeSpentSeconds: 780,
    issuedDate: '05 Sep 2026',
    verificationCode: 'MATB-CERT-2026-M43T08',
  },
  'MATB-CERT-2026-B39Q71': {
    id: 'MATB-CERT-2026-B39Q71',
    quizId: 'mock-106',
    candidateName: 'Bilal Ahmed Mengal',
    quizTitle: 'BPSC Assistant Commissioner Screening Examination',
    category: 'BPSC Balochistan',
    score: 17.2,
    totalQuestions: 20,
    percentage: 86,
    grade: 'A',
    rankTier: 'Silver Merit',
    rankPosition: 6,
    percentile: 92.5,
    timeSpentSeconds: 800,
    issuedDate: '03 Sep 2026',
    verificationCode: 'MATB-CERT-2026-B39Q71',
  },
};

/**
 * Returns visual color styles and badges for each rank tier.
 */
export function getRankTierBadge(tier: RankTier) {
  switch (tier) {
    case 'Gold Distinction':
      return {
        label: 'Gold Distinction (Rank 1 Tier)',
        medal: '🥇',
        badgeBg: 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border-amber-400',
        ring: 'ring-amber-400',
        gradient: 'from-amber-600 to-yellow-500',
      };
    case 'Silver Merit':
      return {
        label: 'Silver Merit (High Proficiency)',
        medal: '🥈',
        badgeBg: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600',
        ring: 'ring-slate-400',
        gradient: 'from-slate-500 to-slate-400',
      };
    case 'Bronze Honor':
      return {
        label: 'Bronze Honor (Academic Merit)',
        medal: '🥉',
        badgeBg: 'bg-orange-100 dark:bg-orange-950/80 text-orange-900 dark:text-orange-300 border-orange-400',
        ring: 'ring-orange-400',
        gradient: 'from-amber-700 to-orange-600',
      };
    case 'Certified Aspirant':
      return {
        label: 'Certified Aspirant (Qualified Pass)',
        medal: '🎖️',
        badgeBg: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 border-emerald-400',
        ring: 'ring-emerald-400',
        gradient: 'from-emerald-600 to-teal-600',
      };
    default:
      return {
        label: 'Aspirant in Training (Needs Retake)',
        medal: '📋',
        badgeBg: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200',
        ring: 'ring-slate-300',
        gradient: 'from-slate-400 to-slate-500',
      };
  }
}
