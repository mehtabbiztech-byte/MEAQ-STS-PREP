import type { MCQ } from '../types';
export function scorePaper(questions: MCQ[], answers: Record<string, number>) {
  let correct = 0, attempted = 0;
  const subjects: Record<string, { correct: number; total: number }> = {};
  const incorrectQuestions: { mcq: MCQ; selectedIndex: number }[] = [];
  for (const mcq of questions) {
    const selected = answers[mcq.id];
    const valid = Number.isInteger(selected) && selected >= 0 && selected < mcq.options.length;
    const right = valid && selected === mcq.correctIndex;
    if (valid) attempted++;
    if (right) correct++;
    else incorrectQuestions.push({ mcq, selectedIndex: valid ? selected : -1 });
    const subject = subjects[mcq.category] ??= { correct: 0, total: 0 };
    subject.total++;
    if (right) subject.correct++;
  }
  return { correct, attempted, skipped: questions.length - attempted,
    accuracy: attempted ? Math.round(correct / attempted * 100) : 0,
    percentage: questions.length ? Math.round(correct / questions.length * 100) : 0,
    subjects, incorrectQuestions };
}
export const practiceMinutes = (count: number) => Math.max(1, Math.ceil(count * 0.9));
