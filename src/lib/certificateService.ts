import { QuizAttempt, QuizCertificate, RankTier } from '../types';

const tierForScore = (percentage: number): { rankTier: RankTier; grade: string } => {
  if (percentage >= 90) return { rankTier: 'Gold Distinction', grade: 'A+' };
  if (percentage >= 80) return { rankTier: 'Silver Merit', grade: 'A' };
  if (percentage >= 70) return { rankTier: 'Bronze Honor', grade: 'B+' };
  if (percentage >= 50) return { rankTier: 'Certified Aspirant', grade: 'B' };
  return { rankTier: 'Participation', grade: 'C' };
};

/** Generates a practice-completion record without claiming a national rank. */
export function generateCertificateFromAttempt(
  attempt: QuizAttempt,
  candidateName: string,
  category: string = 'Mixed Practice Mock'
): QuizCertificate {
  const total = Math.max(1, attempt.totalQuestions || 10);
  const score = Math.min(total, Math.max(0, Number(attempt.score) || 0));
  const percentage = Math.min(100, Math.max(0, Math.round((score / total) * 100)));
  const { rankTier, grade } = tierForScore(percentage);
  const stableSeed = `${attempt.id}:${attempt.date}:${score}:${total}`;
  let hash = 2166136261;
  for (const char of stableSeed) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  const verificationCode = attempt.certificateId || `MEQSA-PRACTICE-${Math.abs(hash >>> 0).toString(36).toUpperCase()}`;

  return {
    id: verificationCode,
    quizId: attempt.id,
    candidateName: candidateName?.trim() || 'Learner',
    quizTitle: attempt.title || 'Practice Examination',
    category,
    score,
    totalQuestions: total,
    percentage,
    grade,
    rankTier,
    rankPosition: 0,
    percentile: percentage,
    timeSpentSeconds: Math.max(0, attempt.timeSpentSeconds || 0),
    issuedDate: attempt.date || new Date().toLocaleDateString('en-GB'),
    verificationCode,
  };
}

export function getRankTierBadge(tier: RankTier) {
  switch (tier) {
    case 'Gold Distinction': return { label: 'Gold practice distinction', medal: '🥇', badgeBg: 'bg-amber-100 text-amber-900 border-amber-400', ring: 'ring-amber-400', gradient: 'from-amber-600 to-yellow-500' };
    case 'Silver Merit': return { label: 'Silver practice merit', medal: '🥈', badgeBg: 'bg-slate-100 text-slate-800 border-slate-300', ring: 'ring-slate-400', gradient: 'from-slate-500 to-slate-400' };
    case 'Bronze Honor': return { label: 'Bronze practice honor', medal: '🥉', badgeBg: 'bg-orange-100 text-orange-900 border-orange-400', ring: 'ring-orange-400', gradient: 'from-amber-700 to-orange-600' };
    case 'Certified Aspirant': return { label: 'Practice pass', medal: '🎖️', badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-400', ring: 'ring-emerald-400', gradient: 'from-emerald-600 to-teal-600' };
    default: return { label: 'Practice participation', medal: '📘', badgeBg: 'bg-blue-100 text-blue-900 border-blue-300', ring: 'ring-blue-400', gradient: 'from-blue-600 to-indigo-600' };
  }
}
