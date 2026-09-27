export type WritingSession = { answer: string; deadline: number | null; submitted: boolean };
export const remainingSeconds = (deadline: number, now = Date.now()) => Math.max(0, Math.ceil((deadline - now) / 1000));
export function readWritingSession(value: string | null, legacy = ''): WritingSession {
  try {
    const item = JSON.parse(value || 'null');
    if (item && typeof item.answer === 'string' && (item.deadline === null || (typeof item.deadline === 'number' && Number.isFinite(item.deadline))) && typeof item.submitted === 'boolean') return item;
  } catch { /* Recover the previous plain-text draft. */ }
  return { answer: legacy, deadline: null, submitted: false };
}
export type WritingFeedback = { criteria: { feedback: string; missingPoints: string[] }[]; nextSteps: string[] };
export function validateWritingFeedback(value: unknown, count: number): WritingFeedback {
  const v = value as WritingFeedback;
  const strings = (a: unknown): a is string[] => Array.isArray(a) && a.length <= 8 && a.every(s => typeof s === 'string' && s.length <= 1500);
  if (!v || !Array.isArray(v.criteria) || v.criteria.length !== count || !strings(v.nextSteps) || !v.criteria.every(c => c && typeof c.feedback === 'string' && c.feedback.length <= 2000 && strings(c.missingPoints))) throw new Error('Incomplete feedback. Please retry.');
  return v;
}
